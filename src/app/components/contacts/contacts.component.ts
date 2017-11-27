import { Component, OnInit } from '@angular/core';
import { UserComponent } from '../user/user.component';
import { GlobalDataService } from '../../services/global-data.service';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
 
  arr=[];
  constructor(private gds: GlobalDataService) { 
  }

  ngOnInit() {
    console.log(this.gds.getContacts());
    this.arr= this.gds.getContacts();
  }

}
