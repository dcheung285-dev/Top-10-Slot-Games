/*
===========================================
AFFILIATE WEBSITE TEMPLATE - CONFIGURATION
===========================================
🎯 CHANGE YOUR MAIN SETTINGS HERE - ONLY EDIT THESE LINES:
*/

// ========== MAIN SETTINGS - EDIT THESE LINES ONLY ==========
const NICHE = "Crypto Slot Games";                          // ← Your niche (e.g., "Gaming Laptops", "Coffee Makers")
const PRODUCT_TYPE = "Crypto Slots";                   // ← Product type eg. "Gaming Laptops"
const AUDIENCE = "Crypto casino players";                       // ← Target audience eg. "Gamers"
const CONTACT_EMAIL = "contact@SpinRated.com";           // ← Your contact email "eg. contact@yoursite.com"
// const SITE_URL = "{{Site URL}}";                // ← COMMENTED OUT - using smart detection below instead


// 🔧 SMART URL DETECTION (ALTERNATIVE):
// Replace the SITE_URL line above with this code for automatic dev/production switching:

const SITE_URL = (() => {
    // Auto-detect development environment
    if (window.location.hostname === 'localhost' || 
        window.location.hostname === '127.0.0.1' || 
        window.location.hostname.includes('gitpod') ||
        window.location.hostname.includes('codesandbox') ||
        window.location.hostname.includes('stackblitz')) {
        const devUrl = window.location.origin;
        console.log('🔧 Development mode detected - Using URL:', devUrl);
        return devUrl; // Use current development URL
    }
    
    // Production URL - CHANGE THIS to your live domain
    const prodUrl = "https://dctop10x.com";
    console.log('🌍 Production mode detected - Using URL:', prodUrl);
    return prodUrl;
})();


const FAVICON = "./assets/images/slot-games/slots_icon.png";       // ← Your favicon path (browser tab icon)

// Don't touch INDEX_PAGE_TITLE - it's automatically generated from the settings above
const INDEX_PAGE_TITLE = "Top 10 Crypto Slot Games - Best Slot Reviews 2025"; // ← Homepage browser tab title 

// ========== TRUST INDICATORS - EDIT THESE ==========
const REVIEW_COUNT = "10 million";                      // ← Number of reviews "+"
const USER_COUNT = "1 million";                         // ← Users helped "+"
const LAST_UPDATE = "September 2025";                   // ← Last updated
const NUMBER_TESTED = "100"                    // ← Products tested "+" this is for the Editor's choice section

// ========== HERO SECTION CONFIGURATION ==========
const HERO_CONFIG = {
    // Hero image settings
    image: {
        src: "./assets/images/slot-games/slots-hero1.jpg",  // ← Change this to slot-themed hero image (TODO ok)
        alt: "{{PRODUCT_TYPE}} Reviews",  // ← Alt text for the hero image (shows what the site reviews)
        fallback: "./assets/images/slot-games/slots-hero1.jpg"  // ← Fallback image if main image fails to load
    },
    
    // Optional: Video settings
    video: {
        enabled: false,  // ← Set to true to enable video functionality
        src: "./assets/videos/Monti's_test_video.mp4",        // ← Add your video URL here (MP4, WebM, or OGV)
        type: "video/mp4", // ← Video MIME type (video/mp4, video/webm, video/ogg)
        text: "Watch Our Review Video", // ← Placeholder text when no video URL
        autoplay: false, // ← Set to true for autoplay (not recommended)
        muted: false,    // ← Set to true to start muted
        loop: false,     // ← Set to true to loop video
        poster: "",      // ← Optional: Video poster image URL
        
        // Supported video formats and guidelines:
        // MP4: Best compatibility (recommended) - file.mp4
        // WebM: Good for web, smaller file sizes - file.webm  
        // OGV: Ogg format for Firefox - file.ogv
        // 
        // Video Guidelines:
        // - Recommended size: 1920x1080 (Full HD) or 1280x720 (HD)
        // - Duration: 30-60 seconds for hero videos
        // - File size: Keep under 10MB for good loading speed
        // - Format: MP4 H.264 codec for best compatibility
        // - Add captions/subtitles for accessibility
    }
    
    // HERO IMAGE GUIDELINES:
    // - Should show multiple products grouped together
    // - Represents the product category you review (coffee makers, laptops, etc.)
    // - Builds trust by showing you test multiple products
    // - Recommended size: 800x600px minimum (1200x900px preferred)
    // - Supported formats: .jpg, .webp, .png
    // - Alt text should describe what products you review, not "comparison"
};

// Make HERO_CONFIG globally available
window.HERO_CONFIG = HERO_CONFIG;

// ========== EDITOR'S CHOICE CONFIGURATION ==========
const EDITORS_CHOICE_CONFIG = {
    // =============================================
    // CHOOSE YOUR EDITOR'S CHOICE PRODUCT
    // =============================================
    // Option 1: Use any product from your product list
    // Change this to any product key: 'product1', 'product2', 'product3', etc.
    selectedProduct: 'product2',  // ← CHANGE THIS LINE TO SWITCH PRODUCTS
    
    // =============================================
    // EDITOR'S CHOICE BADGE CONFIGURATION
    // =============================================
    badgeSettings: {
        // For product cards: add editor's choice badge next to existing badge
        addToProductCard: true,              // ← Show "EDITOR'S CHOICE" badge on product cards
        replaceProductBadge: false,          // ← Replace product badge with editor's choice badge (set true to replace, false to show both)
        
        // Badge text and styling
        badgeText: "EDITOR'S CHOICE",        // ← Text for the editor's choice badge
        badgeIcon: "fas fa-crown"            // ← Icon for the editor's choice badge
    },
    
    // Option 2: Manual override (set useManualOverride to true)
    useManualOverride: true,     // ← Set to true to use manual data below instead of product data
    
    // Manual override data (only used if useManualOverride is true)
    manualOverride: {
        name: "Sugar Rush",
        
        // =============================================
        // TITLE DISPLAY CONFIGURATION
        // =============================================
        titleDisplay: {
            type: 'text',                    // ← 'text', 'image', or 'combined'
            logoImage: './assets/images/slot-games/pragmatic-play-logo.webp', // ← Logo image path
            logoScale: 4.0,                  // ← Logo scaling (1.0 = 100%, 1.5 = 150%, etc.)
            logoAlt: 'Pragmatic Play Logo', // ← Alt text for logo
            gap: '24px'                      // ← Gap between logo and text in combined mode (e.g., '24px', '-10px', '2rem', '-50px' for overlapping)
        },
        description: "Sugar Rush (Editor's Choice) – 7×7 Cluster Pays with multiplier spots up to ×128, persistent in Free Spins. ~96.5% RTP standard (lower variants exist). High volatility; 5,000× max win.",
        productLogo: "./assets/images/slot-games/pragmatic-play-logo.webp",
        productImage: "./assets/images/slot-games/Sugar-Rush-slots.jpg",
        rating: 5.0,
        reviewCount: 1200,

        // =============================================
        // RANK BADGE DISPLAY SETTINGS
        // =============================================
        badgeSettings: {
            showOnProductCard: true,     // ← Show/hide rank badge on product cards (true/false)
            showOnDetailedReview: true   // ← Show/hide rank badge on detailed review cards (true/false)
        },
        
        
        // Casino Websites
        welcomeBonus: "Cluster Pays with persistent ×128 multiplier spots",
        welcomePackage: "Free Spins via scatters; demo widely available",
        addedBonus: "High volatility ~96.5% RTP standard",
        
        
        affiliateLink: "https://www.pragmaticplay.com/en/games/sugar-rush/",
        ctaText: "Demo",
        
        /*
        logoScale: {
            grid: 1.0,  // Scale for grid view (1.0 = 100%, 1.2 = 120%, etc.)
            list: 1.0   // Scale for list view
        }, */
        
        // Product image scaling settings for product cards
        imageScale: {
            grid: 1.0,       // Scale for product image in grid view
            list: 1.0        // Scale for product image in list view
        },
        
        // Product image positioning settings for product cards
        imagePositioning: {
            grid: {
                objectPosition: 'top center',  // Options: 'top left', 'top center', 'top right', 'center left', 'center', 'center right', 'bottom left', 'bottom center', 'bottom right'
                objectFit: 'fill'         // Options: 'cover', 'contain', 'fill', 'scale-down', 'none'
            }
        },
        
        // Logo positioning settings for product cards
        logoPositioning: {
            grid: {
                left: '0px',     // Horizontal positioning for grid view
                top: '0px'       // Vertical positioning for grid view
            },
            list: {
                left: '0px',     // Horizontal positioning for list view
                top: '0px'       // Vertical positioning for list view
            }
        },
        
        // Detailed review scaling settings
        detailedReviewScale: {
            productImage: 1.0,  // Scale for product image in detailed reviews
            productLogo: 2.0    // Scale for product logo in detailed reviews
        },
        
        // Detailed review positioning settings
        detailedReviewPositioning: {
            productLogo: {
                left: '0px',     // Horizontal positioning for detailed review logo
                top: '-0.5rem'       // Vertical positioning for detailed review logo
            },
            productImage: {
                left: '0px',           // Horizontal positioning for detailed review image
                top: '0px',            // Vertical positioning for detailed review image
                objectPosition: 'top center', // Options: 'top left', 'top center', 'top right', 'center left', 'center', 'center right', 'bottom left', 'bottom center', 'bottom right'
                objectFit: 'fill'     // Options: 'cover', 'contain', 'fill', 'scale-down', 'none'
            }
        },
        
        // Product ranking and affiliate data
        rank: "1st",
        rankBadge: "EDITOR'S PICK",

        // CTA section configuration for detailed reviews
        cta: {
            title: "Indulge in the sugar rush",
            description: "Trigger Free Spins, lock in multiplier spots, chase 5,000×.",
            boxInfo: "~96.5% RTP standard (lower variants exist). High volatility.",
            // CTA box display controls
            display: {
                showTitle: false,        // Show/hide CTA title
                showDescription: false,  // Show/hide CTA description  
                showBoxInfo: false,      // Show/hide additional box info
                showPricingInfo: true   // Show/hide pricing info section
            }
        },
        
        // Features for product cards (short list)
        features: [
            { text: "7×7 Cluster Pays", icon: "fas fa-th" },
            { text: "Multiplier Spots up to ×128", icon: "fas fa-bolt" },
            { text: "Tumbles/Cascades", icon: "fas fa-sync-alt" },
            { text: "Free Spins retain multipliers", icon: "fas fa-star" },
            { text: "~96.5% RTP (variant dependent)", icon: "fas fa-percentage" }
        ],
        
        // Detailed review content
        fullReview: {
            tagline: "A sugar-coated cluster explosion with sticky multipliers",
            paragraphs: [
                "Sugar Rush blends cluster-pays with cascading wins and multiplier spots that can stack up to ×128 at positions you reuse.",
                "The Free Spins preserve built multipliers, so setups can snowball dramatically despite high volatility.",
                "Standard RTP sits around ~96.5% with lower variants on some sites; max win is 5,000× your stake."
            ]
        },
        
        // Perks for product cards and detailed reviews
        perks: [
            { text: "Above-average RTP for high-volatility slot", icon: "fas fa-percentage" },
            { text: "Multipliers persist in Free Spins", icon: "fas fa-magnet" },
            { text: "Good for casuals and risk-tolerant players", icon: "fas fa-users" },
            { text: "Strong visuals and smooth animations", icon: "fas fa-film" },
            { text: "Retriggers possible for extended runs", icon: "fas fa-redo" }
        ],
        
        // Technical specifications (slot specs)
        specifications: [
            { name: "Layout", value: "7×7 Cluster Pays", icon: "fas fa-th" },
            { name: "RTP", value: "~96.5% (alt 95.5%, 94.5%)", icon: "fas fa-percentage" },
            { name: "Volatility", value: "High (5/5)", icon: "fas fa-exclamation-triangle" },
            { name: "Max Win", value: "5,000×", icon: "fas fa-trophy" },
            { name: "Bet Range", value: "~$0.20–$100 typical", icon: "fas fa-coins" }
        ]
    }
    
    // =============================================
    // HOW THE SYSTEM WORKS:
    // =============================================
    // 1. PRODUCT SELECTION: If useManualOverride = false, the system uses 
    //    the product specified in selectedProduct (e.g., 'product2')
    //    
    // 2. MANUAL OVERRIDE: If useManualOverride = true, the system uses
    //    the custom data from manualOverride object
    //    
    // 3. GOLD STYLING: The selected product gets gold gradient styling
    //    that overrides any theme, making it stand out as editor's choice
    //    
    // 4. SMART SCROLLING: The "Read Full Review" button automatically
    //    scrolls to the correct review section:
    //    - For product selection: scrolls to that product's review
    //    - For manual override: scrolls to special editor's choice review
    //    
    // 5. DYNAMIC REVIEW CARDS: If manual override is used, a special
    //    gold-themed review card is created automatically
    //    
    // EXAMPLES:
    // - selectedProduct: 'product1' → Uses product1 data, scrolls to review-1
    // - selectedProduct: 'product8' → Uses product8 data, scrolls to review-8  
    // - useManualOverride: true → Uses custom data, creates special review card
};

// Make EDITORS_CHOICE_CONFIG globally available
window.EDITORS_CHOICE_CONFIG = EDITORS_CHOICE_CONFIG;

