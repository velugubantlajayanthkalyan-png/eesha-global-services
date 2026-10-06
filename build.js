#!/usr/bin/env node
/*
 * Builds the site: reads src/, writes the .html pages, sitemap.xml and robots.txt
 * into the project root. No dependencies — only Node.js 18 or newer.
 *
 *   npm run build
 */
const fs = require('fs');
const path = require('path');

const root = __dirname;
const { company } = require('./src/data');
const allPages = require('./src/pages');

const pages = allPages();

for (const page of pages) {
  fs.writeFileSync(path.join(root, page.file), page.html);
  console.log('  wrote ' + page.file);
}

const today = new Date().toISOString().slice(0, 10);
const urls = pages
  .filter((p) => !p.noSitemap)
  .map((p) => {
    const loc = company.siteUrl + '/' + (p.file === 'index.html' ? '' : p.file);
    return `  <url><loc>${loc}</loc><lastmod>${today}</lastmod></url>`;
  })
  .join('\n');

fs.writeFileSync(
  path.join(root, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
);
fs.writeFileSync(
  path.join(root, 'robots.txt'),
  `User-agent: *\nAllow: /\n\nSitemap: ${company.siteUrl}/sitemap.xml\n`
);

console.log(`\nBuilt ${pages.length} pages, sitemap.xml and robots.txt.`);

if (!company.enquiryAccessKey.trim()) {
  console.log('\nNote: enquiryAccessKey is empty in src/data.js, so the enquiry form sends through WhatsApp.');
  console.log('      Add a Web3Forms key there to receive enquiries by email (see README, step 4).');
}
