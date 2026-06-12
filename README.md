# Shrikant Shinde Cyber Portfolio

A futuristic single-page cybersecurity portfolio designed for free hosting on GitHub Pages.

## Live URL after GitHub Pages is enabled

```text
https://pentester-shrikant.github.io/shrikant-portfolio/
```

## Current profile content

- Name: Shrikant Shinde
- Role: Penetration Tester
- Skills: Penetration Testing, Red Teaming, Digital Forensic, SIEM, CTF
- Services: VAPT for Web, Android, and Network
- Blog: https://medium.com/@findyourbugs

## Folders included

```text
assets/avatar.png
certificates/
customer-satisfaction/
badges/
```

## How to add certificates

1. Upload certificate images into the `certificates` folder.
2. Open `script.js`.
3. Add each image inside `certificateImages`:

```js
const certificateImages = [
  { title: 'Certificate Name', file: 'certificates/certificate-file-name.png' }
];
```

## How to add customer satisfaction images

1. Upload feedback/testimonial images into `customer-satisfaction`.
2. Open `script.js`.
3. Add each image inside `satisfactionImages`:

```js
const satisfactionImages = [
  { title: 'Client Feedback', file: 'customer-satisfaction/client-feedback.png' }
];
```

## How to add CTF badge links

Open `script.js` and add links inside `badgeLinks`:

```js
const badgeLinks = [
  { title: 'Solved CTF Badge', url: 'https://example.com/my-badge' }
];
```

## Important LinkedIn update

Replace `REPLACE_WITH_PUBLIC_LINKEDIN_URL` in `index.html` with your real public LinkedIn URL.
Do not use the LinkedIn settings URL.

## Publish on GitHub Pages

Repository Settings > Pages > Build and deployment:

- Source: Deploy from a branch
- Branch: master
- Folder: / root
