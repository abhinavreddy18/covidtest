import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FAQComponent } from './faq/faq.component';
const routes: Routes = [
  { path: '', component: HomepageComponent, },
  {
    path:'register', component: RegistrationComponent,
  },
  {
    path:'faq',component:FAQComponent,
  }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  

 }
