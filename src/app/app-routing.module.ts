import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'module1',
    loadChildren: () => import('./modules/module1/module1.module').then(m => m.Module1Module)
  },
  {
    path: 'module2',
    loadChildren: () => import('./modules/module2/module2.module').then(m => m.Module2Module)
  },
  { path: '', redirectTo: '/module1/child1', pathMatch: 'full' }, // Redirecionamento padrão
  { path: '**', redirectTo: '/module1/child1' } // Redirecionamento para rotas inválidas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
