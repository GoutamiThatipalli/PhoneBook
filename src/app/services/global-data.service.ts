import { Injectable } from '@angular/core';
import { User} from './../model/usermodel'

@Injectable()
export class GlobalDataService {
contacts:  any = [];
addContact(user:User)
{
   this.contacts.push(user);
}
getContacts(){
  return this.contacts;
}

  constructor() {
   }

}

