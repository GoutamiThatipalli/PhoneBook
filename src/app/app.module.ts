import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { GlobalDataService } from './services/global-data.service';
import { AddMobilenoComponent } from './components/contacts/add-mobileno/add-mobileno.component';
const appRoutes: Routes = [
  { path: 'new', component: UserComponent },
  { path: 'contacts', component: ContactsComponent },
  {
    path: 'new',
    component: UserComponent,
    data: { title: 'New User' }
  },
  { path: '',
    redirectTo: '/new',
    pathMatch: 'full'
  },
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ContactsComponent,
    AddMobilenoComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } 
    ),
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [GlobalDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
