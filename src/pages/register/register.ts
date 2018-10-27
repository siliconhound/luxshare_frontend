import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserProvider} from '../../providers/user/user';


/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})

export class RegisterPage {
  userForm: FormGroup;
  constructor(public userProvider : UserProvider, public formBuilder: FormBuilder, public navCtrl: NavController, public navParams: NavParams) {

    this.userForm = this.createMyForm();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  private createMyForm(){
    return this.formBuilder.group({
      name: ['asdasd', Validators.required],
      username: ['', Validators.required],
      email: ['', Validators.required],
      pass: ['', Validators.required],
      // dateBirth: ['', Validators.required],
      // passwordRetry: this.formBuilder.group({
      //   password: ['', Validators.required],
      //   passwordConfirmation: ['', Validators.required]
      // }),
      // gender: ['', Validators.required],
    });
  }

  SendRequest(){
    console.log(this.userForm.value);
    alert(this.userForm.value);
    this.userProvider.Post(this.userForm.value);
  }
}
