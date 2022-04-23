import { Routes} from '@angular/router';

import { ListarTarefaComponent } from './listar';
import { CadastrarTarefaComponent } from './cadastrar';
import { EditarTarefaComponent } from './editar-tarefa/editar-tarefa.component';

export const TarefaRoutes: Routes = [
	{ 
		path: 'tarefas', 
		redirectTo: 'tarefas/listar' 
	},
	{ 
		path: 'tarefas/listar', 
		component: ListarTarefaComponent 
	}, 
	{
		path: 'tarefas/cadastrar',
		component: CadastrarTarefaComponent
	}, 
	{
		path: 'tarefas/editar-tarefa/:id',
		component: EditarTarefaComponent
	}
];