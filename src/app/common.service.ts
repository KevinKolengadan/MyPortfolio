import { Injectable } from '@angular/core';
import * as $ from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  modalTrigger = $('.nav-icon');
  transitionLayer = $('.cd-transition-layer');
  transitionBackground = this.transitionLayer.children();
  modalWindow = $('.full-menu');
  
  static showNavMenu(event: any) {
    event.preventDefault();
    $('.cd-transition-layer').addClass('visible opening');
    var delay = ( $('.no-cssanimations').length > 0 ) ? 0 : 600;
    setTimeout(function(){
      $('.full-menu').addClass('visible');
    }, delay);
  }

}
