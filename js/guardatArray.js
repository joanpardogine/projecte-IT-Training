let preguntaEnCurs = 0;
let preguntaUltima;

let arrBoolRespostes = [];
let respCorrectes = [];

const contenidorQuestionari = document.getElementById('contenidorQuestionari');  // quizContainer = contenidorQuestionari




/**
https://www.sitepoint.com/simple-javascript-quiz/
// Variables
const quizContainer = document.getElementById('quiz');
 */

 // tx, ch, ra, so
 // tx => input type="text"
 // ch => input type="checkbox" 
 // ra => input type="radio" 
 // so => select id="  -- <option>


 // div_questionari

 const llistaPreguntes = [
  {
    tipusPreg: "tx",
    enunciatPreg: "Lorem ipsum dolor  *** Correcta = Lorem *** amet, consectetur adipiscing elit. Fusce hendrerit diam vitae urna pulvinar commodo. Suspendisse tristique eu justo in dignissim. Phasellus ut nibh ornare, porttitor sapien a, eleifend massa?",
    respostesPossibles: {
      a: "",
      b: "",
      c: ""
    },
    respCorrecta: "Lorem"
  },
  {
    tipusPreg: "ch",
    enunciatPreg: "WUltricies *** Correcta = C *** nisi quam metus dictum justo magna litora, condimentum pulvinar libero porttitor sem eleifend odio, bibendum aliquet cursus facilisis lacus hendrerit. Malesuada vestibulum sapien aenean accumsan porttitor nisi hac. ",
    llistaPreguntes: {
      a: "Seda ut perspiciatis unde omnis",
      b: "Nemo enim ipsam voluptatem quia",
      c: "At vero eos et accusamus et iusto odio",
      d: "Et harum quidem rerum facilis est et expedita"
    },
    respCorrecta: "c"
  },
  {
    tipusPreg: "ra",
    enunciatPreg: "Nullam tempor magnis *** Correcta = d *** interdum aliquam massa cras metus, eu urna suspendisse eros montes phasellus class quis natoque magnis libero porta id etiam placerat dui, lectus natoque turpis accumsan quis nisl aliquet.",
    llistaPreguntes: {
      a: "Massa penatibus potenti pellentesque.",
      b: "Lectus laoreet senectus vitae risus lacinia.",
      c: "Litora rhoncus placerat urna sodales dignissim in mattis, lectus fusce elementum.",
      d: "Et harum quidem rerum facilis est et expedita"
    },
    respCorrecta: "d"
  },
  {  // &lt;Escull una de les següents opcions.&gt;
    tipusPreg: "so",
    enunciatPreg: "Taciti vulputate iaculis  *** Correcta = a ***  ut facilisis ridiculus, curabitur morbi fermentum cubilia cursus, id blandit massa etiam hendrerit.",
    llistaPreguntes: {
      a: "Mollis et ultrices lectus morbi nisi quisque imperdiet bibendum id nisl posuere.",
      b: "Condimentum himenaeos leo cubilia etiam turpis velit dui fames ultricies.",
      c: "Ac neque augue luctus habitasse ad porta cum nulla potenti quisque himenaeos."
    },
    respCorrecta: "a"
  }
];

/*
// find selected answer
const answerContainer = answerContainers[questionNumber];
const selector = `input[name=question${questionNumber}]:checked`;
const userAnswer = (answerContainer.querySelector(selector) || {}).value;
*/


ompleRespCorrectes();
pintaQuestionari();


function ompleRespCorrectes(){
  respCorrectes [llistaPreguntes.length];
  for (let i=0; i<llistaPreguntes.length; i++){
    console.log("i = " + i + "llistaPreguntes[i].respCorrecta = " + llistaPreguntes[i].respCorrecta);
    respCorrectes[i]=llistaPreguntes[i].respCorrecta;
  }
}


