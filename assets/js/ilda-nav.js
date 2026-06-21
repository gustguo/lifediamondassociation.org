(function() {
  var navData = {
    logo: 'ILDA',
    sub: 'International',
    links: [
      { label: 'About', href: 'about/mission.html' },
      { label: 'Standards', href: 'standards/traceability.html' },
      { label: 'Registry', href: 'index.html#registry' },
      { label: 'Membership', href: 'membership/directory.html' },
      { label: 'News', href: 'news/index.html' },
      { label: 'Education', href: 'education/consumer-guide.html' },
      { label: 'Contact', href: 'contact.html' }
    ]
  };

  var footerData = {
    brand: 'ILDA',
    desc: 'International Life Diamond Association — Independent certification and traceability standards for the life diamond industry.',
    hq: 'Headquarters',
    address: ['11 Mody Road, Tsim Sha Tsui', 'Kowloon, Hong Kong SAR', 'China', 'info@lifediamondassociation.org'],
    docs: 'Documentation',
    docLinks: [
      { label: 'Laboratory Guidelines', href: '#' },
      { label: 'Consumer Rights Charter', href: '#' },
      { label: 'Dispute Resolution', href: '#' },
      { label: 'Press & Media', href: 'news/index.html' }
    ],
    copy: '© 2026 International Life Diamond Association. All rights reserved.',
    legal: ['Privacy Policy', 'Legal Terms']
  };

  // Build nav
  var navHTML = '<nav class="nav" id="main-nav">' +
    '<a href="index.html" class="nav-logo">' +
      '<span class="font-serif">' + navData.logo + '</span>' +
      '<span class="text-sub">' + navData.sub + '</span>' +
    '</a>' +
    '<ul class="nav-links">';
  
  navData.links.forEach(function(link) {
    navHTML += '<li><a href="' + link.href + '" class="hover-line">' + link.label + '</a></li>';
  });
  
  navHTML += '</ul>' +
    '<button class="nav-mobile-toggle" onclick="toggleMobileMenu()" aria-label="Menu">' +
      '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>' +
    '</button>' +
    '</nav>' +
    '<div class="mobile-menu" id="mobile-menu">' +
    '<button class="mobile-menu-close" onclick="toggleMobileMenu()" aria-label="Close">×</button>';
  
  navData.links.forEach(function(link) {
    navHTML += '<a href="' + link.href + '" onclick="toggleMobileMenu()">' + link.label + '</a>';
  });
  
  navHTML += '</div>';

  var navEl = document.getElementById('ilda-nav');
  if (navEl) navEl.outerHTML = navHTML;

  // Build footer
  var footerHTML = '<footer class="footer" id="ilda-footer"><div class="container">' +
    '<div class="footer-grid">' +
    '<div>' +
      '<span class="footer-brand">' + footerData.brand + '</span>' +
      '<p class="footer-desc">' + footerData.desc + '</p>' +
    '</div>' +
    '<div>' +
      '<h4 class="footer-title">' + footerData.hq + '</h4>' +
      '<address class="not-italic" style="font-size:0.875rem;color:#d1d5db;font-weight:300;line-height:2;">';
  
  footerData.address.forEach(function(line, i) {
    if (line.indexOf('@') > 0) {
      footerHTML += '<a href="mailto:' + line + '" style="color:#d1d5db;text-decoration:none;transition:color 0.3s;" onmouseover="this.style.color=\'#fff\'" onmouseout="this.style.color=\'#d1d5db\'">' + line + '</a>';
    } else {
      footerHTML += line;
    }
    if (i < footerData.address.length - 1) footerHTML += '<br>';
  });
  
  footerHTML += '</address></div>' +
    '<div>' +
      '<h4 class="footer-title">' + footerData.docs + '</h4>' +
      '<ul class="footer-links">';
  
  footerData.docLinks.forEach(function(link) {
    footerHTML += '<li><a href="' + link.href + '" class="hover-line">' + link.label + '</a></li>';
  });
  
  footerHTML += '</ul></div></div>' +
    '<div class="footer-bottom">' +
      '<p>' + footerData.copy + '</p>' +
      '<div>' +
        '<a href="#">' + footerData.legal[0] + '</a>' +
        '<a href="#">' + footerData.legal[1] + '</a>' +
      '</div>' +
    '</div>' +
    '</div></footer>';

  var footerEl = document.getElementById('ilda-footer');
  if (footerEl) footerEl.outerHTML = footerHTML;

  // Mobile menu toggle
  window.toggleMobileMenu = function() {
    var menu = document.getElementById('mobile-menu');
    if (menu) menu.classList.toggle('open');
  };

  // Scroll reveal
  function initScrollReveal() {
    var reveals = document.querySelectorAll('.reveal-up');
    if (!reveals.length) return;

    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    reveals.forEach(function(el) {
      observer.observe(el);
    });
  }

  // Stagger reveal
  function initStaggerReveal() {
    var staggers = document.querySelectorAll('.stagger-reveal');
    if (!staggers.length) return;

    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    staggers.forEach(function(el) {
      observer.observe(el);
    });
  }

  // Counter animation
  function initCounters() {
    var counters = document.querySelectorAll('.counter');
    if (!counters.length) return;

    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          var el = entry.target;
          var target = parseInt(el.dataset.target);
          var suffix = el.dataset.suffix || '';
          var duration = 2000;
          var startTime = null;

          function animate(currentTime) {
            if (!startTime) startTime = currentTime;
            var progress = Math.min((currentTime - startTime) / duration, 1);
            var easeProgress = 1 - Math.pow(1 - progress, 3);
            var current = Math.floor(easeProgress * target);
            el.textContent = current + suffix;
            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              el.textContent = target + suffix;
            }
          }
          requestAnimationFrame(animate);
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(function(el) {
      observer.observe(el);
    });
  }

  // Init
  document.addEventListener('DOMContentLoaded', function() {
    initScrollReveal();
    initStaggerReveal();
    initCounters();
  });

  // Re-init after nav/footer injection (since they run synchronously)
  initScrollReveal();
  initStaggerReveal();
  initCounters();
})();
