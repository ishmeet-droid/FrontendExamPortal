import { Component } from '@angular/core';
import { of } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent{

  constructor(private userService : UserService){}

  public user = {
    username:'',
    password:'',
    fname:'',
    lname:'',
    email:'',
    phone:''
  }

  formSubmit(){
    console.log(this.user);
    if(this.user.username == '' || this.user.username == null){
      alert('User is required !!!!')
      return;
    }
    
    //addUser : userService to backEnd..
  //   of(this.userService.addUser(this.user)).subscribe(
  //  {
  //   next: (v) => {
  //     console.log(v);
  //     alert('success');
  //   },
  //   error: (e) => console.error(e),
    
  // }
  // )

  this.userService.addUser(this.user).subscribe(

   { next:(data) => {
      console.log(data);
      alert('success');
    },
    error:(e) => console.error(e)
  }
  )
  }



}
