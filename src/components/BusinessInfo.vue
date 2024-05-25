<script setup lang="ts"></script>
<template>
  <div class="prose">
    <p>Un Business rappresenta un nostro cliente.</p>
    <p>
      Può essere un partner, come Jakala, un cliente di un partner, come Sky o ITA Airways (che sono
      clienti di Jakala), oppure un cliente diretto, come Natuzzi.
    </p>
    <p>
      Ogni User fa parte di un Business, e ogni Business può essere associato a una o più Instance e
      essere il proprietario di uno o più Project
    </p>
    <h2>Abilitare l'accesso a Kleecks 4</h2>
    <p>
      Gli User di un Business possano accedere a Kleecks 4 se sono soddisfatte le seguenti
      condizioni:
    </p>
    <ul>
      <li>Esiste il Business</li>
      <li>Esiste lo User e lo User è associato a quel Business</li>
      <li>Roberto Pellagatti ha abilitato il Business</li>
    </ul>
    <h2>Abilitare l'accesso alle feature di Kleecks 4</h2>
    <p>
      Gli User di un Business possano accedere alle feature di Kleecks 4 se sono soddisfatte le
      seguenti condizioni.
    </p>
    <h3>Accesso ai rapporti, grafici e tabelle</h3>
    <ul>
      <li>Esiste un Project con almeno un Audit</li>
      <li>Il proprietario del Project è il Business di cui fanno parte gli User</li>
      <li>
        Il Project è associato a una Instance e il Business è associato a quella Instance; questo è
        necessario se si vuole accedere ai rapporti della Strategy (keywords, competitors,
        backlinks...)
      </li>
    </ul>
    <h3>Accesso al Seo Tool</h3>
    <ul>
      <li>Esiste un Project con almeno un Audit</li>
      <li>Il proprietario del Project è il Business di cui fanno parte gli User</li>
      <li>Il Project è associato a una Instance e il Business è associato a quella Instance</li>
      <li>Il Business e lo User hanno la restriction "Access Seo Tool"</li>
    </ul>
    <h3>Accesso al Seo Tech</h3>
    <ul>
      <li>Il Business è associato alla Instance</li>
      <li>Il Business e lo User hanno la restriction "Access Seo Tech"</li>
    </ul>
  </div>
</template>