// ========== PRODUCT DATA CONFIGURATION ==========
const PRODUCTS_CONFIG = {
    // Product 1 Configuration - Money Train 4 — Flagship Finale with 150,000x Max Win
    product1: {
        name: "Money Train 4",
        description: "Money Train 4 - 6×6 scatter-pays with cinematic polish, very high volatility, and a 150,000× ceiling. Money Cart bonus stacks synergistic special symbols; Respins add sticky state in base play.",
        productLogo: "./assets/images/slot-games/Relax-Gaming-logo.png",     // Product logo for content area
        productImage: "./assets/images/slot-games/money-train-4-slots.jpg",          // Main product image for grid view and reviews
        logoScale: {
            grid: 2.0,    // Scale for grid view (1.0 = 100%, 1.2 = 120%, etc.)
            list: 1.5,    // Scale for list view
            tablet: {
                grid: 1.5,  // Scale for tablet grid view
                list: 0.7   // Scale for tablet list view
            }
        },
        
        // Product image scaling settings for product cards
        imageScale: {
            grid: 1.0,       // Scale for product image in grid view
            list: 1.0        // Scale for product image in list view
        },
        
        // Product image positioning settings for product cards
        imagePositioning: {
            grid: {
                objectPosition: 'top center',  // Options: 'top left', 'top center', 'top right', 'center left', 'center', 'center right', 'bottom left', 'bottom center', 'bottom right'
                objectFit: 'fill'         // Options: 'cover', 'contain', 'fill', 'scale-down', 'none'
            }
        },
        
        // Logo positioning settings for product cards
        logoPositioning: {
            grid: {
                left: '0px',     // Horizontal positioning for grid view
                top: '0px'       // Vertical positioning for grid view
            },
            list: {
                left: '0px',     // Horizontal positioning for list view
                top: '0px'       // Vertical positioning for list view
            }
        },
        
        // Detailed review scaling settings
        detailedReviewScale: {
            productImage: 1.0,  // Scale for product image in detailed reviews
            productLogo: 1.5    // Scale for product logo in detailed reviews
        },
        
        // Detailed review positioning settings
        detailedReviewPositioning: {
            productLogo: {
                left: '0px',     // Horizontal positioning for detailed review logo
                top: '-0.5rem'   // Vertical positioning for detailed review logo
            },
            productImage: {
                left: '0px',           // Horizontal positioning for detailed review image
                top: '0px',            // Vertical positioning for detailed review image
                objectPosition: 'top center', // Options: 'top left', 'top center', 'top right', 'center left', 'center', 'center right', 'bottom left', 'bottom center', 'bottom right'
                objectFit: 'fill'     // Options: 'cover', 'contain', 'fill', 'scale-down', 'none'
            }
        },
        
        // Product ranking and affiliate data
        rank: 1,
        rankBadge: "MAX POTENTIAL",
        rating: 4.9,
        reviewCount: 2000,
        
        // =============================================
        // RANK BADGE DISPLAY SETTINGS
        // =============================================
        badgeSettings: {
            showOnProductCard: false,     // ← Show/hide rank badge on product cards (true/false)
            showOnDetailedReview: false   // ← Show/hide rank badge on detailed review cards (true/false)
        },
        
        // Casino Websites
        welcomeBonus: "150,000× ceiling; Money Cart + base Respins",
        welcomePackage: "Feature Buys incl. powerful modifiers (where allowed)",
        addedBonus: "Scatter-pays; expanding rows; polished demo",
        
        affiliateLink: "https://www.relax-gaming.com/products/casino/moneytrain4",
        ctaText: "Demo", // This will be overridden by template config if needed
        
        // CTA section configuration for detailed reviews
        cta: {
            title: "Board the last train",
            description: "Hit the Money Cart and chase 150,000×.",
            boxInfo: "RTP 96.1% (96.5% on feature buy). Very high volatility.",
            // CTA box display controls
            display: {
                showTitle: false,        // Show/hide CTA title
                showDescription: false,  // Show/hide CTA description  
                showBoxInfo: false,      // Show/hide additional box info
                showPricingInfo: true   // Show/hide pricing info section
            }
        },
        
        // Features for product cards (short list)
        features: [
            { text: "Money Cart bonus with special symbols", icon: "fas fa-train" },
            { text: "Base-game Respins with sticky symbols", icon: "fas fa-undo" },
            { text: "Feature Buys: 100× and 500×", icon: "fas fa-shopping-bag" },
            { text: "Expanding rows & persistent variants", icon: "fas fa-expand-arrows-alt" },
            { text: "Cinematic dystopian audio-visual polish", icon: "fas fa-film" }
        ],
        
        // Detailed review content
        fullReview: {
            tagline: "One last ride, absurd potential.",
            paragraphs: [
                "Money Train 4 closes Relax's blockbuster series with a 6×6 scatter-pays grid and feature synergies that can snowball into explosive outcomes.",
                "Base-game Respins add interactivity by holding symbols and multipliers, while the Money Cart layers Collectors, Payers, Snipers and persistent variants for readable, thrilling bonus rounds.",
                "With a 150,000× ceiling and 96.1% default RTP (96.5% on feature buy), it earns its 10/10 'Masterpiece' status—just expect spiky variance and savor the presentation."
            ]
        },
        
        // Perks for product cards and detailed reviews - Simple format: text + icon
        perks: [
            { text: "Low entry stakes from €/$0.10", icon: "fas fa-coins" },
            { text: "Scatter-pays system (no paylines)", icon: "fas fa-th" },
            { text: "Clear paytable and symbol explanations", icon: "fas fa-book" },
            { text: "Recognized franchise with community content", icon: "fas fa-users" },
            { text: "Base Respins evolve the reel state", icon: "fas fa-sync-alt" },
            { text: "Bigwinboard 10/10 'Masterpiece'", icon: "fas fa-award" }
        ],
        
        // Technical specifications - Simple format: name + value + icon
        specifications: [
            { name: "Grid", value: "6×6, Scatter Pays", icon: "fas fa-th" },
            { name: "RTP", value: "96.1% (96.5% on feature buy)", icon: "fas fa-percentage" },
            { name: "Volatility", value: "High (5/5)", icon: "fas fa-exclamation-triangle" },
            { name: "Max Win", value: "150,000×", icon: "fas fa-trophy" },
            { name: "Hit Frequency", value: "~20.14%", icon: "fas fa-bullseye" }
        ]
    },
    
    // Product 2 Configuration - Gates of Olympus — Greek God of Scatter-Pays
    product2: {
        name: "Gates of Olympus",
        description: "Gates of Olympus - 6×5 scatter-pays with tumbles and random multiplier orbs (2×–500×). Very high volatility, 5,000× cap, multiple RTP variants (96.5% default). Streamer-famous loops.",
        productLogo: "./assets/images/slot-games/pragmatic-play-logo.webp",
        productImage: "./assets/images/slot-games/Gates-of-Olympus-slots.jpg",
        logoScale: {
            grid: 4.0,
            list: 2.5,
            tablet: {
                grid: 2.5,  // Scale for tablet grid view
                list: 1.0   // Scale for tablet list view
            }
        },
        
        // Product image scaling settings for product cards
        imageScale: {
            grid: 1.0,       // Scale for product image in grid view
            list: 1.0        // Scale for product image in list view
        },
        
        // Product image positioning settings for product cards
        imagePositioning: {
            grid: {
                objectPosition: 'top center',  // Options: 'top left', 'top center', 'top right', 'center left', 'center', 'center right', 'bottom left', 'bottom center', 'bottom right'
                objectFit: 'fill'         // Options: 'cover', 'contain', 'fill', 'scale-down', 'none'
            }
        },
        
        // Logo positioning settings for product cards
        logoPositioning: {
            grid: {
                left: '0px',    // Horizontal positioning for grid view
                top: '-0.25rem'    // Vertical positioning for grid view
            },
            list: {
                left: '0px',     // Horizontal positioning for list view
                top: '0rem'       // Vertical positioning for list view
            }
        },
        
        // Detailed review scaling settings
        detailedReviewScale: {
            productImage: 1.0,  // Scale for product image in detailed reviews
            productLogo: 2.0    // Scale for product logo in detailed reviews
        },
        
        // Detailed review positioning settings
        detailedReviewPositioning: {
            productLogo: {
                left: '0px',    // Horizontal positioning for detailed review logo
                top: '-0.55rem'   // Vertical positioning for detailed review logo
            },
            productImage: {
                left: '0px',           // Horizontal positioning for detailed review image
                top: '0px',            // Vertical positioning for detailed review image
                objectPosition: 'top center', // Options: 'top left', 'top center', 'top right', 'center left', 'center', 'center right', 'bottom left', 'bottom center', 'bottom right'
                objectFit: 'fill'     // Options: 'cover', 'contain', 'fill', 'scale-down', 'none'
            }
        },
        
        // Product ranking and affiliate data
        rank: 2,
        rankBadge: "STREAMER FAVORITE",
        rating: 4.8,
        reviewCount: 1500,
        
        // =============================================
        // RANK BADGE DISPLAY SETTINGS
        // =============================================
        badgeSettings: {
            showOnProductCard: true,     // ← Show/hide rank badge on product cards (true/false)
            showOnDetailedReview: true   // ← Show/hide rank badge on detailed review cards (true/false)
        },
        
        // ========== UNIVERSAL TEMPLATE FIELDS ==========
        
        // Casino Websites
        welcomeBonus: "Tumbles + 2×–500× orbs; explosive Free Spins",
        welcomePackage: "Ante Bet/Bonus Buy on many sites; frequent Drops & Wins",
        addedBonus: "High volatility; iconic Greek theme",
        
        affiliateLink: "https://www.pragmaticplay.com/en/games/gates-of-olympus/",
        ctaText: "Demo",
        
        // CTA section configuration for detailed reviews
        cta: {
            title: "Catch the orb",
            description: "Hit tumbles and stack 2×–500× multipliers.",
            boxInfo: "RTP 96.5% default (95.51%/94.5% alts). 5,000× cap.",
            // CTA box display controls
            display: {
                showTitle: false,        // Show/hide CTA title
                showDescription: false,  // Show/hide CTA description  
                showBoxInfo: false,      // Show/hide additional box info
                showPricingInfo: true   // Show/hide pricing info section
            }
        },
        
        // Features for product cards (short list)
        features: [
            { text: "Scatter-Pays + Tumbles", icon: "fas fa-sync-alt" },
            { text: "Multiplier Orbs 2×–500×", icon: "fas fa-bolt" },
            { text: "15 Free Spins Bonus", icon: "fas fa-gift" },
            { text: "Ante/Bonus Buy (varies)", icon: "fas fa-shopping-bag" },
            { text: "Mobile-first UI", icon: "fas fa-mobile-alt" }
        ],
        
        // Detailed review content
        fullReview: {
            tagline: "Tumbles + multipliers up to 500×.",
            paragraphs: [
                "Gates distills the scatter-pays + tumble formula into an instantly readable loop where eight-of-a-kind anywhere keeps the whole grid in play.",
                "Zeus's multiplier orbs (2×–500×) are the star—especially when multiple orbs land and add during Free Spins, creating clip-worthy spikes.",
                "Volatility is punishing on cold runs, but paired with Drops & Wins leaderboards, it remains a top pick for stream-ready drama."
            ]
        },
        
        // Perks for product cards and detailed reviews
        perks: [
            { text: "Huge multiplier ceiling (up to 500×)", icon: "fas fa-bolt" },
            { text: "Simple to learn scatter-pays", icon: "fas fa-th" },
            { text: "Fast cascades and mobile polish", icon: "fas fa-mobile-alt" },
            { text: "RTP variants disclosed", icon: "fas fa-file-alt" },
            { text: "Pairs with Drops & Wins", icon: "fas fa-trophy" }
        ],
        
        // Technical specifications (slot specs)
        specifications: [
            { name: "Layout", value: "6×5 Scatter-Pays; Tumbles", icon: "fas fa-th" },
            { name: "RTP", value: "96.5% (alts 95.51%, 94.5%)", icon: "fas fa-percentage" },
            { name: "Volatility", value: "Very High", icon: "fas fa-exclamation-triangle" },
            { name: "Max Win", value: "5,000×", icon: "fas fa-trophy" },
            { name: "Multipliers", value: "Orbs 2×–500×", icon: "fas fa-bolt" }
        ]
    },
    
    // Product 3 Configuration - Sweet Bonanza — Candy-Land Classic with 21,100× Cap
    product3: {
        name: "Sweet Bonanza",
        description: "Sweet Bonanza - 6×5 scatter-pays with tumbles and rainbow bombs up to 100×. RTP ~96.5% variants; medium-high volatility with a 21,100× cap and Double Chance option.",
        productLogo: "./assets/images/slot-games/pragmatic-play-logo.webp",
        productImage: "./assets/images/slot-games/Sweet-Bonanza-slots.jpg",
        logoScale: {
            grid: 4.0,
            list: 2.5,
            tablet: {
                grid: 2.5,  // Scale for tablet grid view
                list: 1.0   // Scale for tablet list view
            }
        },
        
        // Product image scaling settings for product cards
        imageScale: {
            grid: 1.0,       // Scale for product image in grid view
            list: 1.0        // Scale for product image in list view
        },
        
        // Product image positioning settings for product cards
        imagePositioning: {
            grid: {
                objectPosition: 'top center',  // Options: 'top left', 'top center', 'top right', 'center left', 'center', 'center right', 'bottom left', 'bottom center', 'bottom right'
                objectFit: 'fill'         // Options: 'cover', 'contain', 'fill', 'scale-down', 'none'
            }
        },
        
        // Logo positioning settings for product cards
        logoPositioning: {
            grid: {
                left: '0px',     // Horizontal positioning for grid view
                top: '-0.25rem'       // Vertical positioning for grid view
            },
            list: {
                left: '0px',     // Horizontal positioning for list view
                top: '0px'       // Vertical positioning for list view
            }
        },
        
        // Detailed review scaling settings
        detailedReviewScale: {
            productImage: 1.0,  // Scale for product image in detailed reviews
            productLogo: 2.0    // Scale for product logo in detailed reviews
        },
        
        // Detailed review positioning settings
        detailedReviewPositioning: {
            productLogo: {
                left: '0px',     // Horizontal positioning for detailed review logo
                top: '-0.25rem'       // Vertical positioning for detailed review logo
            },
            productImage: {
                left: '0px',           // Horizontal positioning for detailed review image
                top: '0px',            // Vertical positioning for detailed review image
                objectPosition: 'top center', // Options: 'top left', 'top center', 'top right', 'center left', 'center', 'center right', 'bottom left', 'bottom center', 'bottom right'
                objectFit: 'fill'     // Options: 'cover', 'contain', 'fill', 'scale-down', 'none'
            }
        },
        
        // Product ranking and affiliate data
        rank: 3,
        rankBadge: "EASY ENTRY",
        rating: 4.8,
        reviewCount: 1400,
        
        // =============================================
        // RANK BADGE DISPLAY SETTINGS
        // =============================================
        badgeSettings: {
            showOnProductCard: false,     // ← Show/hide rank badge on product cards (true/false)
            showOnDetailedReview: false   // ← Show/hide rank badge on detailed review cards (true/false)
        },
        
        // Casino Websites
        welcomeBonus: "Tumbles with bombs up to 100×; 21,100× cap",
        welcomePackage: "Double Chance toggle; often in free spins promos",
        addedBonus: "Low minimum stakes; broad availability",
        
        affiliateLink: "https://www.pragmaticplay.com/en/games/sweet-bonanza/",
        ctaText: "Demo",
        
        // CTA section configuration for detailed reviews
        cta: {
            title: "Flip on Double Chance",
            description: "Chase candy bombs up to 100×.",
            boxInfo: "RTP ~96.5% (variants). 21,100× max win.",
            // CTA box display controls - Example with some elements hidden
            display: {
                showTitle: false,         // Show CTA title
                showDescription: false,  // Hide CTA description  
                showBoxInfo: false,       // Show additional box info
                showPricingInfo: true   // Hide pricing info section
            }
        },
        
        // Features for product cards (short list)
        features: [
            { text: "Scatter-Pays + Tumbles", icon: "fas fa-sync-alt" },
            { text: "Rainbow Bombs up to 100×", icon: "fas fa-bomb" },
            { text: "Free Spins Bonus", icon: "fas fa-gift" },
            { text: "Double Chance toggle", icon: "fas fa-toggle-on" },
            { text: "~96.5% RTP variants", icon: "fas fa-percentage" }
        ],
        
        // Detailed review content
        fullReview: {
            tagline: "Sugar rushes, rainbow bombs.",
            paragraphs: [
                "The archetypal scatter-pays + tumble slot that set the tone for the genre, with clean mobile visuals and breezy pacing.",
                "Rainbow bombs up to 100× provide the fireworks—especially in Free Spins where cascades keep the grid refilling.",
                "A higher 21,100× cap than Gates trades off some on-screen drama; still a staple, especially alongside Drops & Wins."
            ]
        },
        
        // Perks for product cards and detailed reviews
        perks: [
            { text: "Iconic candy theme with broad appeal", icon: "fas fa-candy-cane" },
            { text: "Widely available on crypto sites", icon: "fas fa-globe" },
            { text: "RTP transparency and variants", icon: "fas fa-file-alt" },
            { text: "Huge 21,100× top potential", icon: "fas fa-trophy" },
            { text: "Pairs with Drops & Wins", icon: "fas fa-medal" }
        ],
        
        // Technical specifications (slot specs)
        specifications: [
            { name: "Layout", value: "6×5 Scatter-Pays; Tumbles", icon: "fas fa-th" },
            { name: "RTP", value: "~96.48–96.51% (variants)", icon: "fas fa-percentage" },
            { name: "Volatility", value: "Medium–High", icon: "fas fa-exclamation-triangle" },
            { name: "Max Win", value: "21,100×", icon: "fas fa-trophy" },
            { name: "Bet Range", value: "$0.20–$125 (with Double Chance)", icon: "fas fa-coins" }
        ]
    },
    
    // Product 4 Configuration - Dead or Alive 2 — Cult Wild West, Proven Max Potential
    product4: {
        name: "Dead or Alive 2",
        description: "Dead or Alive 2 - 5×3, 9 paylines with three free spins modes (Old Saloon, High Noon, Train Heist). Sticky wilds and multipliers with very high volatility and ~111,111× cited potential.",
        productLogo: "./assets/images/slot-games/netent-logo.png",
        productImage: "./assets/images/slot-games/dead-or-alive-2-slots.jpg",
        logoScale: {
            grid: 2.5,
            list: 1.5,
            tablet: {
                grid: 1.5,  // Scale for tablet grid view
                list: 0.7   // Scale for tablet list view
            }
        },
        
        // Product image scaling settings for product cards
        imageScale: {
            grid: 1.0,       // Scale for product image in grid view
            list: 1.0        // Scale for product image in list view
        },
        
        // Product image positioning settings for product cards
        imagePositioning: {
            grid: {
                objectPosition: 'top center',  // Options: 'top left', 'top center', 'top right', 'center left', 'center', 'center right', 'bottom left', 'bottom center', 'bottom right'
                objectFit: 'fill'         // Options: 'cover', 'contain', 'fill', 'scale-down', 'none'
            }
        },
        
        // Logo positioning settings for product cards
        logoPositioning: {
            grid: {
                left: '0px',     // Horizontal positioning for grid view
                top: '0rem'      // Vertical positioning for grid view
            },
            list: {
                left: '0px',     // Horizontal positioning for list view
                top: '0rem'      // Vertical positioning for list view
            }
        },
        
        // Detailed review scaling settings
        detailedReviewScale: {
            productImage: 1.0,  // Scale for product image in detailed reviews
            productLogo: 1.5    // Scale for product logo in detailed reviews
        },
        
        // Detailed review positioning settings
        detailedReviewPositioning: {
            productLogo: {
                left: '0px',     // Horizontal positioning for detailed review logo
                top: '-0.25rem'      // Vertical positioning for detailed review logo
            },
            productImage: {
                left: '0px',           // Horizontal positioning for detailed review image
                top: '0px',            // Vertical positioning for detailed review image
                objectPosition: 'top center', // Options: 'top left', 'top center', 'top right', 'center left', 'center', 'center right', 'bottom left', 'bottom center', 'bottom right'
                objectFit: 'fill'     // Options: 'cover', 'contain', 'fill', 'scale-down', 'none'
            }
        },
        
        // Product ranking and affiliate data
        rank: 4,
        rankBadge: "OG HIGH VOL",
        rating: 4.7,
        reviewCount: 1800,

        // =============================================
        // RANK BADGE DISPLAY SETTINGS
        // =============================================
        badgeSettings: {
            showOnProductCard: false,     // ← Show/hide rank badge on product cards (true/false)
            showOnDetailedReview: false   // ← Show/hide rank badge on detailed review cards (true/false)
        },
        
        // Casino Websites
        welcomeBonus: "Mode choice: Old Saloon / High Noon / Train Heist",
        welcomePackage: "Free Spins via scatters; sticky wild multipliers",
        addedBonus: "Very high volatility; classic NetEnt polish",
        
        affiliateLink: "https://games.netent.com/video-slots/dead-or-alive-2/",
        ctaText: "Demo",
        
        // CTA section configuration for detailed reviews
        cta: {
            title: "Pick your free-spins mode",
            description: "Hunt the wildline—Old Saloon, High Noon, or Train Heist.",
            boxInfo: "RTP up to ~96.8% (variants). Very high volatility. ~111,111× cited cap.",
            // CTA box display controls
            display: {
                showTitle: false,        // Show/hide CTA title
                showDescription: false,  // Show/hide CTA description  
                showBoxInfo: false,      // Show/hide additional box info
                showPricingInfo: true   // Show/hide pricing info section
            }
        },
        
        // Features for product cards (short list)
        features: [
            { text: "Sticky Wilds / multipliers", icon: "fas fa-magnet" },
            { text: "Three distinct free spins modes", icon: "fas fa-gift" },
            { text: "Very high volatility", icon: "fas fa-exclamation-triangle" },
            { text: "Classic 9-line structure", icon: "fas fa-stream" },
            { text: "Lightweight client (mobile friendly)", icon: "fas fa-mobile-alt" }
        ],
        
        // Detailed review content
        fullReview: {
            tagline: "Sticky wilds. Monster caps.",
            paragraphs: [
                "DoA2's tight math profile snaps from calm to catastrophic when sticky wilds line up, particularly in High Noon for viral moments.",
                "The three bonus modes let you pick your flavor—classic set-piece or multiplier mayhem—keeping replayability high.",
                "Cold stretches are real, but the ~111,111× cited cap and cult status justify its evergreen appeal."
            ]
        },
        
        // Perks for product cards and detailed reviews
        perks: [
            { text: "Cult classic with huge knowledge base", icon: "fas fa-users" },
            { text: "Low min bets for long sessions", icon: "fas fa-coins" },
            { text: "Transparent mechanics & paytable", icon: "fas fa-book" },
            { text: "Proven highlight 'wildline' potential", icon: "fas fa-bullseye" },
            { text: "Critical 10/10 scores", icon: "fas fa-award" }
        ],
        
        // Technical specifications (slot specs)
        specifications: [
            { name: "Reels/Lines", value: "5×3, 9 paylines", icon: "fas fa-th" },
            { name: "RTP", value: "~96.8% (variants)", icon: "fas fa-percentage" },
            { name: "Volatility", value: "Very High", icon: "fas fa-exclamation-triangle" },
            { name: "Max Win", value: "~111,111× (cited)", icon: "fas fa-trophy" },
            { name: "Bets", value: "~£0.09–£9 (examples)", icon: "fas fa-coins" }
        ]
    },
    
    // Product 5 Configuration - Razor Shark — High-RTP Deep-Sea Menace
    product5: {
        name: "Razor Shark",
        description: "Razor Shark - 5×4, 20 lines with 96.7% RTP, Mystery Stacks + Nudge & Reveal, Razor Reveal coins, and escalating multipliers in Free Spins. Very high volatility.",
        productLogo: "./assets/images/slot-games/Push-Gaming-logo.png",
        productImage: "./assets/images/slot-games/Razor-Shark-slots.jpg",
        logoScale: {
            grid: 3.5,
            list: 2.0,
            tablet: {
                grid: 2.5,  // Scale for tablet grid view
                list: 0.8   // Scale for tablet list view
            }
        },
        
        // Product image scaling settings for product cards
        imageScale: {
            grid: 1.0,       // Scale for product image in grid view
            list: 1.0        // Scale for product image in list view
        },
        
        // Product image positioning settings for product cards
        imagePositioning: {
            grid: {
                objectPosition: 'top center',  // Options: 'top left', 'top center', 'top right', 'center left', 'center', 'center right', 'bottom left', 'bottom center', 'bottom right'
                objectFit: 'fill'         // Options: 'cover', 'contain', 'fill', 'scale-down', 'none'
            }
        },
        
        // Logo positioning settings for product cards
        logoPositioning: {
            grid: {
                left: '0px',     // Horizontal positioning for grid view
                top: '0rem'      // Vertical positioning for grid view
            },
            list: {
                left: '0px',     // Horizontal positioning for list view
                top: '0rem'      // Vertical positioning for list view
            }
        },
        
        // Detailed review scaling settings
        detailedReviewScale: {
            productImage: 1.0,  // Scale for product image in detailed reviews
            productLogo: 2.0    // Scale for product logo in detailed reviews
        },
        
        // Detailed review positioning settings
        detailedReviewPositioning: {
            productLogo: {
                left: '0px',     // Horizontal positioning for detailed review logo
                top: '-0.25rem'      // Vertical positioning for detailed review logo
            },
            productImage: {
                left: '0px',           // Horizontal positioning for detailed review image
                top: '0px',            // Vertical positioning for detailed review image
                objectPosition: 'top center', // Options: 'top left', 'top center', 'top right', 'center left', 'center', 'center right', 'bottom left', 'bottom center', 'bottom right'
                objectFit: 'fill'     // Options: 'cover', 'contain', 'fill', 'scale-down', 'none'
            }
        },
        
        // Product ranking and affiliate data
        rank: 5,
        rankBadge: "HIGH RTP",
        rating: 4.6,
        reviewCount: 1600,

        // =============================================
        // RANK BADGE DISPLAY SETTINGS
        // =============================================
        badgeSettings: {
            showOnProductCard: true,     // ← Show/hide rank badge on product cards (true/false)
            showOnDetailedReview: true   // ← Show/hide rank badge on detailed review cards (true/false)
        },
        
        // Casino Websites
        welcomeBonus: "Mystery Stacks + Nudge & Reveal core loop",
        welcomePackage: "High RTP variant on many sites",
        addedBonus: "Escalating multipliers in Free Spins; documented mega wins",
        
        affiliateLink: "https://www.pushgaming.com/games/razor-shark.html",
        ctaText: "Demo",
        
        // CTA section configuration for detailed reviews
        cta: {
            title: "Dive into Mystery Stacks",
            description: "Nudge & Reveal toward huge multipliers.",
            boxInfo: "RTP 96.7% (site variants may differ). Very high volatility.",
            // CTA box display controls
            display: {
                showTitle: false,        // Show/hide CTA title
                showDescription: false,  // Show/hide CTA description  
                showBoxInfo: false,      // Show/hide additional box info
                showPricingInfo: true   // Show/hide pricing info section
            }
        },
        
        // Features for product cards (short list)
        features: [
            { text: "Mystery Stacks + Nudge & Reveal", icon: "fas fa-layer-group" },
            { text: "Razor Reveal coin multipliers", icon: "fas fa-coins" },
            { text: "Free Spins with rising multiplier", icon: "fas fa-chart-line" },
            { text: "96.7% RTP (variant dependent)", icon: "fas fa-percentage" },
            { text: "Very high volatility", icon: "fas fa-exclamation-triangle" }
        ],
        
        // Detailed review content
        fullReview: {
            tagline: "Mystery stacks; unlimited observed potential.",
            paragraphs: [
                "Razor Shark succeeds with a simple but addictive loop: Mystery Stacks + Nudge & Reveal that can cascade into huge reveals.",
                "Razor Reveal coins and a rising global multiplier in Free Spins enable seismic late-round swings—while variance remains ferocious.",
                "The 96.7% RTP stands out in a field of lower-RTP clones; community-documented mega wins cement its highlight-reel status."
            ]
        },
        
        // Perks for product cards and detailed reviews
        perks: [
            { text: "Higher-than-average RTP for the genre", icon: "fas fa-percentage" },
            { text: "Documented mega wins (community proof)", icon: "fas fa-award" },
            { text: "Broad casino availability", icon: "fas fa-globe" },
            { text: "Clean, readable symbol set", icon: "fas fa-eye" },
            { text: "Portrait-mode mobile polish", icon: "fas fa-mobile-alt" }
        ],
        
        // Technical specifications (slot specs)
        specifications: [
            { name: "Reels/Lines", value: "5×4, 20 paylines", icon: "fas fa-th" },
            { name: "RTP", value: "96.7% (variants differ)", icon: "fas fa-percentage" },
            { name: "Volatility", value: "Very High", icon: "fas fa-exclamation-triangle" },
            { name: "Max Observed", value: "85,475× documented", icon: "fas fa-trophy" },
            { name: "Stakes", value: "10p–£100 typical", icon: "fas fa-coins" }
        ]
    },
    
    // Product 6 Configuration - Bonanza Megaways — The Megaways Blueprint
    product6: {
        name: "Bonanza Megaways",
        description: "Bonanza Megaways - 6 reels up to 117,649 ways; reactions and carts; Free Spins with unlimited win multiplier. ~96% RTP; medium-high volatility; 26,000× max win.",
        productLogo: "./assets/images/slot-games/Big-Time-Gaming-logo.webp",
        productImage: "./assets/images/slot-games/bonanza-megaways-slots.webp",
        logoScale: {
            grid: 4.5,
            list: 3.0,
            tablet: {
                grid: 3.5,  // Scale for tablet grid view
                list: 2.0   // Scale for tablet list view
            }
        },
        
        // Product image scaling settings for product cards
        imageScale: {
            grid: 1.0,       // Scale for product image in grid view
            list: 1.0        // Scale for product image in list view
        },
        
        // Product image positioning settings for product cards
        imagePositioning: {
            grid: {
                objectPosition: 'top center',  // Options: 'top left', 'top center', 'top right', 'center left', 'center', 'center right', 'bottom left', 'bottom center', 'bottom right'
                objectFit: 'fill'         // Options: 'cover', 'contain', 'fill', 'scale-down', 'none'
            }
        },
        
        // Logo positioning settings for product cards
        logoPositioning: {
            grid: {
                left: '0px',     // Horizontal positioning for grid view
                top: '0rem'      // Vertical positioning for grid view
            },
            list: {
                left: '0px',     // Horizontal positioning for list view
                top: '0rem'      // Vertical positioning for list view
            }
        },
        
        // Detailed review scaling settings
        detailedReviewScale: {
            productImage: 1.0,  // Scale for product image in detailed reviews
            productLogo: 3.5    // Scale for product logo in detailed reviews
        },
        
        // Detailed review positioning settings
        detailedReviewPositioning: {
            productLogo: {
                left: '0px',     // Horizontal positioning for detailed review logo
                top: '0rem'      // Vertical positioning for detailed review logo
            },
            productImage: {
                left: '0px',           // Horizontal positioning for detailed review image
                top: '0px',            // Vertical positioning for detailed review image
                objectPosition: 'top center', // Options: 'top left', 'top center', 'top right', 'center left', 'center', 'center right', 'bottom left', 'bottom center', 'bottom right'
                objectFit: 'fill'     // Options: 'cover', 'contain', 'fill', 'scale-down', 'none'
            }
        },
        
        // Product ranking and affiliate data
        rank: 6,
        rankBadge: "MEGAWAYS CORE",
        rating: 4.5,
        reviewCount: 1700,

        // =============================================
        // RANK BADGE DISPLAY SETTINGS
        // =============================================
        badgeSettings: {
            showOnProductCard: true,     // ← Show/hide rank badge on product cards (true/false)
            showOnDetailedReview: true   // ← Show/hide rank badge on detailed review cards (true/false)
        },
        
        // Casino Websites
        welcomeBonus: "Up to 117,649 ways; cascades keep wins chaining",
        welcomePackage: "Often in welcome/free-spin bundles",
        addedBonus: "Unlimited bonus multiplier; iconic Megaways entry",
        
        affiliateLink: "https://www.bigtimegaming.com/games/bonanza?srsltid=AfmBOopfs6g8d35nOduBn_JKtBKR4SMzr1EwUC14LPn19dPccGhZm2kY",
        ctaText: "Demo",
        
        // CTA section configuration for detailed reviews
        cta: {
            title: "Trigger Free Spins",
            description: "Watch the multiplier climb.",
            boxInfo: "~96% RTP, ~37.47% hit rate, 26,000× max win.",
            // CTA box display controls
            display: {
                showTitle: false,        // Show/hide CTA title
                showDescription: false,  // Show/hide CTA description  
                showBoxInfo: false,      // Show/hide additional box info
                showPricingInfo: true   // Show/hide pricing info section
            }
        },
        
        // Features for product cards (short list)
        features: [
            { text: "Up to 117,649 ways", icon: "fas fa-random" },
            { text: "Reaction wins (cascades)", icon: "fas fa-sync-alt" },
            { text: "Unlimited bonus multiplier", icon: "fas fa-infinity" },
            { text: "Re-triggers common enough to matter", icon: "fas fa-redo" },
            { text: "~96% RTP (BTG)", icon: "fas fa-percentage" }
        ],
        
        // Detailed review content
        fullReview: {
            tagline: "The original ‘reaction wins’ gold rush.",
            paragraphs: [
                "Bonanza pioneered Megaways: reaction wins and carts feeding fresh symbols, with a progressive multiplier in Free Spins.",
                "Lean by modern standards—fewer gimmicks, pure cascades—which keeps it welcoming for learners and satisfying for grinders.",
                "The 26,000× revision gives modern teeth; its methodical progression loop still shines in long crypto sessions."
            ]
        },
        
        // Perks for product cards and detailed reviews
        perks: [
            { text: "Icon status; tons of guides", icon: "fas fa-book" },
            { text: "Smooth performance even on older phones", icon: "fas fa-mobile-alt" },
            { text: "Free-spin re-triggers common enough to matter", icon: "fas fa-redo" },
            { text: "Entry stakes stay low for long sessions", icon: "fas fa-coins" },
            { text: "Spawns linked titles (Bonanza Falls/Megapays)", icon: "fas fa-network-wired" }
        ],
        
        // Technical specifications
        specifications: [
            { name: "Reels/Ways", value: "6 reels, up to 117,649 ways", icon: "fas fa-th" },
            { name: "RTP", value: "~96%", icon: "fas fa-percentage" },
            { name: "Hit Rate", value: "~37.47%", icon: "fas fa-bullseye" },
            { name: "Volatility", value: "Medium–High", icon: "fas fa-exclamation-triangle" },
            { name: "Max Win", value: "26,000×", icon: "fas fa-trophy" }
        ]
    },
    
    // Product 7 Configuration - The Dog House Megaways — Sticky vs Raining Free Spins
    product7: {
        name: "The Dog House Megaways",
        description: "The Dog House Megaways - 6-reel Megaways slot with player choice: Sticky Wilds vs Raining Wilds. High volatility, ~96.55% RTP, ~12,305× max win.",
        productLogo: "./assets/images/slot-games/pragmatic-play-logo.webp",
        productImage: "./assets/images/slot-games/The-Dog-House-Megaways-slots.webp",
        logoScale: {
            grid: 4.0,
            list: 2.5,
            tablet: {
                grid: 2.5,  // Scale for tablet grid view
                list: 1.0   // Scale for tablet list view
            }
        },
        
        // Product image scaling settings for product cards
        imageScale: {
            grid: 1.0,       // Scale for product image in grid view
            list: 1.0        // Scale for product image in list view
        },
        
        // Product image positioning settings for product cards
        imagePositioning: {
            grid: {
                objectPosition: 'top center',  // Options: 'top left', 'top center', 'top right', 'center left', 'center', 'center right', 'bottom left', 'bottom center', 'bottom right'
                objectFit: 'fill'         // Options: 'cover', 'contain', 'fill', 'scale-down', 'none'
            }
        },

        // Logo positioning settings for product cards
        logoPositioning: {
            grid: {
                left: '0px',     // Horizontal positioning for grid view
                top: '-0.25rem'      // Vertical positioning for grid view
            },
            list: {
                left: '0px',     // Horizontal positioning for list view
                top: '0rem'      // Vertical positioning for list view
            }
        },
        
        // Detailed review scaling settings
        detailedReviewScale: {
            productImage: 1.0,  // Scale for product image in detailed reviews
            productLogo: 2.0    // Scale for product logo in detailed reviews
        },

        // Detailed review positioning settings
        detailedReviewPositioning: {
            productLogo: {
                left: '0px',     // Horizontal positioning for detailed review logo
                top: '-0.25rem'      // Vertical positioning for detailed review logo
            },
            productImage: {
                left: '0px',           // Horizontal positioning for detailed review image
                top: '0px',            // Vertical positioning for detailed review image
                objectPosition: 'top center', // Options: 'top left', 'top center', 'top right', 'center left', 'center', 'center right', 'bottom left', 'bottom center', 'bottom right'
                objectFit: 'fill'     // Options: 'cover', 'contain', 'fill', 'scale-down', 'none'
            }
        },
        
        // Product ranking and affiliate data
        rank: 7,
        rankBadge: "PICK-YOUR-BONUS",
        rating: 4.5,
        reviewCount: 1300,

        // =============================================
        // RANK BADGE DISPLAY SETTINGS
        // =============================================
        badgeSettings: {
            showOnProductCard: false,     // ← Show/hide rank badge on product cards (true/false)
            showOnDetailedReview: false   // ← Show/hide rank badge on detailed review cards (true/false)
        },
        
        // Casino Websites
        welcomeBonus: "Pick Sticky or Raining Wilds bonus styles",
        welcomePackage: "Frequently in Drops & Wins/welcome promos",
        addedBonus: "~12,305× top with wild multipliers; upbeat theme",
        
        affiliateLink: "https://www.pragmaticplay.com/en/games/the-dog-house-megaways-slot/",
        ctaText: "Demo",
        
        // CTA section configuration for detailed reviews
        cta: {
            title: "Pick your bonus",
            description: "Sticky for compounding chaos, or Raining for pure thrills.",
            boxInfo: "~96.55% RTP, high volatility, ~12,305× top.",
            // CTA box display controls
            display: {
                showTitle: false,        // Show/hide CTA title
                showDescription: false,  // Show/hide CTA description  
                showBoxInfo: false,      // Show/hide additional box info
                showPricingInfo: true   // Show/hide pricing info section
            }
        },
        
        // Features for product cards (short list)
        features: [
            { text: "Megaways up to 117,649", icon: "fas fa-random" },
            { text: "Sticky or Raining Wilds", icon: "fas fa-cloud-showers-heavy" },
            { text: "High volatility", icon: "fas fa-exclamation-triangle" },
            { text: "~96.55% RTP", icon: "fas fa-percentage" },
            { text: "~12,305× max win", icon: "fas fa-trophy" }
        ],
        
        // Detailed review content
        fullReview: {
            tagline: "Cuddly visuals, serious math.",
            paragraphs: [
                "Two bonus styles keep replay value high: Sticky Wilds can snowball with multipliers, while Raining Wilds offers swingy surprise hits.",
                "Megaways variable heights and fast play make it a friendly entry point for new players without losing spice for veterans.",
                "Often eligible for network promos, it's a frequent tournament pick for consistent engagement." 
            ]
        },
        
        // Perks for product cards and detailed reviews
        perks: [
            { text: "Player choice on volatility", icon: "fas fa-sliders-h" },
            { text: "Charming visuals, readable UI", icon: "fas fa-paw" },
            { text: "Frequent appearance in promos", icon: "fas fa-bullhorn" },
            { text: "Strong RTP for the genre", icon: "fas fa-percentage" },
            { text: "Easy to parse for newcomers", icon: "fas fa-book-open" }
        ],
        
        // Technical specifications
        specifications: [
            { name: "Reels/Ways", value: "6 reels; up to 117,649 ways", icon: "fas fa-th" },
            { name: "RTP", value: "~96.55%", icon: "fas fa-percentage" },
            { name: "Volatility", value: "High", icon: "fas fa-exclamation-triangle" },
            { name: "Max Win", value: "~12,305×", icon: "fas fa-trophy" },
            { name: "Bets", value: "~£0.20–£100 typical", icon: "fas fa-coins" }
        ]
    },
    
    // Product 8 Configuration - Big Bass Bonanza — Fan-Favorite Fish with 96.71% RTP
    product8: {
        name: "Big Bass Bonanza",
        description: "Big Bass Bonanza - 5×3, 10 paylines with fisherman collector bonus, retrigger multipliers up to 10×. ~96.71% RTP variant; medium-high volatility; ~2,100× max win.",
        productLogo: "./assets/images/slot-games/Reel-Kingdom-logo.png",
        productImage: "./assets/images/slot-games/big-bass-bonanza-slots.png",
        logoScale: {
            grid: 3.0,
            list: 2.0,
            tablet: {
                grid: 2.2,  // Scale for tablet grid view
                list: 0.8   // Scale for tablet list view
            }
        },
        
        // Product image scaling settings for product cards
        imageScale: {
            grid: 1.0,       // Scale for product image in grid view
            list: 1.0        // Scale for product image in list view
        },
        
        // Product image positioning settings for product cards
        imagePositioning: {
            grid: {
                objectPosition: 'top center',  // Options: 'top left', 'top center', 'top right', 'center left', 'center', 'center right', 'bottom left', 'bottom center', 'bottom right'
                objectFit: 'fill'         // Options: 'cover', 'contain', 'fill', 'scale-down', 'none'
            }
        },

        // Logo positioning settings for product cards
        logoPositioning: {
            grid: {
                left: '0px',     // Horizontal positioning for grid view
                top: '0rem'      // Vertical positioning for grid view
            },
            list: {
                left: '0px',     // Horizontal positioning for list view
                top: '0rem'      // Vertical positioning for list view
            }
        },
        
        // Detailed review scaling settings
        detailedReviewScale: {
            productImage: 1.0,  // Scale for product image in detailed reviews
            productLogo: 2.0    // Scale for product logo in detailed reviews
        },

        // Detailed review positioning settings
        detailedReviewPositioning: {
            productLogo: {
                left: '0px',     // Horizontal positioning for detailed review logo
                top: '-0.25rem'      // Vertical positioning for detailed review logo
            },
            productImage: {
                left: '0px',           // Horizontal positioning for detailed review image
                top: '0px',            // Vertical positioning for detailed review image
                objectPosition: 'top center', // Options: 'top left', 'top center', 'top right', 'center left', 'center', 'center right', 'bottom left', 'bottom center', 'bottom right'
                objectFit: 'fill'     // Options: 'cover', 'contain', 'fill', 'scale-down', 'none'
            }
        },
        
        // Product ranking and affiliate data
        rank: 8,
        rankBadge: "ACCESSIBLE VALUE",
        rating: 4.5,
        reviewCount: 1500,

        // =============================================
        // RANK BADGE DISPLAY SETTINGS
        // =============================================
        badgeSettings: {
            showOnProductCard: false,     // ← Show/hide rank badge on product cards (true/false)
            showOnDetailedReview: false   // ← Show/hide rank badge on detailed review cards (true/false)
        },
        
        // Casino Websites
        welcomeBonus: "Fisherman collects cash fish; retriggers possible",
        welcomePackage: "~96.71% RTP variant available",
        addedBonus: "Moderate volatility; broad availability; low learning curve",
        
        affiliateLink: "https://reelkingdom.com/games/big-bass-slot",
        ctaText: "Demo",
        
        // CTA section configuration for detailed reviews
        cta: {
            title: "Hook the bonus",
            description: "Stack those 2×–10× retriggers.",
            boxInfo: "~96.71% RTP variant; medium–high volatility; ~2,100× max.",
            // CTA box display controls
            display: {
                showTitle: false,        // Show/hide CTA title
                showDescription: false,  // Show/hide CTA description  
                showBoxInfo: false,      // Show/hide additional box info
                showPricingInfo: true   // Show/hide pricing info section
            }
        },
        
        // Features for product cards (short list)
        features: [
            { text: "Fisherman collects cash fish", icon: "fas fa-fish" },
            { text: "Retriggers to 2×–10×", icon: "fas fa-level-up-alt" },
            { text: "Cash symbols in bonus", icon: "fas fa-coins" },
            { text: "Medium–High volatility", icon: "fas fa-exclamation-triangle" },
            { text: "~96.71% RTP variant", icon: "fas fa-percentage" }
        ],
        
        // Detailed review content
        fullReview: {
            tagline: "Catch fish, collect multipliers.",
            paragraphs: [
                "Big Bass nails the collector loop: the fisherman wild scoops up cash fish, and retriggers escalate multipliers up to 10×.",
                "The base is sparse by design to spotlight the bonus, keeping variance manageable for casual sessions and on mobile.",
                "The ~96.71% RTP variant sits above many clones, and the series offers deeper alternatives if you want more nuance."
            ]
        },
        
        // Perks for product cards and detailed reviews
        perks: [
            { text: "Approachable collector mechanics", icon: "fas fa-handshake" },
            { text: "Frequent promo appearances", icon: "fas fa-bullhorn" },
            { text: "Broad bet range for bankrolls", icon: "fas fa-coins" },
            { text: "Consistent mobile/desktop feel", icon: "fas fa-mobile-alt" },
            { text: "Series depth (many spinoffs)", icon: "fas fa-layer-group" }
        ],
        
        // Technical specifications
        specifications: [
            { name: "Reels/Lines", value: "5×3, 10 paylines", icon: "fas fa-th" },
            { name: "RTP", value: "~96.71% (variant dependent)", icon: "fas fa-percentage" },
            { name: "Volatility", value: "Medium–High", icon: "fas fa-exclamation-triangle" },
            { name: "Max Win", value: "~2,100×", icon: "fas fa-trophy" },
            { name: "Bets", value: "~£0.10–£250 examples", icon: "fas fa-coins" }
        ]
    },
    
    // Product 9 Configuration - San Quentin xWays — Notorious Nolimit Volatility
    product9: {
        name: "San Quentin xWays",
        description: "San Quentin xWays - xWays/xSplit enhancers with Lockdown Spins and extreme volatility. ~96.03% default RTP (lower variants exist); 150,000× max win.",
        productLogo: "./assets/images/slot-games/nolimit-city-logo2.webp",
        productImage: "./assets/images/slot-games/San-Quentin-xWays-slots.webp",
        logoScale: {
            grid: 2.8,
            list: 2.5,
            tablet: {
                grid: 2.3,  // Scale for tablet grid view
                list: 1.2   // Scale for tablet list view
            }
        },
        
        // Product image scaling settings for product cards
        imageScale: {
            grid: 1.0,       // Scale for product image in grid view
            list: 1.0        // Scale for product image in list view
        },
        
        // Product image positioning settings for product cards
        imagePositioning: {
            grid: {
                objectPosition: 'top center',  // Options: 'top left', 'top center', 'top right', 'center left', 'center', 'center right', 'bottom left', 'bottom center', 'bottom right'
                objectFit: 'fill'         // Options: 'cover', 'contain', 'fill', 'scale-down', 'none'
            }
        },

        // Logo positioning settings for product cards
        logoPositioning: {
            grid: {
                left: '0px',     // Horizontal positioning for grid view
                top: '0rem'      // Vertical positioning for grid view
            },
            list: {
                left: '0px',     // Horizontal positioning for list view
                top: '0rem'      // Vertical positioning for list view
            }
        },
        
        // Detailed review scaling settings
        detailedReviewScale: {
            productImage: 1.0,  // Scale for product image in detailed reviews
            productLogo: 2.0    // Scale for product logo in detailed reviews
        },

        // Detailed review positioning settings
        detailedReviewPositioning: {
            productLogo: {
                left: '0px',     // Horizontal positioning for detailed review logo
                top: '-0.25rem'      // Vertical positioning for detailed review logo
            },
            productImage: {
                left: '0px',           // Horizontal positioning for detailed review image
                top: '0px',            // Vertical positioning for detailed review image
                objectPosition: 'top center', // Options: 'top left', 'top center', 'top right', 'center left', 'center', 'center right', 'bottom left', 'bottom center', 'bottom right'
                objectFit: 'fill'     // Options: 'cover', 'contain', 'fill', 'scale-down', 'none'
            }
        },
        
        // Product ranking and affiliate data
        rank: 9,
        rankBadge: "EXTREME VOL",
        rating: 4.4,
        reviewCount: 1200,

        // =============================================
        // RANK BADGE DISPLAY SETTINGS
        // =============================================
        badgeSettings: {
            showOnProductCard: false,     // ← Show/hide rank badge on product cards (true/false)
            showOnDetailedReview: false   // ← Show/hide rank badge on detailed review cards (true/false)
        },
        
        // Casino Websites
        welcomeBonus: "Lockdown Spins with Jumping Wilds and multipliers",
        welcomePackage: "Bonus Buy options (where allowed)",
        addedBonus: "Enhancer Cells, xWays/xSplit; 150,000× cap; extreme vol",
        
        affiliateLink: "https://nolimitcity.com/games/san-quentin",
        ctaText: "Demo",
        
        // CTA section configuration for detailed reviews
        cta: {
            title: "Trigger Lockdown Spins",
            description: "Let xWays/xSplit go to work.",
            boxInfo: "~96.03% default RTP (alts 94.11%, 90.11%). 150,000× cap.",
            // CTA box display controls
            display: {
                showTitle: false,        // Show/hide CTA title
                showDescription: false,  // Show/hide CTA description  
                showBoxInfo: false,      // Show/hide additional box info
                showPricingInfo: true   // Show/hide pricing info section
            }
        },
        
        // Features for product cards (short list)
        features: [
            { text: "xWays/xSplit enhancers", icon: "fas fa-compress-arrows-alt" },
            { text: "Lockdown Spins", icon: "fas fa-lock" },
            { text: "Bonus buys (region dependent)", icon: "fas fa-shopping-bag" },
            { text: "Extreme volatility", icon: "fas fa-exclamation-triangle" },
            { text: "150,000× cap", icon: "fas fa-trophy" }
        ],
        
        // Detailed review content
        fullReview: {
            tagline: "Lockdown Spins, prison-yard payouts.",
            paragraphs: [
                "San Quentin’s enhancer suite turns a simple grid into a tangle of splits and expansions that can explode when aligned.",
                "When Lockdown Spins cook, they really cook—but the variance is brutal; bankroll planning is essential.",
                "The 150,000× cap remains a benchmark for max-win chasers across crypto casinos."
            ]
        },
        
        // Perks for product cards and detailed reviews
        perks: [
            { text: "Massive ceiling for highlight hunters", icon: "fas fa-mountain" },
            { text: "Cult following and endless clips", icon: "fas fa-video" },
            { text: "Clear variance expectations", icon: "fas fa-info-circle" },
            { text: "Distinct identity among max-win titles", icon: "fas fa-id-card" },
            { text: "Responsive runtime in browsers", icon: "fas fa-bolt" }
        ],
        
        // Technical specifications
        specifications: [
            { name: "Layout", value: "5×3 base; enhancers expand ways", icon: "fas fa-th" },
            { name: "RTP", value: "~96.03% (alts 94.11%, 90.11%)", icon: "fas fa-percentage" },
            { name: "Volatility", value: "Extreme", icon: "fas fa-exclamation-triangle" },
            { name: "Max Win", value: "150,000×", icon: "fas fa-trophy" },
            { name: "Bets", value: "~0.20–32 typical ranges", icon: "fas fa-coins" }
        ]
    },
    
    // Product 10 Configuration - Mega Moolah — Iconic Progressive Jackpot
    product10: {
        name: "Mega Moolah",
        description: "Mega Moolah - 5×3, 25-line progressive with four jackpots and a random jackpot wheel. 88.12% RTP due to progressive contribution; medium volatility.",
        productLogo: "./assets/images/slot-games/games-global-logo2.webp",
        productImage: "./assets/images/slot-games/Mega-Moolah-slots.jpg",
        logoScale: {
            grid: 2.0,
            list: 2.0,
            tablet: {
                grid: 2.0,  // Scale for tablet grid view
                list: 0.8   // Scale for tablet list view
            }
        },
        
        // Product image scaling settings for product cards
        imageScale: {
            grid: 1.0,       // Scale for product image in grid view
            list: 1.0        // Scale for product image in list view
        },
        
        // Product image positioning settings for product cards
        imagePositioning: {
            grid: {
                objectPosition: 'top center',  // Options: 'top left', 'top center', 'top right', 'center left', 'center', 'center right', 'bottom left', 'bottom center', 'bottom right'
                objectFit: 'fill'         // Options: 'cover', 'contain', 'fill', 'scale-down', 'none'
            }
        },

        // Logo positioning settings for product cards
        logoPositioning: {
            grid: {
                left: '0px',     // Horizontal positioning for grid view
                top: '0rem'      // Vertical positioning for grid view
            },
            list: {
                left: '0px',     // Horizontal positioning for list view
                top: '0rem'      // Vertical positioning for list view
            }
        },
        
        // Detailed review scaling settings
        detailedReviewScale: {
            productImage: 1.0,  // Scale for product image in detailed reviews
            productLogo: 1.5    // Scale for product logo in detailed reviews
        },

        // Detailed review positioning settings
        detailedReviewPositioning: {
            productLogo: {
                left: '0px',     // Horizontal positioning for detailed review logo
                top: '-0.25rem'      // Vertical positioning for detailed review logo
            },
            productImage: {
                left: '0px',           // Horizontal positioning for detailed review image
                top: '0px',            // Vertical positioning for detailed review image
                objectPosition: 'top center', // Options: 'top left', 'top center', 'top right', 'center left', 'center', 'center right', 'bottom left', 'bottom center', 'bottom right'
                objectFit: 'fill'     // Options: 'cover', 'contain', 'fill', 'scale-down', 'none'
            }
        },
        
        // Product ranking and affiliate data
        rank: 10,
        rankBadge: "JACKPOT HUNTERS",
        rating: 4.3,
        reviewCount: 1900,

        // =============================================
        // RANK BADGE DISPLAY SETTINGS
        // =============================================
        badgeSettings: {
            showOnProductCard: true,     // ← Show/hide rank badge on product cards (true/false)
            showOnDetailedReview: true   // ← Show/hide rank badge on detailed review cards (true/false)
        },
        
        // Casino Websites
        welcomeBonus: "Four-tier progressive jackpots; Free Spins with 3× multiplier",
        welcomePackage: "Verify jackpot eligibility in bonuses",
        addedBonus: "Low minimum stake; iconic and widely available",
        
        affiliateLink: "https://gamesglobal.com/Products",
        ctaText: "Demo",
        
        // CTA section configuration for detailed reviews
        cta: {
            title: "Aim for the wheel",
            description: "Take a few low-stakes spins and chase the Mega.",
            boxInfo: "RTP 88.12% (progressive); medium volatility; 4 jackpots.",
            // CTA box display controls
            display: {
                showTitle: false,        // Show/hide CTA title
                showDescription: false,  // Show/hide CTA description  
                showBoxInfo: false,      // Show/hide additional box info
                showPricingInfo: true   // Show/hide pricing info section
            }
        },
        
        // Features for product cards (short list)
        features: [
            { text: "Four progressive jackpots", icon: "fas fa-jack-o-lantern" },
            { text: "Random jackpot wheel", icon: "fas fa-chart-pie" },
            { text: "Free Spins 3× multiplier", icon: "fas fa-gift" },
            { text: "~88.12% RTP (progressive)", icon: "fas fa-percentage" },
            { text: "Medium volatility", icon: "fas fa-exclamation-triangle" }
        ],
        
        // Detailed review content
        fullReview: {
            tagline: "Four jackpots; life-changing hits.",
            paragraphs: [
                "Mega Moolah is about rolling the dice at a life-changer—the random jackpot wheel is the star and funds come from the lower 88.12% RTP.",
                "Base game outcomes are modest versus non-progressives; treat it as a side quest with a fixed budget for jackpot shots.",
                "Many hybrid crypto casinos still offer it; variants and sequels exist, but the original remains the most iconic." 
            ]
        },
        
        // Perks for product cards and detailed reviews
        perks: [
            { text: "Mega progressive with headline wins", icon: "fas fa-crown" },
            { text: "Low min bet for casual chasing", icon: "fas fa-coins" },
            { text: "Available at many mainstream sites", icon: "fas fa-globe" },
            { text: "Transparent RTP rationale", icon: "fas fa-file-alt" },
            { text: "Mobile-friendly legacy pacing", icon: "fas fa-mobile-alt" }
        ],
        
        // Technical specifications
        specifications: [
            { name: "Reels/Lines", value: "5×3, 25 paylines", icon: "fas fa-th" },
            { name: "RTP", value: "88.12% (progressive)", icon: "fas fa-percentage" },
            { name: "Volatility", value: "Medium", icon: "fas fa-exclamation-triangle" },
            { name: "Jackpots", value: "Mini, Minor, Major, Mega", icon: "fas fa-crown" },
            { name: "Bets", value: "~$0.01–$6.25 typical", icon: "fas fa-coins" }
        ]
    }
};

