console.log('hello!')
let n = 0
contagens= []

function somaUm(id){
  var resultado = document.getElementById(id)
  var mudar = resultado.children[1]
  pos = id
  vezes = contagens[pos]++
  mudar.innerHTML = vezes
  }
function zerar (id){
  var resultado = document.getElementById(id)
  var mudar = resultado.children[1]
  pos = id
  contagens[pos] = 0
  mudar.innerHTML = contagens[pos]
 }
 

function criar(){
  const Nome = document.querySelector('#Name') // Pega o Nome no Input
  const cx = document.createElement('div') //INicia a DIV
  const p = document.createElement('p') // Criar um <p>
  const x = document.createElement('span'); // Criar um <span>
  const btn = document.createElement("button"); // Criar um botao
  
  x.innerHTML = 0; // Spam vai ser igual a 0 para iniciar o contador
  btn.innerHTML = "Zerar"; //Nome do botao
 
    p.textContent=Nome.value
    p.style.color='white'
    cx.style.backgroundColor=gerar_cor();
    cx.style.textAlign = "center";


    cx.id = n // uso o numero do contador como identificador 
    identificador = cx.id
    contagens[n] = 0

    cx.appendChild(p)
    cx.appendChild(x)
    cx.appendChild(btn)
    
    cx.onclick = (event) => {somaUm(identificador)}
    btn.onclick = (event) => {zerar(identificador)}

    n++;

    document.querySelector('.field').appendChild(cx);
}

function gerar_cor(opacidade = 1) {
  let r = Math.random() * 255;
  let g = Math.random() * 255;
  let b = Math.random() * 255;

  return `rgba(${r}, ${g}, ${b}, ${opacidade})`;
}
