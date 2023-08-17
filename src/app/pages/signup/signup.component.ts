import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent{

  public user = {
    username:'',
    password:'',
    fName:'',
    lName:'',
    email:'',
    phone:''
  }

  formSubmit(){
    console.log(this.user);
    if(this.user.username == '' || this.user.username == null){
      alert('User is required !!!!')
    }
    return;
  }

}
