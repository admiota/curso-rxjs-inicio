import { interval, reduce, take, tap } from "rxjs";


const numbers = [1, 2, 3, 4, 5];

const totalReducer = (acumulador:number, valorActual: number) => acumulador + valorActual

const total = numbers.reduce(totalReducer, 0);
console.log('Total arr', total);

interval(1000)
    .pipe(
        take(3),
        tap(console.log),
        reduce(totalReducer)
)
.subscribe({
    next: val => console.log('Next:',val),
    complete: () => console.log('Completed!'),
})