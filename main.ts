import fs from 'node:fs';
const ENTRY = "LGTM. The tests pass, the code works, and none of it will matter once the sun swallows the Earth. Ship it.";
fs.mkdirSync('/output', { recursive: true });
fs.writeFileSync('/output/entry.txt', ENTRY, 'utf8');
