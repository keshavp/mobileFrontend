import { Component , ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ClienteServiceProvider } from '../../providers/cliente-service/cliente-service';

// import { RegisterPage } from '../register/register';

import { LoginProvider } from '../../providers/login/login';

import { UserInfo } from '../../user-info';

import { AlertController } from 'ionic-angular/components/alert/alert-controller';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  userInfo: UserInfo = new UserInfo();

  error: any;

  @ViewChild('mobileNo') mobileNo: any;
  @ViewChild('country') country: any;
  @ViewChild('langitude') langitude: any;
  @ViewChild('latitude') latitude: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public loginProvider: LoginProvider ,
    public clienteServiceProvider: ClienteServiceProvider,
    public alertCtrl: AlertController
  ) {
  }
/*
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
*/
  nextfun(){
    console.log('----1---',this.country.value);
    console.log('----2---',this.mobileNo.value);
    console.log('----3---',this.mobileNo.value);

    // this.loginProvider.doGET();
    // this.loginProvider.doPOST();
    // this.loginProvider.doPOST();

   // this.navCtrl.push(RegisterPage);

    this.save();

      this.loginProvider.getGoodBeers().subscribe(res => {
      console.log("---giphyUrl---",res);
    })
  }


  save() {

    this.loginProvider.save().subscribe(result => {

      console.log("---giphyUrl---result---",result);

    }, error => this.error = error)
  }



  signupUser() {

    this.userInfo.mobNumber = "75061";
    this.userInfo.latitude = "75061";
    this.userInfo.longitude = "75061";

    this.clienteServiceProvider.insert(this.userInfo)
      .subscribe(response => {
        this.showInsertOk();
      },
      error => {});
  }

  showInsertOk() {
    let alert = this.alertCtrl.create({
      title: 'Sucesso!',
      message: 'Cadastro efetuado com sucesso',
      enableBackdropDismiss: false,
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            this.navCtrl.pop();
          }
        }
      ]
    });
    alert.present();
  }
}
