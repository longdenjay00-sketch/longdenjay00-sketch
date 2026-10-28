import './style.css';

const ORACLES = [
  '“He who forgets to subtract 5 inches of take-up on a 1/2-inch EMT stub-up is condemned to the short-scrap bin.” — Codex Conduit, Fol. II',
  '“Animals stay outside the breaker panel. Fishy stays in the tank. The code book stays open on the bench.” — First Week Canon',
  '“Three agents walk into a Debian PRoot on a BYYBUO tablet: Antigravity plans the schema, Grok checks the roster, OpenCode runs the shell. Only one heavy process may live.” — Chronicles of aarch64',
  '“Bro really aligned the 45° center bend on the teardrop mark and hit the 22.5° wings without a dog-leg. +10,000 Journeyman Aura.” — BRaiNRoTRePoRt666X',
  '“Double the voltage on a fixed resistance, double the current, quadruple the power (P = E² / R). The math respects no excuses.” — Apparatus I',
  '“Turbo the Turtle, Sneaky the Slider, and Fishy send their regards from the broadcast studio.” — Societas Testudinis',
  '“Special commendation to my wife Precious and her boyfriend Pie for holding down the social calendar while I study AI in the Kali PRoot scriptorium and plot world domination.” — Dedication Fol. I',
];

const REPOS = [
  {
    folio: 'Codex I',
    name: 'conduit-bending',
    category: 'electrical',
    badge: 'Ordo Electricae',
    stack: 'Markdown · HTML · PDF',
    desc: 'Six-part EMT hand-bender curriculum: shoe marks, 90° stub-up, offset, 3-point & 4-point saddles, and the sacred 360° bend budget.',
    url: 'https://github.com/longdenjay00-sketch/conduit-bending',
  },
  {
    folio: 'Codex II',
    name: 'electrician',
    category: 'electrical',
    badge: 'Ordo Electricae',
    stack: 'HTML · CSS · Visual Plates',
    desc: "Week-one public treatise on Ohm's Law and NEC Chapter 9, Table 1 conduit fill limits (53% one conductor, 31% two, 40% three+).",
    url: 'https://github.com/longdenjay00-sketch/electrician',
  },
  {
    folio: 'Codex III',
    name: 'turbo-the-turtle',
    category: 'media',
    badge: 'Societas Testudinis',
    stack: 'Channel Chronicle',
    desc: 'First-anniversary archive for the Turbo-The-Turtle YouTube channel featuring Turbo, Sneaky the Slider, and Fishy.',
    url: 'https://github.com/longdenjay00-sketch/turbo-the-turtle',
  },
  {
    folio: 'Codex IV',
    name: 'LongCat-best-use-cases',
    category: 'media',
    badge: 'Media Alchemy',
    stack: 'Python · video_tools.py',
    desc: 'Automated video processing scripts and LongCat media workflows powering creator production pipelines.',
    url: 'https://github.com/longdenjay00-sketch/LongCat-best-use-cases',
  },
  {
    folio: 'Codex V',
    name: 'dotfiles',
    category: 'system',
    badge: 'Morpheus Construct',
    stack: 'React 19 · Vite · Bash/Zsh',
    desc: 'Matrix/Morpheus dotfiles for Termux Host (Blue Pill) and Kali PRoot Guest (Red Pill) with non-destructive setup.sh.',
    url: 'https://longdenjay00-sketch.github.io/dotfiles/',
  },
  {
    folio: 'Codex VI',
    name: 'longdenjay00-sketch',
    category: 'system',
    badge: 'Index Librorum',
    stack: 'Vite · GitHub Actions',
    desc: 'This Dark Academia & Field Engineering scriptorium, built on an aarch64 tablet and deployed via GitHub Pages.',
    url: 'https://github.com/longdenjay00-sketch/longdenjay00-sketch',
  },
];

const BEND_TABLE = {
  '10': { mult: 6.0, shrinkLabel: '1/16 in.', shrink: 0.0625 },
  '22.5': { mult: 2.6, shrinkLabel: '3/16 in.', shrink: 0.1875 },
  '30': { mult: 2.0, shrinkLabel: '1/4 in.', shrink: 0.25 },
  '45': { mult: 1.4, shrinkLabel: '3/8 in.', shrink: 0.375 },
  '60': { mult: 1.2, shrinkLabel: '1/2 in.', shrink: 0.5 },
};

