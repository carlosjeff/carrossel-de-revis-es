
document.querySelector('.botao-proximo').onclick = () => proximo();
document.querySelector('.botao-anterior').onclick = () => anterior();
document.querySelector('.botao').onclick = () => aleatorio();

let revisoes = [
    {
        imagem: 'https://picsum.photos/id/1/192/192',
        nome: 'Dominik Borovic',
        informacao: 'WEB DEVELOPER',
        descricao: 'Com a Toptal aprendi que ser freelancer não precisava ser uma montanha-russa emocional e financeira, como muita gente tinha me avisado. Eu vi como você poderia ter um fluxo constante de trabalho interessante com clientes atenciosos sem precisar trocar constantemente de vendedor, contador, cobrador de dívidas, o que quer que você realmente faça. Pude gastar meu tempo fazendo o que fazia melhor, não me espalhando por atividades de apoio.'
    },
    {
        imagem: 'https://picsum.photos/id/10/192/192',
        nome: 'Luís Martinho',
        informacao: 'front-end',
        descricao: 'Comecei a trabalhar na Toptal há alguns anos e nunca tive motivos para sentir que não era a decisão certa - todos aqui me apoiam muito. Tive muitas oportunidades de trabalhar com pessoas altamente talentosas e aprendi muito com elas. Com a crescente importância do trabalho remoto, sinto que a Toptal é claramente o melhor lugar para encontrar projetos de alto nível.'
    },
    {
        imagem: 'https://picsum.photos/id/100/192/192',
        nome: 'Patryk Matuszewski',
        informacao: 'back-end',
        descricao: 'A Internet e a Toptal me deram a oportunidade de aproveitar melhor meus esforços como desenvolvedor de software. Trabalhar com pessoas de todo o mundo é gratificante e inspirador. Este é um momento único na história para começar a trabalhar remotamente.'
    },
    {
        imagem: 'https://picsum.photos/id/1000/192/192',
        nome: 'Daniel Nuske',
        informacao: 'fullstack',
        descricao: 'Em meu breve tempo trabalhando com a Toptal, minha vida mudou completamente. A oportunidade de escolher um projeto em que você quer trabalhar, horários flexíveis, conhecer novas pessoas e aprender muitas coisas novas em pouco tempo é ótima. Agora é até possível planejar uma viagem e ir embora – posso trabalhar de onde eu quiser! Entrar na Toptal foi a melhor decisão da minha vida!'
    },
]

let index = 0


window.onload = function() {
    let revisao = revisoes[index];
    defineDados(revisao.imagem, revisao.nome, revisao.informacao, revisao.descricao);
}

function proximo() {

    index == (revisoes.length - 1) ? index = 0 : index++;
    let revisao = revisoes[index];
    defineDados(revisao.imagem, revisao.nome, revisao.informacao, revisao.descricao);
}

function anterior() {
    
    index == 0 ? index = revisoes.length - 1 : index--; 
    let revisao = revisoes[index];
    defineDados(revisao.imagem, revisao.nome, revisao.informacao, revisao.descricao);
}

function aleatorio() {

    let indexAleatorio = 0;
    for (let i = 0; i < revisoes.length; i++) {
        
        indexAleatorio = Math.floor(Math.random() * revisoes.length)
        
        if(indexAleatorio != index){
            break;
        }

    }

    index = indexAleatorio;

    let revisao = revisoes[index];

    defineDados(revisao.imagem, revisao.nome, revisao.informacao, revisao.descricao);

}

function defineDados(imagem, nome, informacao, descricao) {


    document.querySelector('.imagem').src = imagem;
    document.querySelector('.perfil').textContent = nome;
    document.querySelector('.informacao').textContent = informacao;
    document.querySelector('.descricao').textContent = descricao;

}