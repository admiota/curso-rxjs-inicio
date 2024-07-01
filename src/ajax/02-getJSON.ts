import { ajax } from 'rxjs/ajax';

const url = 'https://httpbin.org/delay/1';

//con el getJSON() de Ajax podemos enviar los headers
const obs$ = ajax.getJSON(url, {
    'Content-Type': 'application/json',
    'mi-token': 'ABC123'
});

obs$.subscribe(data => console.log(data))