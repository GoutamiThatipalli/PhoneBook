import { Component, OnInit ,Input} from '@angular/core';
import { FormGroup} from '@angular/forms';
@Component({
  selector: 'app-add-mobileno',
  templateUrl: './add-mobileno.component.html',
  styleUrls: ['./add-mobileno.component.css']
})
export class AddMobilenoComponent implements OnInit {
  @Input('group')
  public mobileForm: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
