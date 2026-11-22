// Photo placeholder. Put a photo in images/ with one of the names below (jpg, png or webp),
// run `npm run build`, and it replaces the neutral grey box.
//   images/portrait.jpg  ·  images/cover-darkroast.jpg  ·  images/cover-delicut.jpg  ·  images/cover-attune.jpg
import React from 'react';

const found = import.meta.glob('../../images/*.{jpg,jpeg,png,webp}', { eager: true, query: '?url', import: 'default' });
const byName = Object.fromEntries(
  Object.entries(found).map(([path, url]) => [path.split('/').pop().replace(/\.[^.]+$/, ''), url]),
);

const NAMES = {
  portrait: 'portrait',
  darkroast: 'cover-darkroast',
  delicut: 'cover-delicut',
  case3: 'cover-attune',
};

export default function ImageSlot({ id = '', placeholder, shape, style }) {
  const src = byName[NAMES[id.replace(/^[a-z0-9]+-/, '')]];
  const box = {
    display: 'block',
    width: '100%',
    height: '100%',
    background: '#DCDBD7',
    borderRadius: shape === 'circle' ? '50%' : undefined,
    overflow: 'hidden',
    ...style,
  };
  return (
    <span style={box} role={src ? undefined : 'img'} aria-label={src ? undefined : placeholder}>
      {src && <img src={src} alt={placeholder || ''} style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover' }} />}
    </span>
  );
}
