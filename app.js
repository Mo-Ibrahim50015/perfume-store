// -------------------------------------------------------------
    // 1. Data Store (Mock database & seed sync)
    // -------------------------------------------------------------
    const categories = [
      { id: 'all', name: 'الكل' },
      { id: 'oriental-oud', name: 'عطور شرقية وعود' },
      { id: 'french-women', name: 'عطور فرنسية نسائية' },
      { id: 'luxury-men', name: 'عطور رجالية فخمة' },
      { id: 'niche-alternatives', name: 'عطور نيش وبدائل' },
      { id: 'fresh-summer', name: 'عطور صيفية منعشة' }
    ];

    let products = [
      {
        id: 1,
        name: 'عطر العود الملكي الفاخر - 100 مل',
        category: 'oriental-oud',
        brand: 'حبر وورق',
        price: 1450,
        comparePrice: 1850,
        stock: 35,
        rating: 5.0,
        reviewsCount: 124,
        isFeatured: true,
        image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=600&q=80',
        desc: 'مزيج ساحر يجمع بين العود الكمبودي المعتق ونفحات العنبر والورد الدمشقي، مصمم لمن يقدر الأصالة والفخامة.',
        pyramid: { top: 'الورد الدمشقي، الزعفران الإيراني', heart: 'العود الكمبودي المعتق، أخشاب الأرز', base: 'العنبر الفاخر، المسك الصافي' },
        reviews: [
          { author: 'محمد إبراهيم', rating: 5, comment: 'عطر أسطوري وثبات يدوم لأكثر من يوم كامل، تجربة استثنائية.' },
          { author: 'مروة الشاذلي', rating: 5, comment: 'تغليف ملكي ورائحة راقية وفخمة جداً.' }
        ]
      },
      {
        id: 2,
        name: 'مسك الطهارة والحرير الأبيض - 50 مل',
        category: 'oriental-oud',
        brand: 'أريج الشرق',
        price: 420,
        comparePrice: 550,
        stock: 80,
        rating: 4.8,
        reviewsCount: 95,
        isFeatured: false,
        image: 'https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&w=600&q=80',
        desc: 'نقاء لا يضاهى مع عبير المسك الأبيض المنعش الممزوج بلمسات القطن والبودرة الناعمة.',
        pyramid: { top: 'زهرة اللوتس، القطن الصافي', heart: 'المسك الأبيض النقي، زنبق الوادي', base: 'البودرة الناعمة، خشب الصندل' },
        reviews: [
          { author: 'سارة يوسف', rating: 5, comment: 'ريحته نظافة وانتعاش لا توصف، مناسب جداً بعد الاستحمام.' }
        ]
      },
      {
        id: 3,
        name: 'عطر ياسمين باريس الزهري - 75 مل',
        category: 'french-women',
        brand: 'Maison De Fleur',
        price: 1150,
        comparePrice: 1350,
        stock: 25,
        rating: 4.9,
        reviewsCount: 88,
        isFeatured: true,
        image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=600&q=80',
        desc: 'باقة زهرية متألقة تفيض بأنوثة الياسمين الفرنسي وزهر البرتقال مع قاعدة ناعمة من الفانيليا.',
        pyramid: { top: 'البرغموت الإيطالي، زهر البرتقال', heart: 'الياسمين الفرنسي، مسك الروم', base: 'الفانيليا المدغشقرية، خشب الأرز' },
        reviews: [
          { author: 'رانيا المصرية', rating: 5, comment: 'عطر أنثوي جذاب ورقيق جداً، كل اللي بيشمه بيسألني عليه.' }
        ]
      },
      {
        id: 4,
        name: 'عطر ليلة مخملية - 100 مل',
        category: 'french-women',
        brand: 'Maison De Fleur',
        price: 980,
        comparePrice: null,
        stock: 40,
        rating: 4.7,
        reviewsCount: 52,
        isFeatured: false,
        image: 'https://images.unsplash.com/photo-1587017539504-67cfbddac569?auto=format&fit=crop&w=600&q=80',
        desc: 'عطر مسائي غامض وأنيق يجمع بين التوت البري، أخشاب الكشمير والباتشولي.',
        pyramid: { top: 'التوت البري، الفلفل الوردي', heart: 'أخشاب الكشمير، الياسمين الليلي', base: 'الباتشولي الإندونيسي، العنبر الرمادي' },
        reviews: []
      },
      {
        id: 5,
        name: 'عطر سمو الرجل الأسود - 100 مل',
        category: 'luxury-men',
        brand: 'Elite Collection',
        price: 1320,
        comparePrice: 1600,
        stock: 50,
        rating: 4.9,
        reviewsCount: 140,
        isFeatured: true,
        image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=600&q=80',
        desc: 'عطر خشبي أروماتك يتميز بالهيل والجلد الفاخر ونجيل الهند، حضور قوي ومهيب.',
        pyramid: { top: 'الهيل الجواتيمالي، الجريب فروت', heart: 'الجلد الطبيعي، أخشاب الأرز', base: 'نجيل الهند الهايتي، البخور العماني' },
        reviews: [
          { author: 'كريم عادل', rating: 5, comment: 'عطر رجالي فخم وقوي جداً للمناسبات والاجتماعات المهمة.' }
        ]
      },
      {
        id: 6,
        name: 'توباكو فانيلا نيش - 100 مل',
        category: 'niche-alternatives',
        brand: 'Signature Niche',
        price: 1890,
        comparePrice: 2200,
        stock: 18,
        rating: 5.0,
        reviewsCount: 76,
        isFeatured: true,
        image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=600&q=80',
        desc: 'تحفة عطرية دافئة تتناغم فيها أوراق التبغ الفاخر مع حبوب التونكا والكاكاو والفانيليا الكريمية.',
        pyramid: { top: 'أوراق التبغ الكاريبي، التوابل العطرية', heart: 'حبوب التونكا، الكاكاو الغني', base: 'الفانيليا الكريمية، الفواكه المجففة' },
        reviews: [
          { author: 'م. أحمد خالد', rating: 5, comment: 'أفضل بديل نيش اشتريته في حياتي، فوحان يملأ المكان.' }
        ]
      },
      {
        id: 7,
        name: 'نسيم البحر المتوسط الصيفي - 100 مل',
        category: 'fresh-summer',
        brand: 'Aqua Pure',
        price: 690,
        comparePrice: 850,
        stock: 65,
        rating: 4.6,
        reviewsCount: 43,
        isFeatured: false,
        image: 'https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=600&q=80',
        desc: 'انتعاش حمضيات صقلية ممزوجة بملوحة أمواج البحر وإكليل الجبل، عطر مثالي للأيام الحارة.',
        pyramid: { top: 'حمضيات صقلية، المندرين', heart: 'أمواج البحر، إكليل الجبل', base: 'أخشاب الأرز، المسك المعدني' },
        reviews: []
      }
    ];

    // State
    let cart = [];
    let wishlist = [];
    let currentPendingOrder = null;
    let paymentCountdownInterval = null;
    let bankListenerAutoTimeout = null;
    let currentPaymentTotalText = '';

    const defaultOrders = [
      {
        id: 'ORD-984120',
        customerName: 'رانيا المصرية',
        phone: '01012345678',
        city: 'القاهرة',
        address: 'شارع النصر، المعادي الجديدة',
        paymentMethod: 'instapay',
        paymentStatus: 'paid',
        paymentRef: 'IPN-892401829',
        paymentTime: 'أمس، 02:40 م',
        itemsCount: 2,
        total: 1870,
        status: 'shipped',
        date: 'أمس، 02:40 م'
      }
    ];

    let orders = JSON.parse(localStorage.getItem('perfume_store_orders')) || defaultOrders;

    let currentCategory = 'all';
    let searchQuery = '';
    let currentSort = 'featured';
    let isAdminView = false;
    let currentUser = { name: 'رانيا المصرية', email: 'customer@example.com', role: 'customer' };
    let activeCoupon = null; // e.g. { code: 'PERFUME10', discountPercent: 10 }
    let lastCreatedOrder = null;
    let selectedProductId = null;

    // -------------------------------------------------------------
    // 2. Initialization
    // -------------------------------------------------------------
    window.addEventListener('DOMContentLoaded', () => {
      renderCategories();
      renderProducts();
      updateCartUI();
      updateWishlistUI();
      updateAdminStats();

      // Welcome Notification & Audio Chime on Site Open
      setTimeout(() => {
        showToast('مرحباً بك في قصر العطور ✨ متجر معتمد ومحمي 100% 🛡️', '👑');
        playWelcomeChime();
      }, 700);
    });

    // -------------------------------------------------------------
    // 3. Render Catalog & Categories
    // -------------------------------------------------------------
    function renderCategories() {
      const container = document.getElementById('categoriesContainer');
      container.innerHTML = categories.map(cat => {
        const isActive = cat.id === currentCategory;
        return `
          <button 
            data-action="set-category" data-val="${cat.id}"
            class="whitespace-nowrap px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
              isActive 
                ? 'bg-amber-600 text-white shadow-md shadow-amber-600/30' 
                : 'bg-white text-slate-600 border border-slate-200 hover:border-amber-300 hover:text-amber-700'
            }"
          >
            ${cat.name}
          </button>
        `;
      }).join('');
    }

    function renderProducts() {
      const grid = document.getElementById('productsGrid');
      const emptyState = document.getElementById('emptyState');
      const countEl = document.getElementById('productsCount');

      let filtered = products.filter(p => {
        const matchesCat = currentCategory === 'all' || p.category === currentCategory;
        const matchesQ = !searchQuery || 
          p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.desc.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCat && matchesQ;
      });

      if (currentSort === 'price_asc') filtered.sort((a, b) => a.price - b.price);
      else if (currentSort === 'price_desc') filtered.sort((a, b) => b.price - a.price);
      else if (currentSort === 'rating') filtered.sort((a, b) => b.rating - a.rating);
      else if (currentSort === 'featured') filtered.sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0));

      countEl.textContent = filtered.length;

      if (filtered.length === 0) {
        grid.innerHTML = '';
        emptyState.classList.remove('hidden');
        return;
      }

      emptyState.classList.add('hidden');
      grid.innerHTML = filtered.map(p => {
        const discount = p.comparePrice ? Math.round(((p.comparePrice - p.price) / p.comparePrice) * 100) : 0;
        const isFav = wishlist.includes(p.id);

        return `
          <div class="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group relative">
            
            <!-- Image & Header Badges -->
            <div class="relative h-56 bg-slate-100 overflow-hidden cursor-pointer" data-action="open-detail" data-id="${p.id}">
              <img 
                src="${p.image}" 
                alt="${p.name}" 
                loading="lazy"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              
              <div class="absolute top-3 right-3 flex flex-col gap-1 items-end">
                ${p.isFeatured ? `<span class="bg-slate-900/90 text-amber-300 text-[10px] font-black px-2.5 py-1 rounded-full shadow backdrop-blur-sm">⭐ الأكثر طلباً</span>` : ''}
                ${discount > 0 ? `<span class="bg-red-500 text-white text-[10px] font-black px-2 py-0.5 rounded-full shadow">خصم ${discount}%</span>` : ''}
              </div>

              <!-- Wishlist Heart Toggle -->
              <button 
                data-action="toggle-wishlist-item" data-id="${p.id}"
                class="absolute top-3 left-3 w-8 h-8 rounded-full bg-white/80 hover:bg-white text-base flex items-center justify-center shadow transition active:scale-90"
                title="${isFav ? 'إزالة من المفضلة' : 'حفظ في المفضلة'}"
              >
                ${isFav ? '❤️' : '🤍'}
              </button>

              <span class="absolute bottom-3 left-3 bg-white/90 text-slate-700 text-[10px] font-semibold px-2 py-0.5 rounded-md shadow backdrop-blur-sm">
                ${p.brand}
              </span>
            </div>

            <!-- Content Area -->
            <div class="p-5 flex-1 flex flex-col justify-between">
              <div>
                <div class="flex items-center gap-1.5 text-xs text-amber-500 mb-1.5">
                  <span>★</span>
                  <span class="font-bold text-slate-800">${p.rating}</span>
                  <span class="text-slate-400 text-[11px]">(${p.reviewsCount} تقييم)</span>
                </div>
                
                <h3 
                  data-action="open-detail" data-id="${p.id}"
                  class="font-bold text-slate-900 text-sm leading-snug line-clamp-1 mb-1.5 cursor-pointer hover:text-amber-700 transition" 
                  title="${p.name}"
                >
                  ${p.name}
                </h3>
                
                <p class="text-xs text-slate-500 line-clamp-2 leading-relaxed mb-4">
                  ${p.desc}
                </p>
              </div>

              <!-- Price & CTA -->
              <div class="pt-3 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <div class="text-base sm:text-lg font-black text-amber-700">
                    ${p.price.toLocaleString('ar-EG')} <span class="text-xs font-normal">ج.م</span>
                  </div>
                  ${p.comparePrice ? `
                    <div class="text-xs text-slate-400 line-through">
                      ${p.comparePrice.toLocaleString('ar-EG')} ج.م
                    </div>
                  ` : ''}
                </div>

                <div class="flex items-center gap-1.5">
                  <button 
                    data-action="open-detail" data-id="${p.id}"
                    class="p-2.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-100 text-xs font-bold"
                    title="التفاصيل والمكونات"
                  >
                    👁️
                  </button>
                  <button 
                    data-action="add-to-cart" data-id="${p.id}"
                    class="bg-amber-600 hover:bg-amber-700 active:scale-95 text-white text-xs font-bold px-3.5 py-2.5 rounded-xl shadow-md shadow-amber-600/20 flex items-center gap-1 transition"
                  >
                    <span>+</span>
                    <span>شراء</span>
                  </button>
                </div>
              </div>

            </div>

          </div>
        `;
      }).join('');
    }

    function setCategory(id) { currentCategory = id; renderCategories(); renderProducts(); }
    function handleSearch(q) { searchQuery = q.trim(); renderProducts(); }
    function clearSearch() { document.getElementById('searchInput').value = ''; searchQuery = ''; renderProducts(); }
    function handleSort(v) { currentSort = v; renderProducts(); }
    function resetFilters() { currentCategory = 'all'; searchQuery = ''; clearSearch(); renderCategories(); renderProducts(); }

    // -------------------------------------------------------------
    // 4. Product Details Modal & Review Engine
    // -------------------------------------------------------------
    function openProductDetailModal(id) {
      selectedProductId = id;
      const product = products.find(p => p.id === id);
      if (!product) return;

      document.getElementById('modalProductImage').src = product.image;
      document.getElementById('modalProductName').textContent = product.name;
      document.getElementById('modalProductBrand').textContent = product.brand;
      document.getElementById('modalProductDesc').textContent = product.desc;
      document.getElementById('modalProductRating').textContent = product.rating;
      document.getElementById('modalProductReviewsCount').textContent = `(${product.reviewsCount} تقييم)`;
      document.getElementById('modalProductPrice').textContent = `${product.price.toLocaleString('ar-EG')} ج.م`;
      document.getElementById('modalProductStock').textContent = `${product.stock} زجاجة متبقية`;

      // Fragrance Pyramid
      const pyr = product.pyramid || { top: 'الورد والبرغموت', heart: 'الياسمين والعود', base: 'العنبر والمسك' };
      document.getElementById('modalPyramidTop').textContent = pyr.top;
      document.getElementById('modalPyramidHeart').textContent = pyr.heart;
      document.getElementById('modalPyramidBase').textContent = pyr.base;

      // Fav button in modal
      const isFav = wishlist.includes(product.id);
      const favBtn = document.getElementById('modalFavBtn');
      favBtn.textContent = isFav ? '❤️' : '🤍';
      favBtn.onclick = () => {
        toggleWishlistItem(product.id);
        favBtn.textContent = wishlist.includes(product.id) ? '❤️' : '🤍';
      };

      document.getElementById('modalAddToCartBtn').onclick = () => {
        addToCart(product.id);
        closeProductDetailModal();
      };

      // Render reviews
      renderProductReviews(product);

      document.getElementById('productDetailModal').classList.remove('hidden');
    }

    function closeProductDetailModal() {
      document.getElementById('productDetailModal').classList.add('hidden');
    }

    function renderProductReviews(product) {
      const container = document.getElementById('modalReviewsList');
      if (!product.reviews || product.reviews.length === 0) {
        container.innerHTML = `<p class="text-slate-400 text-xs italic">كن أول من يكتب تقييماً لهذا العطر الرائع!</p>`;
        return;
      }

      container.innerHTML = product.reviews.map(r => `
        <div class="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
          <div class="flex items-center justify-between mb-1">
            <span class="font-bold text-slate-800 text-xs">${r.author}</span>
            <span class="text-amber-500 font-bold text-xs">${'★'.repeat(r.rating)}</span>
          </div>
          <p class="text-slate-600 text-[11px]">${r.comment}</p>
        </div>
      `).join('');
    }

    function handleReviewSubmit(e) {
      e.preventDefault();
      const product = products.find(p => p.id === selectedProductId);
      if (!product) return;

      const author = document.getElementById('reviewAuthor').value.trim();
      const rating = parseInt(document.getElementById('reviewRating').value, 10);
      const comment = document.getElementById('reviewComment').value.trim();

      if (!product.reviews) product.reviews = [];
      product.reviews.unshift({ author, rating, comment });
      product.reviewsCount += 1;

      // Recalculate average
      const sum = product.reviews.reduce((s, r) => s + r.rating, 0);
      product.rating = Math.round((sum / product.reviews.length) * 10) / 10;

      document.getElementById('reviewComment').value = '';
      renderProductReviews(product);
      renderProducts();
      showToast('شكراً لمشاركتك! تم نشر مراجعتك فورياً ✨');
    }

    // -------------------------------------------------------------
    // 5. Wishlist Management
    // -------------------------------------------------------------
    function toggleWishlistItem(id) {
      const idx = wishlist.indexOf(id);
      const prod = products.find(p => p.id === id);
      if (idx > -1) {
        wishlist.splice(idx, 1);
        showToast(`تمت الإزالة من المفضلة: ${prod ? prod.name : ''}`);
      } else {
        wishlist.push(id);
        showToast(`تم الحفظ في المفضلة ❤️: ${prod ? prod.name : ''}`);
      }
      updateWishlistUI();
      renderProducts();
    }

    function updateWishlistUI() {
      const badge = document.getElementById('wishlistCountBadge');
      const headerCount = document.getElementById('wishlistHeaderCount');
      const container = document.getElementById('wishlistItemsContainer');

      headerCount.textContent = wishlist.length;
      if (wishlist.length > 0) {
        badge.textContent = wishlist.length;
        badge.classList.remove('hidden');
      } else {
        badge.classList.add('hidden');
      }

      const favProducts = products.filter(p => wishlist.includes(p.id));

      if (favProducts.length === 0) {
        container.innerHTML = `
          <div class="text-center py-16">
            <div class="text-5xl mb-3">❤️</div>
            <p class="font-bold text-slate-800 text-sm mb-1">قائمة المفضلة فارغة</p>
            <p class="text-xs text-slate-400">احفظ العطور التي تنوي شراؤها لاحقاً بالضغط على القلب!</p>
          </div>
        `;
        return;
      }

      container.innerHTML = favProducts.map(p => `
        <div class="flex items-center gap-3 py-3">
          <img src="${p.image}" alt="${p.name}" class="w-14 h-14 object-cover rounded-xl border border-slate-200" />
          <div class="flex-1">
            <h4 class="font-bold text-slate-900 text-xs line-clamp-1">${p.name}</h4>
            <div class="text-amber-700 font-bold text-xs mt-0.5">${p.price.toLocaleString('ar-EG')} ج.م</div>
          </div>
          <div class="flex items-center gap-2">
            <button data-action="move-wishlist-to-cart" data-id="${p.id}" class="bg-amber-600 hover:bg-amber-700 text-white font-bold px-3 py-1.5 rounded-xl text-xs">
              نقل للسلة
            </button>
            <button data-action="toggle-wishlist-item" data-id="${p.id}" class="text-slate-400 hover:text-red-500 text-sm p-1">
              ✕
            </button>
          </div>
        </div>
      `).join('');
    }

    function toggleWishlist(show) {
      document.getElementById('wishlistDrawer').classList.toggle('hidden', !show);
    }

    // -------------------------------------------------------------
    // 6. Shopping Cart & Coupons
    // -------------------------------------------------------------
    function addToCart(productId) {
      const product = products.find(p => p.id === productId);
      if (!product) return;

      const item = cart.find(i => i.product.id === productId);
      if (item) item.quantity += 1;
      else cart.push({ product, quantity: 1 });

      updateCartUI();
      showToast(`تمت إضافة "${product.name}" إلى السلة 🛍️`);
    }

    function updateCartQuantity(productId, delta) {
      const idx = cart.findIndex(i => i.product.id === productId);
      if (idx === -1) return;
      cart[idx].quantity += delta;
      if (cart[idx].quantity <= 0) cart.splice(idx, 1);
      updateCartUI();
    }

    function removeFromCart(productId) {
      cart = cart.filter(i => i.product.id !== productId);
      updateCartUI();
    }

    function updateCartUI() {
      const badge = document.getElementById('cartCountBadge');
      const headerCount = document.getElementById('cartHeaderCount');
      const container = document.getElementById('cartItemsContainer');
      const subtotalEl = document.getElementById('cartSubtotal');
      const shippingEl = document.getElementById('cartShipping');
      const totalEl = document.getElementById('cartTotal');
      const checkoutBtn = document.getElementById('checkoutBtn');
      const couponRow = document.getElementById('couponDiscountRow');
      const couponDiscountEl = document.getElementById('couponDiscountAmount');

      const totalItems = cart.reduce((s, i) => s + i.quantity, 0);
      badge.textContent = totalItems;
      headerCount.textContent = `${totalItems} عناصر`;

      const subtotal = cart.reduce((s, i) => s + (i.product.price * i.quantity), 0);
      
      // Free shipping threshold (2000 EGP)
      const shipping = subtotal >= 2000 || subtotal === 0 ? 0 : 50;
      shippingEl.textContent = shipping === 0 && subtotal > 0 ? 'مجاني (عرض خاص) 🎉' : `${shipping} ج.م`;

      // Apply coupon if valid
      let discountAmount = 0;
      if (activeCoupon && subtotal > 0) {
        discountAmount = Math.round((subtotal * activeCoupon.discountPercent) / 100);
        couponRow.classList.remove('hidden');
        document.getElementById('activeCouponCode').textContent = activeCoupon.code;
        couponDiscountEl.textContent = `-${discountAmount.toLocaleString('ar-EG')} ج.م`;
      } else {
        couponRow.classList.add('hidden');
      }

      const total = Math.max(0, subtotal - discountAmount + shipping);

      subtotalEl.textContent = `${subtotal.toLocaleString('ar-EG')} ج.م`;
      totalEl.textContent = `${total.toLocaleString('ar-EG')} ج.م`;
      document.getElementById('modalCheckoutTotal').textContent = `${total.toLocaleString('ar-EG')} ج.م`;

      if (cart.length === 0) {
        checkoutBtn.disabled = true;
        checkoutBtn.classList.add('opacity-50', 'cursor-not-allowed');
        container.innerHTML = `
          <div class="text-center py-16">
            <div class="text-5xl mb-3">🛍️</div>
            <p class="font-bold text-slate-800 text-sm mb-1">سلة مشترياتك فارغة</p>
            <p class="text-xs text-slate-400">تصفح العطور وأضف ما يعجبك هنا!</p>
          </div>
        `;
        return;
      }

      checkoutBtn.disabled = false;
      checkoutBtn.classList.remove('opacity-50', 'cursor-not-allowed');

      container.innerHTML = cart.map(item => `
        <div class="flex items-center gap-3 py-3">
          <img src="${item.product.image}" alt="${item.product.name}" class="w-16 h-16 object-cover rounded-xl border border-slate-200" />
          <div class="flex-1">
            <h4 class="font-bold text-slate-900 text-xs line-clamp-1">${item.product.name}</h4>
            <div class="text-amber-700 font-extrabold text-xs mt-0.5">
              ${(item.product.price * item.quantity).toLocaleString('ar-EG')} ج.م
            </div>
            
            <div class="flex items-center gap-2 mt-2">
              <button data-action="update-cart-qty" data-id="${item.product.id}" data-val="-1" class="w-6 h-6 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center font-bold text-xs">-</button>
              <span class="text-xs font-bold text-slate-800">${item.quantity}</span>
              <button data-action="update-cart-qty" data-id="${item.product.id}" data-val="1" class="w-6 h-6 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center font-bold text-xs">+</button>
            </div>
          </div>
          <button data-action="remove-from-cart" data-id="${item.product.id}" class="text-slate-400 hover:text-red-500 p-1 text-sm" title="حذف">
            🗑️
          </button>
        </div>
      `).join('');
    }

    function toggleCart(show) {
      document.getElementById('cartDrawer').classList.toggle('hidden', !show);
    }

    function applyEnteredCoupon() {
      const code = document.getElementById('couponInput').value.trim().toUpperCase();
      applyCouponCode(code);
    }

    function applyCouponCode(code) {
      if (code === 'PERFUME10' || code === 'CAIRO2026') {
        activeCoupon = { code, discountPercent: 10 };
        showToast(`تم تطبيق كود الخصم (${code}) بنجاح! خصم 10% ✨`);
        updateCartUI();
      } else {
        showToast('كود الخصم غير صالح أو منتهي الصلاحية ✕');
      }
    }

    // -------------------------------------------------------------
    // Helper Utilities: Copy, Barcode & Sound Chime
    // -------------------------------------------------------------
    function copyToClipboard(text, label = '') {
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text).then(() => {
          showToast(`تم نسخ ${label}: ${text} 📋`);
        }).catch(() => fallbackCopy(text, label));
      } else {
        fallbackCopy(text, label);
      }
    }

    function fallbackCopy(text, label = '') {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand('copy');
        showToast(`تم نسخ ${label}: ${text} 📋`);
      } catch (err) {
        showToast(`انسخ يدوياً: ${text}`);
      }
      document.body.removeChild(ta);
    }

    function copyInstapayAmount() {
      if (currentPaymentTotalText) {
        copyToClipboard(currentPaymentTotalText.replace(/[^\d]/g, ''), 'المبلغ المطلوب');
      }
    }

    function copyFawryRefCode() {
      const el = document.getElementById('fawryRefCode');
      if (el) copyToClipboard(el.textContent.replace(/\s+/g, ''), 'رقم سداد فوري');
    }

    function closePaymentModals() {
      if (paymentCountdownInterval) clearInterval(paymentCountdownInterval);
      if (bankListenerAutoTimeout) clearTimeout(bankListenerAutoTimeout);
      document.getElementById('instapayModal').classList.add('hidden');
      document.getElementById('fawryModal').classList.add('hidden');
      document.getElementById('cardModal').classList.add('hidden');
    }

    function playSuccessChime() {
      try {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (!AudioCtx) return;
        const ctx = new AudioCtx();
        const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6 (Celebration chord)
        notes.forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.08);
          gain.gain.setValueAtTime(0.12, ctx.currentTime + idx * 0.08);
          gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + idx * 0.08 + 0.5);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(ctx.currentTime + idx * 0.08);
          osc.stop(ctx.currentTime + idx * 0.08 + 0.55);
        });
      } catch(e) {
        console.log('Audio not supported or blocked:', e);
      }
    }

    function playWelcomeChime() {
      try {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (!AudioCtx) return;
        const ctx = new AudioCtx();
        const notes = [440, 554.37, 659.25]; // A4, C#5, E5 (Soft luxury welcome chord)
        notes.forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.08);
          gain.gain.setValueAtTime(0.05, ctx.currentTime + idx * 0.08);
          gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + idx * 0.08 + 0.4);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(ctx.currentTime + idx * 0.08);
          osc.stop(ctx.currentTime + idx * 0.08 + 0.45);
        });
      } catch(e) {}
    }

    function startPaymentCountdown(elementId, minutes) {
      if (paymentCountdownInterval) clearInterval(paymentCountdownInterval);
      let seconds = minutes * 60;
      const el = document.getElementById(elementId);
      if (!el) return;

      paymentCountdownInterval = setInterval(() => {
        seconds--;
        if (seconds <= 0) {
          clearInterval(paymentCountdownInterval);
          el.textContent = '00:00 (منتهي)';
          return;
        }
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        el.textContent = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
      }, 1000);
    }

    function renderFawryBarcode(code) {
      const digits = String(code).split('');
      let barsSvg = '';
      let x = 12;
      // Start guard bars
      barsSvg += `<rect x="${x}" y="0" width="3" height="48" fill="#0f172a"/>`; x += 5;
      barsSvg += `<rect x="${x}" y="0" width="2" height="48" fill="#0f172a"/>`; x += 6;

      digits.forEach((d, i) => {
        const val = parseInt(d, 10);
        const w1 = (val % 3) + 1.8;
        const w2 = ((val + 2) % 3) + 1.5;
        const gap1 = ((val + 1) % 3) + 2.5;
        const gap2 = 3.5;
        barsSvg += `<rect x="${x}" y="0" width="${w1}" height="42" fill="#0f172a"/>`;
        x += w1 + gap1;
        barsSvg += `<rect x="${x}" y="0" width="${w2}" height="42" fill="#0f172a"/>`;
        x += w2 + gap2;
      });

      // End guard bars
      barsSvg += `<rect x="${x}" y="0" width="2" height="48" fill="#0f172a"/>`; x += 5;
      barsSvg += `<rect x="${x}" y="0" width="3" height="48" fill="#0f172a"/>`; x += 10;

      const formattedCode = String(code).replace(/(\d{4})(\d{4})/, '$1 $2');

      return `
        <svg viewBox="0 0 ${x + 6} 64" class="w-full h-16 max-w-[280px] mx-auto select-none">
          <rect width="100%" height="100%" fill="#ffffff" rx="6"/>
          ${barsSvg}
          <text x="${(x+6)/2}" y="58" text-anchor="middle" font-family="monospace" font-size="11" font-weight="900" fill="#0f172a" letter-spacing="3">${formattedCode}</text>
        </svg>
      `;
    }

    // -------------------------------------------------------------
    // 7. Checkout & Payment Simulation
    // -------------------------------------------------------------
    function openCheckoutModal() {
      if (cart.length === 0) return;
      toggleCart(false);
      document.getElementById('checkoutModal').classList.remove('hidden');
    }

    function closeCheckoutModal() {
      document.getElementById('checkoutModal').classList.add('hidden');
    }

    function handleCheckoutSubmit(e) {
      e.preventDefault();
      const method = document.querySelector('input[name="paymentMethod"]:checked').value;
      const custName = document.getElementById('custName').value.trim();
      const custPhone = document.getElementById('custPhone').value.trim();
      const custAddress = document.getElementById('custAddress').value.trim();
      const custCity = document.getElementById('custCity').value;

      const subtotal = cart.reduce((s, i) => s + (i.product.price * i.quantity), 0);
      const discount = activeCoupon ? Math.round((subtotal * activeCoupon.discountPercent) / 100) : 0;
      const shipping = subtotal >= 2000 ? 0 : 50;
      const total = subtotal - discount + shipping;
      const orderNum = 'ORD-' + Math.floor(100000 + Math.random() * 900000);

      currentPendingOrder = {
        id: orderNum,
        customerName: custName,
        phone: custPhone,
        city: custCity,
        address: `${custAddress} - ${custCity}`,
        paymentMethod: method,
        paymentStatus: (method === 'cod' ? 'cod_pending' : 'pending'),
        paymentRef: '',
        paymentTime: '',
        itemsCount: cart.reduce((s, i) => s + i.quantity, 0),
        total: total,
        status: 'pending',
        date: 'الآن'
      };

      currentPaymentTotalText = `${total.toLocaleString('ar-EG')} ج.م`;
      closeCheckoutModal();

      if (method === 'instapay') {
        document.getElementById('instapayAmount').textContent = currentPaymentTotalText;
        
        // Dynamic QR code with exact amount and order reference
        const qrData = encodeURIComponent(`instapay://pay?ipa=perfumepalace@instapay&amount=${total}&ref=${orderNum}&name=PerfumePalace`);
        document.getElementById('instapayQrImage').src = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&margin=4&data=${qrData}`;

        // Reset states
        document.getElementById('instapayListeningState').classList.remove('hidden');
        document.getElementById('instapaySuccessState').classList.add('hidden');
        document.getElementById('instapayCustRefInput').value = '';

        startPaymentCountdown('instapayCountdownTimer', 10);
        document.getElementById('instapayModal').classList.remove('hidden');

        // Optional auto-detect simulated bank listener after 14 seconds
        if (bankListenerAutoTimeout) clearTimeout(bankListenerAutoTimeout);
        bankListenerAutoTimeout = setTimeout(() => {
          if (!document.getElementById('instapayModal').classList.contains('hidden') && 
              currentPendingOrder && currentPendingOrder.paymentStatus !== 'paid') {
            simulateIncomingBankTransfer();
          }
        }, 14000);

      } else if (method === 'fawry') {
        const refCode = Math.floor(10000000 + Math.random() * 90000000);
        currentPendingOrder.paymentRef = String(refCode);

        document.getElementById('fawryAmount').textContent = currentPaymentTotalText;
        document.getElementById('fawryRefCode').textContent = String(refCode).replace(/(\d{4})(\d{4})/, '$1 $2');
        document.getElementById('fawryBarcodeContainer').innerHTML = renderFawryBarcode(refCode);

        // Reset states
        document.getElementById('fawryListeningState').classList.remove('hidden');
        document.getElementById('fawrySuccessState').classList.add('hidden');

        startPaymentCountdown('fawryCountdownTimer', 15);
        document.getElementById('fawryModal').classList.remove('hidden');

      } else if (method === 'card') {
        document.getElementById('cardModal').classList.remove('hidden');
      } else {
        // COD
        confirmOrderSuccess('cod');
      }
    }

    // Instapay Real-time Listener Events ("الموقع يسمع مسافة ما العميل يحول")
    function simulateIncomingBankTransfer() {
      if (!currentPendingOrder) return;
      if (paymentCountdownInterval) clearInterval(paymentCountdownInterval);
      if (bankListenerAutoTimeout) clearTimeout(bankListenerAutoTimeout);

      playSuccessChime();

      const ipnRef = 'IPN-' + Math.floor(100000000 + Math.random() * 900000000);
      const nowTime = new Date().toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit' });

      currentPendingOrder.paymentStatus = 'paid';
      currentPendingOrder.paymentRef = ipnRef;
      currentPendingOrder.paymentTime = nowTime;
      currentPendingOrder.status = 'processing'; // Advance tracking immediately

      document.getElementById('instapayDetectedAmount').textContent = `${currentPendingOrder.total.toLocaleString('ar-EG')}`;
      document.getElementById('instapayDetectedRef').textContent = ipnRef;
      document.getElementById('instapayDetectedTime').textContent = nowTime;

      document.getElementById('instapayListeningState').classList.add('hidden');
      document.getElementById('instapaySuccessState').classList.remove('hidden');

      // Save order to system
      saveCompletedPendingOrder();
      showToast('🔔 وصل إشعار بنكي مؤكد! تم إيداع المبلغ في الحساب بنجاح ✓', '🎉');
    }

    function verifyInstapayTransferManually() {
      const refInput = document.getElementById('instapayCustRefInput').value.trim();
      if (!refInput) {
        showToast('يرجى كتابة رقم العملية المرجعي أو آخر 4 أرقام من حسابك المحول منه');
        return;
      }
      showToast('جاري مطابقة المعاملة مع البنك المركزي لحظياً... ⏳');
      setTimeout(() => {
        simulateIncomingBankTransfer();
      }, 1000);
    }

    // Fawry Real-time Listener Events ("الموقع يسمع أول ما يدفع في فوري")
    function simulateIncomingFawryPayment() {
      if (!currentPendingOrder) return;
      if (paymentCountdownInterval) clearInterval(paymentCountdownInterval);

      playSuccessChime();

      const fawryReceipt = 'FWR-' + (currentPendingOrder.paymentRef || '98421098') + '-POS';
      const nowTime = new Date().toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit' });

      currentPendingOrder.paymentStatus = 'paid';
      currentPendingOrder.paymentRef = fawryReceipt;
      currentPendingOrder.paymentTime = nowTime;
      currentPendingOrder.status = 'processing'; // Advance tracking immediately

      document.getElementById('fawryDetectedReceipt').textContent = fawryReceipt;
      document.getElementById('fawryDetectedTime').textContent = nowTime;

      document.getElementById('fawryListeningState').classList.add('hidden');
      document.getElementById('fawrySuccessState').classList.remove('hidden');

      // Save order to system
      saveCompletedPendingOrder();
      showToast('🔔 وصل إشعار شبكة فوري! تم سداد الفاتورة وتحصيل المبلغ ✓', '🎉');
    }

    function saveCompletedPendingOrder() {
      if (!currentPendingOrder) return;
      
      const existingIdx = orders.findIndex(o => o.id === currentPendingOrder.id);
      if (existingIdx > -1) {
        orders[existingIdx] = { ...currentPendingOrder };
      } else {
        orders.unshift({ ...currentPendingOrder });
      }

      lastCreatedOrder = { ...currentPendingOrder };
      localStorage.setItem('perfume_store_orders', JSON.stringify(orders));

      // Clear cart
      cart = [];
      updateCartUI();
      updateAdminStats();
    }

    function finishPaymentAndGoToTracking() {
      const orderId = currentPendingOrder ? currentPendingOrder.id : (lastCreatedOrder ? lastCreatedOrder.id : '');
      closePaymentModals();
      if (orderId) {
        openTrackingModal(orderId);
      }
    }

    function confirmOrderSuccess(method) {
      closePaymentModals();

      if (currentPendingOrder) {
        currentPendingOrder.paymentMethod = method;
        if (method === 'card') {
          currentPendingOrder.paymentStatus = 'paid';
          currentPendingOrder.paymentRef = 'CARD-' + Math.floor(100000 + Math.random() * 900000);
          currentPendingOrder.status = 'processing';
        }
        saveCompletedPendingOrder();
      }

      const order = currentPendingOrder || lastCreatedOrder;
      if (!order) return;

      // Update Order Success Modal
      document.getElementById('successOrderNumber').textContent = order.id;
      document.getElementById('successPaymentMethod').textContent = 
        method === 'instapay' ? 'Instapay (إنستاباي)' :
        method === 'fawry' ? 'فوري (Fawry Pay)' :
        method === 'card' ? 'بطاقة بنكية' : 'الدفع عند الاستلام';
      document.getElementById('successAddress').textContent = order.address;
      document.getElementById('successTotal').textContent = `${order.total.toLocaleString('ar-EG')} ج.م`;

      document.getElementById('orderSuccessModal').classList.remove('hidden');
    }

    function closeSuccessModal() {
      document.getElementById('orderSuccessModal').classList.add('hidden');
    }

    // -------------------------------------------------------------
    // 8. Live Order Tracking
    // -------------------------------------------------------------
    function openTrackingModal(orderId = '') {
      document.getElementById('trackingModal').classList.remove('hidden');
      if (orderId) {
        document.getElementById('trackOrderInput').value = orderId;
        searchOrderTracking();
      }
    }

    function closeTrackingModal() {
      document.getElementById('trackingModal').classList.add('hidden');
    }

    function trackCurrentPlacedOrder() {
      closeSuccessModal();
      if (lastCreatedOrder) {
        openTrackingModal(lastCreatedOrder.id);
      }
    }

    function searchOrderTracking() {
      const query = document.getElementById('trackOrderInput').value.trim().toUpperCase();
      const order = orders.find(o => o.id.toUpperCase() === query);
      const card = document.getElementById('trackingDetailsCard');

      if (!order) {
        showToast('لم يتم العثور على طلب بهذا الرقم، تأكد من الصيغة (مثال: ORD-102948)');
        card.classList.add('hidden');
        return;
      }

      card.classList.remove('hidden');
      document.getElementById('trackOrderNumDisplay').textContent = order.id;
      document.getElementById('trackCustCityDisplay').textContent = `${order.customerName} (${order.city})`;

      // Status Badge
      const statusMap = {
        pending: '1. تم استلام الطلب',
        processing: '2. جاري التجهيز والتغليف',
        shipped: '3. مع مندوب الشحن (في الطريق)',
        delivered: '4. تم التسليم بنجاح ✓'
      };
      document.getElementById('trackStatusBadge').textContent = statusMap[order.status] || order.status;

      // Verified Payment Banner in Tracking Card
      const paymentBanner = document.getElementById('trackPaymentBanner');
      if (order.paymentStatus === 'paid') {
        paymentBanner.classList.remove('hidden');
        paymentBanner.className = 'bg-emerald-50 border border-emerald-200 p-3 rounded-2xl flex items-center justify-between';
        document.getElementById('trackPaymentStatusTitle').textContent = 
          order.paymentMethod === 'instapay' ? 'تم استلام الفلوس على الحساب البنكي (إنستاباي) ✓' :
          order.paymentMethod === 'fawry' ? 'تم سداد الفاتورة بنجاح في فوري ✓' : 'تم الدفع بالبطاقة البنكية معتمداً ✓';
        document.getElementById('trackPaymentStatusSub').textContent = `الرقم المرجعي: ${order.paymentRef || 'معتمد'}`;
        document.getElementById('trackPaymentAmountBadge').textContent = `${order.total.toLocaleString('ar-EG')} ج.م`;
      } else if (order.paymentMethod === 'cod') {
        paymentBanner.classList.remove('hidden');
        paymentBanner.className = 'bg-slate-100 border border-slate-200 p-3 rounded-2xl flex items-center justify-between text-slate-700';
        document.getElementById('trackPaymentStatusTitle').textContent = 'الدفع عند الاستلام لمندوب الشحن';
        document.getElementById('trackPaymentStatusSub').textContent = 'يتم تحصيل المبلغ نقداً عند المعاينة والاستلام';
        document.getElementById('trackPaymentAmountBadge').textContent = `${order.total.toLocaleString('ar-EG')} ج.م`;
      } else {
        paymentBanner.classList.remove('hidden');
        paymentBanner.className = 'bg-amber-50 border border-amber-200 p-3 rounded-2xl flex items-center justify-between text-amber-900';
        document.getElementById('trackPaymentStatusTitle').textContent = 'بانتظار تأكيد التحويل';
        document.getElementById('trackPaymentStatusSub').textContent = `كود السداد: ${order.paymentRef || 'قيد الانتظار'}`;
        document.getElementById('trackPaymentAmountBadge').textContent = `${order.total.toLocaleString('ar-EG')} ج.م`;
      }

      // Update timeline highlights
      const steps = ['pending', 'processing', 'shipped', 'delivered'];
      const currentIdx = steps.indexOf(order.status);

      steps.forEach((step, idx) => {
        const el = document.getElementById(`step-${step}`);
        const dot = el.querySelector('span');
        if (idx <= currentIdx) {
          dot.className = 'absolute -right-6 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white shadow';
          el.querySelector('div span:first-child').className = 'font-bold text-emerald-800 block text-xs';
        } else {
          dot.className = 'absolute -right-6 w-4 h-4 rounded-full bg-slate-300 border-2 border-white';
          el.querySelector('div span:first-child').className = 'font-bold text-slate-400 block text-xs';
        }
      });
    }

    // -------------------------------------------------------------
    // 9. Admin Operations (CRUD & Status Updates)
    // -------------------------------------------------------------
    function toggleRole() {
      isAdminView = !isAdminView;
      const adminView = document.getElementById('adminView');
      const heroSection = document.getElementById('heroSection');
      const badge = document.getElementById('roleBadge');

      if (isAdminView) {
        adminView.classList.remove('hidden');
        heroSection.classList.add('hidden');
        badge.textContent = '👤 وضع العميل';
        updateAdminStats();
      } else {
        adminView.classList.add('hidden');
        heroSection.classList.remove('hidden');
        badge.textContent = '🛡️ المشرف';
      }
    }

    function updateAdminStats() {
      document.getElementById('adminTotalProducts').textContent = products.length;
      document.getElementById('adminTotalOrders').textContent = orders.length;

      const totalRev = orders.reduce((s, o) => s + o.total, 0);
      document.getElementById('adminTotalRevenue').textContent = `${totalRev.toLocaleString('ar-EG')} ج.م`;

      const aov = orders.length > 0 ? Math.round(totalRev / orders.length) : 0;
      document.getElementById('adminAvgOrder').textContent = `${aov.toLocaleString('ar-EG')} ج.م`;

      // Render Admin Orders Table
      const orderTbody = document.getElementById('adminOrdersTableBody');
      if (orders.length === 0) {
        orderTbody.innerHTML = `<tr><td colspan="7" class="p-6 text-center text-slate-400">لا توجد طلبات مسجلة بعد.</td></tr>`;
      } else {
        orderTbody.innerHTML = orders.map(o => `
          <tr class="hover:bg-slate-50 transition">
            <td class="p-3 font-mono font-bold text-amber-700">${o.id}</td>
            <td class="p-3 font-bold text-slate-900">${o.customerName}</td>
            <td class="p-3 text-[11px] text-slate-500">${o.phone} • ${o.city}</td>
            <td class="p-3">
              ${
                o.paymentMethod === 'instapay'
                  ? `<div class="space-y-0.5">
                       <span class="inline-flex items-center gap-1 bg-purple-100 text-purple-900 border border-purple-200 px-2 py-0.5 rounded-lg text-[10px] font-bold">⚡ إنستاباي ${o.paymentStatus === 'paid' ? '✓' : ''}</span>
                       ${o.paymentStatus === 'paid' ? `<span class="block text-[9px] font-mono text-purple-700 font-bold">${o.paymentRef || 'IPN-معتمد'}</span>` : '<span class="block text-[9px] text-amber-700">بانتظار التحويل</span>'}
                     </div>`
                  : o.paymentMethod === 'fawry'
                  ? `<div class="space-y-0.5">
                       <span class="inline-flex items-center gap-1 bg-amber-100 text-amber-900 border border-amber-300 px-2 py-0.5 rounded-lg text-[10px] font-bold">🔶 فوري ${o.paymentStatus === 'paid' ? '✓' : ''}</span>
                       <span class="block text-[9px] font-mono text-amber-800 font-bold">${o.paymentRef || 'كود: 98421098'}</span>
                     </div>`
                  : o.paymentMethod === 'card'
                  ? `<span class="inline-flex items-center gap-1 bg-blue-100 text-blue-900 px-2 py-0.5 rounded-lg text-[10px] font-bold">💳 بطاقة بنكية ✓</span>`
                  : `<span class="inline-flex items-center gap-1 bg-slate-100 text-slate-700 px-2 py-0.5 rounded-lg text-[10px] font-bold">💵 عند الاستلام</span>`
              }
            </td>
            <td class="p-3 font-black text-amber-900">${o.total.toLocaleString('ar-EG')} ج.م</td>
            <td class="p-3">
              <span class="inline-block px-2.5 py-1 rounded-full text-[10px] font-bold ${
                o.status === 'delivered' ? 'bg-emerald-100 text-emerald-800' :
                o.status === 'shipped' ? 'bg-blue-100 text-blue-800' :
                o.status === 'processing' ? 'bg-purple-100 text-purple-800' :
                'bg-amber-100 text-amber-800'
              }">
                ${o.status === 'pending' ? '⏳ قيد المراجعة' : o.status === 'processing' ? '⚙️ قيد التجهيز' : o.status === 'shipped' ? '🚚 تم الشحن' : '✓ تم التسليم'}
              </span>
            </td>
            <td class="p-3 flex items-center gap-1.5">
              <select onchange="changeOrderStatus('${o.id}', this.value)" class="bg-white border border-slate-200 rounded-lg px-2 py-1 text-[11px] focus:ring-1 focus:ring-amber-600">
                <option value="pending" ${o.status==='pending'?'selected':''}>قيد المراجعة</option>
                <option value="processing" ${o.status==='processing'?'selected':''}>قيد التجهيز</option>
                <option value="shipped" ${o.status==='shipped'?'selected':''}>تم الشحن</option>
                <option value="delivered" ${o.status==='delivered'?'selected':''}>تم التسليم</option>
              </select>
              <button data-action="delete-order" data-id="${o.id}" class="text-red-500 hover:text-red-700 bg-red-50 hover:bg-red-100 p-1.5 rounded-lg text-xs font-bold transition" title="حذف الطلب">
                🗑️
              </button>
            </td>
          </tr>
        `).join('');
      }

      // Render Admin Products Table
      const prodTbody = document.getElementById('adminProductsTableBody');
      prodTbody.innerHTML = products.map(p => `
        <tr class="hover:bg-slate-50 transition">
          <td class="p-3 flex items-center gap-2">
            <img src="${p.image}" class="w-8 h-8 rounded-lg object-cover" />
            <span class="font-bold text-slate-800 line-clamp-1">${p.name}</span>
          </td>
          <td class="p-3 text-[11px] text-slate-500">${p.category}</td>
          <td class="p-3 font-bold text-amber-700">${p.price} ج.م</td>
          <td class="p-3 font-bold text-slate-700">${p.stock} قطعة</td>
          <td class="p-3 flex items-center gap-2">
            <button data-action="open-edit-product" data-id="${p.id}" class="text-amber-700 hover:text-amber-900 bg-amber-50 hover:bg-amber-100 px-2 py-1 rounded-lg font-bold text-xs transition flex items-center gap-1">
              ✏️ تعديل
            </button>
            <button data-action="delete-product" data-id="${p.id}" class="text-red-500 hover:text-red-700 bg-red-50 hover:bg-red-100 px-2 py-1 rounded-lg font-bold text-xs transition flex items-center gap-1">
              🗑️ حذف
            </button>
          </td>
        </tr>
      `).join('');
    }

    function changeOrderStatus(orderId, newStatus) {
      const order = orders.find(o => o.id === orderId);
      if (order) {
        order.status = newStatus;
        localStorage.setItem('perfume_store_orders', JSON.stringify(orders));
        updateAdminStats();
        showToast(`تم تحديث حالة الطلب (${orderId}) إلى: ${newStatus}`);
      }
    }

    function refreshAdminData() {
      updateAdminStats();
      showToast('تم تحديث بيانات لوحة المشرف ✓');
    }

    function openAddProductModal() {
      document.getElementById('addProductModal').classList.remove('hidden');
    }

    function closeAddProductModal() {
      document.getElementById('addProductModal').classList.add('hidden');
    }

    function handleCreateProduct(e) {
      e.preventDefault();
      const name = document.getElementById('newProdName').value.trim();
      const category = document.getElementById('newProdCategory').value;
      const brand = document.getElementById('newProdBrand').value.trim();
      const price = parseFloat(document.getElementById('newProdPrice').value);
      const comparePrice = parseFloat(document.getElementById('newProdCompare').value) || null;
      const stock = parseInt(document.getElementById('newProdStock').value, 10);
      const image = document.getElementById('newProdImage').value.trim();
      const desc = document.getElementById('newProdDesc').value.trim();
      const top = document.getElementById('newProdPyramidTop').value.trim() || 'البرغموت والورد';
      const heart = document.getElementById('newProdPyramidHeart').value.trim() || 'الياسمين والعود';
      const base = document.getElementById('newProdPyramidBase').value.trim() || 'العنبر والمسك';

      const newProd = {
        id: Date.now(),
        name,
        category,
        brand,
        price,
        comparePrice,
        stock,
        rating: 5.0,
        reviewsCount: 1,
        isFeatured: true,
        image,
        desc,
        pyramid: { top, heart, base },
        reviews: []
      };

      products.unshift(newProd);
      closeAddProductModal();
      renderProducts();
      updateAdminStats();
      showToast(`تمت إضافة العطر الجديد "${name}" إلى المتجر بنجاح! 🎉`);
    }

    function openEditProductModal(id) {
      const prod = products.find(p => p.id === id);
      if (!prod) return;

      document.getElementById('editProdId').value = prod.id;
      document.getElementById('editProdName').value = prod.name;
      document.getElementById('editProdCategory').value = prod.category;
      document.getElementById('editProdBrand').value = prod.brand;
      document.getElementById('editProdPrice').value = prod.price;
      document.getElementById('editProdCompare').value = prod.comparePrice || '';
      document.getElementById('editProdStock').value = prod.stock;
      document.getElementById('editProdImage').value = prod.image;
      document.getElementById('editProdImgPreview').src = prod.image;
      document.getElementById('editProdDesc').value = prod.desc;

      const pyr = prod.pyramid || { top: '', heart: '', base: '' };
      document.getElementById('editProdPyramidTop').value = pyr.top || '';
      document.getElementById('editProdPyramidHeart').value = pyr.heart || '';
      document.getElementById('editProdPyramidBase').value = pyr.base || '';

      document.getElementById('editProductModal').classList.remove('hidden');
    }

    function closeEditProductModal() {
      document.getElementById('editProductModal').classList.add('hidden');
    }

    function handleUpdateProduct(e) {
      e.preventDefault();
      const id = parseInt(document.getElementById('editProdId').value, 10);
      const prod = products.find(p => p.id === id);
      if (!prod) return;

      prod.name = document.getElementById('editProdName').value.trim();
      prod.category = document.getElementById('editProdCategory').value;
      prod.brand = document.getElementById('editProdBrand').value.trim();
      prod.price = parseFloat(document.getElementById('editProdPrice').value);
      prod.comparePrice = parseFloat(document.getElementById('editProdCompare').value) || null;
      prod.stock = parseInt(document.getElementById('editProdStock').value, 10);
      prod.image = document.getElementById('editProdImage').value.trim();
      prod.desc = document.getElementById('editProdDesc').value.trim();

      prod.pyramid = {
        top: document.getElementById('editProdPyramidTop').value.trim() || 'البرغموت والورد',
        heart: document.getElementById('editProdPyramidHeart').value.trim() || 'الياسمين والعود',
        base: document.getElementById('editProdPyramidBase').value.trim() || 'العنبر والمسك'
      };

      closeEditProductModal();
      renderProducts();
      updateAdminStats();
      showToast(`تم تحديث بيانات ومكونات "${prod.name}" بنجاح! ✨`);
    }

    function deleteProduct(id) {
      if (!confirm('هل أنت متأكد من حذف هذا العطر من المتجر؟')) return;
      products = products.filter(p => p.id !== id);
      renderProducts();
      updateAdminStats();
      showToast('تم حذف المنتج من الكتالوج 🗑️');
    }

    function openAddOrderModal() {
      const prodSelect = document.getElementById('manualOrderProduct');
      prodSelect.innerHTML = products.map(p => `
        <option value="${p.id}" data-price="${p.price}">${p.name} (${p.price} ج.م)</option>
      `).join('');
      calculateManualOrderTotal();
      document.getElementById('addOrderModal').classList.remove('hidden');
    }

    function closeAddOrderModal() {
      document.getElementById('addOrderModal').classList.add('hidden');
    }

    function calculateManualOrderTotal() {
      const prodSelect = document.getElementById('manualOrderProduct');
      const selectedOption = prodSelect.options[prodSelect.selectedIndex];
      const price = selectedOption ? parseFloat(selectedOption.getAttribute('data-price') || 0) : 0;
      const qty = parseInt(document.getElementById('manualOrderQty').value || 1, 10);
      const subtotal = price * qty;
      const shipping = subtotal >= 2000 ? 0 : 50;
      const total = subtotal + shipping;
      document.getElementById('manualOrderTotalDisplay').textContent = `${total.toLocaleString('ar-EG')} ج.م`;
      return total;
    }

    function handleCreateOrderManual(e) {
      e.preventDefault();
      const name = document.getElementById('manualCustName').value.trim();
      const phone = document.getElementById('manualCustPhone').value.trim();
      const city = document.getElementById('manualCustCity').value;
      const address = document.getElementById('manualCustAddress').value.trim();
      const qty = parseInt(document.getElementById('manualOrderQty').value || 1, 10);
      const paymentMethod = document.getElementById('manualPaymentMethod').value;
      const status = document.getElementById('manualOrderStatus').value;
      const total = calculateManualOrderTotal();
      const orderNum = 'ORD-' + Math.floor(100000 + Math.random() * 900000);

      const newOrder = {
        id: orderNum,
        customerName: name,
        phone: phone,
        city: city,
        address: `${address} - ${city}`,
        paymentMethod: paymentMethod,
        paymentStatus: (paymentMethod === 'cod' ? 'cod_pending' : 'paid'),
        paymentRef: (paymentMethod === 'instapay' ? 'IPN-' + Math.floor(100000000 + Math.random()*900000000) : paymentMethod === 'fawry' ? 'FWR-' + Math.floor(10000000 + Math.random()*90000000) : 'MANUAL'),
        paymentTime: 'الآن',
        itemsCount: qty,
        total: total,
        status: status,
        date: 'الآن (إدخال يدوي)'
      };

      orders.unshift(newOrder);
      localStorage.setItem('perfume_store_orders', JSON.stringify(orders));
      closeAddOrderModal();
      updateAdminStats();
      showToast(`تمت إضافة الطلب (${orderNum}) بنجاح! 📦`);
    }

    function deleteOrder(orderId) {
      if (!confirm(`هل أنت متأكد من حذف الطلب (${orderId}) نهائياً من النظام؟`)) return;
      orders = orders.filter(o => o.id !== orderId);
      localStorage.setItem('perfume_store_orders', JSON.stringify(orders));
      updateAdminStats();
      showToast(`تم حذف الطلب (${orderId}) بنجاح 🗑️`);
    }

    // -------------------------------------------------------------
    // 10. User Auth & Profiles
    // -------------------------------------------------------------
    function openAuthModal() {
      document.getElementById('authModal').classList.remove('hidden');
    }

    function closeAuthModal() {
      document.getElementById('authModal').classList.add('hidden');
    }

    function prefillAccount(type) {
      if (type === 'admin') {
        document.getElementById('authEmail').value = 'admin@perfumestore.eg';
        document.getElementById('authPassword').value = 'Admin@12345';
      } else {
        document.getElementById('authEmail').value = 'customer@example.com';
        document.getElementById('authPassword').value = 'Customer@12345';
      }
    }

    function handleAuthSubmit(e) {
      e.preventDefault();
      const email = document.getElementById('authEmail').value.trim();
      if (email.includes('admin')) {
        currentUser = { name: 'مدير المتجر', email, role: 'admin' };
        document.getElementById('navUserName').textContent = 'مدير المتجر';
        closeAuthModal();
        showToast('تم تسجيل الدخول كمسؤول للمتجر 🛡️');
        if (!isAdminView) toggleRole();
      } else {
        currentUser = { name: 'رانيا المصرية', email, role: 'customer' };
        document.getElementById('navUserName').textContent = 'رانيا';
        closeAuthModal();
        showToast('مرحباً بعودتك يا رانيا! ✨');
      }
    }

    // -------------------------------------------------------------
    // 11. Toast Notifications
    // -------------------------------------------------------------
    function showToast(message, icon = '✨') {
      const toast = document.getElementById('toast');
      document.getElementById('toastMessage').textContent = message;
      document.getElementById('toastIcon').textContent = icon;

      toast.classList.remove('translate-y-20', 'opacity-0');
      toast.classList.add('translate-y-0', 'opacity-100');

      setTimeout(() => {
        toast.classList.remove('translate-y-0', 'opacity-100');
        toast.classList.add('translate-y-20', 'opacity-0');
      }, 3000);
    }


// =====================================================================
// Central Event Delegation System (Strict CSP Compliant - Zero Inline JS)
// =====================================================================
document.addEventListener('click', function(e) {
  const target = e.target.closest('[data-action]');
  if (!target) return;

  const action = target.getAttribute('data-action');
  const id = target.getAttribute('data-id');
  const val = target.getAttribute('data-val');
  const msg = target.getAttribute('data-msg');

  switch (action) {
    case 'reset-filters':
      resetFilters();
      break;
    case 'clear-search':
      clearSearch();
      break;
    case 'open-tracking':
      openTrackingModal(val || id);
      break;
    case 'close-tracking':
      closeTrackingModal();
      break;
    case 'search-order-tracking':
      searchOrderTracking();
      break;
    case 'open-wishlist':
      toggleWishlist(true);
      break;
    case 'close-wishlist':
      toggleWishlist(false);
      break;
    case 'open-cart':
      toggleCart(true);
      break;
    case 'close-cart':
      toggleCart(false);
      break;
    case 'open-auth':
      openAuthModal();
      break;
    case 'close-auth':
      closeAuthModal();
      break;
    case 'prefill-account':
      prefillAccount(val);
      break;
    case 'toggle-role':
      toggleRole();
      break;
    case 'apply-coupon':
      applyCouponCode(val || 'PERFUME10');
      break;
    case 'apply-entered-coupon':
      applyEnteredCoupon();
      break;
    case 'open-checkout':
      openCheckoutModal();
      break;
    case 'close-checkout':
      closeCheckoutModal();
      break;
    case 'close-success':
      closeSuccessModal();
      break;
    case 'track-current-order':
      trackCurrentPlacedOrder();
      break;
    case 'close-product-detail':
      closeProductDetailModal();
      break;
    case 'close-payment-modals':
      closePaymentModals();
      break;
    case 'finish-payment-track':
      finishPaymentAndGoToTracking();
      break;
    case 'copy-instapay-amount':
      copyInstapayAmount();
      break;
    case 'copy-fawry-code':
      copyFawryRefCode();
      break;
    case 'copy-text':
      copyToClipboard(val, msg || 'تم النسخ بنجاح!');
      break;
    case 'verify-instapay-manual':
      verifyInstapayTransferManually();
      break;
    case 'simulate-instapay':
      simulateIncomingBankTransfer();
      break;
    case 'simulate-fawry':
      simulateIncomingFawryPayment();
      break;
    case 'confirm-success':
      confirmOrderSuccess(val || 'card');
      break;
    case 'open-add-order':
      openAddOrderModal();
      break;
    case 'close-add-order':
      closeAddOrderModal();
      break;
    case 'open-add-product':
      openAddProductModal();
      break;
    case 'close-add-product':
      closeAddProductModal();
      break;
    case 'open-edit-product':
      openEditProductModal(Number(id));
      break;
    case 'close-edit-product':
      closeEditProductModal();
      break;
    case 'refresh-admin':
      refreshAdminData();
      break;
    case 'set-category':
      setCategory(val);
      break;
    case 'add-to-cart':
      addToCart(Number(id));
      break;
    case 'remove-from-cart':
      removeFromCart(Number(id));
      break;
    case 'update-cart-qty':
      updateCartQuantity(Number(id), Number(val));
      break;
    case 'toggle-wishlist-item':
      toggleWishlistItem(Number(id));
      break;
    case 'move-wishlist-to-cart':
      addToCart(Number(id));
      toggleWishlistItem(Number(id));
      break;
    case 'open-detail':
      openProductDetailModal(Number(id));
      break;
    case 'delete-product':
      deleteProduct(Number(id));
      break;
    case 'delete-order':
      deleteOrder(val || id);
      break;
  }
});

// Central Form & Input Listeners
window.addEventListener('DOMContentLoaded', () => {
  // Search inputs (desktop & mobile)
  const searchInputs = document.querySelectorAll('#searchInput, .search-input-field');
  searchInputs.forEach(input => {
    input.addEventListener('input', (e) => handleSearch(e.target.value));
  });

  // Sort select
  const sortSelect = document.getElementById('sortSelect');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => handleSort(e.target.value));
  }

  // Edit product image preview
  const editProdImage = document.getElementById('editProdImage');
  const editProdImgPreview = document.getElementById('editProdImgPreview');
  if (editProdImage && editProdImgPreview) {
    editProdImage.addEventListener('input', (e) => {
      editProdImgPreview.src = e.target.value;
    });
  }

  // Manual order calculations in admin modal
  const manualOrderProduct = document.getElementById('manualOrderProduct');
  const manualOrderQty = document.getElementById('manualOrderQty');
  if (manualOrderProduct) {
    manualOrderProduct.addEventListener('change', calculateManualOrderTotal);
  }
  if (manualOrderQty) {
    manualOrderQty.addEventListener('input', calculateManualOrderTotal);
    manualOrderQty.addEventListener('change', calculateManualOrderTotal);
  }

  // Form submit listeners
  const formMap = [
    { id: 'authForm', fn: handleAuthSubmit },
    { id: 'checkoutForm', fn: handleCheckoutSubmit },
    { id: 'addOrderForm', fn: handleCreateOrderManual },
    { id: 'addProductForm', fn: handleCreateProduct },
    { id: 'editProductForm', fn: handleUpdateProduct },
    { id: 'reviewForm', fn: handleReviewSubmit }
  ];

  formMap.forEach(({ id, fn }) => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener('submit', (e) => {
        e.preventDefault();
        fn(e);
      });
    }
  });

  // Modal detail action buttons
  const modalAddToCartBtn = document.getElementById('modalAddToCartBtn');
  const modalFavBtn = document.getElementById('modalFavBtn');
  if (modalAddToCartBtn) {
    modalAddToCartBtn.addEventListener('click', () => {
      if (selectedProductId) addToCart(selectedProductId);
    });
  }
  if (modalFavBtn) {
    modalFavBtn.addEventListener('click', () => {
      if (selectedProductId) toggleWishlistItem(selectedProductId);
    });
  }
});
