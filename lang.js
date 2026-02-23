/* ================================================================
   MUSLIM APP — SYSTÈME DE LANGUES
   Français (fr) & Wolof (wo)
   ================================================================ */

var LANG = {

  /* ============================
     INTERFACE GÉNÉRALE
     ============================ */
  home_greeting_morning: {
    fr: '🌅 Bonjour',
    wo: '🌅 Jàmm nga fanaan'
  },
  home_greeting_afternoon: {
    fr: '☀️ Bon après-midi',
    wo: '☀️ Jàmm nga yendoo'
  },
  home_greeting_evening: {
    fr: '🌆 Bonsoir',
    wo: '🌆 Jàmm nga yendoo'
  },
  home_greeting_night: {
    fr: '🌙 Bonne nuit',
    wo: '🌙 Fanaanal jàmm'
  },
  app_tagline: {
    fr: 'Coran · Invocations · Dhikr',
    wo: 'Alkuraan · Ñaan · Dikr'
  },
  verse_of_day: {
    fr: '✦ Verset du jour ✦',
    wo: '✦ Aayatu bés bi ✦'
  },

  /* ============================
     FEATURE CARDS
     ============================ */
  card_quran_title: {
    fr: 'Le Coran',
    wo: 'Alkuraan gi'
  },
  card_quran_desc: {
    fr: 'Lisez et écoutez les 30 Juz et 114 Sourates',
    wo: 'Jàng te déglu 30 Juz ak 114 Surat yi'
  },
  card_duas_title: {
    fr: 'Invocations',
    wo: 'Ñaanal yi'
  },
  card_duas_desc: {
    fr: 'Duas du matin, soir, prière, repas...',
    wo: 'Ñaan yi ci suba, ngoon, julli, lekk...'
  },
  card_dhikr_title: {
    fr: 'Dhikr & Tasbih',
    wo: 'Dikr ak Tasbih'
  },
  card_dhikr_desc: {
    fr: 'Compteur de dhikr : SubhanAllah, Alhamdulillah...',
    wo: 'Waaraange dikr : SubhanAllah, Alhamdulillah...'
  },
  card_soon_title: {
    fr: 'Bientôt',
    wo: 'Ci kanam'
  },
  card_soon_desc: {
    fr: 'Horaires de prière, Tasbih, Qibla...',
    wo: 'Waxtu julli, Tasbih, Qibla...'
  },

  /* ============================
     SETTINGS
     ============================ */
  settings: {
    fr: '⚙️ Paramètres',
    wo: '⚙️ Tëralinu yi'
  },
  settings_reciter: {
    fr: 'Récitateur',
    wo: 'Kiy jàng Alkuraan bi'
  },
  settings_translation: {
    fr: 'Traduction du Coran',
    wo: 'Tekki Alkuraan bi'
  },
  settings_language: {
    fr: 'Langue de l\'application',
    wo: 'Làkku jëfandikukaay bi'
  },
  close: {
    fr: '✓ Fermer',
    wo: '✓ Tëj'
  },

  /* ============================
     STATS
     ============================ */
  stat_juz_read: {
    fr: 'Juz lus',
    wo: 'Juz yi jàng'
  },
  stat_surahs: {
    fr: 'Sourates',
    wo: 'Surat yi'
  },
  stat_verses: {
    fr: 'Versets',
    wo: 'Aaya yi'
  },
  stat_dhikr: {
    fr: 'Adhkar',
    wo: 'Dikr yi'
  },

  /* ============================
     QURAN PAGE
     ============================ */
  back_home: {
    fr: '← Accueil',
    wo: '← Dallu'
  },
  back_return: {
    fr: '← Retour',
    wo: '← Dellu'
  },
  noble_quran: {
    fr: 'Le Noble Coran',
    wo: 'Alkuraan bu sell bi'
  },
  progression: {
    fr: 'Progression',
    wo: 'Yeesalaat'
  },
  by_juz: {
    fr: '📖 Par Juz',
    wo: '📖 Ci Juz'
  },
  by_surah: {
    fr: '📋 Par Sourate',
    wo: '📋 Ci Surat'
  },
  search_surah: {
    fr: 'Rechercher une sourate...',
    wo: 'Seet ab Surat...'
  },
  read: {
    fr: '📖 Lire',
    wo: '📖 Jàng'
  },
  marked_read: {
    fr: '✓ Terminé',
    wo: '✓ Jeex na'
  },
  mark_read: {
    fr: '+ Lu',
    wo: '+ Jàng na'
  },
  listen: {
    fr: '▶ Écouter',
    wo: '▶ Déglu'
  },
  playing_now: {
    fr: '⏸ En cours',
    wo: '⏸ Yaa ngi dem'
  },
  verses: {
    fr: 'versets',
    wo: 'aaya'
  },
  meccan: {
    fr: '🕋 Mecquoise',
    wo: '🕋 Makka'
  },
  medinan: {
    fr: '🕌 Médinoise',
    wo: '🕌 Madiina'
  },
  verse: {
    fr: 'Verset',
    wo: 'Aaya'
  },
  font_size: {
    fr: 'Taille',
    wo: 'Dayoo'
  },
  prev_surah: {
    fr: '← Sourate préc.',
    wo: '← Surat bi jiitu'
  },
  next_surah: {
    fr: 'Sourate suiv. →',
    wo: 'Surat bi toftal →'
  },

  /* ============================
     AUDIO
     ============================ */
  repeat_on: {
    fr: '🔁 Répétition activée',
    wo: '🔁 Wàññi jàng'
  },
  repeat_off: {
    fr: '🔁 Désactivée',
    wo: '🔁 Fomm na'
  },

  /* ============================
     SHARE
     ============================ */
  share_verse: {
    fr: '📤 Partager',
    wo: '📤 Séddoo'
  },
  share_copied: {
    fr: '📋 Verset copié !',
    wo: '📋 Aaya bi duppi na !'
  },

  /* ============================
     ERRORS
     ============================ */
  loading: {
    fr: 'Chargement...',
    wo: 'Yaa ngi yab...'
  },
  error_loading: {
    fr: 'Erreur de chargement',
    wo: 'Njuumte ci yab bi'
  },
  check_connection: {
    fr: 'Vérifiez votre connexion internet',
    wo: 'Seetal sa internet bi'
  },
  retry: {
    fr: '🔄 Réessayer',
    wo: '🔄 Jéemaat'
  },

  /* ============================
     DUAS PAGE
     ============================ */
  invocations_title: {
    fr: 'Invocations & Adhkar',
    wo: 'Ñaanal yi ak Dikr yi'
  },
  categories: {
    fr: '← Catégories',
    wo: '← Wàll yi'
  },
  texts: {
    fr: 'textes',
    wo: 'bind yi'
  },
  repeat_times: {
    fr: 'À répéter',
    wo: 'Wàññi ko'
  },

  /* ============================
     DUAS CATEGORIES
     ============================ */
  cat_morning: {
    fr: 'Adhkar du Matin',
    wo: 'Dikru suba si'
  },
  cat_evening: {
    fr: 'Adhkar du Soir',
    wo: 'Dikru ngoon si'
  },
  cat_after_salah: {
    fr: 'Après la Prière',
    wo: 'Ginnaaw julli gi'
  },
  cat_sleep: {
    fr: 'Sommeil & Réveil',
    wo: 'Nelaw ak Xëy'
  },
  cat_food: {
    fr: 'Repas',
    wo: 'Lekk'
  },
  cat_travel: {
    fr: 'Voyage',
    wo: 'Tukki'
  },
  cat_protection: {
    fr: 'Protection',
    wo: 'Aar'
  },
  cat_forgiveness: {
    fr: 'Pardon & Repentir',
    wo: 'Baal ak Tuub'
  },
  cat_parents: {
    fr: 'Pour les Parents',
    wo: 'Ndey ak Baay'
  },
  cat_quran_duas: {
    fr: 'Duas du Coran',
    wo: 'Ñaanu Alkuraan'
  },

  /* ============================
     DHIKR PAGE
     ============================ */
  dhikr_title: {
    fr: 'Dhikr & Tasbih',
    wo: 'Dikr ak Tasbih'
  },
  completed: {
    fr: 'terminés',
    wo: 'jeex nañu'
  },
  reset: {
    fr: '🔄 Réinitialiser',
    wo: '🔄 Dooraat'
  },
  reset_all: {
    fr: '🔄 Tout réinitialiser',
    wo: '🔄 Dooraat lépp'
  },
  reset_confirm: {
    fr: 'Réinitialiser tous les compteurs ?',
    wo: 'Dooraat waaraange yi yépp ?'
  },
  dhikr_done: {
    fr: '✅ BarakAllahu fik !',
    wo: '✅ BarakAllahu fiik !'
  },
  all_done_title: {
    fr: 'Tous les dhikr sont terminés !',
    wo: 'Dikr yi yépp jeex nañu !'
  },

  /* ============================
     FOOTER
     ============================ */
  footer_credit: {
    fr: 'Sadaqa Jariya',
    wo: 'Sarax bu sore'
  }
};


