import { Component } from '@angular/core';
import { of } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent{

  constructor(private userService : UserService, private snack:MatSnackBar){}

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
    if((this.user.username == '' || this.user.username == null) 
    || (this.user.email == '' || this.user.email == null)
    || (this.user.fname == '' || this.user.fname == null)
    || (this.user.password == '' || this.user.password == null)
    || (this.user.phone == '' || this.user.phone == null)
    ){
   
      Swal.fire('failure', '* Marked feilds are required !!!','warning');
      return;
    }
    //TODO: Validation on each field...
  
    
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

   { next:(data : any) => {
      console.log(data);
      // alert('success');
      // using Sweet Alert...
      Swal.fire('Sucess', 'User Is Registered with userId:' + data.id ,'success')
    },
    error:(e) =>{
       console.error(e);
      // this.snack.open('Something went wrong!!', '' ,{
      //   duration: 2000,
      // })
      Swal.fire('Failure', 'Something went wrong!!','error')
    }
  }
  )
  }



}
