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
import { SoWDelay } from "../SoW-Delay/SoW-Delay.page";

@Component({
  selector: "All-sowActivity",
  templateUrl: "./All-sowActivity.page.html",
  styleUrls: ["./All-sowActivity.page.scss"],
})
export class AllsowActivity implements OnInit {
  modalTitle: string;
  modelId: number;
  apiurl: any;
  user_id: any;
  dataReturned: any;
  defaultContent: any;
  reasonnote: any;
  listofsowactivity: any[] = [];
  
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
    this.listofsowactivity = this.navParams.data.listofsowactivity;
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
      duration: 3500,
      position: "bottom",
      color: "danger",
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
                user_id: this.user_id,
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
                    console.log("Saved and updated data for workorder1");
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
            component: SoWDelay,
            componentProps: {
                "activityid": activityid,
                "user_id": this.user_id
            }
        });
        modal.onDidDismiss().then((dataReturned) => {
            console.log('dataReturn-sow = ',dataReturned);
            if (dataReturned !== null) {
                this.dataReturned = dataReturned.data;
            }
        });
        return await modal.present();
    }
  async presentToastPrimary(message: string) {
    var toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: "bottom",
      color: "primary",
    });
    toast.present();
  }
}
