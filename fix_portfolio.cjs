const fs = require('fs');
let code = fs.readFileSync('js/portfolio.js', 'utf8');

code = code.replace(/screenshots:\s*\[([^\]]+)\]/g, (match, p1) => {
  const url = p1.trim();
  // We'll add 2 more unsplash images to the array.
  // Actually, I can just duplicate the existing url and change a character, or add hardcoded ones
  return `screenshots: [\n        ${url},\n        'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',\n        'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80'\n      ]`;
});

fs.writeFileSync('js/portfolio.js', code);
