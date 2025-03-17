import { Routes } from '@angular/router';
import { UsuarioComponent } from './usuario/usuario.component';
import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';

export const routes: Routes = [
    {path:'usuario', component:UsuarioComponent},
    {path:'registro', component:RegistroUsuarioComponent}
];
