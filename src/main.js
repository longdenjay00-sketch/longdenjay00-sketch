import './style.css';

const REPOS = [
  {
    name: 'conduit-bending',
    category: 'electrical',
    badge: 'Electrical / NEC',
    stack: 'Markdown · HTML · PDF',
    desc: 'Instructor scripts for the 6-part EMT hand-bender lab: shoe marks, stub-up, offset, 3-point & 4-point saddles, and 360° bend budget.',
    url: 'https://github.com/longdenjay00-sketch/conduit-bending',
  },
  {
    name: 'electrician',
    category: 'electrical',
    badge: 'Electrical / NEC',
    stack: 'HTML · CSS · Visual Aids',
    desc: "First-week apprentice curriculum: Ohm's law fundamentals and NEC Chapter 9 Table 1 conduit fill limits (53% / 31% / 40%).",
    url: 'https://github.com/longdenjay00-sketch/electrician',
  },
  {
    name: 'turbo-the-turtle',
    category: 'media',
    badge: 'Turbo-The-Turtle',
    stack: 'Channel Hub',
    desc: 'Companion repository celebrating Turbo the Turtle, Sneaky the Slider, and Fishy on the Turbo-The-Turtle YouTube channel.',
    url: 'https://github.com/longdenjay00-sketch/turbo-the-turtle',
  },
  {
    name: 'LongCat-best-use-cases',
    category: 'media',
    badge: 'Media / Python',
    stack: 'Python · video_tools.py',
    desc: 'Video pipeline utilities and LongCat workflow examples for creator production automation.',
    url: 'https://github.com/longdenjay00-sketch/LongCat-best-use-cases',
  },
  {
    name: 'longdenjay00-sketch',
    category: 'system',
    badge: 'Profile & Pages',
    stack: 'Vite · GitHub Actions',
    desc: 'Public profile README and Industrial Field Utility web showcase built and deployed from an aarch64 tablet rig.',
    url: 'https://github.com/longdenjay00-sketch/longdenjay00-sketch',
  },
];

const BEND_TABLE = {
  '10': { mult: 6.0, shrinkLabel: '1/16 in. (0.0625")', shrink: 0.0625 },
  '22.5': { mult: 2.6, shrinkLabel: '3/16 in. (0.1875")', shrink: 0.1875 },
  '30': { mult: 2.0, shrinkLabel: '1/4 in. (0.25")', shrink: 0.25 },
  '45': { mult: 1.4, shrinkLabel: '3/8 in. (0.375")', shrink: 0.375 },
  '60': { mult: 1.2, shrinkLabel: '1/2 in. (0.50")', shrink: 0.5 },
};

const app = document.querySelector('#app');

