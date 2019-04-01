import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import * as $ from 'jquery';


@Component({
  selector: 'route-component',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.css']
})
export class RouteComponent implements OnInit {

  constructor(private router: Router) { }

  closeBlackBackdrop(event){
    var modalTrigger = $('.nav-icon'),
      transitionLayer = $('.cd-transition-layer'),
      transitionBackground = transitionLayer.children(),
      modalWindow = $('.full-menu');
    event.preventDefault();
      transitionLayer.addClass('closing');
      modalWindow.removeClass('visible');
      transitionBackground.one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(){
          transitionLayer.removeClass('closing opening visible');
          transitionBackground.off('webkitAnimationEnd oanimationend msAnimationEnd animationend');
      });
  };

  ngOnInit() {
  }

  onClickGallery (event){
    this.router.navigateByUrl('/gallery');
    this.closeBlackBackdrop(event);
  };

  onClickAboutMe (){
    this.router.navigateByUrl('/aboutMe');
    this.closeBlackBackdrop(event);
    
  };
  onClickContact (){
    this.router.navigateByUrl('/contact');
    this.closeBlackBackdrop(event);
  };
  

}
