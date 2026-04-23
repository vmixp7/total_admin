const bannerTexts = [
  "道達爾能源<br>全球<span>前四大石油集團</span>",
  "道達爾能源<br>原廠推薦<span>商用車潤滑油</span>",
  "道達爾能源<br>原廠指定<span>工程機具潤滑油</span>",
  "道達爾能源<br>卓越性能<span>工業用潤滑油</span>",
  "道達爾能源<br>品質出眾<span>眾多設備商推薦</span>",
];

const menuData = {
  products: {
    title: "產品",
    sections: [
      {
        title: "汽車用潤滑油",
        items: [
          {
            name: "汽車用潤滑油型錄下載",
            url: "https://dxm.content-center.totalenergies.com/api/wedia/dam/variation/xysh7dg731ta77a3g9bf6axmie/original,default?hash=gyhn6cb1fh3dyctiryauyqttgh7depo&dxm_cors_orign=76ABE9E30D5586637AC358998F93E703&download=true",
          },
          {
            name: "線上產品型錄",
            url: "https://lubricants.catalog.totalenergies.com/catalog-tw/zh_TW?marketsegment=8259582ce8f9e88943e95aa9e44797bf",
          },
          {
            name: "ART 延遲老化技術",
            url: "https://totalenergies.tw/products/automotive-lubricants/Quartz-introduction/Age-Resistance-Technology",
          },
        ],
      },
      {
        title: "摩托車用潤滑油",
        items: [
          {
            name: "摩托車用潤滑油型錄下載",
            url: "https://dxm.content-center.totalenergies.com/api/wedia/dam/variation/xysh7dg731ta7t81eua5zent8r/original,default?hash=gyhn6cb1fh3dyctiryauyqtt8r7dnca&dxm_cors_orign=76ABE9E30D5586637AC358998F93E703&download=true",
          },
          {
            name: "線上產品型錄",
            url: "https://lubricants.catalog.totalenergies.com/catalog-tw/zh_TW?marketsegment=c4f5496f973fde81791e93964c57574b",
          },
        ],
      },
      {
        title: "重型車輛潤滑油",
        items: [
          {
            name: "重車用潤滑油型錄下載",
            url: "https://dxm.content-center.totalenergies.com/api/wedia/dam/variation/xysh7dg731ta7mpja59h6uc5jh/original,default?hash=gyhn6cb1fh3dyctiryauyqtt8y7dgqy&dxm_cors_orign=76ABE9E30D5586637AC358998F93E703&download=true",
          },
          {
            name: "線上產品型錄",
            url: "https://lubricants.catalog.totalenergies.com/catalog-tw/zh_TW?marketsegment=83a9b714f0ea09668e394bae597e69b1",
          },
        ],
      },
      {
        title: "工業用潤滑油",
        items: [
          {
            name: "產品系列型錄下載",
            url: "https://totalenergies.tw/products/industrial-lubricants/introduction",
          },
          {
            name: "線上產品型錄",
            url: "https://totalenergies.tw/products/industrial-lubricants/brochure-download",
          },
        ],
      },
      {
        title: "",
        items: [
          {
            name: "線上產品總覽",
            url: "https://lubricants.catalog.totalenergies.com/catalog-tw/zh_TW",
          },
          {
            name: "車輛用添加劑",
            url: "https://totalenergies.tw/products/fuel-additives",
          },
          {
            name: "車輛用清潔劑",
            url: "https://totalenergies.tw/products/car-care",
          },
          {
            name: "LubAnac分析比較",
            url: "https://totalenergies.tw/products/LubAnac",
          },
          {
            name: "Lubconsult",
            url: "https://lubconsult.totalenergies.com/TW-LCR-TotalEnergiesELF",
          },
        ],
      },
    ],
  },
  industries: {
    title: "道達爾能源講堂",
    sections: [
      {
        title: "機油專家的建議",
        items: [
          {
            name: "避免引擎損壞的 7 項秘訣",
            url: "https://totalenergies.tw/lubricant-zone/expert-advice/tips-to-protect-engine",
          },
          {
            name: "汽車機油的運作原理",
            url: "https://totalenergies.tw/lubricant-zone/expert-advice/How-oil-motor-works",
          },
          {
            name: "什麼是引擎機油的黏度等級？",
            url: "https://totalenergies.tw/lubricant-zone/expert-advice/engine-oil-viscosity",
          },
          {
            name: "機油是什麼",
            url: "https://totalenergies.tw/lubricant-zone/expert-advice/What-is-lubricant",
          },
          {
            name: "如何選擇適合的機油",
            url: "https://totalenergies.tw/lubricant-zone/expert-advice/How-to-choose-the-right-lubricant",
          },
        ],
      },
      {
        title: "新創科技",
        items: [
          {
            name: "TotalEnergies 創新科技",
            url: "https://totalenergies.tw/lubricant-zone/innovation/totalenergies-innovation",
          },
          {
            name: "TotalEnergies 道達爾能源 — 永續能源解決方案的領先者",
            url: "https://totalenergies.tw/lubricant-zone/innovation/totalenergies-front-row-sustainable-energy-solutions",
          },
        ],
      },
      {
        title: "汽車適用快馳油品介紹",
        items: [
          {
            name: "Quartz 9000 Future GF6 5W30",
            url: "https://totalenergies.tw/lubricant-zone/innovation/gf6",
          },
          {
            name: "汽車用潤滑油指南",
            url: "https://totalenergies.tw/lubricant-zone/lubricant-products/lubricants-for-car/guide-for-car-lubricant",
          },
          {
            name: "斷開渦輪引擎公主病",
            url: "https://totalenergies.tw/lubricant-zone/lubricant-products/lubricants-for-car/%E6%96%B7%E9%96%8B%E6%B8%A6%E8%BC%AA%E5%BC%95%E6%93%8E%E5%85%AC%E4%B8%BB%E7%97%85",
          },
          {
            name: "國產日系車適用油款介紹",
            url: "https://totalenergies.tw/lubricant-zone/lubricant-products/lubricants-for-car/lubricant-for-asian-car",
          },
          {
            name: "Quartz Ineo MC3 5W30",
            url: "https://totalenergies.tw/innovation/QUARTZ-INEO-MC3-5W30",
          },
          {
            name: "歐日系車體東西軍",
            url: "https://totalenergies.tw/lubricant-zone/lubricant-products/lubricants-for-car/%E6%AD%90%E6%97%A5%E7%B3%BB%E8%BB%8A%E9%AB%94%E6%9D%B1%E8%A5%BF%E8%BB%8D",
          },
          {
            name: "配好配滿你的油電愛車",
            url: "https://totalenergies.tw/lubricant-zone/lubricant-products/lubricants-for-car/%E9%85%8D%E5%A5%BD%E9%85%8D%E6%BB%BF%E4%BD%A0%E7%9A%84%E6%B2%B9%E9%9B%BB%E6%84%9B%E8%BB%8A",
          },
          {
            name: "查看汽車用潤滑油產品",
            url: "https://lubricants.catalog.totalenergies.com/catalog-tw/zh_TW?marketsegment=8259582ce8f9e88943e95aa9e44797bf",
          },
        ],
      },
      {
        title: "機車適用動馳油品介紹",
        items: [
          {
            name: "機車適用油品介紹 馴服 4T 機車的最佳情人",
            url: "https://totalenergies.tw/lubricant-zone/lubricant-products/lubricants-for-motorcycle/%E9%A6%B4%E6%9C%8D4T%E6%A9%9F%E8%BB%8A%E7%9A%84%E6%9C%80%E4%BD%B3%E6%83%85%E4%BA%BA.html",
          },
          {
            name: "查看摩托車用潤滑油產品",
            url: "https://lubricants.catalog.totalenergies.com/catalog-tw/zh_TW?marketsegment=c4f5496f973fde81791e93964c57574b",
          },
        ],
      },
    ],
  },
  brands: {
    title: "道達爾能源最新消息",
    sections: [
      {
        title: "",
        items: [
          {
            name: "搜尋最新消息",
            url: "https://totalenergies.tw/news/search",
          },
          {
            name: "活動快訊",
            url: "https://totalenergies.tw/news/promotion-news",
          },
          {
            name: "道達爾能源旗艦店開幕新聞",
            url: "https://totalenergies.tw/news/flagship-store-news",
          },
          {
            name: "公司新聞",
            url: "https://totalenergies.tw/news/corporate-news",
          },
          {
            name: "賽事報導",
            url: "https://totalenergies.tw/news/motorsport-news",
          },
        ],
      },
    ],
  },
};
$(document).ready(function () {
  // 點擊 tab 按鈕切換 tab
  $(".tab-button").click(function () {
    var tabId = $(this).data("tab");

    // 移除所有 tab 按鈕的 active 樣式
    $(".tab-button").removeClass("active");

    // 添加當前點擊的 tab 按鈕 active 樣式
    $(this).addClass("active");

    // 隱藏所有 tab 內容
    $(".tab-content").removeClass("active");

    // 顯示點擊的 tab 內容
    $("#" + tabId).addClass("active");
  });

  // 載入選單資料
  loadMenuData();

  // 載入產品頁面的 megamenu
  buildProductMegamenu();

  // 載入行業頁面的 megamenu
  buildIndustriesMegamenu();

  // 載入品牌故事頁面的 megamenu
  buildBrandsMegamenu();

  loadBanners();
});

