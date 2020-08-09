import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { NavController, IonContent } from '@ionic/angular';
import { ServemeService } from '../service/serveme.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild(IonContent) content: IonContent;
  onVeiw;
  char = 0;

  timer: any
  constructor(
    public navig: NavController,
    private serveMe: ServemeService
  ) {}
  ngOnInit(): void {
    if (/Edge/.test(navigator.userAgent)) {
      const butterFly = document.getElementById('theButterfly');
      const butterFly2 = document.getElementById('theButterfly2');
      const butterFly3 = document.getElementById('theButterfly3');
      //const edgeOption = document.getElementById('edgeOption');
      //const services = document.getElementById('services');
      butterFly.style.display =  'none';
      butterFly2.style.display =  'none';
      butterFly3.style.display =  'none';
      //edgeOption.style.display =  'block';
      //services.style.display =  'none';
        
  }
  }
  myFunction() {
    const x = document.getElementById('myTopnav');
    if (x.className === 'topnav') {
      x.className += ' responsive';
    } else {
      x.className = 'topnav';
    }
  }
  goAbout() {
    
    document.getElementById('theAboutUs').scrollIntoView({behavior: 'smooth'});
   }
   goServices() {
    
    this.content.scrollToPoint(0,window.innerHeight*0.62,700)
   }
   
   goHome() {
    
    this.content.scrollToTop(400);
   }
   clipBoard(textT){
    navigator.clipboard.writeText(textT);
    this.serveMe.showAlert("Copied '"+textT+"' to clipboard",2)
    
   }

 
 
  onScroll(event) {
    // used a couple of "guards" to prevent unnecessary assignments if scrolling in a direction and the var is set already:
    const div = document.getElementById('theCover');
    const para1 = document.getElementById('parralax1');
    const para2 = document.getElementById('parralax2');
    const webApp = document.getElementById('webApp');
    const theButterfly = document.getElementById('theButterfly');
    const theButterfly2 = document.getElementById('theButterfly2');
    const databaseDTxt = document.getElementById('thedatabaseText');
    const theFlower = document.getElementById('theFlower');
    const theMenu = document.getElementById('theMenu');
    const screenHieght = window.innerHeight;
    const databaseD = document.getElementById('databaseD');
    const webAppTxt = document.getElementById('theWebText');
    
    para1.style.top =  event.detail.scrollTop * 0.8 + 'px';
    para2.style.top =  event.detail.scrollTop * 0.75 + 'px';
    theFlower.style.top =  event.detail.scrollTop * 0.75 + 'px';
    theButterfly.style.margin =  event.detail.scrollTop * 0.75 + 'px 0 0 0';
    theButterfly2.style.margin =  event.detail.scrollTop * 0.75 + 'px 0 0 0';

    if (event.detail.scrollTop > screenHieght * 0.2 && !this.onVeiw){
      div.classList.remove('cover');
      div.classList.add('coverBack');
      webApp.classList.remove('webDTitle');
      webApp.classList.add('fadeIn');
      databaseD.classList.remove('webDTitle');
      databaseD.classList.add('fadeIn');
      webAppTxt.classList.remove('textWebDesign');
      webAppTxt.classList.add('fadeIn');
      databaseDTxt.classList.remove('webDTitle');
      databaseDTxt.classList.add('fadeIn');
      theMenu.classList.remove('menuBefore');
      theMenu.classList.add('fadeIn');
      //this.goAbout();
    } else{
      div.classList.remove('coverBack');
      div.classList.add('cover');
      webApp.classList.add('webDTitle');
      webApp.classList.remove('fadeIn');
      databaseD.classList.add('webDTitle');
      databaseD.classList.remove('fadeIn');
      webAppTxt.classList.add('textWebDesign');
      webAppTxt.classList.remove('fadeIn');
      databaseDTxt.classList.remove('fadeIn');
      databaseDTxt.classList.add('webDTitle');
      theMenu.classList.add('menuBefore');
      theMenu.classList.remove('fadeIn');
    }
    }

}
