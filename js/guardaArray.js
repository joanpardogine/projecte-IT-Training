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
     tipusPreg: "tx",
     enunciatPreg: "Lorem ipsum dolor  *** Correcta = Lorem *** amet, consectetur adipiscing elit. Fusce hendrerit diam vitae urna pulvinar commodo. Suspendisse tristique eu justo in dignissim. Phasellus ut nibh ornare, porttitor sapien a, eleifend massa?",
     respostesPossibles: { 
        a: "",
        b: "",
        c: "",
        d: ""
     },
     respCorrecta: "Lorem"
  },
  {
     tipusPreg: "ch",
     enunciatPreg: "WUltricies *** Correcta = C *** nisi quam metus dictum justo magna litora, condimentum pulvinar libero porttitor sem eleifend odio, bibendum aliquet cursus facilisis lacus hendrerit. Malesuada vestibulum sapien aenean accumsan porttitor nisi hac. ",
     respostesPossibles: {
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
     respostesPossibles: {
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
     respostesPossibles: {
        a: "Mollis et ultrices lectus morbi nisi quisque imperdiet bibendum id nisl posuere.",
        b: "Condimentum himenaeos leo cubilia etiam turpis velit dui fames ultricies.",
        c: "Ac neque augue luctus habitasse ad porta cum nulla potenti quisque himenaeos.",
        d: ""
     },
     respCorrecta: "a"
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
  let contenidorQuestionari = document.getElementById("contenidorQuestionari");
  let elementArticle, elementTitol;
  let esVisible;
  let tipusPregText;

  for(let preguntaActual=0; preguntaActual<llistaPreguntes.length; preguntaActual++){
    // Per omplir l'element article <article id="pregunta-??-??" class="elementVisible">
    elementArticle = "";
    elementTitol = "";
    tipusPregText ="";

    // if ((preguntaActual+1)<10){
    //   preguntaActualTxt = "0" + (preguntaActual + 1);
    // } else {
    //   preguntaActualTxt = preguntaActual + 1;
    // }

    preguntaActualTxt = ((preguntaActual+1)<10) ? "0" + (preguntaActual + 1) : preguntaActual + 1;
    
    // if (preguntaActual==0){
    //   esVisible = 'elementVisible';
    // } else {
    //   esVisible = 'elementOcult';
    // }
    esVisible = (preguntaActual==0) ? 'elementVisible' : 'elementOcult';
    
    elementArticle = '<article id="pregunta-'
        + preguntaActualTxt
        + '-'
        + llistaPreguntes[preguntaActual].tipusPreg
        + '" class="'
        + esVisible
        +'">';
    // FINAL Per omplir l'element article <article id="pregunta-??-??" class="elementVisible">

    //  Per omplir l'element span class="titol"
    // <span class="titol">Pregunta #1 (text)</span>

    switch (llistaPreguntes[preguntaActual].tipusPreg){
      case "tx":
          tipusPregText = "text";
          break;
      case "ch":
          tipusPregText = "Check Box";
          break;
      case "ra":
          tipusPregText = "Radio Button";
          break;
      case "so":
          tipusPregText = "Select One";
          break;
    }

    elementTitol = '<span class="titol">Pregunta #'
            + (preguntaActual + 1)
            + ' ('
            + tipusPregText
            + ')</span>';

    //  FINAL Per omplir l'element span class="titol"
    console.log ("elementArticle = " + elementArticle);
    console.log ("elementTitol = " + elementTitol);

    contenidorQuestionari.innerHTML += elementArticle 
        + elementTitol 
        + '</article>';
    // contenidorQuestionari.innerHTML = contenidorQuestionari.innerHTML + elementArticle + '</article>';

  } // for(let preguntaActual=0; preguntaActual<llistaPreguntes.length; preguntaActual++){


}