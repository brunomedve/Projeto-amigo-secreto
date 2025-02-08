let amigos = [];
reiniciar();

function adicionar() {
    let adicionaAmigo = document.getElementById('nome-amigo');

    if (adicionaAmigo.value.trim() === '') {
        alert("Digite um nome antes de adicionar!");
        return;
    }
    if (amigos.includes(adicionaAmigo.value)) {
        alert('O nome já existe na lista!')
        adicionaAmigo.value = '';
        return;
    }

    let lista = document.getElementById('lista-amigos');
    amigos.push(adicionaAmigo.value);

    if (lista.textContent == '') {
        lista.textContent = adicionaAmigo.value;
    } else {
        lista.textContent = lista.textContent + ', ' + adicionaAmigo.value;
    }
    adicionaAmigo.value = '';
}

function sortear() {
    if (amigos.length < 4) {
        alert('Adicione pelo menos 4 nomes!');
        return;
    }

    embaralha(amigos);
    let sorteio = document.getElementById('lista-sorteio');

    for (let i = 0; i < amigos.length; i++) {

        if (i == amigos.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' -->' + amigos[0] + '<br/>';
        } else {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' -->' + amigos[i + 1] + '<br/>';
        }
    }
}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] =
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').textContent = ''
    document.getElementById('lista-sorteio').innerHTML = '';

}
