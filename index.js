











// Captura o elemento ( body ) do html.
const body = document.querySelector("body");

// Captura o elemento ( h1 com a class="sujeitos" ).
const sujeitos_div = document.querySelector(".One");

/*

// Array simples, por número ( sem objeto ).
// Cada propriedade não tem seu objeto.
// But i am not use it.
const array_number = [ 

"Sujeitos in English",
"I = Eu",
"You = você / vocês",
"He = Ele",
"She = Ela",
"We = Nós",
"It = isso / esse / usado para animais ou objetos",
"They = Eles / Elas"
];

*/

// Array conténdo objetos ( propriedade ).
const array_object = [

    { sujto: "I", tradu: "Eu" },
    
    { sujto: "You", tradu: "Você / vocês" },
    
    { sujto: "He", tradu: "Ele" },

    { sujto: "She", tradu: "Ela" },

    { sujto: "It", tradu: "Esse / Isso" },

    { sujto: "We", tradu: "Nós" },

    { sujto: "They", tradu: "Eles / Elas" }

];

// Cria-se um elemento ( <p> ) para cada for i = 1...2..3.
// O ( .length ) obtém o tamanho do array.
// NO contexto do for ( que é uma funcão de loop );
// Para cada i + 1 ( condicao "Enquato i for menor que tamanho do array-
// Adicionar mair 1 ao i ) executa a ação ( para cada [i] cria um <p>.
// So para quando o i for maior que o array ( no caso 7 *contei* ).
for ( var i = 0 ; i < array_object.length ; i++ ) {

    // Create new element for each.
    // Cria um novo elemento a cada loop.
    const NewP_paragraph = document.createElement("p");

    // Sent all at messagem of the "array_object" here.
    // Envia todas as messagens do "array_object" aqui.
    NewP_paragraph.innerHTML = array_object[i].sujto + "<br>" + array_object[i].tradu;

    // Put all ( element creates for the "for" ) inside of the ( div ).
    // Coloca todos ( elementos criados pelo "for" ) dentro do ( div ).
    sujeitos_div.appendChild(NewP_paragraph);

}

// Captura o elemento ( div com a class="exemples" ).
// Capture the element ( div with the class="exemples" ).
const exemplos_div = document.querySelector(".Two");

// Creation of the array with exemples for sujectos.
const array_exemples = [

    { sujto: "I run", tradu: "Eu corro" },

    { sujto: "You walk", tradu: "Você anda" },

    { sujto: "He eats", tradu: "Ele come" },

    { sujto: "She loves", tradu: "Ela ama" },

    { sujto: "It is a box", tradu: "Isso é uma caixa" },

    { sujto: "We work", tradu: "Nós trabalhamos" },

    { sujto: "They talk", tradu: "Eles/Elas falam" }

];

// Itera pelo array ( array_exemples ).
// Para cada 1 do nivel do array, um new <p> is create.
for ( var i = 0 ; i < array_exemples.length ; i++ ) {

    // Cria-se Uma nova <p> para cada iterada que o for der.
    const NewP_paragraph = document.createElement("p");

    // Cria o html e so isso.
    NewP_paragraph.innerHTML = array_exemples[i].sujto + "<br>" + array_exemples[i].tradu;

    // Aqui que ta a magica, é onde o que foi criado vai ser colocado.
    // no div pai o ( Exemples&div has the tag or class="exemples_div that going use ).
    exemplos_div.appendChild(NewP_paragraph);

}








// Tempos verbais: is , are....
const Verbal_times = document.querySelector(".Three");

// Tempos verbais presente simples.
// Simple present.
const to_be_time = [

    { to_be: "am", tradu: "'i' + am / é / está " },

    { to_be: "is", tradu: "'She' + is / é / está " },

    { to_be: "is", tradu: "'He' + is / é / está " },
    
    { to_be: "is", tradu: "'It' + is / é / está " },

    { to_be: "are", tradu: "'You' + are / é / está " },

    { to_be: "are", tradu: "'We' + are / somos / estamos " },

    { to_be: "are", tradu: "'They' + are / são / estão " }

];

// itera sobre o array to_be_times
for ( var i = 0 ; i < to_be_time.length ; i++ ) {

    // Aqui cria-se um novo paragrafo para cada loop do for.
    const NewP_paragraph = document.createElement("p");

    NewP_paragraph.innerHTML = to_be_time[i].to_be + "<br>" + to_be_time[i].tradu;

    Verbal_times.appendChild(NewP_paragraph);

}

