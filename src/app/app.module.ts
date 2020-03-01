import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module';
import { LayoutComponent } from './layout/layout.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CreateProjectFormComponent } from './create-project-form/create-project-form.component';
import { AddModuleFormComponent } from './add-module-form/add-module-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    CreateProjectFormComponent,
    AddModuleFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
