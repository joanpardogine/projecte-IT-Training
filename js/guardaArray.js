let preguntaEnCurs = 0;
let preguntaUltima;

let arrBoolRespostes = [];
let respCorrectes = [];

/* tipusPreg: tx => input type="text"
 * tipusPreg: ch => input type="checkbox" 
 * tipusPreg: ra => input type="radio" 
 * tipusPreg: so => select id="  --> <option> */

const llistaPreguntes = [
  {
     tipusPreg: `tx`,
     enunciatPreg: `Lorem ipsum dolor  *** Correcta = Lorem *** amet, consectetur adipiscing elit. Fusce hendrerit diam vitae urna pulvinar commodo. Suspendisse tristique eu justo in dignissim. Phasellus ut nibh ornare, porttitor sapien a, eleifend massa?`,
     respostesPossibles: { 
        a: ``,
        b: ``,
        c: ``,
        d: ``
     },
     respCorrecta: `Lorem`
  },
  {
     tipusPreg: `ch`,
     enunciatPreg: `WUltricies *** Correcta = C *** nisi quam metus dictum justo magna litora, condimentum pulvinar libero porttitor sem eleifend odio, bibendum aliquet cursus facilisis lacus hendrerit. Malesuada vestibulum sapien aenean accumsan porttitor nisi hac. `,
     respostesPossibles: {
        a: `Seda ut perspiciatis unde omnis`,
        b: `Nemo enim ipsam voluptatem quia`,
        c: `At vero eos et accusamus et iusto odio`,
        d: `Et harum quidem rerum facilis est et expedita`
     },
     respCorrecta: `c`
  },
  {
     tipusPreg: `ra`,
     enunciatPreg: `Nullam tempor magnis *** Correcta = d *** interdum aliquam massa cras metus, eu urna suspendisse eros montes phasellus class quis natoque magnis libero porta id etiam placerat dui, lectus natoque turpis accumsan quis nisl aliquet.`,
     respostesPossibles: {
        a: `Massa penatibus potenti pellentesque.`,
        b: `Lectus laoreet senectus vitae risus lacinia.`,
        c: `Litora rhoncus placerat urna sodales dignissim in mattis, lectus fusce elementum.`,
        d: `Et harum quidem rerum facilis est et expedita`
     },
     respCorrecta: `d`
  },
  {  // &lt;Escull una de les següents opcions.&gt;
     tipusPreg: `so`,
     enunciatPreg: `Taciti vulputate iaculis  *** Correcta = a ***  ut facilisis ridiculus, curabitur morbi fermentum cubilia cursus, id blandit massa etiam hendrerit.`,
     respostesPossibles: {
        a: `Mollis et ultrices lectus morbi nisi quisque imperdiet bibendum id nisl posuere.`,
        b: `Condimentum himenaeos leo cubilia etiam turpis velit dui fames ultricies.`,
        c: `Ac neque augue luctus habitasse ad porta cum nulla potenti quisque himenaeos.`,
        d: ``
     },
     respCorrecta: `a`
  }
];

ompleRespCorrectes();
pintaQuestionari();

function ompleRespCorrectes(){
  /* Recorrem l'Array llistaPreguntes i guardem les respostes correctes
  *  a l'Array respCorrectes. */
  respCorrectes[llistaPreguntes.length];
  for(let i=0; i<llistaPreguntes.length; i++){
    respCorrectes[i]=llistaPreguntes[i].respCorrecta;
  }
}

