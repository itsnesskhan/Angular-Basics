import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwowayBindingComponent } from './twoway-binding/twoway-binding.component';
import { FormsModule } from '@angular/forms';
import { DirectivesComponent } from './directives/directives.component';
import { IfComponent } from './directives/if/if.component';
import { ForComponent } from './directives/for/for.component';
import { SwitchCaseComponent } from './directives/switch-case/switch-case.component';
import { ComponentInteractionComponent } from './component-interaction/component-interaction.component';
import { AddBackgroundColorDirective } from './directives/custom-directive/add-background-color.directive';
import { AppRoutingRoutingModule } from './app-routing.module';
import { UserComponent } from './user/user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ObservablesComponent } from './observables/observables.component';


@NgModule({
  declarations: [
    AppComponent,
    InterpolationComponent,
    PropertyBindingComponent,
    ClassBindingComponent,
    StyleBindingComponent,
    EventBindingComponent,
    TwowayBindingComponent,
    DirectivesComponent,
    IfComponent,
    ForComponent,
    SwitchCaseComponent,
    ComponentInteractionComponent,
    AddBackgroundColorDirective,
    UserComponent,
    UserDetailsComponent,
    AllUsersComponent,
    PageNotFoundComponent,
    ObservablesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
