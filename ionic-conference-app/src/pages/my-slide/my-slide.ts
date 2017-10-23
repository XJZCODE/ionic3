import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { Component } from '@angular/core';
@Component({  
selector: 'my-slide',  
templateUrl: 'my-slide.html',

})  
export class MySlide {  

  @ViewChild(Slides) slides: Slides;
  
    goToSlide() {
      this.slides.slideTo(2, 500);
    }

    // slideChanged() {
    //   let currentIndex = this.slides.getActiveIndex();
    //   console.log('Current index is', currentIndex);
    // }
  //   ionViewDidLoad() {
  //     this.slides.startAutoplay();  
  //     console.log("aaaaaaaaaaaaaaaaaaaaaaaaa");
  //   }
  //      //页面进入时启动自动播放  
  //  ionViewDidEnter(){  
  //   this.slides.startAutoplay();  
  //      } 
  autoPlay(){
    this.slides.startAutoplay();}
} 