// 從 JSON 檔案載入選單資料
function loadMenuData() {
  // 產品選單
  if (menuData.products) {
    buildMenu("#menu-products", menuData.products);
  }
  // 行業選單
  if (menuData.industries) {
    buildMenu("#menu-industries", menuData.industries);
  }
  // 品牌故事選單
  if (menuData.brands) {
    buildMenu("#menu-brands", menuData.brands);
  }
}

// 建立選單 HTML
function buildMenu(selector, menuData) {
  var $container = $(selector);
  if ($container.length === 0) return;

  var html = '<li><div class="container"><div class="row">';

  menuData.sections.forEach(function (section, index) {
    var titleClass =
      index === 0 ? "dropdown-title bottom10" : "dropdown-title opacity-10";
    html += '<div class="col-lg-3 col-md-6 col-sm-12 mengmenu_border">';
    html += '<h5 class="' + titleClass + '">' + section.title + "</h5>";
    html += "<ul>";

    section.items.forEach(function (item) {
      html +=
        '<li><a class="dropdown-item" target="_blank" href="' +
        item.url +
        '">' +
        item.name +
        "</a></li>";
    });

    html += "</ul></div>";
  });

  html += "</div></div></li>";

  $container.html(html);
}

// 建立行業頁面的 megamenu
function buildIndustriesMegamenu() {
  var $container = $("#industries-megamenu");
  if ($container.length === 0 || !menuData.industries) return;

  var html = "";

  menuData.industries.sections.forEach(function (section) {
    html += "<h4><span>" + section.title + "</span></h4>";

    section.items.forEach(function (item) {
      html +=
        '<p><a href="' +
        item.url +
        '" target="_blank">' +
        item.name +
        "</a></p>";
    });
  });

  $container.html(html);
}