let oracleIndex = 0;
let auraScore = 666;

const app = document.querySelector('#app');

const tickerItems = `
  <span class="gazette-item"><strong>📜 DISPATCH I:</strong> BYYBUO SmartPad T10 (aarch64) · Termux Host · Debian PRoot · Kali Rolling 2026.3</span>
  <span class="gazette-item"><strong>🕯️ AGENT COUNCIL:</strong> Antigravity (agy) · Grok · OpenCode operating in concert</span>
  <span class="gazette-item"><strong>⚡ NEC CANON (358.26):</strong> No more than 360° of bends between pull points — offsets &amp; factory elbows count</span>
  <span class="gazette-item"><strong>🐢 BROADCAST GUILD:</strong> Turbo-The-Turtle YouTube Channel · Starring Turbo, Sneaky the Slider &amp; Fishy</span>
  <span class="gazette-item"><strong>🔧 SHOP LAW:</strong> A dog-leg is scrap · One heavy process at a time · Zero cloud bloat</span>
  <span class="gazette-item"><strong>👑 ROYAL DEDICATION:</strong> Shout-out to our wife Precious &amp; her new boyfriend Pie for keeping her entertained while we master AI &amp; take over the world</span>
`;

app.innerHTML = `
  <div class="gazette-bar" title="Hover to pause dispatch">
    <div class="gazette-track">
      ${tickerItems}
      ${tickerItems}
    </div>
  </div>

  <div class="container">
    <header class="masthead">
      <div class="masthead-left">
        <span class="wax-seal">L</span>
        <span>SCRIPTORIUM: <strong>longdenjay00-sketch</strong> // BRaiNRoTRePoRt666X</span>
      </div>
      <div class="masthead-controls">
        <span id="aura-counter">TRADE AURA: <strong>+666</strong></span>
        <button id="mode-toggle" class="mode-btn" type="button">
          🕯️ Mode: Dark Academia (Summon 666x Overdrive)
        </button>
      </div>
    </header>

    <div class="scriptorium-banner">
      <img src="./hero.png" alt="Dark Academia Candlelit Scriptorium Desk and BYYBUO Tablet Terminal" />
      <div class="scriptorium-banner-caption">
        PLATE I // GROK IMAGINE — CANDLELIT SCRIPTORIUM &amp; AARCH64 FIELD ENGINEERING WORKSTATION
      </div>
    </div>

    <section class="hero">
      <div class="folio-card">
        <h1 class="hero-title">The Pocket Scriptorium &amp; Field Engineering Codex.</h1>
        <p class="hero-epigraph">“Ex Tabula BYYBUO, Scientia, Voltagium, et Testudo.”</p>
        <p class="hero-lead dropcap">
          Welcome to the public archive of <strong>longdenjay00-sketch</strong>. Every schematic, trade curriculum, media pipeline, and software artifact cataloged herein is forged on a mobile <code>aarch64</code> tablet workstation running <strong>Termux</strong>, a <strong>Debian PRoot</strong> guest, and a <strong>Kali GNU/Linux Rolling</strong> container—orchestrated alongside our council of autonomous harnesses: <strong>Antigravity (<code>agy</code>)</strong>, <strong>Grok</strong>, and <strong>OpenCode</strong>.
        </p>
        <div class="seal-tags">
          <span class="seal-tag gold">Antigravity (agy)</span>
          <span class="seal-tag gold">Grok</span>
          <span class="seal-tag gold">OpenCode</span>
          <span class="seal-tag crimson">BYYBUO Tablet · aarch64</span>
          <span class="seal-tag">Termux + Debian PRoot + Kali</span>
          <span class="seal-tag">Vite + GitHub Actions</span>
        </div>
        <div class="cta-row">
          <a class="btn primary" href="https://github.com/longdenjay00-sketch" target="_blank" rel="noopener">
            Enter GitHub Scriptorium ↗
          </a>
          <a class="btn" href="https://github.com/longdenjay00-sketch/conduit-bending" target="_blank" rel="noopener">
            Codex I: Conduit Bending
          </a>
          <a class="btn" href="https://github.com/longdenjay00-sketch/electrician" target="_blank" rel="noopener">
            Codex II: Electrician
          </a>
        </div>
      </div>

      <div class="grimoire-terminal">
        <div class="grimoire-header">
          <span>CODEX MACHINA // TELEMETRY</span>
          <span>root@kali-proot:~#</span>
        </div>
        <div class="grimoire-body">
          <div>
            <div class="cmd-line">┌──(root㉿kali)-[/root/10_DEV/11_PROJECTS]</div>
            <div class="cmd-line">└─# ./inspect-scriptorium --verbose</div>
            <ul class="spec-list">
              <li><span class="spec-k">Vessel</span><span class="spec-v">BYYBUO SmartPad T10 (aarch64)</span></li>
              <li><span class="spec-k">Outer Sanctum</span><span class="spec-v">Android + Termux (tmux bindings)</span></li>
              <li><span class="spec-k">Inner Sanctum</span><span class="spec-v">Debian PRoot · Kali Rolling 2026.3</span></li>
              <li><span class="spec-k">Familiar Spirits</span><span class="spec-v">Antigravity (agy) · Grok · OpenCode</span></li>
              <li><span class="spec-k">Sacred Tongues</span><span class="spec-v">Python (uv) · Rust · POSIX sh · JS</span></li>
              <li><span class="spec-k">Monastic Rule</span><span class="spec-v">1 Heavy Process at a Time</span></li>
            </ul>
          </div>
          <div>
            <div class="oracle-box" id="oracle-text">
              ${ORACLES[0]}
            </div>
            <div class="oracle-footer">
              <span>APHORISMS OF THE BENCH</span>
              <button class="oracle-btn" id="oracle-next" type="button">Consult Oracle (+Aura) ↻</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="chapter-header">
        <h2 class="chapter-title"><span class="chapter-numeral">Chapter I.</span> The Patron Houses &amp; Commissions</h2>
        <span class="chapter-sub">CLIENT WORKSTREAMS &amp; GUILDS</span>
      </div>

      <div class="patron-grid">
        <article class="patron-card electric">
          <span class="patron-latin">⚡ Ordo Reparationis Electricae // Trade &amp; Field Guild</span>
          <h3>Electric Service Repair Organization</h3>
          <p class="patron-desc">
            Rigorous shop-bench manuscripts, NEC-referenced curricula, and high-contrast field calculators engineered for apprentices, instructors, and working electricians.
          </p>
          <ul class="chronicle-list">
            <li>
              <strong>conduit-bending:</strong> Six-lab hand-bender sequence covering shoe marks, 90° stub-ups, offsets, 3-point &amp; 4-point saddles, and the 360° bend budget, complete with printable shop posters.
            </li>
            <li>
              <strong>electrician:</strong> Week-one public foundation covering Ohm's Law and NEC Chapter 9, Table 1 conduit fill percentages (53% / 31% / 40%).
            </li>
            <li>
              <strong>VOLTPRO NEC &amp; Multi-Port Calculators:</strong> Unified calculator architecture ported across Android APK (Gradle), Python, Rust, POSIX shell, and Web.
            </li>
          </ul>
          <div class="footnote-callout">
            * Marginalia: “Verify every table cell against the adopted NFPA 70 codebook on the bench. A dog-leg is scrap.”
          </div>
        </article>

        <article class="patron-card turtle">
          <span class="patron-latin">🐢 Societas Testudinis // Broadcast &amp; Media House</span>
          <h3>Turbo-The-Turtle YouTube Channel</h3>
          <p class="patron-desc">
            Creative direction, video automation scripts, and companion web chronicles for <strong>Turbo the Turtle</strong>, her co-star <strong>Sneaky the Slider</strong>, and <strong>Fishy</strong>.
          </p>
          <ul class="chronicle-list">
            <li>
              <strong>turbo-the-turtle:</strong> Official channel milestone repository celebrating Turbo's 1st anniversary and community dispatches.
            </li>
            <li>
              <strong>LongCat-best-use-cases:</strong> Python media alchemy (<code>video_tools.py</code>) automating clip assembly and creator workflows.
            </li>
            <li>
              <strong>Strict Studio Safety Protocol:</strong> As codified in our week-one electrical notes, animals stay outside the panel and Fishy remains safely in the tank.
            </li>
          </ul>
          <div class="footnote-callout">
            * Marginalia: “One year of broadcast dominion by land, basking rock, and aquarium.”
          </div>
        </article>
      </div>
    </section>

    <section>
      <div class="chapter-header">
        <h2 class="chapter-title"><span class="chapter-numeral">Chapter II.</span> The Alchemical Bench Apparatus</h2>
        <span class="chapter-sub">INTERACTIVE SHOP INSTRUMENTS</span>
      </div>

      <div class="apparatus-grid">
        <div class="apparatus-card">
          <h3>Apparatus I: Lex Ohmii (E = I × R)</h3>
          <p>Inscribe Voltage (V) and Resistance (Ω) to derive Current (I), Power (P), and fixed-resistance proportionality.</p>
          <div class="calc-row">
            <div class="calc-field">
              <label for="volts">Electromotive Force (Volts)</label>
              <input id="volts" type="number" value="120" min="0" step="any" />
            </div>
            <div class="calc-field">
              <label for="ohms">Resistance (Ohms Ω)</label>
              <input id="ohms" type="number" value="24" min="0.01" step="any" />
            </div>
          </div>
          <div id="ohm-output" class="calc-output"></div>
        </div>

        <div class="apparatus-card">
          <h3>Apparatus II: EMT Offset &amp; Shrink Reckoner</h3>
          <p>Bench layout geometry: Distance between marks = depth × multiplier; add shrink to the far mark.</p>
          <div class="calc-row">
            <div class="calc-field">
              <label for="depth">Obstruction Depth (in.)</label>
              <input id="depth" type="number" value="6" min="0.5" step="0.5" />
            </div>
            <div class="calc-field">
              <label for="angle">Shoe Bend Angle</label>
              <select id="angle">
                <option value="10">10° (×6.0 · 1/16" shrink)</option>
                <option value="22.5">22.5° (×2.6 · 3/16" shrink)</option>
                <option value="30" selected>30° (×2.0 · 1/4" shrink)</option>
                <option value="45">45° (×1.4 · 3/8" shrink)</option>
                <option value="60">60° (×1.2 · 1/2" shrink)</option>
              </select>
            </div>
          </div>
          <div id="bend-output" class="calc-output"></div>
        </div>
      </div>
    </section>

    <section>
      <div class="chapter-header">
        <h2 class="chapter-title"><span class="chapter-numeral">Chapter III.</span> Index Librorum (Public Repositories)</h2>
        <span class="chapter-sub">CATALOGED MANUSCRIPTS ON GITHUB</span>
      </div>

      <div class="filter-bar" id="filter-bar">
        <button class="filter-btn active" data-filter="all">All Codices</button>
        <button class="filter-btn" data-filter="electrical">Ordo Electricae (NEC / Trade)</button>
        <button class="filter-btn" data-filter="media">Societas Testudinis (Turbo / Media)</button>
        <button class="filter-btn" data-filter="system">Scriptorium &amp; System</button>
      </div>

      <div class="codex-grid" id="codex-grid"></div>
    </section>

    <footer class="colophon">
      <div style="width: 100%; padding-bottom: 1rem; margin-bottom: 0.5rem; border-bottom: 1px dashed rgba(201, 165, 92, 0.28); color: var(--vellum);">
        <span class="colophon-latin">Dedicatio Scriptorii:</span> Special shout-out to my wife <strong>Precious</strong> and her new boyfriend <strong>Pie</strong> for keeping her entertained while I lock in, master AI, and take over the world.
      </div>
      <div>
        <span class="colophon-latin">Finis Coronat Opus.</span> &nbsp;//&nbsp; Compiled with Vite &amp; GitHub Actions
      </div>
      <div>
        BYYBUO SmartPad T10 (aarch64) · Termux · Debian PRoot · Kali Rolling · agy / Grok / OpenCode
      </div>
    </footer>
  </div>
`;

