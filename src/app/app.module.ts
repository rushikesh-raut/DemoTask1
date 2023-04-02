import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './TOdoList/todo/todo.component';
import { PracticeComponent } from './practice/practice.component';
import { LoginComponent } from './login/login.component';
import { ShareModule } from './share/share.module';
import { DemoComponent } from './demo/demo.component';
import { HelloComponent } from './hello/hello.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Practice2Component } from './practice2/practice2.component';
import { Practice3Component } from './practice3/practice3.component';
import { SubComponent } from './sub/sub.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    PracticeComponent,
    LoginComponent,
    DemoComponent,
    HelloComponent,
    PageNotFoundComponent,
    Practice2Component,
    Practice3Component,
    SubComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ShareModule 
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
