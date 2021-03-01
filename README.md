# projecte-IT-Training

# Pregunta (text)

```html
     <article id="pregunta-01-tx" class="elementVisible">
        <span class="titol">Pregunta #1 (text)</span>
        <div class="enunciat">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce hendrerit diam vitae urna pulvinar commodo. Suspendisse tristique eu justo in dignissim. Phasellus ut nibh ornare, porttitor sapien a, eleifend massa?</p>
        </div>
        <div class="respostes">
          <label class="opcio col1">
            <input type="text" id="resp-01" name="resposta-1" placeholder="Ut enim ad minima veniam" onchange="marcaComResposta()"/>
          </label>
        </div> <!-- FINAL <div class="respostes">-->
          <div class="col2 centrat">
            <button id="btAnt01" disabled onclick="passaAnterior(this)">&lt;&lt; Anterior</button>
            <button id="btSeg01" disabled onclick="passaSeguent(this)">Següent >></button>
          </div>
      </article> <!-- FINAL <article id="pregunta-01-tx"> -->
```

# Pregunta (checkbox)

```html
      <article id="pregunta-02-ch" class="elementOcult">
        <span class="titol">Pregunta #2 (checkbox)</span>
        <div class="enunciat">
          <p>Ultricies nisi quam metus dictum justo magna litora, condimentum pulvinar libero porttitor sem eleifend odio, bibendum aliquet cursus facilisis lacus hendrerit. Malesuada vestibulum sapien aenean accumsan porttitor nisi hac.</p>
        </div>
        <div class="respostes">
          <label class="opcio col2">
            <input type="checkbox" name="preg_002" onclick="marcaComResposta()"/>
            <span>Seda ut perspiciatis unde omnis</span>
          </label>
          <label class="opcio col2">
            <input type="checkbox" name="preg_002" onclick="marcaComResposta()"/>
            <span>Nemo enim ipsam voluptatem quia</span>
          </label>
          <label class="opcio col2">
            <input type="checkbox" name="preg_002" onclick="marcaComResposta()"/>
            <span>At vero eos et accusamus et iusto odio</span>
          </label>
          <label class="opcio col2">
            <input type="checkbox" name="preg_002" onclick="marcaComResposta()"/>
            <span>Et harum quidem rerum facilis est et expedita</span>
          </label>
        </div> <!-- FINAL <div class="respostes">-->
          <div class="centrat">
            <button id="btAnt02" onclick="passaAnterior(this)">&lt;&lt; Anterior</button>
            <button  id="btSeg02" disabled onclick="passaSeguent(this)">Següent >></button>
          </div>
      </article> <!-- FINAL <article id="pregunta-02-ch"> -->
```

# Pregunta (checkbox)

```html
            <article id="pregunta-03-ra" class="elementOcult">
        <span class="titol">Pregunta #3 (radio)</span>
        <div class="enunciat">
          <p>Nullam tempor magnis fermentum interdum aliquam massa cras metus, eu urna suspendisse eros montes phasellus class quis natoque magnis libero porta id etiam placerat dui, lectus natoque turpis accumsan quis nisl aliquet. </p>
        </div>
        <div class="respostes">
          <label class="opcio col2">
            <input type="radio" name="preg_003" onclick="marcaComResposta()"/>
            <span>Massa penatibus potenti pellentesque.</span>
          </label>
          <label class="opcio col2">
            <input type="radio" name="preg_003" onclick="marcaComResposta()"/>
            <span>Lectus laoreet senectus vitae risus lacinia.</span>
          </label>
          <label class="opcio col2">
            <input type="radio" name="preg_003" onclick="marcaComResposta()"/>
            <span>Litora rhoncus placerat urna sodales dignissim in mattis, lectus fusce elementum.</span>
          </label>
          <label class="opcio col2">
            <input type="radio" name="preg_003" onclick="marcaComResposta()"/>
            <span>Et harum quidem rerum facilis est et expedita</span>
          </label>
        </div> <!-- FINAL <div class="respostes">-->
          <div class="centrat">
            <button id="btAnt03" onclick="passaAnterior(this)">&lt;&lt; Anterior</button>
            <button id="btSeg03" disabled onclick="passaSeguent(this)">Següent >></button>
          </div>
      </article> <!-- FINAL <article id="pregunta-03-ra"> -->
```

# Pregunta (Select One)

```html
      <article id="pregunta-04-so" class="elementOcult">
        <span class="titol">Pregunta #4 (Select One)</span>
        <div class="enunciat">
          <p>Taciti vulputate iaculis a ut facilisis ridiculus, curabitur morbi fermentum cubilia cursus, id blandit massa etiam hendrerit.</p>
        </div>
        <div class="respostes">
          <label class="opcio col1">
            <select id="resp-04" onchange="marcaComResposta()">
              <option selected>&lt;Escull una de les següents opcions.></option>
              <option>Mollis et ultrices lectus morbi nisi quisque imperdiet bibendum id nisl posuere.</option>
              <option>Condimentum himenaeos leo cubilia etiam turpis velit dui fames ultricies.</option>
              <option>Ac neque augue luctus habitasse ad porta cum nulla potenti quisque himenaeos.</option>
            </select>
          </label>
        </div> <!-- FINAL <div class="respostes"> -->
          <div class="centrat">
            <button id="btAnt04" onclick="passaAnterior(this)">&lt;&lt; Anterior</button>
            <button  id="btSeg04" disabled onclick="passaSeguent(this)">Següent >></button>
          </div>
      </article>  <!-- FINAL <article id="pregunta-04-so"> -->
```
