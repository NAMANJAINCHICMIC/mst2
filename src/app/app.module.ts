import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectComponent } from './project/project.component';
import { MilestoneComponent } from './milestone/milestone.component';
import { TaskComponent } from './task/task.component';
import { DataDisplayComponent } from './data-display/data-display.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'


@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    MilestoneComponent,
    TaskComponent,
    DataDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
