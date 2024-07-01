import { fromEvent, map, tap } from "rxjs";

const texto = document.createElement('div');
texto.innerHTML = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin luctus luctus tristique. Vivamus sit amet elementum velit. In hac habitasse platea dictumst. Duis non tellus a nisi aliquet vulputate ac sit amet lorem. Curabitur at metus purus. Curabitur luctus lacus ac ex vehicula suscipit. Integer ut commodo libero. Nulla vel convallis lorem, at convallis libero. Ut a enim quis massa iaculis dignissim vitae dapibus enim. Ut volutpat, libero nec hendrerit luctus, arcu urna luctus tortor, quis gravida tortor turpis vel ligula. Proin turpis ipsum, eleifend fringilla elit eu, eleifend dignissim ex. Sed mi dolor, pharetra in interdum a, mattis at ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ornare mauris at ipsum tristique tempor. Vivamus et hendrerit diam.
    <br/><br/>
Sed cursus elementum consequat. Cras at erat blandit, pretium urna in, rhoncus tellus. Quisque mollis, tortor in cursus dignissim, dolor quam sodales est, vel facilisis arcu odio nec turpis. Sed at nulla at enim pellentesque condimentum vitae non nisl. Vestibulum dignissim pellentesque augue sit amet ultrices. Maecenas vulputate arcu eu fermentum varius. Integer lacinia faucibus tristique. Sed eu blandit tortor. Morbi vehicula urna a sem lobortis, vestibulum auctor nulla convallis.
    <br/><br/>
Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque scelerisque risus pharetra erat tincidunt, ut ultricies quam blandit. Suspendisse quis posuere sem. Duis fermentum, nibh vel lobortis consectetur, odio enim mollis ante, ac feugiat enim est quis nisi. Maecenas cursus justo vitae ullamcorper fermentum. Nunc congue nibh quis libero mattis ornare vel at metus. Ut eu ex sem.
    <br/><br/>
Suspendisse efficitur orci in scelerisque dictum. In nisl ligula, lobortis ut eleifend sit amet, vehicula ac ante. Nunc in nunc scelerisque, tempor purus et, hendrerit lorem. Nam lacus lectus, fringilla a nunc ac, hendrerit tincidunt quam. Fusce felis nisi, tristique ac libero et, efficitur maximus magna. Vivamus a lorem risus. Pellentesque et elementum sapien. Suspendisse purus metus, bibendum vel maximus quis, dictum at augue. Aenean blandit arcu in purus varius, sit amet aliquam turpis maximus. Praesent hendrerit libero nisi, in rutrum ligula malesuada eu. Etiam neque quam, accumsan sit amet augue eget, consectetur sagittis odio. Aenean egestas mauris quis blandit tempor. Vestibulum in porttitor diam. Quisque egestas lorem nec dolor pharetra, vitae eleifend velit elementum.
    <br/><br/>
Morbi et finibus nisi. Pellentesque sagittis, leo in laoreet egestas, eros diam sollicitudin massa, non ullamcorper massa ex eu elit. Pellentesque sodales lacus tellus, sit amet lobortis eros lacinia id. Integer elit erat, accumsan dapibus consectetur ut, rhoncus nec sapien. Nunc venenatis ante eget venenatis mattis. Phasellus at vulputate nibh. Mauris nisl urna, feugiat vel commodo at, eleifend id diam. Phasellus egestas maximus felis, nec posuere nibh cursus id. Praesent sed metus bibendum, imperdiet massa ac, blandit lectus. Mauris tempus lectus molestie ante tincidunt porta. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus leo quam, tincidunt nec tempus in, auctor non dolor. Nullam nec iaculis urna, in laoreet purus. Morbi non porttitor dui, a vehicula enim. Suspendisse sagittis, mi ac ornare dapibus, enim metus molestie urna, sed molestie enim leo vel dolor.
    <br/><br/>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin luctus luctus tristique. Vivamus sit amet elementum velit. In hac habitasse platea dictumst. Duis non tellus a nisi aliquet vulputate ac sit amet lorem. Curabitur at metus purus. Curabitur luctus lacus ac ex vehicula suscipit. Integer ut commodo libero. Nulla vel convallis lorem, at convallis libero. Ut a enim quis massa iaculis dignissim vitae dapibus enim. Ut volutpat, libero nec hendrerit luctus, arcu urna luctus tortor, quis gravida tortor turpis vel ligula. Proin turpis ipsum, eleifend fringilla elit eu, eleifend dignissim ex. Sed mi dolor, pharetra in interdum a, mattis at ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ornare mauris at ipsum tristique tempor. Vivamus et hendrerit diam.
    <br/><br/>
Sed cursus elementum consequat. Cras at erat blandit, pretium urna in, rhoncus tellus. Quisque mollis, tortor in cursus dignissim, dolor quam sodales est, vel facilisis arcu odio nec turpis. Sed at nulla at enim pellentesque condimentum vitae non nisl. Vestibulum dignissim pellentesque augue sit amet ultrices. Maecenas vulputate arcu eu fermentum varius. Integer lacinia faucibus tristique. Sed eu blandit tortor. Morbi vehicula urna a sem lobortis, vestibulum auctor nulla convallis.
    <br/><br/>
Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque scelerisque risus pharetra erat tincidunt, ut ultricies quam blandit. Suspendisse quis posuere sem. Duis fermentum, nibh vel lobortis consectetur, odio enim mollis ante, ac feugiat enim est quis nisi. Maecenas cursus justo vitae ullamcorper fermentum. Nunc congue nibh quis libero mattis ornare vel at metus. Ut eu ex sem.
    <br/><br/>
Suspendisse efficitur orci in scelerisque dictum. In nisl ligula, lobortis ut eleifend sit amet, vehicula ac ante. Nunc in nunc scelerisque, tempor purus et, hendrerit lorem. Nam lacus lectus, fringilla a nunc ac, hendrerit tincidunt quam. Fusce felis nisi, tristique ac libero et, efficitur maximus magna. Vivamus a lorem risus. Pellentesque et elementum sapien. Suspendisse purus metus, bibendum vel maximus quis, dictum at augue. Aenean blandit arcu in purus varius, sit amet aliquam turpis maximus. Praesent hendrerit libero nisi, in rutrum ligula malesuada eu. Etiam neque quam, accumsan sit amet augue eget, consectetur sagittis odio. Aenean egestas mauris quis blandit tempor. Vestibulum in porttitor diam. Quisque egestas lorem nec dolor pharetra, vitae eleifend velit elementum.
`;

const body = document.querySelector('body');
body.append(texto);


const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');
body.append(progressBar);


//Función que haga el cálculo
const calcularPorcentajeScroll = (event) => {
    const {
        scrollTop,
        scrollHeight,
        clientHeight
    } = event.target.documentElement;

    return (scrollTop / (scrollHeight - clientHeight)) * 100;
}

//Streams
const scroll$ = fromEvent(document, 'scroll');
//scroll$.subscribe(console.log)


const progress$ = scroll$.pipe(
    map(event => calcularPorcentajeScroll(event)),
    tap({
        next: val => console.log(val),
    }),
)
progress$.subscribe(porcentaje => {
    progressBar.style.width = `${porcentaje}%`;
});

