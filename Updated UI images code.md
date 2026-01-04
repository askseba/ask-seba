<!-- ==================== الواجهة 1: Ask Seba - Allergy Symptoms ==================== -->
<!DOCTYPE html>
<html class="light" dir="rtl" lang="ar"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Ask Seba - Allergy Symptoms</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=Noto+Sans+Arabic:wght@400;500;600;700&family=Manrope:wght@400;500;600;700&display=swap" rel="stylesheet"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=Noto+Sans+Arabic:wght@400;500;600;700&family=Manrope:wght@400;500;600;700&display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=Noto+Sans+Arabic:wght@400;500;600;700&family=Manrope:wght@400;500;600;700&display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#c0841a",
                        "background-light": "#F2F0EB",
                        "background-dark": "#5B4233",
                        "surface-light": "#ffffff",
                        "surface-dark": "#2c241b",
                        "text-main-light": "#5B4233",
                        "text-main-dark": "#ecebe9",
                        "text-muted": "#967c4f",
                    },
                    fontFamily: {
                        "display": ["Noto Sans Arabic", "Manrope", "sans-serif"],
                        "body": ["Noto Sans Arabic", "Manrope", "sans-serif"]
                    },
                    borderRadius: {"DEFAULT": "1rem", "lg": "1.5rem", "xl": "2rem", "2xl": "3rem", "full": "9999px"},
                },
            },
        }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }.no-scrollbar::-webkit-scrollbar {
            display: none;
        }
        .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
    </style>
<style>
        body {
            min-height: max(884px, 100dvh);
        }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  
    <style>
        :root {
            --cream-bg: #F2F0EB;
            --brown-text: #5B4233;
            --pink-light: #EEDDD8;
            --brown-medium: #A88B78;
            --gray-brown: #AFA393;
            --beige-light: #EBE1DD;
            --gradient-start: #2f6f73;
            --gradient-end: #c0841a;
            --safe-green: #10B981;
            --warning-orange: #F59E0B;
            --danger-red: #EF4444;
        }
    </style>
</head>
<body class="bg-background-light dark:bg-background-dark font-display text-text-main-light dark:text-text-main-dark antialiased transition-colors duration-200">
<div class="relative flex h-full min-h-screen w-full flex-col overflow-x-hidden pb-24">
<header class="sticky top-0 z-50 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md transition-colors duration-200">
<div class="flex items-center justify-between p-4 pb-2">
<button class="flex size-10 shrink-0 items-center justify-center rounded-full text-text-main-light dark:text-text-main-dark hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
<span class="material-symbols-outlined text-[24px]">arrow_forward_ios</span>
</button>
<h2 class="text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">حساسية - الأعراض</h2>
<div class="size-10 shrink-0"></div>
</div>
<div class="w-full h-1 bg-black/5 dark:bg-white/5 mt-1">
<div class="h-full w-1/4 bg-primary rounded-r-full"></div>
</div>
</header>
<main class="flex-1 flex flex-col px-4 pt-6 gap-6">
<div class="text-center space-y-2">
<h1 class="text-[28px] font-bold leading-tight text-text-main-light dark:text-text-main-dark">
                ما هي الأعراض التي تشعر بها؟
            </h1>
<p class="text-text-muted text-base font-medium">
                ساعدنا لنوصي بالعطر الأنسب لك
            </p>
</div>
<div class="grid grid-cols-1 gap-4">
<div class="group relative cursor-pointer">
<input class="peer sr-only" id="symptom-1" type="checkbox"/>
<label class="flex h-[120px] w-full items-center justify-between rounded-xl bg-surface-light dark:bg-surface-dark p-4 shadow-[0_2px_12px_rgba(0,0,0,0.04)] dark:shadow-none border border-transparent transition-all duration-300 peer-checked:border-primary peer-checked:bg-primary/5 dark:peer-checked:bg-primary/10 hover:shadow-md" for="symptom-1">
<div class="flex items-center gap-4">
<div class="flex size-14 shrink-0 items-center justify-center rounded-full bg-primary/10 dark:bg-primary/20 text-primary">
<span class="material-symbols-outlined text-[32px]">sick</span>
</div>
<div class="flex flex-col gap-1">
<span class="text-lg font-bold text-text-main-light dark:text-text-main-dark">عطس أو احتقان</span>
<span class="text-sm text-text-muted">تهيج الأنف والجيوب الأنفية</span>
</div>
</div>
<div class="flex size-6 items-center justify-center rounded-full border-2 border-primary/30 peer-checked:border-primary peer-checked:bg-primary text-transparent peer-checked:text-white transition-all">
<span class="material-symbols-outlined text-[16px] font-bold">check</span>
</div>
</label>
</div>
<div class="group relative cursor-pointer">
<input class="peer sr-only" id="symptom-2" type="checkbox"/>
<label class="flex h-[120px] w-full items-center justify-between rounded-xl bg-surface-light dark:bg-surface-dark p-4 shadow-[0_2px_12px_rgba(0,0,0,0.04)] dark:shadow-none border border-transparent transition-all duration-300 peer-checked:border-primary peer-checked:bg-primary/5 dark:peer-checked:bg-primary/10 hover:shadow-md" for="symptom-2">
<div class="flex items-center gap-4">
<div class="flex size-14 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400">
<span class="material-symbols-outlined text-[32px]">dermatology</span>
</div>
<div class="flex flex-col gap-1">
<span class="text-lg font-bold text-text-main-light dark:text-text-main-dark">احمرار أو حكة</span>
<span class="text-sm text-text-muted">طفح جلدي أو حساسية تلامس</span>
</div>
</div>
<div class="flex size-6 items-center justify-center rounded-full border-2 border-primary/30 peer-checked:border-primary peer-checked:bg-primary text-transparent peer-checked:text-white transition-all">
<span class="material-symbols-outlined text-[16px] font-bold">check</span>
</div>
</label>
</div>
<div class="group relative cursor-pointer">
<input class="peer sr-only" id="symptom-3" type="checkbox"/>
<label class="flex h-[120px] w-full items-center justify-between rounded-xl bg-surface-light dark:bg-surface-dark p-4 shadow-[0_2px_12px_rgba(0,0,0,0.04)] dark:shadow-none border border-transparent transition-all duration-300 peer-checked:border-primary peer-checked:bg-primary/5 dark:peer-checked:bg-primary/10 hover:shadow-md" for="symptom-3">
<div class="flex items-center gap-4">
<div class="flex size-14 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400">
<span class="material-symbols-outlined text-[32px]">sentiment_stressed</span>
</div>
<div class="flex flex-col gap-1">
<span class="text-lg font-bold text-text-main-light dark:text-text-main-dark">صداع أو دوخة</span>
<span class="text-sm text-text-muted">ألم في الرأس عند استنشاق العطر</span>
</div>
</div>
<div class="flex size-6 items-center justify-center rounded-full border-2 border-primary/30 peer-checked:border-primary peer-checked:bg-primary text-transparent peer-checked:text-white transition-all">
<span class="material-symbols-outlined text-[16px] font-bold">check</span>
</div>
</label>
</div>
<div class="group relative cursor-pointer">
<input class="peer sr-only" id="symptom-4" type="checkbox"/>
<label class="flex h-[120px] w-full items-center justify-between rounded-xl bg-surface-light dark:bg-surface-dark p-4 shadow-[0_2px_12px_rgba(0,0,0,0.04)] dark:shadow-none border border-transparent transition-all duration-300 peer-checked:border-primary peer-checked:bg-primary/5 dark:peer-checked:bg-primary/10 hover:shadow-md" for="symptom-4">
<div class="flex items-center gap-4">
<div class="flex size-14 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
<span class="material-symbols-outlined text-[32px]">pulmonology</span>
</div>
<div class="flex flex-col gap-1">
<span class="text-lg font-bold text-text-main-light dark:text-text-main-dark">ضيق في التنفس</span>
<span class="text-sm text-text-muted">صعوبة في التنفس أو كتمة</span>
</div>
</div>
<div class="flex size-6 items-center justify-center rounded-full border-2 border-primary/30 peer-checked:border-primary peer-checked:bg-primary text-transparent peer-checked:text-white transition-all">
<span class="material-symbols-outlined text-[16px] font-bold">check</span>
</div>
</label>
</div>
<div class="group relative cursor-pointer mt-2">
<input class="peer sr-only" id="symptom-none" type="checkbox"/>
<label class="flex h-[100px] w-full items-center justify-between rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/10 dark:to-emerald-900/10 p-4 border border-emerald-100 dark:border-emerald-900/20 transition-all duration-300 peer-checked:ring-2 peer-checked:ring-emerald-500 peer-checked:bg-emerald-100 dark:peer-checked:bg-emerald-900/30" for="symptom-none">
<div class="flex items-center gap-4">
<div class="flex size-12 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-800 dark:text-emerald-300">
<span class="material-symbols-outlined text-[24px]">check_circle</span>
</div>
<div class="flex flex-col gap-1">
<span class="text-lg font-bold text-text-main-light dark:text-text-main-dark">لا أعاني من شيء</span>
<span class="text-sm text-emerald-600 dark:text-emerald-400 font-medium">أنا بصحة جيدة وجاهز للاختيار</span>
</div>
</div>
<div class="flex size-6 items-center justify-center rounded-full border-2 border-emerald-200 dark:border-emerald-700 peer-checked:border-emerald-500 peer-checked:bg-emerald-500 text-transparent peer-checked:text-white transition-all">
<span class="material-symbols-outlined text-[16px] font-bold">check</span>
</div>
</label>
</div>
</div>
<div class="h-8"></div>
<button class="w-full bg-primary text-white text-lg font-bold h-14 rounded-xl shadow-lg shadow-primary/30 active:scale-[0.98] transition-all hover:bg-primary/90 flex items-center justify-center gap-2">
<span>التالي</span>
<span class="material-symbols-outlined text-xl rotate-180">arrow_right_alt</span>
</button>
</main>
<nav class="fixed bottom-0 z-40 w-full bg-surface-light dark:bg-surface-dark border-t border-black/5 dark:border-white/5 pb-safe pt-2">
<div class="flex justify-around items-end h-[60px] pb-3">
<a class="group flex flex-col items-center gap-1 w-16" href="#">
<div class="text-text-muted group-hover:text-primary transition-colors">
<span class="material-symbols-outlined text-[26px]">person</span>
</div>
<span class="text-[10px] font-medium text-text-muted group-hover:text-primary">حسابي</span>
</a>
<a class="group flex flex-col items-center gap-1 w-16" href="#">
<div class="text-text-muted group-hover:text-primary transition-colors">
<span class="material-symbols-outlined text-[26px]">search</span>
</div>
<span class="text-[10px] font-medium text-text-muted group-hover:text-primary">بحث</span>
</a>
<a class="group flex flex-col items-center gap-1 w-16" href="#">
<div class="text-text-muted group-hover:text-primary transition-colors">
<span class="material-symbols-outlined text-[26px]">favorite</span>
</div>
<span class="text-[10px] font-medium text-text-muted group-hover:text-primary">المفضلة</span>
</a>
<a class="group flex flex-col items-center gap-1 w-16 relative" href="#">
<div class="absolute -top-10 size-14 rounded-full bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/40 border-4 border-background-light dark:border-background-dark transform transition-transform group-active:scale-95">
<span class="material-symbols-outlined text-[28px]">home</span>
</div>
<div class="h-[26px]"></div> 
<span class="text-[10px] font-bold text-primary">الرئيسية</span>
</a>
</div>
<div class="h-6 w-full bg-transparent"></div>
</nav>
</div>
<script>
    const noneCheckbox = document.getElementById('symptom-none');
    const symptomCheckboxes = document.querySelectorAll('input[type="checkbox"]:not(#symptom-none)');
    noneCheckbox.addEventListener('change', (e) => {
        if (e.target.checked) {
            symptomCheckboxes.forEach(cb => cb.checked = false);
        }
    });
    symptomCheckboxes.forEach(cb => {
        cb.addEventListener('change', (e) => {
            if (e.target.checked) {
                noneCheckbox.checked = false;
            }
        });
    });
</script>

</body></html>

<!-- ==================== الواجهة 2: Ask Seba - Preferred Scents ==================== -->
<!DOCTYPE html>
<html dir="rtl" lang="ar"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Ask Seba - Preferred Scents</title>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=Noto+Sans+Arabic:wght@400;500;600;700&family=Manrope:wght@400;500;600;700&display=swap" rel="stylesheet"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=Noto+Sans+Arabic:wght@400;500;600;700&family=Manrope:wght@400;500;600;700&display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=Noto+Sans+Arabic:wght@400;500;600;700&family=Manrope:wght@400;500;600;700&display=swap" rel="stylesheet"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#c0841a",
                        "background-light": "#F2F0EB",
                        "background-dark": "#5B4233",
                        "surface-dark": "#2d2418", 
                    },
                    fontFamily: {
                        "display": ["Noto Sans Arabic", "Manrope", "sans-serif"]
                    },
                    borderRadius: {
                        "DEFAULT": "1rem", 
                        "lg": "2rem", 
                        "xl": "3rem", 
                        "full": "9999px"
                    },
                },
            },
        }
    </script>
<style>::-webkit-scrollbar {
            width: 0px;
            background: transparent;
        }
        body {
            min-height: max(884px, 100dvh);
        }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  
    <style>
        :root {
            --cream-bg: #F2F0EB;
            --brown-text: #5B4233;
            --pink-light: #EEDDD8;
            --brown-medium: #A88B78;
            --gray-brown: #AFA393;
            --beige-light: #EBE1DD;
            --gradient-start: #2f6f73;
            --gradient-end: #c0841a;
            --safe-green: #10B981;
            --warning-orange: #F59E0B;
            --danger-red: #EF4444;
        }
    </style>
</head>
<body class="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display antialiased selection:bg-primary/30">
<div class="min-h-screen flex items-center justify-center p-4 bg-gray-100 dark:bg-black/50">
<div class="w-full max-w-sm bg-background-light dark:bg-background-dark h-[800px] rounded-[3rem] overflow-hidden shadow-2xl border-[8px] border-gray-900 relative flex flex-col transition-colors duration-300">
<div class="h-12 w-full flex justify-between items-center px-6 pt-2 z-20">
<span class="text-xs font-semibold">9:41</span>
<div class="flex gap-1.5">
<span class="material-symbols-outlined text-[18px]">signal_cellular_alt</span>
<span class="material-symbols-outlined text-[18px]">wifi</span>
<span class="material-symbols-outlined text-[18px]">battery_full</span>
</div>
</div>
<div class="flex-1 flex flex-col px-6 relative z-10 overflow-y-auto pb-32">
<header class="mt-4 mb-8 text-center">
<p class="text-primary text-xs tracking-wider uppercase font-bold mb-2 opacity-80">خطوة 3 من 5</p>
<h1 class="text-2xl font-bold leading-tight text-gray-900 dark:text-white">ما هي الروائح التي تفضلها عادة؟</h1>
<p class="text-sm text-gray-500 dark:text-gray-400 mt-2">اختر ٣ مكونات على الأقل للمتابعة</p>
</header>
<div class="grid grid-cols-2 gap-4">
<div class="aspect-square rounded-2xl bg-white dark:bg-surface-dark border border-primary relative p-3 flex flex-col justify-end group cursor-pointer shadow-sm dark:shadow-none transition-all">
<div class="hidden dark:block absolute inset-0 bg-gradient-to-t from-black/80 to-transparent rounded-2xl"></div>
<div class="absolute top-3 right-3 text-primary">
<span class="material-symbols-outlined filled icon-filled">check_circle</span>
</div>
<div class="relative z-10">
<span class="text-lg mb-1 block">🌺</span>
<span class="text-sm font-medium text-gray-900 dark:text-white">الأزهار</span>
</div>
</div>
<div class="aspect-square rounded-2xl bg-white dark:bg-surface-dark border border-gray-200 dark:border-white/5 p-3 flex flex-col justify-end group cursor-pointer dark:opacity-70 shadow-sm dark:shadow-none transition-all">
<div class="hidden dark:block absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl"></div>
<div class="absolute top-3 right-3 text-gray-300 dark:text-white/20">
<span class="material-symbols-outlined">radio_button_unchecked</span>
</div>
<div class="relative z-10">
<span class="text-lg mb-1 block">🪵</span>
<span class="text-sm font-medium text-gray-900 dark:text-white">الأخشاب</span>
</div>
</div>
<div class="aspect-square rounded-2xl bg-white dark:bg-surface-dark border border-gray-200 dark:border-white/5 p-3 flex flex-col justify-end group cursor-pointer dark:opacity-70 shadow-sm dark:shadow-none transition-all">
<div class="hidden dark:block absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl"></div>
<div class="absolute top-3 right-3 text-gray-300 dark:text-white/20">
<span class="material-symbols-outlined">radio_button_unchecked</span>
</div>
<div class="relative z-10">
<span class="text-lg mb-1 block">🍋</span>
<span class="text-sm font-medium text-gray-900 dark:text-white">الحمضيات</span>
</div>
</div>
<div class="aspect-square rounded-2xl bg-white dark:bg-surface-dark border border-gray-200 dark:border-white/5 p-3 flex flex-col justify-end group cursor-pointer dark:opacity-70 shadow-sm dark:shadow-none transition-all">
<div class="hidden dark:block absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl"></div>
<div class="absolute top-3 right-3 text-gray-300 dark:text-white/20">
<span class="material-symbols-outlined">radio_button_unchecked</span>
</div>
<div class="relative z-10">
<span class="text-lg mb-1 block">🌶️</span>
<span class="text-sm font-medium text-gray-900 dark:text-white">التوابل</span>
</div>
</div>
</div>
</div>
<div class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background-light via-background-light dark:from-background-dark dark:via-background-dark to-transparent z-20 pointer-events-none transition-colors duration-300"></div>
<div class="absolute bottom-0 w-full p-6 pb-8 z-30 flex justify-center">
<button aria-disabled="true" aria-label="تابع (غير مفعل)" class="group relative flex items-center justify-center w-[200px] h-12 rounded-full bg-primary/20 cursor-not-allowed transition-all duration-300" disabled="" type="button">
<span class="text-primary/60 dark:text-white/40 text-base font-bold leading-normal tracking-wide px-4 truncate transition-colors">
                        تابع
                    </span>
</button>
</div>
</div>
<div class="fixed bottom-4 text-xs text-gray-500 font-mono hidden md:block">
            Variant 3: Disabled State (Light Theme)
        </div>
</div>
</body></html>

<!-- ==================== الواجهة 3: Ask Seba - Allergy Onboarding ==================== -->
<!DOCTYPE html>
<html class="light" dir="rtl" lang="ar"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Ask Seba - Allergy Onboarding</title>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=Noto+Sans+Arabic:wght@400;500;600;700&family=Manrope:wght@400;500;600;700&display=swap" rel="stylesheet"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=Noto+Sans+Arabic:wght@400;500;600;700&family=Manrope:wght@400;500;600;700&display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=Noto+Sans+Arabic:wght@400;500;600;700&family=Manrope:wght@400;500;600;700&display=swap" rel="stylesheet"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#c0841a",
                        "background-light": "#F2F0EB",
                        "background-dark": "#5B4233",
                        "surface-light": "#ffffff",
                        "surface-dark": "#2c261e",
                    },
                    fontFamily: {
                        "display": ["Noto Sans Arabic", "Manrope", "sans-serif"],
                        "sans": ["Noto Sans Arabic", "Manrope", "sans-serif"],
                    },
                    borderRadius: {"DEFAULT": "1rem", "lg": "2rem", "xl": "3rem", "full": "9999px"},
                },
            },
        }
    </script>
<style>.no-scrollbar::-webkit-scrollbar {
            display: none;
        }
        .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }.checkbox-wrapper input:checked + div {
            background-color: #c0841a;
            border-color: #c0841a;
        }
        .checkbox-wrapper input:checked + div svg {
            opacity: 1;
        }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  
    <style>
        :root {
            --cream-bg: #F2F0EB;
            --brown-text: #5B4233;
            --pink-light: #EEDDD8;
            --brown-medium: #A88B78;
            --gray-brown: #AFA393;
            --beige-light: #EBE1DD;
            --gradient-start: #2f6f73;
            --gradient-end: #c0841a;
            --safe-green: #10B981;
            --warning-orange: #F59E0B;
            --danger-red: #EF4444;
        }
    </style>
</head>
<body class="bg-background-light dark:bg-background-dark font-display text-[#1b160e] dark:text-[#fbfaf8] antialiased selection:bg-primary/20">
<div class="relative flex h-full min-h-screen w-full flex-col overflow-x-hidden pb-24">
<header class="sticky top-0 z-50 flex items-center justify-between bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md p-4 pb-2 transition-colors duration-200">
<button class="text-[#1b160e] dark:text-white flex size-12 shrink-0 items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
<span class="material-symbols-outlined text-[24px]">arrow_forward</span>
</button>
<h2 class="text-[#1b160e] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">تفضيلات الحساسية</h2>
<div class="flex size-12 items-center justify-center">
<p class="text-primary text-base font-bold leading-normal tracking-[0.015em]">2/5</p>
</div>
</header>
<section class="px-6 pt-4 pb-6">
<h1 class="text-[#1b160e] dark:text-white tracking-tight text-[28px] md:text-[32px] font-bold leading-tight text-center mb-3">أي العائلات العطرية تزعجك؟</h1>
<p class="text-[#967c4f] dark:text-[#d4bca0] text-base font-medium leading-relaxed text-center max-w-md mx-auto">
                حدد العائلات التي تسبب لك عدم ارتياح لاستبعادها من التوصيات الذكية.
            </p>
