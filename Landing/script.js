// traduccion
const translations = {
    es: {
        features: "Características",
        howItWorks: "Cómo funciona",
        pricing: "Precios",
        contact: "Contacto",
        downloadApp: "Descargar App",
        heroTitle: "Tu mascota siempre segura",
        heroSubtitle: "Monitorea la ubicación de tu mascota en tiempo real y recibe alertas instantáneas cuando se aleje de zonas seguras.",
        startNow: "Comenzar ahora",
        mainFeatures: "Características principales",
        realTimeTracking: "Rastreo en tiempo real",
        realTimeTrackingDesc: "Sigue la ubicación de tu mascota con precisión GPS en tiempo real.",
        instantAlerts: "Alertas instantáneas",
        instantAlertsDesc: "Recibe notificaciones inmediatas cuando tu mascota salga de zonas seguras.",
        familySharing: "Comparte con la familia",
        familySharingDesc: "Permite que toda la familia monitoree a tu mascota desde sus dispositivos.",
        howItWorksTitle: "Cómo funciona",
        step1Title: "Conecta el collar",
        step1Desc: "Simplemente coloca el collar inteligente en tu mascota.",
        step2Title: "Configura zonas seguras",
        step2Desc: "Define las áreas donde tu mascota puede moverse libremente.",
        step3Title: "Monitorea y relájate",
        step3Desc: "Recibe actualizaciones en tiempo real y alertas cuando sea necesario.",
        pricingTitle: "Planes y precios",
        basic: "Básico",
        premium: "Premium",
        perMonth: "/mes",
        realTimeTrackingFeature: "Rastreo en tiempo real",
        oneSafeZone: "1 zona segura",
        basicAlerts: "Alertas básicas",
        unlimitedSafeZones: "Zonas seguras ilimitadas",
        advancedAlerts: "Alertas avanzadas",
        locationHistory: "Historial de ubicaciones",
        familyAccess: "Acceso familiar",
        choosePlan: "Elegir plan",
        readyToStart: "¿Listo para empezar?",
        joinThousands: "Únete a miles de dueños de mascotas que ya confían en CollarLink",
        downloadNow: "Descargar ahora",
        links: "Enlaces",
        contactUs: "Contacto",
        allRightsReserved: "Todos los derechos reservados.",
        publicTitle: "Nuestro Público",
        publicSegments: [
            {
                icon: "fa-home",
                title: "Dueños con espacios abiertos",
                desc: "Personas con jardín o acceso a exteriores, preocupadas por la seguridad de sus mascotas.",
                title_en: "Owners with open spaces",
                desc_en: "People with gardens or outdoor access, concerned about their pets' safety."
            },
            {
                icon: "fa-users",
                title: "Familias con niños y mascotas",
                desc: "Hogares que buscan tranquilidad y protección para sus mascotas como parte de la familia.",
                title_en: "Families with children and pets",
                desc_en: "Households seeking peace of mind and protection for their pets as part of the family."
            },
            {
                icon: "fa-user",
                title: "Personas mayores o solteras",
                desc: "Quienes tienen a su mascota como compañía y desean soluciones fáciles y seguras.",
                title_en: "Elderly or single people",
                desc_en: "Those who have their pet as company and want easy and safe solutions."
            },
            {
                icon: "fa-microchip",
                title: "Amantes de la tecnología",
                desc: "Usuarios que ya usan gadgets y apps para el cuidado inteligente de sus mascotas.",
                title_en: "Tech lovers",
                desc_en: "Users who already use gadgets and apps for smart pet care."
            }
        ]
    },
    en: {
        features: "Features",
        howItWorks: "How it Works",
        pricing: "Pricing",
        contact: "Contact",
        downloadApp: "Download App",
        heroTitle: "Your pet always safe",
        heroSubtitle: "Monitor your pet's location in real-time and receive instant alerts when they leave safe zones.",
        startNow: "Start Now",
        mainFeatures: "Main Features",
        realTimeTracking: "Real-time Tracking",
        realTimeTrackingDesc: "Track your pet's location with GPS precision in real-time.",
        instantAlerts: "Instant Alerts",
        instantAlertsDesc: "Receive immediate notifications when your pet leaves safe zones.",
        familySharing: "Family Sharing",
        familySharingDesc: "Allow the whole family to monitor your pet from their devices.",
        howItWorksTitle: "How it Works",
        step1Title: "Connect the collar",
        step1Desc: "Simply place the smart collar on your pet.",
        step2Title: "Set safe zones",
        step2Desc: "Define areas where your pet can move freely.",
        step3Title: "Monitor and relax",
        step3Desc: "Receive real-time updates and alerts when needed.",
        pricingTitle: "Plans & Pricing",
        basic: "Basic",
        premium: "Premium",
        perMonth: "/month",
        realTimeTrackingFeature: "Real-time tracking",
        oneSafeZone: "1 safe zone",
        basicAlerts: "Basic alerts",
        unlimitedSafeZones: "Unlimited safe zones",
        advancedAlerts: "Advanced alerts",
        locationHistory: "Location history",
        familyAccess: "Family access",
        choosePlan: "Choose plan",
        readyToStart: "Ready to start?",
        joinThousands: "Join thousands of pet owners who already trust CollarLink",
        downloadNow: "Download now",
        links: "Links",
        contactUs: "Contact",
        allRightsReserved: "All rights reserved.",
        publicTitle: "Our Audience",
        publicSegments: [
            {
                icon: "fa-home",
                title: "Owners with open spaces",
                desc: "People with gardens or outdoor access, concerned about their pets' safety.",
                title_en: "Owners with open spaces",
                desc_en: "People with gardens or outdoor access, concerned about their pets' safety."
            },
            {
                icon: "fa-users",
                title: "Families with children and pets",
                desc: "Households seeking peace of mind and protection for their pets as part of the family.",
                title_en: "Families with children and pets",
                desc_en: "Households seeking peace of mind and protection for their pets as part of the family."
            },
            {
                icon: "fa-user",
                title: "Elderly or single people",
                desc: "Those who have their pet as company and want easy and safe solutions.",
                title_en: "Elderly or single people",
                desc_en: "Those who have their pet as company and want easy and safe solutions."
            },
            {
                icon: "fa-microchip",
                title: "Tech lovers",
                desc: "Users who already use gadgets and apps for smart pet care.",
                title_en: "Tech lovers",
                desc_en: "Users who already use gadgets and apps for smart pet care."
            }
        ]
    }
};

