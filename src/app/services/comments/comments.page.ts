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
import {IonContent} from '@ionic/angular';
import jQuery from 'jquery'
declare var jQuery: jQuery
import { get } from 'scriptjs';

@Component({
    selector: 'comments',
    templateUrl: './comments.page.html',
    styleUrls: ['./comments.page.scss'],
})
export class CommentsModalPage implements OnInit {
    @ViewChild(IonContent, {static: false}) content: IonContent;
    user_id: any = 1;
    modalTitle: string;
    newComment: string;
    modelId: number;
    serviceid: any;
    apiurl: any;
    recordid: any;
    comments: any = [];
    allUsers: any = [];
    dataReturned: any;

    constructor(
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
    }

    ionViewDidEnter() {
        this.ScrollToBottom();
    }

    async ScrollToBottom() {
        this.content.scrollToBottom(200);
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
        }, 500);
    }

    async closeModal() {
        const onClosedData: string = "Wrapped Up!";
        await this.modalController.dismiss(onClosedData);
    }

    fetchComments() {
        this.showLoading();
        const reqData = {
            crmid: this.serviceid,
            user_id: this.user_id,
        };
        const headers = new HttpHeaders();
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('Access-Control-Allow-Origin', '*');
        this.httpClient.post(this.apiurl + "getComment.php", reqData, {headers: headers, observe: 'response'})
            .subscribe(data => {
                console.log('Get Comments Success');
                const responseData = data.body;
                const success = responseData['success'];
                const commentCount = responseData['count'];
                this.allUsers = responseData['listUsers'];

                if (success == true) {
                    this.hideLoading();
                    if (commentCount > 0) {
                        this.comments = responseData['data'];
                        this.ScrollToBottom();
                    }
                } else {
                    this.hideLoading();
                    console.log('failed to fetch Comments');
                }
            }, error => {
                this.hideLoading();
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
            user_id: this.user_id,
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
                    this.comments.push(responseData['data']);
                    this.ScrollToBottom();
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
