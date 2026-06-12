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

document.querySelector('.menu-btn').addEventListener('click',()=>{
  document.querySelector('.nav-links').classList.toggle('open');
});
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>document.querySelector('.nav-links').classList.remove('open')));

document.getElementById('year').textContent = new Date().getFullYear();

const glow = document.querySelector('.cursor-glow');
addEventListener('pointermove', e=>{
  glow.style.left = e.clientX + 'px';
  glow.style.top = e.clientY + 'px';
});

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

// Add your images here after uploading them to the matching folders.
// Example: { title: 'Certificate Name', file: 'certificates/my-certificate.png' }
const certificateImages = [
  // { title: 'My Certificate', file: 'certificates/my-certificate.png' }
];

const satisfactionImages = [
  // { title: 'Client Feedback', file: 'customer-satisfaction/client-feedback.png' }
];

// Add your solved CTF badge or profile links here.
// Example: { title: 'Solved CTF Badge', url: 'https://example.com/my-badge' }
const badgeLinks = [
  // { title: 'Solved CTF Badge', url: 'https://example.com/my-badge' }
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
  const container = document.getElementById('badgeGallery');
  if(!container) return;
  if(!badgeLinks.length){
    container.innerHTML = '<div class="empty-card reveal visible">Upload or link your solved CTF badges, then add each link in script.js under badgeLinks.</div>';
    return;
  }
  container.innerHTML = badgeLinks.map((badge, index) => `
    <article class="project-card reveal visible">
      <h3>${badge.title || `CTF Badge ${index + 1}`}</h3>
      <p>Verified solved CTF badge or achievement link.</p>
      <a href="${badge.url}" target="_blank" rel="noreferrer">View badge →</a>
    </article>
  `).join('');
}

renderImageGallery('certificateGallery', certificateImages, 'Certificates section is ready. Add images in the certificates folder, then list them in script.js.');
renderImageGallery('satisfactionGallery', satisfactionImages, 'Customer satisfaction section is ready. Add testimonial or feedback images in the customer-satisfaction folder, then list them in script.js.');
renderBadges();