</section>
<main class="flex-1 px-4 md:px-6">
<div class="grid grid-cols-2 gap-4 pb-6">
<label class="group relative flex flex-col bg-surface-light dark:bg-surface-dark rounded-2xl shadow-sm border border-transparent hover:border-primary/30 transition-all cursor-pointer overflow-hidden checkbox-wrapper">
<input class="peer sr-only" type="checkbox"/>
<div class="w-full h-32 bg-gray-100 dark:bg-gray-800 relative">
<div class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" data-alt="Soft pink blooming roses and petals" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDyTgDU6LdG4wiYitBIJB3foGZ1d8ocAH4wHjrhsNJczZjeN73ua7_3z19jRlLSnuIfNp50FzbW1-qjvoPSv4bnNYE-Qp1oth6xJ3MilVA-YOJUCWLWAiGMz9CEqBYqgby92QCr-NXYQYJ9gmJdc2KyPBuWDvwsdgX89xFJevROTBhft4uZQGuQ8jSIvH23ZmQAcKZragbAGqM1rojaVwWDilsYEZafZ_E1FN5bvd_WjgFMv7nJPQtkiHxxtlHT-K1EzeZzeblTgJk7');"></div>
<div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60"></div>
</div>
<div class="p-3 flex flex-col gap-1">
<div class="flex justify-between items-start">
<span class="text-[#1b160e] dark:text-white text-lg font-bold">زهرية</span>
</div>
<p class="text-gray-500 dark:text-gray-400 text-xs font-normal leading-normal">ياسمين، ورد، مسك الروم</p>
<div class="flex items-center gap-2 mt-3 pt-2 border-t border-gray-100 dark:border-white/10">
<div class="w-5 h-5 rounded-full border-2 border-gray-300 dark:border-gray-500 flex items-center justify-center transition-colors">
<span class="material-symbols-outlined text-[14px] text-white opacity-0 transition-opacity">close</span>
</div>
<span class="text-xs font-bold text-gray-400 peer-checked:text-primary transition-colors">يزعجني</span>
</div>
</div>
<div class="absolute inset-0 rounded-2xl border-2 border-primary opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity"></div>
</label>
<label class="group relative flex flex-col bg-surface-light dark:bg-surface-dark rounded-2xl shadow-sm border border-transparent hover:border-primary/30 transition-all cursor-pointer overflow-hidden checkbox-wrapper">
<input class="peer sr-only" type="checkbox"/>
<div class="w-full h-32 bg-gray-100 dark:bg-gray-800 relative">
<div class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" data-alt="Fresh sliced lemons and oranges with leaves" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDNaPdXO1hQ-uIkSmtUGnkOvy6Bzc3Bz2Y-TcNp1uiYWswCyjqu5Ri09-492ySfGf-sw3vr5dlukxmPriV8dlDSpmBJmzI-OWNRpFd6k6TMfVz47Bv1jxtAe_h8PvQ5NbtdrVzZN1OwXYwXZiq_X_N7DnMLv9cuRxrIutPFUYbufeUObf-QfOzqJqcscWqlfgNFl7o6KL00jXYMt65z6o5gEKQA_JbRcGQDyZEOrQWeSu_cM__S1PNg6YUa-EWHO-C2DAIiJ6BrXr9N');"></div>
<div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60"></div>
</div>
<div class="p-3 flex flex-col gap-1">
<div class="flex justify-between items-start">
<span class="text-[#1b160e] dark:text-white text-lg font-bold">حمضية</span>
</div>
<p class="text-gray-500 dark:text-gray-400 text-xs font-normal leading-normal">ليمون، برغموت، جريب فروت</p>
<div class="flex items-center gap-2 mt-3 pt-2 border-t border-gray-100 dark:border-white/10">
<div class="w-5 h-5 rounded-full border-2 border-gray-300 dark:border-gray-500 flex items-center justify-center transition-colors">
<span class="material-symbols-outlined text-[14px] text-white opacity-0 transition-opacity">close</span>
</div>
<span class="text-xs font-bold text-gray-400 peer-checked:text-primary transition-colors">يزعجني</span>
</div>
</div>
<div class="absolute inset-0 rounded-2xl border-2 border-primary opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity"></div>
</label>
<label class="group relative flex flex-col bg-surface-light dark:bg-surface-dark rounded-2xl shadow-sm border border-transparent hover:border-primary/30 transition-all cursor-pointer overflow-hidden checkbox-wrapper">
<input checked="" class="peer sr-only" type="checkbox"/> 
<div class="w-full h-32 bg-gray-100 dark:bg-gray-800 relative">
<div class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" data-alt="Textured cedar wood logs and bark" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCVKVu3lvvbrnn1WV-NzpFsKnI-xKWNUYJ59HlLaVb9qetEuEImfml1G10c-JwXgxHOWCYkI_8QGGb4WEslxYnv_K7tOHE0HwFqyo59WR5I5f0zL9e9KhR25VVaX35bNiNZMcbZ5piaG6aB2COLZP9cDGXUs0CLlPHfZdqexTzDZTypnDVcHOcdeXfnauLhrvbxSWgH3nqCqnkjk0Xnd4iEZ2OMYYdLfgJcSn0OqNtxE0tHlDrdWpat9DND7wr_KO3HvBq9WF6nTrnJ');"></div>
<div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60"></div>
</div>
<div class="p-3 flex flex-col gap-1">
<div class="flex justify-between items-start">
<span class="text-[#1b160e] dark:text-white text-lg font-bold">خشبية</span>
</div>
<p class="text-gray-500 dark:text-gray-400 text-xs font-normal leading-normal">صندل، أرز، نجيل الهند</p>
<div class="flex items-center gap-2 mt-3 pt-2 border-t border-gray-100 dark:border-white/10">
<div class="w-5 h-5 rounded-full border-2 border-gray-300 dark:border-gray-500 flex items-center justify-center transition-colors">
<span class="material-symbols-outlined text-[14px] text-white opacity-0 transition-opacity">close</span>
</div>
<span class="text-xs font-bold text-gray-400 peer-checked:text-primary transition-colors">يزعجني</span>
</div>
</div>
<div class="absolute inset-0 rounded-2xl border-2 border-primary opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity"></div>
</label>
<label class="group relative flex flex-col bg-surface-light dark:bg-surface-dark rounded-2xl shadow-sm border border-transparent hover:border-primary/30 transition-all cursor-pointer overflow-hidden checkbox-wrapper">
<input class="peer sr-only" type="checkbox"/>
<div class="w-full h-32 bg-gray-100 dark:bg-gray-800 relative">
<div class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" data-alt="Vanilla pods and aromatic spices" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCrO0WXbhlshnr9gpfwlA-8aqftkUEl5TGPeSvOyzcnYJM54FVoMXcVHdRnSpZBuN2FgTvRYUM3IYYnKQ9wazf6ruKB4bIlOWMK8WmqqaFfM5iibBRe8p8CCQv7goIKWiW-Em-QZVy4I9Ymtz4vAlO9X13c5-MsWEFB1JlTdZcaW_gFDkAWVmUn3xREWZ0ehBugof13Qw_nO7v4bukI12Ai5x1uFGJy11ebKHw5lw8T8Sk1OA6er4jfTGMxiY_KRTfuik8ZIy6Npeps');"></div>
<div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60"></div>
</div>
<div class="p-3 flex flex-col gap-1">
<div class="flex justify-between items-start">
<span class="text-[#1b160e] dark:text-white text-lg font-bold">شرقية</span>
</div>
<p class="text-gray-500 dark:text-gray-400 text-xs font-normal leading-normal">عنبر، فانيليا، عود</p>
<div class="flex items-center gap-2 mt-3 pt-2 border-t border-gray-100 dark:border-white/10">
<div class="w-5 h-5 rounded-full border-2 border-gray-300 dark:border-gray-500 flex items-center justify-center transition-colors">
<span class="material-symbols-outlined text-[14px] text-white opacity-0 transition-opacity">close</span>
</div>
<span class="text-xs font-bold text-gray-400 peer-checked:text-primary transition-colors">يزعجني</span>
</div>
</div>
<div class="absolute inset-0 rounded-2xl border-2 border-primary opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity"></div>
</label>
<label class="group relative flex flex-col bg-surface-light dark:bg-surface-dark rounded-2xl shadow-sm border border-transparent hover:border-primary/30 transition-all cursor-pointer overflow-hidden checkbox-wrapper">
<input class="peer sr-only" type="checkbox"/>
<div class="w-full h-32 bg-gray-100 dark:bg-gray-800 relative">
<div class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" data-alt="Blue ocean waves and sea foam" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuB_qJWoClpapg3WwWdZdQX7TIbEGhdx0U5wiqRGaLKukYu1tbGw8cTTuvp0k3Bp9KNAiV_YmGhibP_AuStyxYkC-0ae6mGoHQm-NT85TCG7OPtDVtSaojb3wQs8ZyW3VyCxMVR7nZ9DRJzOWLxQvYA0kbleaADn-EcAA0lFMJeuyV7Ip3_l1_u56Sb6etPRo6HKaV7AbZp1zV7_V00Ozdzyyivc0mkrGlJzoAC9QiVEvSAJ-aw7sMdd6fUCuX-Gs1NsFwrEizMVXX77');"></div>
<div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60"></div>
</div>
<div class="p-3 flex flex-col gap-1">
<div class="flex justify-between items-start">
<span class="text-[#1b160e] dark:text-white text-lg font-bold">مائية</span>
</div>
<p class="text-gray-500 dark:text-gray-400 text-xs font-normal leading-normal">ملح البحر، نسيم المحيط</p>
<div class="flex items-center gap-2 mt-3 pt-2 border-t border-gray-100 dark:border-white/10">
<div class="w-5 h-5 rounded-full border-2 border-gray-300 dark:border-gray-500 flex items-center justify-center transition-colors">
<span class="material-symbols-outlined text-[14px] text-white opacity-0 transition-opacity">close</span>
</div>
<span class="text-xs font-bold text-gray-400 peer-checked:text-primary transition-colors">يزعجني</span>
</div>
</div>
<div class="absolute inset-0 rounded-2xl border-2 border-primary opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity"></div>
</label>
<label class="group relative flex flex-col bg-surface-light dark:bg-surface-dark rounded-2xl shadow-sm border border-transparent hover:border-primary/30 transition-all cursor-pointer overflow-hidden checkbox-wrapper">
<input class="peer sr-only" type="checkbox"/>
<div class="w-full h-32 bg-gray-100 dark:bg-gray-800 relative">
<div class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" data-alt="Green mint leaves and fresh herbs" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuA2NypX_YnuSXJqqMzRUIEI_d-RTH7nkcbQvKfhbs-fTX0lVLmgvLGoM0MitKENCDInpk3HRMjYeMx4IGYO-jz4ZjNYp7fcNBiuQ0n9kvPeq-L0rT3zUq8Cql5lblyspJHEW3Fj-q50iGvaTgSFecoxLcthKENPmVnnvVtXbBYURpuaz6MaHccEffT5i5dabmKaUtc4uDeVM7R87MiXfdpeKwQ7jOkHOVMlU-0aO7vbEOfCs_6h7Y6kJbKdhu0W7Hx9q4GbOaZK2kdp');"></div>
<div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60"></div>
</div>
<div class="p-3 flex flex-col gap-1">
<div class="flex justify-between items-start">
<span class="text-[#1b160e] dark:text-white text-lg font-bold">عشبية</span>
</div>
<p class="text-gray-500 dark:text-gray-400 text-xs font-normal leading-normal">نعناع، ريحان، شاي أخضر</p>
<div class="flex items-center gap-2 mt-3 pt-2 border-t border-gray-100 dark:border-white/10">
<div class="w-5 h-5 rounded-full border-2 border-gray-300 dark:border-gray-500 flex items-center justify-center transition-colors">
<span class="material-symbols-outlined text-[14px] text-white opacity-0 transition-opacity">close</span>
</div>
<span class="text-xs font-bold text-gray-400 peer-checked:text-primary transition-colors">يزعجني</span>
</div>
</div>
<div class="absolute inset-0 rounded-2xl border-2 border-primary opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity"></div>
</label>
</div>
</main>
<div class="fixed bottom-24 left-0 right-0 z-40 px-6 flex justify-center pointer-events-none">
<button class="pointer-events-auto flex w-full max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 bg-primary text-white text-lg font-bold leading-normal tracking-wide shadow-lg hover:bg-primary/90 transition-all transform active:scale-95">
<span class="truncate">التالي</span>
<span class="material-symbols-outlined mr-2 rtl:ml-2 rtl:mr-0 text-[20px]">arrow_back</span>
</button>
</div>
<nav class="fixed bottom-0 left-0 right-0 z-50 bg-surface-light dark:bg-surface-dark border-t border-gray-200 dark:border-white/5 pb-5 pt-3 px-6 shadow-[0_-5px_20px_rgba(0,0,0,0.05)]">
<ul class="flex justify-between items-center max-w-lg mx-auto">
<li>
<a class="flex flex-col items-center gap-1 text-gray-400 hover:text-primary transition-colors" href="#">
<span class="material-symbols-outlined">home</span>
<span class="text-[10px] font-medium">الرئيسية</span>
</a>
</li>
<li>
<a class="flex flex-col items-center gap-1 text-gray-400 hover:text-primary transition-colors" href="#">
<span class="material-symbols-outlined">favorite</span>
<span class="text-[10px] font-medium">المفضلة</span>
</a>
</li>
<li>
<a class="flex flex-col items-center gap-1 text-gray-400 hover:text-primary transition-colors" href="#">
<span class="material-symbols-outlined">search</span>
<span class="text-[10px] font-medium">بحث</span>
</a>
</li>
<li>
<a class="flex flex-col items-center gap-1 text-primary" href="#">
<span class="material-symbols-outlined fill-current">person</span>
<span class="text-[10px] font-bold">حسابي</span>
</a>
</li>
</ul>
</nav>
</div>

</body></html>

<!-- ==================== الواجهة 4: تخصيص الحساسية - اسأل سبا ==================== -->
<!DOCTYPE html>
<html class="light" dir="rtl" lang="ar"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>تخصيص الحساسية - اسأل سبا</title>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=Noto+Sans+Arabic:wght@400;500;600;700&family=Manrope:wght@400;500;600;700&display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=Noto+Sans+Arabic:wght@400;500;600;700&family=Manrope:wght@400;500;600;700&display=swap" rel="stylesheet"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=Noto+Sans+Arabic:wght@400;500;600;700&family=Manrope:wght@400;500;600;700&display=swap" rel="stylesheet"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#c0841a",
                        "background-light": "#F2F0EB","background-dark": "#5B4233",
                        "surface-light": "#ffffff",
                        "surface-dark": "#2d261a",
                        "text-main": "#1b160e",
                        "text-muted": "#967c4f",
                    },
                    fontFamily: {
                        "display": ["Noto Sans Arabic", "Manrope", "sans-serif"],
                        "sans": ["Noto Sans Arabic", "Manrope", "sans-serif"],
                    },
                    borderRadius: {"DEFAULT": "1rem", "lg": "2rem", "xl": "3rem", "full": "9999px"},
                },
            },
        }
    </script>
<style>
        body {
            font-family: 'Manrope', 'Noto Sans Arabic', sans-serif;
            -webkit-font-smoothing: antialiased;
        }.no-scrollbar::-webkit-scrollbar {
            display: none;
        }
        .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
    </style>
<style>
        body {
          min-height: max(884px, 100dvh);
        }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  
    <style>
        :root {
            --cream-bg: #F2F0EB;
            --brown-text: #5B4233;
            --pink-light: #EEDDD8;
            --brown-medium: #A88B78;
            --gray-brown: #AFA393;
            --beige-light: #EBE1DD;
            --gradient-start: #2f6f73;
            --gradient-end: #c0841a;
            --safe-green: #10B981;
            --warning-orange: #F59E0B;
            --danger-red: #EF4444;
        }
    </style>
</head>
<body class="bg-background-light dark:bg-background-dark text-text-main dark:text-white relative min-h-screen pb-32 overflow-x-hidden">
<nav class="sticky top-0 z-50 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md px-4 py-3 flex items-center justify-between shadow-sm border-b border-primary/10 dark:border-primary/5">
<button class="flex items-center justify-center p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors text-text-main dark:text-white">
<span class="material-symbols-outlined text-[24px]">arrow_forward</span>
</button>
<h2 class="text-lg font-bold text-text-main dark:text-white tracking-tight">تخصيص الحساسية</h2>
<button class="text-sm font-semibold text-primary">تخطي</button>
</nav>
<div class="flex w-full flex-row items-center justify-center gap-2 py-6">
<div class="h-1.5 w-8 rounded-full bg-primary/30"></div>
<div class="h-1.5 w-8 rounded-full bg-primary/30"></div>
<div class="h-1.5 w-8 rounded-full bg-primary"></div>
</div>
<main class="px-5 w-full max-w-md mx-auto flex flex-col gap-6">
<div class="text-center space-y-2">
<h1 class="text-3xl font-bold text-text-main dark:text-white leading-tight">هل هناك مكونات محددة تزعجك؟</h1>
<p class="text-text-muted dark:text-gray-400 text-base leading-relaxed px-4">
                أضف المكونات التي تود تجنبها تماماً في توصياتنا العطرية لضمان تجربة آمنة.
            </p>
</div>
<div class="relative group">
<div class="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
<span class="material-symbols-outlined text-text-muted text-[22px]">search</span>
</div>
<input class="block w-full pr-11 pl-4 py-4 rounded-full bg-white dark:bg-surface-dark border-none shadow-[0_4px_20px_-4px_rgba(193,132,26,0.1)] focus:ring-2 focus:ring-primary/50 text-text-main dark:text-white placeholder:text-text-muted/60 text-lg transition-all" placeholder="ابحث عن مكون (مثلاً: المسك)" type="text"/>
</div>
<div class="flex flex-col gap-3">
<h3 class="text-sm font-semibold text-text-muted uppercase tracking-wider px-1">المكونات المختارة (2)</h3>
<div class="flex flex-wrap gap-3">
<div class="group flex items-center justify-between gap-3 bg-white dark:bg-surface-dark border border-primary/20 p-2 pr-2 pl-3 rounded-full shadow-sm hover:border-primary/50 transition-all cursor-pointer w-full">
<div class="flex items-center gap-3">
<div class="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center overflow-hidden shrink-0">
<span class="text-xl">🌸</span>
</div>
<div class="flex flex-col">
<span class="text-base font-bold text-text-main dark:text-white">الياسمين</span>
<span class="text-xs text-red-500 font-medium">يسبب: صداع نصفي</span>
</div>
</div>
<button class="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 dark:bg-white/10 text-gray-500 hover:bg-red-50 hover:text-red-600 transition-colors">
<span class="material-symbols-outlined text-[18px]">close</span>
</button>
</div>
<div class="group flex items-center justify-between gap-3 bg-white dark:bg-surface-dark border border-primary/20 p-2 pr-2 pl-3 rounded-full shadow-sm hover:border-primary/50 transition-all cursor-pointer w-full">
<div class="flex items-center gap-3">
<div class="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center overflow-hidden shrink-0">
<div class="w-full h-full bg-cover bg-center" data-alt="Wood texture representing Oud" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCWpFwDbkECKd3c37Ljiiz1zXzQiC3gkWIC0b_2HZDZji-vIBT9eR3OgDEQz7IEPievPGY3S4fA661L7wp4O39qO3-MkqItgLz7YhGPPaYD8OqRVec2NZXrkNaRHK0Lq7JZRTQ3jT5aLmgh2xRtuDo4MezAnlH0VxqPXNyI84MY8m_TspKCCDMmEkvt6FREa5O-fbhzsd2eQeip5zCVE2xPuKJeW06sYnB7K-IXBofnh0M2oOMW4liz9xxxjN_V5o4jSe-BO385EfZh');"></div>
</div>
<div class="flex flex-col">
<span class="text-base font-bold text-text-main dark:text-white">العود الكمبودي</span>
<span class="text-xs text-primary font-medium">إضافة ملاحظة...</span>
</div>
</div>
<button class="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 dark:bg-white/10 text-gray-500 hover:bg-red-50 hover:text-red-600 transition-colors">
<span class="material-symbols-outlined text-[18px]">close</span>
</button>
</div>
</div>
</div>
<div class="pt-2">
<h3 class="text-sm font-semibold text-text-muted uppercase tracking-wider px-1 mb-3">مسببات حساسية شائعة</h3>
<div class="flex flex-wrap gap-2">
<button class="flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-surface-dark border border-transparent hover:border-primary/30 shadow-sm transition-all text-text-main dark:text-white text-sm">
<span class="text-lg">🌿</span> الباتشولي
                    <span class="material-symbols-outlined text-[16px] text-primary">add</span>
</button>
<button class="flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-surface-dark border border-transparent hover:border-primary/30 shadow-sm transition-all text-text-main dark:text-white text-sm">
<span class="text-lg">🍦</span> الفانيليا
                    <span class="material-symbols-outlined text-[16px] text-primary">add</span>
</button>
<button class="flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-surface-dark border border-transparent hover:border-primary/30 shadow-sm transition-all text-text-main dark:text-white text-sm">
<span class="text-lg">🍊</span> البرغموت
                    <span class="material-symbols-outlined text-[16px] text-primary">add</span>
</button>
<button class="flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-surface-dark border border-transparent hover:border-primary/30 shadow-sm transition-all text-text-main dark:text-white text-sm">
<span class="text-lg">🌹</span> الورد الدمشقي
                    <span class="material-symbols-outlined text-[16px] text-primary">add</span>
</button>
</div>
</div>
</main>
<div class="fixed bottom-[88px] left-0 right-0 px-5 z-20 pointer-events-none">
<div class="max-w-md mx-auto pointer-events-auto">
<button class="w-full bg-primary hover:bg-primary/90 text-white font-bold text-lg py-4 rounded-full shadow-[0_10px_30px_-5px_rgba(193,132,26,0.4)] flex items-center justify-center gap-3 transition-transform active:scale-[0.98]">
<span>إتمام وحفظ</span>
<span class="material-symbols-outlined text-[24px] rtl:rotate-180">arrow_back</span>
</button>
</div>
</div>
<div class="fixed bottom-0 w-full z-40 bg-white/95 dark:bg-[#1a150d]/95 backdrop-blur-xl border-t border-primary/10 pb-5 pt-3">
<div class="flex justify-around items-center px-2">
<button class="flex flex-col items-center gap-1 p-2 text-text-muted hover:text-primary transition-colors">
<span class="material-symbols-outlined text-[26px]">home</span>
<span class="text-[10px] font-medium">الرئيسية</span>
</button>
<button class="flex flex-col items-center gap-1 p-2 text-text-muted hover:text-primary transition-colors">
<span class="material-symbols-outlined text-[26px]">favorite</span>
<span class="text-[10px] font-medium">المفضلة</span>
</button>
<button class="flex flex-col items-center gap-1 p-2 text-text-muted hover:text-primary transition-colors">
<span class="material-symbols-outlined text-[26px]">search</span>
<span class="text-[10px] font-medium">بحث</span>
</button>
<button class="flex flex-col items-center gap-1 p-2 text-primary font-semibold transition-colors">
<div class="relative">
<span class="material-symbols-outlined text-[26px] fill-1">person</span>
<div class="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white dark:border-background-dark"></div>
</div>
<span class="text-[10px]">حسابي</span>
</button>
</div>
</div>

</body></html>

<!-- ==================== الواجهة 5: Ask Seba - Loading ==================== -->
<!DOCTYPE html>
<html dir="rtl" lang="ar"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Ask Seba - Loading</title>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=Noto+Sans+Arabic:wght@400;500;600;700&family=Manrope:wght@400;500;600;700&display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=Noto+Sans+Arabic:wght@400;500;600;700&family=Manrope:wght@400;500;600;700&display=swap" rel="stylesheet"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#c0841a",
                        "background-light": "#F2F0EB",
                        "background-dark": "#5B4233",
                    },
                    fontFamily: {
                        "display": ["Noto Sans Arabic", "Manrope", "sans-serif"],
                        "arabic": ["Noto Sans Arabic", "sans-serif"]
                    },
                    borderRadius: {"DEFAULT": "1rem", "lg": "2rem", "xl": "3rem", "full": "9999px"},
                    animation: {
                        'ping-slow': 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite',
                        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                    }
                },
            },
        }
    </script>
<style>body {
            font-family: 'Noto Sans Arabic', 'Manrope', sans-serif;
        }
    </style>
