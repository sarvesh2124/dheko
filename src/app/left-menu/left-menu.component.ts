import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css']
})
export class LeftMenuComponent implements OnInit {
  currentUrl: any;
  constructor(private router: Router) { 
    this.currentUrl = this.router.url;
  }

  ngOnInit(): void {
    
  }

}
