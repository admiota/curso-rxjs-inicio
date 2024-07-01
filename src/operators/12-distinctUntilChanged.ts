import { distinctUntilChanged, from, of } from "rxjs";

interface Personaje {
    nombre: string;
}

const numeros$ = of(1, 1, 1, 1, 3, 3, 2, 1, 2, 3, 1, 2, 2, 2, 4, 4, 5, 5, 4);


numeros$
    .pipe(
        distinctUntilChanged()
    )
    .subscribe(console.log);


const personajes: Personaje[] = [
    {
        nombre: 'Batman'
    },
    {
        nombre: 'Robin'
    },
    {
        nombre: 'Robin'
    },
    {
        nombre: 'Joker'
    },
    {
        nombre: 'Robin'
    }
];



const personajes$ = from(personajes).pipe(
    //ASÍ SE HACE EL DISTINCT UNTIIL CHANGED CON OBJECTOS
    distinctUntilChanged((anterior, actual)=> anterior.nombre===actual.nombre)
)
    .subscribe(console.log)