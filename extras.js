/* ============================================================
   AutoMind AI — Extra UI Components JS
   (Search, Cookie Banner, Back-to-Top, Toast, Filter helpers)
   ============================================================ */

// ===== TOAST NOTIFICATIONS =====
function showToast(msg, duration = 3000) {
  const container = document.getElementById('toastContainer');
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = msg;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), duration);
}

// ===== BACK TO TOP =====
function initBackToTop() {
  const btn = document.getElementById('backToTop');
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 500);
  });
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ===== COOKIE BANNER =====
function initCookieBanner() {
  const banner = document.getElementById('cookieBanner');
  const accepted = localStorage.getItem('automind_cookies');
  if (!accepted) {
    setTimeout(() => banner.classList.add('visible'), 1500);
  }
  document.getElementById('cookieAccept').addEventListener('click', () => {
    localStorage.setItem('automind_cookies', 'accepted');
    banner.classList.remove('visible');
    showToast('✅ Cookies accepted. Thank you!');
  });
  document.getElementById('cookieDecline').addEventListener('click', () => {
    localStorage.setItem('automind_cookies', 'declined');
    banner.classList.remove('visible');
  });
}

// ===== SEARCH =====
function initSearch() {
  const overlay = document.getElementById('searchOverlay');
  const input   = document.getElementById('searchInput');
  const results = document.getElementById('searchResults');
  const closeBtn = document.getElementById('searchClose');

  // Open search with Ctrl+K or /
  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey && e.key === 'k') || (e.key === '/' && document.activeElement.tagName !== 'INPUT')) {
      e.preventDefault();
      overlay.style.display = 'flex';
      setTimeout(() => input.focus(), 50);
    }
    if (e.key === 'Escape') {
      overlay.style.display = 'none';
      input.value = '';
    }
  });

  closeBtn.addEventListener('click', () => {
    overlay.style.display = 'none';
    input.value = '';
  });

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      overlay.style.display = 'none';
      input.value = '';
    }
  });

  input.addEventListener('input', () => {
    const q = input.value.toLowerCase().trim();
    if (!q) {
      results.innerHTML = '<div class="search-empty">Start typing to search articles and projects...</div>';
      return;
    }

    // Search articles
    const articleMatches = (typeof ARTICLES !== 'undefined' ? ARTICLES : [])
      .filter(a => a.title.toLowerCase().includes(q) || a.excerpt.toLowerCase().includes(q) || a.tag.toLowerCase().includes(q))
      .slice(0, 4);

    // Search projects
    const projectMatches = (typeof PROJECTS !== 'undefined' ? PROJECTS : [])
      .filter(p => p.title.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q) || p.tags.join(' ').toLowerCase().includes(q))
      .slice(0, 3);

    if (articleMatches.length === 0 && projectMatches.length === 0) {
      results.innerHTML = `<div class="search-empty">No results for "<strong>${q}</strong>" — try different keywords</div>`;
      return;
    }

    let html = '';
    if (articleMatches.length > 0) {
      html += `<p style="font-size:0.72rem;color:var(--text-muted);padding:8px 12px 4px;font-family:var(--font-primary);font-weight:700;text-transform:uppercase;letter-spacing:0.08em;">Articles</p>`;
      html += articleMatches.map(a => `
        <div class="search-result-item" onclick="overlay.style.display='none'; openArticle(${a.id})">
          <div class="search-result-icon">${a.emoji}</div>
          <div>
            <div class="search-result-title">${highlight(a.title, q)}</div>
            <div class="search-result-cat">${a.tag} • ${a.date}</div>
          </div>
        </div>
      `).join('');
    }

    if (projectMatches.length > 0) {
      html += `<p style="font-size:0.72rem;color:var(--text-muted);padding:12px 12px 4px;font-family:var(--font-primary);font-weight:700;text-transform:uppercase;letter-spacing:0.08em;">Projects</p>`;
      html += projectMatches.map(p => `
        <div class="search-result-item" onclick="document.getElementById('searchOverlay').style.display='none'; openProject(${p.id})">
          <div class="search-result-icon">${p.icon}</div>
          <div>
            <div class="search-result-title">${highlight(p.title, q)}</div>
            <div class="search-result-cat">${p.level.toUpperCase()} Level • ${p.tags[0]}</div>
          </div>
        </div>
      `).join('');
    }

    results.innerHTML = html;
  });
}

