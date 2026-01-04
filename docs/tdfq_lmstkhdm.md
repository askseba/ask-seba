# تدفق المستخدم - Ask Seba PWA

## التدفق الرئيسي

```
Home → Step1 (المفضلة) → Step2 (المكروهة) → Step3 (الحساسية) → Results → Detail
```

---

## Step 1: المفضلة

### الوظيفة
- اختيار 3+ عطور من القائمة
- عرض Counter badge (X / 3)
- زر Next (يُفعّل بعد 3 اختيارات)

### التصميم
- Grid 2-4 columns (responsive)
- Perfume cards مع صور
- Selected state: border-gauge-safe + shadow

---

## Step 2: المكروهة

### الوظيفة
- اختيار عطور مكروهة (اختياري)
- **Skip Button** (أزرق كبير) - تخطي مباشر
- Next/Back buttons

### التصميم
- Grid 2-4 columns
- Selected state: border-gauge-danger
- Skip Button: bg-blue-500, w-full md:w-auto

---

## Step 3: الحساسية

### الوظيفة
- 3 مستويات:
  1. الأعراض (Level 1)
  2. العائلات (Level 2)
  3. المكونات (Level 3)
- Next/Back buttons

### التصميم
- Cards 200×120px (Level 1)
- Grid 3×2 (Level 2)
- Chips + Autocomplete (Level 3)

---

## Results Page

### الوظيفة
- عرض Top 3 matches
- **ProgressCircles** لكل عطر
- **WhyThisMatch** (عاطفي)
- **ShareButton** في كل card

### التصميم
- Grid 1-3 columns (responsive)
- ProgressCircles: 3 SVG circles (#F8C8DC/#D2B48C/#90EE90)
- WhyThisMatch: gradient bg, 3 أسباب
- ShareButton: gradient from-[#2f6f73] to-[#c0841a]

---

## Detail Page

### الوظيفة
- عرض تفاصيل العطر
- SpeedometerGauge (نسبة التوافق)
- **WhyThisMatch** (عاطفي)
- **ShareButton**
- OG Metadata (للـ social sharing)

### التصميم
- Layout: 2 columns (Desktop), Stacked (Mobile)
- SpeedometerGauge: إبرة متحركة
- WhyThisMatch: gradient bg
- ShareButton: gradient button

---

## المكونات الرئيسية

### ProgressCircles
- 3 SVG circles (200×120px)
- الألوان: #F8C8DC (وردي), #D2B48C (بني), #90EE90 (أخضر)
- Animation: stroke-dasharray smooth

### WhyThisMatch
- مكون عاطفي (🎯✅✨)
- 3 أسباب:
  1. يحتوي على [note] اللي تحبه
  2. يشبه [perfume]
  3. آمن تماماً (لا [allergen])

### ShareButton
- Web Share API (mobile)
- Clipboard fallback
- WhatsApp fallback
- نص: "صبا اختارت لي ${name} ${score}% 🎯 ${reasoning} ✅ آمن تماماً"

### SpeedometerGauge
- إبرة متحركة
- Animation: path drawing (1.5s)
- Status colors: safe/warning/danger

---

## الحالة النهائية

✅ **Production Ready v1.5**
- جميع الخطوات تعمل
- جميع المكونات منفذة
- RTL Support كامل
- Responsive Design
