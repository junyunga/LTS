import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SharedModule} from './shared/shared.module';
import {ThreeDDesignModule} from './menu/three-d-design/three-d-design.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './layout/header/header.component';
import { MainTimeComponent } from './main-time/main-time.component';
import { MainComponent } from './layout/main/main.component';


@NgModule({
  declarations: [
    AppComponent,
    MainTimeComponent,
    MainComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FlexLayoutModule,
    SharedModule,
    ThreeDDesignModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
