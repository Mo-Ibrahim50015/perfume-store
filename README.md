# متجر العطور — منصة إلكترونية متخصصة 🌸

منصة تجارة إلكترونية متخصصة لبيع العطور الفاخرة في السوق المصري، مبنية بأحدث التقنيات لتقديم تجربة تسوق سريعة وموثوقة للبائع والمشتري وفقاً لوثيقة متطلبات المنتج (PRD-001).

---

## 🚀 المعمارية التقنية (Tech Stack)

* **الواجهة الخلفية (Backend):** Node.js, Express, TypeScript
* **قاعدة البيانات (Database):** PostgreSQL 16 (مع ملحقات `pg_trgm` للبحث العربي السريع)
* **التخزين المؤقت والجلسات (Cache & Session):** Redis 7
* **التوثيق (API Contract):** OpenAPI 3.0 (`docs/openapi.yaml`)
* **بيئة التشغيل والحاويات (DevOps):** Docker Compose (PostgreSQL + Redis + Adminer)

---

## 📁 هيكل المشروع (Project Structure)

```
perfume-store/
├── docker-compose.yml         # تشغيل بيئة العمل (PostgreSQL, Redis, Adminer)
├── .env.example               # المتغيرات البيئية لجميع الخدمات
├── README.md                  # دليل التشغيل والتوثيق
├── database/
│   ├── schema.sql             # مخطط قاعدة البيانات بالكامل (DDL + فهارس البحث)
│   └── seed.sql               # بيانات أولية للتجربة (عطور، تصنيفات، مستخدمين)
├── docs/
│   └── openapi.yaml           # مواصفات الـ API بنسق OpenAPI 3.0
└── backend/                   # كود الخادم وواجهات برمجة التطبيقات
    ├── package.json
    ├── tsconfig.json
    └── src/
        ├── config/            # إعدادات الاتصال بقاعدة البيانات و Redis
        ├── middlewares/       # معالجة الأخطاء والأمان
        ├── routes/            # مسارات الـ API (Health, Auth, Products...)
        └── server.ts          # نقطة انطلاق الخادم
```

---

## 🛠️ خطوات التشغيل السريع (Quickstart)

### 1. تشغيل قواعد البيانات والخدمات (Docker Compose)
من المجلد الرئيسي للمشروع، نفّذ:
```bash
docker-compose up -d
```
سيقوم هذا الأمر بتشغيل:
* **PostgreSQL:** على المنفذ `5432` (مع تنفيذ `schema.sql` و `seed.sql` تلقائياً لأول مرة).
* **Redis:** على المنفذ `6379`.
* **Adminer:** على المنفذ `8080` (واجهة ويب لإدارة قاعدة البيانات: [http://localhost:8080](http://localhost:8080)).

### 2. إعداد وتشغيل خادم الـ Backend
```bash
cd backend
npm install
npm run dev
```

الخادم سيعمل على: [http://localhost:5000](http://localhost:5000)  
رابط فحص الصحة والخدمات: [http://localhost:5000/api/v1/health](http://localhost:5000/api/v1/health)

---

## 🔑 الحسابات الافتراضية للتجربة (Seed Accounts)

| الدور (Role) | البريد الإلكتروني | كلمة المرور |
|--------------|-------------------|-------------|
| **مدير المتجر (Admin)** | `admin@perfumestore.eg` | `Admin@12345` |
| **عميل تجريبي (Customer)** | `customer@example.com` | `Customer@12345` |

---

## 📖 توثيق الـ API (OpenAPI 3.0)
الملف متاح داخل `docs/openapi.yaml` ويمكن فتحه واستيراده مباشرة داخل:
* **Postman** (Import -> File)
* **Swagger Editor** أو إضافات VS Code / Antigravity.