function pintaQuestionari(){   // buildQuiz
  let elementArticle, elementTitol, elementEnunciat, elementRespostes;  
  let pregActualTxt = "";
  let esVisible;
  let txtTipusPreg;



  preguntaUltima = llistaPreguntes.length;
  console.log ("preguntaUltima = " + preguntaUltima);

  // Variable per emmagatzemar la sortida HTML
  let questionariHTML = document.getElementById("contenidorQuestionari");  // output = questionariHTML
  





  // per cada pregunta ...
  // llistaPreguntes.forEach(   // myQuestions = llistaPreguntes
    //(preguntaEnCurs, preguntaNumero) => {
      //  preguntaEnCurs = currentQuestion
      //  preguntaNumero = questionNumber
      // variable to store the list of possible answers
      
      for (let pregActualEnt=0; pregActualEnt<llistaPreguntes.length; pregActualEnt++){ 
        const respostes = [];  // answers = respostes
        // Per omplir l'elementArticle
        //  <article id="pregunta-01-tx" class="elementVisible">

        // create element
        let nouArticle = document.createElement("article");   // Es crea l'element <article> per omplir-lo
         debugger;
        if ((pregActualEnt+1)<10) {
          pregActualTxt = "0" + (pregActualEnt + 1);
        } else {
          pregActualTxt = pregActualEnt + 1;
        }
        // pregActualTxt = (pregActualEnt<10) ? "0" + pregActualEnt : pregActualEnt ;
        
        if (pregActualEnt==0) {
          esVisible = "elementVisible";
        } else {
          esVisible = "elementOcult";
        }
        //esVisible =  (pregActualEnt==1) ? 'elementVisible' : 'elementOcult'; 

      nouArticle.id = 'pregunta-' + pregActualTxt + '-' + llistaPreguntes[pregActualEnt].tipusPreg; // S'afegeix l'identificador

      nouArticle.classList.add(esVisible); // S'afegeix la classe pertinent per si es visible o no.

      // elementArticle = '<article id="pregunta-' + pregActualTxt + '-' + llistaPreguntes[pregActualTxt].tipusPreg + '" class="' + esVisible + '">';


      
      let nouTitol = document.createElement("SPAN");   // Es crea l'element <span> pel titol

      // Per omplir l'element span titol
      // <span class="titol">Pregunta #1 (text)</span>
      
      switch (llistaPreguntes[pregActualEnt].tipusPreg){
        case "tx": txtTipusPreg = "text"; break;
        case "ch": txtTipusPreg = "checkbox"; break;
        case "ra": txtTipusPreg = "radio"; break;
        case "so": txtTipusPreg = "Select One"; break;
      }
      
      // elementTitol = '<span class="titol">Pregunta #' + pregActualTxt + ' (' + txtTipusPreg + ')</span>';
      
      let titolPregunta = document.createTextNode('Pregunta #' + pregActualTxt + ' (' + txtTipusPreg + ')');
      // elementTitol.innerHTML = 'Pregunta #' + pregActualTxt + '(' + txtTipusPreg + ')';
      
      nouTitol.appendChild(titolPregunta);
      nouTitol.classList.add("titol");  // Afegim la classe titol al nouTitol
            // FINAL Per omplir l'element span titol 

      nouArticle.appendChild(nouTitol);  // Afegim el TITOL al nou article (nouArticle)
      
            // Per omplir l'element span enunciat 
      /*  <div class="enunciat">
      <p>bla, bla, bla.</p>
      </div> */

      elementEnunciat = '<div class="enunciat"><p>' + llistaPreguntes[pregActualEnt].enunciatPreg + "</p></div>";

      let nouEnunciatPregunta = document.createElement("DIV");    // Es crea l'element <div> per l'enunciat
      nouEnunciatPregunta.classList.add("enunciat");      // Afegim la classe enunciat al nouEnunciatPregunta

      let nouTextEnunciat = document.createElement("P");    // Es crea l'element <p> per l'enunciat
      nouTextEnunciat.innerHTML = llistaPreguntes[pregActualEnt].enunciatPreg;  // Afegim el text de l'enunciat al nouTextEnunciat

      nouEnunciatPregunta.appendChild(nouTextEnunciat);  // Afegim el text de l'enunciat al nouEnunciatPregunta
      
      nouArticle.appendChild(nouEnunciatPregunta);  // Afegim el nouEnunciatPregunta al nou article (nouArticle)
      // FINAL Per omplir l'element span enunciat

      let nouElementRespostes = document.createElement("DIV");// Es crea l'element <div> per les respostes
      nouElementRespostes.classList.add("respostes");      // Afegim la classe respostes al nouElementRespostes
      
      let nouElementLabel = document.createElement("LABEL");// Es crea l'element <label> per l'element <div> per les respostes
      nouElementLabel.classList.add("opcio");      // Afegim la classe enunciat al nouElementLabel
      nouElementLabel.classList.add("col1");      // Afegim la classe enunciat al nouElementLabel

      
      let nouElementInput = document.createElement("INPUT");
      
      nouElementInput.setAttribute('type', 'text');
      nouElementInput.id = 'resp-' + pregActualTxt;
      // nouElementInput.name = 'resposta-' + pregActualEnt;
      nouElementInput.setAttribute('placeholder', 'Entra el text de la resposta!');
      nouElementInput.onchange = function () {  
        marcaComResposta();
      };
      
      /** Si cal passar parametres
       * el.onchange = function () {  
       *   validation(param1, param2, ...);
       * };
       */
      
      
      
      
      // Per omplir l'element div respostes 
      /*  <div class="respostes">
      <label class="opcio col1">
      <input type="text" id="resp-01" name="resposta-1" placeholder="Ut enim ad minima veniam" onchange="marcaComResposta()"/>
      </label>
      </div> <!-- FINAL <div class="respostes">-->
      */
     
     // FINAL Per omplir l'element div respostes 
     
     nouElementLabel.appendChild(nouElementInput);
     nouElementRespostes.appendChild(nouElementLabel);
     
     nouArticle.appendChild(nouElementRespostes);  // Afegim el nouElementInput al nou article (nouArticle)
     
     let nouGrupBotons = document.createElement("DIV");
     nouGrupBotons.classList.add("col2");
     nouGrupBotons.classList.add("centrat");
     
     let nouBotoAnterior = document.createElement("button");
     // id="btAnt'+ pregActualTxt
     nouBotoAnterior.id= 'btAnt' + pregActualTxt;
     nouBotoAnterior.innerHTML = '&lt;&lt; Anterior';
     nouBotoAnterior.onclick = function () {  
      passaAnterior(this);
    };
        //onclick="passaAnterior(this)"
        
        if (pregActualEnt==0) {
          nouBotoAnterior.disabled = true;
        } else {
          nouBotoAnterior.disabled = false;
        }
        
        let nouBotoSeguent = document.createElement("button");
        nouBotoSeguent.id= 'btSeg' + pregActualTxt;
        nouBotoSeguent.disabled = true;
        nouBotoSeguent.innerHTML = 'Següent >>';
        nouBotoSeguent.onclick = function () {  
          passaSeguent(this);
       };

       nouGrupBotons.appendChild(nouBotoAnterior);
        nouGrupBotons.appendChild(nouBotoSeguent);

     nouArticle.appendChild(nouGrupBotons);  // Afegim el nouGrupBotons al nou article (nouArticle)
     
     questionariHTML.appendChild(nouArticle);  // Afegim el nou article al questionari

    //  elementRespostes = '<div class="respostes">' 
    //  + '<label class="opcio col1">' 
    //  + '<input type="text" id="resp-' + pregActualTxt
    //  + '" placeholder="Entra el text de la resposta!"' 
    //  + 'onchange="marcaComResposta()"/>' 
    //  + '</label>' 
    //  + '</div> <!-- FINAL <div class="respostes">-->'
    //  + '<div class="col2 centrat">' 
    //  + '<button id="btAnt'+ pregActualTxt + ' disabled onclick="'
    //  + 'passaAnterior(this)">&lt;&lt; Anterior</button>' 
    //  + '<button id="btSeg'+ pregActualTxt + ' disabled onclick="'
    //  + 'passaSeguent(this)">Següent >></button>'
    //  + '</div>'
    //  + '</article> <!-- FINAL <article id="pregunta-'+ pregActualTxt + '-' + llistaPreguntes[pregActualEnt].tipusPreg + '"> -->';
     
     // FINAL Per omplir l'element div respostes 


     


     // add this question and its respostes to the questionariHTML
     //questionariHTML.innerHTML = elementArticle + elementTitol + elementEnunciat + elementRespostes;
      //  <div class="question">  <article id="pregunta-02-ch" class="elementOcult">


    }  // FINAL == for (let pregActualEnt=0; pregActualEnt<llistaPreguntes.length; pregActualEnt++){ 
  

  // finally combine our questionariHTML list into one string of HTML and put it on the page
  // contenidorQuestionari.innerHTML = questionariHTML.join('');
}

