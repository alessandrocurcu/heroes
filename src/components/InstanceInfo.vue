<script setup lang="ts"></script>
<template>
  <div class="prose">
    <p>Un Istance rappresenta l'ambiente all'interno del quale vive il sito del cliente.</p>
    <ul>
      <li>Può rappresentare un ambiente di sviluppo, staging o produzione</li>
      <li>
        Le Instance sono create primariamente da Roberto Pellagatti e occasionalmente Marco
        Baricevic
      </li>
      <li>
        Le Instance sono necessarie per poter lavorare con il Seo Tool, il Seo Tech e vedere i dati
        della Strategy (keywords, backlinks...)
      </li>
      <li>
        <p>
          Per poter accedere ai dati della Strategy e al Seo Tool occorre che il Project sia
          associato a un Instance. Puoi associare un Project a una Instance su KBACK andando nel
          dettaglio del Project e premendo il pulsante "Change Instance"
        </p>
        <img src="/changeInstance.png" alt="Change Instance" />
      </li>
    </ul>
    <h3>Proprietà</h3>
    <ul>
      <li>
        <strong>Is Enabled</strong>: se è "true" è possibile lavorare all'istanza con il Seo Tech
        (se l'Utente ha accesso al Seo Tech e a quell'Instance)
      </li>
      <li>
        <strong>Server</strong>: è il nome del server dove vive l'istanza. Alcune volte uno di
        questi server può cadere: in questo caso tutte le istanze che si trovano su quel server
        avranno problemi, così come Kleecks 4 che potrebbe caricare dati vuoti o errati
      </li>
    </ul>
  </div>
</template>
