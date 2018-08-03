import { Component } from '@angular/core';
import { Person } from './person.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'App Component';

  person: Person = {
    name: 'Camilo',
    image: 'https://theodora.com/flags/new6/colombia-t.gif',
  };

  constructor() {
    setTimeout(() => {
      this.person.name = 'Equiman';
      this.person.image = 'https://theodora.com/flags/new/sweden-t.gif';
    }, 3000);
  }

  print(input) {
    console.log(input);
  }

  showAlert() {
    alert('Hola Mundo');
  }

  onChangeTitle(title: string) {
    this.title = title;
  }
}


