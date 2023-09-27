import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  template: `
  <div [ngClass] ="{fadeout: checkstatus != false}"> <div >This website will provide you slouch preventing devices of your choice</div>
  <div class= "close"><button class="btn" (click) = "removenotification()">x</button></div>
  </div>`,
  
  styles: ["div{margin: 10px 10px ; padding: 10px 10px ; background-color:blue; }, p{font-style:15px}",
  ".close{ float:right ;margin-top: -35px}",
  ".fadeout{ visibility:hidden; opacity:0;transition: visibility 0s 2s,opacity 2s linear;}" 
  ]
})
export class NotificationComponent {
checkstatus:boolean =false;

removenotification(){
this.checkstatus = true;
}
}

