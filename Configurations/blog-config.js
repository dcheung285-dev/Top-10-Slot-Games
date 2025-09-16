/*
===========================================
BLOG CONFIGURATION SYSTEM
===========================================
🎯 CHANGE YOUR BLOG SETTINGS HERE - EDIT THESE LINES ONLY:
Configure individual blog posts with all their content, images, categories, and badges.
*/

// ========== BLOG HERO SECTION ==========
const BLOG_HERO = {
    title: "Crypto Slot Blog",                                    // ← Blog page main title
    subtitle: "Expert slot reviews, RTP and volatility explainers, feature breakdowns, and promo guides to help you pick the best crypto-friendly games."  // ← Blog page description
};

// ========== BLOG CTA BANNER CONFIGURATION ==========
const BLOG_CTA_BANNER = {
    enabled: true,                                              // ← Show/hide the CTA banner
    background: {
        type: "gradient",                                          // ← Switch back to image
        imageUrl: "./assets/images/ad_banner_test.jpg",     // ← Test with known working image
        imageOverlay: "rgba(0, 0, 0, 0.4)",                       // ← Image overlay color (when type is "image")
        imageSize: "cover",                                     // ← "cover", "contain", "auto", or "custom"
        imagePosition: "top",                                // ← "center", "top", "bottom", "left", "right"
        customSize: {                                           // ← Custom size settings (when imageSize is "custom")
            width: "100%",                                      // ← Image width ("100%", "800px", "50vw", etc.)
            height: "auto"                                      // ← Image height ("auto", "200px", "50vh", etc.)
        },
        scale: 1.0,                                            // ← Reset to normal scale for testing
    },
    content: {
        icon: "fas fa-coins",                                  // ← Header icon
        title: "Looking for the Best Crypto Slots?",      // ← Main headline
        subtitle: "Skip the guesswork—our research backs every pick with RTP, volatility, and features.", // ← Description text
        button: {
            text: "View Our Top 10 Slots",              // ← Button text
            icon: "fas fa-trophy",                                // ← Button icon
            link: "./index.html#top10"                         // ← Button link
        }
    }
};