<style>
        body {
            min-height: max(884px, 100dvh);
        }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  
    <style>
        :root {
            --cream-bg: #F2F0EB;
            --brown-text: #5B4233;
            --pink-light: #EEDDD8;
            --brown-medium: #A88B78;
            --gray-brown: #AFA393;
            --beige-light: #EBE1DD;
            --gradient-start: #2f6f73;
            --gradient-end: #c0841a;
            --safe-green: #10B981;
            --warning-orange: #F59E0B;
            --danger-red: #EF4444;
        }
    </style>
</head>
<body class="bg-background-light text-slate-900">
<div class="relative flex h-full min-h-screen w-full flex-col bg-background-light overflow-x-hidden transition-colors duration-300">
<header class="flex items-center justify-between p-6">
<button class="flex size-10 items-center justify-center rounded-full bg-black/5 text-slate-900 transition-colors hover:bg-black/10">
<span class="material-symbols-outlined text-[24px]">arrow_forward</span>
</button>
<div class="flex items-center gap-2 opacity-80">
<span class="material-symbols-outlined text-primary text-[20px]">diamond</span>
<span class="text-sm font-bold tracking-widest uppercase text-slate-900 font-display">Ask Seba</span>
</div>
<div class="size-10"></div> 
</header>
<main class="flex flex-1 flex-col items-center justify-center px-6 pb-20">
<div class="relative flex items-center justify-center mb-12 py-10">
<div class="absolute h-64 w-64 animate-pulse rounded-full bg-primary/5 blur-3xl"></div>
<div class="absolute h-32 w-32 animate-ping rounded-full bg-primary/20 duration-[3000ms]"></div>
<div class="absolute h-24 w-24 animate-pulse rounded-full bg-primary/40"></div>
<div class="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-tr from-primary to-[#f3b956] shadow-[0_0_40px_rgba(236,156,19,0.4)] ring-4 ring-white/40">
<span class="material-symbols-outlined text-white animate-spin text-[28px]" style="animation-duration: 3s;">fragrance</span>
</div>
</div>
<div class="flex flex-col items-center gap-4 text-center max-w-md mx-auto">
<h2 class="text-2xl md:text-3xl font-bold leading-tight text-slate-900 font-arabic">
                    جاري البحث عن عطرك المثالي...
                </h2>
<p class="text-base text-slate-600 font-medium font-arabic leading-relaxed">
                    نقوم بتحليل تفضيلاتك العطرية لاختيار النوتات<br class="hidden sm:block"/> التي تناسب ذوقك الفريد
                </p>
</div>
<div class="mt-12 w-full max-w-[160px] opacity-60">
<div class="h-1 w-full rounded-full bg-slate-900/10 overflow-hidden">
<div class="h-full w-1/2 rounded-full bg-primary animate-[shimmer_2s_infinite] translate-x-[-100%]"></div>
</div>
<div class="h-1 w-full rounded-full bg-slate-900/10 mt-1 relative overflow-hidden hidden">
<div class="absolute top-0 bottom-0 right-0 w-1/3 bg-primary rounded-full animate-bounce"></div>
</div>
</div>
</main>
<footer class="absolute bottom-6 w-full text-center">
<p class="text-xs text-slate-400 font-display tracking-widest uppercase">Powered by AI Scent Technology</p>
</footer>
</div>
<style>
        @keyframes shimmer-rtl {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-150%); }
        }
        .animate-shimmer-rtl {
            animation: shimmer-rtl 2s infinite linear;
        }
    </style>
<script>
        document.querySelector('.w-1\\/2').classList.remove('translate-x-[-100%]');
        document.querySelector('.w-1\\/2').style.animation = 'shimmer-rtl 2s infinite ease-in-out';
    </script>

</body></html>

<!-- ==================== الواجهة 6: Ask Seba - Loading Analysis ==================== -->
<!DOCTYPE html>
<html dir="rtl" lang="ar"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Ask Seba - Loading Analysis</title>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=Noto+Sans+Arabic:wght@400;500;600;700&family=Manrope:wght@400;500;600;700&display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=Noto+Sans+Arabic:wght@400;500;600;700&family=Manrope:wght@400;500;600;700&display=swap" rel="stylesheet"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=Noto+Sans+Arabic:wght@400;500;600;700&family=Manrope:wght@400;500;600;700&display=swap" rel="stylesheet"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#c0841a",
                        "background-light": "#F2F0EB",
                        "background-dark": "#5B4233",
                    },
                    fontFamily: {
                        "display": ["Noto Sans Arabic", "Manrope", "sans-serif"],
                        "sans": ["Noto Sans Arabic", "Manrope", "sans-serif"],
                    },
                    borderRadius: {"DEFAULT": "1rem", "lg": "2rem", "xl": "3rem", "full": "9999px"},
                },
            },
        }
    </script>
<style>body {
            font-family: 'Manrope', 'Noto Sans Arabic', sans-serif;
        }
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 48;
        }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  
    <style>
        :root {
            --cream-bg: #F2F0EB;
            --brown-text: #5B4233;
            --pink-light: #EEDDD8;
            --brown-medium: #A88B78;
            --gray-brown: #AFA393;
            --beige-light: #EBE1DD;
            --gradient-start: #2f6f73;
            --gradient-end: #c0841a;
            --safe-green: #10B981;
            --warning-orange: #F59E0B;
            --danger-red: #EF4444;
        }
    </style>
</head>
<body class="bg-background-light text-[#5B4233] min-h-screen flex flex-col items-center justify-center overflow-hidden relative">
<div class="absolute inset-0 overflow-hidden pointer-events-none">
<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl opacity-50"></div>
</div>
<div class="relative z-10 flex flex-col items-center justify-center w-full max-w-md px-6 py-12 gap-10">
<div class="relative flex items-center justify-center py-8">
<div class="absolute w-[320px] h-[320px] rounded-full border border-primary/10 bg-primary/[0.02]"></div>
<div class="absolute w-[240px] h-[240px] rounded-full border border-primary/20 bg-primary/[0.05]"></div>
<div class="absolute w-[180px] h-[180px] rounded-full border border-primary/30 bg-primary/10 shadow-[0_0_30px_rgba(236,156,19,0.1)]"></div>
<div class="absolute w-[120px] h-[120px] rounded-full border border-primary/50 bg-primary/20 shadow-[0_0_20px_rgba(236,156,19,0.2)]"></div>
<div class="relative z-20 w-20 h-20 rounded-full bg-primary flex items-center justify-center shadow-[0_0_25px_rgba(236,156,19,0.5)]">
<div class="absolute inset-0 rounded-full border border-white/20"></div>
<span class="material-symbols-outlined text-white text-4xl">fragrance</span>
</div>
</div>
<div class="flex flex-col items-center text-center space-y-4 w-full">
<h2 class="text-[#5B4233] text-[28px] font-bold leading-tight tracking-tight">
                جاري تحليل ذوقك العطري...
            </h2>
<p class="text-[#5B4233]/70 text-base font-normal leading-relaxed max-w-[280px]">
                نبحث عن العطر المثالي لك بناءً على تفضيلاتك الشخصية
            </p>
</div>
<div class="w-full max-w-[180px] flex flex-col gap-3 mt-4">
<div class="h-1 w-full bg-[#5B4233]/10 rounded-full overflow-hidden">
<div class="h-full bg-primary rounded-full w-[45%] shadow-[0_0_10px_rgba(236,156,19,0.8)]"></div>
</div>
<div class="text-center text-primary/90 text-xs font-medium tracking-widest dir-ltr">
                MATCHING...
            </div>
</div>
</div>

</body></html>

<!-- ==================== الواجهة 7: Ask Seba - تفاصيل العطر ==================== -->
<!DOCTYPE html>
<html dir="rtl" lang="ar"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" name="viewport"/>
<title>Ask Seba - تفاصيل العطر</title>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=Noto+Sans+Arabic:wght@400;500;600;700&family=Manrope:wght@400;500;600;700&display=swap" rel="stylesheet"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=Noto+Sans+Arabic:wght@400;500;600;700&family=Manrope:wght@400;500;600;700&display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=Noto+Sans+Arabic:wght@400;500;600;700&family=Manrope:wght@400;500;600;700&display=swap" rel="stylesheet"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,typography"></script>
<script>
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        primary: "#5B4233", 
                        "background-light": "#F2F0EB", 
                        "background-dark": "#1C1917",
                        "match-green": "#2E7D32",
                        secondary: "#D4C4B7",
                        accent: "#c0841a",
                    },
                    fontFamily: {
                        display: ["Playfair Display", "serif"],
                        arabic: ["Tajawal", "sans-serif"],
                    },
                },
            },
        };
    </script>
<style>::-webkit-scrollbar {
            width: 0px;
            background: transparent;
        }
        .safe-bottom {
            padding-bottom: env(safe-area-inset-bottom);
        }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  
    <style>
        :root {
            --cream-bg: #F2F0EB;
            --brown-text: #5B4233;
            --pink-light: #EEDDD8;
            --brown-medium: #A88B78;
            --gray-brown: #AFA393;
            --beige-light: #EBE1DD;
            --gradient-start: #2f6f73;
            --gradient-end: #c0841a;
            --safe-green: #10B981;
            --warning-orange: #F59E0B;
            --danger-red: #EF4444;
        }
    </style>
</head>
<body class="bg-[#e5e5e5] text-primary font-arabic min-h-screen flex justify-center">
<main class="w-full max-w-md bg-background-light min-h-screen relative shadow-2xl overflow-hidden flex flex-col">
<div class="relative h-[440px] w-full bg-[#EBE9E1] rounded-b-[40px] overflow-hidden shrink-0">
<div class="absolute top-0 left-0 right-0 p-6 z-30 flex justify-between items-center">
<button class="w-10 h-10 rounded-full bg-white/40 backdrop-blur-md flex items-center justify-center text-primary/80 hover:bg-white/60 transition">
<span class="material-symbols-outlined">arrow_forward</span>
</button>
<h1 class="font-display italic text-2xl font-bold tracking-wide text-primary">ask.seba</h1>
<button class="w-10 h-10 rounded-full bg-white/40 backdrop-blur-md flex items-center justify-center text-primary/80 hover:bg-white/60 transition">
<span class="material-symbols-outlined">share</span>
</button>
</div>
<div class="absolute inset-0 opacity-40 pointer-events-none">
<div class="absolute -top-20 -left-20 w-[400px] h-[400px] bg-[#D4C4B7] rounded-full blur-[80px] mix-blend-multiply"></div>
<div class="absolute bottom-0 -right-10 w-[300px] h-[300px] bg-[#c0841a]/20 rounded-full blur-[60px] mix-blend-multiply"></div>
</div>
<div class="absolute inset-0 flex items-end justify-center pb-8 z-10">
<div class="relative w-[240px] h-[340px] group">
<div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-black/20 blur-xl rounded-full"></div>
<img alt="Perfume Bottle" class="w-full h-full object-contain drop-shadow-2xl transform transition-transform duration-700 will-change-transform" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtEWjDasezpicAKI8gRb0AXOfibP0HZej2IPx5b2OWZ4SRTchFuPv_hu_ACZJFtTlabAhZYoGC-fC8kWCfgHCpEkIKZYlYZiRWmSnFfvCtUCex3thtqvWieqBcSmjIZvxtrlKreFm1YlQkVFnhy-0J96q3Ynx8Hu5xjsSKpsZU8mnZR-KQ9vrm_tF6rul0QFN8zl4wDbHePE3pvzqheAa8bAbPT1bdcmj8JDFYgupv6WgahZ3XBJqKy4MwOi-NA9T-Q5xvHcehyhXa"/>
</div>
</div>
<div class="absolute bottom-6 left-6 z-20 flex flex-col items-center bg-white/80 backdrop-blur-lg p-2 rounded-2xl shadow-lg border border-white/50">
<div class="relative w-12 h-12 mb-1">
<svg class="w-full h-full -rotate-90">
<circle cx="24" cy="24" fill="none" r="20" stroke="#E5E7EB" stroke-width="3"></circle>
<circle cx="24" cy="24" fill="none" r="20" stroke="#2E7D32" stroke-dasharray="125" stroke-dashoffset="16" stroke-linecap="round" stroke-width="3"></circle>
</svg>
<div class="absolute inset-0 flex items-center justify-center">
<span class="text-xs font-bold font-display" dir="ltr">87%</span>
</div>
</div>
<span class="text-[10px] font-bold text-match-green bg-green-100 px-2 py-0.5 rounded-full flex items-center gap-1">
<span class="w-1.5 h-1.5 bg-match-green rounded-full animate-pulse"></span>
                    آمن
                </span>
</div>
</div>
<div class="flex-1 px-6 pt-6 pb-32">
<div class="flex flex-col items-start mb-8">
<div class="flex items-center justify-between w-full mb-2">
<span class="font-display italic text-primary/50 text-sm font-semibold tracking-wider">Le Soir</span>
<span class="inline-block px-3 py-1 bg-primary/5 text-primary/80 text-xs font-bold rounded-full border border-primary/5">للجنسين</span>
</div>
<h2 class="font-display text-3xl font-bold text-primary mb-3 leading-tight">عود ملكي فاخر</h2>
<p class="text-primary/60 text-sm leading-relaxed">
                    توليفة ساحرة تجمع بين الدفء الشرقي والانتعاش الحمضي، مصممة لتناسب الأوقات الخاصة والمناسبات الراقية.
                </p>
</div>
<div class="mb-6">
<h3 class="font-bold text-primary text-lg mb-6 flex items-center gap-2">
<span class="material-symbols-outlined text-accent">timelapse</span>
                    التدرج العطري
                </h3>
<div class="relative border-r-2 border-primary/10 pr-6 mr-2 space-y-8">
<div class="relative">
<div class="absolute -right-[31px] top-1 w-4 h-4 bg-[#F3F2EA] border-[3px] border-primary rounded-full z-10 shadow-sm"></div>
<div class="flex items-center justify-between mb-1">
<h4 class="text-base font-bold text-primary">الافتتاحية</h4>
<span class="text-xs font-bold text-green-700 bg-green-50 px-1.5 py-0.5 rounded border border-green-100">92%</span>
</div>
<p class="text-sm text-primary/70">برغموت صقلي، هيل أخضر، فلفل وردي</p>
</div>
<div class="relative">
<div class="absolute -right-[31px] top-1 w-4 h-4 bg-[#F3F2EA] border-[3px] border-accent rounded-full z-10 shadow-sm"></div>
<div class="flex items-center justify-between mb-1">
<h4 class="text-base font-bold text-primary">القلب</h4>
<span class="text-xs font-bold text-accent bg-yellow-50 px-1.5 py-0.5 rounded border border-yellow-100">78%</span>
</div>
<p class="text-sm text-primary/70">ياسمين سامباك، ورد طائفي، قرفة</p>
</div>
<div class="relative">
<div class="absolute -right-[31px] top-1 w-4 h-4 bg-[#F3F2EA] border-[3px] border-primary/60 rounded-full z-10 shadow-sm"></div>
<div class="flex items-center justify-between mb-1">
<h4 class="text-base font-bold text-primary">القاعدة</h4>
<span class="text-xs font-bold text-green-700 bg-green-50 px-1.5 py-0.5 rounded border border-green-100">88%</span>
</div>
<p class="text-sm text-primary/70">عنبر، مسك أبيض، خشب الصندل، فانيليا</p>
</div>
</div>
</div>
</div>
<div class="fixed bottom-0 w-full max-w-md bg-white/80 backdrop-blur-xl border-t border-white/50 p-4 pb-8 z-40 shadow-[0_-10px_40px_rgba(0,0,0,0.05)] safe-bottom">
<div class="flex items-stretch gap-3">
<button class="flex-[2] bg-primary text-white py-3.5 rounded-2xl flex items-center justify-center gap-2 hover:bg-[#3d2e22] active:scale-95 transition-all shadow-xl shadow-primary/20">
<span class="material-symbols-outlined text-[20px]">shopping_cart</span>
<span class="font-bold text-sm">شراء - 450 ر.س</span>
</button>
<button class="flex-1 bg-white border border-primary/20 text-primary py-3.5 rounded-2xl flex items-center justify-center gap-1.5 hover:bg-primary/5 active:scale-95 transition-all font-bold text-sm">
<span class="material-symbols-outlined text-[20px]">inventory_2</span>
<span>عينة</span>
</button>
<button class="w-[52px] bg-white border border-primary/20 text-primary rounded-2xl flex items-center justify-center hover:text-red-500 hover:bg-red-50 active:scale-95 transition-all">
<span class="material-symbols-outlined">favorite_border</span>
</button>
</div>
</div>
</main>

</body></html>

<!-- ==================== الواجهة 8: تقرير الذوق الشخصي - Ask Seba ==================== -->
<!DOCTYPE html>
<html dir="rtl" lang="ar"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>تقرير الذوق الشخصي - Ask Seba</title>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=Noto+Sans+Arabic:wght@400;500;600;700&family=Manrope:wght@400;500;600;700&display=swap" rel="stylesheet"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=Noto+Sans+Arabic:wght@400;500;600;700&family=Manrope:wght@400;500;600;700&display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=Noto+Sans+Arabic:wght@400;500;600;700&family=Manrope:wght@400;500;600;700&display=swap" rel="stylesheet"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#c0841a",
                        "background-light": "#F2F0EB",
                        "background-dark": "#5B4233",
                        "surface-dark": "#332a19",
                        "surface-dark-lighter": "#483a23",
                    },
                    fontFamily: {
                        "display": ["Noto Sans Arabic", "Manrope", "sans-serif"]
                    },
                    borderRadius: { "DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "2xl": "1rem", "full": "9999px" },
                },
            },
        }
    </script>
<style>.no-scrollbar::-webkit-scrollbar {
            display: none;
        }
        .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  
    <style>
        :root {
            --cream-bg: #F2F0EB;
            --brown-text: #5B4233;
            --pink-light: #EEDDD8;
            --brown-medium: #A88B78;
            --gray-brown: #AFA393;
            --beige-light: #EBE1DD;
            --gradient-start: #2f6f73;
            --gradient-end: #c0841a;
            --safe-green: #10B981;
            --warning-orange: #F59E0B;
            --danger-red: #EF4444;
        }
    </style>
</head>
<body class="bg-background-light text-slate-800 font-display min-h-screen pb-24 overflow-x-hidden selection:bg-primary selection:text-white">
<header class="sticky top-0 z-40 bg-background-light/90 backdrop-blur-md border-b border-gray-200 px-4 py-4 flex items-center justify-between transition-colors duration-300">
<button class="flex items-center justify-center w-10 h-10 rounded-full active:bg-gray-200 transition-colors text-slate-800">
<span class="material-symbols-outlined text-2xl rotate-180">arrow_back</span>
</button>
<h1 class="text-lg font-bold text-center flex-1 text-slate-900">تقرير الذوق الشخصي</h1>
<div class="w-10"></div> 
</header>
<main class="flex flex-col gap-6 p-4">
<section class="relative w-full aspect-square max-h-[400px] mx-auto bg-white rounded-2xl p-4 shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col items-center justify-center overflow-hidden">
<div class="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none"></div>
<h2 class="text-sm text-primary font-medium mb-2 tracking-wide uppercase opacity-80">تحليل العائلة العطرية</h2>
<div class="relative w-full h-full max-w-[320px] max-h-[320px] flex items-center justify-center p-6">
<svg class="w-full h-full overflow-visible" viewBox="0 0 100 100">
<g class="stroke-slate-200 fill-none" stroke-width="0.5">
<polygon points="50,5 90,27.5 90,72.5 50,95 10,72.5 10,27.5"></polygon>
<polygon points="50,27.5 70,38.75 70,61.25 50,72.5 30,61.25 30,38.75"></polygon>
<polygon points="50,38.75 60,44.375 60,55.625 50,61.25 40,55.625 40,44.375"></polygon>
<line x1="50" x2="50" y1="50" y2="5"></line>
<line x1="50" x2="90" y1="50" y2="27.5"></line>
<line x1="50" x2="90" y1="50" y2="72.5"></line>
<line x1="50" x2="50" y1="50" y2="95"></line>
<line x1="50" x2="10" y1="50" y2="72.5"></line>
<line x1="50" x2="10" y1="50" y2="27.5"></line>
</g>
<polygon class="stroke-primary fill-primary/20 filter drop-shadow-[0_0_8px_rgba(236,156,19,0.3)]" points="50,9.5 82,32 74,72.5 40,86 18,65.75 30,38.75" stroke-linejoin="round" stroke-width="1.5"></polygon>
<circle class="fill-white stroke-primary" cx="50" cy="9.5" r="2" stroke-width="1"></circle>
<circle class="fill-white stroke-primary" cx="82" cy="32" r="2" stroke-width="1"></circle>
<circle class="fill-white stroke-primary" cx="74" cy="72.5" r="2" stroke-width="1"></circle>
<circle class="fill-white stroke-primary" cx="40" cy="86" r="2" stroke-width="1"></circle>
<circle class="fill-white stroke-primary" cx="18" cy="65.75" r="2" stroke-width="1"></circle>
<circle class="fill-white stroke-primary" cx="30" cy="38.75" r="2" stroke-width="1"></circle>
</svg>
<span class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1 text-xs font-bold text-white bg-slate-800 px-2 py-0.5 rounded-full shadow-sm">خشبي</span>
<span class="absolute top-[25%] right-0 translate-x-1 text-xs font-medium text-slate-500">شرقي</span>
<span class="absolute bottom-[25%] right-0 translate-x-1 text-xs font-medium text-slate-500">زهري</span>
<span class="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1 text-xs font-medium text-slate-500">حمضيات</span>
<span class="absolute bottom-[25%] left-0 -translate-x-1 text-xs font-medium text-slate-500">حار</span>
<span class="absolute top-[25%] left-0 -translate-x-1 text-xs font-medium text-slate-500">سويتي</span>
</div>
</section>
<section>
<div class="flex items-center gap-2 mb-4 px-1">
<span class="text-xl">🏆</span>
<h2 class="text-xl font-bold text-slate-900 tracking-tight">النوتات المفضلة</h2>
</div>
<div class="flex flex-col gap-3">
<div class="bg-white rounded-xl p-4 flex items-center justify-between shadow-sm border border-gray-100 relative overflow-hidden group">
<div class="absolute left-0 top-0 bottom-0 bg-primary/10 w-[85%] transition-all duration-1000 group-hover:bg-primary/15 rounded-r-xl"></div>
<div class="relative z-10 flex items-center gap-3">
<div class="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-primary/20 text-primary shadow-sm">
<span class="material-symbols-outlined text-[20px]">local_fire_department</span>
</div>
<div>
<p class="font-bold text-slate-900 text-lg leading-tight">عود</p>
<p class="text-xs text-primary/90 font-medium mt-0.5">العائلة الخشبية</p>
</div>
</div>
<span class="relative z-10 text-2xl font-bold text-slate-900 tracking-tight">85%</span>
</div>
<div class="bg-white rounded-xl p-4 flex items-center justify-between shadow-sm border border-gray-100 relative overflow-hidden group">
<div class="absolute left-0 top-0 bottom-0 bg-primary/10 w-[70%] transition-all duration-1000 group-hover:bg-primary/15 rounded-r-xl"></div>
<div class="relative z-10 flex items-center gap-3">
<div class="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-primary/20 text-primary shadow-sm">
<span class="material-symbols-outlined text-[20px]">diamond</span>
</div>
<div>
<p class="font-bold text-slate-900 text-lg leading-tight">عنبر</p>
<p class="text-xs text-primary/90 font-medium mt-0.5">العائلة الشرقية</p>
</div>
</div>
<span class="relative z-10 text-2xl font-bold text-slate-900 tracking-tight">70%</span>
</div>
<div class="bg-white rounded-xl p-4 flex items-center justify-between shadow-sm border border-gray-100 relative overflow-hidden group">
<div class="absolute left-0 top-0 bottom-0 bg-primary/10 w-[60%] transition-all duration-1000 group-hover:bg-primary/15 rounded-r-xl"></div>
<div class="relative z-10 flex items-center gap-3">
<div class="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-primary/20 text-primary shadow-sm">
<span class="material-symbols-outlined text-[20px]">grass</span>
</div>
<div>
<p class="font-bold text-slate-900 text-lg leading-tight">باتشولي</p>
<p class="text-xs text-primary/90 font-medium mt-0.5">العائلة العشبية</p>
</div>
</div>
<span class="relative z-10 text-2xl font-bold text-slate-900 tracking-tight">60%</span>
</div>
</div>
</section>
<section class="mt-2">
<div class="flex items-center gap-2 mb-4 px-1">
<span class="text-xl">⚠️</span>
<h2 class="text-xl font-bold text-slate-900 tracking-tight">تجنّب</h2>
</div>
<div class="grid grid-cols-2 gap-4">
<div class="bg-red-50 border border-red-200 rounded-xl p-4 flex flex-col gap-2">
<div class="flex items-center gap-2 text-red-500">
<span class="material-symbols-outlined text-xl">block</span>
<span class="text-xs font-bold uppercase tracking-wider">حساسية</span>
</div>
<p class="text-slate-900 font-bold text-lg">الياسمين</p>
</div>
<div class="bg-white border border-gray-200 rounded-xl p-4 flex flex-col gap-2 shadow-sm">
<div class="flex items-center gap-2 text-slate-400">
<span class="material-symbols-outlined text-xl">thumb_down</span>
<span class="text-xs font-bold uppercase tracking-wider">غير مفضل</span>
</div>
<p class="text-slate-900 font-bold text-lg">الجلود</p>
</div>
</div>
</section>
<section class="flex flex-col gap-3 mt-4 pt-4 border-t border-gray-200">
<div class="flex gap-3">
<button class="flex-1 bg-white hover:bg-gray-50 border border-gray-200 text-slate-900 font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-sm">
<span class="material-symbols-outlined">share</span>
                    شارك
                </button>
