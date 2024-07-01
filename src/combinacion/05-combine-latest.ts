import { combineLatest, fromEvent, map, pluck } from "rxjs";

const keyup$ = fromEvent(document, 'keyup');
const click$ = fromEvent(document, 'click');


const input1 = document.createElement('input');
const input2 = document.createElement('input');

input1.placeholder = 'email@gmail.com';
input2.placeholder = '***************';

input1.type = 'password';

document.querySelector('body').append(input1, input2);

//Helper
const getInputStream = (elem: HTMLElement) => {
    return fromEvent<KeyboardEvent>(elem, 'keyup').pipe(
        pluck('target', 'value')
    )
}
//El combine latest siempre se guarda el último valor del observable y lo muestra junto 
//con el ultimo valor del resto de observables que haya
combineLatest(
    getInputStream(input1),
    getInputStream(input2),
).subscribe(console.log)