// ===================================================================
// BLOG POST 1 CONFIGURATION - Gaming Laptop Buying Guide
// ===================================================================
// This file controls all content for the individual blog post page
// Edit this file to customize the blog post content, meta data, and styling

// ========== POST META DATA ==========
const BLOGPOST_META = {
    title: "RTP & Volatility Explained: Picking Crypto Slots Wisely",
    excerpt: "Understand standard vs reduced RTP variants, how volatility and hit frequency shape sessions, and the trade-offs behind max-win ceilings.",
    category: "Guide",
    categoryColor: "primary",
    date: "December 10, 2024",
    author: "SpinRated Slot Experts",
    readTime: 8,
    keywords: "RTP, volatility, crypto slots, hit frequency, RTP variants, bankroll management, max win",
    
    // Featured Image
    image: "./assets/images/slot-games/Volatility+RTP.jpg",
    imageAlt: "Crypto slots RTP and volatility guide",
    
    // Image positioning and scaling
    imageScale: 1.0,
    imagePositioning: {
        objectPosition: 'top center',
        objectFit: 'fill'
    },
    
    // Social sharing
    socialImage: "./assets/images/slot-games/Volatility+RTP.jpg",
    
    // Tags for the post
    tags: [
        { text: "RTP", type: "primary" },
        { text: "Volatility", type: "secondary" },
        { text: "Hit Frequency", type: "success" },
        { text: "Guide", type: "accent" }
    ]
};

// ========== ARTICLE CONTENT ==========
const ARTICLE_CONTENT = {
    // Table of Contents
    tableOfContents: [
        { id: "introduction", title: "Why RTP and Volatility Matter", level: 1 },
        { id: "rtp-variants", title: "RTP Variants: Standard vs Reduced", level: 1 },
        { id: "volatility-basics", title: "Volatility and Hit Frequency", level: 1 },
        { id: "session-shape", title: "How These Shape Your Session", level: 2 },
        { id: "bankroll", title: "Bankroll and Risk Management", level: 1 },
        { id: "bonus-buys", title: "Bonus Buys and RTP Eligibility", level: 1 },
        { id: "conclusion", title: "Smart Slot Selection", level: 1 }
    ],
    
    // Main article sections
    sections: [
        {
            id: "introduction",
            title: "Why RTP and Volatility Matter",
            content: `
                <p>Crypto slot games publish <strong>RTP</strong> (return to player) and <strong>volatility</strong> so you can set expectations. RTP is a long-run average, not a prediction for a single session, while volatility describes the <em>distribution</em> of outcomes—small frequent hits vs rare bigger spikes.</p>
                
                <div class="highlight-box" style="background: var(--background-secondary); padding: var(--spacing-lg); border-radius: var(--border-radius-md); margin: var(--spacing-lg) 0; border-left: 4px solid var(--primary-color);">
                    <h4 style="color: var(--primary-color); margin-bottom: var(--spacing-sm);">📊 Practical takeaway</h4>
                    <p style="margin: 0;">A 96% RTP slot can still swing wildly. Use volatility and hit frequency to match your goals—entertainment time, bonus hunting, or max-win chasing.</p>
                </div>
            `
        },
        {
            id: "rtp-variants",
            title: "RTP Variants: Standard vs Reduced",
            content: `
                <p>Many providers ship multiple RTP versions (e.g., 96.5%, 95.5%, 94%). Crypto-friendly sites may pick any variant. The mechanics are identical, but expected long-run returns differ.</p>
                <ul>
                    <li><strong>Check info screens:</strong> Confirm the live RTP variant at the venue you play.</li>
                    <li><strong>Bonus impact:</strong> Some venues lower RTP during bonus buys; verify rules.</li>
                    <li><strong>Network events:</strong> Drops & Wins or jackpots don’t always change game RTP.</li>
                </ul>
            `
        },
        {
            id: "volatility-basics",
            title: "Volatility and Hit Frequency",
            content: `
                <p><strong>Volatility</strong> describes how bumpy results can be. <em>Hit frequency</em> indicates how often wins occur. A high-volatility slot may deliver long dry spells punctuated by big outcomes; a medium slot hits more regularly but caps peak potential.</p>
                <div class="pro-tip" style="background: var(--accent-color-light); padding: var(--spacing-md); border-radius: var(--border-radius-md); margin: var(--spacing-lg) 0;">
                    <h4 style="color: var(--accent-color); margin-bottom: var(--spacing-sm);">💡 Example</h4>
                    <p style="margin: 0;">Sugar Rush (Cluster Pays) offers sticky multiplier spots that can snowball. Money Train 4 has extreme ceilings with dry base stretches between features.</p>
                </div>
            `
        },
        {
            id: "session-shape",
            title: "How These Shape Your Session",
            content: `
                <ul>
                    <li><strong>Entertainment pacing:</strong> Prefer medium volatility and higher hit frequency.</li>
                    <li><strong>Feature hunting:</strong> Look for feature-trigger rates you’re comfortable with.</li>
                    <li><strong>Ceiling chasing:</strong> High volatility with larger max-win caps.</li>
                    <li><strong>Budget runtime:</strong> RTP and volatility together determine session length.</li>
                </ul>
            `
        },
        {
            id: "bankroll",
            title: "Bankroll and Risk Management",
            content: `
                <p>Budget in <em>spins</em>, not minutes. Decide unit size before starting and set loss/win limits.</p>
                <ol>
                    <li>Use smaller stakes on high-volatility games to extend runway.</li>
                    <li>Track RTP variant to avoid unintentionally worse long-run value.</li>
                    <li>Plan around hit frequency to pace expectations across sessions.</li>
                </ol>
            `
        },
        {
            id: "bonus-buys",
            title: "Bonus Buys and RTP Eligibility",
            content: `
                <p>Where allowed, <strong>bonus buys</strong> shortcut to features but may alter RTP or promo eligibility. Always check venue T&Cs for wagering requirements and excluded games/features.</p>
                <ul>
                    <li>Some venues exclude bonus-buy spins from welcome offers.</li>
                    <li>Providers may publish different RTP for buys vs natural triggers.</li>
                    <li>Network promos (Drops & Wins) usually count base play, not buys.</li>
                </ul>
            `
        },
        {
            id: "conclusion",
            title: "Smart Slot Selection",
            content: `
                <p>Pick crypto slots by confirming the RTP variant, matching volatility to your goals, and managing bankroll by spins. Then compare features that suit your style.</p>
                <div class="final-cta">
                    <h4>Ready to Compare RTP and Volatility?</h4>
                    <p>Explore our research-backed Top 10 and see specs side-by-side.</p>
                    <a href="./index.html#top10" class="btn btn-primary">View Top 10 Slots</a>
                </div>
            `
        }
    ]
};

