import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Enum1 } from 'src/app/models/enums/enum1/Enum1';
import { MatInputModule } from '@angular/material/input';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-autocomplete-field',
  standalone: true,
  imports: [CommonModule, MatAutocompleteModule, MatFormFieldModule, MatInputModule, FormsModule, 
    ReactiveFormsModule],
  templateUrl: './autocomplete-field.component.html',
  styleUrls: ['./autocomplete-field.component.scss']
})
export class AutocompleteFieldComponent {

  @Output() sendSearch = new EventEmitter<string>();
  @Output() sendOption = new EventEmitter<number>();
  @Input() options!: Enum1[];
  @Input() label!: string;
  @Input() fieldText:string='';
  @Input() disabled: boolean = false;
  myControl = new FormControl(this.fieldText, Validators.required);
  optionSelected: boolean = false;

  search(inputSearch: any){
    let text: string = inputSearch.target.value;
    this.sendSearch.emit(text);
    this.optionSelected = false;
  }

  selectOption(id:number){
    this.optionSelected = true;
    this.sendOption.emit(id);
  }

  isOptionSelected(){
    if(!this.optionSelected){
      this.myControl.setValue('');
      this.sendOption.emit(0);
    } 
  }

  ngOnChanges(changes: SimpleChanges){
    if (changes['disabled']) {
      this.myControl.setValue('');
    }
  }

}
