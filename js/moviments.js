let preguntaEnCurs = 0;
let preguntaUltima = 4;

function passaSeguent(objRebut){
  preguntaEnCurs++;
  if (preguntaEnCurs == preguntaUltima){
    alert("Ets a la darrera pregunta!" + preguntaEnCurs + " de " + preguntaUltima);
    objRebut.disabled = true;
    preguntaEnCurs --;
  } else {
    alert("Ets a la pregunta " + preguntaEnCurs + " de " + preguntaUltima);
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

  }
// debugger;

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