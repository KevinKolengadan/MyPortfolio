import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';  
import { CommonService } from '../common.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  onClickNavMenu(event){
    CommonService.showNavMenu(event);
  };

}
