import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor() { }
  isLoggedIn(): boolean {
    return false;
  }
}
