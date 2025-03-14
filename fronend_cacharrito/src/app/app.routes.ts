import { Routes } from "@angular/router";
import { LoginAdministradorComponent } from "./login-administrador/login-administrador.component";
import { SignInComponent} from "./sign-in/sign-in.component"


export const routes: Routes = [
    {path: 'administrador', component: LoginAdministradorComponent},
    {path: 'iniciarSesion', component: SignInComponent}
];




    