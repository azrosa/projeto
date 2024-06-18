import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projeto';
  arrayTarefas = [];

  adicionarTarefa(tarefa: string) {
    if (tarefa !== "") {
      this.arrayTarefas.join(tarefa)
    }
    else {
      alert("Digite algum valor.")
    }
  }

  apagarTarefa(tarefa: string) {
    for (let i = 0; i <= this.arrayTarefas.length; i++) {
      if (tarefa == this.arrayTarefas[i]) {
        this.arrayTarefas.splice(i, 1)
      }
    }
  }

}
