import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { User } from 'src/model/User';
import { UserService } from 'src/services/user.service';
import { AuthService } from 'src/services/auth.service';
@Component({
  selector: 'app-empty',
  templateUrl: './empty.component.html',
  styleUrls: ['./empty.component.css']
})
export class EmptyComponent implements OnInit {

  public formData: User ={
    username:'',
    password:''
    }


    constructor(private router:Router,private userService:UserService,private authService:AuthService){

    }
    ngOnInit(): void{


    }
    onSubmit(login : NgForm)
    {
      this.userService.login(this.formData).subscribe(response =>{
        let res:any=response;
        if(res.hasOwnProperty("jwt"))
        {
          AuthService.setToken(res.jwt);
          this.authService.login(res.username,res.admin);
          this.router.navigate(['/nav-bar']);
          console.log("routed");
          login.reset();
        }
      });
      /*if(this.formData.username==="admin" && this.formData.password==="123"){
        console.log(this.formData.username);
        this.router.navigate(['/nav-bar']);
        console.log("routed");
        login.reset();
        console.log("reset");
      }*/
    }






}
