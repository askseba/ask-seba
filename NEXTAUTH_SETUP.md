# NextAuth.js Setup - Installation Guide

## 1. Install NextAuth

```bash
npm install next-auth@beta
```

## 2. Create .env.local

Create `.env.local` file in the project root:

```env
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=sk-your-super-secret-key-here
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

**Generate NEXTAUTH_SECRET:**
```bash
openssl rand -base64 32
# OR use: https://generate-secret.vercel.app/32
```

**Google OAuth Setup (Optional):**
1. Go to https://console.cloud.google.com/apis/credentials
2. Create OAuth 2.0 Client ID
3. Add authorized redirect URI: `http://localhost:3000/api/auth/callback/google`
4. Copy Client ID and Client Secret to `.env.local`

## 3. Files Created

✅ `src/auth.ts` - NextAuth configuration
✅ `src/app/api/auth/[...nextauth]/route.ts` - API route handler
✅ `src/app/login/page.tsx` - Login page
✅ `src/components/SessionProvider.tsx` - Session provider wrapper
✅ `src/app/dashboard/page.tsx` - Protected dashboard (updated)

## 4. Demo Credentials

For testing without Google OAuth:
- **Email:** demo@askseba.com
- **Password:** 123456

## 5. Test

```bash
# Start dev server
npm run dev

# Test login:
# 1. Visit http://localhost:3000/dashboard
# 2. Should redirect to /login
# 3. Click "دخول تجريبي سريع"
# 4. Should redirect to /dashboard with user info
```
