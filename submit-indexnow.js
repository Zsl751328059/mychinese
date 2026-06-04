const https = require('https');

const key = '7ac6835bd82e4c1f815a9ddea8d976a1';
const domain = 'https://zenbodywell.com';
const keyLocation = `${domain}/${key}.txt`;

const urls = [
  `${domain}/index.html`,
  `${domain}/404.html`,
  `${domain}/about.html`,
  `${domain}/affiliate-disclaimer.html`,
  `${domain}/blog.html`,
  `${domain}/blog-aromatherapy.html`,
  `${domain}/blog-ear-plugs.html`,
  `${domain}/blog-essential-oil.html`,
  `${domain}/blog-gua-sha.html`,
  `${domain}/blog-herbal-teas.html`,
  `${domain}/blog-humidifier.html`,
  `${domain}/blog-moxibustion.html`,
  `${domain}/blog-pillow.html`,
  `${domain}/blog-sleep-mask.html`,
  `${domain}/blog-weighted-blanket.html`,
  `${domain}/blog-yoga.html`,
  `${domain}/contact.html`,
  `${domain}/cookie-policy.html`,
  `${domain}/faq.html`,
  `${domain}/privacy-policy.html`,
  `${domain}/product-aroma-diffuser.html`,
  `${domain}/product-aromatherapy-oil.html`,
  `${domain}/product-aromatherapy.html`,
  `${domain}/product-ear-plugs.html`,
  `${domain}/product-gua-sha.html`,
  `${domain}/product-pillow.html`,
  `${domain}/product-sleep-mask.html`,
  `${domain}/product-weighted-blanket.html`,
  `${domain}/sitemap.html`,
  `${domain}/terms-conditions.html`
];

const data = JSON.stringify({
  host: 'zenbodywell.com',
  key,
  keyLocation,
  urlList: urls
});

const options = {
  hostname: 'api.indexnow.org',
  port: 443,
  path: '/indexnow',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    'Content-Length': Buffer.byteLength(data)
  }
};

const req = https.request(options, (res) => {
  console.log('Status:', res.statusCode);
  let body = '';
  res.on('data', (chunk) => body += chunk);
  res.on('end', () => console.log('Response:', body));
});

req.on('error', (e) => console.error('Error:', e));
req.write(data);
req.end();