function highlight(text, query) {
  const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
  return text.replace(regex, '<mark style="background:rgba(99,102,241,0.3);color:white;border-radius:3px;padding:0 2px;">$1</mark>');
}

// ===== TRENDING FILTER =====
function filterAndScroll(category) {
  // Activate the correct filter button
  document.querySelectorAll('.filter-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.filter === category);
  });
  // Update global filter and re-render
  if (typeof currentFilter !== 'undefined') {
    window.currentFilter = category;
  }
  // Trigger click on the right filter button
  const btn = document.querySelector(`.filter-btn[data-filter="${category}"]`);
  if (btn) btn.click();
  // Scroll to hub
  document.getElementById('hub').scrollIntoView({ behavior: 'smooth' });
  showToast(`🔍 Filtered: ${category.toUpperCase()} articles`);
}

// ===== SEARCH KEYBOARD SHORTCUT HINT =====
function addSearchHintToNav() {
  const navActions = document.querySelector('.nav-actions');
  if (!navActions) return;
  const hint = document.createElement('button');
  hint.id = 'searchTriggerBtn';
  hint.style.cssText = `
    display:flex;align-items:center;gap:8px;
    padding:8px 14px;
    background:rgba(255,255,255,0.05);
    border:1px solid rgba(255,255,255,0.1);
    border-radius:9px;
    font-size:0.8rem;color:var(--text-muted);
    cursor:pointer;font-family:'Outfit',sans-serif;
    transition:all 0.3s ease;
  `;
  hint.innerHTML = `🔍 <span style="color:var(--text-muted)">Search</span><kbd style="background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.12);border-radius:5px;padding:1px 6px;font-size:0.7rem;color:var(--text-muted);font-family:monospace;">Ctrl K</kbd>`;
  hint.addEventListener('mouseenter', () => hint.style.borderColor = 'rgba(99,102,241,0.4)');
  hint.addEventListener('mouseleave', () => hint.style.borderColor = 'rgba(255,255,255,0.1)');
  hint.addEventListener('click', () => {
    document.getElementById('searchOverlay').style.display = 'flex';
    setTimeout(() => document.getElementById('searchInput').focus(), 50);
  });
  navActions.insertBefore(hint, navActions.firstChild);
}

// ===== READING PROGRESS BAR =====
function initReadingProgress() {
  const bar = document.createElement('div');
  bar.id = 'readingProgress';
  bar.style.cssText = `
    position:fixed;top:70px;left:0;right:0;height:3px;
    background:linear-gradient(90deg,#6366f1,#8b5cf6,#06b6d4);
    z-index:999;transform-origin:left;transform:scaleX(0);
    transition:transform 0.1s linear;
  `;
  document.body.appendChild(bar);

  window.addEventListener('scroll', () => {
    const docH = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docH > 0 ? window.scrollY / docH : 0;
    bar.style.transform = `scaleX(${progress})`;
  });
}

// ===== ARTICLE SHARE ON OPEN =====
function initArticleShareHint() {
  // Show toast when article opens
  const origOpen = window.openArticle;
  if (origOpen) {
    window.openArticle = function(id) {
      origOpen(id);
      setTimeout(() => showToast('📖 Tip: Press Ctrl+K to search any topic!'), 2000);
    };
  }
}

// ===== QUIZ FLOATING CTA SMART HIDE =====
function initSmartFloatingCta() {
  const cta = document.getElementById('floatingCta');
  let lastY = 0;
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (y < 400) { cta.style.opacity = '0'; cta.style.pointerEvents = 'none'; return; }
    if (y < lastY) {
      cta.style.opacity = '1'; cta.style.pointerEvents = 'all';
    } else {
      cta.style.opacity = y > 200 ? '1' : '0';
    }
    lastY = y;
  });
  cta.addEventListener('click', () => {
    document.getElementById('quiz').scrollIntoView({ behavior: 'smooth' });
    showToast('🧠 New quiz questions loaded!');
  });
}

// ===== EXPOSE GLOBAL =====
window.filterAndScroll = filterAndScroll;
window.showToast = showToast;

// ===== INIT EXTRAS =====
document.addEventListener('DOMContentLoaded', () => {
  initBackToTop();
  initCookieBanner();
  initSearch();
  addSearchHintToNav();
  initReadingProgress();
  initSmartFloatingCta();

  // Welcome toast
  setTimeout(() => showToast('👋 Welcome to AutoMind AI! Press Ctrl+K to search.'), 3000);
});
