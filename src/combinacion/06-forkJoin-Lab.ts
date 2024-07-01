import { catchError, forkJoin, of } from "rxjs";
import { ajax } from "rxjs/ajax";


const GITHUB_API_URL = 'https://api/github.com/users';
const GITHUB_USER = 'klerith';

// El caso más utilizado con el forkJoin es cuando se hacen varias llamadas relacionadas y
// así nos traemos la data toda de forma conjunta
forkJoin({
    usuario: ajax.getJSON(
        `${GITHUB_API_URL}/${GITHUB_USER}`
    ).pipe(catchError(err => of([]))),
    repos: ajax.getJSON(
        `${GITHUB_API_URL}/${GITHUB_USER}/repos`
    ).pipe(catchError(err => of([]))),
    gists: ajax.getJSON(
        `${GITHUB_API_URL}/${GITHUB_USER}/gists`
    ).pipe(catchError(err => of([])))
})
    .pipe(catchError(err => of(err.message)))
    .subscribe(console.log)
