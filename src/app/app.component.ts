import { Component } from '@angular/core';
import { faCoffee,faStopwatch,faClipboardCheck,faUserCircle } from '@fortawesome/free-solid-svg-icons';


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
  title = 'rocketCode';
  faCoffee = faCoffee;
  faStopwatch = faStopwatch;
  faClipboardCheck = faClipboardCheck;
  faUserCircle = faUserCircle;

  user: Users={
    name:'',
    secondName:'',
    lastName1:'',
    lastName2:'',
    email:''
  };


  agregar(){
    console.log(this.user)
  }

  cambiarNombre(event:any){
      console.log(event.target.value);
  }
}
