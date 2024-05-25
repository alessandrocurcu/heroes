<script setup lang="ts"></script>
<template>
  <div class="prose">
    <p>Un Project funge da contenitore per raccogliere i dati del sito di un cliente</p>
    <ul>
      <li>Ci sono due famiglie di dati: quelli raccolti tramite un Audit e i dati di Strategy</li>
    </ul>
    <h3>Audit</h3>
    <ul>
      <li>
        Un Audit è un'analisi a campione (solitamente di circa 2000 URL causali) che raccoglie dati
        che misurano lo stato di salute di un sito, nella fattispecie lo stato di salute
        <a href="https://www.seoalk.it/cose-la-technical-seo/">SEO Tecnico</a>
      </li>
      <li>
        Su Kleecks 4 è possibile vedere le tabelle e i grafici di questi dati nella sezione "Crawl"
        nei rapporti
        <img src="/crawlOverview.png" alt="" />
      </li>
      <li>
        Un Audit si lancia nel dettaglio di un Project su Kleecks 4 (nota che su Kleecks 4 un Audit
        si chiama "Crawl") o su KBACK nel dettaglio del Project.
        <picture>
          <img src="/runCrawl.png" alt="" />
        </picture>
      </li>
      <li>
        <p>Quando si crea un Project su KBACK viene lanciato automaticamente un primo Audit</p>
        <BaseMessage kind="warning" class="mt-4">
          <div class="text-xs">
            Per varie ragioni tecniche (Akamai, errori di configurazione, server down ecc...) questo
            primo Audit può facilmente rompersi. Per questo è necessario che questa operazione sia
            fatta, per ora, da Kleecks, in modo che tecnici come Roberto Pellagatti e Luca
            Manigrasso possano aggiustare l'Audit qualora risultasse bacato
          </div>
        </BaseMessage>
      </li>
    </ul>
    <h3>Strategy</h3>
    <ul>
      <li>
        <p>
          I dati della Strategy riguardano la
          <a href="https://www.italiaonline.it/risorse/strategia-seo-come-impostarla-6022"
            >SEO Strategy</a
          >
          e si possono vedere nelle sezioni "SEO Crawl", "Strategy" e "Backlinks" dei rapporti di
          Kleecks 4
        </p>
        <img src="/strategy.png" alt="" />
      </li>
      <li>
        Per vedere i rapporti della Strategy è necessario che il Project sia associato a una
        Instance
      </li>
      <li>
        Per raccogliere i dati della Strategy occorre che qualcuno (i nostri SEO specialist di
        Kleecks o quelli di un partner o cliente) abbiamo preparato una SEO strategy: questa di
        solito produce una lista di Keyword e Competitor da monitorare
      </li>
      <li>
        Queste Keyword e Competitor vanno caricati su Kleecks 4 nelle sezioni "Keywords Management"
        e "Competitors Management" oppure direttamente da DB (ma se ne devono occupare i tecnici
        quali Marco Baricevic o Luca Manigrasso)
      </li>
      <li>
        Una volta che le Keyword e i Competitor sono stati inseriti occorre far "girare" le Keyword,
        in modo che vengano generati i dati di Strategy; questa operazione attulmente è riservata
        solo a Marco Baricevic in quanto è un'operazione complessa e costosa che non va eseguita con
        leggerezza
      </li>
      <li>
        Dopo questo primo crawl strategico solitamente vengono attivati dei crawl automatici
        mensili. Di questo se ne occupa Luca Manigrasso
      </li>
    </ul>
    <h3>Funzioni</h3>
    <ul>
      <li>
        <p>
          <strong>Change Owner:</strong> gli User di un Business possono vedere un Project solo se
          il Project è stato associato a quel Business. Per cambiare l'ownership di un Project vai
          nel dettaglio di un Project su KBACK e premi "Change Owner(s)"
        </p>
        <img src="/changeOwner.png" alt="changeOwner" />
      </li>
      <li>
        <p>
          <strong>Change Instance:</strong> Un Project può essere associato a una sola Instance. Se
          un Project è associato a una Instance si potrà accedere ai dati della Strategy e al Seo
          Tool. Per cambiare l'Instance di un Project vai nel dettaglio di un Project su KBACK e
          premi "Change Instance"
        </p>
        <p>
          Quando si crea un Project lo si può associare a un'Instance. Può accadere che
          quell'Instance venga modificata (ad esempio il server sul quale si trova), e per questa
          ragione è necessario aggiornare l'associazione del Project con l'Instance
        </p>
        <img src="/changeInstance.png" alt="changeInstance" />
      </li>
      <li>
        <p>
          <strong>Pulire la cache:</strong> Questa operazione può sembrare superflua o complicata,
          ma per questioni tecniche purtroppo è necessaria.
        </p>
        <p>
          Quando vengono raccolti nuovi dati della Strategy (quando cioè vengono fatte "girare le
          keyword"), per vedere i dati "freschi" su Kleecks 4 è necessario pulire manualmente i dati
          vecchi per far spazio ai nuovi.
        </p>
        <p>
          Lo si fa nel KBACK nella tabella della lista dei Project e premendo il pulsante "Clean
          Cache"
        </p>
        <img src="/cleanCache.png" alt="cleanCache" />
      </li>
    </ul>
  </div>
</template>
