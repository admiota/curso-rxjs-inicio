import { interval,timer } from 'rxjs';

const observer = {
    next: value => console.log(value),
    error: error => console.log(error),
    complete:()=>console.log('Completado!')
}

const hoyEn5 = new Date(); // ahora
hoyEn5.setSeconds(hoyEn5.getSeconds()+5)

const interval$ = interval(1000);
//Esto es un interval pero con el timer para que empiece desppués de 2 segundos
//const timer$ = timer(2000,1000);
const timer$ = timer(hoyEn5);

console.log('Inicio');
//interval$.subscribe(observer);
timer$.subscribe(observer);
console.log('Fin');