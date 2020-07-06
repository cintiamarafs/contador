function contar() {
   let inicio = document.getElementById('txti')
   let fim = document.getElementById('txtf')
   let passo = document.getElementById('txtp')
   let res = document.getElementById('res')

   if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
       window.alert('[ERRO] faltam dados!')
   } else {
       res.innerHTML = 'contando:'
       let i = Number(inicio.value)
       let f = Number(fim.value)
       let p = Number(passo.value)
       if(i < f){
           //contagem crescente
           for(let c = i; c <= f; c += p){
           res.innerHTML += `${c} \u{1F449}`
        }
       } else {
           // contagem regressiva
           for(let c = i; c >= f; c -= p){
               res.innerHTML += `${c} \u{1f449} `
           }
        }       
          res.innerHTML += `\u{1f3c1}`
}
}