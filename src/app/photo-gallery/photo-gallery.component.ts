import { Component, OnInit, HostListener } from '@angular/core';
import * as $ from 'jquery';
import { CommonService } from '../common.service';
@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.css']
})
export class PhotoGalleryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  modalTrigger = $('.nav-icon');
  transitionLayer = $('.cd-transition-layer')
  transitionBackground = this.transitionLayer.children();
  modalWindow = $('.full-menu');

  onClickNavMenu(event){
    CommonService.showNavMenu(event);
  };

  // scrollHandler1(event){
  //   console.log(event);
  // };
  @HostListener('window:scroll', ['$event']) 
  onWindowScroll(event) {
      var absoluteHeight = event.currentTarget.scrollY % event.currentTarget.innerHeight;
      var imageNo = Math.floor(event.currentTarget.scrollY/event.currentTarget.innerHeight);
      var percentageChange = absoluteHeight/event.currentTarget.innerHeight;
      if(imageNo==0){
        var animateValue = 100+(1-percentageChange)*20;
        
        $('.text1').css('opacity' , 1-percentageChange);
        $('.img1').css('width' , animateValue+'vw');
        $('.fade-in-out').css('opacity' , 1-percentageChange);
        $('.fade-out-in').css('opacity' , percentageChange);
      }if(imageNo==1){
        $('.fade-in-out').css('opacity' , percentageChange);
        $('.fade-out-in').css('opacity' , 1-percentageChange);
        
        $('.text3').css('opacity' , percentageChange).css('right', (1-percentageChange)*200 + 'px');
      }if(imageNo==2){
        $('.text3').css('opacity' , 1-percentageChange).css('right', -percentageChange*200 +'px');
      }
      console.log(absoluteHeight);
      console.log(imageNo);
    }

}
