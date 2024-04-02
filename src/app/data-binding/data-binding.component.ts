import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css',
})
export class DataBindingComponent {
  url = 'http://loaine.com';
  cursoAngular = true;

  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }
}
