import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  // i18n Select

  public name: string = 'Daniel';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    'male ': 'invitarlo',
    'female': 'invitarla'
  }

  changeClient(): void {
    this.name = 'Pepito';
    this.gender = 'female';
  }

  //i18plural

  public clients: string[] = [ 'pepito', 'juanito' , 'donramon', 'fernando', ' eduardo']

  public clientsMap = {
    '=0':'no tenemos ningun cliente esperando.',
    '=1':'tenemos un cliente esperando.',
    '=2':'tenemos dos clientes esperando.',
    'other':'tenemos # clientes esperando.'
  }

  deleteClient(): void {
    this.clients.pop();
  }

  //key value

  public person = {
    name : 'Pepito',
    address : 'Wonderland',
    age: 32
  }

  //async

  public myObservableTimer = interval(2000).pipe(
    tap( value => console.log('tap:', value))
  );

    public promiseValue : Promise<string> = new Promise (( resolve, reject ) => {
      setTimeout (() => {
        resolve('Tenemos data en la promesa.');
      }, 3500);
  })
}
