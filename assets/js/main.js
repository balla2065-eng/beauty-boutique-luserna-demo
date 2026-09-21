/* Beauty Boutique di Morina Valentina — proposta dimostrativa
   Script minimo: menu mobile, rivelazione allo scroll, anno corrente. */
(function () {
  'use strict';

  /* --- menu mobile --- */
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('nav-principale');

  function closeNav() {
    if (!toggle || !nav) return;
    nav.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  }

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', open ? 'false' : 'true');
      nav.classList.toggle('is-open', !open);
    });

    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) closeNav();
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) {
        closeNav();
        toggle.focus();
      }
    });

    document.addEventListener('click', function (e) {
      if (!nav.classList.contains('is-open')) return;
      if (!nav.contains(e.target) && !toggle.contains(e.target)) closeNav();
    });

    // tornando a desktop il menu riprende la forma orizzontale
    window.addEventListener('resize', function () {
      if (window.innerWidth >= 860) closeNav();
    });
  }

  /* --- rivelazione degli elementi allo scroll ---
     Controllo diretto su scroll/resize: nessun elemento puo' restare
     invisibile, nemmeno con scorrimenti rapidi o link diretti a una sezione. */
  var reveals = Array.prototype.slice.call(document.querySelectorAll('.reveal'));
  var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reveals.length) {
    if (reduced) {
      reveals.forEach(function (el) { el.classList.add('is-static'); });
    } else {
      var ticking = false;

      var check = function () {
        ticking = false;
        var limite = window.innerHeight * 0.92;
        for (var i = reveals.length - 1; i >= 0; i--) {
          var el = reveals[i];
          if (el.getBoundingClientRect().top < limite) {
            el.classList.add('is-visible');
            reveals.splice(i, 1);
          }
        }
        if (!reveals.length) {
          window.removeEventListener('scroll', onScroll);
          window.removeEventListener('resize', onScroll);
        }
      };

      var onScroll = function () {
        if (ticking) return;
        ticking = true;
        window.requestAnimationFrame(check);
      };

      window.addEventListener('scroll', onScroll, { passive: true });
      window.addEventListener('resize', onScroll);
      window.addEventListener('load', onScroll);
      check();
    }
  }

  /* --- altezza reale della CTA fissa, per non coprire il footer --- */
  var sticky = document.querySelector('.sticky-cta');
  if (sticky) {
    var misuraSticky = function () {
      var visibile = window.getComputedStyle(sticky).display !== 'none';
      var h = visibile ? sticky.offsetHeight : 0;
      document.documentElement.style.setProperty('--sticky-h', (h > 0 ? h : 0) + 'px');
    };
    misuraSticky();
    window.addEventListener('resize', misuraSticky);
    window.addEventListener('orientationchange', misuraSticky);
  }

  /* --- anno corrente nel footer --- */
  var anno = document.querySelector('[data-anno]');
  if (anno) anno.textContent = String(new Date().getFullYear());
})();
