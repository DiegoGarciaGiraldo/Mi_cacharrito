import { Routes } from "@angular/router";
import { LoginAdministradorComponent } from "./administrador/login-administrador.component";
import { RegistroUsuarioComponent } from "./registro-usuario/registro-usuario.component";


export const routes: Routes = [
    {path: 'administrador', component: LoginAdministradorComponent},
    {path: 'registro', component: RegistroUsuarioComponent}
];

export class AppRoutingModule{}


    