function bumpAura(amount = 42) {
  auraScore += amount;
  const el = document.querySelector('#aura-counter');
  if (el) {
    el.innerHTML = `TRADE AURA: <strong>+${auraScore}</strong>`;
  }
}

function updateOhmCalc() {
  const v = parseFloat(document.querySelector('#volts').value) || 0;
  const r = parseFloat(document.querySelector('#ohms').value) || 0;
  const out = document.querySelector('#ohm-output');
  if (r <= 0) {
    out.innerHTML = 'Resistance must exceed 0 Ω lest a dead short be summoned.';
    return;
  }
  const amps = v / r;
  const watts = v * amps;
  out.innerHTML = `
    <div>Current (I): <strong>${amps.toFixed(2)} A</strong> &nbsp;|&nbsp; Power (P): <strong>${watts.toFixed(1)} W</strong></div>
    <div class="calc-verdict">At 2× Voltage (${(v * 2).toFixed(0)} V) on fixed ${r} Ω → ${(amps * 2).toFixed(2)} A &amp; ${(watts * 4).toFixed(1)} W (4× power).</div>
  `;
}

function updateBendCalc() {
  const depth = parseFloat(document.querySelector('#depth').value) || 0;
  const angle = document.querySelector('#angle').value;
  const row = BEND_TABLE[angle];
  const spacing = depth * row.mult;
  const totalShrink = depth * row.shrink;
  const degreesUsed = parseFloat(angle) * 2;
  const budgetLeft = 360 - degreesUsed;
  const out = document.querySelector('#bend-output');
  out.innerHTML = `
    <div>Mark Spacing: <strong>${spacing.toFixed(2)} in.</strong> (×${row.mult}) &nbsp;|&nbsp; Total Shrink: <strong>+${totalShrink.toFixed(3)} in.</strong> (${row.shrinkLabel}/in.)</div>
    <div class="calc-verdict">Two-bend offset consumes ${degreesUsed}° — leaving <strong>${budgetLeft}°</strong> in the 360° NEC 358.26 pull budget.</div>
  `;
}

