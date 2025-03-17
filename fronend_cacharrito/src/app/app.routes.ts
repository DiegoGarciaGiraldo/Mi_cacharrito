import { Routes } from "@angular/router";
import { SignInComponent} from "./Registro-Usuario/sign-in.component"
import { LoginAdministradorComponent } from "./administrador/login-administrador.component";


export const routes: Routes = [
    {path: 'administrador', component: LoginAdministradorComponent},
    {path: 'iniciarSesion', component: SignInComponent}
];




    