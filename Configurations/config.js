/*
===========================================
AFFILIATE WEBSITE TEMPLATE - CONFIGURATION
===========================================
🎯 CHANGE YOUR MAIN SETTINGS HERE - ONLY EDIT THESE LINES:
*/

// ========== MAIN SETTINGS - EDIT THESE LINES ONLY ==========
const NICHE = "Slot Games";                          // ← Your niche (e.g., "Gaming Laptops", "Coffee Makers")
const PRODUCT_TYPE = "Slot Games";                   // ← Product type eg. "Gaming Laptops"
const AUDIENCE = "Slot game players";                       // ← Target audience eg. "Gamers"
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
const INDEX_PAGE_TITLE = "Top 10 Slot Games - Best Slot Reviews 2025"; // ← Homepage browser tab title 

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
        description: "Sugar Rush (Pragmatic Play) — 7×7 grid, Cluster Pays, high volatility, RTP up to ~96.5%. Wins occur via clusters of 5+ symbols, with cascading/tumble mechanics. Multiplier spots on the grid can accumulate up to ×128 for repeated wins on the same spot, especially during the Free Spins bonus where those multiplier spots stay in place. Maximum win: 5,000× stake.",
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
        welcomeBonus: "Cluster Pays with tumbles; multiplier spots up to ×128",
        welcomePackage: "Free Spins via scatters; retriggers",
        addedBonus: "RTP up to 96.5% (alts 95.5%, 94.5%)",
        
        
        affiliateLink: "https://rocketpot.io/pragmatic-play/sugar-rush/",
        ctaText: "Play Now",
        
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
            description: "Trigger Free Spins; multiplier spots up to ×128.",
            boxInfo: "RTP up to 96.5% (alts 95.5%, 94.5%). High volatility.",
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
            { text: "Tumbles + doubling multipliers", icon: "fas fa-sync-alt" },
            { text: "Spots persist in Free Spins", icon: "fas fa-magnet" },
            { text: "Multipliers up to ×128", icon: "fas fa-bolt" },
            { text: "RTP up to 96.5%", icon: "fas fa-percentage" }
        ],
        
        // Detailed review content
        fullReview: {
            tagline: "A sugar-coated cluster explosion with sticky multipliers",
            paragraphs: [
                "Sugar Rush by Pragmatic Play is a high-volatility video slot played on a 7x7 grid with a Cluster Pays system, where wins are formed by landing 5 or more matching symbols in a cluster rather than across traditional paylines. Released in June 2022, it brings players into a candy-filled world with pastel visuals, gummy bears, sweets, and a light, playful soundtrack. The slot is fully mobile-compatible on iOS, Android, Windows, and desktop devices, making it easy to enjoy anywhere. Bets range from $/£/€0.20 up to $/£/€100 per spin, with a default bet of $/£/€2, and the RTP can reach 96.5% (though many sites use the 95.5% or 94.5% versions). With a hit frequency of 34.48%, you can expect a win roughly every 2.9 spins, while the game offers a max payout of 5,000x your stake, though this occurs on average once in 2.34 million spins, with wins over 1,000x landing once every 37,900 spins.",
                "Gameplay centers around the Tumble feature, where winning clusters are removed and replaced by new symbols, potentially leading to chain reactions. Each win also leaves a multiplier spot behind, starting at 2x and doubling with each new win on the same position up to 128x. In the base game, multipliers reset at the end of each sequence, but in the Free Spins feature, triggered by landing 3 to 7 Rocket Gumball Machine scatters (for 10 to 30 free spins), multiplier spots remain on the grid throughout, allowing them to grow much faster. Free spins can also be retriggered with no limits, giving the chance for extended sessions with powerful multipliers. For players (depending on the country), a Buy Free Spins option is available for 100x your bet, guaranteeing 3–7 scatters.",
                "The symbols are a mix of colorful sweets, with orange, purple, and red gummy bears, stars, jelly beans, hearts, and the top-paying pink ball sweet worth up to 150x your stake for 15 or more. Wrapper symbols appear in exploded spots to add multipliers, while Rocket Gumball Machine scatters are the key to unlocking bonuses. The game also includes convenience features like Autoplay (up to 1,000 spins), Quick Spin, and Turbo Spin for faster play.",
                "Overall, Sugar Rush is a simple yet engaging slot with its appeal lying in the thrill of tumbles, sticky multipliers, and the potential of unlimited free spins. While it doesn’t include a wild symbol and its bonus features aren’t groundbreaking, the high RTP of up to 96.5%, multipliers reaching 128x, and the potential for big wins make it one of Pragmatic Play’s most popular titles. The success of the game has even led to follow-ups such as Sugar Rush Xmas (Nov 2023) and the sequel Sugar Rush 1000, which offers an increased 97.5% RTP and a massive 25,000x max win potential.",
                "Available at: Rocketpot.io, Stake, Bitcasino.io, Rainbet, BetFury."
            ]
        },
        
        // Perks for product cards and detailed reviews
        perks: [
            { text: "Simple, readable cluster gameplay", icon: "fas fa-eye" },
            { text: "Sticky multipliers in bonus", icon: "fas fa-magnet" },
            { text: "Unlimited retriggers possible", icon: "fas fa-redo" },
            { text: "Popular across major sites", icon: "fas fa-globe" },
            { text: "Good for casuals and risk-tolerant players", icon: "fas fa-users" },
        ],
        
        // Technical specifications (slot specs)
        specifications: [
            { name: "Layout", value: "7×7 Cluster Pays", icon: "fas fa-th" },
            { name: "RTP", value: "Up to 96.5% (alts 95.5%, 94.5%)", icon: "fas fa-percentage" },
            { name: "Volatility", value: "High (5/5)", icon: "fas fa-exclamation-triangle" },
            { name: "Max Win", value: "5,000×", icon: "fas fa-trophy" },
            { name: "Bet Range", value: "$0.20–$100 (varies)", icon: "fas fa-coins" }
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
        welcomeBonus: "Base Respin feature + Money Cart (20+ modifiers)",
        welcomePackage: "Buy Bonus: 100× (Original) or 500× (Persistent)",
        addedBonus: "6×6 Scatter Pays; 150,000× cap",
        
        affiliateLink: "https://rocketpot.io/relax-gaming/money-train-4/",
        ctaText: "Play Now", // This will be overridden by template config if needed
        
        // CTA section configuration for detailed reviews
        cta: {
            title: "Board the last train",
            description: "Hit the Money Cart and chase 150,000×.",
            boxInfo: "RTP 96.1% (96.5% on buy); ~20.14% hit rate; high volatility.",
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
            { text: "Respin feature (sticky most-common symbol)", icon: "fas fa-undo" },
            { text: "Money Cart: 20+ modifiers (incl. Persistent)", icon: "fas fa-train" },
            { text: "Reel unlocks & expansions", icon: "fas fa-expand-arrows-alt" },
            { text: "Bonus Buys: 100× / 500×", icon: "fas fa-shopping-bag" },
            { text: "6×6 Scatter Pays engine", icon: "fas fa-th" }
        ],
        
        // Detailed review content
        fullReview: {
            tagline: "One last ride, absurd potential.",
            paragraphs: [
                "Money Train 4 by Relax Gaming is the fourth and final chapter in the legendary series, delivering a futuristic heist adventure with a scatter pays engine on a 6x6 grid. Wins are formed by landing 8 or more matching symbols anywhere on the reels, with bet limits ranging from $/£/€0.10 to $/£/€6 per spin. The slot comes with an RTP of 96.1% (though some casinos use 94.1% or even 90% versions), a hit rate of 20.14%, and high volatility rated 5/5. Autoplay (up to 1,000 spins), turbo mode, and spacebar play are available in certain regions. The standout feature is the enormous 150,000x max win, making it one of the most rewarding online slots ever, and a big step up from its predecessors in the franchise.",
                "The theme blends steampunk and sci-fi, with reels set inside a weaponized futuristic train in a desert wasteland, accompanied by a cinematic orchestral soundtrack. Symbols include diamonds, clubs, spades, and hearts, alongside four high-paying bandits: Payer, Sniper, Collector, and Necromancer. These deliver payouts up to 1,000x your bet, while bonus scatters trigger the slot’s main feature. All 36 reel positions spin individually, giving gameplay a dynamic and fluid feel, and it runs smoothly across desktop, iOS, and Android devices, though the stunning visuals are best enjoyed on larger screens.",
                "Money Train 4 comes with two major features: the Re-Spin feature and the Money Cart Bonus. The Re-Spin can trigger randomly after any base spin, holding the most common symbol and awarding respins until no new matches or multipliers land. Multiplier symbols can also appear, combining to boost final payouts. The Money Cart Bonus, activated by 3 or more scatters, transports you to a 6x4 bonus grid with 3 starting spins. Each new symbol resets the spin counter, and modifiers are where the action heats up. There are over 20 different modifiers, ranging from Collectors, Payers, Snipers, Necromancers, and Arms Dealers, many of which also come in Persistent forms that activate every spin rather than once. Filling rows unlocks extra reels, and the bonus continues until spins run out. While the round can look complex, its mechanics are straightforward, with persistent modifiers offering the biggest payout potential. On average, the bonus pays around 96.5x your bet.",
                "Players (depending on the country) can also access a Buy Bonus option: the standard Money Cart feature costs 100x your bet, while the Persistent Bonus costs 500x. Opting for the buy feature increases the RTP slightly to 96.5%. With such immense win potential, the slot is highly volatile, so bankroll management is essential.",
                "Overall, Money Train 4 is a spectacular conclusion to the series, raising the stakes with its 150,000x top prize, stunning visuals, atmospheric soundtrack, and deep modifier-driven bonus round. While highly volatile and risky, its potential rewards are unmatched, cementing it as arguably the best slot release of 2023. The franchise began in 2019 with the original Money Train (20,000x max win), followed by Money Train 2 (50,000x), Money Train 3 (100,000x), and now Money Train 4, which blows past them all. For those who prefer shorter bonus-focused versions, Relax Gaming has also released the Money Cart series to mirror each main game.",
                "Available at: Rocketpot.io, Stake, Rainbet, BetFury, Shuffle."
            ]
        },
        
        // Perks for product cards and detailed reviews - Simple format: text + icon
        perks: [
            { text: "150,000× top potential", icon: "fas fa-trophy" },
            { text: "Respin sequences add sticky state", icon: "fas fa-sync-alt" },
            { text: "Low entry stakes from €/$0.10", icon: "fas fa-coins" },
            { text: "Scatter-pays system (no paylines)", icon: "fas fa-th" },
            { text: "Clear paytable and symbol explanations", icon: "fas fa-book" },
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
        welcomePackage: "Ante Bet/Bonus Buy on many sites",
        addedBonus: "High volatility; multipliers accumulate; retriggers",
        
        affiliateLink: "https://rocketpot.io/pragmatic-play/gates-of-olympus/",
        ctaText: "Play Now",
        
        // CTA section configuration for detailed reviews
        cta: {
            title: "Catch the orb",
            description: "Tumbles + orbs up to 500×. Retrigger for more.",
            boxInfo: "RTP 96.5% default (alts 95.51%/94.5%). 5,000× cap.",
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
            { text: "Free Spins Bonus", icon: "fas fa-gift" },
            { text: "Ante/Bonus Buy (varies)", icon: "fas fa-shopping-bag" },
            { text: "Mobile-first UI", icon: "fas fa-mobile-alt" }
        ],
        
        // Detailed review content
        fullReview: {
            tagline: "Tumbles + multipliers up to 500×.",
            paragraphs: [
                "Gates of Olympus by Pragmatic Play is a high-volatility video slot themed around the mighty Zeus and set against the backdrop of an epic Mount Olympus temple. Released in 2021, it runs on a 6x5 grid with an All Ways Pays mechanic, meaning you need 8 or more matching symbols anywhere on the reels to score a win, regardless of paylines. Betting ranges from $/€0.20 to $/€125 per spin (depending on the country), with autoplay, quick spin, and turbo spin options also available in certain jurisdictions. The RTP sits at 96.5% by default—slightly above average—but can also appear in reduced versions of 95.51% or 94.5%, so it’s worth checking which version is being offered. With maximum wins capped at 5,000x your bet, and a probability of hitting that top prize at 1 in 697,350 spins, the game delivers plenty of excitement but also packs volatility at the highest level, rated 5/5.",
                "The game’s presentation is one of its highlights. Against purple skies and gleaming marble columns, reels are edged in gold and filled with colorful gemstones in blue, green, yellow, purple, and red, alongside premium symbols like a goblet, a jeweled ring, a sand timer, and the top-paying golden crown, worth up to 50x your stake. Zeus himself serves as the scatter symbol, awarding payouts up to 100x your bet while also triggering the Free Spins feature when 4 or more land. An animated Zeus stands beside the reels, hurling multiplier orbs and adding dramatic flair to the gameplay. The orchestral soundtrack, enhanced by clanging bells and epic choral effects, intensifies during bonuses to match the slot’s mythological grandeur.",
                "Gameplay is built around three main mechanics: Tumbling Reels, Random Orb Multipliers, and Free Spins with Progressive Multipliers. After every win, tumbling reels remove the winning symbols and drop new ones, continuing until no new win appears. At any time, Zeus can unleash glowing multiplier orbs worth between 2x and 500x. Multiple orbs in a single tumble sequence combine their values, creating explosive payout potential. The Free Spins round is triggered by 4–6 Zeus scatters, awarding payouts of 3x, 5x, or 100x your bet plus 15 free spins. Here, multipliers become even more powerful: instead of resetting, they accumulate throughout the feature, leading to huge win possibilities if multiple orbs hit in succession. Retriggers are possible by landing 3 additional scatters, adding 5 more free spins. Statistically, free spins trigger once every 448 spins on average.",
                "Depending on the country, players may also access two paid features. The Bonus Buy option costs 100x your stake, granting instant access to the Free Spins feature. There’s also a Double Chance Ante Bet, increasing your wager by 25% while doubling your odds of triggering free spins naturally. Both enhance the gameplay for those seeking more frequent access to the slot’s main attraction.",
                "Overall, Gates of Olympus is one of Pragmatic Play’s flagship releases and remains highly popular due to its slick presentation, exciting features, and enormous multiplier potential. While its 5,000x max win is lower than comparable slots such as Sweet Bonanza (21,175x), the appeal lies in the way multipliers stack and snowball during free spins, creating thrilling moments of anticipation. Its high volatility won’t suit every player, but for those chasing big wins, Gates of Olympus stands out as one of the most iconic and rewarding Greek-mythology-themed slots on the market today.",
                "Available at: Rocketpot.io, Roobet, Stake, Bitcasino.io, Rainbet."
            ]
        },
        
        // Perks for product cards and detailed reviews
        perks: [
            { text: "Huge multiplier ceiling (up to 500×)", icon: "fas fa-bolt" },
            { text: "Simple to learn scatter-pays", icon: "fas fa-th" },
            { text: "Retriggers for extended runs", icon: "fas fa-redo" },
            { text: "RTP variants disclosed", icon: "fas fa-file-alt" },
            { text: "Pairs with Drops & Wins", icon: "fas fa-trophy" }
        ],
        
        // Technical specifications (slot specs)
        specifications: [
            { name: "Layout", value: "6×5 Scatter-Pays; Tumbles", icon: "fas fa-th" },
            { name: "RTP", value: "96.5% (alts 95.51%, 94.5%)", icon: "fas fa-percentage" },
            { name: "Volatility", value: "High", icon: "fas fa-exclamation-triangle" },
            { name: "Max Win", value: "5,000×", icon: "fas fa-trophy" },
            { name: "Multipliers", value: "Orbs 2×–500×", icon: "fas fa-bolt" }
        ]
    },
    
    // Product 3 Configuration - Sweet Bonanza — Candy-Land Classic with 21,100× Cap
    product3: {
        name: "Sweet Bonanza",
        description: "Sweet Bonanza - 6×5 scatter-pays with tumbles and rainbow bombs up to 100×. 96.49% RTP (95.45% alt); medium-high volatility with a 21,175× cap and Double Chance option.",
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
        welcomeBonus: "Tumbles + Rainbow Bomb multipliers up to 100×",
        welcomePackage: "Free Spins with stacking multipliers; retriggers",
        addedBonus: "Double Chance (Ante Bet) and Bonus Buy (varies)",
        
        affiliateLink: "https://rocketpot.io/pragmatic-play/sweet-bonanza/",
        ctaText: "Play Now",
        
        // CTA section configuration for detailed reviews
        cta: {
            title: "Flip on Double Chance",
            description: "Chase candy bombs up to 100×.",
            boxInfo: "RTP 96.49% (95.45% alt). 21,175× max win.",
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
            { text: "96.49% RTP (variant dependent)", icon: "fas fa-percentage" }
        ],
        
        // Detailed review content
        fullReview: {
            tagline: "Sugar rushes, rainbow bombs.",
            paragraphs: [
                "Sweet Bonanza by Pragmatic Play is a vibrant, medium-to-high volatility slot drenched in sugary themes and fruity symbols. Launched in 2019, this candy-coated adventure is set on a 6x5 grid and uses the Scatter Pays system, meaning you’ll need 8 or more matching symbols anywhere on the reels to form a win. With bets ranging from $/€0.20 to $/€100 per spin, Sweet Bonanza caters to both casual spinners and higher-stake players, depending on the country. The default RTP sits at 96.49%, above the industry average, but reduced versions at 95.45% also exist, so it’s worth checking before you play. With maximum wins of 21,175x your bet—more than four times that of Gates of Olympus—the game offers significant payout potential without hitting the extremes of volatility.",
                "The slot’s visuals are one of its most inviting features. Against a pastel dreamscape of candy floss skies, lollipop trees, and sugary mountains, reels are filled with juicy fruits like bananas, grapes, watermelons, plums, and apples, alongside brightly colored sweets. Premiums include blue, green, purple, and red candies, with the top-paying red heart sweet delivering up to 50x your stake for 12 or more on the grid. The red-and-white lollipop serves as the scatter symbol, triggering free spins when 4 or more appear, while a special rainbow bomb acts as the multiplier during bonuses. The soundtrack is cheerful and upbeat, matching the lighthearted aesthetic, though it’s subtle enough not to overwhelm extended sessions.",
                "Gameplay revolves around the Tumbling Reels mechanic and the all-important Free Spins feature with multipliers. Tumbles trigger whenever a win occurs, removing winning symbols and cascading new ones into place, continuing until no new win forms. The Free Spins round is activated by landing 4–6 lollipop scatters, awarding payouts of 3x, 5x, or 100x your bet along with 10 free spins. Here, the Rainbow Bomb Multiplier comes into play, ranging from 2x to 100x. If multiple bombs land in the same sequence, their values stack, which can catapult small wins into major payouts. Retriggers are also possible by landing 3 additional scatters, awarding 5 extra free spins each time. Statistically, free spins trigger on average every 400–500 spins, keeping the feature relatively accessible.",
                "For players seeking faster access to bonuses, Sweet Bonanza offers two optional enhancements in certain jurisdictions. The Bonus Buy feature costs 100x your stake and instantly launches the free spins round. Alternatively, the Ante Bet option increases your wager by 25% while doubling the likelihood of triggering free spins naturally. These features add flexibility for players who prefer more frequent bonus play.",
                "Overall, Sweet Bonanza has become one of Pragmatic Play’s flagship titles thanks to its simple yet rewarding mechanics, colorful presentation, and explosive win potential. While its theme may be overly saccharine for some, the balance of medium-to-high volatility with a top prize of 21,175x makes it both approachable and exciting. Compared to its mythological cousin Gates of Olympus, Sweet Bonanza offers a smoother ride with larger maximum payouts, though its reliance on multipliers for big wins can make outcomes swingy. For players with a sweet tooth for tumbling reels and juicy bonuses, Sweet Bonanza remains a timeless classic in the candy-themed slot genre.",
                "Available at: Rocketpot.io, Stake, Rainbet, Bitcasino.io, BetFury."
            ]
        },
        
        // Perks for product cards and detailed reviews
        perks: [
            { text: "Rainbow Bomb multipliers up to 100×", icon: "fas fa-bomb" },
            { text: "Retriggers extend free spins", icon: "fas fa-redo" },
            { text: "Simple scatter-pays + tumbles", icon: "fas fa-sync-alt" },
            { text: "96.49% RTP default (variant dependent)", icon: "fas fa-percentage" },
            { text: "Medium–High volatility sweet spot", icon: "fas fa-exclamation-triangle" },
            { text: "Pairs with Drops & Wins", icon: "fas fa-medal" }
        ],
        
        // Technical specifications (slot specs)
        specifications: [
            { name: "Layout", value: "6×5 Scatter-Pays; Tumbles", icon: "fas fa-th" },
            { name: "RTP", value: "96.49% (95.45% alt)", icon: "fas fa-percentage" },
            { name: "Volatility", value: "Medium–High", icon: "fas fa-exclamation-triangle" },
            { name: "Max Win", value: "21,175×", icon: "fas fa-trophy" },
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
        addedBonus: "Feature Buy 66.66× (varies)",
        
        affiliateLink: "https://rocketpot.io/netent/dead-or-alive-2/",
        ctaText: "Play Now",
        
        // CTA section configuration for detailed reviews
        cta: {
            title: "Pick your free-spins mode",
            description: "Hunt the wildline—Old Saloon, High Noon, or Train Heist.",
            boxInfo: "RTP 96.8% default (variants). High volatility. ~111,111× cap.",
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
            { text: "Three distinct free spins modes: Train Heist / Old Saloon / High Noon", icon: "fas fa-gift" },
            { text: "Sticky Wilds / multipliers", icon: "fas fa-magnet" },
            { text: "Feature Buy 66.66× (varies by region)", icon: "fas fa-shopping-bag" },
            { text: "Classic 9-line grid; high volatility", icon: "fas fa-exclamation-triangle" },
            { text: "Low min bets; mobile friendly", icon: "fas fa-mobile-alt" }
        ],
        
        // Detailed review content
        fullReview: {
            tagline: "Sticky wilds. Monster caps.",
            paragraphs: [
                "Dead or Alive 2 by NetEnt is one of the most iconic Wild West-themed slots on the market, a 2019 release that took everything players loved about the original and amplified it with slicker visuals, bigger multipliers, and colossal win potential. Played on a 5x3 grid with 9 fixed paylines, the slot is a high-volatility adventure offering payouts up to 111,111x your bet—making it one of the highest-paying slots ever created. Betting starts from just $/€0.09 per spin and goes up to $/€9, making it relatively low-stakes friendly compared to many modern high-volatility titles. The RTP sits at a very strong 96.8%, above industry averages, with 68.6% allocated to the base game and a hefty 28.2% to free spins, where the real excitement lies.",
                "The presentation is suitably gritty and cinematic. The reels are framed by wooden gallows on a deserted frontier street, while the audio track mixes twanging guitars, clanging bells, and pistol cocks to heighten the tension. Symbols are a mix of low-paying metallic royals (10–A) and thematic icons such as whiskey bottles, cowboy boots, Stetsons, revolvers, and the top-paying sheriff’s badge worth up to 111.11x for five of a kind. Each outlaw character—Apache the Kid, Della Rose, Jesse James, Belle Star, and Billy the Kid—serves as a wild, one per reel, substituting for all standard symbols and delivering payouts up to 166.66x for five. The scatter, represented by crossed pistols over a cattle skull, is the key to unlocking free spins and pays up to 2,500x your bet for five in view.",
                "Gameplay shines thanks to its three distinct Free Spins features, each offering different volatility levels and win dynamics. Triggered by landing 3+ scatters, players first receive a scatter payout of up to 2,500x and then choose between Train Heist, Old Saloon, or High Noon Saloon free spins. Train Heist is the lowest volatility option, starting with 12 spins where every wild increases a global multiplier by 1x and adds another spin, potentially climbing up to 16x before awarding 5 more free spins. Old Saloon offers medium volatility, also with 12 spins, but here all wins are doubled, and wilds stick in place for the duration. Land sticky wilds on all five reels and you’ll get 5 extra spins. The most volatile—and most famous—option is High Noon Saloon. Here, sticky wilds can transform into 2x or 3x multiplier wilds when stacked, and if multipliers land across multiple reels they combine, creating monstrous potential. This is where the legendary 111,111x max win can be hit, though the odds are 1 in 142 million spins, underlining its high volatility.",
                "In certain jurisdictions, players can shortcut to the action with the Feature Buy option (costing 66.66x your stake), which allows direct access to free spins without altering the RTP. On mobile, the Dead or Alive 2 Touch version runs seamlessly, maintaining sharp visuals and smooth performance even on smaller screens, ensuring that the Wild West experience is as immersive on the go as it is on desktop.",
                "Overall, Dead or Alive 2 has cemented its place as a cult classic among slot fans. It combines a gritty Western theme with immense payout potential, a strong RTP, and a choice of bonus rounds that cater to different volatility preferences. While the High Noon Saloon feature is the star of the show for high-risk thrill-seekers, the other options ensure there’s variety for players who prefer a steadier pace. Its high volatility means long dry spells are common, but the possibility of life-changing wins keeps players coming back. For those chasing some of the biggest multipliers in slot history, Dead or Alive 2 stands as one of NetEnt’s finest creations and a must-try for fans of outlaw-themed slots.",
                "Available at: Rocketpot.io, Roobet, Stake, Rainbet, BetFury."
            ]
        },
        
        // Perks for product cards and detailed reviews
        perks: [
            { text: "Three volatility options via mode choice", icon: "fas fa-sliders-h" },
            { text: "High RTP for the genre (~96.8%)", icon: "fas fa-percentage" },
            { text: "Low min bets for long sessions", icon: "fas fa-coins" },
            { text: "Proven 'wildline' highlight potential", icon: "fas fa-bullseye" },
            { text: "Feature Buy (where permitted)", icon: "fas fa-shopping-bag" }, 
            { text: "Transparent mechanics & paytable", icon: "fas fa-book" },
        ],
        
        // Technical specifications (slot specs)
        specifications: [
            { name: "Reels/Lines", value: "5×3, 9 paylines", icon: "fas fa-th" },
            { name: "RTP", value: "96.8% (default; variants)", icon: "fas fa-percentage" },
            { name: "Volatility", value: "High", icon: "fas fa-exclamation-triangle" },
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
        welcomeBonus: "Mystery Stacks with Nudge & Reveal",
        welcomePackage: "Rising multipliers during Free Spins",
        addedBonus: "Documented Mega Wins",
        
        affiliateLink: "https://rocketpot.io/push-gaming/razor-shark/",
        ctaText: "Play Now",
        
        // CTA section configuration for detailed reviews
        cta: {
            title: "Dive into Mystery Stacks",
            description: "Nudge & Reveal toward huge multipliers.",
            boxInfo: "RTP 96.70% (variants). High volatility.",
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
            { text: "Razor Reveal coins (prizes/scatters)", icon: "fas fa-coins" },
            { text: "Free Spins with rising multiplier", icon: "fas fa-chart-line" },
            { text: "96.7% RTP (variant dependent)", icon: "fas fa-percentage" },
            { text: "Very high volatility", icon: "fas fa-exclamation-triangle" }
        ],
        
        // Detailed review content
        fullReview: {
            tagline: "Mystery stacks; unlimited observed potential.",
            paragraphs: [
                "Razor Shark by Push Gaming is a high-volatility underwater adventure that has earned cult status for its suspenseful gameplay and enormous multiplier potential. Released in 2019, it runs on a 5x4 grid with 20 paylines and an RTP of 96.7%, slightly above average for online slots. Bets range from $/€0.10 up to $/€100 per spin, offering accessibility for casual players while still appealing to high-rollers. While there’s no listed maximum win cap, the combination of progressive multipliers and retriggering free spins theoretically allows for immense payouts, with single-spin potential reaching well over 50,000x in practice. This makes Razor Shark one of Push Gaming’s flagship releases and popular enough to spawn a sequel, Razor Returns.",
                "The slot’s presentation is striking and immersive. Set in the deep blue ocean, reels are framed against a backdrop of coral and shoals of fish that dart around with each spin. Symbols mix diving gear such as flippers, snorkels, and oxygen tanks with vividly designed sharks in various colors. The great white shark is both the wild and the highest-paying symbol, awarding up to 50x your stake for five of a kind. The sea mine scatter triggers free spins, while stacks of seaweed trigger the Mystery Stack mechanic. Sound design adds to the tension: light Caribbean-style music contrasts with ominous, Jaws-inspired tones that swell during high-stakes moments, perfectly capturing the game’s mix of fun and menace.",
                "Gameplay is built around three key features: Mystery Stacks, the Razor Reveal, and Free Spins with unlimited multipliers. Mystery Stacks—seaweed symbols covering entire reels—land frequently and nudge down one position per spin until they leave the grid. When they reveal golden sharks, the Razor Reveal feature activates, where each position reveals either instant coin prizes (worth up to 2,500x your stake) or scatter symbols. This mechanic creates thrilling moments of anticipation, as entire reels can suddenly transform into massive payouts or free spin triggers.",
                "The Free Spins feature begins with 3 or more scatter mines, transporting players to a deeper underwater setting. Here, reels 2 and 4 start with guaranteed Mystery Stacks that continue to nudge down on each spin. Crucially, a progressive multiplier comes into play, starting at 1x and increasing by +1 with every nudge of the Mystery Stacks. Free spins only end when no stacks remain on the reels, meaning the round can, in theory, last indefinitely. This creates a high-risk, high-reward environment where multipliers can escalate into the hundreds, turning small wins into gigantic ones. The ability to retrigger stacks mid-feature keeps tension high throughout.",
                "On mobile, Razor Shark performs flawlessly thanks to Push Gaming’s HTML5 design. The visuals and audio scale seamlessly, and the mechanics are easy to follow even on smaller screens, making it just as engaging on the go.",
                "Overall, Razor Shark is an adrenaline-charged slot that thrives on its mix of Mystery Stacks, escalating multipliers, and retriggering free spins. Its unpredictable volatility can mean long stretches without a feature, but the potential for sky-high payouts ensures that anticipation never fades. While some players may find the wait for free spins frustrating, those who enjoy high-risk, big-reward gameplay will find it among the most exciting underwater-themed slots on the market. With its combination of stylish presentation, innovative mechanics, and limitless free spins potential, Razor Shark has rightfully become one of Push Gaming’s most enduring classics.",
                "Available at: Rocketpot.io, Stake, Rainbet, Bitcasino.io, BetFury."
            ]
        },
        
        // Perks for product cards and detailed reviews
        perks: [
            { text: "Mystery Stacks create sustained suspense", icon: "fas fa-layer-group" },
            { text: "Razor Reveal coins or bonus scatters", icon: "fas fa-coins" },
            { text: "Free Spins with escalating multiplier", icon: "fas fa-chart-line" },
            { text: "Retriggers can extend bonus runs", icon: "fas fa-redo" },
            { text: "96.70% RTP (variant dependent)", icon: "fas fa-percentage" }
        ],
        
        // Technical specifications (slot specs)
        specifications: [
            { name: "Reels/Lines", value: "5×4, 20 paylines", icon: "fas fa-th" },
            { name: "RTP", value: "96.70% (variants differ)", icon: "fas fa-percentage" },
            { name: "Volatility", value: "High", icon: "fas fa-exclamation-triangle" },
            { name: "Max Observed", value: "Uncapped; long free spins potential", icon: "fas fa-trophy" },
            { name: "Stakes", value: "£0.10–£100 typical", icon: "fas fa-coins" }
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
        welcomeBonus: "Cascades (Reactions) + carts add symbols",
        welcomePackage: "Free Spins with unlimited win multiplier",
        addedBonus: "Minecart scatters retrigger",
        
        affiliateLink: "https://rocketpot.io/big-time-gaming/bonanza/",
        ctaText: "Play Now",
        
        // CTA section configuration for detailed reviews
        cta: {
            title: "Spell G.O.L.D for spins",
            description: "Chain reactions and build an unlimited multiplier.",
            boxInfo: "RTP 96%; ~37.47% hit rate; 26,000× max win.",
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
            { text: "Minecart scatter retriggers", icon: "fas fa-redo" },
            { text: "~96% RTP (BTG)", icon: "fas fa-percentage" }
        ],
        
        // Detailed review content
        fullReview: {
            tagline: "The original ‘reaction wins’ gold rush.",
            paragraphs: [
                "Bonanza Megaways by Big Time Gaming is a landmark slot release that transformed the online casino landscape and popularized the now-ubiquitous Megaways mechanic. First launched in 2016, this mining-themed slot plays on a 6-reel setup with between 2 and 7 symbols per reel, creating up to 117,649 ways to win on any given spin. With medium-to-high volatility, a default RTP of 96%, and maximum wins of 26,000x your bet, Bonanza combines accessible gameplay with explosive potential. Stakes start at $/€0.20 and go up to $/€20, making it approachable for a wide range of players. The game remains one of the most-played Megaways titles ever released, largely thanks to its dynamic mechanics and free spins with unlimited multipliers.",
                "The presentation leans heavily on its mining theme. The reels are set against a rustic mountainside with a cascading waterfall and a miner’s hut to the side, giving the impression of a remote gold-mining settlement. Symbols appear carved into stone blocks and include low-value royals (9–A), mid-value gemstones in green, blue, and red, and the top-paying diamond worth up to 50x your stake for six of a kind. Above the main grid, a minecart adds extra symbols to reels 2–5, where wilds (sticks of dynamite) can appear to substitute for all standard symbols. The scatter symbols are golden letters spelling “GOLD,” which not only fit the theme but are key to unlocking the bonus round. The audio track is quirky and hillbilly-inspired, a toe-tapping banjo tune that keeps energy levels high during gameplay.",
                "Gameplay revolves around Reaction Wins and the all-important Free Spins feature with expanding multipliers. Reaction Wins act like tumbling reels—every winning combination disappears, and new symbols cascade down to fill the gaps, potentially creating chains of successive wins. This becomes especially powerful during the Free Spins feature. To trigger free spins, you’ll need to land four scatters spelling “GOLD,” awarding 12 free spins, with each extra scatter adding 5 more (up to 22). During free spins, every Reaction Win increases a global multiplier by +1, with no upper limit. This multiplier does not reset between spins, meaning long chains can quickly escalate into enormous payouts. Additional scatters in the minecarts above reels 2–5 can retrigger the feature with up to 10 more free spins, keeping the round alive.",
                "The slot runs smoothly across platforms, with the Bonanza Megaways mobile version delivering crisp visuals and seamless gameplay on both iOS and Android devices. While the fast-paced action and fluctuating reel sizes are most striking on larger screens, the game remains intuitive and immersive on smaller displays.",
                "Overall, Bonanza Megaways is widely regarded as one of the most important slots of the last decade. Its innovative design and thrilling gameplay inspired countless imitators and sequels, cementing Big Time Gaming’s place as a pioneer in slot development. The blend of Reaction Wins, free spins with unlimited multipliers, and up to 117,649 ways to win makes for an exhilarating experience that balances frequent small wins with the potential for massive payouts. With a top prize of 26,000x your bet, this mining adventure remains one of the best Megaways slots ever made.",
                "Available at: Rocketpot.io, Roobet, Stake, Rainbet, BetFury."
            ]
        },
        
        // Perks for product cards and detailed reviews
        perks: [
            { text: "Reaction wins (cascades) keep chains alive", icon: "fas fa-sync-alt" },
            { text: "Unlimited win multiplier in Free Spins", icon: "fas fa-infinity" },
            { text: "Minecart scatters retrigger spins", icon: "fas fa-redo" },
            { text: "96% RTP; ~37.47% hit rate", icon: "fas fa-percentage" },
            { text: "Medium–High volatility Megaways core", icon: "fas fa-exclamation-triangle" }
        ],
        
        // Technical specifications
        specifications: [
            { name: "Reels/Ways", value: "6 reels, up to 117,649 ways", icon: "fas fa-th" },
            { name: "RTP", value: "96%", icon: "fas fa-percentage" },
            { name: "Hit Rate", value: "37.47%", icon: "fas fa-bullseye" },
            { name: "Volatility", value: "Medium–High", icon: "fas fa-exclamation-triangle" },
            { name: "Max Win", value: "26,000×", icon: "fas fa-trophy" }
        ]
    },
    
    // Product 7 Configuration - The Dog House Megaways — Sticky vs Raining Free Spins
    product7: {
        name: "The Dog House Megaways",
        description: "The Dog House Megaways - 6-reel Megaways slot with player choice: Sticky Wilds vs Raining Wilds. High volatility, ~96.55% RTP, ~12,000× max win.",
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
        welcomePackage: "Frequent Drops & Wins",
        addedBonus: "~12,000× top with wild multipliers",
        
        affiliateLink: "https://rocketpot.io/pragmatic-play/the-dog-house-megaways/",
        ctaText: "Play Now",
        
        // CTA section configuration for detailed reviews
        cta: {
            title: "Sticky or Raining?",
            description: "Choose your free spins style—stack multipliers or chase rains.",
            boxInfo: "~96.55% RTP; high volatility; ~12,000× top.",
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
            { text: "Sticky Wilds: 7–20 FS; 2–7 sticky per reel", icon: "fas fa-thumbtack" },
            { text: "Raining Wilds: 15–30 FS; up to 6 wilds/spin", icon: "fas fa-cloud-showers-heavy" },
            { text: "Random 2×/3× wild multipliers", icon: "fas fa-times-circle" },
            { text: "~96.55% RTP", icon: "fas fa-percentage" },
            { text: "~12,000× max win", icon: "fas fa-trophy" },
            { text: "Pairs with Drops & Wins", icon: "fas fa-medal" }
        ],
        
        // Detailed review content
        fullReview: {
            tagline: "Cuddly visuals, serious math.",
            paragraphs: [
                "The Dog House Megaways by Pragmatic Play is a cheerful yet high-volatility slot that takes the much-loved canine theme of the original and upgrades it with the Megaways engine. Released in 2020, it features a 6-reel setup with up to 117,649 ways to win, powered by dynamic reel sizes that change on each spin. The RTP sits at a solid 96.55%, while maximum wins are capped at 12,000x your bet—making it significantly more rewarding than its predecessor. Bets range from $/€0.20 up to $/€100 per spin, ensuring the game caters to both casual players and high-stakes spinners, depending on the jurisdiction. With two distinct free spin options offering different volatility profiles, The Dog House Megaways has become one of Pragmatic Play’s most popular releases.",
                "The presentation is as playful as the theme suggests. The reels are set in a cartoonish suburban neighborhood with a kennel acting as the game’s logo, bright skies, and animated paw prints. Symbols include bones, collars, and four breeds of dogs, with the rottweiler acting as the top-paying premium. The wild is represented by a colorful kennel and can land on reels 2–6, applying a random 2x or 3x multiplier. When multiple wilds form part of a win, their multipliers stack together, setting up the potential for explosive payouts. The scatter is a golden paw-print coin, which triggers the bonus round when three or more land anywhere on the reels.",
                "The real variety in gameplay comes from the two Free Spins features: Sticky Wilds and Raining Wilds. If you choose Sticky Wild Free Spins, you’ll receive 7–20 spins depending on the number of triggering scatters, with 2–7 guaranteed sticky wilds per reel. Any wild that lands remains in place for the duration of the feature, each with a multiplier of 1x–3x. Over time, the reels can fill with sticky multipliers, creating thrilling sequences of consecutive wins. Alternatively, the Raining Wilds Free Spins option offers 15–30 spins, with up to 6 wilds dropping randomly on each spin, each carrying multipliers of 1x–3x. While Sticky Wilds tend to deliver fewer but higher-value hits, Raining Wilds provide more consistent action with a higher number of spins.",
                "On mobile, The Dog House Megaways is smooth and vibrant thanks to its HTML5 design. The colorful graphics scale well on smaller screens, and the fast-paced gameplay with cascading reels and shifting paylines remains easy to follow even during busy win animations. Autoplay options with turbo and quick spin modes are available in some jurisdictions, making it a flexible title for players who prefer faster sessions.",
                "Overall, The Dog House Megaways successfully combines the lighthearted charm of the original with the intensity of Megaways gameplay. The 12,000x max win potential, coupled with stacked multipliers and two different free spin modes, ensures both casual and hardcore players have reasons to return. While its high volatility won’t appeal to everyone, the ability to choose between Sticky or Raining Wilds adds strategic depth and replayability. With its fun theme, engaging mechanics, and serious payout potential, The Dog House Megaways stands as one of Pragmatic Play’s most enduring crowd-pleasers.",
                "Available at: Rocketpot.io, Rainbet, Stake, Bitcasino.io, BetFury."
            ]
        },
        
        // Perks for product cards and detailed reviews
        perks: [
            { text: "Choose Sticky vs Raining for style fit", icon: "fas fa-sliders-h" },
            { text: "Stacking wild multipliers can snowball", icon: "fas fa-layer-group" },
            { text: "Readable, playful presentation", icon: "fas fa-paw" },
            { text: "High-volatility with ~12,000× top", icon: "fas fa-exclamation-triangle" },
            { text: "Solid RTP for genre (~96.55%)", icon: "fas fa-percentage" }
        ],
        
        // Technical specifications
        specifications: [
            { name: "Reels/Ways", value: "6 reels; up to 117,649 ways", icon: "fas fa-th" },
            { name: "RTP", value: "~96.55%", icon: "fas fa-percentage" },
            { name: "Volatility", value: "High", icon: "fas fa-exclamation-triangle" },
            { name: "Max Win", value: "~12,000×", icon: "fas fa-trophy" },
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
        welcomeBonus: "Fisherman Wild collects cash fish values",
        welcomePackage: "10–20 Free Spins; retriggers add 2×/3×/10×",
        addedBonus: "~96.71% RTP variant; ~2,100× cap",
        
        affiliateLink: "https://rocketpot.io/pragmatic-play/big-bass-bonanza/",
        ctaText: "Play Now",
        
        // CTA section configuration for detailed reviews
        cta: {
            title: "Catch & Collect",
            description: "Land fishermen to collect cash fish and boost multipliers.",
            boxInfo: "RTP up to 96.71% (alts 95.67%, 94.5%); ~2,100× max; med-high vol.",
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
            { text: "Retriggers add 2×/3×/10×", icon: "fas fa-level-up-alt" },
            { text: "Cash symbols up to 2,000×", icon: "fas fa-coins" },
            { text: "Medium–High volatility", icon: "fas fa-exclamation-triangle" },
            { text: "RTP up to 96.71%", icon: "fas fa-percentage" }
        ],
        
        // Detailed review content
        fullReview: {
            tagline: "Catch fish, collect multipliers.",
            paragraphs: [
                "Big Bass Bonanza by Pragmatic Play is a lighthearted fishing-themed slot that has become one of the developer’s most recognizable titles. Released in 2020, it runs on a simple 5x3 reel grid with 10 paylines and carries medium-to-high volatility. With an RTP of up to 96.71% (though some casinos may offer lower versions at 95.67% or 94.5%), the game edges above average in terms of returns. Stakes range from $/€0.10 up to $/€250 per spin, appealing to both casual players and high-rollers depending on the casino. While the maximum win is capped at 2,100x your stake, relatively modest compared to many modern high-volatility slots, the gameplay’s charm lies in its free spins feature with retriggers and escalating multipliers.",
                "Visually, the slot is kept deliberately simple, set against an underwater backdrop with bubbles and aquatic plant life. Symbols fit the fishing theme, ranging from tackle boxes, dragonflies, and rods to floats, the latter paying up to 200x your stake for five of a kind. Fish icons double as standard symbols and as carriers of cash values during free spins. The fisherman character serves as the wild, collecting fish values when he lands, while the scatter is represented by a golden fish, triggering the free spins. The soundtrack adds to the breezy tone, with a laid-back, jazz-inspired track that mirrors the leisurely pace of a day out on the lake.",
                "The core mechanic centers on the Free Spins feature, triggered by landing 3, 4, or 5 scatters for 10, 15, or 20 spins, respectively. During free spins, every fisherman wild that lands collects the cash values attached to all fish symbols on the reels. Fish prizes range from 2x up to 2,000x your bet, making each spin potentially rewarding. Multiple fishermen on the same spin each collect the fish values, multiplying payouts. Retriggers add 10 more spins each time 4 fishermen are collected in a meter, and also escalate multipliers on collected fish: 2x for the first retrigger, 3x for the second, and 10x for the third. In theory, this allows the bonus round to extend and grow significantly, though max wins remain capped at 2,100x.",
                "On mobile, Big Bass Bonanza is smooth and highly accessible thanks to its clean design and straightforward mechanics. It plays just as well on smartphones and tablets as on larger screens, with no loss of clarity or functionality. Autoplay, quick spin, and turbo modes are available in some jurisdictions, making it flexible for different playing styles.",
                "Overall, Big Bass Bonanza keeps things simple but highly entertaining, which explains its enduring popularity and the many sequels it has spawned. While it doesn’t boast the sky-high win potential of titles like Gates of Olympus or Dead or Alive 2, its solid RTP, fun theme, and rewarding free spins make it a go-to slot for casual and seasoned players alike. The game’s success has spawned a whole Big Bass franchise, with variations like Big Bass Bonanza Megaways and Big Bass Amazon Xtreme adding new mechanics and far larger win caps for those who want to take the fishing trip to the next level.",
                "Available at: Rocketpot.io, Stake, Cloudbet, Shuffle, Bspin.io."
            ]
        },
        
        // Perks for product cards and detailed reviews
        perks: [
            { text: "Fisherman collects all visible cash fish", icon: "fas fa-fish" },
            { text: "Retriggers add 2×/3×/10× multipliers", icon: "fas fa-level-up-alt" },
            { text: "Cash fish values up to 2,000×", icon: "fas fa-coins" },
            { text: "Up to 96.71% RTP (variant dependent)", icon: "fas fa-percentage" },
            { text: "Simple, readable gameplay on mobile", icon: "fas fa-mobile-alt" }
        ],
        
        // Technical specifications
        specifications: [
            { name: "Reels/Lines", value: "5×3, 10 paylines", icon: "fas fa-th" },
            { name: "RTP", value: "Up to 96.71% (alts 95.67%, 94.5%)", icon: "fas fa-percentage" },
            { name: "Volatility", value: "Medium–High", icon: "fas fa-exclamation-triangle" },
            { name: "Max Win", value: "~2,100×", icon: "fas fa-trophy" },
            { name: "Bets", value: "$0.10–$250 (varies)", icon: "fas fa-coins" }
        ]
    },
    
    // Product 9 Configuration - San Quentin xWays — Notorious Nolimit Volatility
    product9: {
        name: "San Quentin xWays",
        description: "San Quentin xWays - xWays/xSplit enhancers with Lockdown Spins and high volatility. ~96.03% default RTP (lower variants exist); 150,000× max win.",
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
        rankBadge: "HIGH VOL",
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
        welcomePackage: "Enhancer Cells, xWays/xSplit; 150,000× cap; high volatility",
        addedBonus: "Bonus Buy options",
        
        affiliateLink: "https://rocketpot.io/nolimit-city/san-quentin/",
        ctaText: "Play Now",
        
        // CTA section configuration for detailed reviews
        cta: {
            title: "Unlock Lockdown Spins",
            description: "Enhancer Cells, xWays/xSplit, and 512× multipliers.",
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
            { text: "Enhancer Cells unlock extra symbol slots", icon: "fas fa-unlock" },
            { text: "Razor Split doubles/quadruples reel symbols", icon: "fas fa-cut" },
            { text: "xWays expands stacked high symbols", icon: "fas fa-compress-arrows-alt" },
            { text: "Lockdown Spins with Jumping Wilds (up to 512×)", icon: "fas fa-lock" },
            { text: "Bonus Buys: 100× / 400× / 2,000× (depending on region)", icon: "fas fa-shopping-bag" }
        ],
        
        // Detailed review content
        fullReview: {
            tagline: "Lockdown Spins, prison-yard payouts.",
            paragraphs: [
                "San Quentin xWays by Nolimit City is a brutally intense, high-volatility slot that plunges players into the gritty atmosphere of one of America’s most notorious prisons. Released in 2021, it features a 5x3 setup with 243 ways to win at its core, but thanks to Nolimit City’s innovative xWays and Razor Split mechanics, the number of win combinations can soar into the billions—literally over 13 billion ways. With a default RTP of 96.03% (though alternative versions exist as low as 94.11%), bets range from $/€0.20 to $/€32 per spin. The headline feature is the Lockdown Free Spins round, where multipliers can climb as high as 512x, leading to staggering maximum wins of 150,000x your bet—one of the largest ever offered in an online slot.",
                "The theme and presentation are unapologetically raw. The reels are set within a maximum-security yard, complete with barbed wire, guard towers, and security cameras. The base game soundtrack leans on Latin-inspired hip-hop beats, before morphing into hard rock riffs during the bonus rounds, emphasizing the shift in intensity. Symbols include prison paraphernalia such as soap, lighters, knives, and handcuffs, alongside five inmate characters like Crazy Joe Labrador, Loco Luis, and the top-paying Beefy Dick. Split Wilds and xWays symbols expand gameplay variety, while bonus icons unlock access to the Lockdown Free Spins. The design feels part comic book, part gritty realism—an atmosphere that fits the controversial theme perfectly.",
                "Gameplay is complex but rewarding once mastered. Enhancer Cells, locked at the top and bottom of each reel, unlock when bonus symbols land. These can reveal stacked convicts, xWays expansions, or Razor Splits that double or even quadruple all symbols on a reel. When multiple Enhancer Cells and Splits combine, the number of win ways can reach astronomical levels. Split Wilds also boost paylines by doubling adjacent symbols, while Jumping Wilds move across the grid during free spins, often carrying multipliers.",
                "The slot’s centerpiece is the Lockdown Free Spins feature, triggered by landing 3–5 bonus symbols (on average every 230 spins). Here, all Enhancer Cells unlock, and players receive Jumping Wilds—1 for three scatters, 2 for four, and 3 for five. These wilds move to new reel positions on each spin and can interact with Razor Splits to double their multipliers, up to 512x. Extra scatters during the round add more spins and additional Jumping Wilds. The bonus is where the Psycho Manhunt max win of 150,000x lurks, though realistically, hitting it is a 1-in-1.8-million-spin event.",
                "For players outside the UK, Nolimit Bonus buy options are available. You can purchase Lockdown Spins with 3 scatters for 100x bet, 4 scatters for 400x bet, or 5 scatters for a hefty 2,000x bet. RTP nudges up slightly for the most expensive option (96.95%). On mobile, San Quentin runs smoothly despite its symbol-heavy chaos, with responsive design ensuring the comic-book visuals remain crisp even when reels expand massively.",
                "Overall, San Quentin xWays is a controversial but groundbreaking release that pushed the boundaries of what slot mechanics could do. Its high volatility and complex features mean it won’t suit everyone, but for players chasing record-breaking payouts and adrenaline-fueled gameplay, it remains one of Nolimit City’s most ambitious creations. With its 150,000x max win, layered mechanics, and prison-yard aesthetic, San Quentin stands as one of the most notorious—and rewarding—high-risk slots ever made.",
                "Available at: Rocketpot.io, Stake, Rainbet, BetFury, Bitcasino.io."
            ]
        },
        
        // Perks for product cards and detailed reviews
        perks: [
            { text: "150,000× top (Psycho Manhunt)", icon: "fas fa-trophy" },
            { text: "Jumping Wild multipliers can reach 512×", icon: "fas fa-bolt" },
            { text: "Complex, rewarding enhancer combos", icon: "fas fa-layer-group" },
            { text: "Bonus Buy RTP up to ~96.95% (5 scatters)", icon: "fas fa-percentage" },
            { text: "Cult following; highlight-worthy volatility", icon: "fas fa-video" }
        ],
        
        // Technical specifications
        specifications: [
            { name: "Layout/Ways", value: "5×3; 243 ways (expand via enhancers)", icon: "fas fa-th" },
            { name: "RTP", value: "96.03% default (alts 94.11%, 90.11%)", icon: "fas fa-percentage" },
            { name: "Bonus Buy RTP", value: "Up to ~96.95% (5 scatters)", icon: "fas fa-percentage" },
            { name: "Volatility", value: "High", icon: "fas fa-exclamation-triangle" },
            { name: "Max Win", value: "150,000×", icon: "fas fa-trophy" },
            { name: "Multipliers", value: "Jumping Wilds up to 512×", icon: "fas fa-bolt" },
            { name: "Bets", value: "$/€0.20–$/$/€32 typical", icon: "fas fa-coins" }
        ]
    },
    
    // Product 10 Configuration - Mega Moolah — Iconic Progressive Jackpot
    product10: {
        name: "Mega Moolah",
        description: "Mega Moolah - 5×3, 25-line progressive with four jackpots and a random jackpot wheel. 93.42% RTP overall (88.12% base + ~5.3% jackpot contribution); low volatility.",
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
        welcomeBonus: "Random Jackpot Wheel: Mini, Minor, Major, Mega",
        welcomePackage: "15 Free Spins; all wins ×3; retriggers possible",
        addedBonus: "Lion Wild doubles wins (up to 6× in free spins)",
        
        affiliateLink: "https://rocketpot.io/games-global/mega-moolah/",
        ctaText: "Play Now",
        
        // CTA section configuration for detailed reviews
        cta: {
            title: "Spin the Jackpot Wheel",
            description: "Chase Mini, Minor, Major, or Mega jackpots.",
            boxInfo: "RTP 93.42% overall; low volatility; 4 jackpots.",
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
            { text: "Four progressive jackpots", icon: "fas fa-coins" },
            { text: "Random jackpot wheel", icon: "fas fa-chart-pie" },
            { text: "Free Spins 3× multiplier", icon: "fas fa-gift" },
            { text: "93.42% RTP (overall)", icon: "fas fa-percentage" },
            { text: "Low volatility", icon: "fas fa-exclamation-triangle" }
        ],
        
        // Detailed review content
        fullReview: {
            tagline: "Four jackpots; life-changing hits.",
            paragraphs: [
                "Mega Moolah by Games Global (formerly Microgaming) is perhaps the most famous progressive jackpot slot in the world. First released in 2006, this 5x3 safari-themed slot runs across 25 paylines and has paid out hundreds of millions in prizes, including record-breaking jackpots exceeding €19 million. Its straightforward mechanics—wilds, scatters, and free spins with multipliers—make it accessible, while the randomly triggered Jackpot Bonus Wheel keeps players chasing life-changing wins. With a default RTP of 93.42% (lower than average but balanced by the jackpot contribution), bets range from $/€0.25 up to $/€6.25 per spin, ensuring approachable stakes for casual players. The volatility is low, meaning frequent smaller wins, while the main attraction remains its progressive jackpots, particularly the Mega Jackpot, seeded at €2 million and often growing far higher.",
                "Visually, the game is simple but charming, set against the African savannah with reels populated by brightly colored royals (A–10) and safari animals like antelopes, zebras, giraffes, buffalos, and elephants. The elephant is the highest-paying standard symbol, awarding up to 30x your stake for five of a kind. The Lion Wild is both the game’s most lucrative symbol—paying up to 600x your stake—and a 2x multiplier whenever it forms part of a win. The Witch Doctor Scatter triggers the free spins round and pays up to 100x your stake, adding variety to the gameplay. While the graphics show their age compared to modern releases, the roars of animals and African-inspired choir soundtrack add atmosphere and keep the safari theme engaging.",
                "The slot’s features are modest but effective. Landing three or more scatters triggers the Free Spins feature, awarding 15 spins with all payouts tripled. When a Lion Wild is involved, its 2x multiplier combines with the free spins boost for a powerful 6x payout. Retriggers are possible, extending the feature with an additional 15 spins. Beyond free spins, the true star is the Jackpot Wheel Bonus, triggered randomly on any spin. The wheel consists of colored segments corresponding to four progressive jackpots: the Mini (starting at €10), Minor (starting at €100), Major (starting at €10,000), and the Mega (starting at €2 million). Each spin carries a chance at the wheel, with higher bets improving your odds of triggering it.",
                "On mobile, Mega Moolah is well-optimized, with simple visuals that scale effectively across iOS and Android devices. Its low-complexity design makes it easy to play on smaller screens, and the short spin cycle ensures smooth, fast-paced sessions.",
                "Overall, Mega Moolah remains a cornerstone of online jackpot slots. Its base game is simple and dated compared to modern releases, but the allure of life-changing payouts continues to draw players worldwide. With a hit frequency of nearly 46%, wins come regularly, though the biggest prizes are reserved for those lucky enough to trigger the Jackpot Wheel. While the RTP is lower than many other slots, this is more than offset by the potential to join the long list of instant millionaires created by this title. For players chasing the thrill of record-breaking jackpots, Mega Moolah is still the undisputed king of progressive slots.",
                "Available at: Rocketpot.io, Stake, Bitcasino.io, Rainbet, BetFury."
            ]
        },
        
        // Perks for product cards and detailed reviews
        perks: [
            { text: "Random Jackpot Wheel (Mini/Minor/Major/Mega)", icon: "fas fa-chart-pie" },
            { text: "Free Spins 3×; Lion Wild doubles wins (to 6×)", icon: "fas fa-gift" },
            { text: "Low volatility; frequent smaller hits", icon: "fas fa-exclamation-triangle" },
            { text: "Approachable min stake (~$0.25)", icon: "fas fa-coins" },
            { text: "Record Mega payouts (e.g., €19.4M)", icon: "fas fa-crown" }
        ],
        
        // Technical specifications
        specifications: [
            { name: "Reels/Lines", value: "5×3, 25 paylines", icon: "fas fa-th" },
            { name: "RTP", value: "93.42% overall (88.12% base + ~5.3% jackpot)", icon: "fas fa-percentage" },
            { name: "Volatility", value: "Low", icon: "fas fa-exclamation-triangle" },
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

    // Mark app as loading immediately (in case this ran before DOMContentLoaded handler)
    try {
        document.documentElement.classList.add('app-loading');
    } catch (e) {}
    
    // Apply configuration to page
    applyConfigToPage();
    
    // Replace placeholders in HTML
    replacePlaceholdersInDOM();
    
    console.log('✅ Configuration initialization complete');

    // Toggle ready state to reveal UI
    try {
        const root = document.documentElement;
        root.classList.remove('app-loading');
        root.classList.add('app-ready');
        document.dispatchEvent(new CustomEvent('app:ready'));
    } catch (e) {}
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
    // Ensure the root has loading class as early as possible
    try { document.documentElement.classList.add('app-loading'); } catch (e) {}
    document.addEventListener('DOMContentLoaded', initializeConfig);
    // Failsafe: if something blocks init, reveal after load/timeout
    window.addEventListener('load', () => {
        setTimeout(() => {
            const root = document.documentElement;
            if (!root.classList.contains('app-ready')) {
                root.classList.remove('app-loading');
                root.classList.add('app-ready');
            }
        }, 1500);
    });
} 