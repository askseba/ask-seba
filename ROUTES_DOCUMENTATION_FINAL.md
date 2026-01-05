# 🗺️ Ask Seba - Routes Documentation

**Last Updated:** 2026-01-05  
**Project:** Ask Seba MVP (Perfume Recommendation App)  
**Status:** Phase 1 Complete  
**Method:** Evidence-based code analysis

> **Note:** This document covers **implemented routes only**. For future plans, see [`PHASE2_PLAN.md`](./PHASE2_PLAN.md)

---

## 📋 Table of Contents
1. [Public Routes](#1-public-routes)
2. [Protected Routes](#2-protected-routes)
3. [API Routes](#3-api-routes)
4. [Missing Routes](#4-missing-routes)
5. [User Journey Map](#5-user-journey-map)
6. [Technical Details](#6-technical-details)
7. [Quick Reference](#7-quick-reference)
8. [Status Summary](#8-status-summary)

---

## 1. Public Routes

### `/` - Landing Page
**File:** `src/app/page.tsx` (52 lines)  
**Component:** `Home` (default export)  
**Auth Status:** ✅ **Public** (no auth checks)  

**Evidence:**
```typescript
// src/app/page.tsx
// No auth(), getServerSession(), or redirect logic found
export default function Home() {
  const featuredPerfumes = getFeaturedPerfumes(3)
  // ... displays hero + featured perfumes
}
```

**Purpose:**
- الصفحة الرئيسية - عرض العطور المميزة
- Hero section with "Ask Seba" title
- Featured perfumes grid (3 cards)
- CTA button: "ابدأ رحلتك الآن →" → `/dashboard`

**Components Used:**
- `PerfumeCard`
- `PerfumeGrid`
- `getFeaturedPerfumes()` helper

**Features:**
✅ Featured perfumes display  
✅ Responsive design (RTL Arabic)  
❌ No Quiz flow entry point

---

### `/login` - Login Page
**File:** `src/app/login/page.tsx`  
**Component:** `Login` (default export, wrapped in Suspense)  
**Auth Status:** ✅ **Public** (login page, no auth required)  

**Evidence:**
```typescript
// src/app/login/page.tsx
// No auth checks found - allows unauthenticated access
```

**Purpose:**
- تسجيل الدخول (NextAuth)
- Google OAuth button
- Demo credentials: demo@askseba.com / 123456

**Auth Methods:**
✅ Google OAuth  
✅ Credentials (email/password)  

**Redirects to:** `/dashboard` after successful login

---

### `/perfume/[id]` - Perfume Detail Page
**File:** `src/app/perfume/[id]/page.tsx`  
**Component:** `PerfumeDetail` (default export)  
**Auth Status:** ✅ **Public** (no auth checks)

**Evidence:**
```typescript
// src/app/perfume/[id]/page.tsx
// No auth(), getServerSession(), or redirect logic found
// This route is PUBLIC, not protected
```

**Purpose:**
- صفحة تفاصيل عطر محدد (Dynamic Route)
- عرض معلومات العطر الكاملة

**Components Used:**
- `PerfumeTimeline` - مراحل العطر (Top/Heart/Base)
- `RadarChart` - رسم بياني
- `SpeedometerGauge` - عداد التطابق (87%)
- `SmartImage` - صورة مع lazy loading

**Features:**
✅ Perfume details (name, brand, price)  
✅ Match score visualization  
✅ Notes timeline (320x120px cards)  
✅ Safety badge  
✅ Add to favorites  

**Valid IDs:** `1-19` (from `perfumes.ts`)

---

## 2. Protected Routes

### `/dashboard` - User Dashboard
**File:** `src/app/dashboard/page.tsx`  
**Component:** `Dashboard` (default export, client component)  
**Auth Status:** 🔒 **Protected** (client-side NextAuth session check)

**Evidence (Protection Method):**
```typescript
// src/app/dashboard/page.tsx (lines 6, 22-34)
'use client'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export default function Dashboard() {
  const { data: session, status } = useSession()
  const router = useRouter()

  // Redirect to login if not authenticated
  if (status === 'unauthenticated') {
    router.push('/login?callbackUrl=/dashboard')
    return <LoadingSpinner message="جاري التحويل..." />
  }

  // Show loading while checking session
  if (status === 'loading' || !session) {
    return <LoadingSpinner message="جاري التحميل..." />
  }

  // Protected content - uses session.user
  return <div>مرحباً {session.user.name}</div>
}
```

**Protection Method:**
- Client-side session check using `useSession()` hook
- Redirects to `/login?callbackUrl=/dashboard` if unauthenticated

**Purpose:**
- لوحة التحكم - عطور المستخدم
- عرض إحصائيات المستخدم

**Components Used:**
- `StatsGrid`
- `FilterSidebar`
- `FilterTabs`
- `PerfumeCard`
- `RadarChart`

**Features:**
✅ User favorites  
✅ Search & filters  
✅ Stats display  
✅ Welcome message with user.name  

---

## 3. API Routes

### `/api/auth/[...nextauth]` - NextAuth API
**File:** `src/app/api/auth/[...nextauth]/route.ts`  
**Handler:** Exports `GET` and `POST` from `@/auth`  
**Auth Status:** ✅ **Public** (authentication endpoint)  
**Type:** API Route Handler (Next.js App Router)

**Evidence:**
```typescript
// src/app/api/auth/[...nextauth]/route.ts
import { handlers } from '@/auth'
export const { GET, POST } = handlers
```

**Endpoints Handled:**
```
/api/auth/signin          → Sign in
/api/auth/signout         → Sign out
/api/auth/callback/google → OAuth callback
/api/auth/session         → Session data
/api/auth/csrf            → CSRF token
```

**Auth Providers:**
✅ Google OAuth  
✅ Credentials (email/password)

---

## 4. Missing Routes ❌

**Status:** The following routes **DO NOT exist** in `src/app/`

### `/quiz` - Quiz Start ❌
**Missing File:** `src/app/quiz/page.tsx`  
**Purpose:** نقطة بداية الاستبيان

**Note:** `Step3Allergy` component exists at `src/components/quiz/Step3Allergy.tsx` (273 lines) but **not integrated**

---

### `/quiz/step1` - Step 1 (Favorites) ❌
**Missing File:** `src/app/quiz/step1/page.tsx`  
**Purpose:** تحديد الروائح المفضلة

---

### `/quiz/step2` - Step 2 (Disliked) ❌
**Missing File:** `src/app/quiz/step2/page.tsx`  
**Purpose:** تحديد الروائح غير المفضلة

---

### `/quiz/step3` - Step 3 (Allergy) ❌
**Missing File:** `src/app/quiz/step3/page.tsx`  
**Existing Component:** ✅ `src/components/quiz/Step3Allergy.tsx` (273 lines)

**Component Features:**
✅ Level 1: Symptoms (عطاس، احمرار...)  
✅ Level 2: Families (زهرية، خشبية...)  
✅ Level 3: Ingredients (ياسمين، عود...)  
✅ Back/Next navigation  

**What's Missing:**
❌ Route integration  
❌ State management  

---

### `/quiz/results` - Results Page ❌
**Missing File:** `src/app/quiz/results/page.tsx`  
**Purpose:** عرض النتائج والتوصيات

---

## 5. User Journey Map 🗺️

### Current Flow (Implemented ✅):
```
┌──────────────────┐
│   Landing (/)    │ "ابدأ رحلتك الآن"
│   ✅ Public      │
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│  Login (/login)  │ Google/Credentials
│   ✅ Public      │
└────────┬─────────┘
         │ (auth success)
         ▼
┌──────────────────┐
│   Dashboard      │ Stats + Perfumes
│  /dashboard      │ 🔒 Protected
└────────┬─────────┘
         │ (click card)
         ▼
┌──────────────────┐
│  Perfume Detail  │ Timeline + Match
│  /perfume/:id    │ ✅ Public
└──────────────────┘
```

**Status:**
✅ Landing → Login → Dashboard → Perfume works  
✅ Only `/dashboard` is protected (client-side)  
✅ `/perfume/:id` is public (accessible without login)

---

### Expected Flow (Missing ❌):
```
┌──────────────────┐
│   Landing (/)    │ "ابدأ الاستبيان"
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│ Quiz Start       │ ❌ MISSING
│    /quiz         │
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│ Step 1           │ ❌ MISSING
│  /quiz/step1     │
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│ Step 2           │ ❌ MISSING
│  /quiz/step2     │
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│ Step 3           │ ❌ MISSING (route)
│  /quiz/step3     │ ✅ Component exists
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│ Results          │ ❌ MISSING
│ /quiz/results    │
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│   Dashboard      │ ✅ EXISTS
│  /dashboard      │
└──────────────────┘
```

**Missing:**
❌ Quiz flow (5 routes)  
❌ Landing → Quiz integration  

> **See [`PHASE2_PLAN.md`](./PHASE2_PLAN.md) for implementation plan**

---

## 6. Technical Details 🔧

### Route Types & Protection:
| Route | Type | Auth Status | Protection Method | Data Source |
|-------|------|-------------|-------------------|-------------|
| `/` | Static | ✅ Public | None | `perfumes.ts` |
| `/login` | Static | ✅ Public | None | NextAuth |
| `/perfume/[id]` | Dynamic | ✅ Public | None | `perfumes.ts` |
| `/dashboard` | Static | 🔒 Protected | `useSession()` | `perfumes.ts` |
| `/api/auth/[...nextauth]` | API | ✅ Public | N/A | NextAuth |

### Authentication:
```
NextAuth.js v5 Beta
├── Providers:
│   ├── Google OAuth
│   └── Credentials (email/pass)
├── Protection:
│   └── Client-side useSession() hook
└── Middleware:
    └── ❌ Not found (no src/middleware.ts)
```

### Data Source:
```
src/lib/data/perfumes.ts
├── 19 hardcoded perfumes (static array)
├── Helper functions:
│   ├── getPerfumeById(id)
│   ├── getFeaturedPerfumes(limit)
│   ├── getFavoritesPerfumes()
│   └── getWishlistPerfumes()
└── ❌ No database (Prisma/Supabase)
```

### File Structure:
```
src/app/
├── api/auth/[...nextauth]/route.ts  → /api/auth/*
├── dashboard/page.tsx               → /dashboard 🔒
├── login/page.tsx                   → /login
├── perfume/[id]/page.tsx            → /perfume/:id
├── layout.tsx
└── page.tsx                         → /

src/components/
├── ui/                              → 9 components
│   ├── PerfumeCard.tsx
│   ├── PerfumeTimeline.tsx
│   ├── RadarChart.tsx
│   └── ...
└── quiz/
    └── Step3Allergy.tsx             → Not integrated

src/lib/data/
└── perfumes.ts                      → 19 hardcoded
```

---

## 7. Quick Reference 📌

### All Routes:
```
✅ IMPLEMENTED (5):
├── /                    → Landing (Public)
├── /login               → Login (Public)
├── /perfume/:id         → Detail (Public)
├── /dashboard           → Dashboard (Protected)
└── /api/auth/:nextauth  → API (Public)

❌ MISSING (5):
├── /quiz                → Start
├── /quiz/step1          → Favorites
├── /quiz/step2          → Disliked
├── /quiz/step3          → Allergy (component exists!)
└── /quiz/results        → Results
```

### Components:
```
✅ UI (9):
├── PerfumeCard, PerfumeGrid, PerfumeTimeline
├── RadarChart, SpeedometerGauge
├── FilterSidebar, FilterTabs, StatsGrid
└── SmartImage

✅ Quiz (1):
└── Step3Allergy (273 lines, not integrated)

❌ Missing (2):
├── Step1Favorites
└── Step2Disliked
```

### Data:
```
✅ Current:
└── perfumes.ts → 19 perfumes (static)

❌ Missing:
├── Database (Prisma/Supabase)
├── API routes (CRUD)
└── User preferences storage
```

---

## 8. Status Summary ✅

### Phase 1: COMPLETE ✅
- ✅ 5 routes (4 pages + 1 API)
- ✅ NextAuth (Google + Credentials)
- ✅ 9 UI components
- ✅ 1 quiz component (Step3Allergy)
- ✅ RTL Arabic support
- ✅ Responsive design
- ✅ Static data (19 perfumes)
- ✅ Client-side protected dashboard

### Phase 2: PLANNED ❌
See [`PHASE2_PLAN.md`](./PHASE2_PLAN.md) for:
- Quiz flow implementation (5 routes)
- Database integration
- Share features
- Server-side middleware
- API routes (CRUD)

---

## Changelog

| Date | Version | Changes |
|------|---------|---------|
| 2026-01-05 | 2.1 | Separated Phase 2 recommendations to `PHASE2_PLAN.md`. Focused this doc on routes + journey + status only. |
| 2026-01-05 | 2.0 | Corrected `/perfume/:id` to Public (was Protected). Added evidence-based code snippets. |

---

## Related Documents
- [`PHASE2_PLAN.md`](./PHASE2_PLAN.md) - Phase 2 implementation plan
- `DEEP_PROJECT_AUDIT_REPORT.md` - Code analysis
- `PROJECT_STRUCTURE_DOC_VERIFICATION.md` - Structure verification
- `FINAL_CHECKLIST.md` - Phase status

---

**End of Routes Documentation**

---

**Maintained by:** Ask Seba Development Team  
**Last Verified:** 2026-01-05  
**Repo Commit:** `f2092122b4b89bebd06b4ba72816c9ff57396310`
