import { debounceTime, distinct, distinctUntilChanged, distinctUntilKeyChanged, fromEvent, map, pluck } from "rxjs";


const click$ = fromEvent(document, 'click');

click$
    .pipe(
        debounceTime(1000)
    )
//.subscribe(console.log);
    
const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent<KeyboardEvent>(input, 'keyup');

input$
    .pipe(
        debounceTime(4000),
        pluck('target', 'value'),
        distinctUntilChanged(),
    )
    .subscribe(console.log)