// ========== INDIVIDUAL BLOG POSTS CONFIGURATION ==========
const BLOG_POSTS = {
    // Blog Post 1 - Sugar Rush (Editor’s Choice)
    post1: {
        title: "Sugar Rush Review: Why It’s Our Editor’s Choice",
        excerpt: "7×7 Cluster Pays with sticky multiplier spots up to ×128, ~96.5% RTP variants, and Free Spins that preserve multipliers—here’s why Sugar Rush is our top pick.",
        image: "./assets/images/slot-games/sugar-rush-pic.avif",
        imageAlt: "Sugar Rush slot review and analysis",
        
        // Image positioning and scaling settings
        imageScale: 1.0,                                               // Scale for blog post image (1.0 = 100%, 1.2 = 120%, etc.)
        imagePositioning: {
            objectPosition: 'top center',                                  // Options: 'top left', 'top center', 'top right', 'center left', 'center', 'center right', 'bottom left', 'bottom center', 'bottom right'
            objectFit: 'fill'                                         // Options: 'cover', 'contain', 'fill', 'scale-down', 'none'
        },
        date: "December 15, 2024",
        category: "Slot Review",
        categoryColor: "primary",
        link: "./index.html#editors-choice-review",
        badges: [
            { text: "Editor's Choice", type: "primary" },
            { text: "Cluster Pays", type: "success" }
        ],
        ctaText: "🎰 Try a demo:",
        ctaMessage: "Play <a href=\"./index.html#editors-choice-review\" class=\"text-primary\">Sugar Rush</a> and learn the multiplier spots."
    },

    // Blog Post 2 - Gates of Olympus Review
    post2: {
        title: "Gates of Olympus Review: Tumbles and 500× Multipliers",
        excerpt: "Scatter-pays + tumble loop with random orbs from 2× to 500×, 15 Free Spins with additive multipliers, and multiple RTP variants—why Gates remains a streamer favorite.",
        image: "./assets/images/slot-games/gates-of-olympus-pic.jpg",
        imageAlt: "Gates of Olympus slot review",
        
        // Image positioning and scaling settings
        imageScale: 1.0,                                               // Scale for blog post image (1.0 = 100%, 1.2 = 120%, etc.)
        imagePositioning: {
            objectPosition: 'top center',                                  // Options: 'top left', 'top center', 'top right', 'center left', 'center', 'center right', 'bottom left', 'bottom center', 'bottom right'
            objectFit: 'fill'                                         // Options: 'cover', 'contain', 'fill', 'scale-down', 'none'
        },
        date: "December 12, 2024",
        category: "Slot Review",
        categoryColor: "accent",
        link: "./index.html#review-2",
        badges: [
            { text: "Tumbles", type: "secondary" },
            { text: "500× Orbs", type: "accent" }
        ],
        ctaText: "⚡ Multiply your wins:",
        ctaMessage: "See our <a href=\"./index.html#review-2\" class=\"text-primary\">Gates breakdown</a> and learn orb timing."
    },

    // Blog Post 3 - RTP & Volatility Guide
    post3: {
        title: "RTP & Volatility Explained: Picking Crypto Slots Wisely",
        excerpt: "Understand standard vs reduced RTP variants, how volatility and hit frequency shape sessions, and the trade-offs behind max-win ceilings.",
        image: "./assets/images/slot-games/Volatility+RTP.jpg",
        imageAlt: "Crypto slots RTP and volatility guide",
        
        // Image positioning and scaling settings
        imageScale: 1.0,                                               // Scale for blog post image (1.0 = 100%, 1.2 = 120%, etc.)
        imagePositioning: {
            objectPosition: 'top center',                                  // Options: 'top left', 'top center', 'top right', 'center left', 'center', 'center right', 'bottom left', 'bottom center', 'bottom right'
            objectFit: 'fill'                                         // Options: 'cover', 'contain', 'fill', 'scale-down', 'none'
        },
        date: "December 10, 2024",
        category: "Guide",
        categoryColor: "primary",
        link: "./blogpost1.html",
        badges: [
            { text: "RTP", type: "primary" },
            { text: "Volatility", type: "secondary" }
        ],
        ctaText: "🎯 Learn the math:",
        ctaMessage: "Check our <a href=\"./index.html#top10\" class=\"text-primary\">Top 10 slots</a> and compare RTP/volatility."
    },

    // Blog Post 4 - Slot Features Guide
    post4: {
        title: "Scatter, Tumbles, Cluster, Megaways: Feature Breakdown",
        excerpt: "A practical explainer with examples from Gates, Sweet Bonanza, Sugar Rush, and Bonanza Megaways—how features affect pacing and outcomes.",
        image: "./assets/images/slot-games/features-outcomes.png",
        imageAlt: "Slot features breakdown",
        
        // Image positioning and scaling settings
        imageScale: 1.0,                                               // Scale for blog post image (1.0 = 100%, 1.2 = 120%, etc.)
        imagePositioning: {
            objectPosition: 'top center',                                  // Options: 'top left', 'top center', 'top right', 'center left', 'center', 'center right', 'bottom left', 'bottom center', 'bottom right'
            objectFit: 'fill'                                         // Options: 'cover', 'contain', 'fill', 'scale-down', 'none'
        },
        date: "December 8, 2024",
        category: "Guide",
        categoryColor: "success",
        link: "./blogpost2.html",
        badges: [
            { text: "Scatter/Tumbles", type: "secondary" },
            { text: "Megaways", type: "success" }
        ],
        ctaText: "🧠 Master features:",
        ctaMessage: "See examples in our <a href=\"./index.html#reviews\" class=\"text-primary\">reviews</a>."
    },

    // Blog Post 5 - Bonuses & Promos Guide
    post5: {
        title: "Drops & Wins, Welcome Spins, and Jackpot Networks",
        excerpt: "How to evaluate provider promos and site offers, what bonus T&Cs to check, and how bonus-buys affect eligibility.",
        image: "./assets/images/slot-games/bonus2.jpg",
        imageAlt: "Crypto slot bonuses and promos guide",
        
        // Image positioning and scaling settings
        imageScale: 1.0,                                               // Scale for blog post image (1.0 = 100%, 1.2 = 120%, etc.)
        imagePositioning: {
            objectPosition: 'top center',                                  // Options: 'top left', 'top center', 'top right', 'center left', 'center', 'center right', 'bottom left', 'bottom center', 'bottom right'
            objectFit: 'fill'                                         // Options: 'cover', 'contain', 'fill', 'scale-down', 'none'
        },
        date: "December 5, 2024",
        category: "Promos Guide",
        categoryColor: "success",
        link: "./blogpost3.html",
        badges: [
            { text: "Drops & Wins", type: "success" },
            { text: "Welcome Spins", type: "secondary" }
        ],
        ctaText: "🎁 Get more value:",
        ctaMessage: "Compare promos with our <a href=\"./index.html#top10\" class=\"text-primary\">Top 10 slots</a>."
    },

    // Blog Post 6 - Money Train 4 Review
    post6: {
        title: "Money Train 4 Review: 150,000× Max Potential",
        excerpt: "6×6 scatter-pays, Money Cart with persistent symbols, base Respins, and feature buys (where allowed). Why MT4 is the spectacle king.",
        image: "./assets/images/slot-games/money-train-4-pic.avif",
        imageAlt: "Money Train 4 slot review",
        
        // Image positioning and scaling settings
        imageScale: 1.0,                                               // Scale for blog post image (1.0 = 100%, 1.2 = 120%, etc.)
        imagePositioning: {
            objectPosition: 'top center',                                  // Options: 'top left', 'top center', 'top right', 'center left', 'center', 'center right', 'bottom left', 'bottom center', 'bottom right'
            objectFit: 'fill'                                         // Options: 'cover', 'contain', 'fill', 'scale-down', 'none'
        },
        date: "December 3, 2024",
        category: "Slot Review",
        categoryColor: "accent",
        link: "./index.html#review-1",
        badges: [
            { text: "150,000× Cap", type: "accent" },
            { text: "Money Cart", type: "primary" }
        ],
        ctaText: "🚆 Board the last train:",
        ctaMessage: "Read our <a href=\"./index.html#review-1\" class=\"text-primary\">MT4 review</a> then try a demo."
    }
};

