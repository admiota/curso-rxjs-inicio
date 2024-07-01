import { from, of, subscribeOn } from 'rxjs';

/**
 * of = toma argumentos y genera una secuencia
 * from = array, promise, iterable, observable
 */

const observer = {
    next: valor => console.log(valor),
    complete: ()=> console.log('Completado')
}


const miGenerador = function*() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
}

const miIterable = miGenerador();

from(miIterable).subscribe(observer);

//const src$ = from([1,2,3,4,5])
//const src$ = of([1, 2, 3, 4, 5]);
//const src$ = from('Fernando');

const src$ = from(fetch('https://api.github.com/users/klerith'));

// src$.subscribe(async(resp) => {
//     const dataResp = await resp.json();
//     console.log(dataResp);
// });
//src$.subscribe(observer);