<button class="flex-[2] bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 shadow-[0_4px_14px_rgba(236,156,19,0.3)] transition-all">
<span class="material-symbols-outlined">refresh</span>
                    إعادة الاختبار
                </button>
</div>
</section>
</main>
<nav class="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-lg border-t border-gray-200 pb-safe z-50">
<div class="flex justify-around items-center h-16 max-w-lg mx-auto px-2">
<a class="flex flex-col items-center justify-center w-full h-full text-slate-400 hover:text-primary transition-colors gap-1 group" href="#">
<span class="material-symbols-outlined text-[24px] group-hover:-translate-y-0.5 transition-transform">home</span>
<span class="text-[10px] font-medium">الرئيسية</span>
</a>
<a class="flex flex-col items-center justify-center w-full h-full text-slate-400 hover:text-primary transition-colors gap-1 group" href="#">
<span class="material-symbols-outlined text-[24px] group-hover:-translate-y-0.5 transition-transform">search</span>
<span class="text-[10px] font-medium">بحث</span>
</a>
<a class="flex flex-col items-center justify-center w-full h-full text-slate-400 hover:text-primary transition-colors gap-1 group" href="#">
<span class="material-symbols-outlined text-[24px] group-hover:-translate-y-0.5 transition-transform">favorite</span>
<span class="text-[10px] font-medium">المفضلة</span>
</a>
<a class="flex flex-col items-center justify-center w-full h-full text-primary gap-1 relative" href="#">
<div class="absolute -top-3 w-8 h-1 bg-primary rounded-b-full shadow-[0_0_10px_rgba(236,156,19,0.6)]"></div>
<span class="material-symbols-outlined text-[24px] fill-current">person</span>
<span class="text-[10px] font-bold">ملفي</span>
</a>
</div>
</nav>
<style>
        .pb-safe {
            padding-bottom: env(safe-area-inset-bottom, 20px);
        }
    </style>

</body></html>

<!-- ==================== الواجهة 9: لوحة التحكم - Ask Seba ==================== -->
<!DOCTYPE html>
<html dir="rtl" lang="ar"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>لوحة التحكم - Ask Seba</title>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=Noto+Sans+Arabic:wght@400;500;600;700&family=Manrope:wght@400;500;600;700&display=swap" rel="stylesheet"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=Noto+Sans+Arabic:wght@400;500;600;700&family=Manrope:wght@400;500;600;700&display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=Noto+Sans+Arabic:wght@400;500;600;700&family=Manrope:wght@400;500;600;700&display=swap" rel="stylesheet"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#c0841a",
                        "background-light": "#F2F0EB",
                        "background-dark": "#5B4233",
                        "surface-dark": "#332a19",
                        "surface-dark-lighter": "#483a23",
                    },
                    fontFamily: {
                        "display": ["Noto Sans Arabic", "Manrope", "sans-serif"]
                    },
                    borderRadius: { "DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "2xl": "1rem", "full": "9999px" },
                },
            },
        }
    </script>
<style>
        .no-scrollbar::-webkit-scrollbar {
            display: none;
        }
        .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
        body {
            min-height: max(884px, 100dvh);
        }
        .pb-safe {
            padding-bottom: env(safe-area-inset-bottom, 20px);
        }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  
    <style>
        :root {
            --cream-bg: #F2F0EB;
            --brown-text: #5B4233;
            --pink-light: #EEDDD8;
            --brown-medium: #A88B78;
            --gray-brown: #AFA393;
            --beige-light: #EBE1DD;
            --gradient-start: #2f6f73;
            --gradient-end: #c0841a;
            --safe-green: #10B981;
            --warning-orange: #F59E0B;
            --danger-red: #EF4444;
        }
    </style>
</head>
<body class="bg-background-light dark:bg-background-dark text-slate-800 dark:text-gray-100 font-display min-h-screen pb-24 overflow-x-hidden selection:bg-primary selection:text-white transition-colors duration-300">
<header class="sticky top-0 z-40 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md border-b border-gray-200/50 dark:border-white/5 px-4 py-4 flex items-center justify-between transition-colors">
<button class="flex items-center justify-center w-10 h-10 rounded-full active:bg-gray-200 dark:active:bg-white/10 transition-colors text-slate-800 dark:text-white">
<span class="material-symbols-outlined text-2xl rotate-180">arrow_back</span>
</button>
<h1 class="text-lg font-bold text-center flex-1 text-slate-900 dark:text-white">لوحة التحكم</h1>
<div class="flex items-center justify-center w-10 h-10 rounded-full relative">
<span class="material-symbols-outlined text-2xl text-slate-800 dark:text-white">notifications</span>
<span class="absolute top-2 left-2 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-background-light dark:border-background-dark"></span>
</div>
</header>
<main class="flex flex-col gap-6 p-4">
<section class="flex flex-col gap-4">
<div class="flex items-center gap-2">
<div class="w-12 h-12 rounded-full bg-white dark:bg-surface-dark-lighter border-2 border-primary flex items-center justify-center text-xl font-bold text-primary shadow-sm">
                    أ
                </div>
<div>
<h2 class="text-xl font-bold text-slate-900 dark:text-white">مرحباً أحمد 👋</h2>
<p class="text-sm text-gray-500 dark:text-gray-400">عاشق العطور الفاخرة</p>
</div>
</div>
<div class="bg-white dark:bg-surface-dark rounded-2xl p-5 shadow-[0_4px_20px_rgba(0,0,0,0.05)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.2)] border border-gray-100 dark:border-white/5 flex flex-col gap-3 relative overflow-hidden transition-colors">
<div class="absolute right-0 top-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -mr-10 -mt-10"></div>
<div class="flex items-center justify-between border-b border-gray-100 dark:border-white/5 pb-3">
<span class="text-sm text-gray-500 dark:text-gray-300">🧬 بصمتك العطرية:</span>
<span class="text-sm font-bold text-green-600 dark:text-green-400 flex items-center gap-1">مكتملة <span class="material-symbols-outlined text-base">check_circle</span></span>
</div>
<div class="flex items-center justify-between border-b border-gray-100 dark:border-white/5 pb-3">
<span class="text-sm text-gray-500 dark:text-gray-300">📊 تطابقاتك:</span>
<span class="text-sm font-bold text-slate-900 dark:text-white">23 عطر محفوظ</span>
</div>
<div class="flex flex-col gap-1 pt-1">
<span class="text-sm text-gray-500 dark:text-gray-300">⭐ عطرك الأنسب:</span>
<div class="flex items-center justify-between">
<span class="text-base font-bold text-primary">Bleu de Chanel</span>
<span class="text-xs font-bold bg-primary/10 text-primary px-2 py-0.5 rounded-full">92%</span>
</div>
</div>
</div>
</section>
<section class="grid grid-cols-2 gap-4">
<div class="bg-white dark:bg-surface-dark rounded-xl p-4 border border-gray-100 dark:border-white/5 flex flex-col gap-2 hover:bg-gray-50 dark:hover:bg-surface-dark-lighter transition-colors cursor-pointer group shadow-sm">
<div class="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 dark:text-blue-400 group-hover:scale-110 transition-transform">
<span class="material-symbols-outlined">search</span>
</div>
<div>
<span class="text-2xl font-bold text-slate-900 dark:text-white block">142</span>
<span class="text-xs text-gray-500 dark:text-gray-400">عمليات البحث</span>
</div>
</div>
<div class="bg-white dark:bg-surface-dark rounded-xl p-4 border border-gray-100 dark:border-white/5 flex flex-col gap-2 hover:bg-gray-50 dark:hover:bg-surface-dark-lighter transition-colors cursor-pointer group shadow-sm">
<div class="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-500 dark:text-purple-400 group-hover:scale-110 transition-transform">
<span class="material-symbols-outlined">bookmark</span>
</div>
<div>
<span class="text-2xl font-bold text-slate-900 dark:text-white block">28</span>
<span class="text-xs text-gray-500 dark:text-gray-400">محفوظات</span>
</div>
</div>
<div class="bg-white dark:bg-surface-dark rounded-xl p-4 border border-gray-100 dark:border-white/5 flex flex-col gap-2 hover:bg-gray-50 dark:hover:bg-surface-dark-lighter transition-colors cursor-pointer group shadow-sm">
<div class="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 dark:text-green-400 group-hover:scale-110 transition-transform">
<span class="material-symbols-outlined">verified</span>
</div>
<div>
<span class="text-2xl font-bold text-slate-900 dark:text-white block">15</span>
<span class="text-xs text-gray-500 dark:text-gray-400">تطابقات</span>
</div>
</div>
<div class="bg-white dark:bg-surface-dark rounded-xl p-4 border border-gray-100 dark:border-white/5 flex flex-col gap-2 hover:bg-gray-50 dark:hover:bg-surface-dark-lighter transition-colors cursor-pointer group shadow-sm">
<div class="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500 dark:text-orange-400 group-hover:scale-110 transition-transform">
<span class="material-symbols-outlined">science</span>
</div>
<div>
<span class="text-2xl font-bold text-slate-900 dark:text-white block">3</span>
<span class="text-xs text-gray-500 dark:text-gray-400">عينات مطلوبة</span>
</div>
</div>
</section>
<section class="flex flex-col gap-4 mt-2">
<h3 class="text-lg font-bold text-slate-900 dark:text-white px-1">القوائم الشخصية</h3>
<div class="flex flex-col gap-3">
<button class="w-full bg-white dark:bg-surface-dark hover:bg-gray-50 dark:hover:bg-surface-dark-lighter border border-gray-100 dark:border-white/5 p-4 rounded-xl flex items-center justify-between transition-all group shadow-sm">
<div class="flex items-center gap-4">
<div class="w-12 h-12 rounded-lg bg-purple-500/10 dark:bg-purple-500/20 flex items-center justify-center text-purple-500 dark:text-purple-400 border border-purple-500/20 dark:border-purple-500/30">
<span class="material-symbols-outlined">favorite</span>
</div>
<div class="text-right">
<h4 class="font-bold text-slate-900 dark:text-white text-base">المفضلة</h4>
<p class="text-xs text-gray-500 dark:text-gray-400 mt-0.5">23 عطر تعجبك جداً</p>
</div>
</div>
<span class="material-symbols-outlined text-gray-400 group-hover:text-primary transition-colors rotate-180">arrow_back</span>
</button>
<button class="w-full bg-white dark:bg-surface-dark hover:bg-gray-50 dark:hover:bg-surface-dark-lighter border border-gray-100 dark:border-white/5 p-4 rounded-xl flex items-center justify-between transition-all group shadow-sm">
<div class="flex items-center gap-4">
<div class="w-12 h-12 rounded-lg bg-red-500/10 dark:bg-red-500/20 flex items-center justify-center text-red-500 dark:text-red-400 border border-red-500/20 dark:border-red-500/30">
<span class="material-symbols-outlined">thumb_down</span>
</div>
<div class="text-right">
<h4 class="font-bold text-slate-900 dark:text-white text-base">المكروهة</h4>
<p class="text-xs text-gray-500 dark:text-gray-400 mt-0.5">5 عطور لا تناسب ذوقك</p>
</div>
</div>
<span class="material-symbols-outlined text-gray-400 group-hover:text-primary transition-colors rotate-180">arrow_back</span>
</button>
<button class="w-full bg-white dark:bg-surface-dark hover:bg-gray-50 dark:hover:bg-surface-dark-lighter border border-gray-100 dark:border-white/5 p-4 rounded-xl flex items-center justify-between transition-all group shadow-sm">
<div class="flex items-center gap-4">
<div class="w-12 h-12 rounded-lg bg-blue-500/10 dark:bg-blue-500/20 flex items-center justify-center text-blue-500 dark:text-blue-400 border border-blue-500/20 dark:border-blue-500/30">
<span class="material-symbols-outlined">save</span>
</div>
<div class="text-right">
<h4 class="font-bold text-slate-900 dark:text-white text-base">قائمة الرغبات</h4>
<p class="text-xs text-gray-500 dark:text-gray-400 mt-0.5">12 عطر تخطط لشرائها</p>
</div>
</div>
<span class="material-symbols-outlined text-gray-400 group-hover:text-primary transition-colors rotate-180">arrow_back</span>
</button>
</div>
</section>
</main>
<nav class="fixed bottom-0 left-0 right-0 bg-white/95 dark:bg-surface-dark/95 backdrop-blur-lg border-t border-gray-200 dark:border-white/5 pb-safe z-50 transition-colors">
<div class="flex justify-around items-center h-16 max-w-lg mx-auto px-2">
<a class="flex flex-col items-center justify-center w-full h-full text-primary gap-1 relative" href="#">
<div class="absolute -top-3 w-8 h-1 bg-primary rounded-b-full shadow-[0_0_10px_rgba(236,156,19,0.6)]"></div>
<span class="material-symbols-outlined text-[24px] fill-current">home</span>
<span class="text-[10px] font-bold">الرئيسية</span>
</a>
<a class="flex flex-col items-center justify-center w-full h-full text-gray-400 hover:text-primary transition-colors gap-1 group" href="#">
<span class="material-symbols-outlined text-[24px] group-hover:-translate-y-0.5 transition-transform">search</span>
<span class="text-[10px] font-medium">بحث</span>
</a>
<a class="flex flex-col items-center justify-center w-full h-full text-gray-400 hover:text-primary transition-colors gap-1 group" href="#">
<span class="material-symbols-outlined text-[24px] group-hover:-translate-y-0.5 transition-transform">favorite</span>
<span class="text-[10px] font-medium">المفضلة</span>
</a>
<a class="flex flex-col items-center justify-center w-full h-full text-gray-400 hover:text-primary transition-colors gap-1 group" href="#">
<span class="material-symbols-outlined text-[24px] group-hover:-translate-y-0.5 transition-transform">person</span>
<span class="text-[10px] font-medium">ملفي</span>
</a>
</div>
</nav>

</body></html>

<!-- ==================== الواجهة 10: Ask Seba - Search ==================== -->
<!DOCTYPE html>
<html dir="rtl" lang="ar"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Ask Seba - Search</title>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=Noto+Sans+Arabic:wght@400;500;600;700&family=Manrope:wght@400;500;600;700&display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=Noto+Sans+Arabic:wght@400;500;600;700&family=Manrope:wght@400;500;600;700&display=swap" rel="stylesheet"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#c0841a",
                        "background-light": "#F2F0EB", // Updated to creamy light color
                        "background-dark": "#5B4233",
                        "surface-dark": "#2c2315", 
                        "surface-darker": "#1a140b",
                        "text-muted": "#c9b592",
                    },
                    fontFamily: {
                        "display": ["Noto Sans Arabic", "Manrope", "sans-serif"],
                        "body": ["Noto Sans Arabic", "Manrope", "sans-serif"],
                    },
                    borderRadius: {"DEFAULT": "1rem", "lg": "1.5rem", "xl": "2rem", "2xl": "3rem", "full": "9999px"},
                },
            },
        }
    </script>
<style>.no-scrollbar::-webkit-scrollbar {
            display: none;
        }
        .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
        body {
            min-height: max(884px, 100dvh);
        }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  
    <style>
        :root {
            --cream-bg: #F2F0EB;
            --brown-text: #5B4233;
            --pink-light: #EEDDD8;
            --brown-medium: #A88B78;
            --gray-brown: #AFA393;
            --beige-light: #EBE1DD;
            --gradient-start: #2f6f73;
            --gradient-end: #c0841a;
            --safe-green: #10B981;
            --warning-orange: #F59E0B;
            --danger-red: #EF4444;
        }
    </style>
</head>
<body class="bg-background-light dark:bg-background-dark min-h-screen relative font-display text-slate-900 dark:text-white overflow-x-hidden pb-24 selection:bg-primary selection:text-white">
<header class="sticky top-0 z-40 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md pt-4 pb-2 border-b border-stone-200 dark:border-stone-800 transition-colors">
<div class="px-4 mb-4 flex items-center justify-between">
<h1 class="text-2xl font-bold tracking-tight text-primary">محرك البحث</h1>
<button class="flex items-center justify-center w-10 h-10 rounded-full bg-white border border-stone-200 dark:border-none dark:bg-surface-dark text-slate-900 dark:text-white active:bg-primary dark:active:bg-primary transition-colors shadow-sm">
<span class="material-symbols-outlined">notifications</span>
</button>
</div>
<div class="px-4 pb-2">
<div class="flex gap-3 items-center">
<label class="relative flex-1 group">
<div class="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
<span class="material-symbols-outlined text-text-muted group-focus-within:text-primary transition-colors">search</span>
</div>
<input class="w-full h-12 pr-12 pl-4 rounded-xl bg-white dark:bg-surface-dark border-none focus:ring-2 focus:ring-primary text-base placeholder:text-text-muted text-slate-900 dark:text-white shadow-sm" placeholder="ابحث عن عطرك المفضل..." type="text"/>
</label>
<button class="flex-shrink-0 w-12 h-12 rounded-xl bg-white dark:bg-surface-dark border border-stone-200 dark:border-stone-800 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all shadow-sm active:scale-95">
<span class="material-symbols-outlined">tune</span>
</button>
</div>
</div>
<div class="flex gap-2 overflow-x-auto px-4 py-2 no-scrollbar mt-1">
<button class="flex items-center gap-2 px-4 h-9 rounded-full bg-primary text-white font-medium text-sm whitespace-nowrap shadow-md shadow-primary/20">
<span class="material-symbols-outlined text-[18px]">apps</span>
                الكل
            </button>
<button class="flex items-center gap-2 px-4 h-9 rounded-full bg-white dark:bg-surface-dark border border-stone-200 dark:border-stone-800 text-slate-700 dark:text-text-muted font-medium text-sm whitespace-nowrap active:bg-stone-100 dark:active:bg-stone-800">
<span class="material-symbols-outlined text-[18px]">verified</span>
                التوافق
            </button>
<button class="flex items-center gap-2 px-4 h-9 rounded-full bg-white dark:bg-surface-dark border border-stone-200 dark:border-stone-800 text-slate-700 dark:text-text-muted font-medium text-sm whitespace-nowrap active:bg-stone-100 dark:active:bg-stone-800">
<span class="material-symbols-outlined text-[18px]">category</span>
                العائلة العطرية
            </button>
<button class="flex items-center gap-2 px-4 h-9 rounded-full bg-white dark:bg-surface-dark border border-stone-200 dark:border-stone-800 text-slate-700 dark:text-text-muted font-medium text-sm whitespace-nowrap active:bg-stone-100 dark:active:bg-stone-800">
<span class="material-symbols-outlined text-[18px]">attach_money</span>
                السعر
            </button>
<button class="flex items-center gap-2 px-4 h-9 rounded-full bg-white dark:bg-surface-dark border border-stone-200 dark:border-stone-800 text-slate-700 dark:text-text-muted font-medium text-sm whitespace-nowrap active:bg-stone-100 dark:active:bg-stone-800">
<span class="material-symbols-outlined text-[18px]">star</span>
                التقييم
            </button>
</div>
</header>
<main class="p-4 flex flex-col gap-6">
<div class="flex items-center justify-between">
<h2 class="text-xl font-bold text-slate-900 dark:text-white">نتائج مميزة لك</h2>
<button class="text-sm font-medium text-primary flex items-center gap-1">
                عرض الكل
                <span class="material-symbols-outlined text-sm rtl:rotate-180">arrow_forward_ios</span>
