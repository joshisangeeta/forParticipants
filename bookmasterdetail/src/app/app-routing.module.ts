import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookmasterComponent } from './bookmaster/bookmaster.component';
import { BookDetailComponent } from './book-detail/book-detail.component';


const routes: Routes = [
 {path:'',redirectTo:'/books',pathMatch:'full'},
 {path:'books',component:BookmasterComponent},
 {path:'detail/:id',component:BookDetailComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
