import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainTimeComponent } from './main-time/main-time.component';
import { MainComponent } from './layout/main/main.component';
import { ScreenTestComponent } from './menu/three-d-design/screens/screen-test/screen-test.component';




const routes: Routes = [
  {
    path: '',
    component: MainTimeComponent
  },
  {
    path: 'main',
    component: MainComponent
  },
  {
    path: 'menu/three-d-design/screens/screen-test',
    component: ScreenTestComponent
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
