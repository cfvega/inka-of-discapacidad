import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  sectors = ['Pichidegua Centro', 'Larmahue', 'Santa Amelia', 'El Salto', 'San Roberto', 'Pataguas Cerro', 'El Toco', 'Pataguas Orilla', 'San José'];

  viewRND = false;
  viewRSH = false;
  gradeValue: number =0;

  healthForm = this.fb.group({
    type: [],
    grade: [10, []],
    id_center: [],
    diagnosis: []
  })

  userData = this.fb.group({
 
  });

  constructor(private route: ActivatedRoute,
              private fb: FormBuilder) { }

  ngOnInit(): void {
    console.log(this.route.data.subscribe((d:any)=>{
      this.userData.reset();
      if(d.mode == 'editing'){
        //TODO: call server to get data
      }
    }));
  }

  rnd(e:any) {
    this.viewRND = e.checked;
  }
  rsh(e:any) {
    this.viewRSH = e.checked;
  }
  updateControl(tmp:any=null) {
    if(!tmp) {
      (document.getElementById('inp_selector_grade') as HTMLInputElement).value = this.gradeValue.toString();
    }
    if(tmp) {
      this.gradeValue = parseInt((document.getElementById('inp_selector_grade') as HTMLInputElement).value);

    }
    this.healthForm.controls['grade'].setValue(this.gradeValue);
  }
  updateKnob(){
  }

}
