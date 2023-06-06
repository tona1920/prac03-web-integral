import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { BaseForm } from 'src/app/shared/utils/base-form';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  onLogin() {
    this.router.navigate(['/home']);
  }

  loginForm = this.fb.group({
    username:['',[Validators.required]],
    password:['',[Validators.required, Validators.minLength(3)]]
  });

  constructor(private fb : FormBuilder, public baseForm:BaseForm, public router:Router){}

  ngOnInit(): void {
  }

}