// Captura da class="exemploTveb"
const verbal__div = document.querySelector(".Four");

const Verbal_times_array = [

    { to_be: "I am running", tradu: "Eu estou correndo" },

    { to_be: "She is eating", tradu: "Ela esta comendo" },

    { to_be: "He is walking", tradu: "Ele esta andando" },

    { to_be: "It is a table", tradu: "Esta é uma mesa" },

    { to_be: "You are talking", tradu: "Você esta falando" },

    { to_be: "We are calling", tradu: "Nós estamos ligando" },

    { to_be: "They are speaking", tradu: "Eles(a) estão falando" }

];

for ( var i = 0 ; i < Verbal_times_array.length ; i++ ) {

    // Create new paragraph
    const NewP_paragraph = document.createElement("p");

    NewP_paragraph.innerHTML = Verbal_times_array[i].to_be + "<br>" + Verbal_times_array[i].tradu;

    verbal__div.appendChild(NewP_paragraph);

}










// Passdo simples ( Pt-br )
// Simple past  ( En-eua )
const tempoVerbal_past_div = document.querySelector(".Five");

const verbal_times_array_past = [

    { to_be: "was", tradu: "'I' + was / estava" },

    { to_be: "was", tradu: "'She' + was / estava" },

    { to_be: "was", tradu: "'He' + was / estava" },

    { to_be: "was", tradu: "'It' + was / estava" },

    { to_be: "were", tradu: "'You' + were / estava" },

    { to_be: "were", tradu: "'We' + were / estavamos" },

    { to_be: "were", tradu: "'They' + were / estavam" }

];

for ( var i = 0 ; i < verbal_times_array_past.length ; i++ ) {

    const NewP_paragraph = document.createElement("p");

    NewP_paragraph.innerHTML = verbal_times_array_past[i].to_be + "<br>" + verbal_times_array_past[i].tradu;

    tempoVerbal_past_div.appendChild(NewP_paragraph);

}

// Exemplos do verbal_times_array_past
// Captura do elemento="Six"
const exemploTvebPast = document.querySelector(".Six");

const Verbal_times_array_past_exemplo = [

    { to_be: "I was there", tradu: "Eu estava lá" },

    { to_be: "She was calm", tradu: "Ela estava calma" },

    { to_be: "He was angry", tradu: "Ele estava bravo" },

    { to_be: "It was broken", tradu: "Estava quebrado" },

    { to_be: "You were right", tradu: "Você estava certo" },

    { to_be: "We were kids", tradu: "Nós éramos crianças" },

    { to_be: "They were late", tradu: "Eles(a) estavam atrasados" }

];

for ( var i = 0 ; i < Verbal_times_array_past_exemplo.length ; i++ ) {

    const NewP_paragraph = document.createElement("p");

    NewP_paragraph.innerHTML = Verbal_times_array_past_exemplo[i].to_be + "<br>" + Verbal_times_array_past_exemplo[i].tradu;

    exemploTvebPast.appendChild(NewP_paragraph);

}


/*

const el = document.querySelector(".Palavra");

const texts = [ "MINHAS PIXEIS" ];

let t = 0
let c = 0
let del = false;

setInterval(() => {
    
    del ? c-- : c++
    
    el.textContent = texts[t].slice(0, c);
            
    if (c == texts[t].length + 1) del = true;
                
    if (c == 0 && del) {
                    
        del = false;
                    
        t = (t + 1) % texts.length
    
    }

}, 120)

*/



// BLOCO 1 

// Estrutura / blocos de frases. Pt-br
// Structures / blocks of sentences. En-eua
const Seven_bloco_1 = document.querySelector(".Seven");

const BLOCO_1_estado_identidade_descricao = [

    { structure: "I am tirad", tradu: "Eu estou casando / Estou cansado" },
    { structure: "You are my friend", tradu: "Você é meu amigo" },
    { structure: "He is strong", tradu: "Ele é forte" },
    { structure: "She is smart", tradu: "Ela é inteligente" },
    { structure: "It is a robot", tradu: "Isso é um robô" },
    { structure: "We are ready", tradu: "Nós estamos prontos" },
    { structure: "They are here", tradu: "Eles(a) estão aqui" },
    { structure: "", tradu: "" },
    { structure: "", tradu: "" },
    { structure: "", tradu: "" },
    { structure: "", tradu: "" },
    { structure: "", tradu: "" },
    { structure: "", tradu: "" },
    { structure: "", tradu: "" },
    { structure: "", tradu: "" },
    { structure: "", tradu: "" },
    { structure: "", tradu: "" },
    { structure: "", tradu: "" },
    { structure: "", tradu: "" },
    { structure: "", tradu: "" },
    { structure: "", tradu: "" }
    // Vai ser adicionado mais palavras aqui.

];

