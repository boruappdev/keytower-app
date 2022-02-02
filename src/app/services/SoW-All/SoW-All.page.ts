import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams, ToastController, PickerController, NavController } from '@ionic/angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppConstants } from '../../providers/constant/constant';
import { LoadingController } from '@ionic/angular';
import {Camera, CameraOptions} from "@ionic-native/camera/ngx";
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import {ImageProvider} from "../../providers/image/image";
import {ImageModalPage} from "../image-modal/image-modal.page";
import {ActionSheet, ActionSheetOptions} from '@ionic-native/action-sheet/ngx';
import {ActivatedRoute, Router} from "@angular/router";
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: "SoW-All",
  templateUrl: "./SoW-All.page.html",
  styleUrls: ["./SoW-All.page.scss"],
})
export class SoWAll implements OnInit {
  modalTitle: string;
  modelId: number;
  activityid:any;
  apiurl: any;
  user_id: any;
  dataReturned: any;
  defaultContent: any;
  picklistvalaue: any[] = [];
  reasonnote: any;
  
  constructor(
    private camera: Camera,
    private photoviewer: PhotoViewer,
    public imgpov: ImageProvider,
    public modalCtrl: ModalController,
    private modalController: ModalController,
    private navParams: NavParams,
    public httpClient: HttpClient,
    public toastController: ToastController,
    private navCtrl: NavController,
    public appConst: AppConstants,
    private router: Router,
    public loadingController: LoadingController,
    private actionSheet: ActionSheet,
    private sanitizer: DomSanitizer
  ) {
    this.apiurl = this.appConst.getApiUrl();
    this.sanitizer = sanitizer;
  }

  ngOnInit() {
     console.table('welcome to this');
    this.modelId = this.navParams.data.paramID;
    this.modalTitle = this.navParams.data.paramTitle;
    this.user_id = this.navParams.data.user_id;
    this.activityid = this.navParams.data.activityid;
    console.log('this - activityid = ',this.activityid);
  }
  loading: any;

  async showLoading() {
    this.loading = await this.loadingController.create({
      message: "Loading ...",
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

  urlSanitize(url) {
    console.log(url);
    url = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    console.log(url);
    return url;
  }
  async closeModal(changes='') {
      await this.modalController.dismiss({});
    }
  async presentToast(message: string) {
    var toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: "top",
      color: "danger",
    });
    toast.present();
  }
  sowdelayreason(event){
      console.log('welcome sowdelayreason');
      var picklistvalaue = event.target.value;
      this.picklistvalaue = picklistvalaue;
      console.log('picklistvalaue = ',picklistvalaue);
      console.log(picklistvalaue.includes('Other'));
  }
  sowdelayreasonnote(event){
      console.log('welcome sowdelayreasonnote');
      var reasonnote = event.target.value;
      this.reasonnote = reasonnote;
      console.log('reasonnote = ',reasonnote);
  }
  savedelayReason(){
    console.log('picklistvalaue = ',this.picklistvalaue);
    console.log('reasonnote = ',this.reasonnote);
    if(this.picklistvalaue.length == 0){
      this.presentToast('Reason(s) for Delay required.');
      return false;
    }
    if(!this.reasonnote && (this.picklistvalaue.includes('Emergency') || this.picklistvalaue.includes('Other'))){
      this.presentToast('Please Enter Your Reason Note.');
      return false;
    }
    var headers = new HttpHeaders();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Access-Control-Allow-Origin', '*');
    var params = {
        user_id: this.user_id,
        picklistvalaue: this.picklistvalaue,
        reasonnote: this.reasonnote,
        record_id: this.activityid,
    }
    this.showLoading();
    this.httpClient.post(this.apiurl + "savedelayReason.php", params, {headers: headers, observe: 'response'})
    .subscribe(data => {
        this.hideLoading();
        var success = data['body']['success'];
        var activityid = data['body']['activityid'];
        console.log(data['body']);
        if (success == true) {
            console.log("Saved and updated data for workorder");
            this.closeModal();
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
  }
  async presentToastPrimary(message: string) {
    var toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: "top",
      color: "primary",
    });
    toast.present();
  }
}
