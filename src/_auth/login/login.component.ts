import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/_services/user.service';
import { ConstUrls } from 'src/consUrl';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
logInForm:any = FormGroup
submitted  = false
  constructor(private _US:UserService,
    private _FB:FormBuilder,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.onInIt()
  }


  onInIt(){
this.logInForm = this._FB.group({
  email:['',Validators.required],
  password:['',Validators.required]
})
  }

  get d() {return this.logInForm.controls}

  login(){
    if(this.logInForm.invalid){
      this.submitted = true
      return
    }
    console.log(this.logInForm,'logInFormlogInForm')
    this._US.securePost(ConstUrls.adminAuthApi.login, this.logInForm.value).subscribe((res:any)=>{
       let userDtails = res?.response
       this.submitted = false
       this._US.setLocalStorage('email',userDtails.email)
       this._US.setLocalStorage('token',userDtails.tokens[0].token)
       this._US.setLocalStorage('_id',userDtails._id)
       this.router.navigate(['/card'])
    })
  }

}
