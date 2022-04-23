import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { DashboardRoutes } from "./dashboard";
import { CalculadoraRoutes } from "./calculadora";
import { ConversorRoutes } from "./conversor";
import { TarefaRoutes } from "./tarefas";
import { jogoDaVelhaRoutes } from "./jogo-da-velha";

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    ...DashboardRoutes,
    ...CalculadoraRoutes,
    ...ConversorRoutes,
    ...TarefaRoutes,
    ...jogoDaVelhaRoutes
]; 

@NgModule({
    imports: [ RouterModule.forRoot(routes)],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}