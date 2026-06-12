document.body.classList.add('js');

const canvas = document.getElementById('matrixCanvas');
const ctx = canvas ? canvas.getContext('2d') : null;
let width, height, columns, drops;

function resize(){
  if(!canvas || !ctx) return;
  width = canvas.width = innerWidth;
  height = canvas.height = innerHeight;
  columns = Math.floor(width / 18);
  drops = Array(columns).fill(1);
}
resize();
addEventListener('resize', resize);

function matrix(){
  if(!canvas || !ctx) return;
  ctx.fillStyle = 'rgba(3,3,5,0.12)';
  ctx.fillRect(0,0,width,height);
  ctx.fillStyle = '#ff1744';
  ctx.font = '14px monospace';
  for(let i=0;i<drops.length;i++){
    const text = Math.random() > .5 ? '0' : '1';
    ctx.fillText(text, i*18, drops[i]*18);
    if(drops[i]*18 > height && Math.random() > .975) drops[i]=0;
    drops[i]++;
  }
}
setInterval(matrix, 55);

const menuButton = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

if(menuButton && navLinks){
  menuButton.addEventListener('click',()=>{
    navLinks.classList.toggle('open');
  });
}

document.querySelectorAll('.nav-links a').forEach(a=>{
  a.addEventListener('click',()=>document.querySelector('.nav-links').classList.remove('open'));
});

const year = document.getElementById('year');
if(year) year.textContent = new Date().getFullYear();

const glow = document.querySelector('.cursor-glow');
if(glow){
  addEventListener('pointermove', e=>{
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
  });
}

if('IntersectionObserver' in window){
const reveal = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      reveal.unobserve(entry.target);
    }
  });
},{threshold:.14});

document.querySelectorAll('.reveal').forEach(el=>reveal.observe(el));
} else {
  document.querySelectorAll('.reveal').forEach(el=>el.classList.add('visible'));
}

