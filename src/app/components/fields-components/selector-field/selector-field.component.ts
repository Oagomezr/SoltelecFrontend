import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Enum1 } from 'src/app/models/enums/enum1/Enum1';

@Component({
  selector: 'app-selector-field',
  standalone: true,
  imports: [CommonModule ,MatFormFieldModule, MatInputModule, MatSelectModule, FormsModule, ReactiveFormsModule],
  templateUrl: './selector-field.component.html',
  styleUrls: ['./selector-field.component.scss']
})
export class SelectorFieldComponent {
  @Input() formSelector !: FormControl;
  @Input() fields!: Enum1[];
  @Input() label !:string;
  @Input() errorLabel !:string;
}