// 建立品牌故事頁面的 megamenu
function buildBrandsMegamenu() {
  var $container = $("#brands-megamenu");
  if ($container.length === 0 || !menuData.brands) return;

  var html = "";

  menuData.brands.sections.forEach(function (section) {
    html += "<h4><span>" + section.title + "</span></h4>";

    section.items.forEach(function (item) {
      html +=
        '<p><a href="' +
        item.url +
        '" target="_blank">' +
        item.name +
        "</a></p>";
    });
  });

  $container.html(html);
}

// 建立產品頁面的 megamenu
function buildProductMegamenu() {
  var $container = $("#product-megamenu");
  if ($container.length === 0 || !menuData.products) return;

  var html = "";

  menuData.products.sections.forEach(function (section) {
    html += "<h4><span>" + section.title + "</span></h4>";

    section.items.forEach(function (item) {
      html +=
        '<p><a href="' +
        item.url +
        '" target="_blank">' +
        item.name +
        "</a></p>";
    });
  });

  $container.html(html);
}

function loadBanners() {
  const banners = `
      <div class="swiper-slide">
        <img
          src="images/photo/banner1.jpg"
          width="100%"
          loading="1"
          alt=""
        />
      </div>
      <div class="swiper-slide">
        <img
          src="images/photo/banner2.jpg"
          width="100%"
          loading="1"
          alt=""
        />
      </div>
      <div class="swiper-slide">
        <img
          src="images/photo/banner3.jpg"
          width="100%"
          loading="1"
          alt=""
        />
      </div>
      <div class="swiper-slide">
        <img
          src="images/photo/banner4.jpg"
          width="100%"
          loading="1"
          alt=""
        />
      </div>
      <div class="swiper-slide">
        <img
          src="images/photo/banner5.jpg"
          width="100%"
          loading="1"
          alt=""
        />
      </div>`;
  $(".swiper-wrapper").html(banners);

  // 初始化 Swiper（在 banners 載入後）
  initSwiper();
}

function initSwiper() {
  var bannerTextTimer;
  function updateBannerText(index) {
    var realIndex = index % bannerTexts.length;
    $(".banner-text-block h2").html(bannerTexts[realIndex]);
  }

  var swiper = new Swiper(".mySwiper", {
    effect: "fade",
    crossFade: true,
    loop: true,
    autoplay: {
      delay: 7000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    on: {
      slideChangeTransitionStart: function () {
        clearTimeout(bannerTextTimer);
        $(".banner-text-block").removeClass("show");
      },
      slideChangeTransitionEnd: function () {
        var self = this;
        bannerTextTimer = setTimeout(function () {
          updateBannerText(self.realIndex);
          $(".banner-text-block").addClass("show");
        }, 3000);
      },
      init: function () {
        var self = this;
        setTimeout(function () {
          updateBannerText(self.realIndex);
          $(".banner-text-block").addClass("show");
        }, 3000);
      },
    },
  });
}
