import { of, take, tap } from "rxjs";


const numeros$ = of(1, 2, 3, 4, 5);

numeros$
    .pipe(
        tap(t=>console.log(t)),
        take(2)
    )
    .subscribe(
    {
        next: val => console.log(val),
        complete: ()=>console.log('Completado!')
    }
)