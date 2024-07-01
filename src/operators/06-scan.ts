import { from, map, reduce, scan } from "rxjs";


const numeros = [1, 2, 3, 4, 5];

// const totalAcumulador = (acc, currentValue) => {
//     return acc + currentValue;
// }

const totalAcumulador = (acc, currentValue) => acc + currentValue;

//Reduce
from(numeros)
    .pipe(
        reduce(totalAcumulador,0)
    )
    .subscribe(console.log);

//SCAN
from(numeros)
    .pipe(
        scan(totalAcumulador,0)
    )
    .subscribe(console.log);

//Redux
interface Usuario {
    id?: string;
    autenticado?: boolean;
    token?: string;
    edad?: number;
}

const user: Usuario[] = [
    {id: 'Fher', autenticado:false, token:null},
    {id: 'Fher', autenticado:true, token:'ABC'},
    {id: 'Fher', autenticado:true, token:'ABC123'}
];

const state$ = from( user ).pipe(
    scan<Usuario, Usuario, Usuario>( (acc, cur) => ({ ...acc, ...cur }), { edad: 33 } )
);

const id$ = state$.pipe(
    map(state => state)
).subscribe(console.log);