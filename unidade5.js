const perguntas = [
    {
        pergunta: "Qual é o significado do termo 'layout'?",
        respostas: [
            "Plano de execução de um programa de computador.",
            "Arranjo físico de componentes eletrônicos.",
            "Esquema de distribuição de conteúdo em uma página ou documento.",
            "Projeto de construção civil."
        ],
        correta: 2 
    },
    {
        pergunta: "O que caracteriza um 'Layout Líquido'?",
        respostas: [
            "Organização de conteúdo que permanece fixa, independente do tamanho da janela.",
            "Organização de conteúdo que se adapta ao tamanho da janela.",
            "Esquema de layout aplicado apenas em dispositivos móveis.",
            "Projeto de layout com elementos flutuantes."
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a função da propriedade 'float' em CSS?",
        respostas: [
            "Criar animações de transição entre elementos.",
            "Posicionar elementos em relação ao scroll da página.",
            "Fazer com que os elementos flutuem à direita ou à esquerda de um conteúdo.",
            "Definir a cor de fundo de um elemento."
        ],
        correta: 2 
    },
    {
        pergunta: "Quais são os problemas comuns ao utilizar 'Layouts com Float'?",
        respostas: [
            "Dependência da ordem dos blocos no HTML, margem e borda de tamanho variável, dificuldade em manter larguras de colunas coerentes.",
            "Dificuldade em posicionar elementos em relação ao scroll da página, falta de suporte para dispositivos móveis, margens imprevisíveis.",
            "Conflito de classes CSS, incompatibilidade com navegadores antigos, ausência de suporte para HTML5.",
            "Limitação na personalização visual, ausência de animações, dificuldade em adicionar interatividade."
        ],
        correta: 0 
    },
    {
        pergunta: "O que são Frameworks de Grid?",
        respostas: [
            "Conjuntos de bibliotecas que adicionam recursos de grade em programas de computador.",
            "Ferramentas para criação de diagramas de fluxo em sistemas web.",
            "Sistemas que automatizam a configuração de servidores de banco de dados.",
            "Conjuntos de códigos que estendem uma linguagem e oferecem funcionalidades para criação de layouts com grade."
        ],
        correta: 3 
    },
    {
        pergunta: "Qual é a principal diferença entre 'Layout Responsivo' e 'Layout Adaptativo'?",
        respostas: [
            "O Layout Responsivo se adapta a diferentes tamanhos de tela em tempo real, enquanto o Layout Adaptativo utiliza tamanhos de layout pré-definidos.",
            "O Layout Adaptativo oferece mais flexibilidade em relação à estrutura da página, enquanto o Layout Responsivo é mais eficiente em termos de código.",
            "O Layout Responsivo utiliza tecnologias mais antigas como HTML e CSS, enquanto o Layout Adaptativo é baseado em frameworks modernos.",
            "O Layout Adaptativo é mais fácil de implementar para desenvolvedores iniciantes, enquanto o Layout Responsivo é mais complexo e exige conhecimentos avançados."
        ],
        correta: 0 
    },
    {
        pergunta: "Como é feita a definição de regras CSS específicas para determinadas condições de mídia?",
        respostas: [
            "Através da propriedade 'media' em cada regra CSS.",
            "Incluindo as regras CSS dentro de tags <media> no documento HTML.",
            "Utilizando a diretiva '@media' no arquivo CSS.",
            "Criando arquivos CSS separados para cada condição de mídia."
        ],
        correta: 2 
    },
    {
        pergunta: "Qual é a finalidade da diretiva '@media' em CSS?",
        respostas: [
            "Permitir a criação de regras CSS específicas para diferentes tipos de mídia, como telas de dispositivos móveis, impressoras, entre outros.",
            "Definir o formato de arquivos de mídia como imagens e vídeos em uma página web.",
            "Criar consultas SQL para acessar dados de mídia armazenados em um banco de dados.",
            "Executar scripts JavaScript dependendo do tipo de mídia em que a página está sendo visualizada."
        ],
        correta: 0 
    },
    {
        pergunta: "Qual das seguintes afirmações melhor descreve um layout congelado em design web?",
        respostas: [
            "Um layout congelado ajusta dinamicamente o conteúdo para preencher todo o espaço disponível na janela do navegador.",
            "Um layout congelado mantém a mesma organização de conteúdo, independentemente do tamanho da janela do navegador.",
            "Um layout congelado é caracterizado por elementos flutuantes que se movem livremente na página conforme o usuário redimensiona a janela do navegador.",
            "Um layout congelado apresenta uma estrutura rígida e fixa, mas permite que certos elementos se ajustem automaticamente conforme necessário"
        ],
        correta: 1 
    },
    {
        pergunta: "Qual é uma característica do layout parcialmente líquido com float?",
        respostas: [
            "Todos os blocos têm tamanhos fluidos que se ajustam automaticamente ao tamanho da janela do navegador.",
            "Margens, paddings e bordas são definidos em unidades relativas, como porcentagem ou ems.",
            "Os blocos à direita devem ser colocados após o bloco central no HTML para garantir o layout correto.",
            "O bloco central é definido com a propriedade float: center para posicioná-lo no centro da página."
        ],
        correta: 2
    },
    {
        pergunta: "Quais são os principais benefícios do uso de Frameworks de Grid?",
        respostas: [
            "Facilitam a organização do código HTML, permitem criar layouts complexos com menos esforço, oferecem suporte para dispositivos móveis.",
            "Reduzem a quantidade de código CSS necessário, aumentam a velocidade de carregamento das páginas, garantem compatibilidade com todos os navegadores.",
            "São mais eficientes em termos de desempenho, permitem criar efeitos visuais avançados sem a necessidade de scripts JavaScript, oferecem suporte para animações CSS3.",
            "Permitem a criação de aplicações web interativas, possibilitam a integração com bancos de dados e sistemas de gerenciamento de conteúdo, garantem a segurança dos dados do usuário."
        ],
        correta: 0 
    },
    {
        pergunta: "Como é possível criar um layout adaptativo utilizando CSS e JavaScript?",
        respostas: [
            "Definindo diretivas '@media' no arquivo CSS para especificar diferentes estilos de acordo com a largura da tela.",
            "Utilizando frameworks como Bootstrap ou Foundation que oferecem suporte nativo para layouts adaptativos.",
            "Criando um conjunto pré-definido de tamanhos de layout com base no tamanho da tela do dispositivo.",
            "Adicionando scripts JavaScript que alteram o layout da página de acordo com o tamanho da tela do dispositivo."
        ],
        correta: 3 
    },
];






const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')
const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

for(const item of perguntas) {
const quizItem = template.content.cloneNode(true)
quizItem.querySelector('h3').textContent = item.pergunta

for(let resposta of item.respostas) {
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
        dt.querySelector('input').value = item.respostas.indexOf(resposta)
        dt.querySelector('input').onchange = (event) => {
            const estaCorreta = event.target.value == item.correta 
            
            
            corretas.delete(item)
            if(estaCorreta) {

                corretas.add(item)
            }
            mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
        }

        
        
        quizItem.querySelector('dl').appendChild(dt)
}   

quizItem.querySelector('dl dt').remove()

quiz.appendChild(quizItem)
}


