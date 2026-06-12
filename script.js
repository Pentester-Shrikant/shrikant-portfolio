const canvas = document.getElementById('matrixCanvas');
const ctx = canvas.getContext('2d');
let width, height, columns, drops;

function resize(){
  width = canvas.width = innerWidth;
  height = canvas.height = innerHeight;
  columns = Math.floor(width / 18);
  drops = Array(columns).fill(1);
}
resize();
addEventListener('resize', resize);

function matrix(){
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

const reveal = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      reveal.unobserve(entry.target);
    }
  });
},{threshold:.14});

document.querySelectorAll('.reveal').forEach(el=>reveal.observe(el));

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

// Add your certificate images here after uploading them to the certificates folder.
// Example: { title: 'Certificate Name', file: 'certificates/my-certificate.png' }
const certificateImages = [
  // { title: 'My Certificate', file: 'certificates/my-certificate.png' }
];

// Add customer satisfaction images here after uploading them to the customer-satisfaction folder.
// Example: { title: 'Client Feedback', file: 'customer-satisfaction/client-feedback.png' }
const satisfactionImages = [
  // { title: 'Client Feedback', file: 'customer-satisfaction/client-feedback.png' }
];

// Add your solved CTF badge cards here.
// Upload the badge image to the badges folder, then use the same path in image.
const badgeLinks = [
  {
    title: 'Blacktop',
    image: 'badges/blacktop.svg',
    url: 'https://labs.bugthrive.com/achievement/blacktop/6a26ac58eec06840ae4d3c47',
    description: 'Completed the Blacktop challenge',
    rank: '2248',
    level: '13'
  }

  // Add more like this:
  // ,{
  //   title: 'OWASP Top 10',
  //   image: 'badges/owasp-top-10.png',
  //   url: 'https://example.com/my-badge',
  //   description: 'Understanding every OWASP vulnerability',
  //   rank: '2248',
  //   level: '13'
  // }
];

function renderImageGallery(containerId, items, emptyText){
  const container = document.getElementById(containerId);
  if(!container) return;

  if(!items.length){
    container.innerHTML = `<div class="empty-card reveal visible">${emptyText}</div>`;
    return;
  }

  container.innerHTML = items.map(item => `
    <article class="media-card reveal visible">
      <img src="${item.file}" alt="${item.title}">
      <div class="media-body"><h3>${item.title}</h3></div>
    </article>
  `).join('');
}

function renderBadges(){
  const container = document.getElementById('badgesGrid');
  if(!container) return;

  if(!badgeLinks.length){
    container.innerHTML = '<div class="empty-card reveal visible">Upload or link your solved CTF badges, then add each badge in script.js under badgeLinks.</div>';
    return;
  }

  container.innerHTML = badgeLinks.map((badge, index) => `
    <a class="badge-card reveal visible" href="${badge.url || '#'}" target="_blank" rel="noopener noreferrer">
      <div class="badge-top">
        <div>
          <h3>Shrikant</h3>
          <p>was awarded a badge</p>
        </div>

        <div class="badge-stats">
          <strong>${badge.rank || '--'}</strong>
          <span>Rank</span>
          <strong>${badge.level || '--'}</strong>
          <span>Level</span>
        </div>
      </div>

      <div class="badge-image-wrap">
        <img src="${badge.image || 'badges/blacktop.svg'}" alt="${badge.title || `CTF Badge ${index + 1}`} badge">
      </div>

      <div class="badge-content">
        <h4>${badge.title || `CTF Badge ${index + 1}`}</h4>
        <p>${badge.description || 'Verified solved CTF badge or achievement link.'}</p>
      </div>
    </a>
  `).join('');
}

renderImageGallery('certificateGallery', certificateImages, 'Certificates section is ready. Add images in the certificates folder, then list them in script.js under certificateImages.');
renderImageGallery('satisfactionGallery', satisfactionImages, 'Customer satisfaction section is ready. Add testimonial or feedback images in the customer-satisfaction folder, then list them in script.js under satisfactionImages.');
renderBadges();
