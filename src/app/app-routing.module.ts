import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { AppForm } from './form/form.component';
const routes: Routes =[
    {path: '' , component : AppForm},
    {
    path: 'contactUs',
    loadChildren: './contacUs/contactUS.module#contactUsModule'
  },
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
    exports: [
        RouterModule,
    ]

})
export class AppRoutingModule {

}
