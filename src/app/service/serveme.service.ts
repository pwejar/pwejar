import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class ServemeService {

  constructor(
    private alertCtrl: AlertController,
    public angularFireAuth: AngularFireAuth,
    public router: Router,
    public firestore: AngularFirestore,
    public storageRef: AngularFireStorage,
  ) {

   }
   async showAlert(ujumbe: string, sec: number) {
    const alert = await this.alertCtrl.create({
      message: ujumbe
    });
    alert.present();
    setTimeout(() => alert.dismiss(), 1000 * sec);

   }
   async sendToFire(deta) {
    return await this.firestore.collection('quotation').add(deta);
  }
}
