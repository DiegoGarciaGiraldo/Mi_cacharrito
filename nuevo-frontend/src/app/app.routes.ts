import { Routes } from '@angular/router';
import { UsuarioComponent } from './usuario/usuario.component';
import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';
import { AdminComponent } from './admin/admin.component';

export const routes: Routes = [
    {path:'admin', component:AdminComponent},
    {path:'usuario', component:UsuarioComponent},
    {path:'registro', component:RegistroUsuarioComponent}
];
