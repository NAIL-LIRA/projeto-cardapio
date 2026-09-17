// Modelagem do Produto:

// Defina uma classe que represente um item do cardápio.
// Cada produto deve ter seus dados (nome, preço, imagem, etc.) e ser capaz de retornar ou gerar seu próprio HTML (o "card" visual).
//a classe deve ficar em pratos.ts
class listaPratos{
    constructor(
        public nomePrato:string,
        public descricao:string,
        public preco:number,
        public imagem:string //a string de imagem vai armazenar o caminho da imagem.
    ) {} 

    public gerarHtml():HTMLDivElement{
        
        const criaCard=document.createElement('div')
        criaCard.classList.add('subCard')
        
        const criaNome=document.createElement('p')
        criaNome.classList.add('nome')
        criaNome.textContent=this.nomePrato
        
        const criaDescricao=document.createElement('p')
        criaDescricao.classList.add('descricao')
        criaDescricao.textContent=this.descricao
        
        const criaImg=document.createElement('img')
        criaImg.classList.add('imagemPrato')
        criaImg.src=this.imagem

        const criaPreco=document.createElement('p')
        criaPreco.classList.add('preco')
        criaPreco.textContent=this.preco.toFixed(2)//aqui é recomendado usar um template string pra colocar os r$
        
        
        criaCard.appendChild(criaNome)
        criaCard.appendChild(criaDescricao)
        criaCard.appendChild(criaImg)
        criaCard.appendChild(criaPreco)
        //faltou o preço aqui
        
        return criaCard
    }

}

const card=document.querySelector('#card')

