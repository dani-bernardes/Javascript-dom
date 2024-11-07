// 
// let quadrado1 = document.getElementById('quadrado1');
// let quadrado2 = document.getElementById('quadrado2');
// let quadrado3 = document.getElementById('quadrado3');

// quadrado1.addEventListener('click',function() {çç
    // if(quadrado1.style.backgroundColor == 'palevioletred') {
        // quadrado1.style.backgroundColor = 'red'  

    // }else{
        // quadrado1.style.backgroundColor ='palevioletred' 
    // }
// })
// quadrado2.addEventListener('click',function() {
    // if(quadrado2.style.backgroundColor == 'purple') {
        // quadrado2.style.backgroundColor = 'pink'  

    // }else{
        // quadrado2.style.backgroundColor ='purple' 
    // }
// })
// quadrado3.addEventListener('click',function() {
    // if(quadrado3.style.backgroundColor == 'aqua') {
        // quadrado3.style.backgroundColor = 'blue'  

    // }else{
        // quadrado3.style.backgroundColor ='aqua' 
    // }
// })

// let botao = document.getElementById('botao');
// let numero = document.getElementById('bo');
// let i = 0
// botao.addEventListener('click',function(){
//  i++
//  numero.innerText = i
// })

// let botao2 = document.getElementById('botao2');
// botao2.addEventListener('click',function(){
//  numero.innerText = 0


// })


// atividade 3
// let textoVisivel = false;
  
  
//   let botao = document.getElementById('meuBotao');
//   botao.addEventListener('click', function() {
    // let texto = document.getElementById('texto');
    
    // textoVisivel = !textoVisivel;
    
    // texto.style.display = textoVisivel ? 'block' : 'none';
    // botao.innerText = textoVisivel ? 'Ocultar' : 'Mostrar';
//   });



// atividade 4:
//  let botao = document.getElementById('botao');
      
//  botao.addEventListener('click', function() {
  
//   let novoTexto = prompt("Digite o novo texto:");
//    document.getElementById('texto').innerText = novoTexto;  
//  });

// atividade 5:
// let tecla = document.getElementById('seila');
// document.addEventListener('keydown',function(event){
// tecla.innerText = 'voce clicou ' +event.key

// })

// atividade 6
let votar = document.getElementById('votar')
votar.addEventListener('click' ,function(){
let voto = Number(prompt("Vote em um dos números 11/12/13"));

if (voto === 11) {
    document.getElementById('candidato1').style.display ='block'
}else if (voto=== 12){
    document.getElementById('candidato2').style.display ='block'
}else if (voto === 13){
document.getElementById('candidato3').style.display ='block'
}else {
    alert("vote")
}

})
