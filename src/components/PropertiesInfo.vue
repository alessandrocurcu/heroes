<script setup lang="ts"></script>
<template>
  <div class="prose">
    <p>Le proprietà si configurano direttamente nella repository del KBACK modificando il file</p>
    <pre><code>propertiesList.ts</code></pre>
    <p>
      Questo file contiene un array di oggetti e ogni oggetto rappresenta una Property del seo-tech.
      In questo file è possibile modificare cose come il nome della proprietà, la sua descrizione o
      la categoria di cui fa parte. Una volta effettuata la modifica va salvato il file, va fatto il
      reload della KBACK (eseguita in locale) e quindi va premuto il tasto "Publish properties" che
      si trova nella sezione Properties del KBACK. Così facendo le proprietà verranno aggiornate e
      saranno disponibili per tutti gli utenti.
    </p>
    <img src="/publishProperties.png" alt="pubblica proprietà" />
    <p>
      Ogni oggetto è così caratterizzato (<b
        >altre proprietà che trovi e che non sono elencate qui sono deprecate e le puoi ignorare</b
      >):
    </p>
    <pre><code>
      {
        id: '175',
        propertyId: 'URL_PRESERVE_FINAL_SLASH',
        name: 'Preserve Original Final Slash in url',
        description: '',
        nameFile: 'c0ba98',
        copy: {},
        oldPath: 'General > Site > URL PARAMETERS',
        type: 'KTOGGLE',
        topic: 'URL - Path',
        seojs3: true,
        note: []
      },
      </code></pre>
    <ul>
      <li>
        <code>id</code> e <code>propertyId</code> sembrano simili ma in realtà c'è un motivo per cui
        sono distinte: ci sono Properties (pochissime, ma ci sono) che hanno differente ID ma lo
        stesso propertyId (per ragioni legacy)
      </li>
      <li>
        <code>name</code> è quello che compare nell'elenco delle proprietà nella sezione Seo Tech
        della K4
      </li>
      <li>
        <code>description</code> è il testo che si trova appena sotto il nome del dettaglio della
        proprietà nella sezione Seo Tech della K4
      </li>
      <li>
        <code>nameFile</code> è il nome del file che nella repository della K4 si occupa di
        visualizzare questa proprietà: per le proprietà più semplici il file è lo stesso. Il nome è
        stato oscurato per questioni di sicurezza
      </li>
      <li>
        <code>copy</code> contiene i testi dei campi della proprietà. Creato per questioni di
        sicurezza
      </li>
      <li>
        <code>label</code> anche questo contiene i testi dei campi della proprietà. Creato per
        questioni di sicurezza
      </li>
      <li><code>oldPath</code> indica dove si trova la proprietà nella vecchia applicazione K1</li>
      <li>
        <code>type</code> definisce la tipologia della proprietà: questa ha che fare nel modo con il
        quale vengono caricate e salvate dalla K4; trovi tutto nella repository K4CLIENT nel file
        propoertiesMixin.js.
      </li>
      <li>
        <code>topic:</code> definisce in quale categoria la proprietà si trova nella lista delle
        proprietà nella sezione Seo Tech della K4
      </li>
      <li>
        <code>seojs3</code> Questo indica che la proprietà viene elaborata dal seojs3 di Roberto
        Pellagatti lato backend: purtroppo per varie ragioni alcune proprietà sono elaborate dal
        seojs3 di Roberto mentre altre vengono elaborate lato client dal K4. Quelle che hanno questa
        proprietà sono eleaborate dal seojs3.
      </li>
    </ul>
    <p>
      Puoi trovare riferimenti a SpecialK: questo si riferiva a una vecchia versione di K4 fatta
      apposta per Jakala che è ora deprecata, ignora
    </p>
  </div>
</template>
