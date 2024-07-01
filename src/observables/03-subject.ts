import { Observable, Observer, Subject } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('next:', value),
    error: error => console.warn('error', error),
    complete: () => console.info('complete() ejecutado')
}

const intervalo$ = new Observable<number>(subs => {
    const funcionIntervalID = setInterval(
        () => subs.next(Math.random())
        , 1000);
    
    return () => {
        clearInterval(funcionIntervalID)
    };
});

const subject$ = new Subject();
const subscription = intervalo$.subscribe(subject$)



// const subs1 = intervalo$.subscribe(random => console.log('subs1', random));
// const subs2 = intervalo$.subscribe(random => console.log('subs2', random));

const subs1 = subject$.subscribe(observer);
const subs2 = subject$.subscribe(observer);

setTimeout(() => {
    
    subject$.next(10);
    subject$.complete();
    subscription.unsubscribe();

},3500);