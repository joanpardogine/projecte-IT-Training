let preguntaEnCurs = 0;
let preguntaUltima;

let arrBoolRespostes = [];
let respCorrectes = [];

const contenidorQuestionari = document.getElementById('contenidorQuestionari');

 // tx => input type="text"
 // ch => input type="checkbox" 
 // ra => input type="radio" 
 // so => select id="  -- <option>

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
         c: "Ac neque augue luctus habitasse ad porta cum nulla potenti quisque himenaeos."
      },
      respCorrecta: "a"
   }
];


ompleRespCorrectes();
pintaQuestionari();

function ompleRespCorrectes(){
   respCorrectes [llistaPreguntes.length];
   for (let i=0; i<llistaPreguntes.length; i++){
      respCorrectes[i]=llistaPreguntes[i].respCorrecta;
   }
}

function pintaQuestionari(){
   let pregActualTxt = "";
   let esVisible;
   let txtTipusPreg;

   preguntaUltima = llistaPreguntes.length;


   // Variable per emmagatzemar la sortida HTML
   let questionariHTML = document.getElementById("contenidorQuestionari");  // output = questionariHTML
   let elementArticle, elementTitol, elementDivRespostes, elementGrupBotons;

   for (let pregActual=0; pregActual<llistaPreguntes.length; pregActual++){
      elementArticle = "";
      // Per omplir l'element article   <article id="pregunta-01-tx" class="elementVisible">

       // Crear una funció que faci aquesta acció
      if ((pregActual+1)<10) {
         pregActualTxt = "0" + (pregActual + 1);
      } else {
         pregActualTxt = pregActual + 1;
      }

      // pregActualTxt = (pregActual<10) ? "0" + (pregActual + 1) : pregActual + 1 ;

      if (pregActual==0) {
          esVisible = "elementVisible";
      } else {
          esVisible = "elementOcult";
      }
      //esVisible =  (pregActual==1) ? 'elementVisible' : 'elementOcult'; 

      elementArticle = '<article id="pregunta-' + pregActualTxt + '-' + llistaPreguntes[pregActual].tipusPreg + '" class="' + esVisible + '">';

      elementTitol = "";
      // Per omplir l'element span titol
      // <span class="titol">Pregunta #1 (text)</span>
      
      switch (llistaPreguntes[pregActual].tipusPreg){
         case "tx": txtTipusPreg = "text"; break;
         case "ch": txtTipusPreg = "checkbox"; break;
         case "ra": txtTipusPreg = "radio"; break;
         case "so": txtTipusPreg = "Select One"; break;
      }

      elementTitol = '<span class="titol">Pregunta #' + pregActualTxt + ' (' + txtTipusPreg + ')</span>';

      console.log ("elementTitol = " + elementTitol);

      elementTitol.innerHTML = 'Pregunta #' + pregActualTxt + '(' + txtTipusPreg + ')';

      // FINAL Per omplir l'element span titol 

      elementEnunciat = "";

      /*  Per omplir l'element span enunciat
      <div class="enunciat">
         <p>bla, bla, bla.</p>
      </div> */

      elementEnunciat = '<div class="enunciat"><p>' + llistaPreguntes[pregActual].enunciatPreg + "</p></div>";

      console.log ("elementEnunciat = " + elementEnunciat);

      // FINAL Per omplir l'element span enunciat

      elementDivRespostes = "";
      /*  Per omplir l'element <div> per les respostes
         <div class="respostes">
            <label class="opcio col1">
               <input type="text" id="resp-01" name="resposta-1" placeholder="Ut enim ad minima veniam" onchange="marcaComResposta()"/>
            </label>
         </div> <!-- FINAL <div class="respostes">-->
      */

      elementDivRespostes= ''
         + '<div class="respostes">'
         + '  <label class="opcio col1">'
         + '    <input type="text" id="'
         +         'resp-' + pregActualTxt
         +         '" name="resposta-'
         +         pregActualTxt
         +         '" placeholder="Ut enim ad minima veniam" onchange="marcaComResposta()"/>'
         + '  </label>'
         + '</div> <!-- FINAL <div class="respostes">-->';

      console.log ("elementDivRespostes = " + elementDivRespostes); 
      // FINAL Per omplir l'element div respostes 

      elementGrupBotons = "";

      /*  Per omplir l'element div grup de botons
         <div class="col2 centrat">
            <button id="btAnt01" disabled onclick="passaAnterior(this)">&lt;&lt; Anterior</button>
            <button id="btSeg01" disabled onclick="passaSeguent(this)">Següent >></button>
         </div> */

      elementGrupBotons =''
         + '<div class="col2 centrat">'
         + '  <button id="btAnt' + pregActualTxt + '" disabled onclick="passaAnterior(this)">&lt;&lt; Anterior</button>'
         + '  <button id="btSeg' + pregActualTxt + '" disabled onclick="passaSeguent(this)">Següent >></button>'
         + '</div>'


      debugger;
      
      questionariHTML.innerHTML += elementArticle + elementTitol + elementEnunciat + elementDivRespostes + elementGrupBotons;
      console.log ("elementGrupBotons = " + elementGrupBotons);
      // FINAL Per omplir l'element div respostes

   }  // FINAL == for (let pregActual=0; pregActual<llistaPreguntes.length; pregActual++){ 
}


function afegirZero(){

}  // FINAL == function afegirZero()