
import { catchError, map, of } from 'rxjs';
import {AjaxError, AjaxResponse, ajax} from 'rxjs/ajax'


const url = 'https://api.github.com/users?per_page=5';

const manejaErrores = (response:Response) => {
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return response;
}

const atrapaErrores = (err:AjaxError) => {
            console.warn('error en', err.message);
            return of([]);
        }


const fetchPromesa = fetch(url);


// fetchPromesa
//     .then(manejaErrores)
//     .then(resp => resp.json())
//     .then(console.log)
//     .catch( err => console.warn(err) )

ajax(url)
    .pipe(
        map(({ response }) => response),
        catchError(atrapaErrores)
    )
    .subscribe(users => console.log('Usuarios: ',users));