</button>
</div>
<div class="grid grid-cols-2 gap-4">
<div class="group flex flex-col gap-3 bg-white dark:bg-surface-dark p-3 rounded-2xl shadow-sm border border-transparent dark:border-stone-800 transition-transform active:scale-[0.98]">
<div class="relative w-full aspect-[3/4] rounded-xl overflow-hidden bg-stone-200 dark:bg-stone-900">
<div class="absolute inset-0 bg-cover bg-center transition-transform group-hover:scale-105 duration-700" data-alt="Luxury amber perfume bottle on dark background" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCk9HgdERrKpB6nuRjXnn217hv8OO3hRPQbhC7C87mcUO6DAtay7bDX6xtCFKs3Ed-0AUbzxPKKWUthG-zU2WkDpw8i_gt1_jQRruQ8RKMPs-VAsJNcLDulHi1q0GqVEA-XI9e2DCmE3jceW9r9-nxvXwLmZFc0kwYPfMLiU0ehG-TeuudM4W96TaT6H4gUsD8HojWB_YgIB-se-pTDpaswMiQezWHgE41i6q-Pj2V3nCLyUv0aHIb17MRWs98bhOFbXEb7Du4-f9PF');"></div>
<button class="absolute top-2 left-2 w-8 h-8 rounded-full bg-black/30 backdrop-blur-md flex items-center justify-center text-white hover:bg-primary hover:text-white transition-colors">
<span class="material-symbols-outlined text-[18px]">favorite</span>
</button>
<div class="absolute bottom-2 right-2 px-2 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 flex items-center gap-1">
<span class="text-primary material-symbols-outlined text-[14px] fill-current">percent</span>
<span class="text-xs font-bold text-white">98%</span>
</div>
</div>
<div class="flex flex-col gap-1 px-1">
<p class="text-stone-500 dark:text-text-muted text-xs font-medium tracking-wide">أرماني</p>
<div class="flex justify-between items-start">
<h3 class="text-slate-900 dark:text-white text-base font-bold leading-tight line-clamp-1">عود رويال</h3>
<div class="flex items-center gap-0.5 text-primary text-xs font-bold bg-primary/10 px-1.5 py-0.5 rounded-md">
                            4.8 <span class="material-symbols-outlined text-[10px] filled">star</span>
</div>
</div>
<p class="text-slate-900 dark:text-white text-sm font-semibold mt-1">935 ر.س</p>
</div>
</div>
<div class="group flex flex-col gap-3 bg-white dark:bg-surface-dark p-3 rounded-2xl shadow-sm border border-transparent dark:border-stone-800 transition-transform active:scale-[0.98]">
<div class="relative w-full aspect-[3/4] rounded-xl overflow-hidden bg-stone-200 dark:bg-stone-900">
<div class="absolute inset-0 bg-cover bg-center transition-transform group-hover:scale-105 duration-700" data-alt="Elegant glass perfume bottle with gold liquid" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuAD1EFt78U-1zIUai8YilyhXOTPd3-uGuFvyZcgkqymglE0mjx_WSP0Q2oRNW4j78Zk_gu14Ct3YqdZMV__KQvE1dWMbmC34e7wt3OOaT_bTvym70bVGSCcBnLzacQYQrw1IDHDsydBZOHfZlOkve9HVBBMXnyn0T26wbIS9GybAaIPWztFfqfTuML4MvDL3F4R2Pa_nRCLyhfi55QFr9o-BZLHggV-kNmSzEVPKspjLVH7QqGCEgwFcvs5GZMxTDl3xwVOCvRiI7Xd');"></div>
<button class="absolute top-2 left-2 w-8 h-8 rounded-full bg-black/30 backdrop-blur-md flex items-center justify-center text-white hover:bg-primary hover:text-white transition-colors">
<span class="material-symbols-outlined text-[18px]">favorite</span>
</button>
</div>
<div class="flex flex-col gap-1 px-1">
<p class="text-stone-500 dark:text-text-muted text-xs font-medium tracking-wide">توم فورد</p>
<div class="flex justify-between items-start">
<h3 class="text-slate-900 dark:text-white text-base font-bold leading-tight line-clamp-1">بلاك أوركيد</h3>
<div class="flex items-center gap-0.5 text-primary text-xs font-bold bg-primary/10 px-1.5 py-0.5 rounded-md">
                            4.9 <span class="material-symbols-outlined text-[10px] filled">star</span>
</div>
</div>
<p class="text-slate-900 dark:text-white text-sm font-semibold mt-1">650 ر.س</p>
</div>
</div>
<div class="group flex flex-col gap-3 bg-white dark:bg-surface-dark p-3 rounded-2xl shadow-sm border border-transparent dark:border-stone-800 transition-transform active:scale-[0.98]">
<div class="relative w-full aspect-[3/4] rounded-xl overflow-hidden bg-stone-200 dark:bg-stone-900">
<div class="absolute inset-0 bg-cover bg-center transition-transform group-hover:scale-105 duration-700" data-alt="Minimalist perfume bottle on grey background" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDBNk48Ihg9yFgOMWc0bKgxqk5okB-t_QCLWi5tCT6fTzNVnPbAjw8adL20GpKqLyuFB1tTeEcZjRJyDVpxNej3aazgAhCoFibMR2CiuI1ID8_PhRmvtuxypHrVqH3kxvTjCgUGSekYKYwycFZFfhiODC40FxrZ5XcD2KRAb9VRwRUUSGqvEtJ27uSkj8GPEHgKFL8RrRJq2llRibzCQmQ07hsJWNWHVB5Uxv0qHuc9aEF9HYa5BqrGbLCq5ofvByHJcGOtUIpNW4Dd');"></div>
<button class="absolute top-2 left-2 w-8 h-8 rounded-full bg-black/30 backdrop-blur-md flex items-center justify-center text-white hover:bg-primary hover:text-white transition-colors">
<span class="material-symbols-outlined text-[18px]">favorite</span>
</button>
<div class="absolute bottom-2 right-2 px-2 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 flex items-center gap-1">
<span class="text-primary material-symbols-outlined text-[14px] fill-current">percent</span>
<span class="text-xs font-bold text-white">92%</span>
</div>
</div>
<div class="flex flex-col gap-1 px-1">
<p class="text-stone-500 dark:text-text-muted text-xs font-medium tracking-wide">لو لابو</p>
<div class="flex justify-between items-start">
<h3 class="text-slate-900 dark:text-white text-base font-bold leading-tight line-clamp-1">سانتال ٣٣</h3>
<div class="flex items-center gap-0.5 text-primary text-xs font-bold bg-primary/10 px-1.5 py-0.5 rounded-md">
                            4.7 <span class="material-symbols-outlined text-[10px] filled">star</span>
</div>
</div>
<p class="text-slate-900 dark:text-white text-sm font-semibold mt-1">820 ر.س</p>
</div>
</div>
<div class="group flex flex-col gap-3 bg-white dark:bg-surface-dark p-3 rounded-2xl shadow-sm border border-transparent dark:border-stone-800 transition-transform active:scale-[0.98]">
<div class="relative w-full aspect-[3/4] rounded-xl overflow-hidden bg-stone-200 dark:bg-stone-900">
<div class="absolute inset-0 bg-cover bg-center transition-transform group-hover:scale-105 duration-700" data-alt="Red crystal perfume bottle with gold accents" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuA0ZmEvV-hMlPl716Woevr6gB8oPdBFcae4FPLaeKLAwu_VrPIKHnp7je_NA6iZsmnKp4I-vM_8CaMC4fUoC-EyIUqYkNIoIo3idLQMNOp9esrJ1at2tw2boKJWGlWvLBbpUpq7iGKoIT7nK6qDp7k7yb39TEyTIDijVXJZu4VcuJneGaZyjQ_rLoeCVtBWE7zA4dyrX07YTDRapxbwzaOf-9rk_4kkj6wndKCGqGDOeMAnhBkToJqXPkwfaHHzedum-jvmqBy5-4OA');"></div>
<button class="absolute top-2 left-2 w-8 h-8 rounded-full bg-black/30 backdrop-blur-md flex items-center justify-center text-white hover:bg-primary hover:text-white transition-colors">
<span class="material-symbols-outlined text-[18px]">favorite</span>
</button>
</div>
<div class="flex flex-col gap-1 px-1">
<p class="text-stone-500 dark:text-text-muted text-xs font-medium tracking-wide">فرانسيس كوركجيان</p>
<div class="flex justify-between items-start">
<h3 class="text-slate-900 dark:text-white text-base font-bold leading-tight line-clamp-1">باكارا روج ٥٤٠</h3>
<div class="flex items-center gap-0.5 text-primary text-xs font-bold bg-primary/10 px-1.5 py-0.5 rounded-md">
                            5.0 <span class="material-symbols-outlined text-[10px] filled">star</span>
</div>
</div>
<p class="text-slate-900 dark:text-white text-sm font-semibold mt-1">1450 ر.س</p>
</div>
</div>
<div class="group flex flex-col gap-3 bg-white dark:bg-surface-dark p-3 rounded-2xl shadow-sm border border-transparent dark:border-stone-800 transition-transform active:scale-[0.98]">
<div class="relative w-full aspect-[3/4] rounded-xl overflow-hidden bg-stone-200 dark:bg-stone-900">
<div class="absolute inset-0 bg-cover bg-center transition-transform group-hover:scale-105 duration-700" data-alt="Dark mysterious perfume bottle on stone surface" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCB1-zfApIHl0zZ58WEQyQRz2sz11BiH9dDRP3U0Nxp8LYRW6-C4IvuKLruh7tzTimHm9hFkjX4_GtQUfFjg0z1ayrhmR0jj3iF50bCtGNsUZXXQ_qoO9VrJ84ChfHAAz9TIMIEQ75R1M2TceAClvnMN7v7PRFhDu_J-9q4C77EnOYUNTau2iISJ2oCVATP3bBEV1v-2Zv3T6BqqNR2eofdWDcFvljgx8DFCq2E92fjXjbNn2Xy6SyXkTkyr67ihWCSgzqEnyCRp9-j');"></div>
<button class="absolute top-2 left-2 w-8 h-8 rounded-full bg-black/30 backdrop-blur-md flex items-center justify-center text-white hover:bg-primary hover:text-white transition-colors">
<span class="material-symbols-outlined text-[18px]">favorite</span>
</button>
<div class="absolute bottom-2 right-2 px-2 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 flex items-center gap-1">
<span class="text-primary material-symbols-outlined text-[14px] fill-current">percent</span>
<span class="text-xs font-bold text-white">88%</span>
</div>
</div>
<div class="flex flex-col gap-1 px-1">
<p class="text-stone-500 dark:text-text-muted text-xs font-medium tracking-wide">ديور</p>
<div class="flex justify-between items-start">
<h3 class="text-slate-900 dark:text-white text-base font-bold leading-tight line-clamp-1">سوفاج إلكسير</h3>
<div class="flex items-center gap-0.5 text-primary text-xs font-bold bg-primary/10 px-1.5 py-0.5 rounded-md">
                            4.6 <span class="material-symbols-outlined text-[10px] filled">star</span>
</div>
</div>
<p class="text-slate-900 dark:text-white text-sm font-semibold mt-1">580 ر.س</p>
</div>
</div>
<div class="group flex flex-col gap-3 bg-white dark:bg-surface-dark p-3 rounded-2xl shadow-sm border border-transparent dark:border-stone-800 transition-transform active:scale-[0.98]">
<div class="relative w-full aspect-[3/4] rounded-xl overflow-hidden bg-stone-200 dark:bg-stone-900">
<div class="absolute inset-0 bg-cover bg-center transition-transform group-hover:scale-105 duration-700" data-alt="Modern perfume bottle with blue tint" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuA1kd4OpyyAgLDPQl8L-0J7mJEujRUc6GbdgwsOsECyAp9zTraw68qinvci75WzzZsF0dmA9r8tz47b-LptLka-PfnRct9020QELERFLyeyUrHr8HLPKSYoixgv39Ku-i8lM_nPwgBWqM9u22H3yQSwfH4IVuFVtA0PKwmxSn80WUx5MSYe5kH69FE9-frTld-z4VuCNQpyQaNwo3WJjQTthsNWCkNqTP2SjcN4idGLm9DEFQa9tij7Q5Hve7TlOpR8ZihLa5F2_tEA');"></div>
<button class="absolute top-2 left-2 w-8 h-8 rounded-full bg-black/30 backdrop-blur-md flex items-center justify-center text-white hover:bg-primary hover:text-white transition-colors">
<span class="material-symbols-outlined text-[18px]">favorite</span>
</button>
</div>
<div class="flex flex-col gap-1 px-1">
<p class="text-stone-500 dark:text-text-muted text-xs font-medium tracking-wide">شانيل</p>
<div class="flex justify-between items-start">
<h3 class="text-slate-900 dark:text-white text-base font-bold leading-tight line-clamp-1">بلو دو شانيل</h3>
<div class="flex items-center gap-0.5 text-primary text-xs font-bold bg-primary/10 px-1.5 py-0.5 rounded-md">
                            4.8 <span class="material-symbols-outlined text-[10px] filled">star</span>
</div>
</div>
<p class="text-slate-900 dark:text-white text-sm font-semibold mt-1">620 ر.س</p>
</div>
</div>
</div>
</main>
<nav class="fixed bottom-0 z-50 w-full bg-white/90 dark:bg-surface-darker/90 backdrop-blur-xl border-t border-stone-200 dark:border-stone-800/50 pb-safe transition-colors">
<div class="flex justify-around items-center h-20 px-2">
<a class="flex flex-col items-center gap-1.5 p-2 rounded-2xl min-w-[64px] group transition-all" href="#">
<span class="material-symbols-outlined text-stone-400 dark:text-text-muted group-hover:text-primary dark:group-hover:text-white transition-colors">home</span>
<span class="text-[10px] font-medium text-stone-400 dark:text-text-muted group-hover:text-primary dark:group-hover:text-white">الرئيسية</span>
</a>
<a class="flex flex-col items-center gap-1.5 p-2 rounded-2xl min-w-[64px] group transition-all" href="#">
<span class="material-symbols-outlined text-stone-400 dark:text-text-muted group-hover:text-primary dark:group-hover:text-white transition-colors">favorite</span>
<span class="text-[10px] font-medium text-stone-400 dark:text-text-muted group-hover:text-primary dark:group-hover:text-white">المفضلة</span>
</a>
<a class="flex flex-col items-center gap-1.5 p-2 rounded-2xl min-w-[64px] text-primary transition-all bg-primary/10 dark:bg-white/5" href="#">
<span class="material-symbols-outlined font-bold">search</span>
<span class="text-[10px] font-bold">البحث</span>
</a>
<a class="flex flex-col items-center gap-1.5 p-2 rounded-2xl min-w-[64px] group transition-all" href="#">
<span class="material-symbols-outlined text-stone-400 dark:text-text-muted group-hover:text-primary dark:group-hover:text-white transition-colors">person</span>
<span class="text-[10px] font-medium text-stone-400 dark:text-text-muted group-hover:text-primary dark:group-hover:text-white">حسابي</span>
</a>
</div>
</nav>
<div class="h-6"></div>

</body></html>

<!-- ==================== الواجهة 11: محرك البحث - Ask Seba ==================== -->
<!DOCTYPE html>
<html dir="rtl" lang="ar"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>محرك البحث - Ask Seba</title>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=Noto+Sans+Arabic:wght@400;500;600;700&family=Manrope:wght@400;500;600;700&display=swap" rel="stylesheet"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=Noto+Sans+Arabic:wght@400;500;600;700&family=Manrope:wght@400;500;600;700&display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=Noto+Sans+Arabic:wght@400;500;600;700&family=Manrope:wght@400;500;600;700&display=swap" rel="stylesheet"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,typography"></script>
<script>
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        primary: "#5B4233", // Deep brown text
                        secondary: "#c0841a", // Gold
                        accent: "#2f6f73", // Teal
                        "background-light": "#F2F0EB", // Creamy off-white
                        "background-dark": "#1C1917", // Dark stone
                        "card-bg": "#FFFFFF",
                    },
                    fontFamily: {
                        display: ["Playfair Display", "serif"],
                        arabic: ["Tajawal", "sans-serif"],
                    },
                    boxShadow: {
                        'soft': '0 4px 20px -2px rgba(74, 55, 40, 0.05)',
                        'card': '0 10px 30px -5px rgba(74, 55, 40, 0.08)',
                    }
                },
            },
        };
    </script>
<style>
        .bg-texture {
            background-image: url(https://lh3.googleusercontent.com/aida-public/AB6AXuB0RGMbxn0axocpvqkWQ8IiDE0DIybTjg82lTD0VIBOzb-xukfUS93f2_Uv5ZX8KCLJCCZlgvL4bHoZHhkcJFAho0A9OZgmgAUQpytTm3qFH9aXHeOqNAzW73O5zH8h7yYcIdCRW9AUNcXkEREJuFbNIAoTRjuCxBhME6hQZWh-5_Crp6bNpGpGYSKwgLIN_8Y1ZIImeKJ9GJiBHdvfxHJyz2yIlYV8rTCRF2w8zszTVu2Qtf6atLoxKN5Z2i7i1V27PmJwQr9y3lTP);
        }.no-scrollbar::-webkit-scrollbar {
            display: none;
        }
        .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
        .range-slider::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 20px;
            height: 20px;
            background: #c0841a;
            cursor: pointer;
            border-radius: 50%;
        }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  
    <style>
        :root {
            --cream-bg: #F2F0EB;
            --brown-text: #5B4233;
            --pink-light: #EEDDD8;
            --brown-medium: #A88B78;
            --gray-brown: #AFA393;
            --beige-light: #EBE1DD;
            --gradient-start: #2f6f73;
            --gradient-end: #c0841a;
            --safe-green: #10B981;
            --warning-orange: #F59E0B;
            --danger-red: #EF4444;
        }
    </style>
</head>
<body class="bg-background-light text-primary font-arabic min-h-screen bg-texture selection:bg-secondary selection:text-white pb-24">
<header class="sticky top-0 z-40 bg-background-light/95 backdrop-blur-md border-b border-primary/5 transition-all duration-300">
<div class="px-6 pt-6 pb-2">
<div class="flex items-center justify-between mb-6">
<button class="p-2 -mr-2 rounded-full hover:bg-primary/5 text-primary transition-colors">
<span class="material-symbols-outlined text-3xl">menu</span>
</button>
<h1 class="font-display italic text-3xl text-primary tracking-wide">
                    ask.seba
                </h1>
<div class="w-10 h-10 rounded-full bg-gradient-to-br from-secondary to-primary p-0.5 shadow-md">
<img alt="Profile" class="w-full h-full rounded-full object-cover border-2 border-background-light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5qTosW4590m50XED9S9w4KpYTrwgBvSx_uCdXEIBEV_Aw9fP1i9SlGekXsDW7NZ6PgieNK-hVMAB2__P_B88H8-JYQyQoOgcrQ_GDZQT1ELGbKIHSUPG0lIwYxC6UaCId0BqFRNcam5CYzioY4RFn_00nLZT35_o0tUTuTE7MziuZbyX9ywdWrNX0roBtAvSm7-I3ANatI_0LesUR_Fo9037MPz_N0QLibbiL6crnPNWL-lhX-l7EctLU4nK7sglYq_1_Dec_fFJj"/>
</div>
</div>
<div class="relative group">
<div class="absolute inset-y-0 right-4 flex items-center pointer-events-none">
<span class="material-symbols-outlined text-primary/50 group-focus-within:text-secondary transition-colors">search</span>
</div>
<input class="w-full py-4 pr-12 pl-12 bg-white/80 border-0 ring-1 ring-primary/10 rounded-2xl shadow-soft text-lg placeholder:text-primary/40 focus:ring-2 focus:ring-secondary/50 focus:bg-white transition-all duration-300" placeholder="ابحث عن عطرك المفضل..." type="text"/>
<button class="absolute inset-y-0 left-4 flex items-center text-primary/30 hover:text-primary transition-colors">
<span class="material-symbols-outlined">mic</span>
</button>
</div>
</div>
<div class="px-6 pb-4 pt-2 flex gap-3 overflow-x-auto no-scrollbar items-center">
<button class="flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-xl shadow-lg shadow-primary/20 shrink-0 active:scale-95 transition-transform">
<span class="material-symbols-outlined text-[20px]">tune</span>
<span class="font-medium">تصفية</span>
</button>
<button class="bg-white/60 hover:bg-white border border-primary/5 px-4 py-2.5 rounded-xl text-primary/80 whitespace-nowrap transition-colors shrink-0">
                الأكثر توافقاً
            </button>
<button class="bg-white/60 hover:bg-white border border-primary/5 px-4 py-2.5 rounded-xl text-primary/80 whitespace-nowrap transition-colors shrink-0">
                عطور شتوية
            </button>
<button class="bg-white/60 hover:bg-white border border-primary/5 px-4 py-2.5 rounded-xl text-primary/80 whitespace-nowrap transition-colors shrink-0">
                للجنسين
            </button>
<button class="bg-white/60 hover:bg-white border border-primary/5 px-4 py-2.5 rounded-xl text-primary/80 whitespace-nowrap transition-colors shrink-0">
                زهري
            </button>
</div>
</header>
<main class="px-5 pt-6 animate-fade-in">
<div class="flex justify-between items-center mb-6 px-1">
<h2 class="text-xl font-bold text-primary">نتائج البحث</h2>
<span class="text-sm text-primary/60 font-medium bg-primary/5 px-3 py-1 rounded-full">142 عطر</span>
</div>
<div class="grid grid-cols-2 gap-4">
<div class="bg-card-bg rounded-3xl p-4 shadow-card hover:shadow-xl transition-shadow duration-300 group relative border border-primary/5">
<div class="absolute top-3 right-3 z-10">
<button class="w-8 h-8 flex items-center justify-center rounded-full bg-background-light/80 backdrop-blur text-primary/40 hover:text-red-500 hover:bg-red-50 transition-colors">
<span class="material-symbols-outlined text-lg fill-current">favorite</span>
</button>
</div>
<div class="absolute top-3 left-3 z-10">
<span class="bg-accent/10 text-accent text-xs font-bold px-2 py-1 rounded-lg backdrop-blur-sm flex items-center gap-1">
<span class="material-symbols-outlined text-sm">verified</span>
                        98%
                    </span>
</div>
<div class="relative w-full aspect-[4/5] rounded-2xl overflow-hidden mb-4 bg-gradient-to-t from-[#F3F2EA] to-white">
<img alt="Perfume 1" class="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbhcR6PP0bBvyBpuMtPAIPyxaJZ-UkNTAPgRZs9yrdwij7AFbp70Zf_u3BFJ3TM84MolUMqkI44pVA_s9WwAhdTcf9KH7z7T2UVFyEgEQB0BH3CA2hE-ZmWlWIBC6fkJvIrItInpl6ZD9MoAimbAhdbt8h2mBGhXw70I-uc6ETgXkakOG-047n3oChq-ttLnkl5Kb4CDCBBSsPpl1O9-nkJ--t8JB0qPSXDh14AXekKdKAGLDvWu_EwE9H0fOERqjBSx3AwgvxX4cK"/>
</div>
<div class="text-right">
<p class="text-xs text-secondary font-bold tracking-wider mb-1 uppercase">DIOR</p>
<h3 class="font-display text-lg text-primary font-bold leading-tight mb-2">Sauvage Elixir</h3>
<div class="flex items-center justify-between mt-2">
<span class="text-primary font-bold">450 ر.س</span>
<div class="flex items-center text-yellow-500">
<span class="text-xs font-bold text-primary/60 ml-1">(4.8)</span>
<span class="material-symbols-outlined text-sm fill-current">star</span>
</div>
</div>
</div>
</div>
<div class="bg-card-bg rounded-3xl p-4 shadow-card hover:shadow-xl transition-shadow duration-300 group relative border border-primary/5">
<div class="absolute top-3 right-3 z-10">
<button class="w-8 h-8 flex items-center justify-center rounded-full bg-background-light/80 backdrop-blur text-primary/40 hover:text-red-500 hover:bg-red-50 transition-colors">
<span class="material-symbols-outlined text-lg">favorite</span>
</button>
</div>
<div class="absolute top-3 left-3 z-10">
<span class="bg-secondary/10 text-secondary text-xs font-bold px-2 py-1 rounded-lg backdrop-blur-sm">
                        94%
                    </span>
