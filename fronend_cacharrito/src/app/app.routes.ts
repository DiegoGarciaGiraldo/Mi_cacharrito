import { Routes } from "@angular/router";
import { LoginAdministradorComponent } from "./administrador/login-administrador.component";
import { SignInComponent} from "./Registro-Usuario/sign-in.component"


export const routes: Routes = [
    {path: 'administrador', component: LoginAdministradorComponent},
    {path: 'iniciarSesion', component: SignInComponent}
];




    