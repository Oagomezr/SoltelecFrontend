import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-confirm-code-field',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './confirm-code-field.component.html',
  styleUrls: ['./confirm-code-field.component.scss']
})
export class ConfirmCodeFieldComponent {
  ngOnInit(){
    this.waitTime = 60;
    this.counter();
  }

  @Input() badCode: boolean = false;
  @Input() email: string = '';
  @Output() confirm = new EventEmitter<string>();
  @Output() reSend = new EventEmitter<void>();

  code: string = '------';
  waitTime: number = 0;

  typeCode(index: number, event: any) {
    let character = event.target.value;

    let charaters = this.code?.split('') || [''];
    
    //If the entered value is numeric, add and focus the next input
    if (/^\d*$/.test(character) && character != '') {

      charaters[index] = character;
      this.code= charaters.join('');

      let nextInput = event.target.nextElementSibling as HTMLInputElement;
      if (nextInput) {
        nextInput.focus();
      }

    } else {
      //If the entered value is not numeric, delete the content
      event.target.value = '';
    }
  }

  
  counter(){

    setTimeout(() => {
      this.waitTime -= 1;
      if(this.waitTime > 0) this.counter();
    }, 1000);

  }

  confirmCode(){
    this.confirm.emit(this.code);
  }

  resendCode(){
    this.reSend.emit();
    this.waitTime = 60;
    this.counter();
  }
}
