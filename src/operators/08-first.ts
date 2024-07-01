import { first, fromEvent, map, tap } from "rxjs";


const click$ = fromEvent<MouseEvent>(document, 'click');

click$
    .pipe(
        tap<MouseEvent>(() =>console.log('Tap...')),
        first<MouseEvent>(event => event.clientY>=150)
    )
    .subscribe({
    next: val => console.log('Next: ',val),
    complete:() => console.log('Completado!')
});