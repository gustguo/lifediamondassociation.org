(function() {
  // Language-aware navigation
  var navData = {
    en: {
      logo: 'ILDA',
      links: [
        { label: 'About', href: 'about/mission.html', children: [
          { label: 'Mission', href: 'about/mission.html' },
          { label: 'Governance', href: 'about/governance.html' }
        ]},
        { label: 'Standards', href: 'standards/traceability.html', children: [
          { label: 'Traceability', href: 'standards/traceability.html' },
          { label: 'Verify', href: 'standards/verify.html' }
        ]},
        { label: 'Membership', href: 'membership/directory.html', children: [
          { label: 'Directory', href: 'membership/directory.html' },
          { label: 'Benefits', href: 'membership/benefits.html' },
          { label: 'Apply', href: 'membership/apply.html' }
        ]},
        { label: 'News', href: 'news/index.html' },
        { label: 'Education', href: 'education/consumer-guide.html' },
        { label: 'Contact', href: 'contact.html' }
      ],
      cta: 'Verify Certificate',
      ctaHref: 'standards/verify.html'
    },
    zh: {
      logo: 'ILDA',
      links: [
        { label: '关于', href: 'about/mission.html', children: [
          { label: '使命', href: 'about/mission.html' },
          { label: '治理', href: 'about/governance.html' }
        ]},
        { label: '标准', href: 'standards/traceability.html', children: [
          { label: '追溯', href: 'standards/traceability.html' },
          { label: '验证', href: 'standards/verify.html' }
        ]},
        { label: '会员', href: 'membership/directory.html', children: [
          { label: '名录', href: 'membership/directory.html' },
          { label: '权益', href: 'membership/benefits.html' },
          { label: '申请', href: 'membership/apply.html' }
        ]},
        { label: '新闻', href: 'news/index.html' },
        { label: '教育', href: 'education/consumer-guide.html' },
        { label: '联系', href: 'contact.html' }
      ],
      cta: '验证证书',
      ctaHref: 'standards/verify.html'
    },
    'zh-hant': {
      logo: 'ILDA',
      links: [
        { label: '關於', href: 'about/mission.html', children: [
          { label: '使命', href: 'about/mission.html' },
          { label: '治理', href: 'about/governance.html' }
        ]},
        { label: '標準', href: 'standards/traceability.html', children: [
          { label: '追溯', href: 'standards/traceability.html' },
          { label: '驗證', href: 'standards/verify.html' }
        ]},
        { label: '會員', href: 'membership/directory.html', children: [
          { label: '名錄', href: 'membership/directory.html' },
          { label: '權益', href: 'membership/benefits.html' },
          { label: '申請', href: 'membership/apply.html' }
        ]},
        { label: '新聞', href: 'news/index.html' },
        { label: '教育', href: 'education/consumer-guide.html' },
        { label: '聯繫', href: 'contact.html' }
      ],
      cta: '驗證證書',
      ctaHref: 'standards/verify.html'
    }
  };

  var footerData = {
    en: {
      brand: 'ILDA',
      desc: 'International Life Diamond Association — Independent certification and traceability standards for the life diamond industry.',
      about: 'About',
      aboutItems: ['Mission', 'Governance'],
      aboutLinks: ['about/mission.html', 'about/governance.html'],
      standards: 'Standards',
      standardItems: ['Traceability', 'Verify'],
      standardLinks: ['standards/traceability.html', 'standards/verify.html'],
      membership: 'Membership',
      memberItems: ['Directory', 'Benefits', 'Apply'],
      memberLinks: ['membership/directory.html', 'membership/benefits.html', 'membership/apply.html'],
      resources: 'Resources',
      resourceItems: ['News', 'Consumer Guide', 'Contact'],
      resourceLinks: ['news/index.html', 'education/consumer-guide.html', 'contact.html'],
      copy: '© 2026 ILDA. All rights reserved.',
      reg: 'Hong Kong Registered Non-Profit Association'
    },
    zh: {
      brand: 'ILDA',
      desc: '国际生命钻石协会 — 为生命钻石行业提供独立认证与追溯标准。',
      about: '关于',
      aboutItems: ['使命', '治理'],
      aboutLinks: ['about/mission.html', 'about/governance.html'],
      standards: '标准',
      standardItems: ['追溯', '验证'],
      standardLinks: ['standards/traceability.html', 'standards/verify.html'],
      membership: '会员',
      memberItems: ['名录', '权益', '申请'],
      memberLinks: ['membership/directory.html', 'membership/benefits.html', 'membership/apply.html'],
      resources: '资源',
      resourceItems: ['新闻', '消费者指南', '联系'],
      resourceLinks: ['news/index.html', 'education/consumer-guide.html', 'contact.html'],
      copy: '© 2026 ILDA. 保留所有权利。',
      reg: '香港注册非营利协会'
    },
    'zh-hant': {
      brand: 'ILDA',
      desc: '國際生命鑽石協會 — 為生命鑽石行業提供獨立認證與追溯標準。',
      about: '關於',
      aboutItems: ['使命', '治理'],
      aboutLinks: ['about/mission.html', 'about/governance.html'],
      standards: '標準',
      standardItems: ['追溯', '驗證'],
      standardLinks: ['standards/traceability.html', 'standards/verify.html'],
      membership: '會員',
      memberItems: ['名錄', '權益', '申請'],
      memberLinks: ['membership/directory.html', 'membership/benefits.html', 'membership/apply.html'],
      resources: '資源',
      resourceItems: ['新聞', '消費者指南', '聯繫'],
      resourceLinks: ['news/index.html', 'education/consumer-guide.html', 'contact.html'],
      copy: '© 2026 ILDA. 保留所有權利。',
      reg: '香港註冊非營利協會'
    }
  };

  // Detect language
  var pathname = window.location.pathname;
  var lang = 'en';
  if (pathname.includes('/zh-hant/')) lang = 'zh-hant';
  else if (pathname.includes('/zh/')) lang = 'zh';

  var nav = navData[lang];
  var footer = footerData[lang];

  // Build nav
  var navHTML = '<nav class="nav" id="main-nav"><div class="nav-inner">' +
    '<a href="index.html" class="nav-logo">' + nav.logo + '</a>' +
    '<ul class="nav-links">';
  
  nav.links.forEach(function(link) {
    navHTML += '<li><a href="' + link.href + '">' + link.label + '</a></li>';
  });
  
  navHTML += '</ul>' +
    '<a href="' + nav.ctaHref + '" class="nav-cta">' + nav.cta + '</a>' +
    '<button class="nav-mobile-toggle" onclick="toggleMobileMenu()">' +
    '<span></span><span></span><span></span></button>' +
    '</div></nav>';

  var navEl = document.getElementById('ilda-nav');
  if (navEl) navEl.outerHTML = navHTML;

  // Build footer
  function buildLinks(items, links) {
    var html = '';
    items.forEach(function(item, i) {
      html += '<li><a href="' + links[i] + '">' + item + '</a></li>';
    });
    return html;
  }

  var footerHTML = '<footer class="footer"><div class="container"><div class="footer-grid">' +
    '<div><div class="footer-brand">' + footer.brand + '</div><p class="footer-desc">' + footer.desc + '</p></div>' +
    '<div><div class="footer-title">' + footer.about + '</div><ul class="footer-links">' + buildLinks(footer.aboutItems, footer.aboutLinks) + '</ul></div>' +
    '<div><div class="footer-title">' + footer.standards + '</div><ul class="footer-links">' + buildLinks(footer.standardItems, footer.standardLinks) + '</ul></div>' +
    '<div><div class="footer-title">' + footer.membership + '</div><ul class="footer-links">' + buildLinks(footer.memberItems, footer.memberLinks) + '</ul></div>' +
    '</div>' +
    '<div class="footer-bottom"><div>' + footer.copy + '</div><div>' + footer.reg + '</div></div>' +
    '</div></footer>';

  var footerEl = document.getElementById('ilda-footer');
  if (footerEl) footerEl.outerHTML = footerHTML;

  // Scroll effect for nav
  window.addEventListener('scroll', function() {
    var nav = document.getElementById('main-nav');
    if (nav) {
      if (window.scrollY > 50) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    }
  });

  // Scroll reveal
  function initScrollReveal() {
    var reveals = document.querySelectorAll('.reveal');
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
          var start = 0;
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

  // Mobile menu toggle
  window.toggleMobileMenu = function() {
    var nav = document.getElementById('main-nav');
    nav.classList.toggle('mobile-open');
  };

  // Init
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      initScrollReveal();
      initCounters();
    });
  } else {
    initScrollReveal();
    initCounters();
  }
})();
