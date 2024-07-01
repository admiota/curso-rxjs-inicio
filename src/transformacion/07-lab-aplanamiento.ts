import { catchError, exhaustMap, fromEvent, map, mergeMap, of, pluck, tap } from "rxjs";
import { ajax } from "rxjs/ajax";

//Helper 
const peticionHttpLogin = (userPass) => {
    return ajax.post('https://reqres.in/api/login?delay=1', userPass)
        .pipe(
            pluck('response', 'token'),
            catchError(err => of('Error:', err))
    )
}

//Creando formulario
const form = document.createElement('form');
const inputEmail = document.createElement('input');
const inputPass = document.createElement('input');
const submitBtn = document.createElement('button');

//Configuraciones
inputEmail.type = 'email';
inputEmail.placeholder = 'Email';
inputEmail.value = 'eve.holt@reqres.in';

inputPass.type = 'password';
inputPass.placeholder = 'Password';
inputPass.value = 'cityslicka';

submitBtn.innerHTML = 'Ingresar';

form.append(inputEmail, inputPass, submitBtn);
document.querySelector('body').append(form);

//Streams
const submitForm$ = fromEvent(form, 'submit');

submitForm$.pipe(
    tap(event => event.preventDefault()),
    map(event => ({
        email: event.target[0].value,
        password: event.target[1].value
    })),
    exhaustMap(peticionHttpLogin),
).subscribe(token => {
    console.log(token)
})