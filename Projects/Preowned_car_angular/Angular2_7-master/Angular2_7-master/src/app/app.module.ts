import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
// tslint:disable-next-line: quotemark
import {HttpClientModule} from "@angular/common/http";
// tslint:disable-next-line: quotemark

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {RouterModule, Routes} from '@angular/router';
import { AddCarComponent } from './add-car/add-car.component';
import { CardataService } from './cardata.service';
import { EditComponent } from './edit/edit.component'

const routes: Routes = [{path: '', redirectTo: '/dashboard', pathMatch: 'full'},
{path: 'dashboard', component: DashboardComponent},{path:'addCar',component:AddCarComponent},{path:'editCar/:id',component:EditComponent}];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AddCarComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,HttpClientModule,RouterModule.forRoot(routes)
  ],
  providers: [CardataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