function pintaQuestionari(){
  let preguntaActualTxt;
  // Variable per associar la sortida a l'element HTML
  let contenidorQuestionari = document.getElementById(`contenidorQuestionari`);
  let elementArticle, elementTitol, elementEnunciat, elementRespostesInici, elementRespostesFinal, elementGrupBotons;
  let elementLabel;
  let esVisible;
  let tipusPregText;

  for(let preguntaActual=0; preguntaActual<llistaPreguntes.length; preguntaActual++){
    // Inicialitzo, és a dir "buido", tots els elements
    elementArticle = ``;
    elementTitol = ``;
    tipusPregText = ``;
    elementEnunciat = ``;
    elementRespostesInici = ``;
    elementRespostesFinal = ``;


    elementLabel=``;
    elementGrupBotons = ``;

    preguntaActualTxt = ((preguntaActual+1)<10) ? `0${(preguntaActual + 1)}`: `${preguntaActual + 1}`;
    esVisible = (preguntaActual==0) ? `elementVisible` : `elementOcult`;
    
    elementArticle = `<article id="pregunta-${preguntaActualTxt}-${llistaPreguntes[preguntaActual].tipusPreg}" class="${esVisible}">`;

    switch (llistaPreguntes[preguntaActual].tipusPreg){
      case `tx`:
         tipusPregText = `text`;
         elementLabel =`<label class="opcio col1"><input type="text" id="resp-${preguntaActualTxt}" name="resposta-${preguntaActual}" placeholder="Ut enim ad minima veniam" onchange="marcaComResposta()"/></label>`;
         break;

      case `ch`:
         let textInputCheckBox = `<input type="checkbox" name="preg_${preguntaActualTxt}"onclick="marcaComResposta()"/>`;
         tipusPregText = `Check Box`;
         elementLabel =`<label class="opcio col2">
         ${textInputCheckBox}
         <span>${llistaPreguntes[preguntaActual].respostesPossibles.a}</span></label>
         <label class="opcio col2">
         ${textInputCheckBox}
         <span>${llistaPreguntes[preguntaActual].respostesPossibles.b}</span></label>
         <label class="opcio col2">
         ${textInputCheckBox}
         <span>${llistaPreguntes[preguntaActual].respostesPossibles.c}</span></label>
         <label class="opcio col2">
         ${textInputCheckBox}
         <span>${llistaPreguntes[preguntaActual].respostesPossibles.d}</span></label>`;
      break;

      case `ra`:
         let textInputRadio = `<input type="radio" name="preg_${preguntaActualTxt}"onclick="marcaComResposta()"/>`;
         tipusPregText = `Radio Button`;
         elementLabel =`<label class="opcio col2">
         ${textInputRadio}
         <span>${llistaPreguntes[preguntaActual].respostesPossibles.a}</span></label>
         <label class="opcio col2">
         ${textInputRadio}
         <span>${llistaPreguntes[preguntaActual].respostesPossibles.b}</span></label>
         <label class="opcio col2">
         ${textInputRadio}
         <span>${llistaPreguntes[preguntaActual].respostesPossibles.c}</span></label>
         <label class="opcio col2">
         ${textInputRadio}
         <span>${llistaPreguntes[preguntaActual].respostesPossibles.d}</span></label>`;


         break;

      case `so`:
         tipusPregText = `Select One`;
         elementLabel =`<label class="opcio col1">
            <select id="resp-${preguntaActualTxt}" onchange="marcaComResposta()">
              <option selected>&lt;Escull una de les següents opcions.></option>
              <option>${llistaPreguntes[preguntaActual].respostesPossibles.a}</option>
              <option>${llistaPreguntes[preguntaActual].respostesPossibles.b}</option>
              <option>${llistaPreguntes[preguntaActual].respostesPossibles.c}</option>
            </select>
          </label>`;
         break;
    }

   //  elementTitol = `<span class="titol">Pregunta #${preguntaActual+1}(${tipusPregText})</span>`;
    elementTitol = `<span class="titol">Pregunta #${preguntaActual+1}</span>`;

    elementEnunciat = `<div class="enunciat"><p>${llistaPreguntes[preguntaActual].enunciatPreg}</p></div>`;
     elementRespostesInici= `<div class="respostes">`;


     
     elementRespostesFinal = `</div> <!-- FINAL <div class="respostes">-->`;

       elementGrupBotons = `<div class="col2 centrat"><button id="btAnt${preguntaActualTxt}" disabled onclick="passaAnterior(this)">&lt;&lt; Anterior</button><button id="btSeg${preguntaActualTxt}" disabled onclick="passaSeguent(this)">Següent >></button></div>`;

   //  console.log (`elementArticle = ${elementArticle}`);
   //  console.log (`elementTitol = ${elementTitol}`);
   //  console.log (`elementEnunciat = ${elementEnunciat}`);
   //  console.log (`elementRespostesInici = ${elementRespostesInici}`);

   //  console.log (`elementLabel = ${elementLabel}`);
    
   //  console.log (`elementRespostesFinal = ${elementRespostesFinal}`);
   //  console.log (`elementGrupBotons = ${elementGrupBotons}`);

    contenidorQuestionari.innerHTML += `${elementArticle}${elementTitol}${elementEnunciat}${elementRespostesInici}${elementLabel}${elementRespostesFinal}${elementGrupBotons}</article>`;

  } 

}