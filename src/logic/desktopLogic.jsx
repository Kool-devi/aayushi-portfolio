/* eslint-disable */
// Page state and behaviour for the desktop layout, ported from the Claude Design prototype.
// One class serves all four pages; each page renders only its own view.
import React from 'react';
import { stickyOffset, scrollToSection } from '../app/smoothScroll.js';

// Case-study pages: which state key holds the highlighted chapter pill.
const EXP_MS = 7000; // Delicut expiry flow: how long each stage shows before the next

const DL_PHONE_H = Math.round(232 * 1686 / 830); // Delicut day-pattern phone height (design px): 232px-wide iPhone frame

const CHAPTER_KEY = { 'project-attune': 'atCh', 'project-delicut': 'dlCh', 'project-darkroast': 'csCh' };

export default class DesktopLogic extends React.Component {
  state = { copied: false, hov: 0, mx: null, now: new Date() };
  componentDidMount() {
    this.clk = setInterval(() => this.setState({ now: new Date() }), 30000);
    const page = location.pathname.split('/').pop().replace(/\.html$/, '');
    this.chKey = CHAPTER_KEY[page];
    if (this.chKey) {
      window.addEventListener('scroll', this.onScrollSpy, { passive: true });
      window.addEventListener('resize', this.onScrollSpy);
      this.onScrollSpy();
    }
  }
  componentWillUnmount() {
    clearInterval(this.clk);
    window.removeEventListener('scroll', this.onScrollSpy);
    window.removeEventListener('resize', this.onScrollSpy);
    cancelAnimationFrame(this.spyRaf);
  }
  // Scroll spy: the chapter pill follows the section being read — the last chapter whose
  // section has reached the bottom of the sticky bars (or the last one at the page's end).
  onScrollSpy = () => {
    cancelAnimationFrame(this.spyRaf);
    this.spyRaf = requestAnimationFrame(() => {
      const links = document.querySelectorAll('nav[data-sticky] a[href^="#"]');
      if (!links.length) return;
      const line = stickyOffset() + 24;
      let active = 0;
      links.forEach((a, i) => {
        const el = document.getElementById(a.getAttribute('href').slice(1));
        if (el && el.getBoundingClientRect().top <= line) active = i;
      });
      const atEnd = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      if (atEnd) active = links.length - 1;
      if (this.state[this.chKey] !== active) this.setState({ [this.chKey]: active });
      // Attune "Choreograph each room": the mode block crossing the middle of the screen picks the phone screen.
      const atSteps = document.querySelectorAll('[data-atstep]');
      if (atSteps.length) {
        const zoom = (document.documentElement.clientWidth || window.innerWidth) / 1278, bars = stickyOffset() / zoom;
        // Centre the real iPhone frame (232 wide) in the visible space, so the gap above and below
        // it is equal. The bars slide away while scrolling down, so the offset follows --bars-on
        // (1 = bars showing, 0 = hidden; animated in site.css) and glides along with them.
        const phoneH = 232 * 1686 / 830;
        const free = Math.round((window.innerHeight / zoom - phoneH) / 2), half = Math.round(bars / 2);
        const pt = `max(calc(${Math.round(bars)}px * var(--bars-on) + 16px), calc(${free}px + ${half}px * var(--bars-on)))`;
        if (this.state.atPT !== pt) this.setState({ atPT: pt });
        const mid = window.innerHeight * 0.55;
        let f = 0;
        atSteps.forEach((el, i) => { if (el.getBoundingClientRect().top <= mid) f = i; });
        if ((this.state.atF ?? 0) !== f) this.setState({ atF: f });
        // the shown prototype restarts every time its mode arrives (and stops once the section is off screen)
        const sec = document.getElementById('flows'), sr = sec && sec.getBoundingClientRect();
        const act = sr && sr.top < window.innerHeight && sr.bottom > 0 ? f : -1;
        // the previous prototype stays on screen until the new one has drawn its first screen (no dark gap)
        if ((this.state.atAct ?? -1) !== act) this.setState(s => { const run = (s.atRun ?? 0) + 1, keys = { ...(s.atKeys || {}) }; if (act >= 0) keys[act] = run; return { atAct: act, atRun: run, atKeys: keys, atKeep: act >= 0 ? (s.atAct ?? -1) : -1 }; });
      }
      // DarkRoast "Final design": the comparison crossing the middle of the screen picks the name;
      // the pinned left column is centred in the space below the part of the sticky bars on screen.
      const finals = document.querySelectorAll('[data-csfinal]');
      if (finals.length) {
        let vis = 0;
        document.querySelectorAll('[data-sticky]').forEach((el) => { vis = Math.max(vis, el.getBoundingClientRect().bottom); });
        const zoom = (document.documentElement.clientWidth || window.innerWidth) / 1278, bars = Math.min(Math.max(vis, 0), stickyOffset()) / zoom;
        // centred in the visible space: equal room above (below the bars) and below
        const left = document.querySelector('[data-csfinal-left]');
        const lh = left ? left.getBoundingClientRect().height / zoom : 0;
        const pt = Math.round(bars + Math.max(16, (window.innerHeight / zoom - bars - lh) / 2));
        if (this.state.csPT !== pt) this.setState({ csPT: pt });
        const mid = window.innerHeight * 0.5;
        let fi = 0;
        finals.forEach((el, i) => { if (el.getBoundingClientRect().top <= mid) fi = i; });
        if ((this.state.csPair ?? 0) !== fi) this.setState({ csPair: fi });
      }
      // Attune "Design when AI stops": same pattern as DarkRoast's final design — the steps on the
      // left stay pinned (centred in the visible space) while a phone per step scrolls past on the
      // right; the phone crossing the middle of the screen picks the step.
      const safes = document.querySelectorAll('[data-atsafe]');
      if (safes.length) {
        const zoom = (document.documentElement.clientWidth || window.innerWidth) / 1278, bars = stickyOffset() / zoom;
        const left = document.querySelector('[data-atsafe-left]');
        const lh = left ? left.getBoundingClientRect().height / zoom : 0;
        // follows --bars-on (animated in site.css) so it stays centred as the bars slide away / back
        const free = Math.round((window.innerHeight / zoom - lh) / 2), half = Math.round(bars / 2);
        const pt = `max(calc(${Math.round(bars)}px * var(--bars-on) + 16px), calc(${free}px + ${half}px * var(--bars-on)))`;
        if (this.state.atSPT !== pt) this.setState({ atSPT: pt });
        const mid = window.innerHeight * 0.5;
        let si = 0;
        safes.forEach((el, i) => { if (el.getBoundingClientRect().top <= mid) si = i; });
        if ((this.state.atS ?? 0) !== si) this.setState({ atS: si });
      }
      // Delicut expiry flow: only cycle while the section is on screen
      const exEl = document.getElementById('expiry');
      if (exEl) { const r = exEl.getBoundingClientRect(), on = r.top < window.innerHeight * 0.75 && r.bottom > window.innerHeight * 0.25; if (!!this.state.dlEV !== on) this.setState({ dlEV: on }); }
      // Delicut "Time-based pattern": the day block crossing the middle of the screen drives the phone video.
      const steps = document.querySelectorAll('[data-dlstep]');
      if (steps.length) {
        // pin the phone midway between the sticky bars and the bottom of the window (equal space above and below)
        // only the part of the bars actually on screen counts: they slide away while scrolling down
        let vis = 0;
        document.querySelectorAll('[data-sticky]').forEach((el) => { vis = Math.max(vis, el.getBoundingClientRect().bottom); });
        const zoom = (document.documentElement.clientWidth || window.innerWidth) / 1278, bars = Math.min(Math.max(vis, 0), stickyOffset()) / zoom;
        const pt = Math.round(Math.max(bars + 16, bars + (window.innerHeight / zoom - bars - DL_PHONE_H) / 2));
        if (this.state.dlPT !== pt) this.setState({ dlPT: pt });
        const mid = window.innerHeight * 0.55;
        let day = 0;
        steps.forEach((el, i) => { if (el.getBoundingClientRect().top <= mid) day = i; });
        if ((this.state.dlD ?? 0) !== day) this.dlGo(day);
      }
    });
  };
  copyEmail = () => {
    try { navigator.clipboard.writeText('aayushipatel2002@gmail.com'); } catch (e) {}
    this.setState({ copied: true });
    clearTimeout(this.t); this.t = setTimeout(() => this.setState({ copied: false }), 1800);
  };
  atGo(i) { this.setState({ atM: i, atSt: 0, atK: 0 }); }
  atStart() { if (this._atInt) return; this._atInt = setInterval(() => { if (!this._atEl || !document.body.contains(this._atEl)) { clearInterval(this._atInt); this._atInt = null; return; } this.setState(s => { const L = 5, m = s.atM ?? 0, st = s.atSt ?? 0, k = (s.atK ?? 0) + 1; if (k < L) return { atK: k }; if (st < 3) return { atSt: st + 1, atK: 0 }; return { atM: (m + 1) % 4, atSt: 0, atK: 0 }; }); }, 1000); }
  atVals() {
    const S = this.state, U = p => encodeURI(p), n2 = i => String(i + 1).padStart(2, '0');
    const pick = (k, i) => () => this.state[k] !== i && this.setState({ [k]: i });
    const L = 5, m = S.atM ?? 0, st = S.atSt ?? 0, k = S.atK ?? 0;
    const chap = [['Overview','moves'],['Problem','problem'],['Private and shared','model'],['Roles','roles'],['Rooms','rooms'],['Flows','flows'],['Safety','safety'],['Handoff','system'],['Outcome','outcome']];
    const ch = S.atCh ?? 0, hm = S.atH ?? 0, md = S.atMd ?? 0, rc = S.atRc ?? 0, sf = S.atS ?? 0, sy = S.atSys ?? 0;
    const modes = [
      { t: 'Reflect', proto: 'prototypes/attune-reflect.html', k: 'Private', role: 'Listener', img: 'Mockups/Attune/Reflect.jpg', q: 'I need to understand what I’m feeling.', who: 1, pace: 'Quick', steps: [
        { t: 'Start anywhere', note: 'A normal chat screen, nothing new to learn', k: 'Reflect · private', title: 'What’s on your mind?', chips: ['I felt ignored today', 'Something’s bothering me', 'Help me put it into words'], sel: 0, input: true },
        { t: 'Talk it through', note: 'Type or speak, whichever is easier', k: 'Reflect · private', title: 'Take your time.', bubbles: [['me', 'I felt ignored at dinner tonight.'], ['ai', 'That sounds lonely. What did you need in that moment?'], ['me', 'Just for him to ask about my day.']], input: true },
        { t: 'AI reflects back', note: 'It repeats your feelings back without judging or advising', k: 'Reflect · private', title: 'Here’s what I’m hearing.', card: ['Reflection', 'You want to feel noticed — not to win an argument.'], chips: ['Lonely', 'Unseen', 'Hopeful'], sel: 1 },
        { t: 'You decide what’s next', note: 'Nothing is shared unless you choose to share it', k: 'Reflect · private', title: 'What would help now?', btns: [['Keep this private', 1], ['Prepare to talk to my partner', 0], ['Move to Repair', 0]] }] },
      { t: 'Repair', proto: 'prototypes/attune-repair.html', k: 'Private', role: 'Calming guide', img: 'Mockups/Attune/Repair.jpg', q: 'I need to calm down and process what happened.', who: 1, pace: 'Slow', steps: [
        { t: 'Body check‑in', note: 'Start with how your body feels, not the argument', k: 'Repair · step 1 of 4', title: 'Where do you feel it right now?', chips: ['Chest', 'Jaw', 'Stomach', 'Hands'], sel: 0, card: ['Intensity', '●●●●●●●○○○  7 / 10'] },
        { t: 'Settle down', note: 'The pace slows before any reflection starts', k: 'Repair · step 2 of 4', title: 'Let’s slow down together.', circle: 'breath' },
        { t: 'Guided reflection', note: 'One gentle question at a time', k: 'Repair · step 3 of 4', title: 'What happened?', bubbles: [['ai', 'In a few words, what happened?'], ['me', 'We argued about money again.'], ['ai', 'What were you feeling underneath the anger?']] },
        { t: 'Reconnect when ready', note: 'You agree to every shared step yourself', k: 'Repair · step 4 of 4', title: 'Ready to reconnect?', card: ['🔒 Private', 'Your partner sees nothing until you choose to share.'], btns: [['Not yet', 0], ['Prepare a message', 1]] }] },
      { t: 'Resolve', proto: 'prototypes/attune-resolve.html', k: 'Shared', role: 'Neutral middle person', img: 'Mockups/Attune/Resolve.jpg', q: 'We need to work through something together.', who: 2, pace: 'Step by step', steps: [
        { t: 'Both agree to start', note: 'Nobody gets pulled into a session by surprise', k: 'Resolve · together', title: 'Start only when you’re both ready.', bubbles: [['p', 'Aanya joined ✓'], ['me', 'Sam joined ✓']], btns: [['Start together', 1]] },
        { t: 'Set ground rules', note: 'Agreed before anyone speaks', k: 'Resolve · together', title: 'Our ground rules', chips: ['One speaker at a time', 'No interrupting', 'Pause anytime', 'Assume good intent'], sel: 9, all: true },
        { t: 'Take turns', note: 'Each partner gets equal, protected time', k: 'Resolve · Sam’s turn', title: 'Sam has the floor.', circle: 'timer' },
        { t: 'AI checks understanding', note: 'It clarifies what was said and never takes sides', k: 'Resolve · clarify', title: 'Quick check, Aanya.', card: ['Attune', 'Did you hear Sam say he feels unappreciated?'], btns: [['Yes, that’s right', 1], ['Not quite', 0]] }] },
      { t: 'Refine', proto: 'prototypes/attune-refine.html', k: 'Shared', role: 'Light coach', img: 'Mockups/Attune/Refine.jpg', q: 'We want to keep making our relationship stronger.', who: 2, pace: 'Open', steps: [
        { t: 'Plan a session', note: 'Schedule it and repeat it at your own pace', k: 'Refine · together', title: 'Plan your next session', chips: ['Sun · 7 pm', 'Weekly', '20 min'], sel: 1, btns: [['Schedule', 1]] },
        { t: 'Guided prompt', note: 'Small activities, not therapy homework', k: 'Refine · tonight', title: 'Tonight’s prompt', card: ['Prompt', 'Share one thing your partner did this week that you loved.'] },
        { t: 'Light nudges', note: 'Prompts like sharing something you appreciate, with the AI staying in the background', k: 'Refine · live', title: 'Keep it going', bubbles: [['p', 'You made coffee before my early call.'], ['me', 'You noticed that? ☺\uFE0E'], ['ai', '✦ Nice — try saying why it mattered.']] },
        { t: 'Knows when to switch', note: 'If things get heated, it suggests moving to Repair', k: 'Refine · focus check', title: 'This feels heavy.', card: ['Attune', 'Want to pause and move into Repair instead?'], btns: [['Switch to Repair', 1], ['Keep going', 0]] }] }];
    const cur = modes[m];
    const mkScreen = (s, j) => {
      const on = j === st, kk = on ? k : 0, vis = d => on && kk >= d;
      const bub = (s.bubbles || []).map(([side, t], b) => ({ t, al: side === 'me' ? 'flex-end' : 'flex-start', r: side === 'me' ? '14px 14px 4px 14px' : '14px 14px 14px 4px', bg: side === 'me' ? '#FFFFFF' : side === 'p' ? '#FCEB3F' : 'rgba(255,255,255,.18)', fg: side === 'ai' ? '#FFFFFF' : '#0B0B0B', op: vis(b) ? 1 : 0, y: vis(b) ? '0px' : '10px' }));
      const chips = (s.chips || []).map((t, c) => { const lit = s.all ? vis(c) : (c === s.sel && vis(2)); return { t, bg: lit ? '#FFFFFF' : 'transparent', fg: lit ? '#0B0B0B' : '#FFFFFF' }; });
      const btns = (s.btns || []).map(([t, p], b) => ({ t, bg: p ? '#FFFFFF' : 'transparent', fg: p ? '#0B0B0B' : '#FFFFFF', op: vis(b + 1) ? 1 : 0, y: vis(b + 1) ? '0px' : '10px' }));
      const breath = s.circle === 'breath', timer = s.circle === 'timer';
      return { k: s.k, title: s.title, bubbles: bub, chips, btns, hasInput: !!s.input, hasCard: !!s.card, ck: s.card ? s.card[0] : '', ct: s.card ? s.card[1] : '', cardOp: vis(1) ? 1 : 0, cardY: vis(1) ? '0px' : '10px',
        hasCircle: !!s.circle, cs: breath ? (kk % 2 ? 1 : 0.5) : timer ? (0.3 + 0.7 * (kk + 1) / L) : 1, cl: breath ? (kk % 2 ? 'Breathe out' : 'Breathe in') : timer ? 'Sam · 0:' + String(45 - kk * 7).padStart(2, '0') + '\nleft' : '',
        op: on ? 1 : 0, x: j < st ? '-24px' : j > st ? '24px' : '0px' };
    };
    const safe = [
      { t: 'Pause the session', img: 'Mockups/Attune/safety-pause-screen.webp', alt: 'Attune suggests pausing a tense joint session', sheetK: 'Session paused', sheetT: 'Let’s pause here for a moment.', btns: [{ t: 'Take a breath', r: '→', bg: '#0B0B0B', fg: '#FFFFFF' }], live: ['Paused', '#6E6E69'] },
      { t: 'Check on the person first', img: 'Mockups/Attune/safety-check-in-screen.webp', alt: 'Attune gently offers professional support options in a Reflect chat', sheetK: 'Checking in', sheetT: 'Before we continue — are you safe right now?', btns: [{ t: 'I’m safe', r: '→', bg: '#EFEFEC', fg: '#0B0B0B' }, { t: 'I need support', r: '→', bg: '#E5322B', fg: '#FFFFFF' }], live: ['Paused', '#6E6E69'] },
      { t: 'Show real support options', img: 'Mockups/Attune/safety-support-screen.webp', alt: 'Attune pauses the session and brings crisis lines forward', sheetK: 'Support near you', sheetT: 'You don’t have to handle this alone.', btns: [{ t: 'Local crisis line', r: 'Call', bg: '#0B0B0B', fg: '#FFFFFF' }, { t: 'Emergency services', r: 'Call', bg: '#EFEFEC', fg: '#0B0B0B' }], live: ['Ended', '#E5322B'] }];
    const groups = ['Button', 'Card', 'Input', 'Chip'];
    const tiles = Array.from({ length: 16 }, (_, i) => ({ g: i % 4, v: Math.floor(i / 4) }));
    const mix = [5, 12, 2, 9, 14, 0, 7, 11, 3, 15, 6, 1, 10, 13, 4, 8];
    const roleRows = [['Who’s in it', x => x.who === 1 ? 'Just me' : 'Both of us', x => x.who === 1 ? '●' : '●●'], ['AI’s job', x => x.role, () => ''], ['Pace', x => x.pace, () => '']];
    return {
      atChapters: chap.map(([t, id], i) => ({ t, n: String(i + 1).padStart(2, '0'), href: '#' + id, bg: i === ch ? '#FFFFFF' : 'transparent', onGo: () => this.setState({ atCh: i }) })),
      atHeroModes: modes.map((x, i) => ({ t: x.t, k: x.k, q: x.q, n: n2(i), img: U(x.img), flex: i === hm ? 3 : 1, qOp: i === hm ? 1 : 0, onPick: pick('atH', i) })),
      atMoves: [['Split private and shared spaces', 'model'], ['Gave the AI a different job in each mode', 'roles'], ['Turned feature cards into full‑screen rooms', 'rooms'], ['Planned every step inside each room', 'flows'], ['Decided when the AI should stop', 'safety']].map(([t, id], i) => ({ t, n: n2(i), href: '#' + id, bg: i === 3 ? '#0B0B0B' : i === 4 ? '#FCEB3F' : '#FFFFFF', fg: i === 3 ? '#FFFFFF' : '#0B0B0B', nc: i === 3 ? '#FCEB3F' : '#E5322B' })),
      atSame: ['Alone with a thought', 'Right after a fight', 'Working it out together', 'In a crisis'].map((t, i) => ({ t, n: n2(i) })),
      atRoleCols: modes.map((x, i) => ({ t: x.t, n: n2(i), bg: 'transparent', fg: '#0B0B0B', nc: '#E5322B' })),
      atRoleRows: roleRows.map(([kk, f, d]) => ({ k: kk, cells: modes.map((x, i) => ({ t: f(x), dots: d(x), bg: 'transparent', fg: '#0B0B0B', bd: '#0B0B0B14' })) })),
      atModelDot: ['12.5%', '37.5%', '62.5%', '87.5%'][md],
      atModelCards: modes.map((x, i) => ({ t: x.t, q: x.q, img: U(x.img), lift: i === md ? '-8px' : '0px', sh: i === md ? '0 24px 40px -20px rgba(0,0,0,.45)' : '0 1px 2px rgba(0,0,0,.05)', onPick: pick('atMd', i) })),
      atModes: modes.map((x, i) => { const on = i === m; return { t: x.t, k: x.k, n: n2(i), img: U(x.img), onMode: () => this.atGo(i), tabBg: on ? '#FCEB3F' : 'transparent', tabFg: on ? '#0B0B0B' : '#FFFFFF', tabK: on ? '#E5322B' : '#FFFFFF80', prog: on ? ((st * L + k + 1) / (4 * L) * 100) + '%' : '0%', op: on ? 1 : 0, sc: on ? 1.06 : 1.14, pillBg: on ? '#FFFFFF' : 'transparent', pillFg: on ? '#0B0B0B' : '#FFFFFF' }; }),
      atMode: { t: cur.t, k: cur.k, role: cur.role, kBg: cur.k === 'Private' ? '#FFFFFF' : '#FCEB3F' },
      atScreens: cur.steps.map(mkScreen),
      atSteps: cur.steps.map((s, j) => { const on = j === st; return { t: s.t, note: s.note, n: n2(j), nc: on ? '#FCEB3F' : '#FFFFFF80', op: on ? 1 : 0.5, mh: on ? '60px' : '0px', prog: on ? ((k + 1) / L * 100) + '%' : '0%', onPick: () => this.setState({ atSt: j, atK: 0 }) }; }),
      atFlow: modes.map((x, i) => { const on = i === (S.atF ?? 0), play = i === (S.atAct ?? -1), keep = i === (S.atKeep ?? -1) && !play; return { t: x.t, k: x.k, dots: x.k === 'Private' ? '●' : '●●', role: x.role, q: x.q, n: n2(i), img: U(x.img), proto: U(x.proto), poster: U(x.proto.replace('prototypes/attune-', 'Mockups/Attune/proto-').replace('.html', '-start.webp')), play, keep, run: i + '-' + ((S.atKeys || {})[i] ?? 0), onReady: play ? () => (this.state.atKeep ?? -1) >= 0 && this.setState({ atKeep: -1 }) : undefined, steps: x.steps.map((s, j) => ({ t: s.t, note: s.note, n: n2(j) })), op: on ? 1 : 0, stepOp: on ? 1 : 0.3 }; }), atPhoneTop: S.atPT ?? '170px',
      atSafe: safe.map((x, i) => { const on = i === sf; return { ...x, n: n2(i), bg: on ? '#0B0B0B' : '#EFEFEC', fg: on ? '#FFFFFF' : '#0B0B0B', nc: on ? '#FCEB3F' : '#E5322B', op: on ? 1 : 0, phoneOp: on ? 1 : 0.4, y: on ? '0px' : '30px', onPick: () => { const el = document.querySelector(`[data-atsafe="${i}"]`); if (el) scrollToSection(el); } }; }), atSafeTop: S.atSPT ?? '150px',
      atSafeLive: { t: safe[sf].live[0], bg: safe[sf].live[1] }, atSafeChatOp: sf ? 0.35 : 0.8, atSafeBlur: sf ? '2px' : '0px',
      atSysTabs: ['Duplicates', 'Variants'].map((t, i) => ({ t, w: i === sy ? 600 : 500, onPick: pick('atSys', i) })), atSysLeft: sy ? '50%' : '4px',
      atSysCap: sy ? 'After: 4 components with variants, organised module by module.' : 'Before: near‑identical one‑offs scattered across screens.',
      atTiles: tiles.map((x, i) => { const master = x.v === 0; return sy ? { ord: x.g * 4 + x.v, t: groups[x.g], k: master ? 'Component' : 'Variant /' + (x.v + 1), bg: master ? '#0B0B0B' : '#FFFFFF', fg: master ? '#FFFFFF' : '#0B0B0B', bd: master ? '#0B0B0B' : '#0B0B0B33', kc: master ? '#FCEB3F' : '#E5322B' } : { ord: mix[i], t: groups[x.g] + ' copy ' + (x.v + 2), k: 'Screen ' + (mix[i] + 12), bg: '#EFEFEC', fg: '#6E6E69', bd: '#EFEFEC', kc: '#6E6E69' }; }),
      atOut: ['A clear AI role in each mode', 'Clear lines between private and shared', 'AI that responds to the moment', 'Consent before anything is shared', 'A proper safety flow', 'A design system ready for handoff'],
      atLearn: ['Why is AI here?', 'What should it know?', 'What stays private?', 'When should it stop?'].map((t, i) => ({ t, n: n2(i) }))
    };
  }
  dlGo(i) { this.setState({ dlD: i }, () => this.dlSync()); }
  dlSync() { const cur = this.state.dlD ?? 0; (this._dlEls || []).forEach((v, k) => { if (!v) return; if (k === cur) { v.currentTime = 0; v.play().catch(() => {}); } else { v.pause(); } }); }
  dlRef(i) { this._dlR = this._dlR || []; return this._dlR[i] || (this._dlR[i] = el => { this._dlEls = this._dlEls || []; this._dlEls[i] = el; if (el) { el.muted = true; if (i === (this.state.dlD ?? 0)) el.play().catch(() => {}); else el.pause(); } }); }
  dlVals() {
    const S = this.state, U = p => encodeURI(p), n2 = i => String(i + 1).padStart(2, '0');
    const chap = [['TL;DR','tldr'],['Overview','overview'],['Problem','problem'],['Goals','goals'],['Process','process'],['Onboarding','onboarding'],['27 states','states'],['Day pattern','day'],['Patterns','patterns'],['Expiry','expiry'],['Learned','learned']];
    const ch = S.dlCh ?? 0, jo = S.dlJ ?? 0, go = S.dlG ?? 0, dy = S.dlD ?? 0, ex = S.dlE ?? 0;
    const jr = [{ t: 'Original', src: U('Mockups/Delicut/Delicut_Original.png'), cap: 'Expected: choose → start → receive → finish', bg: '#FFFFFF', fg: '#0B0B0B' }, { t: 'Real', src: U('Mockups/Delicut/Delicut_Real.png'), cap: 'Reality: skips, pauses, address changes, returns', bg: '#E5322B', fg: '#FFFFFF' }];
    const goals = [['Know which meals are coming and what can still be changed', 'Fewer support questions about meal schedules and cut‑off times'], ['Skip a day or change a meal without getting lost', 'Let customers manage their plan themselves instead of calling support'], ['See past and upcoming plan activity in one place', 'Make renewing easier so more customers stay on']];
    const days = [
      { rel: 'Locked', t: 'Today', badge: 'View only', vid: 'Videos/Delicut/2New-screen.mp4', d: 'Today’s delivery is locked. Customers can see their meals and delivery details but can’t change them, and the screen makes that clear without looking broken.', acts: ['See meals', 'Delivery details'] },
      { rel: 'Past', t: 'Yesterday', badge: 'Rate meal', vid: 'Videos/Delicut/4New-screen.mp4', d: 'For past days, delivery options are replaced with rating. If the delivery was skipped, there’s nothing to rate, so rating is hidden.', acts: ['Rate meals', 'Check delivery'] },
      { rel: 'Open', t: 'Tomorrow', badge: 'Manage delivery', vid: 'Videos/Delicut/3New-screen.mp4', d: 'Before the cut‑off time, future days have the most actions. The goal was to make them easy to find without crowding the card.', acts: ['Change meal', 'Skip delivery', 'Resume delivery', 'Change address'] }];
    const exp = [
      { t: 'Active', imgs: ['Mockups/Delicut/Expiry Active.webp'], d: 'The full daily view, with meals and delivery controls.', shows: 'Meals and delivery controls' },
      { t: 'Ending soon', imgs: ['Mockups/Delicut/Expiry Expiring Soon.webp'], d: 'A reminder appears on the home screen with days left and a renew button.', shows: 'Meals and a renewal reminder' },
      { t: 'Expired', imgs: ['Mockups/Delicut/Expiry Expired 1.webp', 'Mockups/Delicut/Expiry Expired 2.webp'], d: 'Meal actions are gone. Plan details stay, with a clear way to renew.', shows: 'Plan summary and renew option' },
      { t: 'Renewed', imgs: ['Mockups/Delicut/Expiry Renewed.webp'], d: 'The daily view comes back, starting from the new plan date.', shows: 'Meals and delivery controls again' }];
    const pick = (k, i) => () => this.state[k] !== i && this.setState({ [k]: i });
    return {
      dlChapters: chap.map(([t, id], i) => ({ t, n: String(i).padStart(2, '0'), href: '#' + id, bg: i === ch ? '#FFFFFF' : 'transparent', onGo: () => this.setState({ dlCh: i }) })),
      dlJourneys: jr.map((j, i) => ({ ...j, op: i === jo ? 1 : 0, y: i === jo ? '0px' : '12px', w: i === jo ? 600 : 500, onPick: pick('dlJ', i) })),
      dlJourneysN: 2, dlJourneysW: 'calc(50% - 4px)', dlJourneyLeft: jo ? '50%' : '4px', dlJourneyCur: jr[jo],
      dlGoals: goals.map(([u, b], i) => { const on = i === go; return { u, b, n: n2(i), bg: on ? '#0B0B0B' : '#FFFFFF', fg: on ? '#FFFFFF' : '#0B0B0B', k: on ? '#FCEB3F' : '#6E6E69', dot: on ? '#FCEB3F' : '#EFEFEC', onPick: pick('dlG', i) }; }),
      dlPath: [['Website', 'Visit the site'], ['Website', 'Pick a meal plan'], ['Website', 'Enter details'], ['Website', 'Subscribe'], ['App', 'Open the app and carry on, not start over']].map(([where, t], i) => { const app = i === 4; return { where, t, n: n2(i), bg: app ? '#0B0B0B' : '#FFFFFF', fg: app ? '#FFFFFF' : '#0B0B0B', k: app ? '#FCEB3F' : '#E5322B' }; }),
      dlKnow: ['What details customers had already given', 'What choices they had already made', 'What they’d expect to see after paying', 'Which parts should carry over into the app'].map((t, i) => ({ t, n: n2(i) })),
      dlOnb: ['Activity level', 'Height', 'Current weight', 'Target weight', 'Fitness device'].map((t, i) => ({ t, n: n2(i) })),
      dlAxes: ['Plan status', 'Selected date', 'Delivery status', 'Meal assignment', 'Cut‑off rules'],
      dlDays: days.map((d, i) => { const on = i === dy; return { ...d, n: n2(i), stepOp: on ? 1 : 0.3, vid: U(d.vid), op: on ? 1 : 0, bg: on ? '#FCEB3F' : 'transparent', fg: on ? '#0B0B0B' : '#FFFFFF', k: on ? '#E5322B' : '#FFFFFF80', onPick: () => this.dlGo(i), onEnd: () => i === (this.state.dlD ?? 0) && this.dlGo(i) /* replay: scrolling, not the clock, moves to the next day */, ref: this.dlRef(i) }; }),
      dlDay: days[dy], dlPhoneTop: (S.dlPT ?? 170) + 'px',
      dlPatterns: [{ n: 'Pattern 01', t: 'Skip and resume', src: U('Mockups/Delicut/Pattern Skip Resume.webp'), d: 'One calendar shows active and skipped days at a glance. Customers pause specific dates, not the whole plan.' }, { n: 'Pattern 02', t: 'Cut‑off drawer', src: U('Mockups/Delicut/Pattern Cut-off Drawer.webp'), d: 'When a delivery can’t be changed, a bottom sheet explains why and shows the cut‑off time that passed. Customers are never left tapping a locked day with no response.' }],
      dlExp: exp.map((e, i) => { const on = i === ex; return { t: e.t, n: n2(i), bg: on ? '#FCEB3F' : 'transparent', fg: '#0B0B0B', ring: on ? '#FCEB3F' : '#0B0B0B26', cardBg: on ? '#0B0B0B' : '#FFFFFF', cardFg: on ? '#FFFFFF' : '#0B0B0B', cardSh: on ? '0 14px 28px -14px rgba(0,0,0,.5)' : '0 1px 2px rgba(0,0,0,.05)', hint: on ? 'Showing now' : i < ex ? 'Seen' : 'Up next', hintC: on ? '#FCEB3F' : '#6E6E69',
        // progress bar: earlier stages full, the current one fills over EXP_MS, later ones empty
        track: on ? '#FFFFFF26' : '#0B0B0B14', fillC: on ? '#FCEB3F' : '#0B0B0B', fill: i < ex ? '100%' : '0%', anim: on ? `prog ${EXP_MS}ms linear forwards` : 'none', runKey: on ? 'run' + (S.dlEK ?? 0) : 'idle',
        onEnd: on ? () => this.setState(s => ({ dlE: ((s.dlE ?? 0) + 1) % 4, dlEK: (s.dlEK ?? 0) + 1 })) : undefined,
        onPick: () => this.setState(s => ({ dlE: i, dlEK: (s.dlEK ?? 0) + 1 })) }; }),
      dlExpPlay: S.dlEP || !S.dlEV ? 'paused' : 'running', dlExpPause: () => this.setState({ dlEP: true }), dlExpResume: () => this.setState({ dlEP: false }),
      dlExpCur: { ...exp[ex], n: n2(ex) },
      // Per-stage phone screens (1 or 2 phones); stages without new screens fall back to the old composite.
      dlExpStages: exp.map((e, i) => ({ imgs: (e.imgs || []).map(U), op: i === ex ? 1 : 0, fallback: !(e.imgs || []).length }))
    };
  }
  csVals() {
    const S = this.state, U = p => encodeURI(p);
    const chap = [['TL;DR','tldr'],['Prototype','proto'],['Problem','problem'],['Research','research'],['Workflow','workflow'],['Mental model','model'],['Iterations','iter'],['Final design','final'],['Outcome','outcome'],['Reflection','reflect']];
    const ch = S.csCh ?? 0;
    // Problem section: the three annotated screens, side by side (one sentence each)
    const problems = [
      ['Main dashboard', 'Mockups/DarkRoast/Problem 1 - Main Dashboard.webp', 'The list showed status and dates, but nothing told a brand which project needed their attention.'],
      ['Project detail', 'Mockups/DarkRoast/Problem 2 - Project Detail.webp', 'The top bar and brief panel took so much space that messages got squeezed into a narrow column.'],
      ['File management', 'Mockups/DarkRoast/Problem 3 - File Management.webp', 'Files sat in a plain list with long names, so finding the right version meant opening each one.']];
    const fl = S.csFlip || {};
    const survey = [['Needs better mobile experience', 'Layouts didn’t adjust well to smaller screens'], ['Needs better file management', 'The right file was hard to find inside long chats'], ['Issues with text, links and spacing', 'Small visual bugs made the platform feel less reliable'], ['Providing small updates felt too formal', 'The platform was built for formal updates, not quick replies']];
    const steps = [['Send a brief', 'The brand explains what they need, with sizes and formats.'], ['Start the work', 'A designer is assigned, and the brand knows who is on it.'], ['Track progress', 'See which projects need attention without opening each one.'], ['Review designs', 'View drafts in any format, from images to videos, in one place.'], ['Give feedback', 'Reply quickly in chat, or leave detailed notes when needed.'], ['Reuse past work', 'Use old briefs and files to start the next project faster.']];
    const st = S.csStep ?? 2;
    const modes = [
      { k: 'Working', t: 'Messages and feedback', d: 'This is where brands spend most of their time, so it gets the most space.' },
      { k: 'Checking', t: 'Brief and project details', d: 'Brands need this sometimes, so it stays one click away.' }];
    const iterK = 'Status · Priority · Slots · Grouping';
    const iterD = 'I started with the Projects page, because that’s where brands decide what to look at first. Each version tested how much to show in the list and how much to keep inside the project.';
    const sets = [
      { t: 'Project listing', k: iterK, d: iterD, items: [
        ['Grouped projects by status, with priority tags and quick view and pause buttons', 'Dark Roast Project Listing Page Iterations/Listing V4 - Grouped by status.webp'],
        ['Added a “slots used” bar to show how many active projects a brand had left', 'Dark Roast Project Listing Page Iterations/Listing V3 - Slots used.webp'],
        ['Simple list with a coloured status tag on each project', 'Dark Roast Project Listing Page Iterations/Listing V2 - Status tags.webp'],
        ['Added priority and a red edge to flag projects waiting on the brand', 'Dark Roast Project Listing Page Iterations/Listing V1 - Priority and red edge.webp']] },
      { t: 'Detail header', k: iterK, d: iterD, items: [
        ['Opened the brief as a side panel next to messages, so brands could check it while chatting', 'Dark Roast Project Detail Page Iterations/Header V1 - Brief side panel.webp'],
        ['Kept it minimal, with status next to the title and everything else behind a “Project details” button', 'Dark Roast Project Detail Page Iterations/Header V2 - Minimal.webp'],
        ['Brought priority, status and dates into their own row so they’re visible at a glance', 'Dark Roast Project Detail Page Iterations/Header V3 - Details row.webp'],
        ['Added a “% complete” tag and search inside the project, but the header started getting busy', 'Dark Roast Project Detail Page Iterations/Header V4 - Percent complete and search.webp']] }];
    const si = S.csSet ?? 0, set = sets[si];
    const ii = Math.min(S.csIt ?? 0, set.items.length - 1);
    const pairs = [
      { t: 'Navigation', before: 'Before After/v2/1-before.webp', after: 'Before After/v2/1-after.webp', b: 'Project types and statuses were mixed into one row of tabs.', a: 'Type tabs sit on top, and projects are grouped by status underneath.' },
      { t: 'Project listing', before: 'Before After/v2/2-before.webp', after: 'Before After/v2/2-after.webp', b: 'Status was small grey text, and the coloured bars had no clear meaning.', a: 'Each row shows status and priority clearly, so brands know what needs them first.' },
      { t: 'Messages', before: 'Before After/v2/3-before.webp', after: 'Before After/v2/3-after.webp', b: 'Messages were squeezed between a crowded top bar and a large brief panel.', a: 'The brief opens only when needed, so messages get the full width.' },
      { t: 'File review', before: 'Before After/v2/4-before.webp', after: 'Before After/v2/4-after.webp', b: 'Files sat in a grid of small cards, with long names that ran into each other and no clear file type.', a: 'Each file shows a preview, file type, uploader and date in one place.' }];
    const pi = S.csPair ?? 0, cmps = S.csCmps || {};
    return {
      csChapters: chap.map(([t, id], i) => ({ t, n: String(i).padStart(2, '0'), href: '#' + id, bg: i === ch ? '#FFFFFF' : 'transparent', onGo: () => this.setState({ csCh: i }) })),
      csProblems: problems.map(([t, p, d], i) => ({ t, d, src: U(p), n: String(i + 1).padStart(2, '0') })),
      csSurvey: survey.map(([q, a], i) => ({ q, a, n: String(i + 1).padStart(2, '0'), rot: fl[i] ? '180deg' : '0deg', onIn: () => this.setState(st => ({ csFlip: { ...(st.csFlip || {}), [i]: true } })), onOut: () => this.setState(st => ({ csFlip: { ...(st.csFlip || {}), [i]: false } })) })),
      csSteps: steps.map(([t, d], i) => { const on = i === st; return { t, d, n: String(i + 1), isNow: i === 2, size: on ? '72px' : '56px', pad: [56, 20, 0, 0, 20, 56][i] + 'px', bg: on ? '#0B0B0B' : '#FFFFFF', fg: on ? '#FCEB3F' : '#0B0B0B', sh: on ? '0 16px 30px -14px rgba(0,0,0,.5)' : 'none', fw: on ? 600 : 500, onPick: () => this.state.csStep !== i && this.setState({ csStep: i }) }; }),
      csStep: { n: '0' + (st + 1), t: steps[st][0], d: steps[st][1] },
      csStepPrev: () => this.setState({ csStep: (st + 5) % 6 }), csStepNext: () => this.setState({ csStep: (st + 1) % 6 }),
      csModes: modes.map((m, i) => ({ ...m, bg: i === 0 ? '#0B0B0B' : '#FFFFFF', fg: i === 0 ? '#FFFFFF' : '#0B0B0B', chip: i === 0 ? '#FFFFFF1A' : '#EFEFEC', tagBg: i === 0 ? '#FCEB3F' : '#EFEFEC', tagFg: '#0B0B0B' })),
      csIterLanes: sets.map((s, li) => ({ t: s.t, ratio: li ? '1440 / 520' : '1440 / 1000', pad: li ? undefined : '4%', items: s.items.map(([t, p], i) => ({ t, n: 'V' + (i + 1), src: U(p) })) })), csIterTags: iterK.split(' · '), csIterIntro: iterD,
      csIterSets: sets.map((s, i) => ({ t: s.t, w: i === si ? 600 : 500, onPick: () => this.setState({ csSet: i, csIt: 0 }) })),
      csIterLeft: si ? '50%' : '4px', csIterSet: set,
      csIters: set.items.map(([t, p], i) => ({ t, n: 'V' + (i + 1), src: U(p), op: i === ii ? 1 : 0, s: i === ii ? 1 : 1.03, bg: i === ii ? '#FFFFFF' : '#E2E2DE', onPick: () => this.state.csIt !== i && this.setState({ csIt: i }) })),
      csIterCur: { n: 'V' + (ii + 1), t: set.items[ii][0] },
      // Final design: the names and Before/After notes stay pinned on the left while the four
      // comparisons scroll past on the right; the one crossing the middle of the screen is active
      // (scroll spy above). Picking a name scrolls to its comparison.
      csPairs: pairs.map((p, i) => { const on = i === pi; return { t: p.t, n: '0' + (i + 1), bg: on ? '#0B0B0B' : '#FFFFFF', fg: on ? '#FFFFFF' : '#0B0B0B', nc: on ? '#FCEB3F' : '#E5322B', onPick: () => { const el = document.querySelector(`[data-csfinal="${i}"]`); if (el) scrollToSection(el); } }; }),
      csPair: pairs[pi], csFinalTop: (S.csPT ?? 150) + 'px',
      csFinals: pairs.map((p, i) => { const c = cmps[i] ?? 50; return { ...p, i, n: '0' + (i + 1), before: U(p.before), after: U(p.after), pos: c + '%', rest: (100 - c) + '%',
        onDown: (e) => { e.preventDefault(); this.cmpDrag = i; try { e.currentTarget.setPointerCapture(e.pointerId); } catch (_) {} },
        onMove: (e) => { if (this.cmpDrag !== i) return; const r = e.currentTarget.getBoundingClientRect(); const v = Math.max(2, Math.min(98, (e.clientY - r.top) / r.height * 100)); this.setState(st => ({ csCmps: { ...(st.csCmps || {}), [i]: v } })); },
        onUp: () => { this.cmpDrag = null; } }; })
    };
  }
  vals9(works, allCmds, sfx = '', pal = null) {
    const P = pal || { bg: ['#FAF8EE', '#E6E2D1', '#D6D1BE'], dot: '#E3DC4A', ink: '#3A3226', paper: '#F1EEDC' };
    const st = (k) => this.state[k + sfx];
    const seam = st('seam9') ?? 71;
    const fo = st('folder9') ?? 0;
    const order = [0, 1, 2].filter(i => i !== fo);
    const folders9 = works.map((w, i) => {
      const depth = i === fo ? 0 : order.indexOf(i) + 1;
      return { ...w, href: sfx === 'd' && ({ darkroast: 'project-darkroast.html', delicut: 'project-delicut.html', case3: 'project-attune.html' })[w.key] || w.href, num: String(i + 1).padStart(2, '0'), tabLeft: (i * 286) + 'px', z: 10 - depth, top: (depth === 0 ? 40 : depth === 1 ? 20 : 0) + 'px',
        bg: P.bg[depth], dot: depth === 0 ? P.dot : 'transparent', dotFg: depth === 0 ? '#F1EEDC' : '#3A3226', arrow: depth === 0 ? '↓' : '↑', role: { darkroast: 'Product Designer', delicut: 'Product Designer', case3: 'Product Designer' }[w.key], platform: { darkroast: 'Web app', delicut: 'Web and mobile app', case3: 'Mobile app' }[w.key], year: { darkroast: '2026', delicut: '2025', case3: '2026' }[w.key], filter: depth === 0 ? 'none' : 'grayscale(1)',
        onOpen: () => this.setState({ ['folder9' + sfx]: i }), on: depth === 0,
        ...(() => { const k = sfx + w.key, o = this.state.rcH === k; return {
          rcIn: () => this.setState({ rcH: k }), rcOut: () => this.state.rcH === k && this.setState({ rcH: null }),
          rcR: o ? '150%' : '0px' /* 150% of the pill's reference size reaches past its far (left) edge; 120% fell short */, rcTr: o ? 'clip-path 1.5s cubic-bezier(.45,0,.2,1)' : 'clip-path .9s cubic-bezier(.45,0,.2,1)',
          rcTxtOp: o ? 1 : 0, rcTxtY: o ? '0px' : '6px', rcTxtTr: o ? 'opacity .8s ease .55s, transform .9s cubic-bezier(.2,.8,.2,1) .55s' : 'opacity .2s ease, transform .2s ease',
          rcInsight: { darkroast: 'Sometimes the best redesign is the one users barely have to relearn.', delicut: 'Map every messy situation first, and the screens get much simpler.', case3: 'With AI, knowing when it should stop matters as much as what it says.' }[w.key],
          rcBg: o ? '#FFFFFF' : '#0B0B0B', rcBgTr: o ? 'background-color 0s 1.5s' : 'background-color 0s' /* go white once the fill has covered the pill, so no dark edge shows around it */, rcRot: o ? '-45deg' : '0deg', rcRing: o ? '10px' : '0px' }; })(), segFg: depth === 0 ? '#0B0B0B' : '#6E6E69', segW: depth === 0 ? 600 : 500, cardOp: depth === 0 ? 1 : 0, cardY: depth === 0 ? '0px' : '8px', tabBg: depth === 0 ? '#FFFFFF' : 'transparent', earL: depth === 0 && i > 0 ? 'block' : 'none', earR: depth === 0 ? 'block' : 'none', sep: depth !== 0 && i < 2 && i + 1 !== fo ? 'block' : 'none', cardS: depth === 0 ? 1 : 0.985, cardPe: depth === 0 ? 'auto' : 'none', tabTop: depth === 0 ? '0px' : '16px', tabH: depth === 0 ? '64px' : '48px', tabBar: depth === 0 ? P.ink : 'transparent', tabOp: depth === 0 ? 1 : 0.78, tabNum: depth === 0 ? '30px' : '24px' };
    });
    const list = allCmds.filter(c => ['why', 'about', 'email', 'resume'].includes(c.id));
    const q = (st('q9') || '').toLowerCase().trim();
    const f = list.filter(c => !q || (c.label + ' ' + c.body).toLowerCase().includes(q));
    const sel = f.some(c => c.id === st('sel9')) ? st('sel9') : (f[0] && f[0].id);
    const raw = list.find(c => c.id === sel) || list[0];
    const cur9 = { ...raw, href: raw.href === '#3c' ? (sfx === 'd' ? '#about' : sfx === 'c' ? '#10a-ask' : sfx ? '#9b-ask' : '#9a-ask') : raw.href, onAct: raw.act ? (e) => { e.preventDefault(); this.copyEmail(); } : undefined };
    if (sfx === 'd' && cur9.cta) cur9.cta = cur9.cta.replace(/\s*[↗→↑]\uFE0E?\s*$/, '');
    const out = {
      segLeft9: 'calc((100% - 8px) / 3 * ' + fo + ')', segCount9: String(fo + 1).padStart(2, '0'), cardR9: fo === 0 ? '0 24px 24px 24px' : '24px',
      onStep9: (i) => this.setState({ ['folder9' + sfx]: i }) /* scrolling through the pinned Work section */, onPrev9: () => this.setState({ ['folder9' + sfx]: (fo + 2) % 3 }), onNext9: () => this.setState({ ['folder9' + sfx]: (fo + 1) % 3 }),
      folders9, cur9, q9: st('q9') || '', empty9: f.length === 0,
      cmds9: f.map(c => { const on = c.id === sel; return { ...c, idx: String(list.indexOf(c) + 1).padStart(2, '0'), chev: on ? 1 : 0, bg: on ? (P.selBg || P.ink) : 'transparent', fg: on ? (P.selFg || P.paper) : P.ink, bd: 'transparent', onPick: () => st('sel9') !== c.id && this.setState({ ['sel9' + sfx]: c.id }) }; }),
      onQ9: (e) => this.setState({ ['q9' + sfx]: e.target.value }),
      onKey9: (e) => {
        const ix = f.findIndex(c => c.id === sel);
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') { e.preventDefault(); const n = f[(ix + (e.key === 'ArrowDown' ? 1 : -1) + f.length) % f.length]; n && this.setState({ ['sel9' + sfx]: n.id }); }
        if (e.key === 'Enter') { if (raw.act) this.copyEmail(); else if (raw.target === '_blank') window.open(raw.href, '_blank'); }
      },
      seam9Left: seam + '%', seam9Right: (100 - seam) + '%',
      seam9Hint: seam > 85 ? '← drag to see the thinking' : seam < 15 ? 'drag to see the polish →' : 'polish ← → thinking',
      onSeam9Down: (e) => { e.preventDefault(); this['seam9Drag' + sfx] = true; },
      onSeam9Move: (e) => { if (!this['seam9Drag' + sfx]) return; const r = e.currentTarget.getBoundingClientRect(); this.setState({ ['seam9' + sfx]: Math.max(0, Math.min(100, (e.clientY - r.top) / r.height * 100)) }); },
      onSeam9Up: () => { this['seam9Drag' + sfx] = false; }
    };
    return sfx ? Object.fromEntries(Object.entries(out).map(([k, v]) => [k.replace('9', '9' + sfx), v])) : out;
  }
  renderVals() {
    // The order here is the order of the case studies in the Projects section.
    const works = [
      { key: 'delicut', title: 'Delicut', desc: 'A meal plan app built for customers who skip days and come back later.', tags: 'Product design · UAE', href: 'project-delicut.html' },
      { key: 'darkroast', title: 'DarkRoast', desc: 'A dashboard that shows brands which design project needs them today.', tags: 'Product design', href: 'index.html' },
      { key: 'case3', title: 'Attune AI', desc: 'Deciding when an AI should help a couple and when it should step back.', tags: 'AI product design', href: 'project-attune.html' }
    ].map(w => ({ ...w, placeholder: w.title + ' cover' }));
    const about = [
      { n: '01', title: 'Background', body: 'Trained in industrial design before moving into digital products — I still design for how things get built.' },
      { n: '02', title: 'Past Experience', body: 'I’ve led product design at two early‑stage startups, shipping zero‑to‑one apps from concept to launch.' },
      { n: '03', title: 'Approach', body: 'I treat every brief as a systems problem — clarity of thinking first, aesthetics second.' },
      { n: '04', title: 'Current Experience', body: 'Designing full‑stack digital products for global clients, balancing craft with delivery speed.' },
      { n: '05', title: 'Inspiration', body: 'Architecture, long walks, and late‑night reading fuel most of my best ideas.' }
    ];
    const extra = {
      darkroast: { frame: 'Frame 02 — DarkRoast / Desktop', metric: 'Brands could track 5 design projects at once instead of 1', tag1: 'Agency platform' },
      delicut: { frame: 'Frame 03 — Delicut / Mobile', metric: 'Customers could skip, pause or change meals without calling support', tag1: 'Meal subscription' },
      case3: { frame: 'Frame 04 — Case 03 / Desktop', metric: 'An AI that helps couples work through fights without taking sides', tag1: 'AI for couples' }
    };
    const tilts = ['-2deg', '1.5deg', '-1deg'];
    works.forEach((w, i) => Object.assign(w, extra[w.key], { tilt: tilts[i] }));
    const hov = this.state.hov ?? 0;
    const worksC = works.map((w, i) => ({
      ...w, num: '(' + String(i + 1).padStart(2, '0') + ')',
      color: i === hov ? '#FF5B1F' : '#F2EFE8',
      fvs: i === hov ? "'wdth' 100, 'wght' 900" : "'wdth' 62, 'wght' 800",
      op: i === hov ? 1 : 0,
      onEnter: () => this.state.hov !== i && this.setState({ hov: i })
    }));
    const mx = this.state.mx;
    const letters = 'AAYUSHI'.split('').map((ch, i) => {
      const d = mx == null ? 0.5 : Math.min(1, Math.abs(mx * 6 - i) / 3);
      const k = 1 - d;
      return { ch, fvs: `'wght' ${Math.round(200 + 700 * k)}, 'wdth' ${Math.round(62 + 50 * k)}`, color: k > 0.8 ? '#FF5B1F' : '#F2EFE8' };
    });
    const pal = ['#E8D84A', '#F7F6F2', '#F2A07B', '#C9C0FF', '#E8D84A'];
    const rots = ['-1.5deg', '1deg', '-0.5deg', '1.5deg', '-1deg'];
    const rooms = ['I', 'II', 'III'];
    const works3 = works.map((w, i) => ({ ...w, room: rooms[i], cols: i % 2 ? '5fr 7fr' : '7fr 5fr', imgOrder: i % 2 ? 2 : 1, txtOrder: i % 2 ? 1 : 2 }));
    const ex = this.state.ex ?? 0;
    const worksB = works.map((w, i) => ({ ...w, num: String(i + 1).padStart(2, '0'), flex: i === ex ? 3 : 1, op: i === ex ? 1 : 0, onEnter: () => this.state.ex !== i && this.setState({ ex: i }) }));
    const quick = (this.state.read ?? 'quick') === 'quick';
    const allCmds = [
      { id: 'why', label: 'Why hire Aayushi?', kind: 'ASK', title: 'Why hire Aayushi?', body: '3+ years across enterprise, e‑commerce and ed‑tech. Cut task completion time 28% and design‑to‑dev handoff 35%. Authorized to work full‑time in Canada — open to work in 2026.', cta: 'Download résumé ↗\uFE0E', href: 'resume.pdf', target: '_blank' },
      ...works.map(w => ({ id: w.key, label: 'View ' + w.title, kind: 'PROJECT', title: w.title, body: w.desc + ' — ' + w.metric, cta: 'Open case study →', href: w.href, target: '_self', hasImg: true, key: w.key, ph: w.title + ' preview' })),
      { id: 'about', label: 'About me', kind: 'PAGE', title: 'About me', body: 'I treat every brief as a systems problem — clarity of thinking first, aesthetics second. I’ve led product design at two early‑stage startups, shipping zero‑to‑one apps from concept to launch.', cta: 'Read more →', href: '#3c', target: '_self' },
      { id: 'email', label: 'Copy email', kind: 'ACTION', title: 'aayushipatel2002@gmail.com', body: 'Available for Freelance, Full‑time & Collaborations. Let’s connect today.', cta: this.state.copied ? 'Copied ✓' : 'Copy email', href: '#3c', target: '_self', act: true },
      { id: 'resume', label: 'Download résumé', kind: 'FILE', title: 'Résumé — 2026', body: 'One page. Experience, outcomes and toolkit.', cta: 'Download ↗\uFE0E', href: 'resume.pdf', target: '_blank' }
    ];
    const q = (this.state.cmdQ || '').toLowerCase().trim();
    const filtered = allCmds.filter(c => !q || (c.label + ' ' + c.body).toLowerCase().includes(q));
    const selId = filtered.some(c => c.id === this.state.cmdSel) ? this.state.cmdSel : (filtered[0] && filtered[0].id);
    const curRaw = allCmds.find(c => c.id === selId) || allCmds[0];
    const cur = { hasImg: false, key: 'x', ph: '', ...curRaw, onAct: curRaw.act ? (e) => { e.preventDefault(); this.copyEmail(); } : undefined };
    const cmds = filtered.map(c => ({ ...c, bg: c.id === selId ? '#2A2B2E' : 'transparent', fg: c.id === selId ? '#E9E4DA' : '#BDB7AC', onPick: () => this.state.cmdSel !== c.id && this.setState({ cmdSel: c.id }) }));
    const D = this.deskDefs || (this.deskDefs = [
      { id: 'hero', type: 'hero', w: 520, x: 300, y: 250, r: -2, tx: 40, ty: 40 },
      { id: 'p0', type: 'photo', wi: 0, w: 260, x: 60, y: 70, r: -8, tx: 600, ty: 40 },
      { id: 'p1', type: 'photo', wi: 1, w: 260, x: 880, y: 60, r: 7, tx: 880, ty: 40 },
      { id: 'p2', type: 'photo', wi: 2, w: 250, x: 940, y: 470, r: -5, tx: 600, ty: 470 },
      { id: 'card', type: 'card', w: 340, x: 80, y: 600, r: 6, tx: 40, ty: 440 },
      { id: 'ticket', type: 'ticket', w: 300, x: 560, y: 690, r: -9, tx: 40, ty: 660 },
      { id: 'sticky', type: 'sticky', w: 190, x: 700, y: 40, r: 4, tx: 880, ty: 470 },
      { id: 'floppy', type: 'floppy', w: 170, x: 360, y: 60, r: -12, tx: 400, ty: 680 },
      { id: 'b1', type: 'badge', w: 130, x: 830, y: 350, r: 14, tx: 1090, ty: 470, title: 'since 2020', bg: '#FF7A3D', fg: '#16130F', fs: '24px' },
      { id: 'b2', type: 'badge', w: 110, x: 230, y: 470, r: -10, tx: 1090, ty: 620, title: '3+ yrs', bg: '#FFE14D', fg: '#16130F', fs: '26px' }
    ]);
    const pos = this.state.pos || {};
    const tidy = !!this.state.tidy, drag = this.state.drag;
    const z = this.state.zs || {};
    const desk = D.map((d, i) => {
      const p = pos[d.id] || (tidy ? { x: d.tx, y: d.ty } : { x: d.x, y: d.y });
      const w = d.type === 'photo' ? works[d.wi] : {};
      const isDrag = drag && drag.id === d.id;
      return {
        ...d, key: w.key, title: d.title || w.title, desc: w.desc, href: w.href, ph: (w.title || '') + ' shot',
        isHero: d.type === 'hero', isPhoto: d.type === 'photo', isCard: d.type === 'card', isTicket: d.type === 'ticket', isSticky: d.type === 'sticky', isFloppy: d.type === 'floppy', isBadge: d.type === 'badge',
        x: p.x + 'px', y: p.y + 'px', w: d.w + 'px', r: (isDrag ? 0 : tidy ? 0 : d.r) + 'deg', s: isDrag ? 1.04 : 1,
        z: z[d.id] || i + 1, sh: isDrag ? '26px' : '10px',
        tr: isDrag ? 'transform .15s, filter .15s' : 'left .7s cubic-bezier(.2,.9,.2,1.1), top .7s cubic-bezier(.2,.9,.2,1.1), transform .5s, filter .2s',
        onDown: (e) => {
          if (e.button) return;
          const mat = e.currentTarget.parentElement.getBoundingClientRect ? e.currentTarget.offsetParent.getBoundingClientRect() : null;
          const k = mat ? mat.width / 1240 : 1;
          this.zTop = (this.zTop || 20) + 1;
          this.setState({ drag: { id: d.id, sx: e.clientX, sy: e.clientY, ox: p.x, oy: p.y, k }, zs: { ...z, [d.id]: this.zTop } });
        }
      };
    });
    const pl = this.state.track ?? 0, playing = !!this.state.playing;
    const colors = ['#FFE14D', '#B9A7FF', '#7FD6B0', '#FF6A2B'];
    const durs = ['2:28', '3:35', '4:03', '6:00'];
    const tlist = [...works.map((w, i) => ({ ...w, num: String(i + 1).padStart(2, '0'), sub: w.tags, dur: durs[i], color: colors[i] })),
      { key: 'about', num: '04', title: 'About me (bonus)', sub: 'Background · approach · inspiration', dur: durs[3], color: colors[3], desc: 'I treat every brief as a systems problem — clarity of thinking first, aesthetics second.', metric: '06 years', href: '#4b-notes' }];
    const tracks = tlist.map((t, i) => ({ ...t, bg: i === pl ? '#E9DCC6' : 'transparent', btnBg: i === pl && playing ? '#FF6A2B' : 'transparent', icon: i === pl && playing ? '❚❚' : '▶\uFE0E',
      onPlay: () => this.setState(s => (s.track ?? 0) === i ? { playing: !s.playing } : { track: i, playing: true }) }));
    const cur4 = { ...tlist[pl], title: tlist[pl].title.replace(' (bonus)', '') };
    const seam = this.state.seam ?? 71;
    const fo = this.state.folder ?? 0;
    const order = [0, 1, 2].filter(i => i !== fo);
    const folders = works.map((w, i) => {
      const depth = i === fo ? 0 : order.indexOf(i) + 1;
      return { ...w, num: String(i + 1).padStart(2, '0'), tabLeft: (i * 276) + 'px', z: 10 - depth, top: (depth === 0 ? 40 : depth === 1 ? 20 : 0) + 'px',
        bg: ['#F6F5F2', '#D6D3CC', '#C4C0B8'][depth], dot: depth === 0 ? '#FF4A1C' : '#8A877F', filter: depth === 0 ? 'none' : 'grayscale(1)',
        onOpen: () => this.setState({ folder: i }) };
    });
    const sp = [{ x: '40px', y: '210px', align: 'left' }, { x: '40px', y: '480px', align: 'left' }, { x: '940px', y: '170px', align: 'left' }, { x: '940px', y: '370px', align: 'left' }, { x: '940px', y: '560px', align: 'left' }];
    const specs = about.map((a, i) => ({ ...a, ...sp[i] }));
    return {
      folders, specs,
      seamLeft: seam + '%', seamRight: (100 - seam) + '%',
      seamHint: seam > 85 ? '← drag to see the thinking' : seam < 15 ? 'drag to see the polish →' : 'polish ← → thinking',
      onSeamDown: (e) => { e.preventDefault(); this.seamDrag = true; },
      onSeamMove: (e) => { if (!this.seamDrag) return; const r = e.currentTarget.getBoundingClientRect(); this.setState({ seam: Math.max(0, Math.min(100, (e.clientY - r.top) / r.height * 100)) }); },
      onSeamUp: () => { this.seamDrag = false; },
      desk, tracks, cur4,
      playState: playing ? 'running' : 'paused',
      vinylLeft: playing ? '330px' : '20px',
      armLeft: '790px',
      armRot: playing ? '22deg' : '-4deg',
      nowLabel: playing ? 'NOW PLAYING — ' + cur4.title.toUpperCase() : 'PAUSED — PRESS ▶\uFE0E ON A TRACK',
      tidyLabel: tidy ? '↺ Make a mess' : '✦ Tidy up',
      deskHint: tidy ? 'tidy.fig — everything on the grid' : 'drag anything · then press “Tidy up”',
      toggleTidy: () => this.setState({ tidy: !tidy, pos: {} }),
      stop: (e) => e.stopPropagation(),
      stopSoft: (e) => { if (e.detail > 1) e.stopPropagation(); },
      onDeskMove: (e) => { const d = this.state.drag; if (!d) return; this.setState({ pos: { ...(this.state.pos || {}), [d.id]: { x: d.ox + (e.clientX - d.sx) / d.k, y: d.oy + (e.clientY - d.sy) / d.k } } }); },
      onDeskUp: () => this.state.drag && this.setState({ drag: null }),
      about4: about.map((a, i) => ({ ...a, bg: ['#2742E8', '#FF7A3D', '#FFE14D', '#B9A7FF', '#16130F'][i], fg: ['#F3EFE6', '#16130F', '#16130F', '#16130F', '#F3EFE6'][i] })),
      cmds6: filtered.map(c => { const on = c.id === selId; return { ...c, bg: on ? '#FFFFFF' : 'transparent', fg: on ? '#18171C' : '#4A4750', sh: on ? '0 1px 0 #ECE6DC, 0 6px 14px -8px #8A3A1F44' : 'none', dot: on ? '#FF5A36' : '#D9D2C6', onPick: () => this.state.cmdSel !== c.id && this.setState({ cmdSel: c.id }) }; }),
      cmdChips: ['why', 'delicut', 'email'].map(q => ({ q, onPick: () => this.setState({ cmdQ: q, cmdSel: null }) })),
      cmds7: filtered.map(c => { const on = c.id === selId; return { ...c, bg: on ? '#231A14' : 'transparent', fg: on ? '#F6F4EA' : '#3E342B', fw: on ? 600 : 500, tagBg: on ? '#E8343F' : '#E3E8CF', tagFg: on ? '#F6F4EA' : '#5C5246', onPick: () => this.state.cmdSel !== c.id && this.setState({ cmdSel: c.id }) }; }),
      works7: works.map((w, i) => ({ ...w, bg: ['#231A14', '#F6F4EA', '#C9D4A6'][i], fg: ['#F6F4EA', '#231A14', '#231A14'][i], imgBg: ['#3A2E25', '#E3E8CF', '#B5C28C'][i] })),
      cmds8: filtered.map((c, i) => { const on = c.id === selId; return { ...c, idx: String(i + 1).padStart(2, '0'), bg: on ? '#1C24F5' : 'transparent', fg: on ? '#F2F0EA' : '#0B0B2A', numFg: on ? '#C9CCFF' : '#5A5A78', fw: on ? 700 : 500, onPick: () => this.state.cmdSel !== c.id && this.setState({ cmdSel: c.id }) }; }),
      ...this.atVals(),
      ...this.dlVals(),
      ...this.csVals(),
      ...this.vals9(works, allCmds),
      ...this.vals9(works, allCmds, 'c', { bg: ['#F7F3E3', '#E6E0C8', '#D2CBAF'], dot: '#E2531B', ink: '#211A12', paper: '#F3EEDA', selBg: '#211A12', selFg: '#DDD51C' }),
      ...this.vals9(works, allCmds, 'd', { bg: ['#FFFFFF', '#E6E6E2', '#D4D4CF'], dot: '#0B0B0B', ink: '#0B0B0B', paper: '#FFFFFF', selBg: '#F1F1EE', selFg: '#0B0B0B' }),
      ...this.vals9(works, allCmds, 'b', { bg: ['#FAF6EE', '#EDB29C', '#CBD3B4'], dot: '#1C1712', ink: '#1C1712', paper: '#F4EEE2', selBg: '#E2EC4E', selFg: '#1C1712' }),
      works3, worksB, cmds, cur, cmdEmpty: filtered.length === 0, cmdQ: this.state.cmdQ || '',
      onCmdQ: (e) => this.setState({ cmdQ: e.target.value }),
      onCmdKey: (e) => {
        const ix = filtered.findIndex(c => c.id === selId);
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') { e.preventDefault(); const n = filtered[(ix + (e.key === 'ArrowDown' ? 1 : -1) + filtered.length) % filtered.length]; n && this.setState({ cmdSel: n.id }); }
        if (e.key === 'Enter' && cur.act) this.copyEmail();
      },
      isQuick: quick, isDeep: !quick,
      quickBg: quick ? '#111' : 'transparent', quickFg: quick ? '#F4F3EF' : '#111',
      deepBg: quick ? 'transparent' : '#111', deepFg: quick ? '#111' : '#F4F3EF',
      setQuick: () => this.setState({ read: 'quick' }), setDeep: () => this.setState({ read: 'deep' }),
      spotX: (this.state.sx ?? 640) + 'px', spotY: (this.state.sy ?? 360) + 'px',
      onSpot: (e) => { const r = e.currentTarget.getBoundingClientRect(); const k = r.width / 1280; this.setState({ sx: (e.clientX - r.left) / k, sy: (e.clientY - r.top) / k }); },
      onSpotLeave: () => this.setState({ sx: 640, sy: 360 }),
      worksC, letters,
      previewTop: (hov * 141 - 40) + 'px',
      onNameMove: (e) => { const r = e.currentTarget.getBoundingClientRect(); this.setState({ mx: (e.clientX - r.left) / r.width }); },
      onNameLeave: () => this.setState({ mx: null }),
      localTime: (this.state.now || new Date()).toLocaleTimeString('en-CA', { timeZone: 'America/Halifax', hour: 'numeric', minute: '2-digit' }),
      about2: about.map((a, i) => ({ ...a, bg: pal[i], rot: rots[i], })),
      works, workCount: String(works.length).padStart(2, '0'),
      about, aboutLeft: about.filter((_, i) => i % 2 === 0), aboutRight: about.filter((_, i) => i % 2 === 1),
      copyEmail: this.copyEmail,
      copyLabel: this.state.copied ? 'Copied ✓' : 'Copy Email'
    };
  }
}
