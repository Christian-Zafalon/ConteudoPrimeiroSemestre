import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BootstrapComponentComponent } from './bootstrap-component/bootstrap-component.component';
import { MeuComponentComponent } from './meu-component/meu-component.component';

const routes: Routes = [
  { path: 'bootstrap-component', component: BootstrapComponentComponent},
  { path: 'meu-component', component: MeuComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
