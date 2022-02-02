import {Component, OnInit, LOCALE_ID, Inject,} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {NavController, ToastController, AlertController, ModalController, Platform} from '@ionic/angular';
import {ActionSheet, ActionSheetOptions} from '@ionic-native/action-sheet/ngx';
import {PhotoLibrary} from '@ionic-native/photo-library/ngx';
//import { formatDate } from '@angular/common';
import {Storage} from '@ionic/storage';
import {Camera, CameraOptions} from '@ionic-native/camera/ngx';
//import { File } from '@ionic-native/file/ngx';
import {ImageModalPage} from '../image-modal/image-modal.page';
import {AddItemModalPage} from '../add-item/add-item.page';
import {AddAssetModalPage} from '../add-asset/add-asset.page';
import {CommentsModalPage} from '../comments/comments.page';
import {DailsNotesModalPage} from '../daily-notes/daily-notes.page';
import {ChecklistModalPage} from '../checklist-modal/checklist-modal.page';
import {ImageProvider} from '../../providers/image/image';
import {AppConstants} from '../../providers/constant/constant';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {LoadingController} from '@ionic/angular';
// @ts-ignore
import {InAppBrowser} from '@ionic-native/in-app-browser/ngx';
import { SoWAll } from "../SoW-All/SoW-All.page";
import jQuery from 'jquery'
declare var jQuery: jQuery
import { get } from 'scriptjs'