// ========== BLOG DISPLAY SETTINGS ==========
const BLOG_DISPLAY_CONFIG = {
    showAllPosts: true,                     // Show all posts or limit to specific ones
    postsToShow: ['post1', 'post2', 'post3', 'post4', 'post5', 'post6'], // Which posts to display
    gridColumns: "repeat(auto-fit, minmax(350px, 1fr))",  // CSS grid columns
    showCTABanner: true,                    // Show the top 10 CTA banner
    enableHoverEffects: true                // Enable hover animations
};

// ========== CATEGORY COLOR MAPPINGS ==========
const CATEGORY_COLORS = {
    primary: "var(--primary-color)",
    secondary: "var(--secondary-color)", 
    accent: "var(--accent-color)",
    success: "#22c55e",
    warning: "#f59e0b", 
    danger: "#ef4444"
};

// ========== BADGE TYPE MAPPINGS ==========
const BADGE_TYPES = {
    primary: "badge-primary",
    secondary: "badge-secondary",
    accent: "badge-accent",
    success: "badge-success", 
    warning: "badge-warning",
    danger: "badge-danger"
};

/*
===========================================
🚀 BLOG DYNAMIC CONTENT SYSTEM
Everything below automatically uses the settings above.
Don't edit below unless you need advanced customization.
===========================================
*/

class BlogContentManager {
    constructor() {
        this.init();
    }
    
