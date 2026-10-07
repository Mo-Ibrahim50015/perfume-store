-- ============================================================================
-- Perfume Store E-commerce Platform - Seed Data
-- ============================================================================

-- 1. Insert Initial Users
-- Passwords:
-- admin@perfumestore.eg    -> Admin@12345
-- customer@example.com     -> Customer@12345
-- (Bcrypt hashes generated with 10 salt rounds)
INSERT INTO users (email, password_hash, name, phone, role, default_address, city, country)
VALUES
(
    'admin@perfumestore.eg',
    '$2b$10$EixZaYVK1fsbw1ZfbX3OXePaWxn96p36WQoeG6Lruj3vjPGga31lW',
    'مدير متجر العطور',
    '+201001234567',
    'admin',
    'شارع مصدق، الدقي',
    'Giza',
    'Egypt'
),
(
    'customer@example.com',
    '$2b$10$EixZaYVK1fsbw1ZfbX3OXePaWxn96p36WQoeG6Lruj3vjPGga31lW',
    'رانيا المصرية',
    '+201119876543',
    'customer',
    'شارع النصر، المعادي',
    'Cairo',
    'Egypt'
)
ON CONFLICT (email) DO NOTHING;

-- 2. Insert Categories
INSERT INTO categories (name, slug, description, image_url)
VALUES
(
    'عطور شرقية وعود',
    'oriental-oud',
    'مجموعة فاخرة من أرقى أدهان العود والعطور الشرقية الأصيلة بنفحات العنبر والمسك.',
    'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=600&q=80'
),
(
    'عطور فرنسية نسائية',
    'french-women',
    'أناقة لا تنتهي مع باقة من العطور الزهرية والفاكهية المنعشة للمرأة العصرية.',
    'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=600&q=80'
),
(
    'عطور رجالية فخمة',
    'luxury-men',
    'عطور خشبية وتوابل دافئة تعبر عن القوة والجاذبية والثقة.',
    'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=600&q=80'
),
(
    'عطور نيش وبدائل فاخرة',
    'niche-alternatives',
    'تركيبات نادرة وحصرية ذات ثبات وفوحان استثنائي تميز حضورك.',
    'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=600&q=80'
),
(
    'عطور صيفية منعشة',
    'fresh-summer',
    'نفحات حمضية وبحرية منعشة تمنحك إحساساً بالحيوية طوال اليوم.',
    'https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=600&q=80'
)
ON CONFLICT (slug) DO NOTHING;

-- 3. Insert Products
INSERT INTO products (name, slug, description, brand, price, compare_at_price, category_id, stock, sku, images, is_featured)
VALUES
(
    'عطر العود الملكي الفاخر - 100 مل',
    'royal-oud-100ml',
    'مزيج ساحر يجمع بين العود الكمبودي المعتق ونفحات العنبر والورد الدمشقي، مصمم لمن يقدر الأصالة والفخامة.',
    'قصر العطور',
    1450.00,
    1850.00,
    (SELECT id FROM categories WHERE slug = 'oriental-oud'),
    35,
    'OUD-ROYAL-100',
    '["https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=800&q=80"]'::jsonb,
    TRUE
),
(
    'مسك الطهارة والحرير الأبيض - 50 مل',
    'white-silk-musk-50ml',
    'نقاء لا يضاهى مع عبير المسك الأبيض المنعش الممزوج بلمسات القطن والبودرة الناعمة.',
    'أريج الشرق',
    420.00,
    550.00,
    (SELECT id FROM categories WHERE slug = 'oriental-oud'),
    80,
    'MUSK-SILK-50',
    '["https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&w=800&q=80"]'::jsonb,
    FALSE
),
(
    'عطر ياسمين باريس الزهري - 75 مل',
    'paris-jasmine-75ml',
    'باقة زهرية متألقة تفيض بأنوثة الياسمين الفرنسي وزهر البرتقال مع قاعدة ناعمة من الفانيليا.',
    'Maison De Fleur',
    1150.00,
    1350.00,
    (SELECT id FROM categories WHERE slug = 'french-women'),
    25,
    'JAS-PARIS-75',
    '["https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=800&q=80"]'::jsonb,
    TRUE
),
(
    'عطر ليلة مخملية - 100 مل',
    'velvet-night-100ml',
    'عطر مسائي غامض وأنيق يجمع بين التوت البري، أخشاب الكشمير والباتشولي.',
    'Maison De Fleur',
    980.00,
    NULL,
    (SELECT id FROM categories WHERE slug = 'french-women'),
    40,
    'VELVET-NIGHT-100',
    '["https://images.unsplash.com/photo-1587017539504-67cfbddac569?auto=format&fit=crop&w=800&q=80"]'::jsonb,
    FALSE
),
(
    'عطر سمو الرجل الأسود - 100 مل',
    'black-sovereign-100ml',
    'عطر خشبي أروماتك يتميز بالهيل والجلد الفاخر ونجيل الهند، حضور قوي ومهيب في كل مناسبة.',
    'Elite Collection',
    1320.00,
    1600.00,
    (SELECT id FROM categories WHERE slug = 'luxury-men'),
    50,
    'BLK-SOV-100',
    '["https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=800&q=80"]'::jsonb,
    TRUE
),
(
    'توباكو فانيلا نيش - 100 مل',
    'tobacco-vanilla-niche-100ml',
    'تحفة عطرية دافئة تتناغم فيها أوراق التبغ الفاخر مع حبوب التونكا والكاكاو والفانيليا الكريمية.',
    'Signature Niche',
    1890.00,
    2200.00,
    (SELECT id FROM categories WHERE slug = 'niche-alternatives'),
    18,
    'TOB-VAN-100',
    '["https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=800&q=80"]'::jsonb,
    TRUE
),
(
    'نسيم البحر المتوسط الصيفي - 100 مل',
    'mediterranean-breeze-100ml',
    'انتعاش حمضيات صقلية ممزوجة بملوحة أمواج البحر وإكليل الجبل، عطر مثالي للأيام الحارة.',
    'Aqua Pure',
    690.00,
    850.00,
    (SELECT id FROM categories WHERE slug = 'fresh-summer'),
    65,
    'MED-BRZ-100',
    '["https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=800&q=80"]'::jsonb,
    FALSE
)
ON CONFLICT (slug) DO NOTHING;

-- 4. Insert Initial Reviews
INSERT INTO reviews (product_id, user_id, rating, comment)
VALUES
(
    (SELECT id FROM products WHERE slug = 'royal-oud-100ml'),
    (SELECT id FROM users WHERE email = 'customer@example.com'),
    5,
    'عطر فخم وثبات عالي جداً لأكثر من 24 ساعة، التوصيل في القاهرة كان في نفس اليوم تقريباً!'
),
(
    (SELECT id FROM products WHERE slug = 'paris-jasmine-75ml'),
    (SELECT id FROM users WHERE email = 'customer@example.com'),
    5,
    'رائحة رقيقة ومنعشة وجميلة جداً ومناسبة للدوام الصباحي.'
)
ON CONFLICT (product_id, user_id) DO NOTHING;
