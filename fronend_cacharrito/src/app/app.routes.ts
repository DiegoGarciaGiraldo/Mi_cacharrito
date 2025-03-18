import { Routes } from "@angular/router";
<<<<<<< HEAD
import { SignInComponent} from "./Registro-Usuario/sign-in.component"
import { LoginAdministradorComponent } from "./administrador/login-administrador.component";
=======
import { LoginAdministradorComponent } from "./administrador/login-administrador.component";
import { RegistroUsuarioComponent } from "./registro-usuario/registro-usuario.component";
import { LogInUsuarioComponent } from "./usuario/log-in-usuario.component";
>>>>>>> f431347618691d8cfeecf2775ebe35727a5ef17a


export const routes: Routes = [
    {path: 'administrador', component: LoginAdministradorComponent},
    {path: 'registro', component: RegistroUsuarioComponent},
    {path: 'usuario', component: LogInUsuarioComponent}

];

export class AppRoutingModule{}


    