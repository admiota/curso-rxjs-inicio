import { distinctUntilKeyChanged, from } from "rxjs";

interface Personaje {
    nombre: string;
}

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



//ASÍ SE HACE MUY FÁCIL EL DISTINCT DE LOS OBJECTOS!!!
const personajes$ = from(personajes).pipe(
    distinctUntilKeyChanged('nombre')
)
    .subscribe(console.log)