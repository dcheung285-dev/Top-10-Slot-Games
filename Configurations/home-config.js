/**
 * HOME PAGE CONFIGURATION
 * Dynamic home page settings for animations, ads, videos, and content sections
 */

// ========== PAGE TITLE CONFIGURATION ==========
const HOME_PAGE_TITLE = "Home | {{BRAND_NAME}} – Top Crypto Slot Games";     // ← Home page browser tab title

const HOME_CONFIG = {
    // Hero Section Configuration
    hero: {
        enabled: true,
        title: "Top 10 Crypto Slot Games 2025",
        subtitle: "Expert Reviews & Comprehensive Rankings",
        description: "Discover fan-favourite crypto-casino slots with verified RTP, volatility, hit rate, and max-win specs. From Money Train 4 to Sugar Rush—find your perfect game.",
        ctaButton: {
            text: "View Our Top 10 Slots",
            link: "index.html",
            icon: "fas fa-coins"
        },
        backgroundType: "animated", // "static", "video", "animated"
        backgroundConfig: {
            animationType: "crypto-rain", // "crypto-rain", "floating-coins", "matrix", "particles"
            primaryColor: "var(--primary-color)",
            secondaryColor: "var(--secondary-color)",
            intensity: "medium" // "low", "medium", "high"
        },
        imageBox: {
            enabled: true,
            position: "bottom", // "left", "right", "center", "top", "bottom"
            layout: "stacked", // "side-by-side", "stacked", "overlay"
            image: {
                src: "assets/images/slot-games/slots-hero4.png", // Path to your image (TODO: slot-themed artwork)
                alt: "Top Crypto Slot Experience",
                placeholder: "🎰", // Emoji or icon if image fails to load
                aspectRatio: "16:9", // "1:1", "4:3", "16:9", "21:9", "auto"
                objectFit: "contain" // "cover", "contain", "fill", "scale-down"
            },
            styling: {
                borderRadius: "20px",
                shadow: "large", // "none", "small", "medium", "large", "glow"
                border: "none", // "none", "thin", "medium", "thick", "gradient"
                animation: "float", // "none", "float", "pulse", "glow", "zoom"
                overlay: "none" // "none", "dark", "light", "gradient", "color"
            },
            size: {
                width: "1000px", // CSS width value
                height: "600px", // CSS height value or "auto"
                maxWidth: "45%", // Maximum width as percentage of container
                minWidth: "800px" // Minimum width
            }
        }
    },

    // Scroll-triggered sections
    scrollSections: {
        enabled: true,
        sections: [
            {
                id: "section-1",
                trigger: 200, // pixels scrolled
                backgroundType: "gradient", // Changed from image to gradient
                backgroundValue: "linear-gradient(135deg,rgb(22, 196, 249),rgb(154, 224, 236))", // Orange gradient
                title: "Max Potential",
                description: "Chase ceilings up to 150,000× with proven crowd favourites.",
                animation: "fade-slide-left",
                icon: "fas fa-rocket"
            },
            {
                id: "section-2", 
                trigger: 600,
                backgroundType: "gradient",
                backgroundValue: "linear-gradient(135deg,rgb(245, 202, 153),rgb(247, 139, 139))",
                title: "RTP & Volatility",
                description: "Know the RTP variants and volatility before you spin.",
                animation: "fade-slide-right",
                icon: "fas fa-chart-line"
            },
            {
                id: "section-3",
                trigger: 1000,
                backgroundType: "gradient",
                backgroundValue: "linear-gradient(135deg, #0ea5e9, #1d4ed8)", // Cyan-to-blue complementary gradient
                title: "Bonuses & Promos",
                description: "Drops & Wins, welcome spins, and jackpot networks—compare offers.",
                animation: "fade-slide-up",
                icon: "fas fa-gift"
            }
        ]
    },

    // Video sections
    videoSections: [
        {
            enabled: true,
            title: "How to Choose Crypto Slots Wisely",
            description: "Understand RTP variants, volatility, hit frequency, and bonus features before you play.",
            videoUrl: "./assets/videos/slot-games/slots.mp4", // Local video file path
            externalUrl: "https://www.youtube.com/watch?v=ejHx7pyeOf0", // External URL (YouTube, etc.) - opens in new tab when clicked
            displayType: "video", // "video" or "thumbnail" - choose how to display
            thumbnailImage: "./assets/images/casino_test/casino18.jpg", // Thumbnail image if displayType is "thumbnail"
            placeholder: "🎥 Slot Education Video - Add your video URL in home-config.js",
            autoplay: true,
            loop: true, // ← NEW: Video will loop continuously
            muted: true, // Recommended for autoplay to work in browsers
            controls: true, // Show video controls
            clickAction: "external", // "none", "external", "fullscreen" - what happens when video/thumbnail is clicked
            position: "left" // "left", "right", "center"
        },
        {
            enabled: true,
            title: "Slot Features Explained", 
            description: "Scatter pays, tumbles, cluster pays, Megaways, and bonus buys—see them in action.",
            videoUrl: "./assets/videos/slot-games/features.mp4", // Local video file path
            externalUrl: "https://www.youtube.com/watch?v=j4y96TCpqyw", // External URL (YouTube, etc.) - opens in new tab when clicked
            displayType: "video", // "video" or "thumbnail" - choose how to display
            thumbnailImage: "./assets/images/casino_test/casino16.webp", // Thumbnail image if displayType is "thumbnail"
            placeholder: "🎯 Slot Mechanics Video - Add your video URL in home-config.js",
            autoplay: true,
            loop: true, // ← NEW: Video will loop continuously
            muted: true, // Recommended for autoplay to work in browsers
            controls: true, // Show video controls
            clickAction: "external", // "none", "external", "fullscreen" - what happens when video/thumbnail is clicked
            position: "right"
        }
    ],



    // Animated ad sections
    adSections: [
        {
            enabled: true,
            type: "banner", // "banner", "card", "popup", "floating"
            title: "🎰 Drops & Wins Is Live!",
            subtitle: "€2,000,000 monthly prize pool",
            description: "Opt in at eligible Pragmatic casinos to join leaderboards and prize drops.",
            ctaText: "See Eligible Sites",
            ctaLink: "index.html#top10",
            animation: "pulse-glow-slide", // Enhanced animation
            backgroundType: "animated-gradient", // Enhanced background
            backgroundConfig: {
                gradient: "linear-gradient(45deg, var(--primary-color), var(--secondary-color), var(--accent-color))",
                animationStyle: "moving-gradient", // Moving gradient effect
                animatedBg: "floating-coins"
            },
            position: "center",
            size: "large", // "small", "medium", "large"
            movingElements: {
                enabled: true,
                coins: true,
                sparkles: true,
                glow: true
            }
        },
        {
            enabled: true,
            type: "card",
            title: "💥 Money Train 4 – Max Potential",
            subtitle: "150,000× top win ceiling", 
            description: "Editor-backed top pick for spectacle and feature depth.",
            ctaText: "Read Review",
            ctaLink: "index.html#review-1",
            animation: "hover-lift-glow-shake", // Enhanced animation
            backgroundType: "animated-pattern",
            backgroundConfig: {
                pattern: "crypto-circuit", // Animated circuit pattern
                overlay: "rgba(0,0,0,0.2)",
                animationSpeed: "medium"
            },
            position: "right",
            size: "medium",
            movingElements: {
                enabled: true,
                circuit: true,
                particles: true,
                border: true
            }
        },
        {
            enabled: true,
            type: "card",
            title: "🍬 Sugar Rush – Editor’s Choice",
            subtitle: "Cluster Pays with sticky multipliers",
            description: "7×7 grid, multiplier spots up to ×128, ~96.5% RTP (variant dependent).",
            ctaText: "Why We Picked It",
            ctaLink: "index.html#editors-choice-review",
            animation: "bounce-glow-rotate", // New bouncing animation
            backgroundType: "animated-gradient",
            backgroundConfig: {
                gradient: "linear-gradient(135deg, #ffd700, #ff6b35, #e63946)",
                animationStyle: "rotating-gradient",
                sparkleEffect: true
            },
            glow: {
                color: "#f59e0b",           // Base glow color (amber for slots)
                hoverColor: "#fbbf24",      // Hover glow color (lighter amber)
                blur: "28px",               // Base blur radius
                hoverBlur: "56px"           // Hover blur radius
            },
            position: "left",
            size: "medium",
            movingElements: {
                enabled: true,
                diamonds: true,
                sparkles: true,
                shine: true
            }
        }
    ],

    // Tech-themed animations
    cryptoAnimations: {
        enabled: true,
        animations: [
            {
                name: "floating-icons",
                elements: ["laptop", "microchip", "memory", "battery"],
                count: 15,
                speed: "slow",
                direction: "up"
            },
            {
                name: "matrix-rain", 
                characters: ["💻", "⚡", "🖥️", "🔋", "⚙️", "📱"], //crypto symbols: ₿, Ξ, Ł, Ð, ₳, ○, ◊, △, ฿, ₮, ɱ, ꜩ, Ƀ
                density: "medium",
                speed: "medium",
                color: "var(--primary-color)"
            },
            {
                name: "particle-network",
                particleCount: 50,
                connectionDistance: 100,
                speed: "slow",
                color: "var(--accent-color)"
            },
            {
                name: "crypto-rain", 
                characters: [
                    "🍒", // cherries
                    "7️⃣", // lucky seven
                    "🔔", // bell
                    "⭐", // star
                    "🍋", // lemon
                    "🍉", // watermelon
                    "🍇", // grapes
                    "💎", // diamond
                    "🍊", // orange
                    "🎰", // slot machine
                    "🍓", // strawberry
                    "🃏", // joker card
                    "🥭", // exotic fruit (bonus style)
                    "🍀", // four-leaf clover
                    "🥝", // kiwi
                    "BAR", // classic BAR symbol (can be rendered as text)
                    "🔥", // fire (bonus effect)
                    "👑", // crown (jackpot/royal)
                    "💰", // money bag
                    "🌟", // sparkle star
                    "🍌", // banana
                    "💵", // cash
                    "💥", // explosion (bonus hit)
                    "🎲"  // dice
                  ],
                density: "medium",
                speed: "medium",
                color: "var(--primary-color)"
            },
        ]
    },

    // Interactive elements
    interactiveElements: {
        enabled: true,
        elements: [
            {
                type: "floating-cta",
                text: "🎯 Find Your Perfect Slot",
                link: "index.html",
                position: "bottom-right",
                animation: "bounce-fade",
                showAfterScroll: 300
            },
            {
                type: "scroll-progress",
                style: "crypto-themed",
                color: "var(--primary-color)",
                position: "top"
            }
        ]
    },

    // Page-specific settings
    pageSettings: {
        fadeInOnLoad: true,
        smoothScrolling: true,
        parallaxEnabled: true,
        lazyLoadImages: true,
        animationSpeed: "medium", // "slow", "medium", "fast"
        mobileOptimized: true
    }
};