// ========== SECTION TITLES CONFIGURATION ==========
const SECTION_TITLES = {
    // Section titles and icons (easily customizable for your niche) - FOR DETAILED REVIEW CARDS and comparison section titles
    perks: {
        title: 'Perks', // e.g., availability, ease-of-use, promos
        icon: 'fas fa-gift',
        color: '#f59e0b'
    },
    specs: {
        title: 'Game Specs',
        icon: 'fas fa-cog',
        color: '#06b6d4'
    },
    features: {
        title: 'Features',
        icon: 'fas fa-star',
        color: '#10b981'
    },
    reviews: {
        title: 'Detailed Reviews',
        icon: 'fas fa-star'
    },
    comparison: 'Game Comparison',                  // ← Gets overridden by the comparison section Below
    
    // Helper function to get section info with backward compatibility
    getSection: function(sectionName) {
        const section = this[sectionName];
        if (typeof section === 'string') {
            // Backward compatibility for old string format
            return { title: section, icon: 'fas fa-star' };
        } else if (section && section.title) {
            // New object format
            return section;
        } else {
            // Fallback defaults
            const defaults = {
                perks: { title: 'Perks', icon: 'fas fa-star' },
                specs: { title: 'Specs', icon: 'fas fa-cogs' },
                features: { title: 'Features', icon: 'fas fa-list' },
                reviews: { title: 'Detailed Reviews', icon: 'fas fa-star' }
            };
            return defaults[sectionName] || { title: 'Section', icon: 'fas fa-star' };
        }
    },
    
    // Product card display options
    productCards: {
        displaySection: 'features'                        // ← 'perks', 'specs', or 'features'
    },
    
    // Sort options configuration
    sortOptions: {
        // Configure which sort options to show (reorder or remove as needed)
        enabled: [
            { value: 'rank', label: 'Sort by Rank', field: 'rank' },
            { value: 'rating', label: 'Sort by Rating', field: 'rating' },
            { value: 'primary', label: 'Sort by {{PRIMARY_FIELD}}', field: 'primary' },
            { value: 'secondary', label: 'Sort by {{SECONDARY_FIELD}}', field: 'secondary' }
        ],
        // Field mappings based on template type - customize labels for your niche
        fieldLabels: {
            physical_products: {
                primary: 'Price',
                secondary: 'Original Price'
            },
            casino_websites: {
                primary: 'Welcome Bonus',
                secondary: 'Welcome Package'
            },
            sports_betting: {
                primary: 'Sign Up Bonus',
                secondary: 'Deposit Match'
            }
            // Add more template types here as needed
        }
    },
    
    // Editor's Choice section configuration
    editorsChoice: {
        title: 'Editor\'s Choice',                          // ← Title for editor's choice section
        subtitle: 'Our top recommendation',                 // ← Subtitle
        ctaText: 'Get Started',                            // ← Call-to-action button text
        featureCount: 5,                                   // ← CONFIGURABLE: Number of features/specs/perks to show (3, 4, 5, 7, etc.)
        displaySection: 'features',                          // ← 'perks', 'features', or 'specs' to show in editor's choice
    },
    
    // Editor's Pick Cards configuration
    editorsPicks: {
        title: 'Editor\'s Picks',                          // ← Title for editor's picks section
        subtitle: 'Handpicked recommendations',            // ← Subtitle 
        featureCount: 5,                                   // ← CONFIGURABLE: Number of features/specs/perks to show in each pick card (3, 4, 5, 7, etc.)
        displaySection: 'features',                          // ← 'perks', 'features', or 'specs' to show in pick cards
    },

    // Comparison section configuration
    comparisonSection: {
        title: 'Slot Games Comparison',                       // ← Title for comparison section
        subtitle: 'Select 2–3 slot games to compare RTP, volatility, and features side by side', // ← Subtitle
        placeholderTitle: 'Select slot games to compare',   // ← Placeholder title when no products selected
        placeholderDescription: 'Choose 2-3 slot games from the dropdowns above to see a detailed comparison', // ← Placeholder description
        resultsTitle: 'Comparison Results',               // ← Title shown above comparison results
        resultsSubtitle: 'Comparing {count} products',    // ← Subtitle for results (use {count} for product count)
        featureCount: 5,                                  // ← CONFIGURABLE: Max features/specs/perks to show per product in comparison (5, 7, 10, etc.)
        
        // Dropdown configuration
        dropdownLabels: {
            product1: 'Slot Game 1:',                       // ← Label for first dropdown
            product2: 'Slot Game 2:',                       // ← Label for second dropdown
            product3: 'Slot Game 3 (Optional):'            // ← Label for third dropdown
        },
        dropdownPlaceholder: 'Select a slot game...',      // ← Placeholder text in dropdown options
        
        // Comparison table header icons and colors (separate from detailed review cards)
        sectionTitles: { //titles for comparison chosen in const SECTION_TITLES = { up above in the detailed review titles part
            perks: {
                icon: 'fas fa-gift',                      // ← CHANGEABLE: Icon for perks section in comparison table (CHANGED FROM BOLT TO STAR)
                color: '#f59e0b'                          // ← CHANGEABLE: Color for perks icons in comparison table
            },
            features: {
                icon: 'fas fa-star',                     // ← CHANGEABLE: Icon for features section in comparison table (CHANGED FROM GIFT TO HEART)
                color: '#10b981'                          // ← CHANGEABLE: Color for features icons in comparison table
            },
            specs: {
                icon: 'fas fa-cog',                       // ← CHANGEABLE: Icon for specs section in comparison table (CHANGED FROM WRENCH TO COG)
                color: '#06b6d4'                          // ← CHANGEABLE: Color for specs icons in comparison table
            }
        }
    }
};

