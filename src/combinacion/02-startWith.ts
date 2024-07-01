import { catchError, of, startWith } from "rxjs";
import { AjaxError, ajax } from "rxjs/ajax";

const atrapaErrores = (err:AjaxError) => {
            console.warn('error en', err.message);
            return of({});
        }

const loadingDiv = document.createElement('div');
loadingDiv.classList.add('loading');
loadingDiv.innerHTML = 'Cargando...';

const body = document.querySelector('body');

//Stream
ajax.getJSON('https://reqres.in/api/users/2?delay=3')
    .pipe(
        startWith(true),
        catchError(atrapaErrores)
    )
.subscribe(resp => {
    if (resp === true) {
        body.append(loadingDiv);
    }else {
        document.querySelector('.loading').remove();
    }

    console.log(resp);
})