// ========== CTA CONTENT ==========
const CTA_CONTENT = {
    title: "🎰 Find Your Perfect Crypto Slot",
    description: "Our Top 10 compares RTP variants, volatility, hit frequency, and key features so you can pick confidently.",
    buttonText: "View Top 10 Slots",
    buttonLink: "./index.html#top10"
};

// ========== RELATED POSTS ==========
const RELATED_POSTS = [
    {
        title: "Scatter, Tumbles, Cluster, Megaways: Feature Breakdown",
        excerpt: "Understand how features shape pacing and outcomes with real slot examples.",
        image: "./assets/images/slot-games/features-outcomes.png",
        imageScale: 1.0,
        imagePositioning: {
            objectPosition: 'top center',
            objectFit: 'fill'
        },
        link: "./blogpost2.html",
        category: "Guide",
        date: "December 8, 2024"
    },
    {
        title: "Drops & Wins, Welcome Spins, and Jackpot Networks",
        excerpt: "How to evaluate promos, wagering rules, and bonus-buy eligibility.",
        image: "./assets/images/slot-games/bonus2.jpg",
        imageScale: 1.0,
        imagePositioning: {
            objectPosition: 'top center',
            objectFit: 'fill'
        },
        link: "./blogpost3.html",
        category: "Promos Guide",
        date: "December 5, 2024"
    }
    /* you can add more related posts here */
];