for ( var i = 0 ; i < BLOCO_1_estado_identidade_descricao.length ; i++ ) {

    const NewP_paragraph = document.createElement("p");

    NewP_paragraph.innerHTML = 

        BLOCO_1_estado_identidade_descricao[i].structure + "<br>" + 
        BLOCO_1_estado_identidade_descricao[i].tradu;

    Seven_bloco_1.appendChild(NewP_paragraph);

}



// BLOCO 2 


// Estruturas / Blocos de frases. Pt-br
// Structures / Bloks of sentences. En-eua

const Eight_bloco_2 = document.querySelector(".Eight");

const BLOCO_2_acao_em_geral_rotina = [

    { Structure: "I run every day", tradu: "Eu corro todo dia / corro todo dia" },
    { Structure: "You work here", tradu: "Você trabalha aqui" },
    { Structure: "He eats a lot", tradu: "Ele come muito ( a lot *a* ênfase )" },
    { Structure: "She loves music", tradu: "Ela ama música" },
    { Structure: "We study English", tradu: "Nós estudamos Englês" },
    { Structure: "They talk a lot", tradu: "Eles(a) falam muito ( a ênfase *a lot* )" },
    { Structure: "", tradu: "" },
    { Structure: "", tradu: "" },
    { Structure: "", tradu: "" },
    { Structure: "", tradu: "" },
    { Structure: "", tradu: "" },
    { Structure: "", tradu: "" },
    { Structure: "", tradu: "" },
    { Structure: "", tradu: "" },
    { Structure: "", tradu: "" },
    { Structure: "", tradu: "" },
    { Structure: "", tradu: "" },
    { Structure: "", tradu: "" },
    { Structure: "", tradu: "" },
    { Structure: "", tradu: "" }
    // Vai ter mais frase aqui.

];

for ( var i = 0 ; i < BLOCO_2_acao_em_geral_rotina.length ; i++ ) {

    const NewP_paragraph = document.createElement("p");

    NewP_paragraph.innerHTML = 

        BLOCO_2_acao_em_geral_rotina[i].Structure + "<br>" +
        BLOCO_2_acao_em_geral_rotina[i].tradu;

    Eight_bloco_2.appendChild(NewP_paragraph);

}



// BLOCO 3 



// Estruturas / Blocos de frases. Pt-br
// Structures / Blocks of sentences. En-eua
const Nine_bloco_3 = document.querySelector(".Nine");

const Bloco_3_presente_continuo_agora = [

    { structure: "I am running", tradu: "Eu estou correndo / Estou correndo" },
    { structure: "You ara studying", tradu: "Você está estudando" },
    { structure: "He is eating", tradu: "Ele está comendo" },
    { structure: "She is talking", tradu: "Ela está falando" },
    { structure: "It is working", tradu: "Está funcionando" },
    { structure: "We are learning", tradu: "Nós estamos aprendendo" },
    { structure: "They are fighting", tradu: "Eles(a) estão lutando" },
    { structure: "", tradu: "" },
    { structure: "", tradu: "" },
    { structure: "", tradu: "" },
    { structure: "", tradu: "" },
    { structure: "", tradu: "" },
    { structure: "", tradu: "" },
    { structure: "", tradu: "" },
    { structure: "", tradu: "" },
    { structure: "", tradu: "" },
    { structure: "", tradu: "" },
    { structure: "", tradu: "" },
    { structure: "", tradu: "" },
    { structure: "", tradu: "" }
    // Vai ter mais frases aqui.

];

for ( var i = 0 ; i < BLOCO_2_acao_em_geral_rotina.length ; i++ ) {

    const NewP_paragraph = document.createElement("p");

    NewP_paragraph.innerHTML = Bloco_3_presente_continuo_agora[i].structure + "<br>" + Bloco_3_presente_continuo_agora[i].tradu;

    Nine_bloco_3.appendChild(NewP_paragraph);

}


// BLOCO 4


// Estruturas / Blocos de frases. Pt-br
// Structures / Blocks of sentences. En-eua
const Ten_bloco_4 = document.querySelector(".Ten");

