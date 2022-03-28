import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  showIncorrectRUT: boolean = false;

  searchPatient: FormGroup = this.fb.group({
    rut: ['', [Validators.required, Validators.minLength(9), Validators.pattern("[0-9]{7,8}\-[0-9|k|K]")]]
  })

  constructor(private fb: FormBuilder,
              private router: Router) { }
  searchRUT() {
    this.showIncorrectRUT = false;
    let rut: String = this.searchPatient.value.rut;
    if((this.searchPatient.value.rut as string).indexOf('-') == -1) {
      const tmp = rut.slice(0,rut.length-1) + "-" + rut.slice(rut.length-1, rut.length);
      rut=tmp;
      this.searchPatient.controls['rut'].setValue(rut);
    }
    if(this.searchPatient.valid) {
      this.searchPatient.reset();
      document.getElementById('btnModalRUT')?.click();
      this.router.navigate([`/fichaclinica/rut/${rut}`]);
    } else {
      this.searchPatient.reset();
      this.showIncorrectRUT = true;
    }
  }
  cleanForm() {
    this.searchPatient.reset();
    this.showIncorrectRUT = false;
  }

}
