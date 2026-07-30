# BFL'Y Design Language

Bu doküman, sitenin tasarım dilini tanımlar. Tüm yeni sayfa/bileşenler
`css/style.css` içindeki `:root` değişkenlerini (design tokens) kullanmalı,
yeni renk/radius/boşluk değeri "uydurulmamalı".

## Renkler

| Token | Değer | Kullanım |
|---|---|---|
| `--bg` | `#0D1117` | Ana sayfa arka planı |
| `--bg-dark` | `#080D13` | Koyu bölümler (page-hero, footer) |
| `--bg-card` | `#111827` | Kart / panel arka planı |
| `--brand` | `#182a47` | Marka lacivert (stats strip, gradient) |
| `--brand-mid` | `#1e3a63` | Marka lacivert — açık ton |
| `--accent` | `#4A9ECC` | Vurgu rengi (linkler, ikonlar, CTA) |
| `--accent-dim` | `#2d7aaa` | Vurgu — koyu ton |
| `--accent-glow` | `rgba(74,158,204,.35)` | Hover/focus parlaması |
| `--text` | `#F0F0F5` | Ana metin |
| `--text-muted` | `#8899BB` | İkincil metin |
| `--border-dim` | `rgba(255,255,255,.07)` | Genel kenarlıklar |

## Tipografi

- **Başlıklar / eyebrow / buton metni** → `--font-display` (Orbitron, 600–800 ağırlık, geniş letter-spacing, UPPERCASE)
- **Gövde metni** → `--font-body` (Inter, 300–600 ağırlık)

| Token | Boyut | Kullanım |
|---|---|---|
| `--fs-display-xl` | `clamp(3.5rem, 10vw, 7rem)` | Anasayfa hero başlığı |
| `--fs-display-lg` | `clamp(2.8rem, 7vw, 5.5rem)` | İç sayfa hero başlığı |
| `--fs-h1` | `clamp(1.6rem, 3vw, 2.4rem)` | Section title |
| `--fs-h2` | `clamp(1.3rem, 2.4vw, 1.8rem)` | Alt başlık |
| `--fs-eyebrow` | `0.7rem` | Eyebrow / kategori etiketi |
| `--fs-body` | `1rem` | Paragraf |
| `--fs-caption` | `0.75rem` | Etiket / meta bilgi |

Kural: Bir bölüme başlık eklerken önce bu skaladan uygun boyutu seç,
yeni `font-size` değeri yazma.

## Boşluk (Spacing) Skalası

`--space-xs` (8px) → `--space-sm` (16px) → `--space-md` (24px) →
`--space-lg` (40px) → `--space-xl` (64px) → `--space-2xl` (96px)

Section padding'leri her zaman `.section-pad` (96px) sınıfından gelir.

## Radius Skalası

| Token | Değer | Kullanım |
|---|---|---|
| `--radius-sm` | 4px | Buton, küçük etiket |
| `--radius-md` | 6px | Kart, görsel çerçeve |
| `--radius-lg` | 10px | Büyük görsel blokları (hero foto, post detay görseli) |
| `--radius-pill` | 999px | Rozet / badge / filtre pill |

## Buton Yükseklikleri

| Token | Değer |
|---|---|
| `--btn-height-sm` | 38px |
| `--btn-height-md` | 46px (varsayılan `.btn`) |
| `--btn-height-lg` | 54px |

İki buton varyantı: `.btn-primary` (dolu, accent renkli) ve `.btn-ghost`
(kenarlıklı, transparan). İkisi de hover'da `translateY(-2px)` +
`box-shadow` (`--shadow-glow` / hafif accent gölgesi) alır.

## Gölge / Elevation

- `--shadow-sm` — hafif kart gölgesi
- `--shadow-md` — hover'daki kartlar (v-card, member-card, sponsor-card, timeline-card)
- `--shadow-glow` — birincil buton hover'ı (accent parlaması)

## Havacılık Teması

- Body arka planında çok düşük opaklıklı (`0.05`) mavi blueprint grid
  (`body::before`), üstte radial mask ile yumuşatılmış.
- Page-hero bölümlerinde aynı gridin biraz daha belirgin versiyonu.
- Hero'da "runway" çizgisi animasyonu (uçuş pisti metaforu).
- Amaç: abartmadan, arka planda hissedilen ince bir teknik/mühendislik dokusu.

## Hover Prensibi

Her interaktif eleman (buton, kart, nav linki, filtre pill) hover'da:
1. Kenarlık veya renk `--accent`'e döner,
2. Hafif yukarı hareket (`translateY(-2px..-6px)`),
3. Kartlarda `--shadow-md` eklenir.

`prefers-reduced-motion: reduce` durumunda tüm animasyon/transition
süresi `0.01ms`'e düşürülür (bkz. `style.css`).

## Scroll Deneyimi

- Sayfa en üstünde ince bir **scroll progress bar** (`.scroll-progress`),
  okuma ilerlemesini gösterir.
- Ana bölümler (`section-pad`, kartlar, timeline event'leri) ekrana
  girerken hafifçe belirir (`.reveal` / `.reveal-visible`,
  `IntersectionObserver` ile — `js/components.js` → `initScrollReveal()`).
- Basit tutulur: sadece opacity + 28px'lik translateY, abartılı efekt yok.

## Dosya Yapısı (Assets)

```
assets/images/
  brand/      → BFL'Y logosu, favicon setleri, Open Graph görseli
  sponsors/   → Sponsor logoları
  vehicles/   → Uçak/araç fotoğrafları
  team/       → Takım üyesi fotoğrafları + takım fotoğrafı
  blog/       → Blog/haber görselleri
  gallery/    → Galeri görselleri
```

Yeni bir görsel eklerken ait olduğu klasöre koy; kök dizine (`assets/images/`)
doğrudan dosya atma.
