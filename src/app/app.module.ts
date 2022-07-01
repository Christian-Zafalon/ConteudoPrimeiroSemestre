import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeuComponentComponent } from './meu-component/meu-component.component';
import { BootstrapComponentComponent } from './bootstrap-component/bootstrap-component.component';
import { NavbarComponentComponent } from './navbar-component/navbar-component.component';
import { RouterModule } from '@angular/router';
import { TestComponentComponent } from './test-component/test-component.component';
import { FlexwapComponentComponent } from './flexwap-component/flexwap-component.component';
import { FistprojectComponentComponent } from './fistproject-component/fistproject-component.component';

@NgModule({
  declarations: [
    AppComponent,
    MeuComponentComponent,
    BootstrapComponentComponent,
    NavbarComponentComponent,
    TestComponentComponent,
    FlexwapComponentComponent,
    FistprojectComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
