// Run from the repository root. Use a Node environment with marked installed.
const fs = require('fs');
const crypto = require('crypto');
const SLIDES = 'lectures/lecture03';
const REVEAL = process.env.REVEAL_RUNTIME;
const OUTPUT = `${SLIDES}/lecture03.html`;
const TITLE = 'Project and Data Organization · TFCB Lecture 3';
const WIDTH = 960;
const HEIGHT = 700;
const PREVIEW_POLL_MS = 1000;
const PREVIEW_HOSTS = ['127.0.0.1', 'localhost', '[::1]'];
// Maps the file name of a GitHub image URL used in README.md to a local copy that is
// embedded in the slides. The current slides use no images; register one here before
// adding an <img> tag, or the build stops with a message naming the unmapped URL.
const LOCAL_IMAGES = {};

(async () => {
  if (!REVEAL) throw new Error('Set REVEAL_RUNTIME to the reveal.js 4.3.1 runtime directory.');
  const { marked } = await import(require.resolve('marked'));
  const source = fs.readFileSync(`${SLIDES}/README.md`, 'utf8').replace(/^---\n[\s\S]*?\n---\n/, '');
  let slides = source.split('\n---\n').map(text => `<section>${marked.parse(text)}</section>`).join('\n');
  slides = slides.replace(/src="(https:\/\/github.com\/[^"\s]+)"/g, (match, url) => {
    const file = LOCAL_IMAGES[url.split('/').pop().split('?')[0]];
    if (!file) throw new Error(`No local image for ${url}`);
    return `src="data:image/png;base64,${fs.readFileSync(file).toString('base64')}"`;
  });
  const css = ['reset.css', 'reveal.css', 'theme/night.css'].map(name => fs.readFileSync(`${REVEAL}/${name}`, 'utf8')).join('\n').replace(/@import[^;]+;/g, '') + fs.readFileSync(`${SLIDES}/custom.css`, 'utf8');
  const javascript = fs.readFileSync(`${REVEAL}/reveal.js`, 'utf8');
  const notesPlugin = fs.readFileSync(`${REVEAL}/plugin/notes/notes.js`, 'utf8');
  const license = fs.readFileSync(`${SLIDES}/reveal.LICENSE`, 'utf8');
  const preview = `
if (${JSON.stringify(PREVIEW_HOSTS)}.includes(location.hostname) && /^https?:$/.test(location.protocol)) {
  const revision = document.documentElement.dataset.revision;
  async function checkForUpdates() {
    try {
      const response = await fetch(location.pathname, {cache: 'no-store'});
      if (response.ok) {
        const next = (await response.text()).match(/data-revision="([a-f0-9]+)"/);
        if (next && next[1] !== revision) {
          location.reload();
          return;
        }
      }
    } catch {
      // Keep the current slide visible if the preview server is restarting.
    }
    setTimeout(checkForUpdates, ${PREVIEW_POLL_MS});
  }
  setTimeout(checkForUpdates, ${PREVIEW_POLL_MS});
}`;
  const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${TITLE}</title><!-- Generated from README.md and custom.css. Reveal.js license:\n${license}\n--><style>${css}</style></head><body><div class="reveal"><div class="slides">${slides}</div></div><script>${javascript}</script><script>${notesPlugin}</script><script>Reveal.initialize({plugins:[RevealNotes],width:${WIDTH},height:${HEIGHT},controls:true,progress:true,transition:'none',center:true,hash:true,history:false,fragmentInURL:true});${preview}</script></body></html>`;
  const revision = crypto.createHash('sha256').update(html).digest('hex');
  fs.writeFileSync(OUTPUT, html.replace('<html lang="en">', `<html lang="en" data-revision="${revision}">`));
  console.log(`Created ${OUTPUT} with embedded figures and presentation runtime.`);
})();
