import { asyncScheduler } from 'rxjs';

// setTimeout(() => {}, 3000);
// setInterval(() => {},3000);

const saludar = () => {
    console.log('Hola!');
}

const saludar2 = state => {
    console.log(`Hola ${state.nombre}!!!`);
}

//asyncScheduler.schedule(saludar, 2000);
asyncScheduler.schedule(saludar2, 3000, { nombre: 'Adolfo' });


//No puede recibir funciones flecha(este es el que simula el intervalo)
const subscription =  asyncScheduler.schedule(function (state:number) {
    console.log('state', state);
    this.schedule(state+1,1000)
}, 3000, 0);

// setTimeout(() => {
//     subscription.unsubscribe();
// },6000)

asyncScheduler.schedule(() => {
    subscription.unsubscribe()
}, 6000);