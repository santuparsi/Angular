import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthguradServiceService {

  constructor() {


   }

   gettoken(){ 
 
  debugger;
    return !!localStorage.getItem("SeesionUser");
  
}


}
