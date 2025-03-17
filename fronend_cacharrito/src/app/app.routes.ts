import { Routes } from "@angular/router";
import { LoginAdministradorComponent } from "./administrador/login-administrador.component";
import { RegistroUsuarioComponent } from "./registro-usuario/registro-usuario.component";
import { LogInUsuarioComponent } from "./usuario/log-in-usuario.component";


export const routes: Routes = [
    {path: 'administrador', component: LoginAdministradorComponent},
    {path: 'registro', component: RegistroUsuarioComponent},
    {path: 'usuario', component: LogInUsuarioComponent}

];

export class AppRoutingModule{}


    