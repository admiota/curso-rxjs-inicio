import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('next:', value),
    error: error => console.warn('error', error),
    complete: () => console.info('complete() ejecutado')
}


const intervalo$ = new Observable<number>(subs => {
    let contador = 0
    //Crear contador 1,2,3,4...
    const funcionIntervalo = setInterval(() => {
                                contador++;
                                subs.next(contador);
                            }, 1000);
    
    setTimeout(() => {
        subs.complete();
    },3000);                   

    return () => {
        clearInterval(funcionIntervalo);
        console.log('Intervalo destruido');
    } 
});

const subs = intervalo$.subscribe(observer);
const subs2 = intervalo$.subscribe(observer);
const subs3 = intervalo$.subscribe(observer);

subs.add( subs2 );
subs.add( subs3 );

setTimeout(() => {
    subs.unsubscribe();
    // subs2.unsubscribe();
    // subs3.unsubscribe();
    console.log('Completado Timeout');
},7000)