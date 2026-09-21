# Beauty Boutique di Morina Valentina — proposta dimostrativa (sito non ufficiale)

> **Proposta dimostrativa — sito non ufficiale.**
> Questa pagina è un mockup realizzato a scopo di proposta grafica e **non è affiliata** a
> Beauty Boutique di Morina Valentina. I recapiti mostrati sono quelli pubblici dell'attività;
> le immagini sono illustrazioni originali create per questa proposta e **non ritraggono** la
> boutique, i prodotti o i trattamenti. La presentazione dei servizi è **indicativa** e sarà
> sostituita o confermata con il materiale reale della titolare.

Sito one-page in italiano per un'attività di estetica e cosmetici: HTML, CSS e JavaScript statici,
senza framework, senza dipendenze esterne e senza backend. L'obiettivo della pagina è una sola
azione: la **richiesta di appuntamento via WhatsApp**.

## Contenuti della pagina

- Hero con il claim **"Estetica, cosmetici e coccole per l'anima."**
- **La boutique**: presentazione sintetica e nota sul carattere dimostrativo della pagina
- **Servizi indicativi**: trattamenti viso, pulizia del viso, make-up, consigli di bellezza —
  ogni scheda è marcata *Indicativo* e accompagnata da una nota "da confermare"
- **Bellezza e cosmetici**: sezione prodotti, senza marchi né categorie inventate
- **Atmosfera**: galleria di sei illustrazioni dichiaratamente dimostrative
- **Richiesta appuntamento**: WhatsApp con messaggio precompilato + click-to-call
- **Dove siamo**: indirizzo, schema illustrativo della zona e link a Google Maps
- Footer con recapiti pubblici e disclaimer esteso; CTA WhatsApp fissa su mobile

## Dati usati nella pagina

Solo informazioni pubbliche fornite dal committente della demo:

| Dato | Valore |
| --- | --- |
| Attività | Beauty Boutique di Morina Valentina — estetica e cosmetici |
| Claim | «Estetica, cosmetici e coccole per l'anima.» |
| Indirizzo | Via Primo Maggio 33, 10062 Luserna San Giovanni (TO), Piemonte |
| Telefono / WhatsApp | +39 327 691 1324 |
| Email | giulyvale@gmail.com |
| Facebook | https://www.facebook.com/100057311985199/ |

I servizi citati (trattamenti viso, pulizia del viso ed estrazioni, make-up) compaiono in
**directory pubbliche** e nella pagina sono presentati **come indicativi**, non come offerta
confermata.

Non sono presenti prezzi, durate, orari di apertura, recensioni, valutazioni, certificazioni,
titoli di studio, anni di attività, marchi di prodotto, partita IVA o profili Instagram: nessuno
di questi dati è stato verificato, quindi nessuno è stato inventato.

## Struttura dei file

```
.
├── index.html                  # pagina unica
├── assets/
│   ├── css/style.css           # stile mobile-first, custom properties
│   ├── js/main.js              # menu mobile, reveal allo scroll, anno corrente
│   └── img/
│       ├── hero.svg            # sfondo hero (illustrazione)
│       ├── cosmetici.svg       # illustrazione sezione prodotti
│       ├── mappa.svg           # schema indicativo della zona (non in scala)
│       ├── galleria-1..6.svg   # illustrazioni dimostrative
│       ├── logo.svg / favicon.svg / favicon-180.png
│       └── og-image.png        # anteprima social 1200×630
├── robots.txt                  # indicizzazione disattivata (vedi sotto)
├── sitemap.xml
├── .nojekyll
└── .github/workflows/pages.yml # deploy su GitHub Pages
```

## Immagini

Le illustrazioni sono **SVG originali** creati per questa proposta: nessuna foto di terzi, nessun
vincolo di licenza esterno, nessuna rappresentazione della boutique reale. Per sostituirle con
fotografie basta mettere i file in `assets/img/` e aggiornare gli attributi `src` in `index.html`:
i riquadri della galleria usano `aspect-ratio: 3/2` e `object-fit: cover`, quindi vanno bene anche
immagini di proporzioni diverse.

## Indicizzazione disattivata

La pagina è volutamente **non indicizzabile**, per non entrare in conflitto con i canali ufficiali
dell'attività:

- `<meta name="robots" content="noindex, nofollow">` (e `googlebot`) in `index.html`
- `robots.txt` con `Disallow: /`

Prima di un'eventuale pubblicazione ufficiale vanno rimossi entrambi, insieme alla barra
"Proposta dimostrativa" e alle note sul carattere dimostrativo dei contenuti.

## Accessibilità e resa

- Mobile-first, testata da 320px a 1440px senza scorrimento orizzontale
- Skip link, `aria-expanded` sul menu, focus visibile, testi alternativi su tutte le immagini
- Nessun contenuto dipende da JavaScript: senza JS la pagina resta completamente leggibile
- `prefers-reduced-motion` rispettato (animazioni di comparsa disattivate)
- Target touch dei pulsanti ≥ 44px

## Test

La pagina è stata verificata con uno script Playwright headless su cinque viewport
(320 / 375 / 768 / 1024 / 1440 px): assenza di overflow orizzontale, apertura e chiusura del menu
mobile, link di ancoraggio, comparsa di tutti gli elementi animati, footer non coperto dalla CTA
fissa, caricamento di tutte le immagini, correttezza di link WhatsApp/telefono/email/Facebook,
gerarchia dei titoli, contrasto del testo, `prefers-reduced-motion`, resa senza JavaScript e
assenza di errori in console o risorse 404 — **86 controlli superati**.

Lo script di test non fa parte del sito pubblicato.

## Deploy

Il sito è pubblicato con **GitHub Pages** a partire dal branch `gh-pages`
(sorgente *Deploy from a branch*):

<https://balla2065-eng.github.io/beauty-boutique-luserna-demo/>

A ogni push su `main`, il workflow `.github/workflows/pages.yml` riallinea `gh-pages` a `main`;
la build e la pubblicazione sono poi gestite da GitHub Pages.

> Nota: la sorgente *GitHub Actions* (`actions/deploy-pages`) non è utilizzabile in questo
> repository perché il token dei workflow non ha i permessi per creare o riconfigurare il sito
> Pages (`Create Pages site failed: Resource not accessible by integration`). Per passare a quella
> modalità basta impostare a mano *Settings → Pages → Source: GitHub Actions* e ripristinare il
> workflow di deploy con `actions/upload-pages-artifact` + `actions/deploy-pages`.

## Licenza

Codice sotto licenza MIT (vedi `LICENSE`). I recapiti e il nome dell'attività appartengono ai
rispettivi titolari e sono usati solo per questa proposta dimostrativa; su richiesta della titolare
la pagina può essere modificata o rimossa.
