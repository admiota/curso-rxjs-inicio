import { fromEvent, map, takeWhile } from "rxjs"


const click$ = fromEvent<MouseEvent>(document, 'click');

click$
    .pipe(
        map(({ x, y }) => ({ x, y })),
        
        //el true incluye el último sino lo excluye
        takeWhile(({x,y})=> y <= 150, true )
    )
    .subscribe({
    next: val => console.log(val),
    complete:() => console.log('Completed!')
});