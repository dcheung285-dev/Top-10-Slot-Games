// ===================================================================
// BLOG POST 3 CONFIGURATION - Cooling Systems Guide
// ===================================================================
// This file controls all content for the individual blog post page
// Edit this file to customize the blog post content, meta data, and styling

// ========== POST META DATA ==========
const BLOGPOST_META = {
    title: "Drops & Wins, Welcome Spins, and Jackpot Networks",
    excerpt: "How to evaluate provider promos and site offers, what bonus T&Cs to check, and how bonus-buys affect eligibility.",
    category: "Promos Guide",
    categoryColor: "success",
    date: "December 5, 2024",
    author: "SpinRated Slot Experts",
    readTime: 11,
    keywords: "crypto slot promos, Drops & Wins, welcome spins, jackpot networks, wagering requirements, bonus buys eligibility, T&Cs",
    
    // Featured Image
    image: "./assets/images/slot-games/bonus2.jpg",
    imageAlt: "Crypto slot bonuses and promos guide",
    
    // Image positioning and scaling
    imageScale: 1.0,
    imagePositioning: {
        objectPosition: 'top center',
        objectFit: 'fill'
    },
    
    // Social sharing
    socialImage: "./assets/images/slot-games/bonus2.jpg",
    
    // Tags for the post
    tags: [
        { text: "Cooling", type: "success" },
        { text: "Thermal Management", type: "primary" },
        { text: "Performance", type: "accent" },
        { text: "Temperature Control", type: "secondary" }
    ]
};

// ========== ARTICLE CONTENT ==========
const ARTICLE_CONTENT = {
    // Table of Contents
    tableOfContents: [
        { id: "introduction", title: "Understanding Crypto Slot Promos", level: 1 },
        { id: "drops-wins", title: "Provider Events: Drops & Wins", level: 1 },
        { id: "welcome-spins", title: "Welcome Spins and Site Offers", level: 1 },
        { id: "jackpot-networks", title: "Jackpot Networks and Progressives", level: 2 },
        { id: "wagering", title: "Wagering, Game Weighting, Exclusions", level: 1 },
        { id: "bonus-buys", title: "Bonus Buys: Eligibility and RTP", level: 1 },
        { id: "checklist", title: "Promo Checklist Before You Spin", level: 1 },
        { id: "conclusion", title: "Ethical Play and Value Hunting", level: 1 }
    ],
    
    // Main article sections
    sections: [
        {
            id: "introduction",
            title: "Understanding Crypto Slot Promos",
            content: `
                <p>Promotions can stretch your bankroll—or derail expectations if terms aren’t clear. This guide covers provider events, site-level offers, and how to verify eligibility when bonus-buys are involved.</p>
                <div class="highlight-box" style="background: var(--primary-color-light); padding: var(--spacing-lg); border-radius: var(--border-radius-md); margin: var(--spacing-lg) 0; border-left: 4px solid var(--primary-color);">
                    <h4 style="color: var(--primary-color); margin-bottom: var(--spacing-sm);">📋 Quick summary</h4>
                    <p style="margin: 0;">Always check RTP variant, wagering rules, game weighting, and exclusions before opting in.</p>
                </div>
            `
        },
        {
            id: "drops-wins",
            title: "Provider Events: Drops & Wins",
            content: `
                <p>Network events (e.g., Pragmatic Play’s <strong>Drops & Wins</strong>) award random cash prizes and leaderboard rewards across eligible games.</p>
                <ul>
                    <li>Eligibility depends on the venue’s participation and the specific game list.</li>
                    <li>Events don’t usually change game RTP; they add external prize pools.</li>
                    <li>Daily/weekly cycles—check schedules and minimum stake rules.</li>
                </ul>
            `
        },
        {
            id: "welcome-spins",
            title: "Welcome Spins and Site Offers",
            content: `
                <p>Welcome spins and matched deposits can add value, but terms vary widely.</p>
                <ul>
                    <li><strong>Wagering multipliers:</strong> e.g., 30× bonus—know what counts.</li>
                    <li><strong>Game weighting:</strong> Slots 100% vs table 10–20%; some slots excluded.</li>
                    <li><strong>Withdrawal caps:</strong> Some free spins limit max convertible winnings.</li>
                </ul>
            `
        },
        {
            id: "jackpot-networks",
            title: "Jackpot Networks and Progressives",
            content: `
                <p>Progressives like <strong>Mega Moolah</strong> pool stakes across sites with large, less frequent prizes.</p>
                <ul>
                    <li>Progressives may have different RTP structures from standard slots.</li>
                    <li>Expect higher variance; budget smaller stakes for longer sessions.</li>
                </ul>
            `
        },
        {
            id: "wagering",
            title: "Wagering, Game Weighting, Exclusions",
            content: `
                <p>These three terms determine real value and time required to clear offers.</p>
                <ul>
                    <li><strong>Wagering:</strong> How much you must bet before withdrawal.</li>
                    <li><strong>Weighting:</strong> Percentage contribution by game type and slot lists.</li>
                    <li><strong>Exclusions:</strong> Games or features that do not count (e.g., bonus buys).</li>
                </ul>
            `
        },
        {
            id: "bonus-buys",
            title: "Bonus Buys: Eligibility and RTP",
            content: `
                <p>Buying features (where legal) changes the flow of play and sometimes the RTP. Many venues exclude bought bonuses from promo contribution; some providers publish distinct RTP for buys.</p>
                <div class="warning-box" style="background: var(--warning-color-light); padding: var(--spacing-lg); border-radius: var(--border-radius-md); margin: var(--spacing-lg) 0;">
                    <h4 style="color: var(--warning-color); margin-bottom: var(--spacing-sm);">⚠️ Important</h4>
                    <p style="margin: 0;">If clearing wagering, avoid bonus-buys unless your venue explicitly allows them.</p>
                </div>
            `
        },
        {
            id: "checklist",
            title: "Promo Checklist Before You Spin",
            content: `
                <ol>
                    <li>Confirm the RTP variant of the slot you’ll play.</li>
                    <li>Read wagering rules and contribution tables.</li>
                    <li>Check exclusions—games, features, stake caps, time limits.</li>
                    <li>Verify progressive eligibility and jackpot terms if applicable.</li>
                    <li>Set session limits for responsible play.</li>
                </ol>
            `
        },
        {
            id: "conclusion",
            title: "Ethical Play and Value Hunting",
            content: `
                <p>Bonuses should enhance entertainment, not drive reckless decisions. Compare offers, understand the fine print, and choose reputable, licensed venues that support responsible play.</p>
                <div class="final-cta">
                    <h4>Compare Value with Our Top 10</h4>
                    <p>See RTP variants, volatility, and features at-a-glance for popular crypto slots.</p>
                    <a href="./index.html#top10" class="btn btn-primary">View Top 10 Slots</a>
                </div>
            `
        }
    ]
};