    init() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.setup());
        } else {
            this.setup();
        }
    }
    
    setup() {
        this.loadHeroContent();
        this.loadCTABanner();
        this.generateBlogPosts();
        this.updatePageTitle();
        console.log('✅ Blog content system loaded with', Object.keys(BLOG_POSTS).length, 'posts');
    }
    
    /**
     * Load hero section content
     */
    loadHeroContent() {
        const heroTitle = document.querySelector('.hero-title');
        const heroSubtitle = document.querySelector('.hero-subtitle');
        
        if (heroTitle) {
            heroTitle.innerHTML = this.replacePlaceholders(BLOG_HERO.title);
        }
        
        if (heroSubtitle) {
            heroSubtitle.innerHTML = this.replacePlaceholders(BLOG_HERO.subtitle);
        }
    }
    
    /**
     * Load and generate CTA banner dynamically
     */
    loadCTABanner() {
        const ctaBannerContainer = document.querySelector('.top10-ad-box');
        
        if (!BLOG_CTA_BANNER.enabled) {
            // Remove banner if disabled
            if (ctaBannerContainer) {
                ctaBannerContainer.remove();
            }
            return;
        }
        
        if (!ctaBannerContainer) {
            console.warn('CTA banner container not found');
            return;
        }
        
        // Build banner HTML
        const bannerHTML = this.createCTABannerHTML();
        ctaBannerContainer.outerHTML = bannerHTML;
        
        console.log('✅ CTA banner loaded with dynamic configuration');
    }
    
    /**
     * Create CTA banner HTML from configuration
     */
    createCTABannerHTML() {
        const config = BLOG_CTA_BANNER;
        const content = config.content;
        const background = config.background;
        
        // Determine CSS class based on background type
        let cssClass = 'top10-ad-box';
        let additionalStyle = '';
        
        if (background.type === 'image') {
            cssClass += ' top10-ad-box-image';
            
            // Build image styles
            let imageStyles = [`background-image: url(${background.imageUrl})`];
            
            // Add image size handling
            if (background.imageSize === 'custom' && background.customSize) {
                imageStyles.push(`background-size: ${background.customSize.width} ${background.customSize.height}`);
            } else {
                let baseSize = background.imageSize || 'cover';
                
                // Apply scale if specified and not using custom size
                if (background.scale && background.scale !== 1.0) {
                    if (baseSize === 'cover' || baseSize === 'contain') {
                        // For cover/contain, scale using percentage
                        const scalePercent = Math.round(background.scale * 100);
                        baseSize = `${scalePercent}%`;
                    } else if (baseSize === 'auto') {
                        // For auto, we'll use CSS transform on the container
                        cssClass += ' top10-ad-box-scaled';
                        additionalStyle += ` transform: scale(${background.scale});`;
                    }
                }
                
                imageStyles.push(`background-size: ${baseSize}`);
            }
            
            // Add image position
            if (background.imagePosition) {
                imageStyles.push(`background-position: ${background.imagePosition}`);
            }
            
            // Add repeat setting
            imageStyles.push('background-repeat: no-repeat');
            
            additionalStyle = imageStyles.join('; ') + ';';
            
            // Add overlay if specified
            if (background.imageOverlay) {
                additionalStyle += ` background-blend-mode: multiply; background-color: ${background.imageOverlay};`;
            }
        } else if (background.type === 'solid') {
            cssClass += ' top10-ad-box-solid';
        } else {
            cssClass += ' top10-ad-box-gradient'; // Default gradient
        }
        
        return `
            <div class="${cssClass}" style="${additionalStyle}">
                <h3>
                    <i class="${content.icon}"></i>
                    ${this.replacePlaceholders(content.title)}
                </h3>
                <p>
                    ${this.replacePlaceholders(content.subtitle)}
                </p>
                <a href="${content.button.link}" class="btn btn-secondary">
                    <i class="${content.button.icon}"></i>
                    ${content.button.text}
                </a>
            </div>
        `;
    }
    
    /**
     * Generate blog posts dynamically
     */
    generateBlogPosts() {
        const blogGrid = document.querySelector('.blog-grid');
        if (!blogGrid) {
            console.warn('Blog grid container not found');
            return;
        }
        
        // Clear existing content
        blogGrid.innerHTML = '';
        
        // Generate posts based on configuration
        const postsToRender = BLOG_DISPLAY_CONFIG.showAllPosts ? 
            Object.keys(BLOG_POSTS) : 
            BLOG_DISPLAY_CONFIG.postsToShow;
            
        postsToRender.forEach(postKey => {
            const post = BLOG_POSTS[postKey];
            if (!post) {
                console.warn(`Blog post ${postKey} not found in configuration`);
                return;
            }
            
            const blogPostHTML = this.createBlogPostHTML(post);
            blogGrid.insertAdjacentHTML('beforeend', blogPostHTML);
        });
        
        // Apply grid styling
        if (BLOG_DISPLAY_CONFIG.gridColumns) {
            blogGrid.style.gridTemplateColumns = BLOG_DISPLAY_CONFIG.gridColumns;
        }
    }
    
    /**
     * Create HTML for individual blog post
     */
    createBlogPostHTML(post) {
        const categoryColor = CATEGORY_COLORS[post.categoryColor] || CATEGORY_COLORS.primary;
        const badgesHTML = post.badges.map(badge => 
            `<span class="badge ${BADGE_TYPES[badge.type] || 'badge-secondary'}">${this.replacePlaceholders(badge.text)}</span>`
        ).join('');
        
        // Determine if link is external (starts with http/https) or internal
        const isExternalLink = post.link.startsWith('http://') || post.link.startsWith('https://');
        const linkAttributes = isExternalLink ? 'target="_blank" rel="noopener noreferrer"' : '';
        
        return `
            <article class="blog-post">
                <div class="blog-post-image">
                    <img src="${post.image}" 
                         alt="${this.replacePlaceholders(post.imageAlt)}" 
                         loading="lazy"
                         style="transform: scale(${post.imageScale || 1.0}); 
                                object-position: ${post.imagePositioning?.objectPosition || 'center'}; 
                                object-fit: ${post.imagePositioning?.objectFit || 'cover'};">
                </div>
                <div class="blog-post-content">
                    <div class="blog-post-meta">
                        <span class="blog-date">${post.date}</span>
                        <span class="blog-category" style="background: ${categoryColor};">${post.category}</span>
                    </div>
                    <h2 class="blog-post-title">
                        <a href="${post.link}" ${linkAttributes}>${this.replacePlaceholders(post.title)}</a>
                    </h2>
                    <p class="blog-post-excerpt">
                        ${this.replacePlaceholders(post.excerpt)}
                    </p>
                    
                    <!-- Internal Link CTA -->
                    <div class="blog-cta-inline">
                        <p><strong>${post.ctaText}</strong> ${this.replacePlaceholders(post.ctaMessage)}</p>
                    </div>
                    
                    <div class="blog-post-footer">
                        <a href="${post.link}" ${linkAttributes} class="btn btn-outline">Read More</a>
                        <div class="blog-post-tags">
                            ${badgesHTML}
                        </div>
                    </div>
                </div>
            </article>
        `;
    }
    
    /**
     * Update page title
     */
    updatePageTitle() {
        const titleElement = document.querySelector('title');
        if (titleElement) {
            const currentTitle = titleElement.textContent;
            titleElement.textContent = this.replacePlaceholders(currentTitle);
        }
    }
    
    /**
     * Replace placeholders with actual values
     */
    replacePlaceholders(text) {
        if (!text) return '';
        
        let result = text;
        
        // Replace from global config
        if (typeof window !== 'undefined') {
            if (window.NICHE_CONFIG && window.NICHE_CONFIG.niche) {
                result = result.replace(/\{\{NICHE\}\}/g, window.NICHE_CONFIG.niche);
            }
            if (window.NICHE_CONFIG && window.NICHE_CONFIG.productType) {
                result = result.replace(/\{\{PRODUCT_TYPE\}\}/g, window.NICHE_CONFIG.productType);
            }
            if (window.BRAND_NAME_TEXT) {
                result = result.replace(/\{\{BRAND_NAME_TEXT\}\}/g, window.BRAND_NAME_TEXT);
            }
            
            // Try brand config
            if (window.BrandManager) {
                const brandConfig = window.BrandManager.get();
                result = result.replace(/\{\{BRAND_NAME_TEXT\}\}/g, brandConfig.text.name);
            }
        }
        
        return result;
    }
}

// Initialize the blog content manager
const blogContentManager = new BlogContentManager();

// Make configurations available globally
if (typeof window !== 'undefined') {
    window.BLOG_HERO = BLOG_HERO;
    window.BLOG_CTA_BANNER = BLOG_CTA_BANNER;
    window.BLOG_POSTS = BLOG_POSTS;
    window.BLOG_DISPLAY_CONFIG = BLOG_DISPLAY_CONFIG;
    window.CATEGORY_COLORS = CATEGORY_COLORS;
    window.BADGE_TYPES = BADGE_TYPES;
    window.blogContentManager = blogContentManager;
}

// Export for Node.js environments
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        BLOG_HERO,
        BLOG_CTA_BANNER,
        BLOG_POSTS,
        BLOG_DISPLAY_CONFIG,
        CATEGORY_COLORS,
        BADGE_TYPES,
        BlogContentManager
    };
} 