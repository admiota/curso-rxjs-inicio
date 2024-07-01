import { of } from 'rxjs';

//const obs$ = of(1, 2, 3, 4, 5, 6);
const obs$ = of(1, 2, 3, 4, 5, 6);

console.log('Inicio del obs');
obs$.subscribe(
    next => console.log('next', next),
    null,
    () => console.log('completado!')
);
console.log('Fin del obs');