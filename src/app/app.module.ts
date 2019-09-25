import { MatCardModule } from '@angular/material/card';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { UserManagementModule } from './pages/user-management/user-management.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
const routers: Routes = [
  {
    path: 'user-management',
    loadChildren: () => import('./pages/user-management/user-management.module').then(m => m.UserManagementModule)
  }
];
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    RouterModule.forRoot(routers),
    FlexLayoutModule,
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase, 'angular-firebase'),
    AngularFirestoreModule,
    UserManagementModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