// Make configurations globally available
window.PRODUCTS_CONFIG = PRODUCTS_CONFIG;
window.SECTION_TITLES = SECTION_TITLES;



// ========== TEMPLATE TYPE CONFIGURATION ==========
// Choose your template type to customize what displays in place of pricing
const TEMPLATE_TYPE = "casino_websites"; // ← CHANGE THIS TO MATCH YOUR WEBSITE TYPE

// Available template types:
// "physical_products"    - Shows price, original price, discount (default)
// "casino_websites"      - Shows bonus offers, welcome packages, free spins
// "sports_betting"       - Shows sign-up bonuses, odds boosts, free bets
// "software_saas"        - Shows subscription plans, trial info, monthly/yearly pricing
// "streaming_services"   - Shows subscription cost, trial period, content highlights
// "vpn_services"         - Shows pricing plans, server count, speed info
// "crypto_exchanges"     - Shows trading fees, supported coins, security features
// "web_hosting"          - Shows hosting plans, storage, bandwidth, uptime
// "restaurants"          - Shows price range, cuisine type, special offers
// "hotels_travel"        - Shows room rates, amenities, location highlights

// Template type display configurations
const TEMPLATE_DISPLAY_CONFIG = {
    physical_products: {
        primaryField: "price",
        secondaryField: "originalPrice", 
        tertiaryField: "discount",
        primaryLabel: "Price",
        secondaryLabel: "Original Price",
        tertiaryLabel: "Discount",
        icon: "💰",
        ctaDefault: "Buy Now",
        fieldsToShow: 3, // Show all 3 fields
        // New flexible field selection
        displayFields: ["primary", "secondary", "tertiary"], // Which fields to show
        secondaryFieldCrossthrough: true // Enable crossthrough styling for secondary field
    },
    casino_websites: {
        primaryField: "welcomeBonus",
        secondaryField: "welcomePackage",
        tertiaryField: "addedBonus", // Remove free spins - not needed
        primaryLabel: "Why Play",
        secondaryLabel: "Bonus Access",
        tertiaryLabel: "Highlights",
        icon: "🎰",
        ctaDefault: "Claim Bonus",
        fieldsToShow: 3, // Show only 2 fields
        // New flexible field selection
        displayFields: ["primary", "secondary", "tertiary"], // Only show Welcome Bonus and Welcome Package
        secondaryFieldCrossthrough: false // No crossthrough for casino welcome packages
    },
    sports_betting: {
        primaryField: "signupBonus",
        secondaryField: "oddsBoost", 
        tertiaryField: "freeBet",
        primaryLabel: "Sign-up Bonus",
        secondaryLabel: "Odds Boost",
        tertiaryLabel: "Free Bet",
        icon: "⚽",
        ctaDefault: "Get Bonus",
        fieldsToShow: 3, // Show all 3 fields
        // New flexible field selection
        displayFields: ["primary", "secondary", "tertiary"], // Which fields to show
        secondaryFieldCrossthrough: false // No crossthrough for sports betting
    },
    software_saas: {
        primaryField: "monthlyPrice",
        secondaryField: "yearlyPrice",
        tertiaryField: "trialPeriod",
        primaryLabel: "Monthly Price",
        secondaryLabel: "Yearly Price",
        tertiaryLabel: "Free Trial",
        icon: "💻",
        ctaDefault: "Start Free Trial",
        fieldsToShow: 3, // Show all 3 fields
        // New flexible field selection
        displayFields: ["primary", "secondary", "tertiary"], // Which fields to show
        secondaryFieldCrossthrough: false // No crossthrough for SaaS yearly pricing
    },
    streaming_services: {
        primaryField: "monthlyPrice",
        secondaryField: "trialPeriod",
        tertiaryField: "contentHighlight",
        primaryLabel: "Monthly Price",
        secondaryLabel: "Free Trial",
        tertiaryLabel: "4K Content",
        icon: "📺",
        ctaDefault: "Start Watching",
        fieldsToShow: 3, // Show all 3 fields
        // New flexible field selection
        displayFields: ["primary", "secondary", "tertiary"], // Which fields to show
        secondaryFieldCrossthrough: false // No crossthrough for streaming services
    },
    vpn_services: {
        primaryField: "monthlyPrice",
        secondaryField: "serverCount",
        tertiaryField: "speedInfo",
        primaryLabel: "Monthly Price",
        secondaryLabel: "Server Network",
        tertiaryLabel: "High Speed",
        icon: "🛡️",
        ctaDefault: "Get VPN",
        fieldsToShow: 3, // Show all 3 fields
        // New flexible field selection
        displayFields: ["primary", "secondary", "tertiary"], // Which fields to show
        secondaryFieldCrossthrough: false // No crossthrough for VPN services
    },
    crypto_exchanges: {
        primaryField: "tradingFee",
        secondaryField: "supportedCoins",
        tertiaryField: "securityRating",
        primaryLabel: "Trading Fee",
        secondaryLabel: "Coin Support",
        tertiaryLabel: "Security Rating",
        icon: "💰",
        ctaDefault: "Start Trading",
        fieldsToShow: 3, // Show all 3 fields
        // New flexible field selection
        displayFields: ["primary", "secondary", "tertiary"], // Which fields to show
        secondaryFieldCrossthrough: false // No crossthrough for crypto exchanges
    },
    web_hosting: {
        primaryField: "monthlyPrice",
        secondaryField: "storage",
        tertiaryField: "uptime",
        primaryLabel: "Monthly Price",
        secondaryLabel: "Storage",
        tertiaryLabel: "Uptime Guarantee",
        icon: "🌐",
        ctaDefault: "Get Hosting",
        fieldsToShow: 3, // Show all 3 fields
        // New flexible field selection
        displayFields: ["primary", "secondary", "tertiary"], // Which fields to show
        secondaryFieldCrossthrough: false // No crossthrough for web hosting
    },
    restaurants: {
        primaryField: "priceRange",
        secondaryField: "specialOffer",
        tertiaryField: null, // Only show 2 fields
        primaryLabel: "Price Range",
        secondaryLabel: "Special Offers",
        tertiaryLabel: null,
        icon: "🍕",
        ctaDefault: "Make Reservation",
        fieldsToShow: 2, // Only show 2 fields
        // New flexible field selection
        displayFields: ["primary", "secondary"], // Only show primary and secondary
        secondaryFieldCrossthrough: false // No crossthrough for restaurants
    },
    hotels_travel: {
        primaryField: "roomRate",
        secondaryField: "amenities",
        tertiaryField: null, // Only show 2 fields
        primaryLabel: "Room Rate",
        secondaryLabel: "Premium Amenities",
        tertiaryLabel: null,
        icon: "🏨",
        ctaDefault: "Book Now",
        fieldsToShow: 2, // Only show 2 fields
        // New flexible field selection
        displayFields: ["primary", "secondary"], // Only show primary and secondary
        secondaryFieldCrossthrough: false // No crossthrough for hotels
    }
};

