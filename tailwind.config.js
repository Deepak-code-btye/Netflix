module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        primary: ["Josefin Sans", "sans-serif"],
        secondary: ["Poppins", "sans-serif"],
        opensans: ["Open Sans", "sans-serif"],
        riot: ["riot_squad_nfregular", "sans-serif"],
        arial: ["Arial", "sans-serif"],
      },
      boxShadow: {
        card: " 0px 5px 50px #004C7430",
        reviewCard: "0px 6px 10px #00000029",
        card2: "0px 6px 10px #00000029",
      },
      fontSize: {
        new: "18px",
        17: "17px",
        46: "46px",
        24: "24px",
        40: "40px",
        45: "45px",
        60: "60px",
        14: "14px",
      },
      colors: {
        btnwhite: "#e9e9e9",
        red: "red",
        newOrange: {
          100: "#ff9a16",
        },
        footertext: "#A4A4A4",
        darkestBlue: "#001546",
        cardBlue: "#022150",
        darkestBlue: "#001546",
        basecol: "#000510",
        white: "#ffffff",
        gray: "#E6E6E6",
        drakGray: "#8F8F8F",
        modalLabel: "#404040",
        lightGray: "#C2C2C2",
        darkestgray: "#1D1C1C",
        cardGray: "#262626",
        blackGray: "#717171",
        grayBorder: "#808080",
        borderGray: "#cccccc",
        darkestgray: "#1d1c1c",
        newgray: "#d8d8d8",
        cardGray: "#262626",
        textlight: "#333",
        hover: "#3a7aff",
        linkhover: "#0959ff",
        border: "#707070",
        darkBlue: "#000C27",
        lightBlue: "#3A7AFF",
        midBlue: "#00173A",
        blue: "#001F4E",
        cardColor: "#000D26",
        borderColor: "#E6E6E6",
        gridborderColor: "#7287A6",
        orange: "#FF7B16",
        boxColor: "#0B316B",
        boxSecondary: "#D6D6D6",
        mist: "#7A7A7A",
        darkMist: "#BEBEBE",
        darkOrange: "#703101",
        headerBorder: "#353535",
        grayInput: "#9b9b9b",
        lightwhite: "#BFBFBF",
        btnGreen: "#7fcd17",
        locationFormBorder: "#E8E5E5",
        newLightBlue: "#0959ff",
        blackNew: {
          100: "#333",
          200: "#4c4643",
          300: "#5c6666",
          400: "#989898",
          500: "#495464;",
          600: "#333333",
          700: "#828282",
          800: "#AAAAAA",
          900: "#222",
          50: "#000",
        },
        lightwhite: "#BFBFBF",
        newGray: "#4c4643",
        newBorder: "#cccccc",
        hoverBtn: "#00008B",
        lightestBlue: "#fafbfc",
        facbook: "#3f51b5",
        linkdein: "#2b88d1",
        twitter: "#3faaf5",
        inputGray: "#90969b",
        inputBorder: "#bababa",
        textgray: "#B2B2B2",
        hoverYellow: "#FFAA16",
        quoteBackground: "#F1F6F8",
        quotetext: {
          100: "#CCCCCC",
          200: "#777777",
          300: "#464646",
          400: "#888B92",
          500: "#667495",
          600: "#011636",
          700: "#D8DAE1",
        },
        "quote-background": "#F1F6F8",
        "pop-up": {
          100: "#444444",
          200: "#3B3B3B",
        },
        "navbar-col": {
          100: "#404040",
          200: "#3a7aff",
          300: "#808080",
        },
      },
      borderWidth: {
        DEFAULT: "1px",
        0: "0",
        2: "2px",
        3: "3px",
        4: "4px",
        6: "6px",
        8: "8px",
        10: "10px",
      },
      backgroundImage: {
        "hero-pattern":
          "url('https://tomedes.gumlet.io/frontend/images/home-en/network_bg3.webp')",
        "services-pattern":
          "url('https://tomedes.gumlet.io/frontend/images/home-en/area-bg.webp')",
        "who-we-are":
          "url('https://tomedes.gumlet.io/frontend/images/home-en/whoweare_bg2.webp')",
        "banner-img":
          "url('https://tomedes.gumlet.io/frontend/images/home-en/homepage_banner_en_black.webp')",
        "subscribe-letter":
          "url('https://tomedes.gumlet.io/frontend/images/translator-hub/desktop/middleform_1.png')",
        "contact-img":
          "url('https://tomedes.gumlet.io/frontend/images/blue-strip-contact.svg')",
        "translation-banner":
          "url('https://tomedes.gumlet.io/frontend/images/banner-new19.png')",
        "black-strip":
          "url('https://tomedes.gumlet.io/frontend/images/grey-strip-h2.svg')",
        "translation-confrence":
          "url('https://tomedes.gumlet.io/frontend/images/Conference-bg.jpg')",
        "banner-image":
          "url('https://tomedes.gumlet.io/frontend/images/Conference-inner-bg.jpg')",
        "industry-bg-image":
          "url('https://tomedes.gumlet.io/frontend/images/industry-banner.jpg')",
        "automotive-bg-image":
          "url('https://skins.tomedes.com/frontend/images/automobile-banner.jpg')",
        "technology-bg-image":
          "url('https://skins.tomedes.com/frontend/images/tech-img.png')",
        "military-bg-image":
          "url('https://skins.tomedes.com/frontend/images/military/militarybg.jpg')",
        "gaming-bg-image":
          "url('https://skins.tomedes.com/frontend/images/gaming/gaming.jpg')",

        "luxury-brands-bg-image":
          "url('https://skins.tomedes.com/frontend/images/luxurybrands/luxury-brandsbg.jpg')",
        "government-bg-image":
          "url('https://skins.tomedes.com/frontend/images/government-img.jpg')",
        "quote-img":
          "url('https://tomedes.gumlet.io/frontend/images/location_new/cta_sprites.png')",
        "location-banner":
          "url('https://tomedes.gumlet.io/frontend/images/location_new/mainlocations_bg.webp')",
        "houston-bg":
          "url('https://tomedes.gumlet.io/frontend/images/location_new/bg_dot.webp')",
        "technical-banner":
          "url('https://tomedes.gumlet.io/frontend/images/services-new/technical_documents_bg.webp')",
        "technical-bussiness":
          "url('https://tomedes.gumlet.io/frontend/images/services-new/applied_industrial_bg_technical.webp')",
        "whatsapp-comp":
          "url('https://tomedes.gumlet.io/frontend/images/services/languages_bg_web.webp')",
        lingual:
          "url('https://tomedes.gumlet.io/frontend/images/services-new/language_bg_website.webp')",
        "bussiness-img":
          "url('https://tomedes.gumlet.io/frontend/images/services-new/language_bg.webp')",
        "certified-translation":
          "https://tomedes.gumlet.io/frontend/images/services-new/certified_outline.webp'",
        "birth-banner":
          "url('https://tomedes.gumlet.io/frontend/images/services-new/language_bg_website.webp')",
        "usisc-banner":
          "url('https://tomedes.gumlet.io/frontend/images/home-en/network_bg3.webp')",
        "interpret-banner":
          "url('https://tomedes.gumlet.io/frontend/images/services-new/language_bg_inter.webp')",
        "legal-banner":
          "url('https://tomedes.gumlet.io/frontend/images/services/language_bg_legal_int.webp')",
        "medical-bottom":
          "url('https://tomedes.gumlet.io/frontend/images/services/languages_bg_medical.webp')",
        "tomedes-insider":
          "url('https://tomedes.gumlet.io/frontend/images/tom-inside.jpg')",
        "share-facts":
          "url('https://tomedes.gumlet.io/frontend/images/tips-inner-bg.jpg')",
        "language-facts":
          "url('https://tomedes.gumlet.io/frontend/images/tips-bg.jpg')",
        "check-us":
          "url('https://tomedes.gumlet.io/frontend/images/reviews/platforms.webp')",
        "atlanta-banner":
          "url('https://tomedes.gumlet.io/frontend/images/location_new/banner_atlanta.webp')",
        "boston-banner":
          "url('https://tomedes.gumlet.io/frontend/images/location_new/banner_boston.webp')",
        "chicago-banner":
          "url('https://tomedes.gumlet.io/frontend/images/location_new/banner_chicago.webp')",
        "dallas-banner":
          "url('https://tomedes.gumlet.io/frontend/images/location_new/banner_dallas.webp')",
        "denver-banner":
          "url('https://tomedes.gumlet.io/frontend/images/location_new/banner_denver.webp')",
        "houston-banner":
          "url('https://tomedes.gumlet.io/frontend/images/location_new/banner_houston.webp')",
        "los-angeles-banner":
          "url('https://tomedes.gumlet.io/frontend/images/location_new/banner_losangeles.webp')",
        "miami-banner":
          "url('https://tomedes.gumlet.io/frontend/images/location_new/banner_miami.webp')",
        "nyc-banner":
          "url('https://tomedes.gumlet.io/frontend/images/location_new/banner_nyc.webp')",
        "philadelphia-banner":
          "url('https://tomedes.gumlet.io/frontend/images/location_new/banner_philadelphia.webp')",
        "sanfrancisco-banner":
          "url('https://tomedes.gumlet.io/frontend/images/location_new/banner_sanfrancisco.webp')",
        "sandiego-banner":
          "url('https://tomedes.gumlet.io/frontend/images/location_new/banner_sandiego.webp')",
        "seattle-banner":
          "url('https://tomedes.gumlet.io/frontend/images/location_new/banner_seattle.webp')",
        "washington-banner":
          "url('https://tomedes.gumlet.io/frontend/images/location_new/banner_washington.webp')",
        "london-banner":
          "url('https://tomedes.gumlet.io/frontend/images/location_new/banner_london.webp')",
        "manchester-banner":
          "url('https://tomedes.gumlet.io/frontend/images/location_new/banner_manchester.webp')",
        "melbourne-banner":
          "url('https://tomedes.gumlet.io/frontend/images/location_new/banner_melbourne.webp')",
        "sydney-banner":
          "url('https://tomedes.gumlet.io/frontend/images/location_new/banner_sydney.webp')",
        "toronto-banner":
          "url('https://tomedes.gumlet.io/frontend/images/location_new/banner_toronto.webp')",
        "ottawa-banner":
          "url('https://tomedes.gumlet.io/frontend/images/location_new/banner_ottawa.webp')",
        tomBanner:
          "url('https://tomedes.gumlet.io/frontend/images/aboutus-images/banner/about_us_banner.webp')",
        desktop: "url(assets/banner_1920.webp)",
        aboutus:
          "url(assets/images/new-homepage-assets/desktop/aboutus_background.webp)",
        learnmoreBg:
          "url(assets/images/new-homepage-assets/mobile/learnmore_background_mobile.webp)",
        certified:
          "url(assets/images/new-homepage-assets/desktop/certified_background.webp)",
        whyChooseUs:
          "url('https://tomedes.gumlet.io/frontend/images/realtime/whychoose3.webp')",
        orangeFormBgDektop:
          "url(assets/images/hub-forms/orangeform_desktop.webp)",
        orangeFormBgMobile:
          "url(assets/images/hub-forms/orangeform_mobile.webp)",
        staryinformedBgMobile:
          "url(assets/images/hub-forms/stayinformed_mobile.webp)",
        GlobalContact: "url(assets/CTA_dynamic.webp)",
        "banner-ads": "url(assets/ads-assets/banner_new1.webp)",
        "banner2-ads": "url(assets/ads-assets/banner_img2.webp)",
      },

      width: {
        157: "157px",
        300: "300px",
        320: "320px",
        250: "250px",
        222: "222px",
        930: "930px",
        "37per": "36.33333%",
        "23per": "23.3333%",
        "22REM": "352px",
        93: "93%",
        "475px": "475px",
      },
      height: {
        157: "157px",
        58: "58px",
        600: "600px",
        255: "255px",
        648: "648px",
        720: "720px",
        904: "904px",
        460: "460px",
        560: "560px",
        494: "494px",
      },
      margin: {
        48: "48px",
        112: "112px",
        224: "224px",
        300: "300px",
        548: "548px",
        416: "416px",
      },
      fontWeight: {
        boldest: 1000,
      },
      screens: {
        laptop: "1920px",
        fourK: "2010px",
        120: "120px",
        100: "100px",
      },
      minHeight: {
        132: "132px",
      },
      screens: {
        xs: { min: "430px" },
      },
      // screens: {
      //   mtab: { max: "767px" },
      //   lap: { min: "992px" },
      //   slap: { max: "991px" },
      //   mlap: { max: "1200px" },
      //   mmob: { max: "479px" },
      //   mlg: { min: "992px", max: "1200px" },
      //   mmd: { min: "768px", max: "991px" }
      // },
      backgroundPosition: {
        bgless: "-20px -179px",
        bgemail: "-20px -20px",
        bgcall: "-360px -20px",
      },
      maxWidth: {
        370: "370px",
      },
      minWidth: {
        300: "300px",
      },
      maxHeight: {
        460: "460px",
      },
    },
  },
  variants: {
    extend: {
      display: ["last"],
    },
  },
  plugins: [],
};
