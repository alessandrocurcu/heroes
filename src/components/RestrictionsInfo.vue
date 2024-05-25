<script setup lang="ts"></script>
<template>
  <div class="prose">
    <p>
      Una Restriction è un permesso che permette all'Utente di accedere a certe sezion1 e feature di
      Kleecks 4.
    </p>
    <p>
      Uno User eredita le restriction di un Business, quindi per cambiare le restriction di uno User
      bisogna cambiare quelle del Business a cui appartiene.
    </p>
    <h2>Restrictions</h2>
    <h3>Run Audit</h3>
    <ul>
      <li>
        Permette agli User di lanciare un nuovo Audit andando nel dettaglio del Project su Kleecks 4
        <img src="/runCrawl.png" alt="run-crawl" />
      </li>
      <li>
        A ogni Business al di fuori di Kleecks è permesso di lanciare non più di 5 Audit per Project
        al mese
      </li>
      <li>
        A nessun Business al di fuori di Kleecks è permesso di creare un Project. Questo perché
        quando si crea un Project viene lanciato un primo Audit. Questo Audit, per ragioni varie
        (Akamai, errori di configurazione, server down ecc...), può facilmente rompersi. Per questo
        è necessario che questa operazione sia fatta, per ora, da Kleecks, in modo che tecnici come
        Roberto Pellagatti e Luca Manigrasso possano aggiustare l'Audit qualora risultasse bacato
      </li>
    </ul>
    <h3>Accessibility</h3>
    <ul>
      <li>
        Quando si lancia un Audit è possibile scegliere di registrare le Issues di Accessibilità
      </li>
      <li>
        Questa opzione è spenta di default perché registrare le Issues di accessibilità rende
        l'Audit considerevolmente più lento
      </li>
      <li>
        È possibile vedere le Issues di accessibilità nella sezione apposita nei rapporti di Kleecks
        4, che compare solo se queste Issue esistono
        <img src="/accessibility.png" alt="accessibility" />
      </li>
    </ul>
    <h3>Only strategy</h3>
    <ul>
      <li>
        <p>
          Questo è un permesso speciale fatto per alcuni clienti di Jakala che determina una
          versione alternativa di Kleecks 4, nella quale sono presenti solo 4 voci della Strategy:
          Keywords Management, Organic Keywords, Competitors Managemente e Competitors Keywords. Non
          usare questo permesso insieme a quello di Jakala MSC.
        </p>
        <img src="/onlyStrategy.png" alt="only-strategy" />
      </li>
    </ul>
    <h3>Jakala MSC</h3>
    <ul>
      <li>
        <p>
          Questo è un permesso speciale fatto Jakala MSC che determina una versione alternativa di
          Kleecks 4, nella quale sono presenti le voci della sezione SEO CRAWL, STRATEGY e della
          sezione CRAWL solo l'URL Explorer. Non usare questo permesso insieme a quello di Only
          Strategy.
        </p>
      </li>
    </ul>
    <h3>Content Generation</h3>
    <ul>
      <li>
        Permette l'accesso allo strumento Content Generation nei rapporti Strategy di Kleecks 4, uno
        strumento avanzato riservato per pochi clienti
        <img src="/contentGen.png" alt="Content Generation" />
      </li>
    </ul>
    <h3>Ai Keyword Research</h3>
    <ul>
      <li>
        Permette l'accesso allo strumento AI Keyword Research nei rapporti Strategy di Kleecks 4,
        uno strumento avanzato riservato per pochi clienti
        <img src="/keywordResearch.png" alt="keyword-research" />
      </li>
    </ul>
    <h3>Access Seo Tool e Access Seo Tech</h3>
    <ul>
      <li>Permettono l'accesso agli strumenti Seo Tool e Seo Tech</li>
      <img src="/tech.png" alt="tech and tool" />
    </ul>
    <h3>Properties Allowed</h3>
    <ul>
      <li>
        Non è un vero e proprio permesso e va sempre di pari passo con l'Access Seo Tech: si tratta
        dell'elenco di proprietà alle quali uno User può accedere nel Seo Tech
      </li>
    </ul>
  </div>
</template>
