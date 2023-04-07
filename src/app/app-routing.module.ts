import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { DemoComponent } from './demo/demo.component';
import { HelloComponent } from './hello/hello.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ConditionComponent } from './share/condition/condition.component';

const routes: Routes = [
  {path:'Demo',component:DemoComponent , canActivate:[AuthGuard]},
  {path:'Hello',component:HelloComponent},
  {path:'login',component:LoginComponent},
{ 
  path:'share',
  component:ConditionComponent,
  loadChildren:() => import('./share/share.module').then(el=>el.ShareModule)
},
{path:'',redirectTo:'Hello',pathMatch:'full'},
{path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