// ========== DYNAMIC CONTENT SYSTEM ==========
class BlogPost1Manager {
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
        this.updatePageMeta();
        this.populateContent();
        this.generateTableOfContents();
        this.populateTags();
        this.populateCTA();
        this.populateRelatedPosts();
        console.log('✅ Blog Post 1 content system loaded');
    }
    
    updatePageMeta() {
        // Update page title
        document.title = this.replacePlaceholders(BLOGPOST_META.title + " | {{BRAND_NAME}}");
        
        // Update meta tags
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) metaDescription.content = BLOGPOST_META.excerpt;
        
        const metaKeywords = document.querySelector('meta[name="keywords"]');
        if (metaKeywords) metaKeywords.content = BLOGPOST_META.keywords;
        
        // Update Open Graph tags
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) ogTitle.content = BLOGPOST_META.title;
        
        const ogDescription = document.querySelector('meta[property="og:description"]');
        if (ogDescription) ogDescription.content = BLOGPOST_META.excerpt;
        
        const ogImage = document.querySelector('meta[property="og:image"]');
        if (ogImage) ogImage.content = BLOGPOST_META.socialImage;
    }
    
    populateContent() {
        // Update hero section
        const categoryBadge = document.getElementById('category-badge');
        if (categoryBadge) {
            categoryBadge.textContent = BLOGPOST_META.category;
            categoryBadge.className = `badge badge-${BLOGPOST_META.categoryColor}`;
        }
        
        const postTitle = document.getElementById('post-title');
        if (postTitle) postTitle.textContent = BLOGPOST_META.title;
        
        const postDate = document.getElementById('post-date');
        if (postDate) postDate.textContent = BLOGPOST_META.date;
        
        const readTime = document.getElementById('read-time');
        if (readTime) readTime.textContent = `${BLOGPOST_META.readTime} min read`;
        
        const postAuthor = document.getElementById('post-author');
        if (postAuthor) postAuthor.textContent = BLOGPOST_META.author;
        
        const postExcerpt = document.getElementById('post-excerpt');
        if (postExcerpt) postExcerpt.textContent = BLOGPOST_META.excerpt;
        
        // Update featured image
        const featuredImage = document.getElementById('featured-image');
        if (featuredImage) {
            featuredImage.src = BLOGPOST_META.image;
            featuredImage.alt = BLOGPOST_META.imageAlt;
            featuredImage.style.transform = `scale(${BLOGPOST_META.imageScale || 1.0})`;
            featuredImage.style.objectPosition = BLOGPOST_META.imagePositioning?.objectPosition || 'center';
            featuredImage.style.objectFit = BLOGPOST_META.imagePositioning?.objectFit || 'cover';
        }
        
        // Populate article content
        const articleContent = document.getElementById('article-content');
        if (articleContent) {
            let contentHTML = '';
            
            ARTICLE_CONTENT.sections.forEach(section => {
                contentHTML += `
                    <section id="${section.id}" style="margin-bottom: var(--spacing-xl);">
                        <h2 style="color: var(--text-primary); margin-bottom: var(--spacing-lg); padding-bottom: var(--spacing-sm); border-bottom: 2px solid var(--primary-color);">
                            ${section.title}
                        </h2>
                        <div class="section-content" style="line-height: 1.8; color: var(--text-secondary);">
                            ${section.content}
                        </div>
                    </section>
                `;
            });
            
            articleContent.innerHTML = contentHTML;
        }
    }
    
    generateTableOfContents() {
        const tocContainer = document.createElement('div');
        tocContainer.className = 'table-of-contents';
        tocContainer.style.cssText = `
            background: var(--background-secondary);
            padding: var(--spacing-lg);
            border-radius: var(--border-radius-lg);
            margin-bottom: var(--spacing-xl);
            border-left: 4px solid var(--primary-color);
        `;
        
        let tocHTML = '<h3 style="margin-bottom: var(--spacing-md); color: var(--text-primary);">📋 Table of Contents</h3><ul style="list-style: none; padding: 0;">';
        
        ARTICLE_CONTENT.tableOfContents.forEach((item, index) => {
            const indent = item.level === 2 ? 'margin-left: var(--spacing-lg);' : '';
            tocHTML += `
                <li style="${indent} margin-bottom: var(--spacing-sm);">
                    <a href="#${item.id}" style="color: var(--primary-color); text-decoration: none; display: block; padding: var(--spacing-xs) 0; border-radius: var(--border-radius-sm); transition: all 0.3s ease;">
                        ${index + 1}. ${item.title}
                    </a>
                </li>
            `;
        });
        
        tocHTML += '</ul>';
        tocContainer.innerHTML = tocHTML;
        
        const articleContent = document.getElementById('article-content');
        if (articleContent) {
            articleContent.insertBefore(tocContainer, articleContent.firstChild);
        }
    }
    
    populateTags() {
        const tagsContainer = document.getElementById('tags-container');
        if (tagsContainer) {
            const tagsHTML = BLOGPOST_META.tags.map(tag => 
                `<span class="badge badge-${tag.type}" style="font-size: 0.9rem;">${tag.text}</span>`
            ).join('');
            tagsContainer.innerHTML = tagsHTML;
        }
    }
    
    populateCTA() {
        const ctaContent = document.getElementById('post-cta-content');
        if (ctaContent) {
            ctaContent.innerHTML = `
                <h3 style="margin-bottom: var(--spacing-md); color: var(--text-primary);">${CTA_CONTENT.title}</h3>
                <p style="margin-bottom: var(--spacing-lg); color: var(--text-secondary);">${CTA_CONTENT.description}</p>
                <a href="${CTA_CONTENT.buttonLink}" class="btn btn-primary" style="display: inline-block; padding: var(--spacing-md) var(--spacing-lg); text-decoration: none; border-radius: var(--border-radius-md); font-weight: 600;">
                    ${CTA_CONTENT.buttonText}
                </a>
            `;
        }
    }
    
    populateRelatedPosts() {
        const relatedGrid = document.getElementById('related-posts-grid');
        if (relatedGrid) {
            const postsHTML = RELATED_POSTS.map(post => `
                <article class="related-post-card" style="background: var(--background-primary); border-radius: var(--border-radius-lg); overflow: hidden; box-shadow: var(--shadow-md); transition: transform 0.3s ease, box-shadow 0.3s ease; cursor: pointer;" onclick="window.location.href='${post.link}'">
                    <div class="post-image" style="height: 200px; overflow: hidden;">
                        <img src="${post.image}" alt="${post.title}" style="width: 100%; height: 100%; object-fit: ${post.imagePositioning?.objectFit || 'cover'}; object-position: ${post.imagePositioning?.objectPosition || 'center center'}; transform: scale(${post.imageScale || 1.0}); transition: transform 0.3s ease;">
                    </div>
                    <div class="post-content" style="padding: var(--spacing-lg);">
                        <div class="post-meta" style="margin-bottom: var(--spacing-sm);">
                            <span class="category" style="font-size: 0.85rem; color: var(--primary-color); font-weight: 600;">${post.category}</span>
                            <span style="margin: 0 var(--spacing-xs); color: var(--text-light);">•</span>
                            <span class="date" style="font-size: 0.85rem; color: var(--text-light);">${post.date}</span>
                        </div>
                        <h4 style="margin-bottom: var(--spacing-sm); color: var(--text-primary); font-size: 1.1rem; line-height: 1.4;">${post.title}</h4>
                        <p style="color: var(--text-secondary); font-size: 0.9rem; line-height: 1.5; margin: 0;">${post.excerpt}</p>
                    </div>
                </article>
            `).join('');
            
            relatedGrid.innerHTML = postsHTML;
        }
    }
    
    replacePlaceholders(text) {
        return text
            .replace(/\{\{BRAND_NAME\}\}/g, (window.BRAND_CONFIG && window.BRAND_CONFIG.name) || 'DC\'s Top 10')
            .replace(/\{\{NICHE\}\}/g, (window.NICHE_CONFIG && window.NICHE_CONFIG.niche) || 'Products')
            .replace(/\{\{PRODUCT_TYPE\}\}/g, (window.NICHE_CONFIG && window.NICHE_CONFIG.productType) || 'products');
    }
}

// Initialize the blog post manager
const blogPost1Manager = new BlogPost1Manager();

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        BLOGPOST_META,
        ARTICLE_CONTENT,
        CTA_CONTENT,
        RELATED_POSTS,
        BlogPost1Manager
    };
}

console.log('🎯 Blog Post 1 configuration loaded successfully');
