import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('next:', value),
    error: error => console.warn('error', error),
    complete: () => console.info('Completado')
}

//const obs$ = Observable.create()
const obs$ = new Observable<string>(subs => {
    
    subs.next('Hola');
    subs.next('Mundo');

    subs.next('Hola');
    subs.next('Mundo');

    //Forzar error
    // const a = undefined;
    // a.nombre = 'Jesus'
    

    subs.complete();

    subs.next('Hola');
    subs.next('Mundo');

});

obs$.subscribe(observer);

// obs$.subscribe(
//     resp => console.log(resp),
//     error => console.log(error),
//     () => console.log('Completado')
// );