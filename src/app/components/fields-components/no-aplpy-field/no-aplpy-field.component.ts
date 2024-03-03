import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-no-aplpy-field',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, 
    MatInputModule, MatButtonModule, MatIconModule, FormsModule, ReactiveFormsModule],
  templateUrl: './no-aplpy-field.component.html',
  styleUrls: ['./no-aplpy-field.component.scss']
})
export class NoAplpyFieldComponent {
  @Input() form : FormControl = new FormControl('');
  hide = false;
  @Input() label:string ='';
  @Input() desactivatedLabel:string ='';

  togglePasswordVisibility(event: Event) {
    event.preventDefault();
    this.hide = !this.hide;
    if(this.hide){this.form.disable();}
    else{this.form.enable()}
    
  }
}
