# MinangBits - Platform Produk Digital

MinangBits adalah platform penjualan produk digital seperti template website, plugin, grafik, dan aplikasi. Platform ini dibangun dengan Next.js, React, dan TailwindCSS.

## Fitur Utama

- **Katalog produk digital** dengan filter kategori dan harga
- **Halaman detail produk** dengan preview, ulasan, dan deskripsi lengkap
- **Sistem checkout** dengan integrasi Midtrans payment gateway
- **Dashboard produk** untuk mengelola produk yang telah dibeli
- **Notifikasi WhatsApp** untuk konfirmasi pembayaran dan informasi order
- **Tema gelap/terang** untuk pengalaman pengguna yang nyaman
- **Desain responsif** yang bekerja di semua ukuran perangkat

## Teknologi yang Digunakan

- **Next.js 13** dengan App Router
- **React 18** dengan Hooks
- **TailwindCSS** untuk styling
- **Framer Motion** untuk animasi
- **Midtrans** untuk payment gateway
- **WhatsApp Business API** untuk notifikasi

## Penggunaan

### Instalasi

```bash
# Clone repository
git clone https://github.com/yourusername/minangbits.git

# Pindah ke direktori project
cd minangbits

# Install dependensi
npm install

# Jalankan development server
npm run dev
```

### Konfigurasi

1. Salin file `.env.example` menjadi `.env.local` dan isi dengan konfigurasi yang diperlukan:

```
# Midtrans (Payment Gateway)
MIDTRANS_SERVER_KEY=SB-Mid-server-XXXXX
MIDTRANS_CLIENT_KEY=SB-Mid-client-XXXXX
MIDTRANS_MERCHANT_ID=G123456789
NEXT_PUBLIC_MIDTRANS_CLIENT_KEY=SB-Mid-client-XXXXX

# WhatsApp API
WA_API_URL=https://graph.facebook.com/v17.0
WA_PHONE_NUMBER_ID=1234567890
WA_ACCESS_TOKEN=your_whatsapp_access_token
```

2. Pastikan Anda memiliki akun Midtrans dan WhatsApp Business API untuk menggunakan fitur pembayaran dan notifikasi.

## Struktur Direktori

```
minangbits/
├── app/                  # App router Next.js
│   ├── api/              # API routes
│   │   ├── midtrans/     # API integrasi Midtrans
│   │   └── whatsapp/     # API notifikasi WhatsApp
│   ├── checkout/         # Halaman checkout
│   ├── components/       # Komponen React yang digunakan di seluruh aplikasi
│   ├── dashboard/        # Halaman dashboard pengguna
│   ├── produk/           # Halaman katalog dan detail produk
│   └── [...]            
├── public/               # File statis (gambar, dll)
├── styles/               # Style global CSS
├── utils/                # Utilitas dan helper functions
└── [...]
```

## Integrasi Midtrans Payment Gateway

Platform ini menggunakan Midtrans sebagai payment gateway untuk memproses pembayaran. Integrasi dilakukan melalui:

1. **Konfigurasi Midtrans** - Setup kredensial di `app/api/midtrans/config.js`
2. **API Create Transaction** - Membuat transaksi di `app/api/midtrans/create-transaction/route.js`
3. **API Callback** - Menangani callback notifikasi pembayaran di `app/api/midtrans/callback/route.js`
4. **Frontend Integration** - Implementasi tombol pembayaran di halaman checkout

Midtrans mendukung berbagai metode pembayaran seperti:
- Kartu kredit/debit
- Transfer bank (VA)
- E-wallet (GoPay, OVO, DANA, dll)
- QRIS
- Minimarket (Alfamart, Indomaret)

## Sistem Notifikasi WhatsApp

Sistem notifikasi WhatsApp diimplementasikan untuk memberikan pengalaman yang lebih baik kepada pengguna:

1. **Template Message** - Menggunakan template yang telah disetujui oleh WhatsApp
2. **Event-based Notification** - Notifikasi dikirim berdasarkan event tertentu (pembayaran berhasil, produk dikirim)
3. **Personalized Content** - Notifikasi disesuaikan dengan data pengguna dan order

Template notifikasi yang tersedia:
- Konfirmasi pembayaran berhasil
- Pengiriman produk digital
- Pengingat penyelesaian pembayaran

## Deployment

Aplikasi dapat di-deploy ke berbagai platform hosting:

- **Vercel** (disarankan untuk Next.js)
```bash
vercel
```

- **Netlify**
```bash
netlify deploy
```

## Kontribusi

Kontribusi selalu diterima! Jika Anda ingin berkontribusi:

1. Fork repository
2. Buat branch fitur baru (`git checkout -b feature/amazing-feature`)
3. Commit perubahan Anda (`git commit -m 'Add some amazing feature'`)
4. Push ke branch (`git push origin feature/amazing-feature`)
5. Buka Pull Request

## Lisensi

Didistribusikan di bawah Lisensi MIT. Lihat `LICENSE` untuk informasi lebih lanjut.

## Kontak

Nama Project: [MinangBits](https://github.com/yourusername/minangbits)

Website: [https://minangbits.com](https://minangbits.com) 