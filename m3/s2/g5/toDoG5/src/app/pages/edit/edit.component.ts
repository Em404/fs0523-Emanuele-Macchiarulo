import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss'
})
export class EditComponent {

  constructor(
    private route: ActivatedRoute,//per ottenere dati sulla rotta attiva
    private todoSvc:TodoService,
    private router: Router
    ){}
  todo!:Todo;

  ngOnInit(){
    //usa questo per leggere il parametro id nell'url
    this.route.params.subscribe((params:any) => {
      this.todoSvc.getById(params.id).then(res => this.todo = res)
    })
  }

  edit(){
    this.todoSvc.update(this.todo).then( res => {
    })
    alert(`Task modificato`);
    this.router.navigate(['/']);
  }

}