// Make template configuration globally available
window.TEMPLATE_TYPE = TEMPLATE_TYPE;
window.TEMPLATE_DISPLAY_CONFIG = TEMPLATE_DISPLAY_CONFIG;
window.CURRENT_TEMPLATE_CONFIG = TEMPLATE_DISPLAY_CONFIG[TEMPLATE_TYPE];

/*
===========================================
Everything below automatically uses the settings above.
Don't edit below unless you need advanced customization.
===========================================
*/

// ===========================================
// MAIN SITE CONFIGURATION
// ===========================================

const SITE_CONFIG = {
    // Basic Site Information
    brand: {
        name: "Brand Name", // Will be overridden by brand-config.js
        tagline: "Brand Tagline", // Will be overridden by brand-config.js
        description: `We review and rank the best ${PRODUCT_TYPE.toLowerCase()} to help you make informed decisions.`,
        logo: "./assets/images/logo.png", // Will be overridden by brand-config.js
        favicon: FAVICON // Browser tab icon
    },
    
    // SEO Settings
    seo: {
        title: `Top 10 ${NICHE} - Best ${PRODUCT_TYPE} Reviews 2025`,
        description: `Discover the best ${PRODUCT_TYPE.toLowerCase()} with our comprehensive reviews. Compare features, prices, and user ratings.`,
        keywords: `${NICHE.toLowerCase()}, best ${PRODUCT_TYPE.toLowerCase()}, reviews, top 10, comparison, 2025`,
        ogImage: "./assets/images/og-image.jpg", // Social media preview image (1200x630px recommended)
        siteUrl: SITE_URL,
        author: "Brand Name", // Will be overridden by brand-config.js
        language: "en-US"
    },
    
    // Legal Pages
    legal: {
        privacyPolicy: "./privacy.html",
        termsOfService: "./terms.html",
        affiliateDisclosure: "./disclaimer.html",
        cookiePolicy: "./cookies.html",
        contactPage: "./contact.html"
    }
};

