import { Component, Input, OnInit } from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-date-field',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, FormsModule, ReactiveFormsModule],
  templateUrl: './date-field.component.html',
  styleUrls: ['./date-field.component.scss'],
  
})
export class DateFieldComponent {
  @Input() formBirthDate : FormControl = new FormControl(new Date(1990, 0, 1));
  @Input() label: string = '';
  startDate = new Date(1990, 0, 1);
  ngOnInit(): void {
    let currentDate = new Date();
    let eighteenYearsAgo = currentDate.getFullYear() - 18;
    this.startDate = new Date(eighteenYearsAgo, currentDate.getMonth(), currentDate.getDate());
    /* if(this.formBirthDate.value !== ''){
      let currentFormDate = new Date(this.formBirthDate.value);
      this.formBirthDate.setValue(new Date(currentFormDate.getFullYear(), currentFormDate.getMonth(), currentFormDate.getDate() + 1));
    } */
  }
}