/**
 * HOME PAGE TITLE MANAGER
 * Handles browser tab title for home page
 */
class HomePageManager {
    constructor() {
        this.init();
    }
    
    init() {
        // Wait for DOM to be ready and add a small delay to ensure all configs are loaded
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                setTimeout(() => this.applyPageTitle(), 100);
            });
        } else {
            setTimeout(() => this.applyPageTitle(), 100);
        }
    }
    
    /**
     * Apply page title to browser tab
     */
    applyPageTitle() {
        // Only apply home page title if we're actually on the home page
        const currentPage = window.location.pathname.toLowerCase();
        const isHomePage = currentPage.includes('home.html') || currentPage.includes('home');
        
        if (!isHomePage) {
            return; // Don't apply home title to other pages
        }
        
        const title = document.querySelector('title');
        if (title) {
            // Replace {{BRAND_NAME}} with actual brand name
            let pageTitle = HOME_PAGE_TITLE;
            
            // Try to get brand name from brand-config.js
            if (typeof window.BRAND_NAME !== 'undefined') {
                pageTitle = pageTitle.replace('{{BRAND_NAME}}', window.BRAND_NAME);
            } else if (typeof window.BrandManager !== 'undefined') {
                const brandConfig = window.BrandManager.get();
                pageTitle = pageTitle.replace('{{BRAND_NAME}}', brandConfig.text.name);
            } else {
                // Fallback to default brand name
                pageTitle = pageTitle.replace('{{BRAND_NAME}}', 'DC\'s Top 10');
            }
            
            title.textContent = pageTitle;
        }
    }
}

// Export for use in other files
if (typeof window !== 'undefined') {
    window.HOME_CONFIG = HOME_CONFIG;
    window.HOME_PAGE_TITLE = HOME_PAGE_TITLE;
    window.HomePageManager = HomePageManager;
    
    // Auto-initialize page title manager
    new HomePageManager();
    
    console.log('✅ HOME_CONFIG loaded successfully:', HOME_CONFIG);
    console.log('📊 Config sections available:', Object.keys(HOME_CONFIG));
} else {
    console.log('⚠️ Window object not available');
}

// Export for Node.js environments
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        HOME_CONFIG,
        HOME_PAGE_TITLE
    };
} 