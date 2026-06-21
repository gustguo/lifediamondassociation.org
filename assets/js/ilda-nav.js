(function() {
  function init() {
    var pathname = window.location.pathname;
    var pathParts = pathname.split('/').filter(function(p) { return p; });

    var lang = 'en';
    var pagePath = '';

    if (pathParts[0] === 'zh') {
      lang = 'zh';
      pagePath = pathParts.slice(1).join('/');
    } else if (pathParts[0] === 'zh-hant') {
      lang = 'zh-hant';
      pagePath = pathParts.slice(1).join('/');
    } else if (pathParts[0] === 'en') {
      lang = 'en';
      pagePath = pathParts.slice(1).join('/');
    } else {
      lang = 'en';
      pagePath = pathParts.join('/');
    }

    if (pagePath === '' || pagePath === 'index.html') {
      pagePath = 'index.html';
    }

    var langPrefix = '/' + lang + '/';

    var labels = {
      en: {
        nav: ['About', 'Membership', 'Standards', 'Education', 'News', 'Contact'],
        logo: 'ILDA',
        footer: {
          desc: 'An independent non-profit association dedicated to establishing transparency and trust standards for the life diamond industry.',
          copy: '© 2026 International Life Diamond Association. All rights reserved.',
          reg: 'Hong Kong Registered Association',
          about: 'About',
          membership: 'Membership',
          resources: 'Resources',
          aboutItems: ['Mission & Vision', 'Governance', 'History'],
          aboutLinks: ['about/mission.html', 'about/governance.html', 'about/history.html'],
          memberItems: ['Benefits', 'Directory', 'Apply'],
          memberLinks: ['membership/benefits.html', 'membership/directory.html', 'membership/apply.html'],
          resourceItems: ['Verify Certificate', 'Consumer Guide', 'Contact'],
          resourceLinks: ['standards/verify.html', 'education/consumer-guide.html', 'contact.html']
        }
      },
      zh: {
        nav: ['关于协会', '会员', '标准', '教育', '新闻', '联系'],
        logo: '国际生命钻石协会',
        footer: {
          desc: '一家独立的非营利协会，致力于为生命钻石行业建立透明和信任标准。',
          copy: '© 2026 国际生命钻石协会。保留所有权利。',
          reg: '香港注册协会',
          about: '关于',
          membership: '会员',
          resources: '资源',
          aboutItems: ['使命与愿景', '治理结构', '发展历程'],
          aboutLinks: ['about/mission.html', 'about/governance.html', 'about/history.html'],
          memberItems: ['会员权益', '会员名录', '申请加入'],
          memberLinks: ['membership/benefits.html', 'membership/directory.html', 'membership/apply.html'],
          resourceItems: ['验证证书', '消费者指南', '联系我们'],
          resourceLinks: ['standards/verify.html', 'education/consumer-guide.html', 'contact.html']
        }
      },
      'zh-hant': {
        nav: ['關於協會', '會員', '標準', '教育', '新聞', '聯繫'],
        logo: '國際生命鑽石協會',
        footer: {
          desc: '一家獨立的非營利協會，致力於為生命鑽石行業建立透明和信任標準。',
          copy: '© 2026 國際生命鑽石協會。保留所有權利。',
          reg: '香港註冊協會',
          about: '關於',
          membership: '會員',
          resources: '資源',
          aboutItems: ['使命與願景', '治理結構', '發展歷程'],
          aboutLinks: ['about/mission.html', 'about/governance.html', 'about/history.html'],
          memberItems: ['會員權益', '會員名錄', '申請加入'],
          memberLinks: ['membership/benefits.html', 'membership/directory.html', 'membership/apply.html'],
          resourceItems: ['驗證證書', '消費者指南', '聯繫我們'],
          resourceLinks: ['standards/verify.html', 'education/consumer-guide.html', 'contact.html']
        }
      }
    };

    var l = labels[lang];
    var navPaths = ['about/mission.html', 'membership/benefits.html', 'standards/traceability.html', 'education/consumer-guide.html', 'news/index.html', 'contact.html'];
    var currentDir = pagePath.split('/')[0];

    // Build nav links
    var navLinks = '';
    for (var i = 0; i < 6; i++) {
      var navDir = navPaths[i].split('/')[0];
      var isActive = currentDir === navDir || (currentDir === 'index.html' && navDir === 'index');
      var href = langPrefix + navPaths[i];
      navLinks += '<a href="' + href + '"' + (isActive ? ' class="active"' : '') + '>' + l.nav[i] + '</a>';
    }

    var enHref = '/en/' + pagePath;
    var zhHref = '/zh/' + pagePath;
    var zhHantHref = '/zh-hant/' + pagePath;

    var navHTML = '<nav class="nav"><div class="container nav-inner">' +
      '<a href="' + langPrefix + '" class="nav-logo">' +
      '<div class="nav-logo-icon" style="font-size:0.65rem;letter-spacing:0.05em;text-align:center;line-height:1.2;padding:0 4px;">INTERNATIONAL<br>LIFE DIAMOND<br>ASSOCIATION</div>' +
      '<span>' + l.logo + '</span></a>' +
      '<div class="nav-links">' + navLinks + '</div>' +
      '<div class="nav-lang">' +
      '<a href="' + enHref + '"' + (lang === 'en' ? ' class="active"' : '') + '>EN</a>' +
      '<a href="' + zhHref + '"' + (lang === 'zh' ? ' class="active"' : '') + '>简</a>' +
      '<a href="' + zhHantHref + '"' + (lang === 'zh-hant' ? ' class="active"' : '') + '>繁</a>' +
      '</div></div></nav>';

    var navEl = document.getElementById('ilda-nav');
    if (navEl) navEl.outerHTML = navHTML;

    // Build footer
    var f = l.footer;

    function buildLinks(items, links) {
      var html = '';
      for (var i = 0; i < items.length; i++) {
        html += '<li><a href="' + langPrefix + links[i] + '">' + items[i] + '</a></li>';
      }
      return html;
    }

    var footerHTML = '<footer class="footer"><div class="container">' +
      '<div class="footer-grid">' +
      '<div><div class="footer-brand">International Life Diamond Association</div>' +
      '<p class="footer-desc">' + f.desc + '</p>' +
      '<p class="footer-desc" style="margin-top:1rem;">' + f.reg + '<br>登记证号：79427899-001-12-25-5</p></div>' +
      '<div><div class="footer-title">' + f.about + '</div><ul class="footer-links">' + buildLinks(f.aboutItems, f.aboutLinks) + '</ul></div>' +
      '<div><div class="footer-title">' + f.membership + '</div><ul class="footer-links">' + buildLinks(f.memberItems, f.memberLinks) + '</ul></div>' +
      '<div><div class="footer-title">' + f.resources + '</div><ul class="footer-links">' + buildLinks(f.resourceItems, f.resourceLinks) + '</ul></div>' +
      '</div>' +
      '<div class="footer-bottom"><div>' + f.copy + '</div><div>' + f.reg + '</div></div>' +
      '</div></footer>';

    var footerEl = document.getElementById('ilda-footer');
    if (footerEl) footerEl.outerHTML = footerHTML;
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
