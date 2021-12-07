import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modify-page',
  templateUrl: './modify-page.component.html',
  styleUrls: ['./modify-page.component.css']
})
export class ModifyPageComponent implements OnInit {

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