// ===========================================
// NICHE-SPECIFIC CONFIGURATION
// ===========================================

const NICHE_CONFIG = {
    // Main Topic Settings
    niche: NICHE,
    productType: PRODUCT_TYPE,
    audience: AUDIENCE,
    
    // Hero Section Content
    hero: {
        title: `The Top 10 ${NICHE} Reviewed & Ranked for 2025`,
        subtitle: `We've tested ${NUMBER_TESTED} ${PRODUCT_TYPE.toLowerCase()} and ranked the best ones. Save hours of research with our expert recommendations.`,
        ctaText: "See Our Top Pick",
        secondaryCtaText: "Compare All Options",
        
        // Trust Indicators
        trustIndicators: {
            reviewCount: REVIEW_COUNT,
            userCount: USER_COUNT,
            lastUpdate: LAST_UPDATE,
            numberTested: NUMBER_TESTED
        }
    },
    
    // Navigation Menu
    navigation: {
        menuItems: [
            { text: "Home", url: "#home" },
            { text: `🏆 Top 10 ${NICHE}`, url: "#top10", highlight: true },
            { text: "Reviews", url: "#reviews" },
            { text: "Compare", url: "#comparison" },
            { text: "Blog", url: "./blog.html" },
            { text: "Contact", url: "#contact" }
        ]
    },
    
    // Top Pick Section
    topPick: {
        badge: "EDITOR'S CHOICE",
        title: "Breville Barista Express",
        description: "The perfect balance of convenience and quality. This coffee maker delivers exceptional espresso with built-in grinder and milk frother.",
        rating: "4.8",
        reviewCount: "1,247",
        price: "£699",
        priceNote: "Starting at",
        features: [
            "Built-in conical burr grinder",
            "15-bar pressure pump",
            "Milk frother for lattes"
        ],
        ctaText: "Get Best Price",
        affiliateLink: "https://example.com/affiliate-link-1" // REPLACE WITH YOUR ACTUAL AFFILIATE LINK
    }
};