@Component({
    selector: 'app-detail',
    templateUrl: './detail.page.html',
    styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

    buttonLabels = ['Take Photo', 'Upload from Library'];

    actionOptions: ActionSheetOptions = {
        title: 'Which would you like to do?',
        buttonLabels: this.buttonLabels,
        addCancelButtonWithLabel: 'Cancel',
        androidTheme: 1 //this.actionSheet.ANDROID_THEMES.THEME_HOLO_DARK,
    }
    options: CameraOptions = {
        quality: 50,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
        saveToPhotoAlbum: false //true causes crash probably due to permissions to access library.
    }

    libraryOptions: CameraOptions = {
        quality: 100,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
        sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    }

    dataReturned: any;
    userinfo: any;
    serviceid: any;
    apiurl: any;
    confirmButtonDisabled: any;
    serviceName: string;
    inspection_type: string;
    activityid: string;
    randomNumber: number = 0;
    public workorderdetail: any = {'workorderid':0};
    public servicedetail: any[] = [];
    public itemgrid: any[] = [];
    public countItemList: number = 0;
    updatefields: any = {};
    arrayfields: any = {};
    public constructionDocuments: any[] = [];
    public jobAssets: any[] = [];
    public jobItems: any[] = [];
    public jsaDocuments: any[] = [];
    completedFields: any = {};

    blockGroups: any = {};
    ScopeofWorkActivity: any[] = [];
    comments: any = [];
    allUsers: any = [];
    newComment: string;

    //actionSheet:any;
    constructor(
        public navCtrl: NavController,
        private router: Router,
        public storage: Storage,
        private activatedRoute: ActivatedRoute,
        //public actionSheetController: ActionSheetController,
        private camera: Camera,
        //private file: File,
        public toastController: ToastController,
        public alertController: AlertController,
        private actionSheet: ActionSheet,
        private photoLibrary: PhotoLibrary,
        public modalCtrl: ModalController,
        public imgpov: ImageProvider,
        public appConst: AppConstants,
        private httpClient: HttpClient,
        private iab: InAppBrowser,
        @Inject(LOCALE_ID) private locale: string,
        public loadingController: LoadingController,
        private platform: Platform
    ) {
        this.apiurl = this.appConst.getApiUrl();
        this.confirmButtonDisabled = false;
        this.blockGroups['Construction Documents']={open: false};
        this.blockGroups['JSA']={open: false};
        this.blockGroups['Scope of Work']={open: false};
        this.blockGroups['Items']={open: false};
        this.blockGroups['Assets']={open: false};
        this.blockGroups['Comments']={open: false};

        if (this.router.getCurrentNavigation().extras.state){
            this.activityid = this.router.getCurrentNavigation().extras.state.activityid;
        }
    }

    loading: any;

    async showLoading() {
        console.log('loading detail.');
        this.loading = await this.loadingController.create({
            message: 'Loading ...'
        });
        return await this.loading.present();
    }

    async hideLoading() {
        setTimeout(() => {
            if (this.loading != undefined) {
                this.loading.dismiss();
                console.log('hideLoading')
            }
        }, 1000);
    }

    addUpdate(event) {
        var fieldname = event.target.name;
        if (!fieldname || fieldname == '' || fieldname == undefined){
            fieldname = event.target.id;
        }
        var fieldvalue = event.target.textContent + event.target.value;
        if (fieldname == 'cf_climb' || fieldname == 'cf_overnight' || event.target.tagName == 'ION-CHECKBOX') {
            fieldvalue = (event.detail.checked) ? 1 : 0;
        }
        if (event.target.tagName == 'ION-TEXTAREA' || event.target.tagName == 'ION-SELECT') {
            fieldvalue = event.target.value;
        }
        if(fieldname in this.appConst.workOrder[this.serviceid]) {
            if(this.checkJson(this.appConst.workOrder[this.serviceid][fieldname]) && event.target.tagName == 'ION-TEXTAREA' ) {
                this.appConst.workOrder[this.serviceid][fieldname]['comments'] = fieldvalue;
            } else {
                this.appConst.workOrder[this.serviceid][fieldname] = fieldvalue;
            }
        } else {
            this.appConst.workOrder[this.serviceid][fieldname] = fieldvalue;
        }
        this.appConst.workOrder[this.serviceid]['wostatus'] = 'In-Process';
        console.log(this.appConst.workOrder);
        this.updatefields['wostatus'] = 'In-Process';
        this.updatefields[fieldname] = fieldvalue;
        console.log('adding update to queue: ', fieldname, fieldvalue);
        console.log(this.updatefields);
    }

    decodeHTML(html) {
        var txt = document.createElement('textarea');
        txt.innerHTML = html;
        return txt.value;
    };

    toggleSection(section) {
        for (let key in this.blockGroups) {
            if (section != key){
                this.blockGroups[key].open = false;
            }
        }

        this.blockGroups[section].open = !this.blockGroups[section].open;
        console.log('section is toggled', section, this.blockGroups[section].open);
    }

    async openConDocViewPDF(pdf){
        if (pdf.imgpath != ''){
            var url = this.apiurl.replace('phoneapi/','')+pdf.imgpath;
            if (this.platform.is('android')) {
                url = 'https://docs.google.com/viewer?url=' + encodeURIComponent(url);
            }
            console.log('opening pdf -> ',this.apiurl.replace('phoneapi/','')+pdf.imgpath)
            var ref = window.open(url, '_blank', 'location=no');
        }else{
            console.log('No path to open pdf')
        }
    }

    async openConDocViewModal(image,index){
        var params = {
            documentid: image.documentid
        }

        console.log('openConDocViewModal',params)
        var headers = new HttpHeaders();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('Access-Control-Allow-Origin', '*');
        this.showLoading();
        await this.httpClient.post(this.apiurl + "getDocBase64.php", params, {headers: headers, observe: 'response'})
            .subscribe(async data => {
                    this.hideLoading();
                    //console.log(data['body']);
                    var success = data['body']['success'];
                    if (success == true) {
                        var modal = await this.modalCtrl.create({
                            component: ImageModalPage,
                            componentProps: {
                                "base64Image": data['body']['base64'],
                                "noteContent": data['body']['noteContent'],
                                "paramTitle": "View Photo",
                                "serviceid": this.serviceid,
                                "user_id": this.userinfo.id,
                                "is_delete": true,
                                "documentid": image.documentid,
                                "fileName": data['body']['fileName'].split('.')[0] ,
                                "imgCategory": 'ConDoc' ,
                                "columnIndex": index
                            }
                        });
                        modal.onDidDismiss().then((dataReturned) => {
                            this.randomNumber=this.randomNumberGenerate();
                            if (dataReturned !== null) {
                                this.dataReturned = dataReturned.data;
                                if (this.dataReturned['cf_doc_category'] == "Construction Documents"){
                                    this.constructionDocuments.push({
                                        'documentid' : this.dataReturned['image_id'],
                                        'imgpath' : this.dataReturned['image_path'],
                                        'title' : this.dataReturned['notes_title'],
                                    })
                                }
                            }
                        });

                        return await modal.present();
                    }
                }, async error => {
                    var modal = await this.modalCtrl.create({
                        component: ImageModalPage,
                        componentProps: {
                            "base64Image": image.imgpath,
                            "paramTitle": "View Photo",
                            "serviceid": this.serviceid,
                            "is_delete": true,
                            "imgCategory": 'ConDoc' ,
                            "columnIndex": index
                        }
                    });
                    modal.onDidDismiss().then((dataReturned) => {
                        this.randomNumber=this.randomNumberGenerate();
                        if (dataReturned !== null) {
                            this.dataReturned = dataReturned.data;
                            if (this.dataReturned['cf_doc_category'] == "Construction Documents"){
                                this.constructionDocuments.push({
                                    'documentid' : this.dataReturned['image_id'],
                                    'imgpath' : this.dataReturned['image_path'],
                                    'title' : this.dataReturned['notes_title'],
                                })
                            }
                        }
                    });

                    return await modal.present();
                    this.hideLoading();
                    console.log('failed to fetch record');
                }
            );
    }

    async loadDetails(serviceid) {
        this.servicedetail = [];
        this.arrayfields = [];
        this.constructionDocuments = [];
        this.jobAssets = [];
        this.jobItems = [];
        var date = new Date();
        var joinDate = this.addZero(date.getMonth() + 1) + "-" + this.addZero(date.getDate()) + "-" + date.getFullYear();

        console.log('loading details for service id:', serviceid)
        this.serviceid = serviceid;
        var params = {
            user_id: this.userinfo.id,
            activityid: this.activityid,
            record_id: serviceid,
            current_app_date: joinDate,
        }
        if(!(serviceid in this.appConst.workOrder)) this.appConst.workOrder[serviceid] = {};
        var headers = new HttpHeaders();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('Access-Control-Allow-Origin', '*');
        this.showLoading();
        this.httpClient.post(this.apiurl + "getWorkOrderDetail.php", params, {headers: headers, observe: 'response'})
            .subscribe(data => {
                this.hideLoading();
                //console.log(data['body']);
                var success = data['body']['success'];
                if (success == true) {
                    var workorder = data['body']['data'];
                    this.inspection_type = data['body']['inspection_type'];
                    this.constructionDocuments = data['body']['constructionDocuments'];
                    this.jobAssets = data['body']['jobAssets'];
                    this.jobItems = data['body']['jobItems'];
                    this.ScopeofWorkActivity = data['body']['activityList'];
                    if(data['body']['jsaDocs'] != undefined){
                        this.jsaDocuments = Object.values(data['body']['jsaDocs']);
                    }

                    var allfields = data['body']['allfields'];
                    allfields.description.replace(/\n/g, "<br>");
                    var longitude = this.decodeHTML(allfields.cf_longtitude);
                    allfields.cf_longtitude = longitude;
                    console.log('allfields are', allfields);
                    this.workorderdetail = allfields;

                    this.serviceName = workorder['subject'];
                    for (let key in workorder) {
                        if (key != 'subject') {
                            var fieldArray = [];
                            for (let fieldkey in workorder[key]) {
                                if (key == 'Array Information'){
                                    this.arrayfields[fieldkey] = workorder[key][fieldkey].value;
                                }else{
                                    var _data = {
                                        columnname: fieldkey,
                                        uitype: workorder[key][fieldkey].uitype,
                                        value: workorder[key][fieldkey].value,
                                        picklist: workorder[key][fieldkey].picklist,
                                        fieldlabel: workorder[key][fieldkey].fieldlabel,
                                        json: this.checkJson(workorder[key][fieldkey].default),
                                        image_count: 0,
                                        total_count: 0,
                                        task_complete: false,
                                        default: workorder[key][fieldkey].default
                                    };
                                    if(this.checkJson(workorder[key][fieldkey].default)) {
                                        this.appConst.workOrder[serviceid][fieldkey] = (workorder[key][fieldkey].value !== "") ? JSON.parse(workorder[key][fieldkey].value) : JSON.parse(workorder[key][fieldkey].default);
                                    }

                                    if(_data.json) {
                                        _data.value = this.appConst.workOrder[serviceid][fieldkey]['comments']
                                        _data.task_complete = (this.appConst.workOrder[this.serviceid][fieldkey]['complete_category'] == 'yes') ? true: false;
                                        var t_image_count = 0;
                                        var image_count = 0;
                                        
                                        for (let photoid in this.appConst.workOrder[serviceid][fieldkey]['photos']) {
                                            if (this.appConst.workOrder[serviceid][fieldkey]['photos'][photoid]['name'] != 'Miscellaneous') {
                                                for (let subphotoid in this.appConst.workOrder[serviceid][fieldkey]['photos'][photoid]['photos']) {
                                                    if (this.appConst.workOrder[serviceid][fieldkey]['photos'][photoid]['photos'][subphotoid].length > 0){
                                                        image_count = image_count + this.appConst.workOrder[serviceid][fieldkey]['photos'][photoid]['photos'][subphotoid].length;
                                                    }
                                                    t_image_count ++;
                                                }
                                            }
                                        }
                                        this.appConst.workOrder[this.serviceid][fieldkey]['image_count'] = image_count
                                        this.appConst.workOrder[this.serviceid][fieldkey]['t_image_count'] = t_image_count;

                                        this.completedFields[fieldkey] = (this.appConst.workOrder[this.serviceid][fieldkey]['complete_category'] == 'yes') ? true: false;

                                        if (workorder[key][fieldkey].fieldlabel != 'Optional Miscellaneous' && this.completedFields[fieldkey] === false){
                                            this.confirmButtonDisabled = true;
                                        }
                                    }
                                    fieldArray.push(_data);
                                }
                            }


                            this.servicedetail.push({
                                blockname: key,
                                fields: fieldArray,
                            });
                            this.blockGroups[key]={open: false};
                        }
                    }

                    this.newComment = '';
                    this.comments = [];
                    this.fetchComments();

                    get("assets/atwho/js/jquery.caret.js", () => {
                        get("assets/atwho/js/jquery.atwho.min.js", () => {
                            jQuery("textarea[name='newComment']").atwho({
                                at: "@",
                                data: this.allUsers,
                                displayTpl: "<li>${name}</li>",
                                insertTpl: "@${id}",
                                headerTpl: '<div class=\"atwho-header\">Users List</div>',
                                limit: 200
                            });
                        });
                    });

                } else {
                    this.hideLoading();
                }

            }, error => {
                this.hideLoading();
                console.log('failed to fetch record');
            });
    }

    addZero(n) {
        return n < 10 ? '0' + n : n;
    }

    async fetchComments() {
        const reqData = {
            crmid: this.serviceid,
            user_id: this.userinfo.id,
            order: 'DESC',
        };
        const headers = new HttpHeaders();
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('Access-Control-Allow-Origin', '*');
        this.httpClient.post(this.apiurl + "getComment.php", reqData, {headers: headers, observe: 'response'})
            .subscribe(data => {
                console.log('Get Comments data');
                const responseData = data.body;
                const success = responseData['success'];
                const commentCount = responseData['count'];
                this.allUsers = responseData['listUsers'];

                if (success == true) {
                    console.log('Get Comments Success');
                    if (commentCount > 0) {
                        if (commentCount > 5){
                            this.comments = responseData['data'].slice(0, 5);
                        }else{
                            this.comments = responseData['data'];
                        }
                        console.log('this.comments',this.comments)
                    }
                } else {
                    console.log('failed to fetch Comments');
                }
            }, error => {
                console.log('failed to fetch Comments');
            });
    }

    async sendMessage() {
        this.showLoading();

        const message = this.newComment;

        if (message == '' || message == undefined) {
            this.presentToast('Please add something in comment. \n');
            return false;
        }

        const reqData = {
            crmid: this.serviceid,
            user_id: this.userinfo.id,
            commentcontent: message,
        };

        const headers = new HttpHeaders();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        headers.append('Access-Control-Allow-Origin', '*');
        this.httpClient.post(this.apiurl + "postComment.php", reqData, {
            headers: headers,
            observe: 'response'
        })
            .subscribe(data => {
                const responseData = data.body;
                const success = responseData['success'];
                if (success == true) {
                    this.newComment = '';
                    this.comments.unshift(responseData['data']);
                    this.comments.splice(-1)
                    this.hideLoading();
                } else {
                    this.hideLoading();
                    console.log('failed to Push Comments');
                }
            }, error => {
                this.hideLoading();
                this.presentToast('failed to Push Comments \n' + error.message);
            });
    }

    async updateMessage(e){
        this.newComment = e.detail.value;
    }

    checkJson(data) {
        data = typeof data !== "string" ? JSON.stringify(data) : data;

        try {
            data = JSON.parse(data);
        } catch (e) {
            return false;
        }

        if(typeof data === "object" && data !== null) {
            return true;
        }
        return false;
    }
    
    logout() {
        console.log('logout clicked');
        this.storage.set("userdata", null);
        this.router.navigateByUrl('/login');
    }

    async getCurrentTheme() {
        var current_theme = this.storage.get('userdata').then((userdata) => {
            if (userdata && userdata.length !== 0) {
                //current_theme = userdata.theme.toLowerCase();
                return userdata.theme.toLowerCase();
            } else {
                return false;
            }
        })
        return current_theme;
    }

    async updateCurrentTheme(theme: string) {
        var userjson: object;
        await this.isLogged().then(result => {
            if (!(result == false)) {
                userjson = result;
            }
        })
        //console.log('from set current theme', userjson.theme);
        userjson['theme'] = theme.charAt(0).toUpperCase() + theme.slice(1);
        //console.log('from set current theme', userjson);
        this.storage.set('userdata', userjson);
        this.userinfo.theme = theme.charAt(0).toUpperCase() + theme.slice(1);
        console.log('updated theme on storage memory');
    }

    async switchTheme() {
        var current_theme;
        await this.getCurrentTheme().then((theme) => {
            console.log("the current theme is", theme);
            current_theme = theme;
        });
        var theme_switcher = {
            "dark": "light",
            "light": "dark"
        };
        var destination_theme = theme_switcher[current_theme]
        console.log('switching theme from:', current_theme);
        console.log('switching theme to:', destination_theme);
        document.body.classList.toggle(destination_theme, true);
        document.body.classList.toggle(current_theme, false);
        this.updateCurrentTheme(destination_theme);
        console.log('theme switched');
    }

    async isLogged() {
        var log_status = this.storage.get('userdata').then((userdata) => {
            if (userdata && userdata.length !== 0) {
                return userdata;
            } else {
                return false;
            }
        })
        return log_status;
    }

    loadTheme(theme) {
        console.log('loading theme', theme);
        document.body.classList.toggle(theme, true);
        var theme_switcher = {
            "dark": "light",
            "light": "dark"
        };
        document.body.classList.toggle(theme_switcher[theme], false); //switch off previous theme if there was one and prefer the loaded theme.
        console.log('turning off previous theme', theme_switcher[theme]);
    }

    async presentToast(message: string) {
        var toast = await this.toastController.create({
            message: message,
            duration: 2000,
            position: "top",
            color: "danger"
        });
        toast.present();
    }

    async presentToastPrimary(message: string) {
        var toast = await this.toastController.create({
            message: message,
            duration: 2000,
            position: "bottom",
            color: "primary"
        });
        toast.present();
    }

    ScopeofWorkstatus(activityid, status){
        console.log('ScopeofWorkstatus == ',activityid)
        console.log('ScopeofWorkstatus == ',status)
        if(status == 'Accept'){
            var headers = new HttpHeaders();
            headers.append("Accept", 'application/json');
            headers.append('Content-Type', 'application/x-www-form-urlencoded');
            headers.append('Access-Control-Allow-Origin', '*');
            var params = {
                user_id: this.userinfo.id,
                record_id: activityid,
                status: status,
            }
            this.showLoading();
            this.httpClient.post(this.apiurl + "updateScopeofWorkstatus.php", params, {headers: headers, observe: 'response'})
            .subscribe(data => {
                this.hideLoading();
                var success = data['body']['success'];
                var activityid = data['body']['activityid'];
                console.log(data['body']);
                if (success == true) {
                    console.log("Saved and updated data for workorder");
                    console.log('activityid->',activityid)
                    document.getElementById(activityid).style.display = "none";
                } else {
                    this.presentToast('Failed to save due to an error');
                    console.log('failed to save record, response was false');
                }
            }, error => {
                this.presentToast('Failed to save due to an error \n' + error.message);
                console.log('failed to save record', error.message);
            });
        }else{
            this.SoWDelaypopup(activityid);
        }
    }
    async SoWDelaypopup(activityid){
        console.log('welocme to SoWDelaypopup ', activityid);
        var modal = await this.modalCtrl.create({
            component: SoWAll,
            componentProps: {
                "activityid": activityid,
                "user_id": this.userinfo.id
            }
        });
        modal.onDidDismiss().then((dataReturned) => {
            this.randomNumber=this.randomNumberGenerate();
            console.log('dataReturn-sow = ',dataReturned);
            if (dataReturned !== null) {
                this.dataReturned = dataReturned.data;
            }
        });
        return await modal.present();
    }
    openActionSheet(type,data=null) {
        console.log('launching actionsheet');

        if(type == 'jsaDoc' && this.jsaDocuments.length > 4){
            console.error('Only 4 JSA images allowed');
            this.presentToast('Only 4 JSA images allowed');
            return false;
        }

        this.actionSheet.show(this.actionOptions).then((buttonIndex: number) => {
            console.log('Option pressed', buttonIndex);
            if (buttonIndex == 1) {
                console.log('launching camera');
                this.camera.getPicture(this.options).then((imageData) => {
                    let base64Image = 'data:image/png;base64,' + imageData;
                    this.imgpov.setImage(imageData);
                    this.openModal(this.serviceid, base64Image,type,data);
                }, (err) => {
                    console.error(err);
                    this.presentToast(`Upload failed! Please try again \n` + err);
                });
            } else if (buttonIndex == 2) {
                console.log('launching gallery');
                this.camera.getPicture(this.libraryOptions).then((imageData) => {
                    let base64Image = 'data:image/png;base64,' + imageData;
                    this.imgpov.setImage(imageData);
                    this.openModal(this.serviceid, base64Image,type,data);
                }, (err) => {
                    console.error(err);
                    this.presentToast(`Upload failed! Please try again \n` + err);
                });
            }
        }).catch((err) => {
            let imageData = this.appConst.appTestImg;
            let base64Image = 'data:image/png;base64,' + imageData;
            this.imgpov.setImage(base64Image);
            this.openModal(this.serviceid,base64Image, type,data);
        });
    }

    async openChecklist(record_id,inspection_type, defaultContent, currentValue, title, columnName) {
        console.log('opening checklist for record', record_id);
        const modal_checklist = await this.modalCtrl.create({
            component: ChecklistModalPage,
            componentProps: {
                "paramTitle": title,
                "serviceid": record_id,
                "inspection_type": inspection_type,
                "current_updates": this.updatefields,
                "user_id": this.userinfo.id,
                "defaultContent": defaultContent,
                "value" : currentValue,
                "field": columnName
            }
        });

        modal_checklist.onDidDismiss().then((dataReturned) => {
            this.randomNumber=this.randomNumberGenerate();
            if (dataReturned !== null) {
                console.log("columnName",columnName)
                console.log("dataReturned",dataReturned.data.picCompleted)
                this.saveWO(this.workorderdetail.workorderid);
                if (typeof dataReturned.data.picCompleted !== 'undefined'){
                    this.completedFields[columnName] = dataReturned.data.picCompleted;

                    if (title != 'Optional Miscellaneous'){
                        if(dataReturned.data.picCompleted === false){
                            this.confirmButtonDisabled = true;
                        }else{
                            for (let cfield in this.completedFields){
                                if (this.completedFields[cfield] === false){
                                    this.confirmButtonDisabled = false;
                                }
                            }
                        }
                    }
                }
            }

        });

        return await modal_checklist.present();
    }

    call(phonenumber) {
        console.log('calling ', phonenumber);
        /* this.callNumber.callNumber(phonenumber, true)
        .then(res => console.log("Launched dialer!", res))
        .catch(err => console.log("Error launching", err)) */
        this.iab.create('tel:' + phonenumber, '_system');
    }

    sms(phonenumber) {
        console.log('smsing ', phonenumber);
        /* this.callNumber.callNumber(phonenumber, true)
        .then(res => console.log("Launched dialer!", res))
        .catch(err => console.log("Error launching", err)) */
        this.iab.create('sms:' + phonenumber, '_system');
    }


    email(email) {
        console.log('emailing ', email);
        this.iab.create('mailto:' + email, '_system');
        /* let emailtemplate = {
          to: email,
          cc: 'chukwumaokere@yahoo.com',
          isHtml: true,
        }
        this.emailComposer.isAvailable().then((available: boolean) => {
          if(available){
            //send
          }
        }) */
    }

    transferee(phonenumber) {
        //console.log('opening action sheet for contact ', phonenumber, this.servicedetail.cf_765 );
        const contactLabels = ['Call: ' + phonenumber, 'SMS: ' + phonenumber];

        const contactOptions: ActionSheetOptions = {
            title: 'Which would you like to do?',
            buttonLabels: contactLabels,
            addCancelButtonWithLabel: 'Cancel',
            androidTheme: 1 //this.actionSheet.ANDROID_THEMES.THEME_HOLO_DARK,
        }
        this.actionSheet.show(contactOptions).then((buttonIndex: number) => {
            console.log('Option pressed', buttonIndex);
            if (buttonIndex == 1) {
                this.call(phonenumber);
            }
            else if (buttonIndex == 2) {
                this.sms(phonenumber);
            }
        }).catch((err) => {
            console.log(err);
            this.presentToast(`Operation failed! \n` + err);
        })
    }

    ngOnInit() {
        this.activatedRoute.params.subscribe((userData) => {
            if (userData.length !== 0) {
                this.userinfo = userData;
                //console.log('param user data:', userData);
                try {
                    this.loadTheme(userData.theme.toLowerCase());
                } catch {
                    console.log('couldnt load theme');
                }
                console.log('param user data length:', userData.length);
                if (userData.length == undefined) {
                    console.log('nothing in params, so loading from storage');
                    this.isLogged().then(result => {
                        if (!(result == false)) {
                            //console.log('loading storage data (within param route function)', result);
                            this.userinfo = result;
                            this.loadTheme(result.theme.toLowerCase());
                            if (userData.serviceid) {
                                this.loadDetails(userData.serviceid);
                            }
                        } else {
                            console.log('nothing in storage, going back to login');
                            this.logout();
                        }
                    });
                }
            }
        });
    }

    async openModal(serviceid, base64Image,type='',data=null) {

        var modal = await this.modalCtrl.create({
            component: ImageModalPage,
            componentProps: {
                "base64Image": base64Image,
                "paramTitle": "View Photo",
                "serviceid": this.serviceid,
                "user_id": this.userinfo.id,
                "otherData": data,
                "documentid": '',
                "imgCategory": type,
                "fileName": ''
            }
        });

        modal.onDidDismiss().then((dataReturned) => {
            this.randomNumber=this.randomNumberGenerate();
            this.dataReturned = dataReturned.data;
            
            if (this.dataReturned !== null && this.dataReturned.image_path != '' && this.dataReturned.image_path != undefined) {
                if(this.dataReturned.cf_doc_category == 'JSA'){
                    console.log('this.jsaDocuments',this.jsaDocuments)
                    console.log('this.dataReturned',this.dataReturned)

                    for(var index in this.jsaDocuments){
                        if(this.jsaDocuments[index]['jsdoc_num'] == this.dataReturned.jsdoc_num){
                            this.jsaDocuments[index]['title'] = this.dataReturned.title;
                            this.jsaDocuments[index]['documentid'] = this.dataReturned.image_id;
                            this.jsaDocuments[index]['imgpath'] = this.dataReturned.image_path;
                        }
                    }
                    
                    console.log('this.jsaDocuments',this.jsaDocuments)
                }
            }
        });

        return await modal.present();
    }

    saveWO(worecord) {
        var data = this.appConst.workOrder[this.serviceid];
        var status = true;
        for(var column in data) {
            console.log(data[column]);
            if(data[column]['photos'] !== undefined) {
                for(var index in data[column]['photos']) {
                    if(data[column]['photos'][index]['photos'].length == 0) {
                        status = false;
                    }
                }
            }
        }
        var data_stringified = JSON.stringify(data);
        var logged_in_uid = this.userinfo.id;
        console.log('attempting to submitting data to vtiger', worecord, data);
        var params = {
            recordid: worecord,
            updates: data_stringified,
            logged_in_user: logged_in_uid,
            activityid: this.activityid,
            status: status
        }
        console.log(params);
        console.log("params being sent", params)
        // return false;
        if (Object.keys(data).length > 0) {
            console.log('Some data was changed, pushing ' + Object.keys(data).length + ' changes');
            var headers = new HttpHeaders();
            headers.append("Accept", 'application/json');
            headers.append('Content-Type', 'application/x-www-form-urlencoded');
            headers.append('Access-Control-Allow-Origin', '*');
            this.showLoading();
            this.httpClient.post(this.apiurl + "postWorkOrderInfo.php", params, {headers: headers, observe: 'response'})
                .subscribe(data => {
                    this.hideLoading();
                    var success = data['body']['success'];
                    console.log(data['body']);
                    if (success == true) {
                        console.log("Saved and updated data for workorder");
                    } else {
                        this.presentToast('Failed to save due to an error');
                        console.log('failed to save record, response was false');
                    }
                }, error => {
                    this.presentToast('Failed to save due to an error \n' + error.message);
                    console.log('failed to save record', error.message);
                });
        } else {
            this.hideLoading();
            console.log('no data modified for record', worecord)
        }

    }

    goToGallery(serviceid){
        this.router.navigate([`/services/detail/${serviceid}/gallery`, {servicename: this.serviceName}]);
    }

    async addItem(serviceid) {
        console.log('opening addItem for record : ', serviceid);
        const addItem = await this.modalCtrl.create({
            component: AddItemModalPage,
            componentProps: {
                "serviceid": serviceid,
                "user_id": this.userinfo.id
            }
        });

        addItem.onDidDismiss().then((dataReturned) => {
            this.randomNumber=this.randomNumberGenerate();
            console.log('closing addItem for record : ', serviceid);
            if (dataReturned !== null) {
                this.dataReturned = dataReturned.data;
                if (this.dataReturned != undefined){
                    if (this.dataReturned.success === true){
                        this.fetchjobItems();
                    }
                }
            }
        });

        return await addItem.present();
    }

    async addAsset(serviceid,assetdata='',mode='Add') {
        console.log('opening addAsset for record : ', serviceid);
        const addAsset = await this.modalCtrl.create({
            component: AddAssetModalPage,
            componentProps: {
                "serviceid": serviceid,
                "assetdata": assetdata,
                "mode": mode,
                "user_id": this.userinfo.id
            }
        });

        addAsset.onDidDismiss().then((dataReturned) => {
            this.randomNumber=this.randomNumberGenerate();
            console.log('closing addAsset for record : ', serviceid);
            if (dataReturned !== null) {
                this.dataReturned = dataReturned.data;
                if (this.dataReturned != undefined){
                    if (this.dataReturned.success === true){
                        this.fetchJobAsset();
                    }
                }
            }
        });

        return await addAsset.present();
    }

    async fetchJobAsset() {
        var params = {
            user_id: this.userinfo.id,
            activityid: this.activityid,
            record_id: this.serviceid,
        };

        var headers = new HttpHeaders();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('Access-Control-Allow-Origin', '*');
        this.showLoading();
        this.httpClient.post(this.apiurl + "getJobAssets.php", params, {headers: headers, observe: 'response'})
            .subscribe(data => {
                this.hideLoading();
                var success = data['body']['success'];
                if (success == true) {
                    this.jobAssets = data['body']['jobAssets'];
                }
            });
    }

    async fetchjobItems() {
        var params = {
            user_id: this.userinfo.id,
            activityid: this.activityid,
            record_id: this.serviceid,
        };

        var headers = new HttpHeaders();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('Access-Control-Allow-Origin', '*');
        this.showLoading();
        this.httpClient.post(this.apiurl + "getjobItems.php", params, {headers: headers, observe: 'response'})
            .subscribe(data => {
                this.hideLoading();
                var success = data['body']['success'];
                if (success == true) {
                    this.jobItems = data['body']['jobItems'];
                }
            });
    }

    async dailsNotes(serviceid) {
        console.log('opening dailsNotes for record : ', serviceid);
        const addItem = await this.modalCtrl.create({
            component: DailsNotesModalPage,
            componentProps: {
                "serviceid": serviceid,
                "user_id": this.userinfo.id
            }
        });

        addItem.onDidDismiss().then((dataReturned) => {
            this.randomNumber=this.randomNumberGenerate();
            console.log('closing dailsNotes for record : ', serviceid);
            if (dataReturned !== null) {
                //Do Something
            }
        });

        return await addItem.present();
    }

    async jobComments(serviceid) {
        console.log('opening jobComments for record : ', serviceid);
        const addItem = await this.modalCtrl.create({
            component: CommentsModalPage,
            componentProps: {
                "serviceid": serviceid,
                "user_id": this.userinfo.id
            }
        });

        addItem.onDidDismiss().then((dataReturned) => {
            this.randomNumber=this.randomNumberGenerate();
            console.log('closing jobComments for record : ', serviceid);
            if (dataReturned !== null) {
                //Do Something
            }
        });

        return await addItem.present();
    }

    

       randomNumberGenerate(){
        return Math.floor(Math.random()*(9999999999-99999+1)+99999);
    }
}
