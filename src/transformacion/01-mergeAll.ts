import { debounceTime, fromEvent, map, mergeAll, pluck } from "rxjs";
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
    map(texto => {
        return ajax.getJSON(`https://api.github.com/search/users?q=${texto}`)
    }),
    mergeAll(),
    pluck('items')
).subscribe(mostrarUsuarios)