</div>
<div class="relative w-full aspect-[4/5] rounded-2xl overflow-hidden mb-4 bg-gradient-to-t from-[#F3F2EA] to-white">
<img alt="Perfume 2" class="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-PXa2kes-tBbG_NcvdsMQzlrai_9QUVxsDE4lzn0suB8l42c91egc9Jm5iJ5qDesLfKLoMM8WNJxSVlYyq2KVbtHnyyBs-EJwTOOsHlDVwkJ_cvePS6Gzx_6kdPO-SxJjGXhCerGFh0MBzbLhZLfTjxh2_6_jFbdEKIcr2cW_cdutnBDe9QF6SJyjwglw50kIyZ91sY52N-HMID-A-O1UrMLjLRX9SnrOL9yxfV0N-puUBCjgPH1viUy8OFqrTTvKZ5GeC4FZRf1M"/>
</div>
<div class="text-right">
<p class="text-xs text-secondary font-bold tracking-wider mb-1 uppercase">CHANEL</p>
<h3 class="font-display text-lg text-primary font-bold leading-tight mb-2">Bleu de Chanel</h3>
<div class="flex items-center justify-between mt-2">
<span class="text-primary font-bold">520 ر.س</span>
<div class="flex items-center text-yellow-500">
<span class="text-xs font-bold text-primary/60 ml-1">(4.9)</span>
<span class="material-symbols-outlined text-sm fill-current">star</span>
</div>
</div>
</div>
</div>
<div class="bg-card-bg rounded-3xl p-4 shadow-card hover:shadow-xl transition-shadow duration-300 group relative border border-primary/5">
<div class="absolute top-3 right-3 z-10">
<button class="w-8 h-8 flex items-center justify-center rounded-full bg-background-light/80 backdrop-blur text-red-500 bg-red-50 transition-colors">
<span class="material-symbols-outlined text-lg fill-current">favorite</span>
</button>
</div>
<div class="absolute top-3 left-3 z-10">
<span class="bg-secondary/10 text-secondary text-xs font-bold px-2 py-1 rounded-lg backdrop-blur-sm">
                        88%
                    </span>
</div>
<div class="relative w-full aspect-[4/5] rounded-2xl overflow-hidden mb-4 bg-gradient-to-t from-[#F3F2EA] to-white">
<img alt="Perfume 3" class="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5qTosW4590m50XED9S9w4KpYTrwgBvSx_uCdXEIBEV_Aw9fP1i9SlGekXsDW7NZ6PgieNK-hVMAB2__P_B88H8-JYQyQoOgcrQ_GDZQT1ELGbKIHSUPG0lIwYxC6UaCId0BqFRNcam5CYzioY4RFn_00nLZT35_o0tUTuTE7MziuZbyX9ywdWrNX0roBtAvSm7-I3ANatI_0LesUR_Fo9037MPz_N0QLibbiL6crnPNWL-lhX-l7EctLU4nK7sglYq_1_Dec_fFJj"/>
</div>
<div class="text-right">
<p class="text-xs text-secondary font-bold tracking-wider mb-1 uppercase">GUCCI</p>
<h3 class="font-display text-lg text-primary font-bold leading-tight mb-2">Bloom Nettare</h3>
<div class="flex items-center justify-between mt-2">
<span class="text-primary font-bold">380 ر.س</span>
<div class="flex items-center text-yellow-500">
<span class="text-xs font-bold text-primary/60 ml-1">(4.5)</span>
<span class="material-symbols-outlined text-sm fill-current">star</span>
</div>
</div>
</div>
</div>
<div class="bg-card-bg rounded-3xl p-4 shadow-card hover:shadow-xl transition-shadow duration-300 group relative border border-primary/5">
<div class="absolute top-3 right-3 z-10">
<button class="w-8 h-8 flex items-center justify-center rounded-full bg-background-light/80 backdrop-blur text-primary/40 hover:text-red-500 hover:bg-red-50 transition-colors">
<span class="material-symbols-outlined text-lg">favorite</span>
</button>
</div>
<div class="relative w-full aspect-[4/5] rounded-2xl overflow-hidden mb-4 bg-gradient-to-t from-[#F3F2EA] to-white">
<div class="absolute inset-0 bg-primary/5"></div>
<img alt="Perfume 4" class="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPVL3VJzH8Iz_H_E8ArreBTzSA6v7KvAQHtfWmMLNEGKgom5jAYN9Xhq7Lvw2AhdyJk0wqqFji8XhmP6NMSY9QrN39eRagh8o5RbUni30bozGciBjKr2VmTy0hsFT4CasRAu5j2tjL8tgqGbWCgVfj4QHvYr-1-5asOj0tjsezAXRynf3oIfvV-WI0x51MVAZ3nu9FstuC7ZtV6qkY9DxF3KOkbzZILqVGxb_6yLVrQm03mmPA3WxJv5Txb8TH-8nH1pcWzxAuvv04"/>
</div>
<div class="text-right">
<p class="text-xs text-secondary font-bold tracking-wider mb-1 uppercase">YSL</p>
<h3 class="font-display text-lg text-primary font-bold leading-tight mb-2">Black Opium</h3>
<div class="flex items-center justify-between mt-2">
<span class="text-primary font-bold">490 ر.س</span>
<div class="flex items-center text-yellow-500">
<span class="text-xs font-bold text-primary/60 ml-1">(4.7)</span>
<span class="material-symbols-outlined text-sm fill-current">star</span>
</div>
</div>
</div>
</div>
</div>
</main>
<nav class="fixed bottom-6 left-6 right-6 h-16 bg-primary/95 backdrop-blur-xl rounded-full shadow-2xl z-50 flex justify-around items-center px-2 text-white/50">
<button class="p-3 flex flex-col items-center gap-1 hover:text-secondary transition-colors">
<span class="material-symbols-outlined">home</span>
</button>
<button class="p-3 bg-secondary text-primary rounded-full -translate-y-4 shadow-lg ring-4 ring-background-light flex items-center justify-center">
<span class="material-symbols-outlined">search</span>
</button>
<button class="p-3 flex flex-col items-center gap-1 hover:text-secondary transition-colors">
<span class="material-symbols-outlined">favorite</span>
</button>
<button class="p-3 flex flex-col items-center gap-1 hover:text-secondary transition-colors">
<span class="material-symbols-outlined">person</span>
</button>
</nav>
<div class="hidden fixed inset-0 z-[60]" id="filter-sidebar">
<div class="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
<aside class="absolute left-0 top-0 bottom-0 w-[85%] max-w-sm bg-background-light shadow-2xl flex flex-col rounded-r-3xl overflow-hidden">
<div class="p-6 border-b border-primary/10 flex justify-between items-center bg-white/50">
<h2 class="font-display text-2xl text-primary font-bold">تصفية النتائج</h2>
<button class="p-2 hover:bg-primary/5 rounded-full"><span class="material-symbols-outlined">close</span></button>
</div>
<div class="flex-1 overflow-y-auto p-6 space-y-8">
<div>
<label class="block text-primary font-bold mb-3 flex justify-between">
<span>نسبة التوافق</span>
<span class="text-secondary">85% +</span>
</label>
<input class="w-full h-2 bg-primary/10 rounded-lg appearance-none cursor-pointer range-slider accent-secondary" type="range"/>
</div>
<div class="flex items-center justify-between py-2 border-b border-primary/5">
<span class="text-primary font-medium">آمن للبشرة الحساسة</span>
<input class="w-5 h-5 rounded border-gray-300 text-accent focus:ring-accent" type="checkbox"/>
</div>
<div>
<h3 class="font-bold text-primary mb-3">العائلة العطرية</h3>
<div class="space-y-2 pr-2 border-r-2 border-primary/10">
<label class="flex items-center gap-3 cursor-pointer group">
<span class="w-2 h-2 rounded-full bg-secondary"></span>
<span class="text-primary group-hover:text-secondary">الأخشاب</span>
</label>
<div class="pr-6 space-y-2">
<label class="flex items-center gap-2 text-sm text-primary/70">
<input class="rounded text-accent focus:ring-accent" type="checkbox"/>
<span>صندل</span>
</label>
<label class="flex items-center gap-2 text-sm text-primary/70">
<input checked="" class="rounded text-accent focus:ring-accent" type="checkbox"/>
<span>عود</span>
</label>
</div>
</div>
</div>
<div>
<h3 class="font-bold text-primary mb-3">السعر</h3>
<div class="flex items-center gap-4">
<div class="bg-white px-3 py-2 rounded-lg border border-primary/10 text-center flex-1">100 ر.س</div>
<span class="text-primary/50">-</span>
<div class="bg-white px-3 py-2 rounded-lg border border-primary/10 text-center flex-1">5000 ر.س</div>
</div>
<input class="w-full h-2 bg-primary/10 rounded-lg appearance-none cursor-pointer mt-4 accent-secondary" multiple="" type="range"/>
</div>
</div>
<div class="p-6 border-t border-primary/10 bg-white/50">
<button class="w-full py-4 rounded-xl bg-primary text-white font-bold shadow-lg shadow-primary/20 active:scale-[0.98] transition-transform">
                    عرض 24 نتيجة
                </button>
</div>
</aside>
</div>

</body></html>

<!-- ==================== الواجهة 12: Perfume Card - On Sale ==================== -->
<!DOCTYPE html>
<html dir="rtl" lang="ar"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Perfume Card - On Sale</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=Noto+Sans+Arabic:wght@400;500;600;700&family=Manrope:wght@400;500;600;700&display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=Noto+Sans+Arabic:wght@400;500;600;700&family=Manrope:wght@400;500;600;700&display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#c0841a",
                        "background-light": "#F2F0EB",
                        "background-dark": "#5B4233", // Deep warm dark
                        "card-dark": "#2e251a", // Slightly lighter for cards
                        "surface-dark": "#3a3022", // Even lighter for inputs/elements
                    },
                    fontFamily: {
                        "display": ["Noto Sans Arabic", "Manrope", "sans-serif"],
                        "body": ["Noto Sans Arabic", "Manrope", "sans-serif"]
                    },
                    borderRadius: {
                        "DEFAULT": "1rem",
                        "lg": "1.5rem",
                        "xl": "2rem",
                        "2xl": "2.5rem",
                        "full": "9999px"
                    },
                    boxShadow: {
                        "glow": "0 0 20px -5px rgba(236, 156, 19, 0.15)",
                        "soft": "0 10px 40px -10px rgba(0,0,0,0.5)"
                    }
                },
            },
        }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        body {
            font-family: 'Noto Sans Arabic', 'Manrope', sans-serif;
        }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  
    <style>
        :root {
            --cream-bg: #F2F0EB;
            --brown-text: #5B4233;
            --pink-light: #EEDDD8;
            --brown-medium: #A88B78;
            --gray-brown: #AFA393;
            --beige-light: #EBE1DD;
            --gradient-start: #2f6f73;
            --gradient-end: #c0841a;
            --safe-green: #10B981;
            --warning-orange: #F59E0B;
            --danger-red: #EF4444;
        }
    </style>
</head>
<body class="bg-background-light dark:bg-background-dark min-h-screen flex flex-col items-center justify-center p-4">
<div class="w-full max-w-sm relative group">
<div class="relative bg-white dark:bg-card-dark rounded-3xl overflow-hidden shadow-soft border border-neutral-200 dark:border-[#423626] transition-transform duration-300 hover:scale-[1.01]">
<div class="absolute top-4 right-4 z-20">
<div class="bg-primary text-[#221c11] text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1">
<span class="material-symbols-outlined text-sm" style="font-size: 16px;">local_offer</span>
<span>تخفيضات</span>
</div>
</div>
<div class="absolute top-4 left-4 z-20">
<div class="bg-black/40 backdrop-blur-md border border-white/10 text-white text-xs font-medium px-3 py-1.5 rounded-full flex items-center gap-1.5">
<span class="material-symbols-outlined text-yellow-400 text-sm" style="font-size: 16px;">warning</span>
<span dir="ltr">75% Match</span>
</div>
</div>
<div class="relative h-64 w-full bg-gradient-to-b from-gray-100 to-gray-200 dark:from-[#3a3022] dark:to-[#2e251a] flex items-center justify-center p-6">
<div class="w-full h-full bg-contain bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-105" data-alt="Luxurious golden perfume bottle on a dark background" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDg7gWsA7sbz6ubwF99Wb3lq5i30W9Z53DtovacTcewdui_yviP4Xh8nbIX851eLFwX-AFtbhDURHHalNL8Y2iPaP8ehDpcGCugOKCAZgumcMTxgKL5u85x81r8EjqwOsoI42fSf-mT8uFWKTKitcsNB7yxfIGdUzOOjJMOLWKH7O8P0YlCvgQ_RJWeGY-ebsv6gWyO8-_MYX0uee1hK_oO4jVQskYLDu255bGlHKK-n5YDx9GdLwQBDPhEBzbwGrz-CfArHZKUqsAy');">
</div>
<div class="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
</div>
<div class="p-5 flex flex-col gap-4">
<div class="flex flex-col gap-1">
<div class="flex justify-between items-start">
<p class="text-neutral-500 dark:text-[#c9b592] text-sm font-medium">الحرمين</p>
<button class="text-neutral-400 hover:text-red-500 transition-colors">
<span class="material-symbols-outlined" style="font-size: 20px;">favorite</span>
</button>
</div>
<h3 class="text-neutral-900 dark:text-white text-xl font-bold leading-tight">عنبر عود جولد إديشن</h3>
</div>
<div class="flex items-center gap-2 p-2.5 rounded-xl bg-neutral-50 dark:bg-[#5B4233]/50 border border-neutral-100 dark:border-white/5">
<div class="w-8 h-8 rounded-full bg-yellow-400/10 flex items-center justify-center shrink-0">
<span class="material-symbols-outlined text-yellow-500" style="font-size: 18px;">analytics</span>
</div>
<p class="text-xs text-neutral-600 dark:text-neutral-400 leading-snug">
                        هذا العطر <span class="text-yellow-600 dark:text-yellow-500 font-bold">جيد</span>، لكن قد يكون قوياً قليلاً لذوقك المسائي.
                    </p>
</div>
<div class="flex items-end justify-between pt-2">
<div class="flex flex-col">
<span class="text-neutral-400 text-sm line-through decoration-red-500/50 decoration-1">٣٠٠ ر.س</span>
<div class="flex items-baseline gap-1">
<span class="text-primary text-xl font-bold font-display">٢٥٠</span>
<span class="text-primary text-xs font-bold">ر.س</span>
</div>
</div>
<button class="bg-primary hover:bg-primary/90 active:scale-95 transition-all text-[#221c11] text-sm font-bold py-3 px-6 rounded-full shadow-glow flex items-center gap-2">
<span>أضف للسلة</span>
<span class="material-symbols-outlined" style="font-size: 18px;">shopping_bag</span>
</button>
</div>
</div>
</div>
<div class="absolute -inset-1 bg-gradient-to-r from-primary/20 to-transparent blur-2xl -z-10 opacity-50 pointer-events-none rounded-[3rem]"></div>
</div>

</body></html>

<!-- ==================== الواجهة 13: Perfume Card - Just Arrived Low Match ==================== -->
<!DOCTYPE html>
<html dir="rtl" lang="ar"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Perfume Card - Just Arrived Low Match</title>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=Noto+Sans+Arabic:wght@400;500;600;700&family=Manrope:wght@400;500;600;700&display=swap" rel="stylesheet"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=Noto+Sans+Arabic:wght@400;500;600;700&family=Manrope:wght@400;500;600;700&display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=Noto+Sans+Arabic:wght@400;500;600;700&family=Manrope:wght@400;500;600;700&display=swap" rel="stylesheet"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            colors: {
              "primary": "#c0841a",
              "background-light": "#F2F0EB",
              "background-dark": "#5B4233",
              "card-dark": "#332a19",
              "card-light": "#F2F0EB",
              "text-gold": "#c9b592",
              "text-gold-dark": "#9c8558",
              "text-main": "#5B4233",
              "danger-luxury": "#5c2b2b", // A muted, luxurious red
              "danger-text": "#ffcdcd",
            },
            fontFamily: {
              "display": ["Noto Sans Arabic", "Manrope", "sans-serif"]
            },
            borderRadius: {"DEFAULT": "1rem", "lg": "2rem", "xl": "3rem", "2xl": "4rem", "full": "9999px"},
            boxShadow: {
                'glow': '0 0 20px rgba(236, 156, 19, 0.15)',
            }
          },
        },
      }
    </script>
<style>body {
            font-family: 'Plus Jakarta Sans', sans-serif;
        }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  
    <style>
        :root {
            --cream-bg: #F2F0EB;
            --brown-text: #5B4233;
            --pink-light: #EEDDD8;
            --brown-medium: #A88B78;
            --gray-brown: #AFA393;
            --beige-light: #EBE1DD;
            --gradient-start: #2f6f73;
            --gradient-end: #c0841a;
            --safe-green: #10B981;
            --warning-orange: #F59E0B;
            --danger-red: #EF4444;
        }
    </style>
</head>
<body class="bg-background-light min-h-screen text-slate-900 antialiased selection:bg-primary selection:text-white overflow-x-hidden">
<div class="mx-auto w-full max-w-md min-h-screen relative flex flex-col pb-24">
<header class="pt-8 pb-4 px-6 flex items-center justify-between z-10">
<div class="flex flex-col">
<span class="text-primary text-sm font-medium tracking-wide uppercase">اكتشف الجديد</span>
<h1 class="text-2xl font-bold text-text-main leading-tight">وصل حديثاً</h1>
</div>
<button class="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-gray-200 shadow-sm">
<span class="material-symbols-outlined text-text-main text-[24px]">notifications</span>
</button>
</header>
<main class="flex-1 px-4 flex flex-col justify-center">
<div class="relative w-full bg-card-light rounded-2xl shadow-xl overflow-hidden group border border-black/5">
<div class="relative w-full aspect-[4/5] bg-[#e6e2da]">
<div class="absolute inset-0 bg-center bg-cover bg-no-repeat opacity-90 transition-transform duration-700 group-hover:scale-105" data-alt="Elegant amber perfume bottle on dark surface with dramatic lighting" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCiZ4qZWKWGv1c8Z851Uehm0say8ZNeGSMa-wJ7iWH2YgGUc1krWqqNjh9DjhXoBQ0jvSjX6UZ5zMLJjIcREjA2SWMtm5S7ipuQBam6IGFd8tGMplS7o_KPVyJ4t2nGl2DTOMNS7YhaRN5N2fdrtV6cX76zlU_ZB-dXoQnCg5F6rZYwuE467HiEsjoeg_OfI7P5KMFRXIeXMRG_B0QaryxB9FtJeizCg3tjY95Z5OHTqS2ddsiHHiuQQTiqVB4k8ny47U1VmC9tn5yv');">
</div>
<div class="absolute inset-0 bg-gradient-to-t from-card-light via-transparent to-black/30"></div>
<div class="absolute top-4 right-4 z-20">
<div class="bg-primary text-[#221c11] px-4 py-2 rounded-lg shadow-lg transform rotate-[-2deg] flex items-center gap-2 border-2 border-white/20">
<span class="material-symbols-outlined text-[20px] font-bold">auto_awesome</span>
<span class="text-sm font-bold tracking-tight">وصل حديثاً</span>
</div>
</div>
<div class="absolute top-4 left-4 z-20">
<div class="bg-danger-luxury/90 backdrop-blur-md border border-red-500/20 px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
<span class="material-symbols-outlined text-danger-text text-[18px]">warning</span>
<span class="text-xs font-medium text-danger-text dir-rtl">تطابق منخفض</span>
</div>
</div>
<div class="absolute bottom-6 left-6 z-20">
<div class="w-16 h-16 rounded-full bg-card-light/90 backdrop-blur-xl border border-black/5 flex items-center justify-center relative shadow-glow">
<svg class="w-full h-full -rotate-90" viewBox="0 0 36 36">
<path class="text-black/10" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" stroke-width="3"></path>
<path class="text-primary" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" stroke-dasharray="60, 100" stroke-width="3"></path>
</svg>
<div class="absolute flex flex-col items-center justify-center">
<span class="text-sm font-bold text-text-main">60%</span>
</div>
</div>
</div>
</div>
<div class="p-5 pt-2 relative">
<div class="mb-4">
<p class="text-text-gold-dark text-xs font-semibold tracking-widest uppercase mb-1">توم فورد</p>
<h2 class="text-2xl font-bold text-text-main mb-2 leading-tight">عود وود إنتنس</h2>
<div class="flex items-center gap-2 text-sm text-gray-500">
<span class="px-2 py-0.5 rounded-md bg-black/5 text-xs border border-black/5">50 مل</span>
<span>•</span>
<span>مركز جداً</span>
</div>
</div>
<p class="text-gray-600 text-sm leading-relaxed mb-6 opacity-90 line-clamp-2">
                        مزيج جريء من الأخشاب المدخنة والتوابل الشرقية. هذا العطر يتميز بطابع قوي قد لا يناسب جميع الأذواق اليومية.
                    </p>
<div class="bg-white rounded-xl p-3 mb-6 border border-black/5 shadow-sm">
<div class="flex items-center justify-between mb-2">
<span class="text-xs text-text-gold-dark font-medium">تحليل التطابق</span>
<span class="text-xs text-gray-400">بناءً على تفضيلاتك</span>
</div>
<div class="space-y-2">
<div class="flex items-center gap-3 text-xs">
<span class="text-text-main w-16 text-right">خشب الصندل</span>
<div class="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
<div class="h-full bg-primary w-[85%] rounded-full"></div>
</div>
</div>
<div class="flex items-center gap-3 text-xs">
<span class="text-text-main w-16 text-right">الحلاوة</span>
<div class="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
<div class="h-full bg-danger-luxury w-[30%] rounded-full"></div>
</div>
<span class="material-symbols-outlined text-[14px] text-danger-luxury" title="Mismatch">error</span>
</div>
</div>
</div>
<div class="flex gap-3 mt-auto">
<button class="flex-1 bg-primary hover:bg-[#d68b0f] text-[#221c11] text-sm font-bold py-3.5 px-6 rounded-full transition-colors flex items-center justify-center gap-2 shadow-lg shadow-primary/20">
<span>استكشف العطر</span>
<span class="material-symbols-outlined text-[18px]">arrow_back</span>
</button>
<button class="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center text-text-gold-dark hover:bg-black/5 transition-colors">
<span class="material-symbols-outlined text-[20px] font-variation-FILL">favorite</span>
</button>
</div>
</div>
</div>
<div class="mt-4 px-2 flex items-start gap-3 opacity-80">
<span class="material-symbols-outlined text-primary text-[20px] mt-0.5">lightbulb</span>
<p class="text-xs text-gray-500 leading-relaxed">
                    رغم أن نسبة التطابق متوسطة، إلا أن هذا العطر يعتبر خياراً متميزاً للمناسبات المسائية الخاصة لمحبي الروائح العميقة.
                </p>
