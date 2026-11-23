(function () {
  var STORAGE_KEY = "cv-lang";

  function link(href, label) {
    return '<a href="' + href + '" target="_blank" rel="noopener noreferrer">' + label + "</a>";
  }

  var paj = link("https://paj-gps.de/", "PAJ UG");
  var canyon = link("https://brandcanyon.de/", "Brand Canyon");
  var canyonSite = link("https://brandcanyon.de/", "brandcanyon.de");
  var bcx = link("https://bcx.ba/", "BCX");
  var lova = link("https://lova.ba/", "Lova.ba");

  var dict = {
    de: {
      title: "Milica Galić — Full-Stack-Entwicklerin",
      meta: "Lebenslauf von Milica Galić, Full-Stack-Entwicklerin in Banja Luka, spezialisiert auf Laravel, Vue.js und API-Integrationen.",
      role: "Full-Stack-Entwicklerin",
      remote: "Nur Remote",
      "lang-label": "Sprache",
      "contact-label": "Kontakt",
      download: "CV herunterladen",
      skills: "Kenntnisse",
      "group-backend": "Backend",
      "group-frontend": "Frontend",
      "group-tools": "Tools & DevOps",
      languages: "Sprachen",
      "lang-sbc": "Serbisch / Bosnisch / Kroatisch",
      "lang-en": "Englisch",
      "lang-de": "Deutsch",
      "lang-es": "Spanisch",
      "lang-zh": "Chinesisch",
      "lvl-native": "Muttersprache",
      "lvl-fluent": "Fließend",
      "lvl-de": "Gut",
      "lvl-mid": "Mittelstufe",
      "lvl-beginner": "Grundkenntnisse",
      interests: "Interessen",
      "interests-body": "In meiner Freizeit graviere und gestalte ich mit einem CNC-Laser Holzprodukte und verbinde Technik mit Handwerk zu persönlichen Stücken.",
      "summary-h": "Profil",
      summary: "Full-Stack-Entwicklerin mit über 5 Jahren Erfahrung, spezialisiert auf Laravel, Vue.js und API-Integrationen. Ich habe skalierbare Plattformen für internationale Kunden aufgebaut und betreut, darunter vollständige Integrationen mit Shopify, WooCommerce und der Amazon API. Starker Hintergrund in der Backend-Entwicklung, ergänzt durch Frontend-Technologien, Blockchain und DevOps-Tools. Mir sind sauberer Code, Innovation und kontinuierliches Lernen wichtig.",
      "hi-years-n": "5+ Jahre",
      "hi-years-l": "Erfahrung",
      "hi-fs-n": "Full-Stack",
      "hi-fs-l": "Entwicklung",
      "hi-api-n": "API",
      "hi-api-l": "Integrationen",
      "hi-perf-n": "Leistung",
      "hi-perf-l": "Automatisierung",
      experience: "Berufserfahrung",
      "job-sd": "Softwareentwicklerin",
      "co-paj": paj + ", Deutschland — Remote",
      "paj-1": "Full-Stack-Entwicklung einer Plattform für GPS-Tracking und Flottenmanagement.",
      "paj-2": "Backend-Services in Laravel: REST-APIs, Geschäftslogik und Leistungsoptimierung.",
      "paj-3": "Frontend-Anwendungen in Angular und mobile Apps in React Native, jeweils mit TypeScript.",
      "paj-4": "Integration und Verarbeitung von Echtzeit-GPS-Daten aus Tracking-Geräten.",
      "paj-5": "MongoDB für skalierbare Speicherung und standortbasierte Abfragen.",
      "paj-6": "KI-gestützte Entwicklung mit Cursor, KI-Agenten und Codex, um die Lieferung zu beschleunigen und die Codequalität zu verbessern.",
      "paj-7": "NetBird für sicheren Netzzugriff zwischen Entwicklungsumgebungen und Diensten.",
      "paj-8": "Zusammenarbeit an Systemarchitektur, Feature-Design und Leistungsverbesserungen.",
      "job-fs": "Full-Stack-Entwicklerin",
      "co-bc": "Codefellas GmbH — " + canyon + ", Deutschland — Remote",
      "bc-1": "Laravel-Backend, Vue.js-Frontend, MySQL, Docker und REST-API-Architektur.",
      "bc-2": "Entwicklung und Wartung von " + canyonSite + " und dashboard.merch.camp sowie der von Grund auf neu aufgebauten Plattform lara.sosabrothers.de.",
      "bc-3": "Shopify-API-Integrationen, zunächst mit REST und später mit der Migration zu GraphQL für die Synchronisierung von Produkten und Bestellungen.",
      "bc-4": "REST-APIs für WooCommerce und die Amazon API für den mehrkanaligen Produktverkauf und die Anbindung von Shops.",
      "bc-5": "n8n-Workflows für DecoNetwork zur Automatisierung der Bestellabwicklung und Produktsynchronisierung.",
      "bc-6": "Stanley/Stella-API-Integration zur Überwachung der Lagerbestände und zur Automatisierung der Produktverfügbarkeit.",
      "bc-7": "Durchgängiges Backend in Laravel und Frontend in Vue.js, mit strukturierten Daten in MySQL.",
      "dam-1": "Tägliche Arbeit mit Laravel, Laragon, PHP, MySQL, JavaScript, Vue.js, Node.js, Git, HTML, CSS, AJAX, jQuery, Composer, Bootstrap, REST-APIs, JSON und Postman.",
      "dam-2": "Gelegentlich React Native, Java, Android Studio und Eclipse für mobile und plattformübergreifende Entwicklung.",
      "dam-3": "Praktische Arbeit mit Blockchain-Technologien und Kryptowährungsplattformen.",
      "dam-4": "Webhosting und Deployment mit FTP, PuTTY, FileZilla, AWS und Heroku.",
      "dam-5": "Code-Reviews und Architekturgespräche sowie Überwachung und Fehlerbehebung von Produktivsystemen.",
      "dam-6": "Ethereum-Sparfunktion auf der Plattform " + bcx + ", mit Laravel im Backend und HTML im Frontend.",
      "dam-7": "Mitwirkung an " + lova + ", einer React-Native-App für digitale Zahlungen und Finanztransaktionen.",
      "job-ts": "Spezialistin für technischen Support",
      "mtel-1": "Technischer Support für Endnutzer, mit schneller Lösung von Problemen, damit der Betrieb nicht unterbrochen wurde.",
      education: "Ausbildung",
      "edu-degree": "Diplomierte Professorin für Mathematik und Informatik",
      "edu-faculty": "Fakultät für Naturwissenschaften und Mathematik",
      "edu-major": "Studienrichtung Professorin für Mathematik und Informatik.",
      "edu-school": "Gymnasium",
      "edu-track": "Naturwissenschaftlich-mathematischer Zweig.",
      certs: "Zertifikate",
      "cert-1": "Zertifikat für die Teilnahme am Camp junger Programmierer von Lanaco",
      "cert-2": "Zertifikat des Verbands der Innovatoren",
      "cert-3": "Zertifikat für eine Entrepreneurship-Schulung",
      "cert-4": "Zertifikat für Chinesisch",
      "cert-5": "Zertifikat für Englisch",
      projects: "Projekte",
      "projects-lead": "Eigene Projekte, die ich von Grund auf entworfen und entwickelt habe.",
      "aria-warehouse": "Warehouse-CMS-Demo",
      "proj-warehouse": "Ein Full-Stack-System für die Lagerverwaltung, entwickelt mit Laravel und Vue.js. Es umfasst Bestandsverfolgung, Verwaltung mehrerer Lager, Beschaffung, rollenbasierte Zugriffsrechte und Berichte, mit einem responsiven Admin-Dashboard und einer vollständig befüllten Demo.",
      "aria-geoin": "Website von GEOIN Nekretnine",
      "proj-geoin": "Eine moderne, responsive Immobilienwebsite in PHP, entwickelt mit KI-Unterstützung. Sie umfasst Immobilienangebote, erweiterte Suche und Filter, ein eigenes Admin-Dashboard und die Verwaltung von Inhalten. Ich habe sie außerdem bereitgestellt und hoste und betreue sie weiterhin.",
      "aria-party": "My Perfect Party bei Google Play",
      "proj-party": "React-Native-App für die Veranstaltungsplanung. Sie umfasst Gästelisten und Zusagen, Sitzpläne, Ausgaben, Aufgaben und Checklisten, Einladungen, Statistiken und PDF-Export. Ich habe die Oberfläche, die App-Logik, die Android-Veröffentlichung und den Google-Play-Eintrag umgesetzt.",
      "aria-dress": "Dress Up and Makeup Girls bei Google Play",
      "proj-dress": "Ein Unity-Spiel rund um Mode und Schönheit, in dem Spielerinnen Outfits, Make-up und Frisuren ausprobieren und eigene Looks erstellen. Ich habe die Spielentwicklung und die visuelle Gestaltung für die Android-Veröffentlichung übernommen.",
      "aria-flip": "FLIP IT bei Google Play",
      "proj-flip": "Eine Sammlung von Logikrätseln in React Native, entwickelt mit KI-Unterstützung. Spielerinnen bringen Kacheln zur Übereinstimmung, lösen Sudoku und knacken einen Geheimcode."
    },

    sr: {
      title: "Milica Galić — Full-stack programer",
      meta: "Biografija Milice Galić, full-stack programera iz Banje Luke, sa fokusom na Laravel, Vue.js i API integracije.",
      role: "Full-stack programer",
      remote: "Rad na daljinu",
      "lang-label": "Jezik",
      "contact-label": "Kontakt",
      download: "Preuzmi CV",
      skills: "Vještine",
      "group-backend": "Backend",
      "group-frontend": "Frontend",
      "group-tools": "Alati i DevOps",
      languages: "Jezici",
      "lang-sbc": "Srpski / Bosanski / Hrvatski",
      "lang-en": "Engleski",
      "lang-de": "Njemački",
      "lang-es": "Španski",
      "lang-zh": "Kineski",
      "lvl-native": "Maternji",
      "lvl-fluent": "Tečno",
      "lvl-de": "Srednji nivo",
      "lvl-mid": "Srednji nivo",
      "lvl-beginner": "Početni nivo",
      interests: "Interesovanja",
      "interests-body": "U slobodno vrijeme bavim se laserskim graviranjem i izradom drvenih proizvoda, spajajući tehnologiju i kreativnost u izradi personalizovanih predmeta.",

      "summary-h": "Sažetak",
      summary: "Full-stack programer sa više od 5 godina profesionalnog iskustva i fokusom na Laravel, Vue.js i API integracije. Razvijala sam i održavala skalabilne platforme za međunarodne klijente, uključujući integracije sa Shopifyjem, WooCommerceom i Amazon API-jem. Imam bogato iskustvo u backend razvoju, kao i iskustvo u radu sa frontend tehnologijama, blockchainom i DevOps alatima. Posebnu pažnju posvećujem kvalitetu koda, optimizaciji i stalnom usavršavanju.",

      "hi-years-n": "5+ godina",
      "hi-years-l": "iskustva",
      "hi-fs-n": "Full-stack",
      "hi-fs-l": "razvoj",
      "hi-api-n": "API",
      "hi-api-l": "integracije",
      "hi-perf-n": "Performanse",
      "hi-perf-l": "i automatizacija",

      experience: "Radno iskustvo",
      "job-sd": "Softverski programer",
      "co-paj": paj + ", Njemačka — rad na daljinu",
      "paj-1": "Full-stack razvoj platforme za GPS praćenje i upravljanje voznim parkom.",
      "paj-2": "Razvoj backend servisa u Laravelu, uključujući REST API-je, poslovnu logiku i optimizaciju performansi.",
      "paj-3": "Razvoj frontend aplikacija u Angularu i mobilnih aplikacija u React Nativeu, uz korišćenje TypeScripta.",
      "paj-4": "Integracija i obrada GPS podataka u realnom vremenu sa uređaja za praćenje.",
      "paj-5": "Korišćenje MongoDB-a za skalabilno skladištenje podataka i upite zasnovane na lokaciji.",
      "paj-6": "Korišćenje AI alata, uključujući Cursor, AI agente i Codex, za ubrzavanje razvoja i unapređenje kvaliteta koda.",
      "paj-7": "Korišćenje NetBird-a za siguran mrežni pristup između razvojnih okruženja i servisa.",
      "paj-8": "Učešće u osmišljavanju arhitekture sistema, razvoju funkcionalnosti i unapređenju performansi.",

      "job-fs": "Full-stack programer",
      "co-bc": "Codefellas GmbH — " + canyon + ", Njemačka — rad na daljinu",
      "bc-1": "Razvoj Laravel backend sistema, Vue.js frontend aplikacija, MySQL baza podataka i REST API arhitekture.",
      "bc-2": "Razvoj i održavanje sajta " + canyonSite + ", dashboard.merch.camp i platforme lara.sosabrothers.de, koja je razvijena od početka.",
      "bc-3": "Integracija Shopify API-ja, uz početno korišćenje REST API-ja i kasniji prelazak na GraphQL radi sinhronizacije proizvoda i porudžbina.",
      "bc-4": "Integracija WooCommerce REST API-ja i Amazon API-ja za povezivanje prodavnica i upravljanje višekanalnom prodajom.",
      "bc-5": "Izrada n8n automatizacija za DecoNetwork, uključujući automatsku obradu porudžbina i sinhronizaciju proizvoda.",
      "bc-6": "Integracija Stanley/Stella API-ja za praćenje zaliha i automatsko ažuriranje dostupnosti proizvoda.",
      "bc-7": "Razvoj kompletnog backend sistema u Laravelu i frontend aplikacije u Vue.js-u, uz organizovano skladištenje podataka u MySQL bazi.",

      "dam-1": "Svakodnevni rad sa Laravelom, Laragonom, PHP-om, MySQL-om, JavaScriptom, Vue.js-om, Node.js-om, Gitom, HTML-om, CSS-om, AJAX-om, jQueryjem, Composerom, Bootstrapom, REST API-jima, JSON-om i Postmanom.",
      "dam-2": "Povremeni rad sa React Nativeom, Javom, Android Studiom i Eclipseom na razvoju mobilnih aplikacija i aplikacija za više platformi.",
      "dam-3": "Praktično iskustvo u radu sa blockchain tehnologijama i platformama za kriptovalute.",
      "dam-4": "Postavljanje i održavanje sajtova i aplikacija na serverima, uz korišćenje FTP-a, PuTTY-ja, FileZille, AWS-a i Herokua.",
      "dam-5": "Pregledanje koda, razgovori o arhitekturi sistema, nadzor produkcionih okruženja i otklanjanje problema.",
      "dam-6": "Razvoj funkcionalnosti štednje u Ethereumu na platformi " + bcx + ", uz Laravel backend i HTML frontend.",
      "dam-7": "Doprinos razvoju aplikacije " + lova + ", React Native aplikacije za digitalna plaćanja i finansijske transakcije.",

      "job-ts": "Tehnička podrška",
      "mtel-1": "Pružanje tehničke podrške korisnicima i brzo rješavanje tehničkih problema radi nesmetanog rada.",

      education: "Obrazovanje",
      "edu-degree": "Diplomirani profesor matematike i informatike",
      "edu-faculty": "Prirodno-matematički fakultet",
      "edu-major": "Studijski program: profesor matematike i informatike.",
      "edu-school": "Gimnazija",
      "edu-track": "Prirodno-matematički smjer.",

      certs: "Certifikati",
      "cert-1": "Certifikat o učešću na kampu mladih programera u organizaciji Lanaca",
      "cert-2": "Certifikat Udruženja inovatora",
      "cert-3": "Certifikat o završenoj obuci iz preduzetništva",
      "cert-4": "Certifikat o poznavanju kineskog jezika",
      "cert-5": "Certifikat o poznavanju engleskog jezika",

      projects: "Projekti",
      "projects-lead": "Lični projekti koje sam osmislila i razvila od početka.",

      "aria-warehouse": "Demo aplikacija Warehouse CMS",
      "proj-warehouse": "Full-stack sistem za upravljanje skladištem, razvijen u Laravelu i Vue.js-u. Obuhvata praćenje zaliha, upravljanje više skladišta, nabavku, kontrolu pristupa prema korisničkim ulogama i izvještavanje. Uključuje responzivnu administratorsku kontrolnu tablu i demo verziju sa unaprijed pripremljenim podacima.",

      "aria-geoin": "Sajt GEOIN Nekretnine",
      "proj-geoin": "Moderan i responzivan sajt za agenciju za nekretnine, razvijen u PHP-u uz pomoć AI alata. Obuhvata prikaz nekretnina, naprednu pretragu i filtere, administratorsku kontrolnu tablu i upravljanje sadržajem. Samostalno sam postavila sajt na hosting i nastavila da ga održavam.",

      "aria-party": "My Perfect Party na Google Playu",
      "proj-party": "React Native aplikacija za organizaciju događaja. Omogućava upravljanje listama gostiju i RSVP potvrdama dolaska, rasporedom sjedenja, troškovima, zadacima, pozivnicama i statistikom, uz mogućnost izvoza u PDF. Razvila sam korisnički interfejs, funkcionalnosti aplikacije, Android verziju i objavila je na Google Playu.",

      "aria-dress": "Dress Up and Makeup Girls na Google Playu",
      "proj-dress": "Unity igra posvećena modi i ljepoti, u kojoj igrači mogu kombinovati odjeću, šminku i frizure i kreirati vlastite stilove. Radila sam na razvoju igre i njenom vizuelnom identitetu za Android izdanje.",

      "aria-flip": "FLIP IT na Google Playu",
      "proj-flip": "Zbirka logičkih igara razvijena u React Nativeu uz pomoć AI alata. Obuhvata slaganje pločica, Sudoku i igru pogađanja tajnog koda."
    }

  };

  var textOriginal = new WeakMap();
  var htmlOriginal = new WeakMap();
  var ariaOriginal = new WeakMap();
  var contentOriginal = new WeakMap();

  function valueFor(lang, key) {
    if (lang === "en" || !dict[lang] || !dict[lang][key]) return null;
    return dict[lang][key];
  }

  function apply(lang) {
    if (lang !== "en" && lang !== "de" && lang !== "sr") lang = "en";
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      if (!textOriginal.has(el)) textOriginal.set(el, el.textContent);
      var next = valueFor(lang, el.getAttribute("data-i18n"));
      el.textContent = next == null ? textOriginal.get(el) : next;
    });

    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      if (!htmlOriginal.has(el)) htmlOriginal.set(el, el.innerHTML);
      var next = valueFor(lang, el.getAttribute("data-i18n-html"));
      el.innerHTML = next == null ? htmlOriginal.get(el) : next;
    });

    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      if (!ariaOriginal.has(el)) ariaOriginal.set(el, el.getAttribute("aria-label") || "");
      var next = valueFor(lang, el.getAttribute("data-i18n-aria"));
      el.setAttribute("aria-label", next == null ? ariaOriginal.get(el) : next);
    });

    document.querySelectorAll("[data-i18n-content]").forEach(function (el) {
      if (!contentOriginal.has(el)) contentOriginal.set(el, el.getAttribute("content") || "");
      var next = valueFor(lang, el.getAttribute("data-i18n-content"));
      el.setAttribute("content", next == null ? contentOriginal.get(el) : next);
    });

    document.querySelectorAll(".download").forEach(function (link) {
      link.setAttribute("href", "cv/Milica_Galic_CV_" + lang.toUpperCase() + ".pdf");
    });

    document.querySelectorAll(".lang-switch button").forEach(function (button) {
      button.setAttribute("aria-pressed", button.getAttribute("data-lang") === lang ? "true" : "false");
    });

    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (error) { }
  }

  var switcher = document.querySelector(".lang-switch");
  if (switcher) {
    switcher.addEventListener("click", function (event) {
      var button = event.target.closest("button[data-lang]");
      if (!button) return;
      apply(button.getAttribute("data-lang"));
    });
  }

  var saved = "en";
  try {
    saved = localStorage.getItem(STORAGE_KEY) || "en";
  } catch (error) { }
  if (saved !== "en") apply(saved);
})();
