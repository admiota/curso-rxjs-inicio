import { ajax } from 'rxjs/ajax';

const url = 'https://httpbin.org/delay/1';


// ajax.post(url, {
//     id: 1,
//     nombre: 'Fernando'
// }, {
//     'mi-token': 'ABC123'
// }).subscribe(console.log);

//MANEJAR VARIOS TIPOS DE MÉTODOS(POST, PUT, DELETE,...)
ajax({
    url: url,
    method: 'POST',
    headers: {
        'mi-token': 'ABC23',
    },
    body: {
        id: 1,
        nombre: 'Fernando'
    }
}).subscribe(console.log)