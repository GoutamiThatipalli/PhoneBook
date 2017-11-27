import { Component, OnInit } from '@angular/core';
import {FormGroup,FormArray,FormBuilder,FormControl} from '@angular/forms';
import {GlobalDataService} from '../../services/global-data.service';
import { AbstractControl } from '@angular/forms/src/model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
form;
  ngOnInit() {
  this.form = new FormGroup({
   username : new FormControl(),
   designation : new FormControl(),
   mobile :  this._fb.array([]),
   email : new FormControl(),
   city : new FormControl(),
   empid : new FormControl(),
  });
  this.onAddProperty();
}

  onSubmit = function(user){
   this.gds.addContact(user);
  };
  onAddProperty() {
    const control = <FormArray>this.form.controls['mobile'];
    const addrCtrl = this.initAddress();
    control.push(addrCtrl);
  }
  initAddress() {
    return this._fb.group({
        mobile:[]
    });
}

  constructor(private gds: GlobalDataService,private _fb: FormBuilder) { }
}