/* ================================================================
   FONCTIONS DU SYSTÈME DE LANGUE
   ================================================================ */

/* Lire la langue actuelle */
function getCurrentLang() {
  return localStorage.getItem('q_lang') || 'fr';
}

/* Changer la langue */
function setLang(lang) {
  localStorage.setItem('q_lang', lang);
  return lang;
}

/* Traduire une clé */
function t(key) {
  var lang = getCurrentLang();
  if (LANG[key]) {
    return LANG[key][lang] || LANG[key]['fr'] || key;
  }
  return key;
}

/* Salutation selon l'heure */
function getGreeting() {
  var h = new Date().getHours();
  if (h >= 5 && h < 12)  return t('home_greeting_morning');
  if (h >= 12 && h < 17) return t('home_greeting_afternoon');
  if (h >= 17 && h < 21) return t('home_greeting_evening');
  return t('home_greeting_night');
}

/* ================================================================
   RAFRAÎCHIR TOUS LES TEXTES DE LA PAGE
   Fonctionne sur TOUTES les pages (index, quran, duas, dhikr)
   ================================================================ */
function refreshLang() {
  /* 1. Mettre à jour tous les éléments avec data-i18n */
  document.querySelectorAll('[data-i18n]').forEach(function(el) {
    var key = el.getAttribute('data-i18n');
    if (LANG[key]) {
      /* Pour les inputs (placeholder) */
      if (el.tagName === 'INPUT') {
        el.placeholder = t(key);
      } else {
        el.textContent = t(key);
      }
    }
  });

  /* 2. Mettre à jour le greeting si présent */
  var greetEl = document.getElementById('greeting');
  if (greetEl) greetEl.textContent = getGreeting();

  /* 3. Mettre à jour les boutons de langue */
  var btnFr = document.getElementById('langFr');
  var btnWo = document.getElementById('langWo');
  var lang = getCurrentLang();
  if (btnFr) btnFr.classList.toggle('active', lang === 'fr');
  if (btnWo) btnWo.classList.toggle('active', lang === 'wo');

  /* 4. Appeler le callback spécifique à la page si défini */
  if (typeof onLangChanged === 'function') {
    onLangChanged();
  }
}

/* Changer de langue (appelé par les boutons) */
function switchLang(lang) {
  setLang(lang);
  refreshLang();
}