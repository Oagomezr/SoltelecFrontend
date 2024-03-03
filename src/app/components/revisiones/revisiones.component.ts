import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTabsModule} from '@angular/material/tabs';
import { VehiculoFormComponent } from './vehiculo-form/vehiculo-form.component';

@Component({
  selector: 'app-revisiones',
  standalone: true,
  imports: [CommonModule, MatTabsModule, VehiculoFormComponent],
  templateUrl: './revisiones.component.html',
  styleUrls: ['./revisiones.component.scss']
})
export class RevisionesComponent {

}
