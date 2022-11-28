import { Component } from '@angular/core';

@Component({
  selector: 'app-patient-entry',
  templateUrl: './patient-entry.component.html',
  styleUrls: ['./patient-entry.component.css']
})
export class PatientEntryComponent {
username=""
id=""
address=""
number=""
date=""
image=""
doctor=""

eventEntry=()=>
{
  let data00:any={
   "username":this.username,
   "id":this.id,
  "address":this.address,
  "number":this.number,
  "date":this.date,
  "image":this.image,
  "doctor":this.doctor
  }
  console.log(data00)
}

}
