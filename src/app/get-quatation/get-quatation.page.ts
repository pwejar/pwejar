import { Component, OnInit } from '@angular/core';
import { ServemeService } from '../service/serveme.service';

@Component({
  selector: 'app-get-quatation',
  templateUrl: './get-quatation.page.html',
  styleUrls: ['./get-quatation.page.scss'],
})
export class GetQuatationPage implements OnInit {
  name: Text;
  email: Text;
  phone: number;
  moreD: Text;
  company: Text;
  
  constructor(
    private serveMe: ServemeService
  ) { }

  ngOnInit() {
    this.serveMe.angularFireAuth.signInAnonymously();
  }
  ValidateEmail(mail)
  {
   if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
    {
      return (true);
    }
   return (false);
  }

 toFirebase(){
 if (!this.name){
   return this.serveMe.showAlert('Kindly input your name', 2);
 }
 if (!this.email){
  return this.serveMe.showAlert('Kindly input your email address!', 2);
}
 if (this.ValidateEmail(this.email) === false){
  return this.serveMe.showAlert('Kindly input a valid email address!', 2);
}
 if (!this.moreD){
  return this.serveMe.showAlert('Kindly add more details', 2);
}
 if (!this.phone) {
  this.phone = null;
}
 if (!this.company) {
  this.company = null;
}
 this.serveMe.showAlert('Sending data please wait', 2);
 this.serveMe.sendToFire({name: this.name , email: this.email , phone: this.phone , details: this.moreD}).then(() => {
  this.moreD = undefined;
  this.name = undefined;
  this.email = undefined;
  this.company = undefined;
  this.phone = undefined;
  this.serveMe.showAlert('Thank you for choosing Pwejar. We will reach you through your email shortly.', 2);

 }).catch((err)=>{
   console.log(err);
   this.serveMe.showAlert('sorry something went wrong, Kindly check your internet connection', 5);
 });
 }

 myFunction() {
  const x = document.getElementById('myTopnav');
  if (x.className === 'topnav') {
    x.className += ' responsive';
  } else {
    x.className = 'topnav';
  }
}


 clipBoard(textT){
  navigator.clipboard.writeText(textT);
  this.serveMe.showAlert('Copied \'' + textT + '\' to clipboard', 2);

 }

}