</div>
</main>
<nav class="fixed bottom-0 w-full max-w-md bg-background-light/95 backdrop-blur-lg border-t border-black/5 pb-6 pt-2 px-6 flex justify-between items-center z-50">
<div class="flex flex-col items-center gap-1 text-primary">
<span class="material-symbols-outlined text-[24px]">home</span>
<span class="text-[10px] font-medium">الرئيسية</span>
</div>
<div class="flex flex-col items-center gap-1 text-gray-400">
<span class="material-symbols-outlined text-[24px]">search</span>
<span class="text-[10px] font-medium">بحث</span>
</div>
<div class="flex flex-col items-center gap-1 text-gray-400">
<span class="material-symbols-outlined text-[24px]">person</span>
<span class="text-[10px] font-medium">حسابي</span>
</div>
</nav>
</div>
</body></html>

<!-- ==================== الواجهة 14: Ask Seba - Primary CTA Button ==================== -->
<!DOCTYPE html>
<html dir="rtl" lang="ar"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Ask Seba - Primary CTA Button</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=Noto+Sans+Arabic:wght@400;500;600;700&family=Manrope:wght@400;500;600;700&display=swap" rel="stylesheet"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=Noto+Sans+Arabic:wght@400;500;600;700&family=Manrope:wght@400;500;600;700&display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=Noto+Sans+Arabic:wght@400;500;600;700&family=Manrope:wght@400;500;600;700&display=swap" rel="stylesheet"/>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
    </style>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#c0841a",
                        "background-light": "#F2F0EB",
                        "background-dark": "#5B4233",
                        "brand-teal": "#2f6f73",
                        "brand-gold": "#c0841a",
                        "brand-brown": "#291d12", // Dark brown for text
                    },
                    fontFamily: {
                        "display": ["Noto Sans Arabic", "Manrope", "sans-serif"],
                        "body": ["Noto Sans Arabic", "Manrope", "sans-serif"],
                    },
                    borderRadius: {"DEFAULT": "1rem", "lg": "2rem", "xl": "3rem", "full": "9999px"},
                    backgroundImage: {
                        'luxury-gradient': 'linear-gradient(105deg, #2f6f73 0%, #c0841a 100%)',
                    }
                },
            },
        }
    </script>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  
    <style>
        :root {
            --cream-bg: #F2F0EB;
            --brown-text: #5B4233;
            --pink-light: #EEDDD8;
            --brown-medium: #A88B78;
            --gray-brown: #AFA393;
            --beige-light: #EBE1DD;
            --gradient-start: #2f6f73;
            --gradient-end: #c0841a;
            --safe-green: #10B981;
            --warning-orange: #F59E0B;
            --danger-red: #EF4444;
        }
    </style>
</head>
<body class="bg-background-light text-slate-900 font-display antialiased overflow-x-hidden selection:bg-brand-gold selection:text-white">
<div class="relative min-h-screen w-full flex flex-col items-center justify-center p-6">
<div class="absolute inset-0 overflow-hidden pointer-events-none">
<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-gold/10 rounded-full blur-[100px]" data-alt="Soft ambient golden glow in background"></div>
</div>
<div class="absolute top-10 w-full text-center z-10 opacity-60">
<p class="text-brand-teal text-sm font-medium tracking-wide uppercase">CTA Button • Variant 1: Primary State</p>
</div>
<div class="relative z-10 flex flex-col items-center gap-12 max-w-sm w-full">
<div class="text-center space-y-4 mb-8">
<div class="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-brand-teal/20 to-brand-gold/20 flex items-center justify-center mb-6 ring-1 ring-brand-brown/10 backdrop-blur-sm">
<span class="material-symbols-outlined text-4xl text-brand-gold">fragrance</span>
</div>
<h1 class="text-3xl font-bold text-brand-brown leading-tight">
                    اكتشف جوهرك
                </h1>
<p class="text-[#5c4d43] text-base leading-relaxed max-w-[280px] mx-auto">
                    دعنا نساعدك في العثور على العطر المثالي الذي يعبر عن شخصيتك الفريدة.
                </p>
</div>
<button class="group relative flex w-[200px] h-[48px] cursor-pointer items-center justify-center overflow-hidden rounded-full bg-luxury-gradient transition-all duration-300 hover:shadow-[0_0_20px_rgba(193,132,26,0.4)] hover:-translate-y-0.5 active:scale-95 active:shadow-inner">
<div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:animate-[shimmer_1.5s_infinite]"></div>
<div class="relative flex items-center justify-center gap-2 px-6">
<span class="text-brand-brown text-[15px] font-bold leading-none tracking-wide">
                        اكتشف عطرك
                    </span>
<span class="material-symbols-outlined text-brand-brown text-[20px] transition-transform duration-300 group-hover:-translate-x-1">
                        arrow_back
                    </span>
</div>
</button>
</div>
<div class="absolute bottom-2 left-1/2 -translate-x-1/2 w-[134px] h-[5px] bg-gray-600/30 rounded-full"></div>
</div>
<style>
        @keyframes shimmer {
            100% {
                transform: translateX(100%);
            }
        }
    </style>

</body></html>

<!-- ==================== الواجهة 15: Perfume Like Confirmation - Light Theme ==================== -->
<!DOCTYPE html>
<html dir="rtl" lang="ar"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Perfume Like Confirmation - Light Theme</title>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=Noto+Sans+Arabic:wght@400;500;600;700&family=Manrope:wght@400;500;600;700&display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=Noto+Sans+Arabic:wght@400;500;600;700&family=Manrope:wght@400;500;600;700&display=swap" rel="stylesheet"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=Noto+Sans+Arabic:wght@400;500;600;700&family=Manrope:wght@400;500;600;700&display=swap" rel="stylesheet"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script id="tailwind-config">
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        "primary": "#c0841a",
                        "primary-light": "#d47a38", 
                        "background-light": "#F2F0EB","background-dark": "#211811",
                        "surface-dark": "#2c2018",
                        "text-main": "#2c2018",},
                    fontFamily: {
                        "display": ["Noto Sans Arabic", "Manrope", "sans-serif"]
                    },
                    borderRadius: {"DEFAULT": "1rem", "lg": "2rem", "xl": "3rem", "full": "9999px"},
                    boxShadow: {
                        'glow': '0 0 15px rgba(184, 88, 20, 0.15)',
                        'soft': '0 10px 40px -10px rgba(44, 32, 24, 0.1)',
                    }
                },
            },
        }
    </script>
<style>body {
            font-family: 'Manrope', 'Noto Sans', sans-serif;
        }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  
    <style>
        :root {
            --cream-bg: #F2F0EB;
            --brown-text: #5B4233;
            --pink-light: #EEDDD8;
            --brown-medium: #A88B78;
            --gray-brown: #AFA393;
            --beige-light: #EBE1DD;
            --gradient-start: #2f6f73;
            --gradient-end: #c0841a;
            --safe-green: #10B981;
            --warning-orange: #F59E0B;
            --danger-red: #EF4444;
        }
    </style>
</head>
<body class="bg-background-light min-h-screen w-full flex flex-col items-center justify-center overflow-x-hidden relative text-text-main">
<div class="absolute inset-0 w-full h-full pointer-events-none z-0">
<div class="absolute top-[-10%] left-[-20%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]"></div>
<div class="absolute bottom-[-10%] right-[-10%] w-[300px] h-[300px] bg-primary/5 rounded-full blur-[80px]"></div>
</div>
<main class="w-full max-w-md h-full min-h-[600px] flex flex-col justify-between p-6 relative z-10">
<div class="flex flex-col items-center pt-10 gap-6">
<div class="w-12 h-1 bg-primary/20 rounded-full mb-4"></div> 
<div class="relative w-48 h-64 rounded-t-full rounded-b-xl overflow-hidden border border-white/50 shadow-soft bg-surface-dark group transform transition-all hover:scale-[1.02] duration-500">
<div class="absolute inset-0 bg-gradient-to-b from-transparent to-background-dark/80 z-10"></div>
<img alt="Perfume Bottle" class="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" data-alt="Luxurious amber perfume bottle on dark background with dramatic lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvGd1lDL92aWSJn2KWfSzIqXfkhz8wKe6DcG6D39grXBtlJFrRqHTB0klwMT-d7qsLkp7EVdVhznJWnMuLhxW9sz0efur9e04vs8mHx-SJSNXW4In7Pw_aqcza32Q0m0MOTiK7y6zcaX1cCP99dz8qI5m4JniU5VCxMrYoEcc-hUlDcm62KSLYnP7HulR7ImgMm3Ofv1XVjjWVBSZ7vdXAV9ScBXnOuvaiZYvRRCzwitSw4ufQR6J9ADEUQjd6uDa7gjnXLEQ16ZIx"/>
<div class="absolute bottom-4 right-4 z-20 text-right">
<p class="text-primary-light text-xs font-bold tracking-widest uppercase mb-1 drop-shadow-md">توصية خاصة</p>
<h2 class="text-white text-xl font-bold leading-tight drop-shadow-md">عنبر ملكي</h2>
</div>
</div>
<div class="text-center space-y-2 max-w-[280px]">
<h1 class="text-2xl font-bold text-surface-dark tracking-tight">هل أعجبك هذا العطر؟</h1>
<p class="text-surface-dark/70 text-sm leading-relaxed font-medium">
                    تم اختيار هذا العطر بناءً على تفضيلاتك للأخشاب والتوابل الشرقية.
                </p>
</div>
</div>
<div class="w-full pb-8 flex flex-col items-center gap-4">
<button class="w-full max-w-[320px] h-14 rounded-full bg-primary text-white font-bold text-lg shadow-glow hover:shadow-lg hover:bg-primary-light transition-all duration-300 flex items-center justify-center gap-2 mb-2">
<span>إضافة إلى مجموعتي</span>
<span class="material-symbols-outlined text-[20px]">favorite</span>
</button>
<button class="group/btn relative w-[200px] h-12 flex items-center justify-center gap-2 rounded-full border-[1.5px] border-primary bg-transparent text-primary hover:bg-primary/5 active:bg-primary/10 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background-light">
<span class="material-symbols-outlined text-[20px] transition-transform group-hover/btn:rotate-180 duration-500">tune</span>
<span class="text-base font-semibold tracking-wide">تعديل التفضيلات</span>
</button>
<button class="text-surface-dark/40 text-sm font-medium hover:text-surface-dark transition-colors mt-2">
                تخطي هذه الخطوة
            </button>
</div>
</main>

</body></html>

<!-- ==================== الواجهة 16: Ask Seba - Error State ==================== -->
<!DOCTYPE html>
<html class="dark" dir="rtl" lang="ar"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Ask Seba - Error State</title>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=Noto+Sans+Arabic:wght@400;500;600;700&family=Manrope:wght@400;500;600;700&display=swap" rel="stylesheet"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=Noto+Sans+Arabic:wght@400;500;600;700&family=Manrope:wght@400;500;600;700&display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=Noto+Sans+Arabic:wght@400;500;600;700&family=Manrope:wght@400;500;600;700&display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=Noto+Sans+Arabic:wght@400;500;600;700&family=Manrope:wght@400;500;600;700&display=swap" rel="stylesheet"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#c0841a",
                        "background-light": "#F2F0EB",
                        "background-dark": "#5B4233",
                        "surface-dark": "#2c241b",
                        "text-dark": "#1a1612",
                    },
                    fontFamily: {
                        "display": ["Noto Sans Arabic", "Manrope", "sans-serif"],
                        "body": ["Noto Sans Arabic", "Manrope", "sans-serif"],
                    },
                    borderRadius: {"DEFAULT": "1rem", "lg": "2rem", "xl": "3rem", "full": "9999px"},
                },
            },
        }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }.no-scrollbar::-webkit-scrollbar {
            display: none;
        }
        .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  
    <style>
        :root {
            --cream-bg: #F2F0EB;
            --brown-text: #5B4233;
            --pink-light: #EEDDD8;
            --brown-medium: #A88B78;
            --gray-brown: #AFA393;
            --beige-light: #EBE1DD;
            --gradient-start: #2f6f73;
            --gradient-end: #c0841a;
            --safe-green: #10B981;
            --warning-orange: #F59E0B;
            --danger-red: #EF4444;
        }
    </style>
</head>
<body class="bg-background-light text-text-dark font-display antialiased selection:bg-primary selection:text-white">
<div class="relative flex h-full min-h-screen w-full flex-col overflow-hidden max-w-md mx-auto shadow-2xl bg-background-light">
<header class="flex items-center justify-between p-4 sticky top-0 z-50 bg-background-light/95 backdrop-blur-sm">
<button class="flex size-10 items-center justify-center rounded-full text-text-dark hover:bg-black/5 transition-colors cursor-pointer active:scale-95">
<span class="material-symbols-outlined text-2xl">arrow_forward</span>
</button>
</header>
<main class="flex flex-1 flex-col items-center justify-center px-6 py-4 pb-12 w-full animate-in fade-in duration-700">
<div class="flex flex-col items-center gap-8 w-full">
<div class="relative flex items-center justify-center w-full max-w-[280px] aspect-square">
<div class="absolute inset-0 bg-primary/20 rounded-full blur-3xl opacity-40 animate-pulse"></div>
<div class="relative w-full h-full bg-center bg-no-repeat bg-contain rounded-2xl overflow-hidden" data-alt="Artistic illustration of an empty crystal perfume bottle lying on its side" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAPJXsMovsKMA5owYqcjLR_Hnjx1OFhlLSiHBJjWCaoqUcSiQ0yVlJTWU__PSywhzAgPl8TIwYW96kaVo5rSatrRAG_dynBEhPBGXzfTWEUCWEgTv9DeFqveUfxoob6PcMOmtdpUxsK21U0DnQu_5Cr9703VZf-U8te0N_UQIsjeebf3vZDtnvhzmgCruC3ENpKt0hOUzy7OsmZdYQwzltw8xcis4IU_SZTBwP7pENtv7CGo9Gw2xuqJc6IAJdHun5kXztQCkThfw6A");'>
<div class="absolute inset-0 bg-gradient-to-t from-background-light/30 via-transparent to-transparent opacity-40"></div>
</div>
</div>
<div class="flex max-w-[320px] flex-col items-center gap-4 text-center">
<h1 class="text-text-dark text-2xl md:text-3xl font-bold leading-tight tracking-tight">
                        نعتذر، المتجر مغلق مؤقتاً
                    </h1>
<p class="text-gray-600 text-sm md:text-base font-normal leading-relaxed">
                        يبدو أن خبير العطور يواجه صعوبة في الوصول إلى المكونات حالياً. يرجى المحاولة مرة أخرى بعد قليل.
                    </p>
</div>
<div class="flex flex-col gap-4 w-full max-w-[280px] pt-4">
<button class="flex w-full cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-full h-12 px-6 bg-primary hover:bg-primary/90 active:bg-primary/80 transition-all text-white font-bold text-base shadow-lg shadow-primary/20 hover:shadow-primary/40">
<span class="material-symbols-outlined text-[20px]">refresh</span>
<span class="truncate">إعادة المحاولة</span>
</button>
<button class="flex w-full cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-full h-12 px-6 bg-transparent border border-primary/40 hover:bg-primary/5 active:bg-primary/10 transition-all text-primary font-medium text-sm">
<span class="material-symbols-outlined text-[18px]">support_agent</span>
<span class="truncate">تواصل مع المساعدة</span>
</button>
</div>
</div>
</main>
<div class="h-6 w-full"></div>
</div>
</body></html>

<!-- ==================== الواجهة 17: Ask Seba - No Results ==================== -->
<!DOCTYPE html>
<html dir="rtl" lang="ar"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Ask Seba - No Results</title>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=Noto+Sans+Arabic:wght@400;500;600;700&family=Manrope:wght@400;500;600;700&display=swap" rel="stylesheet"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=Noto+Sans+Arabic:wght@400;500;600;700&family=Manrope:wght@400;500;600;700&display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=Noto+Sans+Arabic:wght@400;500;600;700&family=Manrope:wght@400;500;600;700&display=swap" rel="stylesheet"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#c0841a",
                        "background-light": "#F2F0EB",
                        "background-dark": "#5B4233",
                        "surface-dark": "#2d2416",
                    },
                    fontFamily: {
                        "display": ["Noto Sans Arabic", "Manrope", "sans-serif"],
                        "body": ["Noto Sans Arabic", "Manrope", "sans-serif"],
                    },
                    borderRadius: {"DEFAULT": "1rem", "lg": "2rem", "xl": "3rem", "full": "9999px"},
                },
            },
        }
    </script>
<style>
        body {
            font-family: 'Noto Sans Arabic', 'Manrope', sans-serif;
        }
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .material-symbols-outlined.filled {
            font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  
    <style>
        :root {
            --cream-bg: #F2F0EB;
            --brown-text: #5B4233;
            --pink-light: #EEDDD8;
            --brown-medium: #A88B78;
            --gray-brown: #AFA393;
            --beige-light: #EBE1DD;
            --gradient-start: #2f6f73;
            --gradient-end: #c0841a;
            --safe-green: #10B981;
            --warning-orange: #F59E0B;
            --danger-red: #EF4444;
        }
    </style>
</head>
<body class="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white min-h-screen flex flex-col overflow-x-hidden">
<header class="sticky top-0 z-50 w-full bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md border-b border-primary/10 transition-colors">
<div class="flex items-center justify-between px-4 py-3">
<button class="flex items-center justify-center w-10 h-10 rounded-full text-slate-900 dark:text-white hover:bg-black/5 dark:hover:bg-white/5 active:bg-black/10 dark:active:bg-white/10 transition-colors">
<span class="material-symbols-outlined text-2xl">arrow_forward</span>
</button>
<h1 class="text-lg font-bold text-slate-900 dark:text-white flex-1 text-center pl-10">اسأل صبا</h1>
</div>
</header>
<main class="flex-1 flex flex-col items-center justify-center px-6 py-8 w-full max-w-md mx-auto relative z-0">
<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10"></div>
<div class="relative mb-8 group">
<div class="w-48 h-48 rounded-full border border-primary/20 bg-gradient-to-b from-white to-[#E5E0D8] dark:from-surface-dark dark:to-background-dark flex items-center justify-center relative z-10 shadow-2xl shadow-primary/10 dark:shadow-black/50 transition-all">
<div class="w-full h-full rounded-full overflow-hidden flex items-center justify-center bg-cover bg-center opacity-80" data-alt="Abstract golden smoke and light forming a vague bottle shape on dark background" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDVD-q4RV7ccfsuhVWZ5sfGmee6ta0zFhyNKIozsuCcEJz2Gb8AozRc14GuDzVVk7eLxnQl1u8zSwmb0hhKpsuGxOJ-tUoeQCHMUj7VjplrbUF0YXyLSiwG_tik1dWx5XUxXyF6rVQCzYtBJqA3EyZ45YzI8zPVUo_wQWJK_WPyERaWIIohNO6aiYCWzw3OGvRt5yG_M_x1NiX9EVPu-XZpAEVQtbNFV82ZEJkMtWA203WiHkEJMvsNtFmvGjkF7MTpZ5SzhLB1xQ1v');">
<div class="absolute inset-0 bg-white/20 dark:bg-background-dark/40 mix-blend-overlay dark:mix-blend-multiply"></div>
</div>
<span class="material-symbols-outlined text-6xl text-primary/80 absolute drop-shadow-lg">search_off</span>
</div>
<div class="absolute top-0 right-8 w-3 h-3 bg-primary rounded-full shadow-[0_0_10px_rgba(236,156,19,0.8)] z-20"></div>
</div>
<div class="flex flex-col items-center gap-3 mb-10 text-center">
<h2 class="text-2xl font-bold text-slate-900 dark:text-white leading-tight">لم يتم العثور على نتائج</h2>
<p class="text-slate-600 dark:text-white/60 text-sm font-normal leading-relaxed max-w-[280px]">
                ذوقك فريد جداً. جرب تغيير بعض التفضيلات لرؤية اقتراحاتنا المميزة.
            </p>
</div>
<div class="w-full flex flex-col gap-4">
<button class="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 px-6 bg-primary hover:bg-primary/90 active:scale-[0.98] transition-all shadow-lg shadow-primary/20">
<span class="text-white text-base font-bold tracking-wide">تعديل البحث</span>
</button>
<button class="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 px-6 bg-transparent border border-primary/30 text-primary hover:bg-primary/5 active:scale-[0.98] transition-all">
<span class="text-base font-bold tracking-wide">العودة للرئيسية</span>
</button>
</div>
</main>
<nav class="fixed bottom-0 w-full bg-white dark:bg-surface-dark border-t border-primary/20 pb-safe pt-2 px-4 z-50 transition-colors">
<div class="flex justify-between items-end pb-4 max-w-md mx-auto">
<a class="flex flex-1 flex-col items-center justify-end gap-1.5 text-primary/50 hover:text-primary transition-colors group" href="#">
<span class="material-symbols-outlined text-2xl group-hover:scale-110 transition-transform">home</span>
<span class="text-[10px] font-medium tracking-wide">الرئيسية</span>
</a>
<a class="flex flex-1 flex-col items-center justify-end gap-1.5 text-slate-900 dark:text-white relative" href="#">
<div class="absolute -top-10 bg-primary rounded-full p-3 shadow-lg shadow-primary/30 border-4 border-background-light dark:border-background-dark transform -translate-y-2 transition-colors">
<span class="material-symbols-outlined text-2xl filled text-white">search</span>
</div>
<div class="h-6"></div> 
<span class="text-[10px] font-medium tracking-wide text-primary">اكتشف</span>
</a>
<a class="flex flex-1 flex-col items-center justify-end gap-1.5 text-primary/50 hover:text-primary transition-colors group" href="#">
<span class="material-symbols-outlined text-2xl group-hover:scale-110 transition-transform">favorite</span>
<span class="text-[10px] font-medium tracking-wide">المفضلة</span>
</a>
<a class="flex flex-1 flex-col items-center justify-end gap-1.5 text-primary/50 hover:text-primary transition-colors group" href="#">
<span class="material-symbols-outlined text-2xl group-hover:scale-110 transition-transform">person</span>
<span class="text-[10px] font-medium tracking-wide">حسابي</span>
</a>
</div>
</nav>
<div class="h-24 w-full"></div>
</body></html>

<!-- ==================== الواجهة 18: Ask Seba - Permission Error ==================== -->
<!DOCTYPE html>
<html dir="rtl" lang="ar"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Ask Seba - Permission Error</title>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=Noto+Sans+Arabic:wght@400;500;600;700&family=Manrope:wght@400;500;600;700&display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=Noto+Sans+Arabic:wght@400;500;600;700&family=Manrope:wght@400;500;600;700&display=swap" rel="stylesheet"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#c0841a",
                        "background-light": "#F2F0EB",
                        "background-dark": "#5B4233",
                    },
                    fontFamily: {
                        "display": ["Noto Sans Arabic", "Manrope", "sans-serif"]
                    },
                    borderRadius: {"DEFAULT": "1rem", "lg": "2rem", "xl": "3rem", "full": "9999px"},
                    animation: {
                        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                    }
                },
            },
        }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }.text-gradient-gold {
            background: linear-gradient(to bottom right, #ffffff, #c0841a);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  
    <style>
        :root {
            --cream-bg: #F2F0EB;
            --brown-text: #5B4233;
            --pink-light: #EEDDD8;
            --brown-medium: #A88B78;
            --gray-brown: #AFA393;
            --beige-light: #EBE1DD;
            --gradient-start: #2f6f73;
            --gradient-end: #c0841a;
            --safe-green: #10B981;
            --warning-orange: #F59E0B;
            --danger-red: #EF4444;
        }
    </style>
</head>
<body class="bg-background-light font-display text-background-dark overflow-hidden min-h-screen flex flex-col relative group/design-root">
<div class="absolute inset-0 z-0 opacity-5 pointer-events-none mix-blend-multiply" data-alt="Abstract dark luxury texture background" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBAD_VS2cR2R_RJwf9R97C_PrFvjEzN9eL8XYDS3jh65ljB7LBS2rhxN1YDYWyTy9iW3gFTvqTHVtKfJWQGsqd153bcUZA-4Wkc7sXPaJO2qBzr-S0v0TUcqadWBmwJgDWLHa2up9GbS-FdjGRrIHC-8xAd48pguOwCeshj6kM30WKjsj5YVo24BNOP-fE-1ud1kdne4NR8ECp0tSPeMvBWs0LFJIHd3fGaFec2Awtfkc4QWAizaxCd_dadaGVz51KIAv0TOc4NNNwb'); background-size: cover; background-position: center;">
</div>
<div class="relative z-10 flex items-center p-4 justify-between w-full">
<button class="text-background-dark/80 hover:text-background-dark flex size-12 shrink-0 items-center justify-center rounded-full hover:bg-black/5 transition-colors cursor-pointer">
<span class="material-symbols-outlined text-3xl auto-mirror">arrow_forward</span>
</button>
<h2 class="text-background-dark/90 text-lg font-bold leading-tight tracking-wide">خطأ في الصلاحيات</h2>
<div class="size-12 shrink-0"></div> 
</div>
<div class="relative z-10 flex-1 flex flex-col items-center justify-center px-6 w-full max-w-md mx-auto -mt-10">
<div class="relative mb-10 group">
<div class="absolute inset-0 bg-primary/20 rounded-full blur-2xl transform scale-150 animate-pulse-slow"></div>
<div class="absolute inset-0 border border-primary/20 rounded-full transform scale-125 opacity-50"></div>
<div class="relative flex items-center justify-center size-32 rounded-full bg-gradient-to-b from-[#3a2e1e] to-[#5B4233] border border-primary/30 shadow-[0_0_30px_rgba(236,156,19,0.15)]">
<div class="absolute inset-0 rounded-full bg-primary/5"></div>
<span class="material-symbols-outlined text-primary text-6xl drop-shadow-[0_2px_10px_rgba(236,156,19,0.4)]">
                    lock_open
                </span>
<div class="absolute -bottom-1 -right-1 bg-red-500/90 text-white size-8 rounded-full flex items-center justify-center border-2 border-background-light">
<span class="material-symbols-outlined text-lg">exclamation</span>
</div>
</div>
</div>
<div class="flex flex-col items-center gap-4 text-center mb-12">
<h1 class="text-3xl font-bold text-background-dark leading-tight">
                مطلوب إذن الوصول
            </h1>
<p class="text-background-dark/70 text-base font-medium leading-relaxed max-w-[320px]">
                للحصول على توصية دقيقة للعطور بناءً على مجموعتك، يرجى السماح للكاميرا بالوصول لمسح الزجاجة.
            </p>
</div>
<div class="flex flex-col gap-4 w-full">
<button class="relative flex w-full items-center justify-center overflow-hidden rounded-full h-14 px-6 bg-primary text-white text-lg font-bold tracking-wide shadow-lg shadow-primary/20 hover:bg-[#d68a0e] transition-all active:scale-[0.98] group">
<span class="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
<span class="relative flex items-center gap-2">
                    منح الإذن
                    <span class="material-symbols-outlined text-xl">check_circle</span>
</span>
</button>
<button class="flex w-full items-center justify-center rounded-full h-12 px-6 bg-transparent text-background-dark/50 text-base font-bold hover:text-background-dark hover:bg-black/5 transition-colors">
<span>إلغاء</span>
</button>
</div>
</div>
<div class="relative z-10 h-6 w-full flex justify-center opacity-30 pb-4">
<div class="h-1 w-32 rounded-full bg-background-dark/20"></div>
</div>

</body></html>

<!-- ==================== الواجهة 19: صفحة العطر ==================== -->
<!DOCTYPE html>
<html dir="rtl" lang="ar"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>صفحة العطر</title>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=Noto+Sans+Arabic:wght@400;500;600;700&family=Manrope:wght@400;500;600;700&display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=Noto+Sans+Arabic:wght@400;500;600;700&family=Manrope:wght@400;500;600;700&display=swap" rel="stylesheet"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=Noto+Sans+Arabic:wght@400;500;600;700&family=Manrope:wght@400;500;600;700&display=swap" rel="stylesheet"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script id="tailwind-config">
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        "primary": "#c0841a",
                        "background-light": "#F2F0EB",
                        "surface-light": "#ffffff",
                        "text-main": "#1c1917", // Stone 900
                        "text-muted": "#57534e", // Stone 600
                        "text-subtle": "#a8a29e", // Stone 400
                        "border-subtle": "#e7e5e4", // Stone 200
                        "background-dark": "#5B4233", // Kept for button text reference
                    },
                    fontFamily: {
                        "display": ["Noto Sans Arabic", "Manrope", "sans-serif"],
                        "sans": ["Noto Sans Arabic", "Manrope", "sans-serif"],
                    },
                    borderRadius: {"DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "2xl": "1rem", "full": "9999px"},
                },
            },
        }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .material-symbols-outlined.filled {
            font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }.no-scrollbar::-webkit-scrollbar {
            display: none;
        }
        .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
    </style>
