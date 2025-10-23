# Deployment Guide for WUR Plant Scraper

## Overview
This guide covers deploying the ELPACA backend with the WUR plant scraper to various environments.

## Prerequisites

### System Requirements
- Node.js v18.0.0 or higher
- npm v9.0.0 or higher
- Chromium or Chrome browser
- 2GB RAM minimum (4GB recommended for Puppeteer)
- 1GB disk space

### Environment Variables
No environment variables are required for basic operation. The scraper uses system defaults.

## Local Development

### 1. Install Dependencies
```bash
cd backend
npm install
```

### 2. Start the Server
```bash
npm start
# Server runs on http://localhost:5000
```

### 3. Test the Scraper
```bash
node scraper.js
node test-categorization.js
```

## Production Deployment

### Option 1: Traditional Server (Ubuntu/Debian)

#### 1. Install System Dependencies
```bash
# Update package lists
sudo apt-get update

# Install Node.js (if not already installed)
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install Chromium for Puppeteer
sudo apt-get install -y chromium-browser

# Install additional dependencies for headless Chrome
sudo apt-get install -y \
    ca-certificates \
    fonts-liberation \
    libappindicator3-1 \
    libasound2 \
    libatk-bridge2.0-0 \
    libatk1.0-0 \
    libc6 \
    libcairo2 \
    libcups2 \
    libdbus-1-3 \
    libexpat1 \
    libfontconfig1 \
    libgbm1 \
    libgcc1 \
    libglib2.0-0 \
    libgtk-3-0 \
    libnspr4 \
    libnss3 \
    libpango-1.0-0 \
    libpangocairo-1.0-0 \
    libstdc++6 \
    libx11-6 \
    libx11-xcb1 \
    libxcb1 \
    libxcomposite1 \
    libxcursor1 \
    libxdamage1 \
    libxext6 \
    libxfixes3 \
    libxi6 \
    libxrandr2 \
    libxrender1 \
    libxss1 \
    libxtst6 \
    lsb-release \
    wget \
    xdg-utils
```

#### 2. Setup Application
```bash
# Clone repository (if not already done)
git clone https://github.com/pacacodes/ELPACA.git
cd ELPACA/backend

# Install Node dependencies
npm install --production

# Create data directory
mkdir -p data

# Test the setup
node scraper.js
```

#### 3. Configure Process Manager (PM2)
```bash
# Install PM2 globally
sudo npm install -g pm2

# Start the application
pm2 start index.js --name elpaca-backend

# Configure PM2 to start on boot
pm2 startup
pm2 save

# View logs
pm2 logs elpaca-backend

# Monitor
pm2 monit
```

#### 4. Setup Reverse Proxy (Nginx)
```nginx
# /etc/nginx/sites-available/elpaca
server {
    listen 80;
    server_name your-domain.com;

    location /api/ {
        proxy_pass http://localhost:5000/api/;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        
        # Increase timeout for scraping
        proxy_read_timeout 120s;
        proxy_connect_timeout 120s;
    }
}
```

```bash
# Enable the site
sudo ln -s /etc/nginx/sites-available/elpaca /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### Option 2: Docker Deployment

#### Dockerfile
```dockerfile
FROM node:20-bullseye