// estado
let currentLanguage = 'es';
let currentTheme = 'light';

// dom
const themeToggle = document.getElementById('theme-toggle');
const languageToggle = document.getElementById('language-toggle');
const currentLangSpan = document.querySelector('.current-lang');

// tema
function toggleTheme() {
    const body = document.body;
    if (currentTheme === 'light') {
        body.setAttribute('data-theme', 'dark');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        currentTheme = 'dark';
    } else {
        body.removeAttribute('data-theme');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        currentTheme = 'light';
    }
    localStorage.setItem('theme', currentTheme);
}

// idioma
function toggleLanguage() {
    currentLanguage = currentLanguage === 'es' ? 'en' : 'es';
    currentLangSpan.textContent = currentLanguage.toUpperCase();
    updateContent();
    localStorage.setItem('language', currentLanguage);
}

// contenido
function updateContent() {
    const t = translations[currentLanguage];
    
    // Actualizar navegación
    document.querySelector('a[href="#features"]').textContent = t.features;
    document.querySelector('a[href="#how-it-works"]').textContent = t.howItWorks;
    document.querySelector('a[href="#pricing"]').textContent = t.pricing;
    document.querySelector('a[href="#contact"]').textContent = t.contact;
    document.querySelector('.nav-actions .cta-button').textContent = t.downloadApp;

    // Actualizar hero section
    document.querySelector('.hero-content h1').textContent = t.heroTitle;
    document.querySelector('.hero-content p').textContent = t.heroSubtitle;
    document.querySelector('.hero-content .cta-button').textContent = t.startNow;

    // Actualizar features section
    document.querySelector('.features h2').textContent = t.mainFeatures;
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards[0].querySelector('h3').textContent = t.realTimeTracking;
    featureCards[0].querySelector('p').textContent = t.realTimeTrackingDesc;
    featureCards[1].querySelector('h3').textContent = t.instantAlerts;
    featureCards[1].querySelector('p').textContent = t.instantAlertsDesc;
    featureCards[2].querySelector('h3').textContent = t.familySharing;
    featureCards[2].querySelector('p').textContent = t.familySharingDesc;

    // Actualizar how it works section
    document.querySelector('.how-it-works h2').textContent = t.howItWorksTitle;
    const steps = document.querySelectorAll('.step');
    steps[0].querySelector('h3').textContent = t.step1Title;
    steps[0].querySelector('p').textContent = t.step1Desc;
    steps[1].querySelector('h3').textContent = t.step2Title;
    steps[1].querySelector('p').textContent = t.step2Desc;
    steps[2].querySelector('h3').textContent = t.step3Title;
    steps[2].querySelector('p').textContent = t.step3Desc;

    // Actualizar pricing section
    document.querySelector('.pricing h2').textContent = t.pricingTitle;
    const pricingCards = document.querySelectorAll('.pricing-card');
    pricingCards[0].querySelector('h3').textContent = t.basic;
    pricingCards[1].querySelector('h3').textContent = t.premium;
    document.querySelectorAll('.price span').forEach(span => {
        span.textContent = t.perMonth;
    });

    // Actualizar listas de características
    const basicFeatures = pricingCards[0].querySelectorAll('li');
    basicFeatures[0].textContent = t.realTimeTrackingFeature;
    basicFeatures[1].textContent = t.oneSafeZone;
    basicFeatures[2].textContent = t.basicAlerts;

    const premiumFeatures = pricingCards[1].querySelectorAll('li');
    premiumFeatures[0].textContent = t.realTimeTrackingFeature;
    premiumFeatures[1].textContent = t.unlimitedSafeZones;
    premiumFeatures[2].textContent = t.advancedAlerts;
    premiumFeatures[3].textContent = t.locationHistory;
    premiumFeatures[4].textContent = t.familyAccess;

    // Actualizar botones de planes
    document.querySelectorAll('.pricing-card .cta-button').forEach(button => {
        button.textContent = t.choosePlan;
    });

    // Actualizar sección Nuestro Público
    const publicSection = document.getElementById('publico-objetivo');
    if (publicSection) {
        publicSection.querySelector('h2').textContent = currentLanguage === 'es' ? t.publicTitle : t.publicTitle_en;
        const cards = publicSection.querySelectorAll('.segmento-card');
        t.publicSegments.forEach((seg, i) => {
            cards[i].querySelector('h4').textContent = currentLanguage === 'es' ? seg.title : seg.title_en;
            cards[i].querySelector('p').textContent = currentLanguage === 'es' ? seg.desc : seg.desc_en;
        });
    }

    // Actualizar sección de contacto
    const contactSection = document.querySelector('.contact');
    if (contactSection) {
        contactSection.querySelector('h2').textContent = currentLanguage === 'es' ? t.readyToStart : t.readyToStart_en;
        contactSection.querySelector('p').textContent = currentLanguage === 'es' ? t.joinThousands : t.joinThousands_en;
        contactSection.querySelector('.cta-button').textContent = currentLanguage === 'es' ? t.downloadNow : t.downloadNow_en;
    }

    // Actualizar footer
    document.querySelector('.footer-section:nth-child(2) h4').textContent = t.links;
    document.querySelector('.footer-section:nth-child(3) h4').textContent = t.contactUs;
    document.querySelector('.footer-bottom p').textContent = `© 2024 CollarLink. ${t.allRightsReserved}`;
}

// eventos
themeToggle.addEventListener('click', toggleTheme);
languageToggle.addEventListener('click', toggleLanguage);

// preferencias
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    const savedLanguage = localStorage.getItem('language');

    if (savedTheme === 'dark') {
        toggleTheme();
    }

    if (savedLanguage === 'en') {
        toggleLanguage();
    }
}); 