Applegate AI — Static site package
---------------------------------

Files in this package:
- index.html, about.html, packages.html, contact.html, privacy.html, terms.html
- css/style.css
- js/main.js
- static.yml

How to deploy:
- Netlify: drag & drop the folder into Sites > Add new site > Deploy manually (or connect to a Git repo).
- Vercel: import project and deploy (works for static files).
- cPanel/FTP: upload files to public_html (ensure index.html is in the domain root).
- GitHub Pages: push to a repo and enable Pages for the main branch (root).

Notes:
- This is a starter package that blends the content from your current Applegate AI homepage with the structure you provided from Arcscribe.
- Replace placeholder assets in /assets with your real logos and images.
- Replace contact form handling with Netlify Forms, Formspree, or your backend as needed.
- Update legal pages (privacy/terms) with counsel-reviewed text before going live.