/**
 * function buildQuiz(){
  // variable to store the HTML output
  const output = [];

  // for each question...
  myQuestions.forEach(
    (currentQuestion, questionNumber) => {

      // variable to store the list of possible answers
      const answers = [];

      // and for each available answer...
      for(letter in currentQuestion.answers){

        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join('')} </div>`
      );
    }
  );

  // finally combine our output list into one string of HTML and put it on the page
  quizContainer.innerHTML = output.join('');
}

 */


for (var i = 0; i <= preguntaUltima; i++) {
  arrBoolRespostes.push(false);
};

function marcaComResposta(){

  alert("Has modificat el valor!");
  arrBoolRespostes[preguntaEnCurs]=true;

  let idBotoAHabilitar = "btSeg0" + (preguntaEnCurs + 1);
  document.getElementById(idBotoAHabilitar).disabled = false;

  // document.getElementById("myBtn").disabled = true;
  // id="btAnt01" 
  // id="btSeg01" 
}

function passaSeguent(objRebut){


  if (preguntaEnCurs == preguntaUltima){
    alert("Ets a la darrera pregunta!" + preguntaEnCurs + " de " + preguntaUltima);
    preguntaEnCurs --;
  } else {
    //alert("Ets a la pregunta " + preguntaEnCurs + " de " + preguntaUltima);
    
    if (arrBoolRespostes[preguntaEnCurs]==false){
      alert("No hi ha cap valor!");
    } else {
      let idObjPregAct = objRebut.parentElement.parentElement.id;
      
      let colArticles = document.getElementsByTagName("article");
      let idObjPregSeg;
      for (let i = 0; i < colArticles.length; i++) {
        if(colArticles[i].id == idObjPregAct){
          idObjPregSeg = colArticles[i+1].id;
          break;
        };
      }
      
      amagaElement(idObjPregAct);
      mostraElement(idObjPregSeg);
      preguntaEnCurs++;
    }
  }


}


function passaAnterior(objRebut){
  alert("Ets a la pregunta " + preguntaEnCurs + " de " + preguntaUltima);
  let idObjPregAct = objRebut.parentElement.parentElement.id; 
  let colArticles = document.getElementsByTagName("article");
  let idObjPregAnt;
    for (let i = 0; i < colArticles.length; i++) {
    if(colArticles[i].id == idObjPregAct){
      idObjPregAnt = colArticles[i-1].id;
      break;
    };
  }
  
  amagaElement(idObjPregAct);
  mostraElement(idObjPregAnt);
  preguntaEnCurs--;

}

function mostraElement(idRebut){
  document.getElementById(idRebut).classList.add("elementVisible");
  document.getElementById(idRebut).classList.remove("elementOcult");
}

function amagaElement(idRebut){
  document.getElementById(idRebut).classList.remove("elementVisible");
  document.getElementById(idRebut).classList.add("elementOcult");
}