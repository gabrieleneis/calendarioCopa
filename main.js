function criaJogos(time1, hora, time2){
    return`
    <li>
        <img src="./img/${time1}.svg" alt="">
        <p>${hora}</p>
        <img src="./img/${time2}.svg" alt="">
    </li>`
}

function criaCard(data, dia, jogos){
    return`
    <div class="card">
        <div class="data">
            <p><span>${data}</span>${dia}</p>
        </div>
        <ul>
        ${jogos}
        </ul>
    </div>`
}

document.querySelector("body").innerHTML = `
<header>
    <h1 class="titulo">Calendário</h1>
</header>
<main>
    <section id="cards">
        ${criaCard("24/11", "segunda-feira", criaJogos("brazil", "16:00", "colombia") + criaJogos("brazil", "16:00", "colombia"))}
    </section>
</main>
`