<style>
        body {
            min-height: max(884px, 100dvh);
        }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  
    <style>
        :root {
            --cream-bg: #F2F0EB;
            --brown-text: #5B4233;
            --pink-light: #EEDDD8;
            --brown-medium: #A88B78;
            --gray-brown: #AFA393;
            --beige-light: #EBE1DD;
            --gradient-start: #2f6f73;
            --gradient-end: #c0841a;
            --safe-green: #10B981;
            --warning-orange: #F59E0B;
            --danger-red: #EF4444;
        }
    </style>
</head>
<body class="bg-background-light text-text-main font-display antialiased selection:bg-primary/30">
<div class="relative flex min-h-screen w-full flex-col overflow-hidden mx-auto max-w-[480px] shadow-2xl pb-[140px]">
<header class="sticky top-0 z-40 flex items-center justify-between bg-background-light/80 backdrop-blur-md p-4 transition-all">
<button class="flex size-10 items-center justify-center rounded-full bg-black/5 text-text-main active:bg-black/10 transition-colors">
<span class="material-symbols-outlined text-2xl">arrow_forward</span>
</button>
<h1 class="text-base font-bold leading-tight tracking-wide text-text-main/90">شانيل رقم 5</h1>
<button class="flex size-10 items-center justify-center rounded-full bg-transparent text-text-main active:bg-black/10 transition-colors">
<span class="material-symbols-outlined text-2xl">ios_share</span>
</button>
</header>
<section class="relative flex flex-col items-center pt-4 pb-8 px-6">
<div class="absolute top-10 left-1/2 -translate-x-1/2 w-64 h-64 bg-primary/20 rounded-full blur-[80px] pointer-events-none"></div>
<div class="relative w-full flex flex-col items-center">
<div class="relative z-10 w-40 h-52 mb-6">
<div class="w-full h-full bg-contain bg-center bg-no-repeat drop-shadow-xl" data-alt="Elegant glass perfume bottle with amber liquid on dark background" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCxt6LMnDrkvTi2ifX7DDdz1UbMWa5-9WLZMWMEKDmRroOAeJZU4P3lF4Di6UCSO0SvfXzKoWb6dHVbJ0IS4XjG0OErcMhRcMILykIICB_t5RnqidWQ4kO2zcgS3NFW-sQuo1OBcCwyERUBbjD-gns1VIKi0VJsuN_FGkzFB2yjhbgHOlZEzyBbZuyNeB1WGz2F4K__r-pV_yjKiqFMXOLU0s51NQDDH7K-QV49kzv4lpOe_VKFAiktQfwyYofME6FDhuiGkOh5KyLo');">
</div>
</div>
<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] rounded-full border border-black/5 bg-gradient-to-b from-white/40 to-transparent pointer-events-none"></div>
<div class="relative z-20 flex flex-col items-center gap-2">
<div class="relative flex items-center justify-center size-24">
<svg class="size-full -rotate-90" viewBox="0 0 36 36">
<path class="text-black/5" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" stroke-width="2.5"></path>
<path class="text-primary drop-shadow-[0_0_10px_rgba(236,156,19,0.3)]" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" stroke-dasharray="87, 100" stroke-linecap="round" stroke-width="2.5"></path>
</svg>
<div class="absolute flex flex-col items-center">
<span class="text-2xl font-bold text-text-main tracking-tighter">87%</span>
</div>
</div>
<div class="flex flex-col items-center gap-1 mt-2">
<span class="text-xs uppercase tracking-wider text-primary font-bold">توافق ذكي</span>
<div class="flex items-center gap-1.5 bg-green-100 border border-green-200 px-3 py-1 rounded-full">
<span class="text-[10px] text-green-600">●</span>
<span class="text-xs font-medium text-green-800">خيار آمن</span>
</div>
</div>
</div>
</div>
</section>
<section class="px-5 mt-2 space-y-5">
<div class="flex items-center justify-between">
<h3 class="text-lg font-bold text-text-main">الهرم العطري</h3>
<span class="text-xs text-text-subtle">تحليل المكونات</span>
</div>
<div class="relative flex flex-col gap-4 pl-0 border-r-0 border-black/10">
<div class="absolute right-[19px] top-4 bottom-4 w-0.5 bg-gradient-to-b from-primary via-primary/30 to-transparent opacity-30"></div>
<div class="relative flex gap-4">
<div class="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-surface-light border border-primary/30 shadow-[0_4px_10px_rgba(236,156,19,0.1)] text-primary">
<span class="material-symbols-outlined text-[20px]">wb_sunny</span>
</div>
<div class="flex-1 rounded-xl bg-surface-light border border-border-subtle p-4 shadow-sm">
<div class="flex justify-between items-start mb-2">
<div>
<h4 class="text-sm font-bold text-text-main mb-0.5">الافتتاحية</h4>
<p class="text-xs text-text-subtle">الانطباع الأول</p>
</div>
<span class="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded">90%</span>
</div>
<p class="text-sm text-text-muted leading-relaxed mb-3">ليمون صقلي، برغموت، ألدهيدات</p>
<div class="h-1.5 w-full bg-border-subtle rounded-full overflow-hidden">
<div class="h-full bg-gradient-to-l from-primary to-primary/60 w-[90%] rounded-full"></div>
</div>
</div>
</div>
<div class="relative flex gap-4">
<div class="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-surface-light border border-border-subtle text-text-subtle">
<span class="material-symbols-outlined text-[20px]">local_florist</span>
</div>
<div class="flex-1 rounded-xl bg-surface-light border border-border-subtle p-4 shadow-sm">
<div class="flex justify-between items-start mb-2">
<div>
<h4 class="text-sm font-bold text-text-main mb-0.5">القلب</h4>
<p class="text-xs text-text-subtle">جوهر العطر</p>
</div>
<span class="text-xs font-bold text-text-muted bg-black/5 px-2 py-1 rounded">85%</span>
</div>
<p class="text-sm text-text-muted leading-relaxed mb-3">ياسمين، ورد، يلانج يلانج</p>
<div class="h-1.5 w-full bg-border-subtle rounded-full overflow-hidden">
<div class="h-full bg-black/20 w-[85%] rounded-full"></div>
</div>
</div>
</div>
<div class="relative flex gap-4">
<div class="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-surface-light border border-border-subtle text-text-subtle">
<span class="material-symbols-outlined text-[20px]">water_drop</span>
</div>
<div class="flex-1 rounded-xl bg-surface-light border border-border-subtle p-4 shadow-sm">
<div class="flex justify-between items-start mb-2">
<div>
<h4 class="text-sm font-bold text-text-main mb-0.5">القاعدة</h4>
<p class="text-xs text-text-subtle">الأثر الباقي</p>
</div>
<span class="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded">95%</span>
</div>
<p class="text-sm text-text-muted leading-relaxed mb-3">نجيل الهند، خشب الصندل، فانيليا</p>
<div class="h-1.5 w-full bg-border-subtle rounded-full overflow-hidden">
<div class="h-full bg-gradient-to-l from-primary to-primary/60 w-[95%] rounded-full"></div>
</div>
</div>
</div>
</div>
</section>
<div class="h-8"></div>
<div class="fixed bottom-[68px] left-0 right-0 z-40 px-4 pb-2 w-full max-w-[480px] mx-auto bg-gradient-to-t from-background-light via-background-light to-transparent pt-8">
<div class="flex items-center gap-3">
<button class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-surface-light border border-border-subtle text-text-main shadow-sm active:scale-95 transition-transform">
<span class="material-symbols-outlined text-2xl">favorite</span>
</button>
<button class="flex h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-surface-light border border-primary/30 text-primary font-bold text-sm shadow-sm active:bg-primary/5 transition-colors">
<span class="material-symbols-outlined text-[20px]">science</span>
                    عينة
                </button>
<button class="flex h-12 flex-[1.5] items-center justify-center gap-2 rounded-xl bg-primary text-background-dark font-extrabold text-sm shadow-[0_4px_20px_rgba(236,156,19,0.3)] active:scale-[0.98] transition-all">
<span class="material-symbols-outlined text-[20px] filled">shopping_bag</span>
                    اشترِ الآن
                </button>
</div>
</div>
<nav class="fixed bottom-0 left-0 right-0 z-50 h-[68px] border-t border-border-subtle bg-surface-light/95 backdrop-blur-lg w-full max-w-[480px] mx-auto">
<div class="flex h-full items-center justify-around px-2">
<a class="group flex flex-col items-center gap-1 p-2 text-primary" href="#">
<span class="material-symbols-outlined filled text-2xl group-active:scale-90 transition-transform">home</span>
<span class="text-[10px] font-medium">الرئيسية</span>
</a>
<a class="group flex flex-col items-center gap-1 p-2 text-text-subtle hover:text-text-main transition-colors" href="#">
<span class="material-symbols-outlined text-2xl group-active:scale-90 transition-transform">search</span>
<span class="text-[10px] font-medium">بحث</span>
</a>
<a class="group flex flex-col items-center gap-1 p-2 text-text-subtle hover:text-text-main transition-colors" href="#">
<span class="material-symbols-outlined text-2xl group-active:scale-90 transition-transform">favorite</span>
<span class="text-[10px] font-medium">المفضلة</span>
</a>
<a class="group flex flex-col items-center gap-1 p-2 text-text-subtle hover:text-text-main transition-colors" href="#">
<span class="material-symbols-outlined text-2xl group-active:scale-90 transition-transform">person</span>
<span class="text-[10px] font-medium">حسابي</span>
</a>
</div>
</nav>
</div>

</body></html>

<!-- ==================== الواجهة 20: Ask Seba - Perfume Recommendation ==================== -->
<!DOCTYPE html>
<html class="light" dir="rtl" lang="ar"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Ask Seba - Perfume Recommendation</title>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=Noto+Sans+Arabic:wght@400;500;600;700&family=Manrope:wght@400;500;600;700&display=swap" rel="stylesheet"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=Noto+Sans+Arabic:wght@400;500;600;700&family=Manrope:wght@400;500;600;700&display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=Noto+Sans+Arabic:wght@400;500;600;700&family=Manrope:wght@400;500;600;700&display=swap" rel="stylesheet"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#c0841a",
                        "primary-dark": "#b0720a", // Darker gold for text on light bg
                        "card-cream": "#F2F0EB",   // Requested creamy background
                        "background-light": "#F2F0EB",
                        "background-dark": "#5B4233",
                        "surface-dark": "#2c241b", 
                        "surface-light": "#332a19"
                    },
                    fontFamily: {
                        "display": ["Noto Sans Arabic", "Manrope", "sans-serif"],
                        "body": ["Noto Sans Arabic", "Manrope", "sans-serif"]
                    },
                    borderRadius: {
                        "DEFAULT": "1rem", 
                        "lg": "1.5rem", 
                        "xl": "2rem", 
                        "2xl": "2.5rem",
                        "full": "9999px"
                    },
                    boxShadow: {
                        'glow': '0 0 20px -5px rgba(236, 156, 19, 0.3)',
                    }
                },
            },
        }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings:
            'FILL' 0,
            'wght' 400,
            'GRAD' 0,
            'opsz' 24
        }::-webkit-scrollbar {
            width: 6px;
        }
        ::-webkit-scrollbar-track {
            background: #f8f7f6;
        }
        ::-webkit-scrollbar-thumb {
            background: #d1d1d1;
            border-radius: 3px;
        }
        body {
            font-family: 'Manrope', 'Noto Sans Arabic', sans-serif;
        }
    </style>
<style>
        body {
            min-height: max(884px, 100dvh);
        }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  
    <style>
        :root {
            --cream-bg: #F2F0EB;
            --brown-text: #5B4233;
            --pink-light: #EEDDD8;
            --brown-medium: #A88B78;
            --gray-brown: #AFA393;
            --beige-light: #EBE1DD;
            --gradient-start: #2f6f73;
            --gradient-end: #c0841a;
            --safe-green: #10B981;
            --warning-orange: #F59E0B;
            --danger-red: #EF4444;
        }
    </style>
</head>
<body class="bg-background-light text-surface-dark min-h-screen overflow-x-hidden flex flex-col items-center">
<div class="w-full max-w-md bg-background-light min-h-screen flex flex-col relative shadow-2xl overflow-hidden">
<div class="flex items-center p-5 justify-between sticky top-0 z-50 bg-background-light/95 backdrop-blur-sm">
<button class="text-surface-dark flex size-10 items-center justify-center rounded-full hover:bg-black/5 transition-colors">
<span class="material-symbols-outlined">menu</span>
</button>
<h2 class="text-surface-dark text-xl font-extrabold leading-tight tracking-tight">Ask Seba</h2>
<button class="text-surface-dark flex size-10 items-center justify-center rounded-full hover:bg-black/5 transition-colors">
<span class="material-symbols-outlined">search</span>
</button>
</div>
<div class="flex-1 flex flex-col items-center justify-center p-6 w-full">
<div class="group relative w-full bg-card-cream rounded-2xl shadow-glow overflow-hidden border border-surface-dark/5 transition-all duration-300 hover:border-primary/30">
<div class="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-primary/10 to-transparent opacity-50"></div>
<div class="absolute top-0 right-0 z-20">
<div class="bg-primary text-background-dark font-bold text-sm px-4 py-2 rounded-bl-2xl shadow-lg flex items-center gap-1">
<span class="material-symbols-outlined text-[18px]">verified</span>
<span>الأكثر مبيعاً</span>
</div>
</div>
<div class="absolute top-4 left-4 z-20 flex flex-col items-center gap-1">
<div class="relative flex items-center justify-center size-16 rounded-full bg-surface-dark border-2 border-primary/30 shadow-lg">
<svg class="absolute inset-0 w-full h-full -rotate-90 text-primary" viewBox="0 0 36 36">
<path class="text-white/10" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" stroke-width="2.5"></path>
<path class="text-primary drop-shadow-[0_0_2px_rgba(236,156,19,0.8)]" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" stroke-dasharray="90, 100" stroke-linecap="round" stroke-width="2.5"></path>
</svg>
<div class="flex flex-col items-center justify-center">
<span class="text-sm font-bold text-white leading-none">90%</span>
</div>
</div>
<span class="text-[10px] font-bold text-surface-dark/70 uppercase tracking-wider">تطابق</span>
</div>
<div class="relative w-full aspect-[4/5] flex items-center justify-center p-8 mt-2">
<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-primary/20 blur-[60px] rounded-full pointer-events-none"></div>
<div class="relative z-10 w-full h-full rounded-xl overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-105" data-alt="Luxurious golden perfume bottle floating on a dark background">
<div class="w-full h-full bg-contain bg-center bg-no-repeat" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuALBOCEY2KBnfmkKMp5T6wk7_tpNpYd3gxmLv44JaVnWWHheh5gIzBLiaDI5fKGIARWSWatCeEb4azL5A17HBLlqMqHVuK3B3mVJP3jO-BI7w6oAg5ou-jeK7DuIMj6Fd_QONDQwXlpOjjSEcE84Knt_5z4mBLf1A7QxpZMHAyHOw0YtNyEweRUfJ7Tsxs967MWYSrjlI3dDLoQqWt7pg8oDqHBhO1T_uX29W1QDSJ9EaqoM6FdQ8hSW7f4MY2a-H26q7iDJrV4WnI3');"></div>
</div>
</div>
<div class="relative px-6 pb-6 pt-2 flex flex-col gap-4 bg-transparent">
<div class="flex items-center justify-between">
<div class="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#483a23]/90 border border-primary/20 backdrop-blur-sm">
<span class="material-symbols-outlined text-primary text-[16px]">shield</span>
<span class="text-white text-xs font-medium">خيار آمن</span>
</div>
<span class="text-primary-dark text-sm font-bold tracking-wide">أطيار</span>
</div>
<div class="flex flex-col gap-1">
<h3 class="text-2xl font-bold text-surface-dark leading-tight">عود ملكي فاخر</h3>
<p class="text-surface-dark/70 text-sm line-clamp-2 leading-relaxed">توليفة ساحرة تجمع بين دهن العود الكمبودي والمسك الأسود.</p>
</div>
<div class="h-px w-full bg-surface-dark/10 my-1"></div>
<div class="flex items-center justify-between gap-4 mt-1">
<div class="flex flex-col">
<span class="text-xs text-surface-dark/50">السعر</span>
<span class="text-xl font-bold text-primary-dark">450 <span class="text-sm font-normal text-surface-dark/70">ر.س</span></span>
</div>
<button class="flex-1 h-12 bg-primary hover:bg-primary/90 text-background-dark rounded-full font-bold text-base flex items-center justify-center gap-2 transition-all active:scale-95 shadow-[0_4px_12px_rgba(236,156,19,0.3)]">
<span>إضافة للسلة</span>
<span class="material-symbols-outlined text-[20px]">shopping_bag</span>
</button>
<button class="size-12 rounded-full border border-surface-dark/10 bg-surface-dark/5 flex items-center justify-center text-surface-dark hover:bg-surface-dark/10 hover:text-primary-dark transition-colors active:scale-95">
<span class="material-symbols-outlined">favorite</span>
</button>
</div>
</div>
</div>
<div class="h-8"></div>
</div>
</div>

</body></html>

