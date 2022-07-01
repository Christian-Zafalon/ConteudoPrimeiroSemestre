import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BootstrapComponentComponent } from './bootstrap-component/bootstrap-component.component';
import { MeuComponentComponent } from './meu-component/meu-component.component';
import { TestComponentComponent } from './test-component/test-component.component';
import { FlexwapComponentComponent } from './flexwap-component/flexwap-component.component';
import { FistprojectComponentComponent } from './fistproject-component/fistproject-component.component';

const routes: Routes = [
  { path: 'bootstrap-component', component: BootstrapComponentComponent},
  { path: 'meu-component', component: MeuComponentComponent},
  { path: 'curso-dio', component: TestComponentComponent},
  { path: 'flexwrap', component: FlexwapComponentComponent},
  {path: 'primeiroprojeto', component: FistprojectComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