const Bloco_4_negativa = [

    { structure: "I am not afraid", tradu: "Eu não tenho medo" },
    { structure: "He is not lying", tradu: "Ele não está mentindo" },
    { structure: "She is not reading", tradu: "Ela não está lendo" },
    { structure: "You are not doing", tradu: "Você não está fazendo" },
    { structure: "We are not flying", tradu: "Nós não estamos voando" },
    { structure: "It is not working", tradu: "Isso não está funcionando" },
    { structure: "They are not ready", tradu: "Eles(a) não estão prontos" },
    { structure: "", tradu: "" },
    { structure: "", tradu: "" },
    { structure: "", tradu: "" },
    { structure: "", tradu: "" },
    { structure: "", tradu: "" },
    { structure: "", tradu: "" },
    { structure: "", tradu: "" },
    { structure: "", tradu: "" },
    { structure: "", tradu: "" },
    { structure: "", tradu: "" },
    { structure: "", tradu: "" },
    { structure: "", tradu: "" },
    { structure: "", tradu: "" }
    // Vai ter mais frases aqui.

];

for ( var i = 0 ; i < Bloco_4_negativa.length ; i++ ) {

    const NewP_paragraph = document.createElement("p");

    NewP_paragraph.innerHTML = Bloco_4_negativa[i].structure + "<br>" + Bloco_4_negativa[i].tradu;

    Ten_bloco_4.appendChild(NewP_paragraph);

}


// BLOCO 5


// Estruturas / Blocos de frases. Pt-bt
// Structures / Blocks of sentences. En-eua
const Eleven_bloco_5 = document.querySelector(".Eleven");

const Bloco_5_perguntas__quests_mais_to_be = [

    { structure: "Who are you ?", tradu: "Quem é você ?" },
    { structure: "Where are you going ?", tradu: "Para onde você está indo ?" },
    { structure: "What is he doing ?", tradu: "O que ele está fazendo ?" },
    { structure: "Who sent you here ?", tradu: "Quem te enviou aqui ?" },
    { structure: "", tradu: "" },
    { structure: "", tradu: "" },
    { structure: "", tradu: "" },
    { structure: "", tradu: "" },
    { structure: "", tradu: "" },
    { structure: "", tradu: "" },
    { structure: "", tradu: "" },
    { structure: "", tradu: "" },
    { structure: "", tradu: "" },
    { structure: "", tradu: "" },
    { structure: "", tradu: "" },
    { structure: "", tradu: "" },
    { structure: "", tradu: "" },
    { structure: "", tradu: "" },
    { structure: "", tradu: "" },
    { structure: "", tradu: "" }
    // Vwi ter mais frases aqui.

];

for ( var i = 0 ; i < Bloco_5_perguntas__quests_mais_to_be.length ; i++ ) {

    const NewP_paragraph = document.createElement("p");

    NewP_paragraph.innerHTML = Bloco_5_perguntas__quests_mais_to_be[i].structure + "<br>" + Bloco_5_perguntas__quests_mais_to_be[i].tradu;

    Eleven_bloco_5.appendChild(NewP_paragraph);

}



// BLOCO 6


// Estruturas / Blocos de frases. Pt-br
// Structures / Blocks of sentences. En-eua
const Twelve_bloco_12 = document.querySelector(".Twelve");

const Bloco_6_frases_estilo_filmes = [

    { structure: "Who would you be without me ?", tradu: "Quem você seria sem mim ?" },
    { structure: "Time to find out", tradu: "Hora de descobir" },
    { structure: "Maybe i am nothing without you", tradu: "Talvez eu não seja nada sem você" },
    { structure: "You think you were born strong", tradu: "Você acha que nasceu forte" },
    { structure: "", tradu: "" },
    { structure: "", tradu: "" },
    { structure: "", tradu: "" },
    { structure: "", tradu: "" },
    { structure: "", tradu: "" },
    { structure: "", tradu: "" },
    { structure: "", tradu: "" },
    { structure: "", tradu: "" },
    { structure: "", tradu: "" },
    { structure: "", tradu: "" },
    { structure: "", tradu: "" },
    { structure: "", tradu: "" },
    { structure: "", tradu: "" },
    { structure: "", tradu: "" },
    { structure: "", tradu: "" },
    { structure: "", tradu: "" }
    // Vai ter mais frases aqui.

];

for ( var i = 0 ; i < Bloco_6_frases_estilo_filmes.length ; i++ ) {

    const NewP_paragraph = document.createElement("p");

    NewP_paragraph.innerHTML = Bloco_6_frases_estilo_filmes[i].structure + "<br>" + Bloco_6_frases_estilo_filmes[i].tradu;

    Twelve_bloco_12.appendChild(NewP_paragraph);

}
