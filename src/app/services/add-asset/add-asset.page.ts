import { Component,
    OnInit,
    ElementRef,
    ViewChild
} from '@angular/core';
import {ModalController, NavParams, ToastController, PickerController, NavController} from '@ionic/angular';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AppConstants} from '../../providers/constant/constant';
import {LoadingController} from '@ionic/angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
    selector: 'add-asset-modal',
    templateUrl: './add-asset.page.html',
    styleUrls: ['./add-asset.page.scss'],
})
export class AddAssetModalPage implements OnInit {

    modelId: number;
    serviceid: any;
    barcodeAsset: any;
    barcodeCheckValueExits: any;
    barcodevalue: any;
    apiurl: any;
    user_id: any;
    dataReturned: any;
    serialnumber:any;
    assetname:any;
    assetstatus:any;
    dateinservice:any;
    datesold:any;
    location:any;
    assetdata:any;
    mode:any;
    manuallySearch: any;

    constructor(
        private modalController: ModalController,
        public modalCtrl: ModalController,
        private navParams: NavParams,
        public httpClient: HttpClient,
        public toastController: ToastController,
        public appConst: AppConstants,
        public loadingController: LoadingController,
        public navCtrl: NavController,
        private barcodeScanner: BarcodeScanner
    ) {
        this.apiurl = this.appConst.getApiUrl();
    }

    ngOnInit() {
        this.modelId = this.navParams.data.paramID;
        this.serviceid = this.navParams.data.serviceid;
        this.user_id = this.navParams.data.user_id;
        this.assetdata = this.navParams.data.assetdata;
        this.mode = this.navParams.data.mode;
        this.manuallySearch = false

        if (this.mode == 'Edit' && this.assetdata['crmid'] != ''){
            this.barcodeCheckValueExits = true;
            this.barcodeAsset = {
                assetname: this.assetdata['assetname'],
                assetsid: this.assetdata['crmid'],
                assetstatus: this.assetdata['assetstatus'],
                cf_asset_location: this.assetdata['cf_asset_location'],
                dateinservice: this.assetdata['dateinservice'],
                datesold: this.assetdata['datesold'],
                serialnumber: this.assetdata['serialnumber']
            };

            this.assetname = this.assetdata['assetname'];
            this.location = this.assetdata['cf_asset_location'];
            this.assetstatus = this.assetdata['assetstatus'];
            this.dateinservice = this.assetdata['dateinservice'];
            this.datesold = this.assetdata['datesold'];


            console.log('this.barcodeAsset',this.barcodeAsset)
        }else{
            this.barcodeAsset = {
                'assetsid' : '',
            };
            this.barcodeCheckValueExits = false;
        }
    }

    scanAssetBarcode() {
        this.barcodeScanner.scan().then(barcodeData => {
            console.log('Barcode data', barcodeData);
            if (barcodeData.text != ''){
                this.barcodevalue = barcodeData.text;
                this.serialnumber = barcodeData.text;
                this.searchAsset();
            }
        }).catch(err => {
            var barcodeData = {cancelled: false,format: "EAN_13",text: "213546"}
            if (barcodeData.text != ''){
                this.barcodevalue = barcodeData.text;
            }
            console.log('Error', err);
        });
    }

    searchAsset() {
        this.barcodeAsset = {'assetsid' : ''};
        var barcodevalue = this.serialnumber;
        console.log('barcodevalue data', barcodevalue);
        console.log('barcodevalue.length data', barcodevalue.length);
        if (barcodevalue != '') {
            console.log('barcodevalue.length data', barcodevalue.length);

            var params = {
                user_id: this.user_id,
                barcodevalue: barcodevalue,
                record_id: this.serviceid
            }

            var headers = new HttpHeaders();
            headers.append("Accept", 'application/json');
            headers.append('Content-Type', 'application/x-www-form-urlencoded');
            headers.append('Access-Control-Allow-Origin', '*');
            this.showLoading();
            this.httpClient.post(this.apiurl + "getAssetBarcodeItem.php", params, {
                headers: headers,
                observe: 'response'
            }).subscribe(data => {
                this.hideLoading();
                var success = data['body']['success'];
                console.log('searchItem response was', data['body']);
                this.barcodeCheckValueExits = true;
                if (success == true) {
                    if(data['body']['data']['assetsid'] != ''){
                        this.barcodeAsset = data['body']['data'];
                    }
                }
            });
        }
    }

    async searchStartAsset(event){
        var barcodevalue = event.target.value;

        if (barcodevalue != ''){
            this.manuallySearch = true;
        }else{
            this.manuallySearch = false;
        }
    }

    async addAssetInSO(){
        console.log('addAssetInSO data', this.barcodeAsset);
        if(this.barcodeAsset['assetsid'] == ''){
            this.barcodeAsset['serialnumber'] = this.serialnumber;
            this.barcodeAsset['assetname'] = this.assetname;
            this.barcodeAsset['assetstatus'] = this.assetstatus;
            this.barcodeAsset['dateinservice'] = this.dateinservice;
            this.barcodeAsset['datesold'] = this.datesold;
            this.barcodeAsset['location'] = this.location;
            if (this.location == '' || this.location == undefined) {
                this.presentToast('Please Select Location. \n');
                return false;
            }
        }

        if (this.mode == 'Edit'){
            this.barcodeAsset['location'] = this.location;
        }

        var params = {
            user_id: this.user_id,
            asset_data: this.barcodeAsset,
            record_id: this.serviceid
        }

        var headers = new HttpHeaders();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('Access-Control-Allow-Origin', '*');
        this.showLoading();
        this.httpClient.post(this.apiurl + "AddAssetBarcodeItem.php", params, {
            headers: headers,
            observe: 'response'
        }).subscribe(data => {
            this.hideLoading();
            var success = data['body']['success'];
            console.log('searchItem response was', data['body']);
            if (success == true) {
                if(this.barcodeAsset['assetsid'] == ''){
                    this.presentToastPrimary('New Asset Created SuccessFully and added in Sales Order.')
                }else{
                    this.presentToastPrimary('Asset added in Sales Order.')
                }
            }else{
                this.presentToast('Error while adding asset. Please try after some time.')
            }
            this.closeModal({'success':success});
        });
    }

    async closeModal(data) {
        const onClosedData: string = "Wrapped Up!";
        await this.modalController.dismiss(data);
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