// ===========================================
// STYLING CONFIGURATION
// ===========================================

const STYLE_CONFIG = {
    // Color Scheme - Change these to match your brand
    colors: {
        primary: "#2563eb",        // Main brand color
        primaryHover: "#1d4ed8",   // Darker shade for hover
        secondary: "#64748b",      // Secondary color
        accent: "#10b981",         // Accent color (green)
        warning: "#f59e0b",        // Warning color (yellow)
        danger: "#ef4444",         // Danger color (red)
        success: "#10b981",        // Success color
        
        // Background colors
        bgPrimary: "#ffffff",      // Main background
        bgSecondary: "#f9fafb",    // Secondary background
        bgDark: "#1f2937",         // Dark background
        bgCard: "#ffffff",         // Card backgrounds
        
        // Text colors
        textPrimary: "#1f2937",    // Main text
        textSecondary: "#6b7280",  // Secondary text
        textLight: "#9ca3af",      // Light text
        textWhite: "#ffffff"       // White text
    },
    
    // Typography
    fonts: {
        primary: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        secondary: "'Georgia', serif",
        monospace: "'Fira Code', monospace"
    },
    
    // Spacing (in rem)
    spacing: {
        xs: "0.25rem",
        sm: "0.5rem",
        md: "1rem",
        lg: "1.5rem",
        xl: "2rem",
        "2xl": "3rem",
        "3xl": "4rem"
    },
    
    // Border radius
    borderRadius: {
        sm: "0.25rem",
        md: "0.375rem",
        lg: "0.5rem",
        xl: "0.75rem",
        "2xl": "1rem"
    },
    
    // Animations
    animations: {
        fast: "0.15s ease-in-out",
        normal: "0.3s ease-in-out",
        slow: "0.5s ease-in-out"
    }
};

// ===========================================
// TRACKING CONFIGURATION
// ===========================================

const TRACKING_CONFIG = {
    // Analytics Settings
    analytics: {
        googleAnalytics: {
            enabled: true,
            trackingId: "G-BQKJMHS9XZ", // REPLACE WITH YOUR GA4 MEASUREMENT ID
            anonymizeIp: true,
            cookieDomain: "auto"
        },
        
        metaPixel: {
            enabled: true,
            pixelId: "YOUR_PIXEL_ID", // REPLACE WITH YOUR META PIXEL ID
            advancedMatching: true
        },
        
        // Add other tracking services as needed
        customTracking: {
            enabled: false,
            // Replace this with your Google Apps Script Web App URL after deployment
            endpointUrl: "https://script.google.com/macros/s/AKfycbx36STHE0byk1X2HPKF-alEWYL4iakVnYygBT58A96Y5KpbKqOLfGb4VNnGaPKsemgEYA/exec"
        }
    },
    
    // Event Tracking Settings
    events: {
        affiliateClicks: true,
        emailCapture: true,
        scrollDepth: true,
        timeOnPage: true,
        exitIntent: true
    },
    
    // Conversion Tracking
    conversions: {
        primaryGoal: "affiliate_click",
        secondaryGoal: "email_capture",
        conversionValue: 0.50 // Average value per conversion
    }
};

// ===========================================
// FEATURE FLAGS
// ===========================================

const FEATURE_FLAGS = {
    // Enable/disable features
    mobileMenu: true,
    backToTop: true,
    floatingCTA: true,
    emailCapture: true,
    socialSharing: true,
    darkMode: false,
    animations: true,
    lazyLoading: true,
    
    // A/B Testing flags
    testVariants: {
        heroLayout: "default", // "default", "minimal", "video"
        ctaStyle: "default",   // "default", "animated", "minimal"
        productLayout: "grid"  // "grid", "list", "cards"
    }
};

// ===========================================
// THIRD-PARTY INTEGRATIONS
// ===========================================

const INTEGRATIONS = {
    // Email Marketing
    emailService: {
        provider: "mailchimp", // "mailchimp", "convertkit", "klaviyo", "custom"
        apiKey: "YOUR_API_KEY",
        listId: "YOUR_LIST_ID",
        apiUrl: "https://api.mailchimp.com/3.0/"
    },
    
    // Form Handling
    formService: {
        provider: "netlify", // "netlify", "formspree", "custom"
        actionUrl: "https://formspree.io/f/YOUR_FORM_ID"
    },
    
    // CDN and Performance
    cdn: {
        images: "https://your-cdn.com/images/",
        assets: "https://your-cdn.com/assets/"
    },
    
    // Reviews and Ratings
    reviews: {
        provider: "trustpilot", // "trustpilot", "google", "custom"
        accountId: "YOUR_ACCOUNT_ID"
    }
};

// ===========================================
// RESPONSIVE BREAKPOINTS
// ===========================================

const BREAKPOINTS = {
    mobile: "767px",
    tablet: "1023px",
    desktop: "1024px",
    large: "1200px",
    xlarge: "1400px"
};

// ===========================================
// EXPORT CONFIGURATION
// ===========================================

// Make configurations available globally
if (typeof window !== 'undefined') {
    window.SITE_CONFIG = SITE_CONFIG;
    window.NICHE_CONFIG = NICHE_CONFIG;
    window.PRODUCTS_CONFIG = PRODUCTS_CONFIG;
    window.STYLE_CONFIG = STYLE_CONFIG;
    window.TRACKING_CONFIG = TRACKING_CONFIG;
    window.FEATURE_FLAGS = FEATURE_FLAGS;
    window.INTEGRATIONS = INTEGRATIONS;
    window.BREAKPOINTS = BREAKPOINTS;
}

// Export for Node.js/modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        SITE_CONFIG,
        NICHE_CONFIG,
        PRODUCTS_CONFIG,
        STYLE_CONFIG,
        TRACKING_CONFIG,
        FEATURE_FLAGS,
        INTEGRATIONS,
        BREAKPOINTS
    };
}

// ===========================================
// CONFIGURATION HELPERS
// ===========================================

/**
 * Helper function to get configuration value
 */
function getConfig(path, defaultValue = null) {
    const keys = path.split('.');
    let value = window;
    
    for (const key of keys) {
        value = value?.[key];
        if (value === undefined) {
            return defaultValue;
        }
    }
    
    return value;
}

/**
 * Helper function to update configuration
 */
function updateConfig(path, newValue) {
    const keys = path.split('.');
    const lastKey = keys.pop();
    let target = window;
    
    for (const key of keys) {
        if (!target[key]) {
            target[key] = {};
        }
        target = target[key];
    }
    
    target[lastKey] = newValue;
}

/**
 * Replace placeholders in DOM elements
 */
function replacePlaceholdersInDOM() {
    // Replace all text content that contains placeholders
    const allElements = document.querySelectorAll('*');
    
    allElements.forEach(element => {
        // Skip script and style elements
        if (element.tagName === 'SCRIPT' || element.tagName === 'STYLE') {
            return;
        }
        
        // Replace text content
        if (element.childNodes.length > 0) {
            element.childNodes.forEach(node => {
                if (node.nodeType === Node.TEXT_NODE && node.textContent.includes('{{')) {
                    node.textContent = replacePlaceholders(node.textContent);
                }
            });
        }
        
        // Replace attributes that might contain placeholders
        const attributes = ['href', 'src', 'alt', 'title', 'placeholder'];
        attributes.forEach(attr => {
            if (element.hasAttribute(attr)) {
                const value = element.getAttribute(attr);
                if (value && value.includes('{{')) {
                    element.setAttribute(attr, replacePlaceholders(value));
                }
            }
        });
    });
    
    // Handle data attributes
    const elementsWithDataConfig = document.querySelectorAll('[data-config]');
    elementsWithDataConfig.forEach(element => {
        const configPath = element.getAttribute('data-config');
        const value = getConfig(configPath);
        if (value !== null) {
            element.textContent = value;
        }
    });
    
    console.log('✅ Placeholders replaced in DOM');
}

// Helper function to get editor's choice product
function getEditorsChoiceProduct() {
    const editorsConfig = window.EDITORS_CHOICE_CONFIG || EDITORS_CHOICE_CONFIG;
    
    // Check if manual override is enabled
    if (editorsConfig.useManualOverride) {
        return editorsConfig.manualOverride;
    }
    
    // Otherwise use selected product from config
    const selectedProductKey = editorsConfig.selectedProduct || 'product1';
    return PRODUCTS_CONFIG[selectedProductKey] || PRODUCTS_CONFIG.product1;
}

// Helper functions to get template-aware values for top pick section
function getTopPickPrimaryValue() {
    const product = getEditorsChoiceProduct();
    const templateConfig = TEMPLATE_DISPLAY_CONFIG[TEMPLATE_TYPE];
    
    if (templateConfig && templateConfig.primaryField) {
        return product[templateConfig.primaryField] || product.price || '£699';
    }
    return product.price || '£699';
}

function getTopPickSecondaryValue() {
    const product = getEditorsChoiceProduct();
    const templateConfig = TEMPLATE_DISPLAY_CONFIG[TEMPLATE_TYPE];
    
    if (templateConfig && templateConfig.secondaryField) {
        return product[templateConfig.secondaryField] || product.originalPrice || '£799';
    }
    return product.originalPrice || '£799';
}

function getTopPickTertiaryValue() {
    const product = getEditorsChoiceProduct();
    const templateConfig = TEMPLATE_DISPLAY_CONFIG[TEMPLATE_TYPE];
    
    if (templateConfig && templateConfig.tertiaryField) {
        return product[templateConfig.tertiaryField] || product.discount || '13% OFF';
    }
    return product.discount || '13% OFF';
}

// Helper functions for feature text/icons removed - now handled dynamically by TopPickManager


/**
 * Helper function to replace placeholders in text
 */
