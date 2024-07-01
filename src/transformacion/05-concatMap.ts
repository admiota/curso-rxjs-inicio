import { concat, interval, of, take } from "rxjs";


const interval$ = interval();

//Hasta que no termina el observable al completo(se completa) no se inicia el siguiente
concat(
    interval$.pipe(take(3)),
    interval$.pipe(take(2)),
    of(1)
)