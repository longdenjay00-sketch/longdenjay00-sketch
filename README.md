# longdenjay00-sketch

[![Deploy Vite Site to GitHub Pages](https://github.com/longdenjay00-sketch/longdenjay00-sketch/actions/workflows/deploy.yml/badge.svg)](https://github.com/longdenjay00-sketch/longdenjay00-sketch/actions/workflows/deploy.yml)
**[🌐 Live Workstation & Portfolio Site (GitHub Pages)](https://longdenjay00-sketch.github.io/longdenjay00-sketch/)** · **[🕶️ Live Dotfiles Construct Dashboard](https://longdenjay00-sketch.github.io/dotfiles/)**

![Dark Academia Scriptorium & Field Engineering Hero](public/hero.png)

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

## Public Repositories & Active Work

| Repository | Focus | Stack |
| :--- | :--- | :--- |
| [`longdenjay00-sketch`](https://github.com/longdenjay00-sketch/longdenjay00-sketch) | Profile README & interactive Vite portfolio deployed via GitHub Pages | Vite, JS, CSS, GitHub Pages |
| [`today-i-learned`](https://github.com/longdenjay00-sketch/today-i-learned) | 23+ micro-knowledge notes & interactive Flutter exploration widget | Flutter, Dart, Markdown |
| [`dotfiles`](https://github.com/longdenjay00-sketch/dotfiles) | Matrix/Morpheus system spine for Termux host + Kali PRoot container | Zsh, Bash, Tmux, Git |
| [`conduit-bending`](https://github.com/longdenjay00-sketch/conduit-bending) | EMT hand-bender lab scripts, shop math tables, and printable visual aids | Markdown, HTML/PDF |
| [`electrician`](https://github.com/longdenjay00-sketch/electrician) | First-week electrical theory & NEC Chapter 9 conduit fill lessons | HTML, CSS, Assets |
| [`LongCat-best-use-cases`](https://github.com/longdenjay00-sketch/LongCat-best-use-cases) | Video processing tools and LongCat workflow examples | Python |
| [`turbo-the-turtle`](https://github.com/longdenjay00-sketch/turbo-the-turtle) | Turbo the Turtle YouTube channel companion repo | Markdown |

---

## The 50-Repo Developer Milestones

A staged roadmap mapping core fundamentals, operational tooling, systems engineering, and hardware automation:

### 🧱 Tier 1: Foundations & Core Products (1–10)
- [x] **01. System Dotfiles (`dotfiles`)** — Termux host + Kali PRoot terminal cockpit and Johnny Decimal layout.
- [x] **02. Today I Learned (`today-i-learned`)** — Public daily engineering journal with interactive Flutter viewer.
- [x] **03. Profile README (`longdenjay00-sketch`)** — Public portfolio, hardware stack, and client index.
- [x] **04. Zero-Dependency POS CLI (`swim-pos-cli`)** — Python inventory tracker and 42-col thermal receipt printer.
- [x] **05. Systems Pricing Engine (`superdiscount99-rust`)** — Compiled Rust `.99` discount and eBay margin analyzer.
- [x] **06. Trade × Robotics Workbench (`trade-robotics-notes`)** — Vite app for DC bus voltage drop & NEC Ch. 9 conduit fill.
- [x] **07. Mobile Storage Lens APK (`swim-storage-lens-android`)** — Kotlin + Jetpack Compose on-device vision organizer.
- [x] **08. Architectural Atlas (`himalayan-architecture`)** — Zero-dependency HTML5 atlas & seismic wall calculator.
- [x] **09. Skatepark Geometry Studio (`skatepark-geometry`)** — Nuxt 3 circular-arc transition and cut-sheet estimator.
- [x] **10. Trade Curriculum & Theory (`electrician` / `conduit-bending`)** — Ohm's law, EMT bending, and NEC fill rules.

### ⚙️ Tier 2: Operations & Infrastructure (11–20)
- [ ] **11. Container Lab (`proot-infra`)** — Multi-stage rootfs snapshots and automated PRoot environments.
- [ ] **12. Red-Team Methodology (`jhaddix-red-team`)** — Attack surface mapping, TBHM recon, and curated wordlists.
- [ ] **13. Video Processing Pipeline (`ffmpeg-media-tools`)** — Lanczos video scaling, aspect padding, and batch metadata fixing.
- [ ] **14. Type-Safe SDK Client** — Clean API wrapper library for eBay Trading and marketplace endpoints.
- [ ] **15. Offline-First SQLite Ledger** — Embedded SQL database with sync, export, and zero background daemons.
- [ ] **16. Event Automation Relay** — Webhook listener for inventory updates and terminal notifications.
- [ ] **17. Systems Benchmark Lab** — Comparative throughput and memory profiling (Rust vs. Python).
- [ ] **18. Physical Hardware Interface** — ESC/POS raw byte printer and serial microcontroller communications.
- [ ] **19. UI Design System Package** — Obsidian & Neon Material 3 component library for Flutter and Web.
- [ ] **20. Cryptographic Secrets Vault** — Mode 700 credential isolation patterns and zero-trust templates.

### 🧠 Tier 3: Systems & Autonomous Agents (21–30)
- [ ] **21. Multi-Tool Agent Orchestrator** — Antigravity / Morpheus tool harness and custom skill automation.
- [ ] **22. Custom DSL / Syntax Parser** — Lexer and AST evaluator for specialized electrical/inventory shorthand.
- [ ] **23. CAN Bus & Telemetry Daemon** — High-frequency streaming daemon for motor and sensor buses.
- [ ] **24. Edge Computer Vision Pipeline** — Optimized ARM/NPU quantized model runner for physical object detection.
- [ ] **25. Local Mesh P2P Sync** — Serverless device-to-device data replication over local Wi-Fi.
- [ ] **26. Binary Decompilation Playbook** — APK teardown, Ghidra workflows, and firmware analysis.
- [ ] **27. Cross-Platform Hardware Abstraction Layer** — Unified C/Rust API across microcontrollers and single-board computers.
- [ ] **28. Double-Entry Accounting Ledger** — Strictly typed, ACID-compliant ledger with integer-cent accuracy.
- [ ] **29. Linux Kernel Probe Lab** — eBPF syscall tracing and userspace observability scripts.
- [ ] **30. Open-Source Hardware / 3D CAD BOM** — Parametric PETG models, KiCad schematics, and manufacturing specs.

### 🏭 Tier 4: Industrial & Cyber-Physical (31–40)
- [ ] **31. Industrial Fieldbus Suite** — Modbus TCP/RTU and PLC communication harness.
- [ ] **32. Battery Management (BMS) Telemetry** — LiFePO4 cell monitoring and thermal cutoff safety logic.
- [ ] **33. Robotics Kinematics Solver** — Forward/inverse kinematics and velocity trajectory planning.
- [ ] **34. Acoustic & Vibration DSP Engine** — FFT frequency analysis for predictive mechanical wear detection.
- [ ] **35. Hard Real-Time RTOS Firmware** — Microsecond-deterministic C/Rust firmware on bare metal.
- [ ] **36. GIS & Field Asset Mapping** — Geospatial layout engine for conduit trenching and infrastructure runs.
- [ ] **37. Hardware Root-of-Trust (HSM)** — Secure boot, mTLS authentication, and cryptographic firmware verification.
- [ ] **38. Ruggedized CMMS Tool Tracker** — Tool calibration, maintenance intervals, and OSHA LOTO tracking.
- [ ] **39. Synthetic Physics Dataset Generator** — Procedural 3D scene generation for training vision models.
- [ ] **40. Fault-Tolerant State Machine** — Raft consensus implementation for multi-node controller redundancy.

### 🐉 Tier 5: The Matrix / Kali PRoot Rig (41–50)
- [ ] **41. PRoot-to-Bionic Bridge** — Cross-boundary process supervisor and socket manager (`agy-termux`).
- [ ] **42. ARM64 Userspace Pen-Test Arsenal** — Network security suite optimized for PRoot unprivileged networking.
- [ ] **43. Termux:X11 Touch Desktop** — Lightweight, hardware-accelerated GUI configured for Android tablet displays.
- [ ] **44. Wi-Fi ADB Fleet Controller** — Multi-device wireless ADB and scrcpy orchestration.
- [ ] **45. Android Static Analysis Lab** — Automated APK decompilation and vulnerability scanning in Kali.
- [ ] **46. Quantized ARM64 AI Engine** — Local LiteRT / GGUF runner for Gemma and Nemotron offline inference.
- [ ] **47. Johnny Decimal Integrity Daemon** — Automated spine audit, symlink health check, and tree visualizer.
- [ ] **48. LAN DHCP Sentry Daemon** — Non-blocking subnet sweep and automatic SSH config updater.
- [ ] **49. Roku ECP Shop Dashboard** — Local living room / shop TV telemetry relay via Roku external control.
- [ ] **50. The Construct One-Line Bootstrap** — Total disaster-recovery script rebuilding the entire Kali-on-Termux workstation from scratch.

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

---

## Dedication & Acknowledgments

Special shout-out to my wife **Precious** and her new boyfriend **Pie** for keeping her entertained while I lock in, learn AI, and take over the world.

