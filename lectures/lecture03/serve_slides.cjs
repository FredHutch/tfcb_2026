// Serve Lecture 3 slides on localhost and rebuild them whenever the source changes.
// Run from the repository root with REVEAL_RUNTIME set, as for build_slides.cjs.
const fs = require('fs');
const http = require('http');
const path = require('path');
const { execFileSync } = require('child_process');
const SLIDES = 'lectures/lecture03';
const BUILD = `${SLIDES}/build_slides.cjs`;
const WATCHED = ['README.md', 'custom.css', 'build_slides.cjs'];
const PORT = 8003;
const DEBOUNCE_MS = 200;
const TYPES = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.png': 'image/png', '.csv': 'text/csv', '.md': 'text/markdown' };

function build() {
  try {
    execFileSync(process.execPath, [BUILD], { stdio: 'inherit' });
    console.log(`Rebuilt at ${new Date().toLocaleTimeString()}`);
  } catch {
    console.error('Build failed; the previous slides remain available.');
  }
}

build();

// Watch the directory, not each file: editors and scripts replace files rather than
// writing in place, which silently detaches a watch bound to a single file path.
let timer = null;
fs.watch(SLIDES, (event, name) => {
  if (!WATCHED.includes(name)) return;
  clearTimeout(timer);
  timer = setTimeout(build, DEBOUNCE_MS);
});

http.createServer((request, response) => {
  const url = decodeURIComponent(request.url.split('?')[0]);
  const file = path.join(SLIDES, url === '/' ? 'lecture03.html' : url);
  if (!path.resolve(file).startsWith(path.resolve(SLIDES)) || !fs.existsSync(file)) {
    response.writeHead(404).end('Not found');
    return;
  }
  response.writeHead(200, { 'Content-Type': TYPES[path.extname(file)] || 'application/octet-stream', 'Cache-Control': 'no-store' });
  response.end(fs.readFileSync(file));
}).listen(PORT, '127.0.0.1', () => console.log(`Serving ${SLIDES} at http://127.0.0.1:${PORT}/`));