# Install Chromium and dependencies
RUN apt-get update && apt-get install -y \
    chromium \
    chromium-sandbox \
    fonts-liberation \
    libappindicator3-1 \
    libasound2 \
    libatk-bridge2.0-0 \
    libatk1.0-0 \
    libcups2 \
    libdbus-1-3 \
    libgbm1 \
    libgtk-3-0 \
    libnspr4 \
    libnss3 \
    libx11-xcb1 \
    libxcomposite1 \
    libxdamage1 \
    libxrandr2 \
    xdg-utils \
    && rm -rf /var/lib/apt/lists/*

# Set working directory
WORKDIR /app

# Copy package files
COPY backend/package*.json ./

# Install dependencies
ENV PUPPETEER_SKIP_DOWNLOAD=true
RUN npm ci --production

# Copy application files
COPY backend/ ./

# Create data directory
RUN mkdir -p data

# Expose port
EXPOSE 5000

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
  CMD node -e "require('http').get('http://localhost:5000/api/wur-plants', (res) => { process.exit(res.statusCode === 200 ? 0 : 1); })" || exit 1

# Start application
CMD ["node", "index.js"]
```

#### docker-compose.yml
```yaml
version: '3.8'

services:
  backend:
    build:
      context: .
      dockerfile: backend/Dockerfile
    ports:
      - "5000:5000"
    volumes:
      - ./backend/data:/app/data
    environment:
      - NODE_ENV=production
    restart: unless-stopped
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:5000/api/wur-plants"]
      interval: 30s
      timeout: 10s
      retries: 3
      start_period: 40s
```

#### Build and Run
```bash
# Build image
docker-compose build

# Start service
docker-compose up -d

# View logs
docker-compose logs -f backend

# Stop service
docker-compose down
```

### Option 3: Cloud Platforms

#### Heroku
```bash
# Install Heroku CLI
# Create Procfile in project root:
echo "web: cd backend && node index.js" > Procfile

# Create app
heroku create elpaca-backend

# Add buildpack for Puppeteer
heroku buildpacks:add jontewks/puppeteer
heroku buildpacks:add heroku/nodejs

# Deploy
git push heroku main

# View logs
heroku logs --tail
```

#### AWS (Elastic Beanstalk)
1. Install AWS CLI and EB CLI
2. Create `.ebextensions/nodejs.config`:
```yaml
packages:
  yum:
    chromium: []
```
3. Deploy:
```bash
eb init
eb create elpaca-backend
eb deploy
```

#### DigitalOcean App Platform
1. Connect GitHub repository
2. Configure build command: `cd backend && npm install`
3. Configure run command: `cd backend && node index.js`
4. Add buildpack for Puppeteer support

## Security Considerations

### 1. Rate Limiting
Implement rate limiting to prevent abuse:
```javascript
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
});

app.use('/api/', limiter);
```

### 2. CORS Configuration
Update CORS settings in `index.js`:
```javascript
app.use(cors({
    origin: ['https://your-frontend-domain.com'],
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type']
}));
```

### 3. Input Validation
Validate all API inputs to prevent injection attacks.

### 4. HTTPS
Always use HTTPS in production. Configure SSL certificates:
- Let's Encrypt (free): `certbot --nginx`
- CloudFlare (free): Enable SSL/TLS

## Performance Optimization

### 1. Caching Strategy
```javascript
// Cache scraper results for 24 hours
const cache = new Map();
const CACHE_TTL = 24 * 60 * 60 * 1000;

app.get('/api/wur-plants', async (req, res) => {
    const cacheKey = 'wur-plants';
    const cached = cache.get(cacheKey);
    
    if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
        return res.json(cached.data);
    }
    
    // ... fetch fresh data
});
```

### 2. Scheduled Scraping
Use cron jobs to scrape data periodically:
```bash
# Add to crontab
0 2 * * * cd /path/to/backend && node scraper.js
```

Or use node-cron:
```javascript
const cron = require('node-cron');

// Run scraper daily at 2 AM
cron.schedule('0 2 * * *', async () => {
    console.log('Running scheduled scrape...');
    await scrapePlantImages();
});
```

## Monitoring and Logging

### 1. Application Monitoring
```bash
# PM2 monitoring
pm2 install pm2-logrotate
pm2 set pm2-logrotate:max_size 10M
```

### 2. Error Tracking
Integrate error tracking service:
```javascript
const Sentry = require('@sentry/node');

Sentry.init({
    dsn: 'your-sentry-dsn',
    environment: process.env.NODE_ENV
});
```

### 3. Health Checks
```javascript
app.get('/health', (req, res) => {
    res.json({
        status: 'healthy',
        uptime: process.uptime(),
        timestamp: new Date().toISOString()
    });
});
```

## Backup and Recovery

### 1. Data Backup
```bash
# Backup wur_plants.json daily
0 3 * * * cp /app/backend/data/wur_plants.json /backups/wur_plants_$(date +\%Y\%m\%d).json
```

### 2. Database Backup (if using DB)
Configure automated backups for your database.

## Troubleshooting

### Issue: Puppeteer fails to launch browser
**Solution:** Ensure all Chromium dependencies are installed
```bash
ldd $(which chromium-browser)
```

### Issue: Out of memory errors
**Solution:** Increase Node memory limit
```bash
node --max-old-space-size=4096 index.js
```

### Issue: Scraper times out
**Solution:** Increase timeout values and check network connectivity

### Issue: Port already in use
**Solution:** Change port or kill existing process
```bash
lsof -ti:5000 | xargs kill -9
```

## Scaling Considerations

For high-traffic applications:
1. Use load balancer (Nginx, AWS ALB)
2. Deploy multiple backend instances
3. Use Redis for shared caching
4. Consider queue system for scraping jobs (Bull, RabbitMQ)
5. Implement CDN for static assets

## Support

For issues and questions:
- GitHub Issues: https://github.com/pacacodes/ELPACA/issues
- Documentation: See README.md and SCRAPER_README.md
