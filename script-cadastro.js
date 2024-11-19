async function cadastrarMeme() {
    const url = 'https://66fc5dddc3a184a84d16e0bd.mockapi.io/api/memes'

    const linkDigitado = document.querySelector('#linkImagem').value
    const tituloDigitado = document.querySelector('#titulo').value
    let dadosMemes = {
        linkImagem: linkDigitado,
        dataCadastro: new Date(),
        titulo: tituloDigitado,
        likes: 0
    }
    const resposta = await fetch(url, {
        method: 'POST',
        headers: {'Content-TYpe': 'application/json'},
        body: JSON.stringify(dadosMemes)
    })
    alert('Meme cadastrado com sucesso!')

}