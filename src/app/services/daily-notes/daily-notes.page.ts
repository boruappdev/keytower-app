import {
    Component,
    OnInit,
    ElementRef,
    ViewChild
} from '@angular/core';
import {ModalController, NavParams, ToastController, PickerController, NavController} from '@ionic/angular';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AppConstants} from '../../providers/constant/constant';
import {LoadingController} from '@ionic/angular';
import {ImageModalPage} from "../image-modal/image-modal.page";
import {ActionSheet, ActionSheetOptions} from '@ionic-native/action-sheet/ngx';
import {Camera, CameraOptions} from "@ionic-native/camera/ngx";
import {ImageProvider} from "../../providers/image/image";

@Component({
    selector: 'daily-notes-modal',
    templateUrl: './daily-notes.page.html',
    styleUrls: ['./daily-notes.page.scss'],
})
export class DailsNotesModalPage implements OnInit {

    modelId: number;
    serviceid: any;
    completesText: any;
    issueText: any;
    commingupText: any;
    delays: any = '';
    travelHr: any;
    undergroundWorkHr: any;
    materialHr: any;
    poleInsHr: any;
    radioWorkHr: any;
    curerentDate: any;
    curerentImages: any;
    apiurl: any;
    user_id: any;
    dataReturned: any;
    allDailyNotes: any;
    activeSection: any;
    blockGroups: any = {};
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

    constructor(
        private camera: Camera,
        private actionSheet: ActionSheet,
        public imgpov: ImageProvider,
        private modalController: ModalController,
        public modalCtrl: ModalController,
        private navParams: NavParams,
        public httpClient: HttpClient,
        public toastController: ToastController,
        public appConst: AppConstants,
        public loadingController: LoadingController,
        public navCtrl: NavController
    ) {
        this.apiurl = this.appConst.getApiUrl();
    }

    ngOnInit() {
        this.modelId = this.navParams.data.paramID;
        this.serviceid = this.navParams.data.serviceid;
        this.user_id = this.navParams.data.user_id;
        var date = new Date();
        var joinDate = date.getMonth() + 1 + "-" + date.getDate() + "-" + date.getFullYear();
        this.curerentDate = joinDate;

        var newDatedata = {
            "noteDate": this.curerentDate,
            "completesText": '',
            "issueText": '',
            "commingupText": '',
            "images": {},
        };
        this.allDailyNotes = [];
        this.allDailyNotes.push(newDatedata);
        this.activeSection = this.curerentDate;
        this.getDailyNotes();
    }

    getDailyNotes() {
        var params = {
            user_id: this.user_id,
            recordid: this.serviceid
        }

        var headers = new HttpHeaders();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('Access-Control-Allow-Origin', '*');
        this.showLoading();
        this.httpClient.post(this.apiurl + "getDailyNotes.php", params, {headers: headers, observe: 'response'})
            .subscribe(async data => {
                this.hideLoading();
                var success = data['body']['success'];
                console.log('searchItem response was', data['body']);
                if (success == true) {
                    if (data['body']['data'] != '' && data['body']['data'] != null) {
                        this.allDailyNotes = data['body']['data'];

                        var todayAdded = false;
                        for (let noteItemindex in this.allDailyNotes) {
                            if (this.allDailyNotes[noteItemindex].noteDate === this.curerentDate) {
                                todayAdded = true;
                                this.completesText = this.allDailyNotes[noteItemindex].completesText;
                                this.issueText = this.allDailyNotes[noteItemindex].issueText;
                                this.commingupText = this.allDailyNotes[noteItemindex].commingupText;
                                this.delays = this.allDailyNotes[noteItemindex].delays;
                                this.travelHr = this.allDailyNotes[noteItemindex].travelHr;
                                this.undergroundWorkHr = this.allDailyNotes[noteItemindex].undergroundWorkHr;
                                this.materialHr = this.allDailyNotes[noteItemindex].materialHr;
                                this.poleInsHr = this.allDailyNotes[noteItemindex].poleInsHr;
                                this.radioWorkHr = this.allDailyNotes[noteItemindex].radioWorkHr;
                            }
                        }

                        if (!todayAdded){
                            var newDatedata = {
                                "noteDate": this.curerentDate,
                                "completesText": '',
                                "issueText": '',
                                "commingupText": '',
                                "images": [],
                            };
                            this.allDailyNotes.unshift(newDatedata);
                        }

                        console.log('this.allDailyNotes',this.allDailyNotes)
                    }
                } else {
                    if (data['body']['error'] != '') {
                        this.presentToast(data['body']['error'])
                    } else {
                        this.presentToast('Something went wrong while fetching Daily Notes.')
                    }
                }
            });
    }

