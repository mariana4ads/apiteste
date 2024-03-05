const perguntas = [
    {
        pergunta: "O que é CMS e WCMS?",
        respostas: [
            "Content Management System e Website Communication Management System",
            "Creative Management System e Web Content Management System",
            "Content Management System e Web Content Management System",
            "Computer Management System e Web Content Management System"
        ],
        correta: 2
    },
    {
        pergunta: "Qual a principal função de um CMS?",
        respostas: [
            "Gerenciar o hardware de um servidor web.",
            "Fornecer recursos para gerenciar conteúdo de um site.",
            "Desenvolver módulos extensivos para sites.",
            "Implementar APIs robustas para sites dinâmicos."
        ],
        correta: 1
    },
    {
        pergunta: "Qual das seguintes plataformas é descrita como um Framework de Gerenciamento de Conteúdo?",
        respostas: [
            "Redaxscript",
            "Joomla",
            "WordPress",
            "OpenCart"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a tecnologia principal usada pelo CMS Pimcore?",
        respostas: [
            "JavaScript",
            "HTML5 e CSS3",
            "PHP",
            "Python"
        ],
        correta: 1
    },
    {
        pergunta: "O que significa o acrônimo PHP?",
        respostas: [
            "PHP: Hypertext Preprocessor",
            "PHP: Hyper Transfer Protocol",
            "PHP: Hyper Text Markup Language",
            "PHP: High Performance Programming"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é o servidor web mais utilizado no mundo?",
        respostas: [
            "Apache",
            "NCSA",
            "WAMP",
            "XAMPP"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é o banco de dados de código aberto mais conhecido no mundo?",
        respostas: [
            "SQL Server",
            "Oracle",
            "MySQL",
            "PostgreSQL"
        ],
        correta: 2
    },
    {
        pergunta: "Qual ferramenta é usada para criar um banco de dados para um projeto WordPress?",
        respostas: [
            "phpMyAdmin",
            "MySQL Workbench",
            "SQL Server Management Studio",
            "PostgreSQL Admin Tool"
        ],
        correta: 0
    },
    {
        pergunta: "Qual ferramenta pode ser usada para instalar e configurar o WordPress, MySQL e Apache de uma vez?",
        respostas: [
            "Wamp ou Xampp ou Easyphp",
            "phpMyAdmin",
            "MySQL Workbench",
            "Apache GUI Installer"
        ],
        correta: 0
    },
    {
        pergunta: "O que é necessário antes de iniciar a instalação do WordPress?",
        respostas: [
            "Criar uma pasta com nome do projeto no servidor Xampp.",
            "Iniciar o servidor Web e criar um banco de dados MySQL.",
            "Baixar a última versão do WordPress e instalar o phpMyAdmin.",
            "Configurar o Apache para acessar o servidor MySQL."
        ],
        correta: 1
    },
    {
        pergunta: "Como acessar o admin do WordPress após a instalação?",
        respostas: [
            "http://localhost/projeto/wp-admin",
            "http://localhost:85/projeto/wp-login.php",
            "http://localhost:8080/projeto/wp-admin",
            "http://localhost/projeto1/wp-login.php"
        ],
        correta: 1
    },
    {
        pergunta: "O que é necessário para acessar o site WordPress após a instalação?",
        respostas: [
            "Acessar o painel de controle do servidor.",
            "Digitar o endereço do site no navegador.",
            "Fazer login no MySQL e PHP.",
            "Baixar e instalar um navegador compatível."
        ],
        correta: 1
    },
    {
        pergunta: "Quais dos seguintes itens são conceitos básicos trabalhados no painel do Administrador do WordPress?",
        respostas: [
            "Configurar o hardware do servidor.",
            "Modificar o tema e criar páginas.",
            "Instalar um novo servidor web.",
            "Desenvolver módulos extensivos."
        ],
        correta: 1
    },
    {
        pergunta: "O que você precisa fazer antes de importar conteúdo para o WordPress?",
        respostas: [
            "Instalar o Importador WordPress.",
            "Criar um novo banco de dados.",
            "Exportar seu conteúdo usando as Ferramentas.",
            "Modificar o tema do site."
        ],
        correta: 0
    },
    {
        pergunta: "Qual das seguintes tecnologias não é mencionada como parte do CMS WordPress?",
        respostas: [
            "PHP",
            "HTML5",
            "MySQL",
            "Python"
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


