// Small helpers the generated views use, matching how the design prototype rendered bindings.
import { isValidElement } from 'react';

const camel = (s) => s.replace(/-([a-z])/g, (_, c) => c.toUpperCase());

// A whole-style binding may be a CSS string or a style object.
export function css(value) {
  if (value == null) return undefined;
  if (typeof value === 'object') return value;
  const out = {};
  String(value).split(';').forEach((decl) => {
    const i = decl.indexOf(':');
    if (i < 0) return;
    const prop = decl.slice(0, i).trim();
    if (!prop) return;
    out[prop.startsWith('--') ? prop : camel(prop)] = decl.slice(i + 1).trim();
  });
  return out;
}

// Text bindings: strings and numbers render as text, elements as-is, null/booleans as nothing.
export function show(value) {
  if (value === undefined || value === null || typeof value === 'boolean') return null;
  if (isValidElement(value) || Array.isArray(value)) return value;
  return String(value);
}
