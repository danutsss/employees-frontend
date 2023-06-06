import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { AddShiftComponent } from "./add-shift/add-shift.component";
import { RegisterComponent } from "./register/register.component";
import { EditShiftComponent } from "./edit-shift/edit-shift.component";
import { EditProfileComponent } from "./edit-profile/edit-profile.component";
import { HomeComponent } from "./home/home.component";
import { ProfileComponent } from "./profile/profile.component";

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "register",
    component: RegisterComponent,
  },
  {
    path: "add-shift",
    component: AddShiftComponent,
  },
  {
    path: "edit-shift",
    component: EditShiftComponent,
  },
  {
    path: "edit-profile",
    component: EditProfileComponent,
  },
  {
    path: "home",
    component: HomeComponent,
  },
  {
    path: "profile",
    component: ProfileComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