function replacePlaceholders(text, config = {}) {
    const allConfig = {
        // Basic settings
        SITE_NAME: SITE_CONFIG.brand.name,
        SITE_TAGLINE: SITE_CONFIG.brand.tagline,
        NICHE: NICHE,
        PRODUCT_TYPE: PRODUCT_TYPE,
        AUDIENCE: AUDIENCE,
        CONTACT_EMAIL: CONTACT_EMAIL,
        SITE_URL: SITE_URL,
        REVIEW_COUNT: REVIEW_COUNT,
        USER_COUNT: USER_COUNT,
        LAST_UPDATE: LAST_UPDATE,
        NUMBER_TESTED: NUMBER_TESTED,
        
        // Product 1 placeholders
        PRODUCT_1_NAME: PRODUCTS_CONFIG.product1?.name || 'Product 1',
        PRODUCT_1_DESCRIPTION: PRODUCTS_CONFIG.product1?.description || 'Product description',
        RATING_1: PRODUCTS_CONFIG.product1?.rating || '4.5',
        REVIEW_COUNT_1: PRODUCTS_CONFIG.product1?.reviewCount || '100',
        PRICE_1: PRODUCTS_CONFIG.product1?.price || '£99',
        ORIGINAL_PRICE_1: PRODUCTS_CONFIG.product1?.originalPrice || '£129',
        DISCOUNT_1: PRODUCTS_CONFIG.product1?.discount || '23% OFF',
        AFFILIATE_LINK_1: PRODUCTS_CONFIG.product1?.affiliateLink || '#',
        CTA_TEXT_1: PRODUCTS_CONFIG.product1?.ctaText || 'Get Best Price',
        
        // Product 2 placeholders
        PRODUCT_2_NAME: PRODUCTS_CONFIG.product2?.name || 'Product 2',
        PRODUCT_2_DESCRIPTION: PRODUCTS_CONFIG.product2?.description || 'Product description',
        RATING_2: PRODUCTS_CONFIG.product2?.rating || '4.3',
        REVIEW_COUNT_2: PRODUCTS_CONFIG.product2?.reviewCount || '85',
        PRICE_2: PRODUCTS_CONFIG.product2?.price || '£79',
        ORIGINAL_PRICE_2: PRODUCTS_CONFIG.product2?.originalPrice || '£99',
        DISCOUNT_2: PRODUCTS_CONFIG.product2?.discount || '20% OFF',
        AFFILIATE_LINK_2: PRODUCTS_CONFIG.product2?.affiliateLink || '#',
        CTA_TEXT_2: PRODUCTS_CONFIG.product2?.ctaText || 'Get Best Price',
        
        // Product 3 placeholders
        PRODUCT_3_NAME: PRODUCTS_CONFIG.product3?.name || 'Product 3',
        PRODUCT_3_DESCRIPTION: PRODUCTS_CONFIG.product3?.description || 'Product description',
        RATING_3: PRODUCTS_CONFIG.product3?.rating || '4.2',
        REVIEW_COUNT_3: PRODUCTS_CONFIG.product3?.reviewCount || '72',
        PRICE_3: PRODUCTS_CONFIG.product3?.price || '£149',
        ORIGINAL_PRICE_3: PRODUCTS_CONFIG.product3?.originalPrice || '£179',
        DISCOUNT_3: PRODUCTS_CONFIG.product3?.discount || '17% OFF',
        AFFILIATE_LINK_3: PRODUCTS_CONFIG.product3?.affiliateLink || '#',
        CTA_TEXT_3: PRODUCTS_CONFIG.product3?.ctaText || 'Get Best Price',
        
        // Product 4 placeholders
        PRODUCT_4_NAME: PRODUCTS_CONFIG.product4?.name || 'Product 4',
        PRODUCT_4_DESCRIPTION: PRODUCTS_CONFIG.product4?.description || 'Product description',
        RATING_4: PRODUCTS_CONFIG.product4?.rating || '4.4',
        REVIEW_COUNT_4: PRODUCTS_CONFIG.product4?.reviewCount || '567',
        PRICE_4: PRODUCTS_CONFIG.product4?.price || '£179',
        ORIGINAL_PRICE_4: PRODUCTS_CONFIG.product4?.originalPrice || '£219',
        DISCOUNT_4: PRODUCTS_CONFIG.product4?.discount || '18% OFF',
        AFFILIATE_LINK_4: PRODUCTS_CONFIG.product4?.affiliateLink || '#',
        CTA_TEXT_4: PRODUCTS_CONFIG.product4?.ctaText || 'Get Best Price',
        
        // Product 5 placeholders
        PRODUCT_5_NAME: PRODUCTS_CONFIG.product5?.name || 'Product 5',
        PRODUCT_5_DESCRIPTION: PRODUCTS_CONFIG.product5?.description || 'Product description',
        RATING_5: PRODUCTS_CONFIG.product5?.rating || '4.2',
        REVIEW_COUNT_5: PRODUCTS_CONFIG.product5?.reviewCount || '743',
        PRICE_5: PRODUCTS_CONFIG.product5?.price || '£89',
        ORIGINAL_PRICE_5: PRODUCTS_CONFIG.product5?.originalPrice || '£119',
        DISCOUNT_5: PRODUCTS_CONFIG.product5?.discount || '25% OFF',
        AFFILIATE_LINK_5: PRODUCTS_CONFIG.product5?.affiliateLink || '#',
        CTA_TEXT_5: PRODUCTS_CONFIG.product5?.ctaText || 'Get Best Price',
        
        // Product 6 placeholders
        PRODUCT_6_NAME: PRODUCTS_CONFIG.product6?.name || 'Product 6',
        PRODUCT_6_DESCRIPTION: PRODUCTS_CONFIG.product6?.description || 'Product description',
        RATING_6: PRODUCTS_CONFIG.product6?.rating || '4.3',
        REVIEW_COUNT_6: PRODUCTS_CONFIG.product6?.reviewCount || '789',
        PRICE_6: PRODUCTS_CONFIG.product6?.price || '£149',
        ORIGINAL_PRICE_6: PRODUCTS_CONFIG.product6?.originalPrice || '£179',
        DISCOUNT_6: PRODUCTS_CONFIG.product6?.discount || '17% OFF',
        AFFILIATE_LINK_6: PRODUCTS_CONFIG.product6?.affiliateLink || '#',
        CTA_TEXT_6: PRODUCTS_CONFIG.product6?.ctaText || 'Get Best Price',
        
        // Product 7 placeholders
        PRODUCT_7_NAME: PRODUCTS_CONFIG.product7?.name || 'Product 7',
        PRODUCT_7_DESCRIPTION: PRODUCTS_CONFIG.product7?.description || 'Product description',
        RATING_7: PRODUCTS_CONFIG.product7?.rating || '4.0',
        REVIEW_COUNT_7: PRODUCTS_CONFIG.product7?.reviewCount || '334',
        PRICE_7: PRODUCTS_CONFIG.product7?.price || '£39',
        ORIGINAL_PRICE_7: PRODUCTS_CONFIG.product7?.originalPrice || '£59',
        DISCOUNT_7: PRODUCTS_CONFIG.product7?.discount || '34% OFF',
        AFFILIATE_LINK_7: PRODUCTS_CONFIG.product7?.affiliateLink || '#',
        CTA_TEXT_7: PRODUCTS_CONFIG.product7?.ctaText || 'Get Best Price',
        
        // Product 8 placeholders
        PRODUCT_8_NAME: PRODUCTS_CONFIG.product8?.name || 'Product 8',
        PRODUCT_8_DESCRIPTION: PRODUCTS_CONFIG.product8?.description || 'Product description',
        RATING_8: PRODUCTS_CONFIG.product8?.rating || '4.1',
        REVIEW_COUNT_8: PRODUCTS_CONFIG.product8?.reviewCount || '256',
        PRICE_8: PRODUCTS_CONFIG.product8?.price || '£49',
        ORIGINAL_PRICE_8: PRODUCTS_CONFIG.product8?.originalPrice || '£69',
        DISCOUNT_8: PRODUCTS_CONFIG.product8?.discount || '29% OFF',
        AFFILIATE_LINK_8: PRODUCTS_CONFIG.product8?.affiliateLink || '#',
        CTA_TEXT_8: PRODUCTS_CONFIG.product8?.ctaText || 'Get Best Price',
        
        // Product 9 placeholders
        PRODUCT_9_NAME: PRODUCTS_CONFIG.product9?.name || 'Product 9',
        PRODUCT_9_DESCRIPTION: PRODUCTS_CONFIG.product9?.description || 'Product description',
        RATING_9: PRODUCTS_CONFIG.product9?.rating || '4.6',
        REVIEW_COUNT_9: PRODUCTS_CONFIG.product9?.reviewCount || '189',
        PRICE_9: PRODUCTS_CONFIG.product9?.price || '£159',
        ORIGINAL_PRICE_9: PRODUCTS_CONFIG.product9?.originalPrice || '£189',
        DISCOUNT_9: PRODUCTS_CONFIG.product9?.discount || '16% OFF',
        AFFILIATE_LINK_9: PRODUCTS_CONFIG.product9?.affiliateLink || '#',
        CTA_TEXT_9: PRODUCTS_CONFIG.product9?.ctaText || 'Get Best Price',
        
        // Product 10 placeholders
        PRODUCT_10_NAME: PRODUCTS_CONFIG.product10?.name || 'Product 10',
        PRODUCT_10_DESCRIPTION: PRODUCTS_CONFIG.product10?.description || 'Product description',
        RATING_10: PRODUCTS_CONFIG.product10?.rating || '4.2',
        REVIEW_COUNT_10: PRODUCTS_CONFIG.product10?.reviewCount || '167',
        PRICE_10: PRODUCTS_CONFIG.product10?.price || '£129',
        ORIGINAL_PRICE_10: PRODUCTS_CONFIG.product10?.originalPrice || '£159',
        DISCOUNT_10: PRODUCTS_CONFIG.product10?.discount || '19% OFF',
        AFFILIATE_LINK_10: PRODUCTS_CONFIG.product10?.affiliateLink || '#',
        CTA_TEXT_10: PRODUCTS_CONFIG.product10?.ctaText || 'Get Best Price',
        
        // Top pick placeholders (using EDITORS_CHOICE_CONFIG) - consistent with product naming
        TOP_PICK_NAME: getEditorsChoiceProduct()?.name || 'Top Pick Product',
        TOP_PICK_DESCRIPTION: getEditorsChoiceProduct()?.description || 'Top pick description',
        TOP_PICK_RATING: getEditorsChoiceProduct()?.rating || '4.8',
        TOP_PICK_REVIEW_COUNT: getEditorsChoiceProduct()?.reviewCount || '1247',
        TOP_PICK_AFFILIATE_LINK: getEditorsChoiceProduct()?.affiliateLink || '#',
        TOP_PICK_CTA_TEXT: getEditorsChoiceProduct()?.ctaText || 'Get Best Price',
        
        // Top pick features are now handled dynamically by TopPickManager
        
        // Hero section placeholders
        HERO_IMAGE_SRC: HERO_CONFIG?.image?.src || './assets/images/hero-image.jpg',
        HERO_IMAGE_ALT: HERO_CONFIG?.image?.alt || '{{PRODUCT_TYPE}} Reviews',
        HERO_VIDEO_TEXT: HERO_CONFIG?.video?.text || 'Watch Our Review Video',
        
        // Spread all config objects
        ...SITE_CONFIG.brand,
        ...SITE_CONFIG.seo,
        ...SITE_CONFIG.contact,
        ...NICHE_CONFIG,
        ...NICHE_CONFIG.hero,
        ...NICHE_CONFIG.hero.trustIndicators,
        ...NICHE_CONFIG.topPick,
        ...SECTION_TITLES.comparisonSection, // Add comparison section config
        ...config
    };
    
    return text.replace(/\{\{([^}]+)\}\}/g, (match, key) => {
        // Handle nested properties
        const keys = key.trim().split('.');
        let value = allConfig;
        
        for (const k of keys) {
            value = value?.[k];
            if (value === undefined) {
                break;
            }
        }
        
        return value !== undefined ? value : match;
    });
}

/**
 * Apply configuration to page elements
 */
function applyConfigToPage() {
    // Update page title for homepage
    const currentPage = window.location.pathname.toLowerCase();
    const title = document.querySelector('title');
    if (title && (currentPage.includes('index.html') || currentPage === '/' || currentPage === '')) {
        title.textContent = replacePlaceholders(INDEX_PAGE_TITLE);
    }
    
    // Update favicon
    let favicon = document.querySelector('link[rel="icon"]') || document.querySelector('link[rel="shortcut icon"]');
    if (!favicon) {
        favicon = document.createElement('link');
        favicon.rel = 'icon';
        document.head.appendChild(favicon);
    }
    favicon.href = FAVICON;
    
    // Update meta descriptions
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
        metaDescription.setAttribute('content', replacePlaceholders(metaDescription.getAttribute('content') || ''));
    }
    
    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
        metaKeywords.setAttribute('content', replacePlaceholders(metaKeywords.getAttribute('content') || ''));
    }
    
    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
        ogTitle.setAttribute('content', replacePlaceholders(ogTitle.getAttribute('content') || ''));
    }
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
        ogDescription.setAttribute('content', replacePlaceholders(ogDescription.getAttribute('content') || ''));
    }
    
    // Update Open Graph image
    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) {
        ogImage.setAttribute('content', SITE_CONFIG.seo.ogImage);
    }
    
    console.log('✅ Configuration applied to page elements');
}

/**
 * Initialize configuration and replace placeholders
 */
function initializeConfig() {
    console.log('🎯 Affiliate Template Configuration Loading...');
    console.log('📊 Niche:', NICHE_CONFIG.niche);
    console.log('🎨 Brand:', SITE_CONFIG.brand.name);
    console.log('📈 Tracking:', TRACKING_CONFIG.analytics.googleAnalytics.enabled ? 'Enabled' : 'Disabled');
    
    // Apply configuration to page
    applyConfigToPage();
    
    // Replace placeholders in HTML
    replacePlaceholdersInDOM();
    
    console.log('✅ Configuration initialization complete');
}

// Make helpers available globally
if (typeof window !== 'undefined') {
    window.getConfig = getConfig;
    window.updateConfig = updateConfig;
    window.replacePlaceholders = replacePlaceholders;
    window.applyConfigToPage = applyConfigToPage;
    window.initializeConfig = initializeConfig;
}

/**

 * Top pick icons are now managed directly through product.features in config
 * Edit the manual override product.features array to change icons
 */

// Initialize when DOM is loaded
if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', initializeConfig);
} 