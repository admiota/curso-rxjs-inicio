import { fromEvent, range } from 'rxjs';
import { map, mapTo, pluck } from 'rxjs/operators';

// range(1, 5).pipe(
//         map(val => val * 10)
//     )
//     .subscribe(console.log);

const keyUp$ = fromEvent<KeyboardEvent>(document, 'keyup')
    .pipe(map(event=> event.code))
    .subscribe(val => console.log(val));

    
const keyupPluck$ = fromEvent<KeyboardEvent>(document, 'keyup')
    .pipe(pluck('key'));
    //keyupPluck$.subscribe(code => console.log('pluck', code))

const keyupMapTo$ = fromEvent<KeyboardEvent>(document, 'keyup')
    .pipe(mapTo('tecla presionada'));
    keyupMapTo$.subscribe(mensaje => console.log('mapTo', mensaje));