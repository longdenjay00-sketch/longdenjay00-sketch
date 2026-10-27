# longdenjay00-sketch

[![Deploy Vite Site to GitHub Pages](https://github.com/longdenjay00-sketch/longdenjay00-sketch/actions/workflows/deploy.yml/badge.svg)](https://github.com/longdenjay00-sketch/longdenjay00-sketch/actions/workflows/deploy.yml)
**[🌐 Live Workstation & Portfolio Site (GitHub Pages)](https://longdenjay00-sketch.github.io/longdenjay00-sketch/)**

Independent developer and technical builder running a mobile-first Linux workstation on `aarch64`. We build field utilities, trade curriculum, media tooling, and agentic workflows for our clients and in-house projects.

---

## Workstation & Runtime Stack

Everything here is written, tested, and shipped directly from a tablet-hosted multi-layer Linux environment:

| Layer | Environment | Details |
| :--- | :--- | :--- |
| **Hardware** | BYYBUO SmartPad T10 (`aarch64`) | Pocket/bench Android tablet rig, local-first workflow |
| **Host Layer** | Termux | Android host runtime, custom `tmux`-tuned `termux.properties` |
| **Container / Guest** | Debian `proot-distro` + Kali GNU/Linux Rolling | Full `aarch64` Linux userland (`zsh`, `tmux`, security & build tooling) |
| **Agent Harnesses** | **Antigravity (`agy`)** · **Grok** · **OpenCode** | Multi-agent pair programming, research, and repo automation |
| **Core Tooling** | Vite · Python (`uv`) · Rust · POSIX `sh` · Android Gradle · `gh` · `rclone` | One heavy process at a time; lean, reproducible builds |

---

## Clients & Active Work

### ⚡ Electric Service Repair Organization
Field software, NEC-grounded reference tools, and hands-on shop curriculum for electrical apprentices and instructors:

- **[`electrician`](https://github.com/longdenjay00-sketch/electrician)** — Week-one public lesson page covering Ohm's Law and NEC Chapter 9, Table 1 conduit fill (53% / 31% / 40%), with custom visual aids.
- **[`conduit-bending`](https://github.com/longdenjay00-sketch/conduit-bending)** — Complete six-lab EMT hand-bender instructor scripts (`01-the-bender` through `06-kick-and-the-bend-budget`), one-page bench chart, and printable layout posters.
- **Field Calculators & Admin Suite** — Multi-target implementations (Android APK, Python, Rust, POSIX shell, and Web) for Ohm's Law and conduit fill (`VOLTPRO NEC`), plus institute administration tooling.

### 🐢 Turbo-The-Turtle (YouTube Channel)
Production scripts, media automation, and web projects supporting **Turbo the Turtle**, **Sneaky the Slider**, and **Fishy**:

- **[`turbo-the-turtle`](https://github.com/longdenjay00-sketch/turbo-the-turtle)** — Channel hub and 1st-anniversary milestone notes.
- **[`LongCat-best-use-cases`](https://github.com/longdenjay00-sketch/LongCat-best-use-cases)** — Python video and media processing utilities (`video_tools.py`) for content pipelines.

---

## Public Repositories

| Repository | Focus | Stack |
| :--- | :--- | :--- |
| [`longdenjay00-sketch`](https://github.com/longdenjay00-sketch/longdenjay00-sketch) | Profile README & interactive Vite portfolio deployed via GitHub Actions | Vite, JS, CSS, GitHub Pages |
| [`conduit-bending`](https://github.com/longdenjay00-sketch/conduit-bending) | EMT hand-bender lab scripts, shop math tables, and printable visual aids | Markdown, HTML/PDF |
| [`electrician`](https://github.com/longdenjay00-sketch/electrician) | First-week electrical theory & NEC Chapter 9 conduit fill lessons | HTML, CSS, Assets |
| [`LongCat-best-use-cases`](https://github.com/longdenjay00-sketch/LongCat-best-use-cases) | Video processing tools and LongCat workflow examples | Python |
| [`turbo-the-turtle`](https://github.com/longdenjay00-sketch/turbo-the-turtle) | Turbo the Turtle YouTube channel companion repo | Markdown |

---

## Local Development (Vite Showcase)

```bash
npm install
npm run dev      # start local Vite dev server
npm run build    # production build into dist/
```

---

## Operating Principles

1. **Local-first & lightweight:** Built to run cleanly inside an `aarch64` Termux + Debian/Kali PRoot container without bloated dependencies.
2. **Shop-floor clarity:** Code, calculators, and lesson scripts are written for real bench and field use—high contrast, verifiable arithmetic, zero fluff.
3. **Clean history:** Atomic commits, no leaked `.env` files or credentials in source control, and reproducible environments across host and guest.
