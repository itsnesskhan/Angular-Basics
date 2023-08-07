import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwowayBindingComponent } from './twoway-binding/twoway-binding.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { IfComponent } from './directives/if/if.component';
import { ForComponent } from './directives/for/for.component';
import { SwitchCaseComponent } from './directives/switch-case/switch-case.component';
import { ComponentInteractionComponent } from './component-interaction/component-interaction.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { UserComponent } from './user/user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ObservablesComponent } from './observables/observables.component';

const routes: Routes = [
  // {path:'', component: AppComponent},
  {path:'interpolation', component: InterpolationComponent},
  {path:'class-binding', component: ClassBindingComponent},
  {path:'property-binding', component: PropertyBindingComponent},
  {path:'style-binding', component: StyleBindingComponent},
  {path:'event-binding', component: EventBindingComponent},
  {path:'two-way-binding',component: TwowayBindingComponent},

  {path:'directive',
   children: [
    {path:'if', component: IfComponent},
    {path:'for', component: ForComponent},
    {path: 'switch-case', component: SwitchCaseComponent}
   ]
  },
   {path:'user', component: UserComponent
   ,children:[
    {path:'all', component:AllUsersComponent},
    {path:':id', component:UserDetailsComponent}
  ]
    
  },
  {path:'component-interaction', component: ComponentInteractionComponent},
  {path:'observables', component: ObservablesComponent},

  //lazy loading router
  {path:'product', loadChildren: ()=> import('./products/products.module').then(mod=> mod.ProductsModule)},

  {path:'page-not-found',component: PageNotFoundComponent},
  {path:'**', redirectTo:'/page-not-found', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingRoutingModule { }
