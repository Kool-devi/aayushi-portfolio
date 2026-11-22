// Removes the previous build's files from assets/ so old hashed bundles don't pile up.
import { rmSync } from 'node:fs';

rmSync(new URL('../assets', import.meta.url), { recursive: true, force: true });
