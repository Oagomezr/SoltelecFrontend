import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ConfirmCodeFieldComponent } from '../../fields-components/confirm-code-field/confirm-code-field.component';
import { DateFieldComponent } from '../../fields-components/date-field/date-field.component';
import { PasswordFieldComponent } from '../../fields-components/password-field/password-field.component';
import { PhoneFieldComponent } from '../../fields-components/phone-field/phone-field.component';
import { SelectorFieldComponent } from '../../fields-components/selector-field/selector-field.component';
import { EnumsService } from 'src/app/services/enums/enum1/enums.service';
import { Enum1 } from 'src/app/models/enums/enum1/Enum1';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { AutocompleteFieldComponent } from '../../fields-components/autocomplete-field/autocomplete-field.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NoAplpyFieldComponent } from '../../fields-components/no-aplpy-field/no-aplpy-field.component';

@Component({
  selector: 'app-vehiculo-form',
  templateUrl: './vehiculo-form.component.html',
  styleUrls: ['./vehiculo-form.component.scss'],
  standalone: true,
  imports: [
    CommonModule, MatFormFieldModule, ReactiveFormsModule, DateFieldComponent, 
    SelectorFieldComponent, PhoneFieldComponent, PasswordFieldComponent, ConfirmCodeFieldComponent, 
    MatInputModule, MatButtonModule, MatSelectModule, MatDatepickerModule, MatSlideToggleModule,
    MatNativeDateModule, MatIconModule, MatAutocompleteModule, AutocompleteFieldComponent, NoAplpyFieldComponent]
})
export class VehiculoFormComponent {

  ngOnInit(){
    this.getClasesVehiculos();
    this.getTipoServicio();
    this.getServiciosEspeciales();
  }

  getClasesVehiculos(){
    this.enumSer.getClasesVehiculos().subscribe({
      next: r =>{
        this.clasesVehiculos = r.data;
      },error: e=>{
        console.error("Clases de vehiculos no encontrada: ", e);
      }
    });
  }

  getTipoServicio(){
    this.enumSer.getTiposServicios().subscribe({
      next: r =>{
        this.tiposServicios = r.data;
      },error: e=>{
        console.error("Clases de vehiculos no encontrada: ", e);
      }
    });
  }

  getServiciosEspeciales(){
    this.enumSer.getServiciosEspeciales().subscribe({
      next: r =>{
        this.serviciosEspeciales = r.data;
      },error: e=>{
        console.error("Clases de vehiculos no encontrada: ", e);
      }
    });
  }

  tiposServicios!: Enum1[];
  serviciosEspeciales!: Enum1[];
  clasesVehiculos!: Enum1[];
  marcasVehiculos!: Enum1[];
  lineasVehiculo: Enum1[] = [];
  idMarca: number = 0;

  numerosLetras:string = '^[a-zA-Z0-9_\\s]*$';
  soloNumeros:string = '^[0-9]*$';
  campo:string ='';

  vehiculeFormGroup = new FormGroup({
    idCar: new FormControl(0),
    placa: new FormControl('', { validators: [Validators.required, Validators.pattern(this.numerosLetras)], updateOn: 'blur'}),
    modelo: new FormControl('', { validators: [Validators.required, Validators.pattern(this.soloNumeros)], updateOn: 'blur'}),
    tipo: new FormControl( '', { validators: [Validators.required], updateOn: 'blur'}),
    linea: new FormControl(0, Validators.required),
    clase: new FormControl(0, Validators.required),
    tipoServicio: new FormControl('', Validators.required),
    servicioEspecial: new FormControl('', Validators.required),
    cilindraje: new FormControl('', { validators: [Validators.required, Validators.pattern(this.soloNumeros)], updateOn: 'blur'}),
    tiemposMotor: new FormControl('', { validators: [Validators.required, Validators.pattern(this.soloNumeros)], updateOn: 'blur'}),
    numExostos: new FormControl('', { validators: [Validators.required, Validators.pattern(this.soloNumeros)], updateOn: 'blur'}),
    ejes: new FormControl('', { validators: [Validators.required, Validators.pattern(this.soloNumeros)], updateOn: 'blur'}),
    pais: new FormControl('', Validators.required),
    numChasis: new FormControl('', { validators: [Validators.required, Validators.pattern(this.numerosLetras)], updateOn: 'blur'}),
    pesoBruto: new FormControl('', { validators: [Validators.required, Validators.pattern(this.soloNumeros)], updateOn: 'blur'}),
    potencia: new FormControl('', { validators: [Validators.required, Validators.pattern(this.soloNumeros)], updateOn: 'blur'}),

  });

