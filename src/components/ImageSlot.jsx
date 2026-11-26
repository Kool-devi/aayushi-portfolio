// Photo placeholder. Put a photo in images/ with one of the names below (jpg, png or webp),
// run `npm run build`, and it replaces the neutral grey box.
//   images/portrait.jpg (desktop)  ·  images/portrait-wide.jpg (phone)  ·  images/cover-darkroast.jpg  ·  images/cover-delicut.jpg  ·  images/cover-attune.jpg
import React from 'react';

// og-*.png are the link-preview images, served from images/ as they are, not page photos
const found = import.meta.glob(['../../images/*.{jpg,jpeg,png,webp}', '!../../images/og-*'], { eager: true, query: '?url', import: 'default' });
const byName = Object.fromEntries(
  Object.entries(found).map(([path, url]) => [path.split('/').pop().replace(/\.[^.]+$/, ''), url]),
);

const NAMES = {
  portrait: 'portrait',
  portraitWide: 'portrait-wide', // the phone layout's wide crop of the same photo
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
      {src && <img src={src} alt={placeholder || ''} loading={/portrait/i.test(id) ? undefined : 'lazy'} style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover' }} />}
    </span>
  );
}