    async addDailyNotes() {
        for (let noteItemindex in this.allDailyNotes) {
            if (this.allDailyNotes[noteItemindex].noteDate === this.curerentDate) {
                this.allDailyNotes[noteItemindex].completesText = this.completesText;
                this.allDailyNotes[noteItemindex].commingupText = this.commingupText;
                this.allDailyNotes[noteItemindex].issueText = this.issueText;
                this.allDailyNotes[noteItemindex].delays = this.delays;
                this.allDailyNotes[noteItemindex].travelHr = this.travelHr;
                this.allDailyNotes[noteItemindex].undergroundWorkHr = this.undergroundWorkHr;
                this.allDailyNotes[noteItemindex].materialHr = this.materialHr;
                this.allDailyNotes[noteItemindex].poleInsHr = this.poleInsHr;
                this.allDailyNotes[noteItemindex].radioWorkHr = this.radioWorkHr;
            }
        }

        var params = {
            user_id: this.user_id,
            all_notes: this.allDailyNotes,
            note_date: this.curerentDate,
            recordid: this.serviceid
        }

        var headers = new HttpHeaders();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('Access-Control-Allow-Origin', '*');
        this.showLoading();
        this.httpClient.post(this.apiurl + "addDailyNotes.php", params, {
            headers: headers,
            observe: 'response'
        }).subscribe(data => {
            this.hideLoading();
            var success = data['body']['success'];
            console.log('searchItem response was', data['body']);
            if (success == true) {
                this.presentToastPrimary('Daily Notes added in Job.')
            } else {
                this.presentToast('Error while adding Daily Notes. Please try after some time.')
            }
            this.closeModal();
        });
    }

    async openActionSheet() {
        console.log('launching actionsheet');

        this.actionSheet.show(this.actionOptions).then((buttonIndex: number) => {
            console.log('Option pressed', buttonIndex);
            if (buttonIndex == 1) {
                console.log('launching camera');
                this.camera.getPicture(this.options).then((imageData) => {
                    let base64Image = 'data:image/png;base64,' + imageData;
                    this.imgpov.setImage(base64Image);
                    this.openConDocViewModal(base64Image, true);
                }, (err) => {
                    console.error(err);
                    this.presentToast(`Upload failed! Please try again \n` + err);
                });
            } else if (buttonIndex == 2) {
                console.log('launching gallery');
                this.camera.getPicture(this.libraryOptions).then((imageData) => {
                    let base64Image = 'data:image/png;base64,' + imageData;
                    this.imgpov.setImage(base64Image);
                    this.openConDocViewModal(base64Image, true);
                }, (err) => {
                    console.error(err);
                    this.presentToast(`Upload failed! Please try again \n` + err);
                });
            }
        }).catch((err) => {
            let imageData = this.appConst.appTestImg;
            let base64Image = 'data:image/png;base64,' + imageData;
            this.imgpov.setImage(base64Image);
            this.openConDocViewModal(base64Image, true);
            this.presentToast(`Operation failed! \n` + err);
        });
    }