  searchMarcas(value:string){
    if (value.length >1) {
      this.enumSer.getMarcasVehiculos(value).subscribe({
        next: response => {
          this.marcasVehiculos = response.data;
        },
        error: error => {
          console.error("Marcas not found:", error);
        }
      });
    } else {
      this.marcasVehiculos = [];
    }
  }

  setMarca(id:number){
    console.log(id);
    this.idMarca = id;
    this.vehiculeFormGroup.get("linea")?.setValue(0);
    this.lineasVehiculo = [];
  }

  searchLineas(value:string){
    let marca = this.idMarca;
    if (value.length >1 && marca != 0) {
      this.enumSer.getLineaVehiculo(value, marca!).subscribe({
        next: response => {
          this.lineasVehiculo = response.data;
        },
        error: error => {
          console.error("lineas not found:", error);
        }
      });
    } else {
      this.lineasVehiculo = [];
    }
  }

  setLinea(id:number){
    this.vehiculeFormGroup.get("linea")?.setValue(id);
  }

  confirm : boolean = false;

  email : string = '';

  constructor(private enumSer: EnumsService, private router: Router){}

  /* sendCode(): void {
    if(this.userFormGroup.valid){
      this.organizeInformation();
      this.email = this.userFormGroup.get('email')?.value ?? '';
      this.userService.sendEmailNotification(this.email).subscribe({
        next: () => {
          this.confirm = true;
        },
        error: error => {
          console.error(error.error.message);
        }
      });
    }
    
  } */

  //process each field to have organized information to database
  private organizeInformation(): void{
    //the fields we'll organize
    const fields = ["username", "firstName", "lastName", "email"];

    Object.keys(this.vehiculeFormGroup.controls).forEach(key => { //iterate all fields
      if(fields.includes(key)){ //select only fields we'll organize
        let keyValue = this.vehiculeFormGroup.get(key)?.value;
        this.vehiculeFormGroup.get(key)?.setValue(this.changeTheText(keyValue));
      }
    });
  }

  //It allow us to change the first letter to upper case and the rest lower case at start or after a space
  private changeTheText(value: string): string {
    let word = value.charAt(0).toUpperCase()+ value.slice(1).toLowerCase(); //Change the first letter to upper case and the rest lower case
    word = word.normalize('NFD').replace(/[\u0300-\u036f]/g, ''); //replace all accents letters to normal letters
    word = word.replace(/(\s|^)\w/g, (l) => l.toUpperCase()); //transform to upperCase after the space character
    return word.trim().replace(/\s+/g, ' '); //delete all spaces at the start and allow only one space between letters
  }

  typeCode(index: number, event: any) {
    let character = event.target.value;
    
    //If the entered value is numeric, add and focus the next input
    if (/^\d*$/.test(character) && character != '') {
      
      let nextInput = event.target.nextElementSibling as HTMLInputElement;
      if (nextInput) {
        nextInput.focus();
      }
      console.log(this.vehiculeFormGroup.get('code')?.value);

    } else {
      //If the entered value is not numeric, delete the content
      event.target.value = '';
    }
  }

  
  showRegisterOK: boolean = false;
  badCode: boolean = false;
  /* confirmCode(code: string){
    this.userFormGroup.get('code')?.setValue(code);
    if (/^\d*$/.test(this.userFormGroup.get('code')?.value || 'x')) {
      this.userService.createUser(this.userFormGroup.value).subscribe({
        next: () => {
          this.showRegisterOK = true;
          localStorage.removeItem("register");
          localStorage.setItem("register", "true");
          setTimeout(() => {
            this.router.navigate(['/login']);
          }, 3000);
        },
        error: error => {
          console.error(error);
          this.badCode = true;
        }
      });
    }
  } */

  toggleChecked: boolean = true;

  toggleDisabled() {
    this.toggleChecked = !this.toggleChecked;
  }

}
