const perguntas = [
    {
        pergunta: "O que é Cascading Style Sheet ou Folha de Estilo em Cascata?",
        respostas: [
            "Uma linguagem de programação para estruturar páginas web.",
            "Uma linguagem para criar interatividade em páginas web.",
            "Uma linguagem para adicionar estilos visuais a páginas web.",
            "Uma linguagem para programação de servidores."
        ],
        correta: 2 
    },
    {
        pergunta: "Qual a diferença entre HTML e CSS?",
        respostas: [
            "HTML é utilizado para adicionar estilos visuais, enquanto CSS é utilizado para estruturar o conteúdo.",
            "HTML é utilizado para programação, enquanto CSS é utilizado para estilizar elementos.",
            "HTML é utilizado para estruturar a página, enquanto CSS é utilizado para formatar o visual da página.",
            "HTML é uma linguagem de programação, enquanto CSS é uma linguagem de marcação."
        ],
        correta: 2 
    },
    {
        pergunta: "Quais são as três formas básicas de inserir CSS em uma página HTML?",
        respostas: [
            "Externo, interno e inline.",
            "CSS, HTML e JavaScript.",
            "Online, offline e integrado.",
            "Externo, incorporado e inline."
        ],
        correta: 0 
    },
    {
        pergunta: "Como é feita a inserção de CSS externo em uma página HTML?",
        respostas: [
            "Utilizando a tag <style> no cabeçalho da página.",
            "Inserindo diretamente as regras CSS no corpo da página.",
            "Usando a tag <link> no cabeçalho da página.",
            "Através de atributos class nas tags HTML."
        ],
        correta: 2 
    },
    {
        pergunta: "Qual é a prioridade de aplicação de estilos entre CSS inline, CSS externo e CSS incorporado?",
        respostas: [
            "CSS externo > CSS interno > CSS inline.",
            "CSS inline > CSS interno > CSS externo.",
            "CSS interno > CSS externo > CSS inline.",
            "CSS inline > CSS externo = CSS interno"
        ],
        correta: 1
    },
    {
        pergunta: "O que são seletores CSS?",
        respostas: [
            "Ferramentas para seleção de cores em uma página web.",
            "Tags específicas para estruturar o conteúdo de uma página HTML.",
            "Padrões para aplicação de estilos a elementos HTML.",
            "Funções para controle de animações em CSS."
        ],
        correta: 2 
    },
    {
        pergunta: "Qual é a função do seletor universal (*) em CSS?",
        respostas: [
            "Aplicar um estilo a todos os elementos da página.",
            "Selecionar apenas elementos específicos da página.",
            "Aplicar um estilo somente ao primeiro elemento da página.",
            "Excluir elementos da aplicação de estilos."
        ],
        correta: 0 
    },
    {
        pergunta: "Como é definido um estilo para um grupo de elementos em CSS?",
        respostas: [
            "Utilizando a tag <div> como seletor.",
            "Agrupando as tags desejadas separadas por vírgula.",
            "Inserindo as regras CSS diretamente nas tags HTML.",
            "Utilizando a tag <style> no corpo da página."
        ],
        correta: 1 
    },
    {
        pergunta: "O que são classes em CSS?",
        respostas: [
            "Identificadores únicos para elementos HTML.",
            "Padrões para seleção de elementos na página.",
            "Agrupamentos de estilos aplicados a elementos específicos.",
            "Elementos de marcação para criar conteúdo estruturado."
        ],
        correta: 2 
    },
    {
        pergunta: "Qual é a principal diferença entre classes e IDs em CSS?",
        respostas: [
            "Classes podem ser aplicadas a vários elementos, enquanto IDs são únicos em uma página.",
            "IDs podem ser aplicados a vários elementos, enquanto classes são únicas em uma página.",
            "Classes e IDs são sinônimos e podem ser usados de forma intercambiável.",
            "Classes e IDs não têm diferenças significativas em CSS."
        ],
        correta: 0  
    },
    {
        pergunta: "Como são identificados os estilos individuais em CSS?",
        respostas: [
            "Através de seletor universal (*).",
            "Utilizando a tag <style> no corpo da página.",
            "Através de IDs, que são identificadores únicos para elementos.",
            "Com a tag <div>, que cria divisões na página."
        ],
        correta: 2 
    },
    {
        pergunta: "Qual é a sintaxe correta para definir um estilo para uma classe em CSS?",
        respostas: [
            ".nome_da_classe { propriedade: valor }.",
            "#nome_da_classe { propriedade: valor }.",
            "elemento .nome_da_classe { propriedade: valor }.",
            "elemento#nome_da_classe { propriedade: valor }."
        ],
        correta: 0 
    },
    {
        pergunta: "O que são comentários em CSS e como são inseridos?",
        respostas: [
            "Mensagens de erro inseridas diretamente no código CSS.",
            "Descrições de estilos que não são interpretadas pelo navegador e aparecem entre /* */",
            "Informações importantes para a formatação de uma página HTML.",
            "Textos que aparecem na página como notas para o usuário, iniciados com //"
        ],
        correta: 1 
    },
    {
        pergunta: "Qual é a finalidade das tags <div> e <span> em HTML?",
        respostas: [
            "Para adicionar formatação visual a elementos de texto.",
            "Para criar layouts complexos em uma página.",
            "Para definir conteúdos específicos dentro de um documento.",
            "Para representar divisões genéricas e spans de texto, respectivamente."
        ],
        correta: 3 
    },
    {
        pergunta: "Como são representadas as cores em CSS utilizando valores hexadecimais?",
        respostas: [
            "Através de uma combinação de valores entre 0 e 1.",
            "Com uma sequência de valores numéricos separados por vírgulas.",
            "Utilizando uma combinação de valores entre 0 e 255.",
            "Através de uma sequência de caracteres que representam cores específicas."
        ],
        correta: 3 
    }
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


