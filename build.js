// build.js
import { copyFileSync, existsSync, mkdirSync } from 'fs';
import { join } from 'path';

// Ensure dist directory exists
if (!existsSync('dist')) {
  mkdirSync('dist');
}

// Copy static files
const staticFiles = [
  { src: 'public/_redirects', dest: 'dist/_redirects' },
  { src: 'public/_headers', dest: 'dist/_headers' },
];

// Copy files
staticFiles.forEach(file => {
  try {
    if (existsSync(file.src)) {
      console.log(`Copying ${file.src} to ${file.dest}`);
      copyFileSync(file.src, file.dest);
    } else {
      console.warn(`Source file not found: ${file.src}`);
    }
  } catch (err) {
    console.error(`Error copying ${file.src}:`, err);
  }
}); 