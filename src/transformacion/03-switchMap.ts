import { debounceTime, fromEvent, map, mergeAll, mergeMap, pluck, switchMap } from "rxjs";
import { ajax } from "rxjs/ajax";

//Referencias
const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');
body.append(textInput, orderList);

//Helpers
const mostrarUsuarios = (usuarios) => {
    orderList.innerHTML = '';
    usuarios.forEach(usuario => {
        const li = document.createElement('li');
        const img = document.createElement('img');
        img.src = usuario.avatar_url;

        const anchor = document.createElement('a');
        anchor.href = usuario.html_url;
        anchor.text = 'Ver página';
        anchor.target = '_blank';

        li.append(img);
        li.append(usuario.login + ' ');
        li.append(anchor);

        orderList.append(li);
    });
}

const input$ = fromEvent<KeyboardEvent>(textInput, 'keyup');


input$.pipe(
    debounceTime(500),
    pluck('target', 'value'),
    mergeMap(texto => {
        return ajax.getJSON(`https://api.github.com/search/users?q=${texto}`)
    }),
    pluck('items')
)//.subscribe(mostrarUsuarios)

//El Switchmap cancela los procesos anteriores que no se han terminado de completar
// sirve para cuando se hacen muchas llamadas, lo que hace es coger la última
const url = 'https://httpbin.org/delay/1?arg='; //+fernando
input$.pipe(
        pluck('target', 'value'),
        switchMap(texto => ajax.getJSON(url+texto))
    )
    .subscribe(console.log)