app.innerHTML = `
  <div class="container">
    <header class="topbar">
      <div class="status-pill">
        <span class="status-dot"></span>
        <span>HOST: BYYBUO SmartPad T10 (aarch64) // TERMUX + DEBIAN PROOT + KALI ROLLING</span>
      </div>
      <div>HARNESS: <strong>AGY</strong> · <strong>GROK</strong> · <strong>OPENCODE</strong></div>
    </header>

    <section class="hero">
      <div class="hero-card">
        <div>
          <div class="eyebrow">longdenjay00-sketch // Mobile-First Linux Engineering</div>
          <h1 class="hero-title">Field Software, Trade Curriculum &amp; Agentic Workflows.</h1>
          <p class="hero-subtitle">
            Developing directly from a pocket <code>aarch64</code> tablet running Termux with a Debian PRoot &amp; Kali GNU/Linux Rolling container. Powered by Antigravity (<code>agy</code>), Grok, and OpenCode to ship practical tools for our clients.
          </p>
          <div class="badge-row">
            <span class="badge primary">Antigravity (agy)</span>
            <span class="badge primary">Grok</span>
            <span class="badge primary">OpenCode</span>
            <span class="badge amber">Termux + Debian PRoot</span>
            <span class="badge amber">Kali Linux aarch64</span>
            <span class="badge">Vite + GitHub Actions</span>
          </div>
        </div>
        <div class="cta-row">
          <a class="btn primary" href="https://github.com/longdenjay00-sketch" target="_blank" rel="noopener">
            GitHub Profile ↗
          </a>
          <a class="btn" href="https://github.com/longdenjay00-sketch/conduit-bending" target="_blank" rel="noopener">
            EMT Bending Lab
          </a>
          <a class="btn" href="https://github.com/longdenjay00-sketch/electrician" target="_blank" rel="noopener">
            Week-1 Electrician Page
          </a>
        </div>
      </div>

      <div class="terminal-card">
        <div class="terminal-header">
          <div class="terminal-dots">
            <span></span><span></span><span></span>
          </div>
          <span>root@kali-proot: ~/10_DEV/11_PROJECTS</span>
        </div>
        <div class="terminal-body">
          <div class="prompt-line">┌──(root㉿kali)-[/root/10_DEV/11_PROJECTS]</div>
          <div class="prompt-line">└─# ./workstation-status --summary</div>
          <ul class="kv-list">
            <li><span class="kv-key">Machine</span><span class="kv-val">BYYBUO SmartPad T10 (aarch64)</span></li>
            <li><span class="kv-key">Host OS</span><span class="kv-val">Android + Termux (tmux extra-keys)</span></li>
            <li><span class="kv-key">Container</span><span class="kv-val">Debian PRoot / Kali Rolling 2026.3</span></li>
            <li><span class="kv-key">AI Harnesses</span><span class="kv-val">Antigravity (agy) · Grok · OpenCode</span></li>
            <li><span class="kv-key">Languages</span><span class="kv-val">Python (uv) · Rust · POSIX sh · JS</span></li>
            <li><span class="kv-key">Build Discipline</span><span class="kv-val">Local-first · 1 heavy job at a time</span></li>
          </ul>
          <div class="prompt-line">└─# gh repo list longdenjay00-sketch</div>
          <div>✓ Public showcase &amp; trade curriculum online</div>
        </div>
      </div>
    </section>

    <section>
      <div class="section-header">
        <h2 class="section-title">Clients &amp; Active Organizations</h2>
        <span class="section-sub">PRODUCTION WORKSTREAMS</span>
      </div>

      <div class="client-grid">
        <article class="client-card electric">
          <span class="client-tag">⚡ Client // Trade Education &amp; Field Software</span>
          <h3>Electric Service Repair Organization</h3>
          <p class="repo-desc">
            NEC-grounded curriculum, instructor lab scripts, and multi-platform field calculators designed for gloved shop-floor and apprentice use.
          </p>
          <ul class="client-list">
            <li>
              <strong>conduit-bending:</strong> Six-lab hand-bender sequence (shoe marks, 90° stub-up, offset, 3-point &amp; 4-point saddles, and 360° bend budget) with printable bench charts.
            </li>
            <li>
              <strong>electrician:</strong> Week-one public lessons covering Ohm's Law and NEC Chapter 9, Table 1 conduit fill (53% one conductor, 31% two, 40% three+).
            </li>
            <li>
              <strong>VOLTPRO NEC &amp; Ohm's Law Suite:</strong> Cross-platform calculators targeting Android APK (Gradle), Python, Rust, POSIX shell, and Web.
            </li>
          </ul>
        </article>

        <article class="client-card turtle">
          <span class="client-tag">🐢 Client // Creator Media &amp; Automation</span>
          <h3>Turbo-The-Turtle YouTube Channel</h3>
          <p class="repo-desc">
            Video workflow scripts, companion web pages, and production utilities for <strong>Turbo the Turtle</strong>, her pal <strong>Sneaky the Slider</strong>, and <strong>Fishy</strong>.
          </p>
          <ul class="client-list">
            <li>
              <strong>turbo-the-turtle:</strong> Channel hub commemorating Turbo's 1st YouTube anniversary and community milestones.
            </li>
            <li>
              <strong>LongCat-best-use-cases:</strong> Python media processing toolkit (<code>video_tools.py</code>) for automated clip prep and channel publishing workflows.
            </li>
            <li>
              <strong>Companion Story &amp; Web Builds:</strong> Interactive assets and alt-text/caption utilities tailored for mobile creator publishing.
            </li>
          </ul>
        </article>
      </div>
    </section>

    <section>
      <div class="section-header">
        <h2 class="section-title">Interactive Shop Bench Utilities</h2>
        <span class="section-sub">LIVE DEMOS FROM OUR ELECTRICAL CURRICULUM</span>
      </div>

      <div class="bench-grid">
        <div class="bench-card">
          <h3>Ohm's Law Field Solver (E = I × R)</h3>
          <p>Enter Voltage (V) and Resistance (Ω) to compute Current (I) and Power (P).</p>
          <div class="calc-row">
            <div class="calc-field">
              <label for="volts">Voltage (V)</label>
              <input id="volts" type="number" value="120" min="0" step="any" />
            </div>
            <div class="calc-field">
              <label for="ohms">Resistance (Ω)</label>
              <input id="ohms" type="number" value="24" min="0.01" step="any" />
            </div>
          </div>
          <div id="ohm-output" class="calc-output"></div>
        </div>

        <div class="bench-card">
          <h3>EMT Offset &amp; Shrink Calculator</h3>
          <p>Shop layout chart for hand benders: spacing = depth × multiplier, plus total shrink.</p>
          <div class="calc-row">
            <div class="calc-field">
              <label for="depth">Obstacle Depth (in.)</label>
              <input id="depth" type="number" value="6" min="0.5" step="0.5" />
            </div>
            <div class="calc-field">
              <label for="angle">Bend Angle</label>
              <select id="angle">
                <option value="10">10°</option>
                <option value="22.5">22.5°</option>
                <option value="30" selected>30° (Multiplier ×2)</option>
                <option value="45">45°</option>
                <option value="60">60°</option>
              </select>
            </div>
          </div>
          <div id="bend-output" class="calc-output"></div>
        </div>
      </div>
    </section>

    <section>
      <div class="section-header">
        <h2 class="section-title">Public Repository Index</h2>
        <span class="section-sub">GITHUB.COM/LONGDENJAY00-SKETCH</span>
      </div>

      <div class="filter-bar" id="filter-bar">
        <button class="filter-btn active" data-filter="all">All Public Repos</button>
        <button class="filter-btn" data-filter="electrical">Electrical / NEC</button>
        <button class="filter-btn" data-filter="media">Turbo-The-Turtle / Media</button>
        <button class="filter-btn" data-filter="system">Workstation / Profile</button>
      </div>

      <div class="repo-grid" id="repo-grid"></div>
    </section>

    <footer class="footer">
      <span>Built with Vite · Deployed via GitHub Actions to GitHub Pages</span>
      <span>BYYBUO Tablet · Termux · Debian PRoot · Kali Rolling · agy / Grok / OpenCode</span>
    </footer>
  </div>
`;

