var cartaOptimus = {
    nome:"Optimus Prime",
    imagem: "https://i.pinimg.com/originals/fa/8f/3b/fa8f3b1dd62ad5037dd095e5eae95179.gif",
    atributos:{
      ataque:90,
      defesa:80,
      magia:70
    }
  }
  
  var cartaMagneto = {
    nome:"Magneto",
    imagem: "http://24.media.tumblr.com/7b4f5f5fd8976b2591a7069f1862cdf7/tumblr_mlpu6fpy6T1rur0aro1_400.gif",
    atributos:{
      ataque:70,
      defesa:90,
      magia:80
    }
  }
  
  var cartaMadruga = {
    nome: "Seu Madruga",
    imagem: "https://i.pinimg.com/originals/71/a8/3d/71a83db7a5b735924f1c4daa551c46ca.gif",
    atributos:{
      ataque: 80,
      defesa: 70,
      magia: 90
    }
  }
  
  var cartaPaulo = {
      nome: "Seiya de Pegaso",
      imagem: "https://i.pinimg.com/originals/69/7b/02/697b02afceeb5ccd795dcb349ea86fef.gif",
      atributos: {
          ataque: 80,
          defesa: 60,
          magia: 90
      }
  }
  
  var cartaRafa = {
      nome: "Bulbasauro",
      imagem: "https://thumbs.gfycat.com/VelvetyCreamyBluet-small.gif",
      atributos: {
          ataque: 70,
          defesa: 65,
          magia: 85
      }
  }
  
  var cartaGui = {
      nome: "Lorde Darth Vader",
      imagem: "https://media.tenor.com/images/02f343cf4ac8398faf78dd6918feb47c/tenor.gif",
      atributos: {
          ataque: 80,
          defesa: 60,
          magia: 90
      }
  }
  
  var cartaLol = {
      nome: "Caitlyn",
      imagem: "https://thumbs.gfycat.com/ReliableWhichDarklingbeetle-max-1mb.gif",
      atributos: {
          ataque: 90,
          defesa: 40,
          magia: 10
      }
  }
  
  var cartaNaruto = {
      nome: "Naruto",
      imagem: "https://giffiles.alphacoders.com/155/15591.gif",
      atributos: {
          ataque: 80,
          defesa: 60,
          magia: 100
      }
  }
  
  var cartaHarry = {
      nome: "Harry Potter",
      imagem: "http://pa1.narvii.com/7434/f059f79e4621b236224d32bfacf12c86a41d8e17r1-250-169_00.gif",
      atributos: {
          ataque: 70,
          defesa: 50,
          magia: 95
      }
  }
  
  var cartaBatman = {
      nome: "Batman",
      imagem: "https://media1.giphy.com/media/B4jfJqiIxvU08/200.gif",
      atributos: {
          ataque: 95,
          defesa: 70,
          magia: 0
      }
  }
  
  var cartaMarvel = {
      nome: "Capitã Marvel",
      imagem: "https://i.pinimg.com/originals/4f/5c/31/4f5c3108a1d0114234f5200e9df7e179.gif",
      atributos: {
          ataque: 90,
          defesa: 80,
          magia: 100
      }
  }
  
  var cartaSilvio = {
      nome: "Silvio Santos",
      imagem: "https://thumbs.gfycat.com/AromaticIncompleteBeauceron-size_restricted.gif",
      atributos: {
          ataque: 90,
          defesa: 60,
          magia: 10
      }
  }
  
  var cartaMaquina
  var cartaJogador
  var cartas = [cartaOptimus, cartaMagneto, cartaMadruga, cartaPaulo, cartaRafa, cartaGui, cartaLol, cartaNaruto, cartaHarry, cartaBatman, cartaMarvel, cartaSilvio]
  //            0           1           2          3         4            5            6           7     
  
  var pontosJogador = 0
  var pontosMaquina = 0
  
  atualizaPlacar()
  atualizaQuantidadeDeCartas()
  
  function atualizaQuantidadeDeCartas(){
    var divQuantidadeCartas = document.getElementById('quantidade-cartas')
    var html = "Quantidade de cartas no jogo: " + cartas.length
    
    divQuantidadeCartas.innerHTML = html
  }
  
  function atualizaPlacar(){
    var divPlacar = document.getElementById('placar')
    var html = "Jogador " + pontosJogador + " x " + pontosMaquina + " Máquina"
    
    divPlacar.innerHTML = html
  }
  
  function sortearCarta() {
      var numeroCartaMaquina = parseInt(Math.random() * cartas.length)
      cartaMaquina = cartas[numeroCartaMaquina]
      cartas.splice(numeroCartaMaquina, 1)
  
      var numeroCartaJogador = parseInt(Math.random() * cartas.length)
      cartaJogador = cartas[numeroCartaJogador]
    cartas.splice(numeroCartaJogador, 1)
      
      document.getElementById('btnSortear').disabled = true
      document.getElementById('btnJogar').disabled = false
  
      atualizaPlacar()
      exibeCartaJogador()
      atualizaQuantidadeDeCartas()
  
  }
  
  function exibeCartaJogador() {
      var divCartaJogador = document.getElementById("carta-jogador")
      var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
      divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`
      var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
      var opcoesTexto = ""
  
      for (var atributo in cartaJogador.atributos) {
          opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>"
      }
  
      var html = "<div id='opcoes' class='carta-status'>"
  
      divCartaJogador.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
  }
  
  function obtemAtributoSelecionado() {
      var radioAtributo = document.getElementsByName('atributo')
      for (var i = 0; i < radioAtributo.length; i++) {
          if (radioAtributo[i].checked) {
              return radioAtributo[i].value
          }
      }
  }
  
  function jogar() {
      var divResultado = document.getElementById("resultado")
      var atributoSelecionado = obtemAtributoSelecionado()
  
      if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
          htmlResultado = '<p class="resultado-final">Venceu</p>'
          pontosJogador++
      } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
          htmlResultado = '<p class="resultado-final">Perdeu</p>'
          pontosMaquina++
      } else {
          htmlResultado = '<p class="resultado-final">Empatou</p>'
      }
    
      if (cartas.length == 0){
        alert("Fim de Jogo")
        if (pontosJogador > pontosMaquina){
          htmlResultado = '<p class="resultado-final">Venceu o Jogo</p>'
        } else if (pontosMaquina > pontosJogador){
          htmlResultado = '<p class="resultado-final">Perdeu o Jogo</p>'
        } else{
          htmlResultado = '<p class="resultado-final">O Jogo Empatou</p>'
        }
      } else {
        document.getElementById('btnProximaRodada').disabled = false
      }
  
      divResultado.innerHTML = htmlResultado
      document.getElementById('btnJogar').disabled = true
    
      atualizaPlacar()
      exibeCartaMaquina()
      atualizaQuantidadeDeCartas()
  }
  
  function exibeCartaMaquina() {
      var divCartaMaquina = document.getElementById("carta-maquina")
      var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
      divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`
      var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
      var opcoesTexto = ""
  
      for (var atributo in cartaMaquina.atributos) {
          console.log(atributo)
          opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "<br>"
      }
  
      var html = "<div id='opcoes' class='carta-status --spacing'>"
  
      divCartaMaquina.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
  }
  
  function proximaRodada(){
    var divCartas = document.getElementById('cartas')
    
    divCartas.innerHTML = `<div id="carta-jogador" class="carta"></div> <div id="carta-maquina" class="carta"></div>`
    
    document.getElementById('btnSortear').disabled = false
    document.getElementById('btnJogar').disabled = true
    document.getElementById('btnProximaRodada').disabled = true
    
    var divResultado = document.getElementById('resultado')
    divResultado.innerHTML = ""
  }