import { Component } from '@angular/core';
import { faCoffee,faStopwatch,faClipboardCheck,faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { UserService } from './user-service';
import { ActivatedRoute } from '@angular/router';


interface Users{
  name:string;
  secondName?:string;
  lastName1:string;
  lastName2?:string;
  day?:number;
  month?:string;
  year?:number;
  email:string;
  phone?:number;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Chat-Form';
  faCoffee = faCoffee;
  faStopwatch = faStopwatch;
  faClipboardCheck = faClipboardCheck;
  faUserCircle = faUserCircle;

  user: Users={
    name:'',
    lastName1:'',
    email:''
  };

  constructor(private userService: UserService, private activatedRoute:ActivatedRoute) {
     
     
  }



  cambiarNombre(event:any){
      console.log(event.target.value);
  }

  agregar(){
      this.userService.post(this.user).subscribe((data)=>{
      alert("Cliente Agregado");
     // location.reload();
    });
  
   }
}
