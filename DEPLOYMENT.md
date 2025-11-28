# Vercel Deployment Guide

This guide will help you deploy your Next.js landing page to Vercel.

## Prerequisites

- A [Vercel account](https://vercel.com/signup) (free tier available)
- Git repository (GitHub, GitLab, or Bitbucket)
- Node.js 18+ installed locally

## Quick Deploy

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Push your code to Git**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Click "Import Project"
   - Select your Git repository
   - Vercel will auto-detect Next.js settings

3. **Configure (if needed)**
   - Framework Preset: Next.js (auto-detected)
   - Build Command: `next build` (default)
   - Output Directory: `.next` (default)
   - Install Command: `npm install` (default)

4. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes for build to complete
   - Your site will be live at `https://your-project.vercel.app`

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   # For preview deployment
   vercel
   
   # For production deployment
   vercel --prod
   ```

## Configuration

### Environment Variables

If you need environment variables, add them in the Vercel dashboard:

1. Go to your project settings
2. Navigate to "Environment Variables"
3. Add variables for each environment:
   - `NEXT_PUBLIC_SITE_URL`: Your production URL
   - Add any API keys or secrets here

### Custom Domain

1. Go to your project settings
2. Navigate to "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions
5. Vercel will automatically provision SSL certificate

### Performance Optimizations

The `vercel.json` configuration includes:

- **Security Headers**: XSS protection, frame options, content type options
- **Cache Headers**: Optimized caching for static assets
- **Clean URLs**: Removes `.html` extensions
- **Region**: Deployed to `iad1` (US East) - change if needed

Available regions:
- `iad1` - Washington, D.C., USA
- `sfo1` - San Francisco, USA
- `lhr1` - London, UK
- `hnd1` - Tokyo, Japan
- `gru1` - São Paulo, Brazil

## Build Settings

The project uses:
- **Framework**: Next.js 16.0.5
- **Node Version**: 18.x (Vercel default)
- **Build Command**: `next build`
- **Output Directory**: `.next`
- **Static Export**: No (using SSG with dynamic routes)

## Automatic Deployments

Once connected to Git:
- **Production**: Deploys automatically on push to `main` branch
- **Preview**: Deploys automatically on pull requests
- **Branch Previews**: Each branch gets its own preview URL

## Monitoring

After deployment, monitor your site:

1. **Analytics**: Enable Vercel Analytics in project settings
2. **Speed Insights**: Enable Web Vitals monitoring
3. **Logs**: View real-time logs in the Vercel dashboard
4. **Deployments**: Track all deployments and rollback if needed

## Troubleshooting

### Build Fails

1. Check build logs in Vercel dashboard
2. Ensure all dependencies are in `package.json`
3. Test build locally: `npm run build`
4. Check Node.js version compatibility

### Environment Variables Not Working

1. Ensure variables start with `NEXT_PUBLIC_` for client-side access
2. Redeploy after adding new environment variables
3. Check variable names match exactly (case-sensitive)

### Performance Issues

1. Enable Vercel Analytics to identify bottlenecks
2. Check image optimization settings
3. Review bundle size with `npm run build`
4. Consider enabling Edge Functions for faster response times

## Rollback

If something goes wrong:

1. Go to Deployments tab
2. Find the last working deployment
3. Click "..." menu
4. Select "Promote to Production"

## Support

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment Docs](https://nextjs.org/docs/deployment)
- [Vercel Support](https://vercel.com/support)

## Cost

- **Hobby Plan** (Free):
  - Unlimited deployments
  - 100GB bandwidth/month
  - Automatic HTTPS
  - Perfect for this landing page

- **Pro Plan** ($20/month):
  - More bandwidth
  - Team collaboration
  - Advanced analytics
  - Password protection

Your landing page should work perfectly on the free Hobby plan.
