import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  exports: [
    MatToolbarModule,
    MatSelectModule,
    MatFormFieldModule
  ],
  declarations: []
})
export class SharedModule { }
