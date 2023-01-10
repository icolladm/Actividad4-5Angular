import { Component } from '@angular/core';
import { EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public datos: any = {
    email: '',
    password: ''
  }

  isValid = false

  public validate(){
    let regexp = new RegExp(/\S+@\S+\.\S+/)
    if (this.datos.password.length > 8 && regexp.test(this.datos.email) ) { this.isValid = true}
    console.log(this.datos.password)
    console.log(this.datos.password.length > 8)
    console.log(this.datos.email)
    console.log(regexp.test(this.datos.email))
  }
}