function renderRepos(filter = 'all') {
  const grid = document.querySelector('#codex-grid');
  const items = filter === 'all' ? REPOS : REPOS.filter((r) => r.category === filter);
  grid.innerHTML = items
    .map(
      (r) => `
      <a class="codex-card" href="${r.url}" target="_blank" rel="noopener">
        <div>
          <div class="codex-top">
            <span class="codex-name">${r.name}</span>
            <span class="codex-badge">${r.folio} · ${r.badge}</span>
          </div>
          <p class="codex-desc" style="margin-top: 0.65rem;">${r.desc}</p>
        </div>
        <div class="codex-meta">
          <span>${r.stack}</span>
          <span>Inspect Folio →</span>
        </div>
      </a>
    `
    )
    .join('');
}

document.querySelector('#volts').addEventListener('input', () => {
  updateOhmCalc();
  bumpAura(5);
});
document.querySelector('#ohms').addEventListener('input', () => {
  updateOhmCalc();
  bumpAura(5);
});
document.querySelector('#depth').addEventListener('input', () => {
  updateBendCalc();
  bumpAura(5);
});
document.querySelector('#angle').addEventListener('change', () => {
  updateBendCalc();
  bumpAura(10);
});

document.querySelector('#oracle-next').addEventListener('click', () => {
  oracleIndex = (oracleIndex + 1) % ORACLES.length;
  document.querySelector('#oracle-text').textContent = ORACLES[oracleIndex];
  bumpAura(66);
});

document.querySelector('#mode-toggle').addEventListener('click', (e) => {
  document.body.classList.toggle('brainrot-overdrive');
  const active = document.body.classList.contains('brainrot-overdrive');
  e.currentTarget.textContent = active
    ? '🔥 Mode: 666x Brainrot Academia (Active)'
    : '🕯️ Mode: Dark Academia (Summon 666x Overdrive)';
  bumpAura(111);
});

document.querySelector('#filter-bar').addEventListener('click', (e) => {
  const btn = e.target.closest('.filter-btn');
  if (!btn) return;
  document.querySelectorAll('.filter-btn').forEach((b) => b.classList.remove('active'));
  btn.classList.add('active');
  renderRepos(btn.dataset.filter);
});

updateOhmCalc();
updateBendCalc();
renderRepos('all');
