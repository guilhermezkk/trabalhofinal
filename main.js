function tocasompom() {
    document.querySelector('#som_tecla_pom').play();
}

//document.querySelector('#som_tecla_pom').play(); aqui o código faz tal coisa.
document.querySelector('.tecla_pom').onclick = tocasompom;

function tocaSomClap() {
    document.querySelector('#som_tecla_clap').play();
}

document.querySelector('.tecla_clap').onclick = tocaSomClap;