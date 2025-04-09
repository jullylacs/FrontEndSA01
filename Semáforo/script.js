// Seleciona os elementos do DOM para manipulação
let redshow = document.querySelector(".red");
let greenshow = document.querySelector(".green");
let yellowshow = document.querySelector(".yellow");
let showtimer = document.querySelector(".timer");
let pedestrianBtn = document.getElementById("pedestrianBtn");
let pedestrianMessage = document.getElementById("pedestrianMessage");

// Inicializa os estados dos semáforos
let red = true, yellow = false, green = false;
let container = 3; // Tempo do temporizador

// Define o intervalo para a contagem regressiva e as transições de cor
let timer = setInterval(() => {

    // Quando o tempo chega a -1 e o semáforo está vermelho
    if (container === -1 && red) {
        green = true;  // A cor verde será ativada
        red = false;   // A cor vermelha será desativada
        // Aplica transições visuais suaves e altera o estilo do temporizador
        showtimer.style.transition = "all 0.5s ease";  // Transição suave
        showtimer.style.border = "8px solid #90e0a1";  // Bordas em verde pastel
        showtimer.style.color = "#90e0a1";  // Cor do texto em verde pastel
        showtimer.style.boxShadow = "0px 0px 30px rgba(144, 224, 161, 0.5)";  // Sombra suave em verde
        container = 3;  // Reinicia o temporizador para 3 segundos
    }
    // Quando o tempo chega a -1 e o semáforo está amarelo
    else if (container === -1 && yellow) {
        red = true;    // A cor vermelha será ativada
        yellow = false; // A cor amarela será desativada
        // Aplica transições visuais suaves e altera o estilo do temporizador
        showtimer.style.transition = "all 0.5s ease";  // Transição suave
        showtimer.style.border = "8px solid #f7e19c";  // Bordas em amarelo suave
        showtimer.style.color = "#f7e19c";  // Cor do texto em amarelo suave
        showtimer.style.boxShadow = "0px 0px 30px rgba(247, 225, 156, 0.5)";  // Sombra em amarelo
        container = 2;  // Reinicia o temporizador para 2 segundos
    }
    // Quando o tempo chega a -1 e o semáforo está verde
    else if (container === -1 && green) {
        yellow = true;  // A cor amarela será ativada
        green = false;   // A cor verde será desativada
        // Aplica transições visuais suaves e altera o estilo do temporizador
        showtimer.style.transition = "all 0.5s ease";  // Transição suave
        showtimer.style.border = "8px solid #ff6f61";  // Bordas em vermelho suave
        showtimer.style.color = "#ff6f61";  // Cor do texto em vermelho suave
        showtimer.style.boxShadow = "0px 0px 30px rgba(255, 111, 97, 0.5)";  // Sombra suave em vermelho
        container = 3;  // Reinicia o temporizador para 3 segundos
    }

    // Atualiza a visibilidade das luzes do semáforo de acordo com o estado atual
    if (red) {
        redshow.classList.remove("disable"); // Torna o semáforo vermelho visível
        greenshow.classList.add("disable");  // Torna o semáforo verde invisível
        yellowshow.classList.add("disable"); // Torna o semáforo amarelo invisível
    }
    if (yellow) {
        yellowshow.classList.remove("disable"); // Torna o semáforo amarelo visível
        greenshow.classList.add("disable");     // Torna o semáforo verde invisível
        redshow.classList.add("disable");       // Torna o semáforo vermelho invisível
    }
    if (green) {
        greenshow.classList.remove("disable"); // Torna o semáforo verde visível
        redshow.classList.add("disable");      // Torna o semáforo vermelho invisível
        yellowshow.classList.add("disable");   // Torna o semáforo amarelo invisível
    }

    // Atualiza o texto do temporizador com formato adequado (ex: 03, 02, 01, ...)
    if (container < 10) {
        showtimer.innerText = `0${container}`; // Adiciona zero à frente para números abaixo de 10
    } else {
        showtimer.innerText = `${container}`;   // Exibe números maiores ou iguais a 10
    }

    // Decrementa o temporizador a cada segundo
    container--;

}, 1000);  // Intervalo de 1 segundo

// Função que será chamada quando o botão do pedestre for clicado
pedestrianBtn.addEventListener('click', () => {
    // Desabilita o botão para evitar múltiplos cliques
    pedestrianBtn.disabled = true;
    pedestrianBtn.style.opacity = 0.5;  // Torna o botão semi-transparente

    // Exibe uma mensagem informando o pedestre
    pedestrianMessage.innerText = "Aguarde, o semáforo está vermelho...";
    pedestrianMessage.style.color = "white";  // Cor da mensagem em vermelho intenso

    // Pausa o ciclo normal
    clearInterval(timer);

    // Mantém o sinal vermelho por 6 segundos
    red = true;
    green = false;
    yellow = false;
    container = 6;  // Define o tempo para 6 segundos

    // Atualiza o semáforo para vermelho e reinicia o temporizador
    showtimer.style.transition = "all 0.5s ease";
    showtimer.style.border = "8px solid #f44336";  // Bordas vermelhas intensas
    showtimer.style.color = "#f44336";  // Cor do texto em vermelho intenso
    showtimer.style.boxShadow = "0px 0px 30px rgba(244, 67, 54, 0.5)";  // Sombra em vermelho intenso

    // Atualiza a visibilidade dos sinais
    redshow.classList.remove("disable");
    greenshow.classList.add("disable");
    yellowshow.classList.add("disable");

    // Após 6 segundos, retorna ao ciclo normal
    setTimeout(() => {
        // Volta a permitir cliques no botão
        pedestrianBtn.disabled = false;
        pedestrianBtn.style.opacity = 1;  // Restaura a opacidade do botão

        // Limpa a mensagem do pedestre
        pedestrianMessage.innerText = "";

        // Reinicia o ciclo automático de semáforo
        timer = setInterval(() => {
            // Ciclo automático do semáforo
        }, 1000);
    }, 5000); // Depois de 5 segundos
});
