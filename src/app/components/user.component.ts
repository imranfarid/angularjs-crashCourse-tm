import { Component } from '@angular/core';

@Component({
  selector: 'user',
  template: `
  <h1>Hello {{name}}</h1>
  <p><strong>Email: </strong> {{email}}</p>
  <p><strong>Address: </strong> {{address.street}} {{address.city}}, {{address.state}}</p>
  `,
})
export class UserComponent  { 
    name = 'Tom Hardy';
    email = 't_hardy@gmail.com',
    address = {
        street: '12 Main st',
        city: 'Boston',
        state: 'MA'
    } 
}
