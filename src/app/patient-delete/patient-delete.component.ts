import { Component } from '@angular/core';

@Component({
  selector: 'app-patient-delete',
  templateUrl: './patient-delete.component.html',
  styleUrls: ['./patient-delete.component.css']
})
export class PatientDeleteComponent {
  id=""
  eventDelete=()=>
  {
    let data1:any={
      "id":this.id
    }
    console.log(data1)
  }

}
