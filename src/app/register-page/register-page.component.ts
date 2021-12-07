import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  router: Router

  constructor(router:Router) { 
    this.router = router
   }

  ngOnInit(): void {
  }

  gotologin(){
    this.router.navigateByUrl('/login')
  }

  gotoRegister(){
    this.router.navigateByUrl('/info')
  }

}