    async openConDocViewModal(image, is_base64 = false) {
        if (is_base64) {
            var modal = await this.modalCtrl.create({
                component: ImageModalPage,
                componentProps: {
                    "base64Image": image,
                    "paramTitle": "View Photo",
                    "serviceid": this.serviceid,
                    "user_id": this.user_id,
                    "documentid": '',
                    "imgCategory": 'dailyNotes',
                    "fileName": ''
                }
            });
            modal.onDidDismiss().then((dataReturned) => {
                this.dataReturned = dataReturned.data;

                if (dataReturned !== null && this.dataReturned.image_path != '' && this.dataReturned.image_path != undefined) {
                    console.log('this.dataReturnedthis.dataReturned',this.dataReturned)
                    for (let noteItemindex in this.allDailyNotes) {
                        if (this.allDailyNotes[noteItemindex].noteDate === this.curerentDate) {
                            this.allDailyNotes[noteItemindex].images.push(this.dataReturned)
                        }
                    }
                }
            });

            return await modal.present();
        } else {
            console.log('imageimageimage',image)
            var params = {
                documentid: image.image_id
            }

            var headers = new HttpHeaders();
            headers.append("Accept", 'application/json');
            headers.append('Content-Type', 'application/x-www-form-urlencoded');
            headers.append('Access-Control-Allow-Origin', '*');
            this.showLoading();
            await this.httpClient.post(this.apiurl + "getDocBase64.php", params, {
                headers: headers,
                observe: 'response'
            })
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
                                    "user_id": this.user_id,
                                    "is_delete": true,
                                    "documentid": image.image_id,
                                    "imgCategory": 'dailyNotes',
                                    "fileName": data['body']['fileName'].split('.')[0]
                                }
                            });
                            modal.onDidDismiss().then((dataReturned) => {
                                if (dataReturned !== null) {
                                    if (dataReturned.data['is_delete']){
                                        for (let noteItemindex in this.allDailyNotes) {
                                            if (this.allDailyNotes[noteItemindex].noteDate === this.curerentDate) {
                                                var position = this.allDailyNotes[noteItemindex].images.findIndex(function(obj, key) {
                                                    return (obj.image_id === dataReturned.data['documentid']);
                                                });

                                                if(position > -1) {
                                                    this.allDailyNotes[noteItemindex].images.splice(position,1);
                                                }
                                            }
                                        }
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
                                "documentid": image.image_id,
                                "user_id": this.user_id,
                                "serviceid": this.serviceid,
                                "imgCategory": 'dailyNotes',
                                "is_delete": true
                            }
                        });
                        modal.onDidDismiss().then((dataReturned) => {
                            if (dataReturned !== null) {
                                if (dataReturned.data['is_delete']){
                                    for (let noteItemindex in this.allDailyNotes) {
                                        if (this.allDailyNotes[noteItemindex].noteDate === this.curerentDate) {
                                            var position = this.allDailyNotes[noteItemindex].images.findIndex(function(obj, key) {
                                                return (obj.image_id === dataReturned.data['documentid']);
                                            });

                                            if(position > -1) {
                                                this.allDailyNotes[noteItemindex].images.splice(position,1);
                                            }
                                        }
                                    }
                                }
                            }
                        });

                        return await modal.present();
                        this.hideLoading();
                        console.log('failed to fetch record');
                    }
                );
        }
    }

    async closeModal() {
        const onClosedData: string = "Wrapped Up!";
        await this.modalController.dismiss(onClosedData);
    }

    async toggleSection(section) {
        // activeSection
        this.activeSection =  section;
    }

    loading: any;

    async showLoading() {
        this.loading = await this.loadingController.create({
            message: 'Loading ...'
        });
        return await this.loading.present();
    }

    async hideLoading() {
        setTimeout(() => {
            if (this.loading != undefined) {
                this.loading.dismiss();
            }
        }, 1000);
    }

    async presentToast(message: string) {
        var toast = await this.toastController.create({
            message: message,
            duration: 3500,
            position: "bottom",
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
}