// ========== CTA CONTENT ==========
const CTA_CONTENT = {
    title: "🎁 Make Promos Work for You",
    description: "Use our checklists to avoid gotchas, then compare RTP/volatility and features across our Top 10.",
    buttonText: "Explore Top 10 Slots",
    buttonLink: "./index.html#top10"
};

// ========== RELATED POSTS ==========
const RELATED_POSTS = [
    {
        title: "RTP & Volatility Explained: Picking Crypto Slots Wisely",
        excerpt: "Understand standard vs reduced RTP, volatility, and hit frequency.",
        image: "./assets/images/slot-games/Volatility+RTP.jpg",
        imageScale: 1.0,
        imagePositioning: {
            objectPosition: 'top center',
            objectFit: 'fill'
        },
        link: "./blogpost1.html",
        category: "Guide",
        date: "December 10, 2024"
    },
    {
        title: "Scatter, Tumbles, Cluster, Megaways: Feature Breakdown",
        excerpt: "How features influence pacing and outcomes across popular titles.",
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
    /* you can add more related posts here */
];

// ========== DYNAMIC CONTENT SYSTEM ==========
class BlogPost3Manager {
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
        console.log('✅ Blog Post 3 content system loaded');
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
const blogPost3Manager = new BlogPost3Manager();

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        BLOGPOST_META,
        ARTICLE_CONTENT,
        CTA_CONTENT,
        RELATED_POSTS,
        BlogPost3Manager
    };
}

console.log('🎯 Blog Post 3 configuration loaded successfully');