document.querySelectorAll('.tilt-card').forEach(card=>{
  card.addEventListener('mousemove', e=>{
    const r = card.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    const rx = ((y / r.height) - .5) * -10;
    const ry = ((x / r.width) - .5) * 10;
    card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`;
  });
  card.addEventListener('mouseleave',()=>{
    card.style.transform = 'perspective(900px) rotateX(0) rotateY(0) translateY(0)';
  });
});

// Certificate images
const certificateImages = [
  {
    title: 'Ethical Hacking',
    file: 'certificates/CISEH.png'
  },
  {
    title: 'Certified Penetration Tester Expert',
    file: 'certificates/CPTE.png'
  },
  {
    title: 'Android Pentesting 101',
    file: 'certificates/UC-364a2adc-234e-440d-9753-f0f49a6eb2b2.png'
  },
  {
    title: 'Cyber Threat Intelligence 101',
    file: 'certificates/certificate.png'
  }
];
// Add customer satisfaction images here after uploading them to the customer-satisfaction folder.
// Example: { title: 'Client Feedback', file: 'customer-satisfaction/client-feedback.png' }
const satisfactionImages = [
  // { title: 'Client Feedback', file: 'customer-satisfaction/client-feedback.png' }
  { title: 'Client Feedback', file: 'customer-satisfaction/2026-06-13 02_00_57-badge_render_fix - File Explorer.png';
];

// Add your solved CTF badge cards here.
// Use direct image URLs in the image field. Use the achievement/profile page in the url field.
// Note: Hack The Box / BugThrive achievement page URLs may not always work as image sources,
// so the card has a built-in fallback image and still opens the real achievement link.
const fallbackBadgeSvg = `data:image/svg+xml;utf8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" width="600" height="280" viewBox="0 0 600 280">
  <defs>
    <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
      <stop offset="0" stop-color="#182536"/>
      <stop offset="1" stop-color="#380012"/>
    </linearGradient>
    <filter id="glow"><feGaussianBlur stdDeviation="4" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
  </defs>
  <rect width="600" height="280" rx="22" fill="url(#g)"/>
  <rect x="18" y="18" width="564" height="244" rx="18" fill="none" stroke="#ff1744" stroke-opacity=".45"/>
  <circle cx="300" cy="115" r="54" fill="#111827" stroke="#ff1744" stroke-width="4" filter="url(#glow)"/>
  <path d="M300 65 L340 92 L324 152 H276 L260 92 Z" fill="#ff1744" opacity=".9"/>
  <text x="300" y="218" text-anchor="middle" font-family="Arial, sans-serif" font-size="34" font-weight="700" fill="#ffffff">Verified Badge</text>
</svg>` )}`;

const badgeLinks = [
  {
    title: 'HTB Academy Badge 01',
    platform: 'Hack The Box',
    image: 'https://academy.hackthebox.com/storage/badges/academician.png',
    url: 'https://academy.hackthebox.com/achievement/badge/a0957aca-c408-11ed-acfc-bea50ffe6cb4',
    description: 'Verified Hack The Box Academy badge'
  },
  {
    title: 'HTB Academy Badge 02',
    platform: 'Hack The Box',
    image: 'https://academy.hackthebox.com/storage/badges/your-request-is-my-demand.png',
    url: 'https://academy.hackthebox.com/achievement/badge/ae2cb5ce-c408-11ed-acfc-bea50ffe6cb4',
    description: 'Verified Hack The Box Academy badge'
  },
  {
    title: 'HTB Academy Badge 03',
    platform: 'Hack The Box',
    image: 'https://academy.hackthebox.com/storage/badges/fuzzing-is-power.png',
    url: 'https://academy.hackthebox.com/achievement/badge/33047f95-4a97-11f1-82d1-bea50ffe6cb4',
    description: 'Verified Hack The Box Academy badge'
  },
  {
    title: 'HTB Academy Badge 04',
    platform: 'Hack The Box',
    image: 'https://academy.hackthebox.com/storage/badges/developer.png',
    url: 'https://academy.hackthebox.com/achievement/badge/b52a171c-c408-11ed-acfc-bea50ffe6cb4',
    description: 'Verified Hack The Box Academy badge'
  },
  {
    title: 'HTB Academy Badge 05',
    platform: 'Hack The Box',
    image: 'https://academy.hackthebox.com/storage/badges/4a11a1a1d810967184694662d629de2d/logo.png',
    url: 'https://academy.hackthebox.com/achievement/badge/d0080789-ed6b-11ed-acfc-bea50ffe6cb4',
    description: 'Verified Hack The Box Academy badge'
  },
  {
    title: 'First Blood',
    platform: 'BugThrive Labs',
    image: 'https://ik.imagekit.io/bugthrive/labs/firstblood_fvH8qgzar.png',
    url: 'https://labs.bugthrive.com/achievement/firstblood/6a26ac58eec06840ae4d3c47',
    description: 'BugThrive Labs achievement'
  },
  {
    title: 'Blacktop',
    platform: 'BugThrive Labs',
    image: 'https://ik.imagekit.io/bugthrive/labs/blacktop-01_o0uxZWWg5j.png',
    url: 'https://labs.bugthrive.com/achievement/blacktop/6a26ac58eec06840ae4d3c47',
    description: 'BugThrive Labs achievement'
  },
  {
    title: 'EchoDesk App',
    platform: 'BugThrive Labs',
    image: 'https://ik.imagekit.io/bugthrive/labs/Echodesk-01_1xrW8i5eE.png',
    url: 'https://labs.bugthrive.com/achievement/echodesk-app/6a26ac58eec06840ae4d3c47',
    description: 'BugThrive Labs achievement'
  },
  {
    title: 'Advent of Cyber',
    platform: 'TryHackMe',
    image: 'https://assets.tryhackme.com/room-badges/1439b0d200fa3b7ef154b467b4d551d1.png',
    url: 'https://assets.tryhackme.com/room-badges/1439b0d200fa3b7ef154b467b4d551d1.png',
    description: 'Verified TryHackMe room badge'
  },
  {
    title: 'Blue',
    platform: 'TryHackMe',
    image: 'https://assets.tryhackme.com/room-badges/a64e088212fb9a34edd9f5de873ef468.png',
    url: 'https://assets.tryhackme.com/room-badges/a64e088212fb9a34edd9f5de873ef468.png',
    description: 'Verified TryHackMe room badge'
  },
  {
    title: 'Ice',
    platform: 'TryHackMe',
    image: 'https://assets.tryhackme.com/room-badges/03f7d810170bb89b0f30dc34f714429d.png',
    url: 'https://assets.tryhackme.com/room-badges/03f7d810170bb89b0f30dc34f714429d.png',
    description: 'Verified TryHackMe room badge'
  },
  {
    title: 'Mr Robot',
    platform: 'TryHackMe',
    image: 'https://assets.tryhackme.com/room-badges/356f0e028681fdc21515042572a2e1c4.png',
    url: 'https://assets.tryhackme.com/room-badges/356f0e028681fdc21515042572a2e1c4.png',
    description: 'Verified TryHackMe room badge'
  },
  {
    title: 'Pentesting Principles',
    platform: 'TryHackMe',
    image: 'https://assets.tryhackme.com/room-badges/98e1a1f3d80d8714a09f86b4c089398c.png',
    url: 'https://assets.tryhackme.com/room-badges/98e1a1f3d80d8714a09f86b4c089398c.png',
    description: 'Verified TryHackMe room badge'
  }
];

function renderImageGallery(containerId, items, emptyText) {
  const container = document.getElementById(containerId);
  if (!container) return;

  if (!items.length) {
    container.innerHTML = `<div class="empty-card reveal visible">${emptyText}</div>`;
    return;
  }

  container.innerHTML = items.map(item => `
    <a class="media-card reveal visible" href="${item.file}" target="_blank" rel="noopener noreferrer">
      <img src="${item.file}" alt="${item.title}" loading="lazy">
      <div class="media-body">
        <h3>${item.title}</h3>
      </div>
    </a>
  `).join('');
}

function renderBadges(){
  const container = document.getElementById('badgesGrid');
  if(!container) return;

  if(!badgeLinks.length){
    container.innerHTML = '<div class="empty-card reveal visible">Add your solved CTF badges in script.js under badgeLinks.</div>';
    return;
  }

  container.innerHTML = badgeLinks.map((badge, index) => {
    const title = badge.title || `CTF Badge ${index + 1}`;
    const platform = badge.platform || 'CTF Platform';
    const img = badge.image || fallbackBadgeSvg;
    const link = badge.url || img || '#';

    return `
      <a class="badge-card reveal visible" href="${link}" target="_blank" rel="noopener noreferrer" aria-label="Open ${title}">
        <div class="badge-top">
          <div>
            <h3>Shrikant</h3>
            <p>was awarded a badge</p>
          </div>

          <div class="badge-platform">${platform}</div>
        </div>

        <div class="badge-image-wrap">
          <img src="${img}" alt="${title}" loading="lazy" onerror="this.onerror=null; this.src=fallbackBadgeSvg;">
        </div>

        <div class="badge-content">
          <h4>${title}</h4>
          <p>${badge.description || 'Verified solved CTF badge or achievement link.'}</p>
        </div>
      </a>
    `;
  }).join('');
}

renderImageGallery(
  'certificateGallery',
  certificateImages,
  'Certificates section is ready. Add images in the certificates folder.'
);

renderImageGallery(
  'satisfactionGallery',
  satisfactionImages,
  'Customer satisfaction section is ready. Add testimonial or feedback images in the customer-satisfaction folder.'
);

renderBadges();