function updateOhmCalc() {
  const v = parseFloat(document.querySelector('#volts').value) || 0;
  const r = parseFloat(document.querySelector('#ohms').value) || 0;
  const out = document.querySelector('#ohm-output');
  if (r <= 0) {
    out.textContent = 'Enter a resistance greater than 0 Ω.';
    return;
  }
  const amps = v / r;
  const watts = v * amps;
  out.innerHTML = `Current (I): <strong>${amps.toFixed(2)} A</strong> &nbsp;|&nbsp; Power (P): <strong>${watts.toFixed(1)} W</strong>`;
}

function updateBendCalc() {
  const depth = parseFloat(document.querySelector('#depth').value) || 0;
  const angle = document.querySelector('#angle').value;
  const row = BEND_TABLE[angle];
  const spacing = depth * row.mult;
  const totalShrink = depth * row.shrink;
  const out = document.querySelector('#bend-output');
  out.innerHTML = `Mark Spacing: <strong>${spacing.toFixed(2)} in.</strong> (×${row.mult}) &nbsp;|&nbsp; Add Shrink: <strong>+${totalShrink.toFixed(3)} in.</strong> (${row.shrinkLabel}/in.)`;
}

function renderRepos(filter = 'all') {
  const grid = document.querySelector('#repo-grid');
  const items = filter === 'all' ? REPOS : REPOS.filter((r) => r.category === filter);
  grid.innerHTML = items
    .map(
      (r) => `
      <a class="repo-card" href="${r.url}" target="_blank" rel="noopener">
        <div>
          <div class="repo-top">
            <span class="repo-name">${r.name}</span>
            <span class="repo-cat">${r.badge}</span>
          </div>
          <p class="repo-desc" style="margin-top: 0.6rem;">${r.desc}</p>
        </div>
        <div class="repo-meta">
          <span>${r.stack}</span>
          <span>View Repo →</span>
        </div>
      </a>
    `
    )
    .join('');
}

document.querySelector('#volts').addEventListener('input', updateOhmCalc);
document.querySelector('#ohms').addEventListener('input', updateOhmCalc);
document.querySelector('#depth').addEventListener('input', updateBendCalc);
document.querySelector('#angle').addEventListener('change', updateBendCalc);

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
