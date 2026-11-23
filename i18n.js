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
      "hi-perf-l": "und Automatisierung",
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
      title: "Milica Galić — Full-stack programerka",
      meta: "Biografija Milice Galić, full-stack programerke iz Banje Luke, sa fokusom na Laravel, Vue.js i API integracije.",
      role: "Full-stack programerka",
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
      "lvl-mid": "Srednji",
      "lvl-beginner": "Početni",
      interests: "Interesovanja",
      "interests-body": "U slobodno vrijeme CNC laserom graviram i oblikujem drvene proizvode, spajajući tehnologiju i zanat u personalizirane predmete.",
      "summary-h": "Sažetak",
      summary: "Full-stack programerka sa više od 5 godina iskustva, specijalizirana za Laravel, Vue.js i API integracije. Gradila sam i održavala skalabilne platforme za međunarodne klijente, uključujući pune integracije sa Shopifyjem, WooCommerceom i Amazon API-jem. Imam snažno iskustvo u backend razvoju, uz dodatni rad na frontend tehnologijama, blockchainu i DevOps alatima. Stalo mi je do čistog koda, inovacija i stalnog učenja.",
      "hi-years-n": "5+ godina",
      "hi-years-l": "iskustva",
      "hi-fs-n": "Full-stack",
      "hi-fs-l": "razvoj",
      "hi-api-n": "API",
      "hi-api-l": "integracije",
      "hi-perf-n": "Performanse",
      "hi-perf-l": "i automatizacija",
      experience: "Iskustvo",
      "job-sd": "Softverska programerka",
      "co-paj": paj + ", Njemačka — na daljinu",
      "paj-1": "Full-stack razvoj platforme za GPS praćenje i upravljanje flotom.",
      "paj-2": "Backend servisi u Laravelu: REST API-ji, poslovna logika i optimizacija performansi.",
      "paj-3": "Frontend aplikacije u Angularu i mobilne aplikacije u React Nativeu, uz TypeScript na oba.",
      "paj-4": "Integracija i obrada GPS podataka u realnom vremenu sa uređaja za praćenje.",
      "paj-5": "MongoDB za skalabilno skladištenje i upite po lokaciji.",
      "paj-6": "Razvoj uz pomoć vještačke inteligencije, sa Cursorom, AI agentima i Codexom, radi brže isporuke i boljeg kvaliteta koda.",
      "paj-7": "NetBird za siguran mrežni pristup između razvojnih okruženja i servisa.",
      "paj-8": "Saradnja na arhitekturi sistema, dizajnu funkcionalnosti i poboljšanju performansi.",
      "job-fs": "Full-stack programerka",
      "co-bc": "Codefellas GmbH — " + canyon + ", Njemačka — na daljinu",
      "bc-1": "Laravel backend, Vue.js frontend, MySQL, Docker i arhitektura REST API-ja.",
      "bc-2": "Razvoj i održavanje sajta " + canyonSite + " i dashboard.merch.camp, kao i platforme lara.sosabrothers.de napravljene od nule.",
      "bc-3": "Integracije Shopify API-ja, prvo preko REST-a, a zatim prelazak na GraphQL radi sinhronizacije proizvoda i porudžbina.",
      "bc-4": "REST API-ji za WooCommerce i Amazon API za višekanalnu prodaju proizvoda i povezivanje prodavnica.",
      "bc-5": "n8n tokovi za DecoNetwork, za automatsku obradu porudžbina i sinhronizaciju proizvoda.",
      "bc-6": "Integracija Stanley/Stella API-ja za praćenje zaliha i automatsko ažuriranje dostupnosti proizvoda.",
      "bc-7": "Kompletan backend u Laravelu i frontend u Vue.js-u, sa strukturiranim podacima u MySQL-u.",
      "dam-1": "Svakodnevni rad sa Laravelom, Laragonom, PHP-om, MySQL-om, JavaScriptom, Vue.js-om, Node.js-om, Gitom, HTML-om, CSS-om, AJAX-om, jQueryjem, Composerom, Bootstrapom, REST API-jima, JSON-om i Postmanom.",
      "dam-2": "Povremeno React Native, Java, Android Studio i Eclipse za mobilni razvoj i razvoj za više platformi.",
      "dam-3": "Praktičan rad sa blockchain tehnologijama i platformama za kriptovalute.",
      "dam-4": "Hosting i postavljanje sajtova preko FTP-a, PuTTY-ja, FileZille, AWS-a i Herokua.",
      "dam-5": "Pregledi koda i razgovori o arhitekturi, uz nadzor i otklanjanje problema na produkcionim sistemima.",
      "dam-6": "Funkcija štednje u Ethereumu na platformi " + bcx + ", sa Laravelom na backendu i HTML-om na frontendu.",
      "dam-7": "Doprinos aplikaciji " + lova + ", React Native aplikaciji za digitalna plaćanja i finansijske transakcije.",
      "job-ts": "Specijalistkinja tehničke podrške",
      "mtel-1": "Tehnička podrška krajnjim korisnicima, uz brzo rješavanje problema da rad ne bi stajao.",
      education: "Obrazovanje",
      "edu-degree": "Diplomirani profesor matematike i informatike",
      "edu-faculty": "Prirodno-matematički fakultet",
      "edu-major": "Smjer profesor matematike i informatike.",
      "edu-school": "Gimnazija",
      "edu-track": "Prirodno-matematički smjer.",
      certs: "Certifikati",
      "cert-1": "Certifikat za učešće na kampu mladih programera u organizaciji Lanaca",
      "cert-2": "Certifikat Udruženja inovatora",
      "cert-3": "Certifikat o obuci iz preduzetništva",
      "cert-4": "Certifikat za učenje kineskog jezika",
      "cert-5": "Certifikat za učenje engleskog jezika",
      projects: "Projekti",
      "projects-lead": "Lični projekti koje sam osmislila i napravila od nule.",
      "aria-warehouse": "Demo za Warehouse CMS",
      "proj-warehouse": "Full-stack sistem za upravljanje skladištem, napravljen u Laravelu i Vue.js-u. Obuhvata praćenje zaliha, više skladišta, nabavku, pristup po ulogama i izvještaje, uz responzivni admin dashboard i potpuno popunjen demo.",
      "aria-geoin": "Sajt GEOIN Nekretnine",
      "proj-geoin": "Moderan, responzivan sajt za nekretnine u PHP-u, razvijen uz pomoć vještačke inteligencije. Uključuje oglase, naprednu pretragu i filtere, poseban admin dashboard i upravljanje sadržajem. Sajt sam i postavila, a i dalje ga hostujem i održavam.",
      "aria-party": "My Perfect Party na Google Playu",
      "proj-party": "React Native aplikacija za planiranje događaja. Obuhvata liste gostiju i RSVP, raspored sjedenja, troškove, zadatke i ček-liste, pozivnice, statistiku i PDF izvoz. Napravila sam interfejs, logiku aplikacije, Android izdanje i objavu na Google Playu.",
      "aria-dress": "Dress Up and Makeup Girls na Google Playu",
      "proj-dress": "Unity igra o modi i ljepoti u kojoj igrači isprobavaju odjeću, šminku i frizure i prave vlastite izglede. Radila sam razvoj igre i vizuelni stil za Android izdanje.",
      "aria-flip": "FLIP IT na Google Playu",
      "proj-flip": "Zbirka logičkih zagonetki u React Nativeu, napravljena uz pomoć vještačke inteligencije. Igrači slažu pločice, rješavaju Sudoku i otkrivaju tajni kod."
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

    document.querySelectorAll(".lang-switch button").forEach(function (button) {
      button.setAttribute("aria-pressed", button.getAttribute("data-lang") === lang ? "true" : "false");
    });

    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (error) {}
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
  } catch (error) {}
  if (saved !== "en") apply(saved);
})();
