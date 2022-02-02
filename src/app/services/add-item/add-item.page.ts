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
    selector: 'add-item-modal',
    templateUrl: './add-item.page.html',
    styleUrls: ['./add-item.page.scss'],
})
export class AddItemModalPage implements OnInit {

    modelId: number;
    serviceid: any;
    barcodeProduct: any;
    barcodeCheckValueExits: any;
    barcodevalue: any;
    apiurl: any;
    user_id: any;
    dataReturned: any;
    manuallySearch: any;
    productname: any;
    productcode: any;
    quantity: any;

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
        this.barcodeProduct = {
            'productid' : ''
        };
        this.barcodeCheckValueExits = false;
        this.manuallySearch = false
    }

    scanItemBarcode() {
        this.barcodeScanner.scan().then(barcodeData => {
            console.log('Barcode data', barcodeData);
            if (barcodeData.text != ''){
                this.barcodevalue = barcodeData.text;
                this.searchItem();
            }
        }).catch(err => {
            var barcodeData = {cancelled: false,format: "EAN_13",text: "322322322"}
            if (barcodeData.text != ''){
                this.barcodevalue = barcodeData.text;
                this.searchItem();
            }
            console.log('Error', err);
        });
    }

    searchItem() {
        this.barcodeProduct = {'productid' : ''};
        var barcodevalue = this.barcodevalue;
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
            this.httpClient.post(this.apiurl + "getBarcodeItem.php", params, {
                headers: headers,
                observe: 'response'
            }).subscribe(data => {
                this.hideLoading();
                var success = data['body']['success'];
                console.log('searchItem response was', data['body']);
                this.barcodeCheckValueExits = true;
                if (success == true) {
                    if(data['body']['data']['productid'] != ''){
                        data['body']['data']['quantity'] = 1;
                        data['body']['data']['total'] = data['body']['data']['unit_price'];
                        this.barcodeProduct = data['body']['data'];
                    }
                }

                if (this.barcodeProduct['productid'] == ''){
                    this.productcode = barcodevalue;
                }
            });
        }
    }

    async addItemInSO(){
        console.log('addItemInSO data', this.barcodeProduct);

        if(this.barcodeProduct['productid'] == ''){
            this.barcodeProduct['productname'] = this.productname;
            this.barcodeProduct['productcode'] = this.productcode;
            this.barcodeProduct['quantity'] = this.quantity;

            if (this.productcode == '' || this.productcode == undefined) {
                this.presentToast('Please Fill Part Number. \n');
                return false;
            }
            if (this.productname == '' || this.productname == undefined) {
                this.presentToast('Please Fill Product Name. \n');
                return false;
            }
            if (this.quantity == '' || this.quantity == undefined) {
                this.presentToast('Please Fill Quantity. \n');
                return false;
            }
        }

        var params = {
            user_id: this.user_id,
            item_data: this.barcodeProduct,
            record_id: this.serviceid
        }

        var headers = new HttpHeaders();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('Access-Control-Allow-Origin', '*');
        this.showLoading();
        this.httpClient.post(this.apiurl + "addBarcodeItem.php", params, {
            headers: headers,
            observe: 'response'
        }).subscribe(data => {
            this.hideLoading();
            var success = data['body']['success'];
            console.log('searchItem response was', data['body']);
            if (success == true) {
                if(this.barcodeProduct['productid'] == ''){
                    this.presentToastPrimary('New Product Created SuccessFully and added in Sales Order.')
                }else{
                    this.presentToastPrimary('Product added in Job.')
                }
            }else{
                this.presentToast('Error while adding item. Please try after some time.')
            }
            this.closeModal({'success':success});
        });
    }

    async searchStartItem(event){
        var barcodevalue = event.target.value;

        if (barcodevalue != ''){
            this.manuallySearch = true;
        }else{
            this.manuallySearch = false;
        }
    }

    async changeField(event,fieldName){
        var fieldValue = event.target.value;
        fieldValue = (fieldValue == '') ? 0 : parseFloat(fieldValue);
        this.barcodeProduct[fieldName] = fieldValue;
        this.barcodeProduct['total'] = (parseFloat(this.barcodeProduct['quantity'])*parseFloat(this.barcodeProduct['unit_price'])).toFixed(2);
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
