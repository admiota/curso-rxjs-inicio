import { catchError, map, of } from 'rxjs';
import { AjaxError, ajax } from 'rxjs/ajax';

const url = 'https://httpbin.g/delay/1';

const manejaError = (respError: AjaxError) => {
    console.warn('error',respError.message);
    return of([]);
}


//con el getJSON() de Ajax podemos enviar los headers
const obs$ = ajax.getJSON(url, {
    'Content-Type': 'application/json',
    'mi-token': 'ABC123'
});

const obs2$ = ajax(url);


//MANEJANDO EL ERRO DESDE EL CATCHERROR
/*obs$ 
    .pipe(
        catchError(manejaError)
    )
    .subscribe(data => console.log(data));
obs2$
    .pipe(
        map(({response}) => response),
        catchError(manejaError)
    )
    .subscribe(data => console.log(data));*/


    //ESTA ES LA MISMA FORMA DE MANEJAR LOS ERRORES QUE CON CATCHERROR(PERO DESDE EL SUBSCRIBE! CON UN OBSERVER!)
obs$ 
    .subscribe(({
        next: val => console.log(val),
        error:err => console.warn(err.message)
    }));
obs2$
    .subscribe({
        next: val => console.log(val),
        error:err => console.warn(err.message)
    });