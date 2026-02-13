# Deployment Guide - The Rift Walker Website

Deploy your companion website to the world. Choose your platform below.

---

## 🚀 Recommended: Netlify (Free & Easy)

### Option A: Drag & Drop Deploy

1. Go to [netlify.com](https://netlify.com)
2. Sign up for free
3. Drag the `rift-walker-site` folder into the Netlify dashboard
4. Your site is live in 30 seconds

**Your URL:** `https://your-site-name.netlify.app`

### Option B: Git-Based Deploy

1. Push this repo to GitHub:
   ```bash
   git init
   git add .
   git commit -m "The Rift Walker website"
   git remote add origin https://github.com/YOUR_USERNAME/rift-walker-site
   git push -u origin main
   ```

2. Connect to Netlify:
   - Go to [app.netlify.com](https://app.netlify.com)
   - Click "Connect Git Repository"
   - Select your repo
   - Netlify auto-deploys on every push

### Custom Domain on Netlify

1. In Netlify dashboard → Site settings → Domain management
2. Add your custom domain (requires DNS changes)
3. Netlify provides free SSL certificate

---

## 🔷 GitHub Pages (Free)

### Setup

1. Create a GitHub repository named `USERNAME.github.io`

2. Push the site:
   ```bash
   git clone https://github.com/YOUR_USERNAME/YOUR_USERNAME.github.io
   cd YOUR_USERNAME.github.io
   
   # Copy site files here
   cp -r /path/to/rift-walker-site/* .
   
   git add .
   git commit -m "Add The Rift Walker website"
   git push origin main
   ```

3. Your site is live at: `https://USERNAME.github.io`

### Custom Domain

1. Add a `CNAME` file with your domain name
2. Update DNS to point to GitHub Pages
3. Enable HTTPS in repo settings

---

## ⚡ Vercel (Free & Fast)

### Setup

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy:
   ```bash
   cd rift-walker-site
   vercel
   ```

3. Answer the prompts
4. Your site is live instantly

**Advantages:**
- Fastest CDN
- Automatic deployments
- Built-in analytics

---

## ☁️ Cloudflare Pages (Free)

### Setup

1. Push to GitHub (see GitHub Pages setup)

2. Go to [pages.cloudflare.com](https://pages.cloudflare.com)

3. Connect your GitHub account

4. Select your repo and branch

5. Click "Save and Deploy"

**Advantages:**
- Lightning-fast global CDN
- Built-in DDoS protection
- Free analytics

---

## 🖥️ Traditional Hosting (Shared/VPS)

### Via FTP

1. Upload all files to your hosting via FTP client:
   ```
   Host: your-domain.com
   Username: your-username
   Password: your-password
   ```

2. Upload the entire `rift-walker-site` directory

3. Set it as your public web root (usually `public_html`)

### Via SSH

```bash
# Connect to your server
ssh username@your-domain.com

# Navigate to web directory
cd public_html

# Clone or copy files
git clone https://github.com/YOUR_USERNAME/rift-walker-site .

# Set permissions
chmod -R 755 .
```

### Popular Hosts

- **Bluehost** - Easy cPanel, good WordPress support
- **SiteGround** - Excellent support, fast servers
- **DigitalOcean** - $5/mo VPS, more control
- **Linode** - Reliable VPS hosting
- **A2 Hosting** - Fast, unlimited bandwidth

---

## 🐳 Docker Deployment

### Dockerfile

Create a `Dockerfile`:

```dockerfile
FROM nginx:alpine

COPY . /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
```

### Build & Run

```bash
docker build -t rift-walker .
docker run -p 80:80 rift-walker
```

### Deploy to Docker Hub

```bash
docker login
docker tag rift-walker:latest YOUR_USERNAME/rift-walker:latest
docker push YOUR_USERNAME/rift-walker:latest
```

Then deploy to services like AWS ECS, Google Cloud Run, etc.

---

## 📦 AWS S3 + CloudFront

### Setup

1. Create S3 bucket:
   ```bash
   aws s3 mb s3://rift-walker-site
   ```

2. Upload files:
   ```bash
   aws s3 sync . s3://rift-walker-site --delete
   ```

3. Create CloudFront distribution pointing to S3

4. Enable static website hosting in S3 settings

**Cost:** Usually $0.50-2/month for small traffic

---

## 🚀 Continuous Deployment

### GitHub Actions (Auto-Deploy on Push)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Netlify

on:
  push:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - name: Deploy to Netlify
      uses: netlify/actions/cli@master
      env:
        NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
        NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
```

Then set GitHub secrets for tokens.

---

## 🔒 SSL/HTTPS

All recommended platforms (Netlify, Vercel, GitHub Pages) provide free SSL.

For self-hosted:
- **Let's Encrypt** - Free via `certbot`
- **Comodo** - $50-80/year
- **DigiCert** - $200+/year

### Setup Let's Encrypt (Ubuntu/Debian)

```bash
sudo apt-get install certbot python3-certbot-nginx
sudo certbot certonly --standalone -d your-domain.com
```

---

## 📊 Post-Deployment Checklist

- [ ] Site loads on desktop
- [ ] Site loads on mobile
- [ ] All links work
- [ ] Dice rolling works
- [ ] Navigation smooth-scrolls
- [ ] Images load (if added)
- [ ] Meta tags are correct
- [ ] SSL/HTTPS is enabled
- [ ] Domain DNS points correctly
- [ ] Setup analytics (Google Analytics, etc.)
- [ ] Test page speed (PageSpeed Insights)

---

## 🔧 Performance Optimization

### Before Deploying

1. **Minify CSS/JS** (optional, since files are already small):
   ```bash
   npm install -g minify
   minify css/style.css > css/style.min.css
   minify js/script.js > js/script.min.js
   ```
   Then update `index.html` to reference `.min.` files

2. **Compress images** (when you add custom images):
   ```bash
   pngquant assets/*.png --ext .png --force
   ```

3. **Add caching headers** (ask your hosting provider)

### Monitor Performance

- [Google PageSpeed Insights](https://pagespeed.web.dev)
- [GTmetrix](https://gtmetrix.com)
- [WebPageTest](https://www.webpagetest.org)

---

## 📈 Custom Domain Setup

### General Steps

1. Buy domain from registrar (GoDaddy, Namecheap, etc.)

2. Get DNS records from your hosting provider:
   - **A record** → Your server IP
   - **CNAME** → Your hosting provider's domain
   - **MX record** → If using email

3. Update DNS in your registrar's control panel

4. Wait 24-48 hours for DNS propagation

### Example (Netlify with Namecheap)

1. In Netlify: Site settings → Domain management → Add custom domain
2. Copy the DNS records Netlify provides
3. In Namecheap: Advanced DNS → Add DNS records
4. Wait for propagation
5. Update Netlify to finish setup

---

## 🆘 Troubleshooting

### Site shows 404
- Check that `index.html` is in root directory
- Verify file permissions (755 for dirs, 644 for files)
- Check server error logs

### CSS/JS not loading
- Verify paths are correct (relative, not absolute)
- Check for 404 errors in browser DevTools
- Ensure file extensions are lowercase

### Slow page load
- Run through PageSpeed Insights
- Compress images
- Enable gzip compression
- Check DNS resolution time

### Dice/JavaScript not working
- Check browser console for errors
- Verify JavaScript is enabled
- Clear cache and reload
- Test in different browser

### Custom domain not working
- Check DNS propagation (dns.google.com)
- Verify A record points to correct IP
- Wait up to 48 hours for full propagation
- Check registrar settings

---

## 💰 Hosting Cost Comparison

| Platform | Cost | SSL | CDN | Best For |
|----------|------|-----|-----|----------|
| Netlify | Free | ✅ | ✅ | Easy deployment |
| GitHub Pages | Free | ✅ | ✅ | Git-based |
| Vercel | Free | ✅ | ✅ | Speed priority |
| Cloudflare Pages | Free | ✅ | ✅ | Global reach |
| Bluehost | $2.95-10/mo | ✅ | ❌ | WordPress-ready |
| DigitalOcean | $4-40/mo | Self | ✅ | Full control |

---

## 🎯 Final Steps

1. **Deploy to your chosen platform**
2. **Test thoroughly** (desktop, mobile, different browsers)
3. **Set up analytics** to track visitors
4. **Share the link** with readers on Substack
5. **Monitor** performance and user feedback
6. **Keep content updated** as new episodes publish

---

## 📧 Need Help?

- **Netlify Support:** [docs.netlify.com](https://docs.netlify.com)
- **GitHub Pages:** [pages.github.com](https://pages.github.com)
- **Vercel Docs:** [vercel.com/docs](https://vercel.com/docs)
- **Web fundamentals:** [web.dev](https://web.dev)

---

**Your site is ready to go live. Roll on.** 🎲
