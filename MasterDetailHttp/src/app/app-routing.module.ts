import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookMasterComponent } from './book-master/book-master.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [{path:'',redirectTo:'/books',pathMatch:'full'},
{path:'books',component:DashboardComponent},
{path:'books',component:BookMasterComponent},
{path:'detail/:id',component:BookDetailComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
