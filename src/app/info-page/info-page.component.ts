import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-page',
  templateUrl: './info-page.component.html',
  styleUrls: ['./info-page.component.css']
})
export class InfoPageComponent implements OnInit {

  router: Router

  constructor(router:Router) { 
    this.router = router
   }

  ngOnInit(): void {
  }

  gotologin(){
    this.router.navigateByUrl('/login')
  }

}
