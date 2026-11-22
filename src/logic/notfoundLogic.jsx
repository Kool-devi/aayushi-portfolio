/* eslint-disable */
// State and behaviour for the 404 page, ported from the Claude Design prototype.
import React from 'react';
export default class NotfoundLogic extends React.Component {
  state = { mx: 0, my: 0, px: -200, py: -200, inside: false, q: '', s1: 0, s2: 0, pokes: 0, sel: 0 };
  pages = [
    { t: 'Home', k: 'home start main index', href: '/' },
    { t: 'Selected work', k: 'work projects case studies portfolio', href: '/index.html#work' },
    { t: 'DarkRoast case study', k: 'darkroast dashboard creative ops web', href: '/project-darkroast.html' },
    { t: 'Delicut case study', k: 'delicut meal subscription app mobile', href: '/project-delicut.html' },
    { t: 'Attune AI case study', k: 'attune ai couples relationship', href: '/project-attune.html' },
    { t: 'About me', k: 'about who aayushi hire', href: '/index.html#about' },
    { t: 'Résumé', k: 'resume cv pdf download', href: '/resume.pdf', target: '_blank' },
    { t: 'Email me', k: 'email contact mail hello hire', href: 'mailto:aayushipatel2002@gmail.com' }
  ];
  poke(which) {
    this.setState(s => ({ [which]: s[which] + 360, pokes: s.pokes + 1 }));
  }
  renderVals() {
    const S = this.state, q = S.q.trim().toLowerCase();
    const list = (q ? this.pages.filter(p => (p.t + ' ' + p.k).toLowerCase().includes(q)) : this.pages.slice(0, 3)).slice(0, 3);
    const tilt = (sx, sy, k) => ({ x: (S.mx * sx * k) + 'px', y: (S.my * sy * k) + 'px', ry: (S.mx * 14 * k) + 'deg', rx: (-S.my * 10 * k) + 'deg' });
    const a = tilt(-26, -18, 1), b = tilt(26, 18, 1);
    const moods = ['0 pokes · it’s shy', '1 poke · it noticed', 'pokes: 2 · it’s dizzy', 'pokes: 3 · ok it’s having fun', 'pokes: 4+ · it’s your page now'];
    const labels = ['you are here', 'still lost?', 'try the search ↗', 'nice moves'];
    return {
      q: S.q, pokes: String(S.pokes).padStart(2, '0'), mood: moods[Math.min(S.pokes, 4)],
      onQ: (e) => this.setState({ q: e.target.value, sel: 0 }),
      onKey: (e) => { if (e.key === 'Enter' && list[0]) { const p = list[0]; if (p.target) window.open(p.href, '_blank'); else window.location.href = p.href; } },
      results: list.map((p, i) => ({ t: p.t, href: p.href, target: p.target || '_self', n: '0' + (i + 1), bg: i === 0 && q ? '#0B0B0B' : '#FFFFFFb3', fg: i === 0 && q ? '#FFFFFF' : '#0B0B0B' })),
      none: !!q && list.length === 0,
      d1x: a.x, d1y: a.y, d1ry: a.ry, d1rx: a.rx, d3x: b.x, d3y: b.y, d3ry: b.ry, d3rx: b.rx,
      d2x: (S.mx * 10) + 'px', d2y: (S.my * 10) + 'px',
      spin1: S.s1 + 'deg', spin2: -S.s2 + 'deg', dT: '.9s',
      poke4a: () => this.poke('s1'), poke4b: () => this.poke('s2'),
      cx: (S.px + 18) + 'px', cy: (S.py + 18) + 'px', curOp: S.inside ? 1 : 0, curLabel: labels[Math.min(Math.floor(S.pokes / 2), 3)], cur: 'crosshair',
      onMove: (e) => { if (e.pointerType === 'touch') return; const r = e.currentTarget.getBoundingClientRect(); this.setState({ inside: true, px: e.clientX - r.left, py: e.clientY - r.top, mx: ((e.clientX - r.left) / r.width - .5) * 2, my: ((e.clientY - r.top) / r.height - .5) * 2 }); },
      onLeave: () => this.setState({ inside: false, mx: 0, my: 0 })
    };
  }
}
