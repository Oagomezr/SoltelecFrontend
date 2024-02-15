import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-phone-field',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatIconModule, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './phone-field.component.html',
  styleUrls: ['./phone-field.component.scss']
})
export class PhoneFieldComponent {
  @Input() formCelphone : FormControl = new FormControl('');
  isPhoneNumberComplete: boolean = true;

  formatPhoneNumber(event: KeyboardEvent) {
    let value = this.formCelphone.value;
    let lastCharacter = value.slice(-1);

    if ((value.length == 3 || value.length == 7) && event.key != 'Backspace' && !/\D/.test(lastCharacter)) {
      this.formCelphone.setValue(value + '-');
    }else if(event.key != 'Backspace' && /[^0-9-]/.test(lastCharacter)){
      this.formCelphone.setValue(value.slice(0, -1));
    }
  }
}
