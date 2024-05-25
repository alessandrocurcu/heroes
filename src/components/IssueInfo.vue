<script setup lang="ts"></script>
<template>
  <div class="prose">
    <h2>Schemi di risoluzione issues</h2>
    <p>
      Questo riguarda le tabelle circa i Fixes delle issues che si trovano nella K4: è tutta una
      funzione che in realtà non ha mai usato nessuno e, dal momento che la Rainbow è in arrivo,
      nessuno utilizzerà mai (anche perché è stata pensata male proprio dal punto di vista
      operativo).
    </p>
    <p>
      Modificare il file issuesList e poi caricarlo con il tasto "Publish Issues" che si trova nella
      sezione "Issues" del KBack se si vuole aggiornare il modo con il quale sono visualizzate le
      issue nella K4
    </p>
    <p>Ogni Issue può avere più schemi di risoluzione</p>
    <p>Ogni issue puoi risolverla generalmente o per singola url o per entrambe</p>
    <h3>Schema a: dove l’errore è accessibile da loro e risolvibile da loro</h3>
    <ul>
      <li>a1 page data import</li>
      <li>a2 title auto</li>
      <li>a3 desc auto</li>
      <li>a4 url auto</li>
      <li>a5 seo tool</li>
    </ul>
    <h3>Schema b: request to fix</h3>
    <ol>
      <li>utente deve nominare le singole risorse (url) da fixare</li>
      <li>regola di alto livello che coinvolge tutte le url</li>
    </ol>
    <p>
      L’utente potrebbe fare delle richieste poco furbe quindi il configuratore potrebbe dare
      ulteriori indicazioni su come procedere
    </p>
    <h3>Schema c: vera AI / Schema c1</h3>
    <p>
      falsa AI (Nota QRQ: non ho idea a cosa si riferisse con "vera AI", immagino sia l'ennesima
      funzione fake che sarebbe dovuta diventare realtà e poi mai implementata. La falsa AI
      riguardava dire al cliente che c'era la AI a pensarci ma dietro in realtà era un operatore
      Kleecks)
    </p>

    <h3>Schema d: non risolvibile</h3>
    <h2>Gestione degli errori lato Kleecks</h2>
    <p>Si raccomanda quando si è fatto tutti gli errori fai ripartire nuovo crawl</p>
    <p>Lo stato delle issue sono</p>
    <ul>
      <li>fixed</li>
      <li>failed: non è possibile fixarlo, utente deve aspettare chiamata da parte di Kleecks</li>
      <li>
        partially fixed: eseguito istruzione ma non tutte le url sono fixate, utente deve aspettare
        chiamata da parte di Kleecks
      </li>
      <li>is running</li>
    </ul>
  </div>
</template>
