// ===================================================================
// BLOG POST 2 CONFIGURATION - RTX GPU Comparison
// ===================================================================
// This file controls all content for the individual blog post page
// Edit this file to customize the blog post content, meta data, and styling

// ========== POST META DATA ==========
const BLOGPOST_META = {
    title: "Scatter, Tumbles, Cluster, Megaways: Feature Breakdown",
    excerpt: "A practical explainer with examples from Gates, Sweet Bonanza, Sugar Rush, and Bonanza Megaways—how features affect pacing and outcomes.",
    category: "Guide",
    categoryColor: "success",
    date: "December 8, 2024",
    author: "SpinRated Slot Experts",
    readTime: 9,
    keywords: "slot features, scatter pays, tumbles, cluster pays, Megaways, bonus buys, crypto slots",
    
    // Featured Image
    image: "./assets/images/slot-games/features-outcomes.png",
    imageAlt: "Slot features breakdown",
    
    // Image positioning and scaling
    imageScale: 1.0,
    imagePositioning: {
        objectPosition: 'top center',
        objectFit: 'fill'
    },
    
    // Social sharing
    socialImage: "./assets/images/slot-games/features-outcomes.png",
    
    // Tags for the post
    tags: [
        { text: "Scatter/Tumbles", type: "secondary" },
        { text: "Megaways", type: "success" },
        { text: "Cluster Pays", type: "primary" },
        { text: "Guide", type: "accent" }
    ]
};

// ========== ARTICLE CONTENT ==========
const ARTICLE_CONTENT = {
    // Table of Contents
    tableOfContents: [
        { id: "introduction", title: "How Slot Features Shape Outcomes", level: 1 },
        { id: "scatter-pays", title: "Scatter Pays (All-Ways/Anywhere)", level: 1 },
        { id: "tumbles", title: "Tumble/Cascade Mechanics", level: 2 },
        { id: "cluster-pays", title: "Cluster Pays and Multipliers", level: 1 },
        { id: "megaways", title: "Megaways and Dynamic Reels", level: 1 },
        { id: "bonus-buys", title: "Feature/Bonus Buys (Where Allowed)", level: 1 },
        { id: "pacing-interplay", title: "Pacing vs RTP/Volatility Interplay", level: 1 },
        { id: "conclusion", title: "Choosing Features That Fit Your Style", level: 1 }
    ],
    
    // Main article sections
    sections: [
        {
            id: "introduction",
            title: "How Slot Features Shape Outcomes",
            content: `
                <p>Crypto slots use distinct mechanics that change how wins form, how sessions feel, and what peak potential looks like. Knowing the differences helps you pick games that match your goals.</p>
                <div class="highlight-box" style="background: var(--accent-color-light); padding: var(--spacing-lg); border-radius: var(--border-radius-md); margin: var(--spacing-lg) 0; border-left: 4px solid var(--accent-color);">
                    <h4 style="color: var(--accent-color); margin-bottom: var(--spacing-sm);">🧭 Quick orientation</h4>
                    <p style="margin: 0;">We’ll reference examples from Gates of Olympus (scatter + tumbles), Sweet Bonanza (tumbles), Sugar Rush (cluster + sticky multipliers), and Bonanza Megaways (variable reels).</p>
                </div>
            `
        },
        {
            id: "scatter-pays",
            title: "Scatter Pays (All-Ways/Anywhere)",
            content: `
                <p>In <strong>scatter-pays</strong>, symbols don’t need paylines—wins trigger by counts anywhere on the grid. This pairs well with <em>tumbles</em> to chain multiple wins in one spin.</p>
                <ul>
                    <li><strong>Example:</strong> Gates of Olympus forms wins by symbol count; multipliers land randomly up to 500×.</li>
                    <li><strong>Pacing:</strong> Streaky—dry stretches broken by multi-chain hits when orbs connect.</li>
                    <li><strong>RTP:</strong> Check the active variant on the venue you play.</li>
                </ul>
            `
        },
        {
            id: "tumbles",
            title: "Tumble/Cascade Mechanics",
            content: `
                <p><strong>Tumbles</strong> remove winning symbols, letting new ones fall to create back-to-back chains. Bonus rounds often add multipliers that stack across tumbles.</p>
                <ul>
                    <li><strong>Example:</strong> Sweet Bonanza’s multipliers appear in Free Spins and can stack across a sequence.</li>
                    <li><strong>Session feel:</strong> Momentum-driven—chains can escalate quickly or fizzle fast.</li>
                </ul>
            `
        },
        {
            id: "cluster-pays",
            title: "Cluster Pays and Multipliers",
            content: `
                <p><strong>Cluster Pays</strong> reward adjacent groups (e.g., 5+ touching). Some games imprint multipliers on cells that persist during the bonus.</p>
                <ul>
                    <li><strong>Example:</strong> Sugar Rush builds sticky multiplier spots up to ×128.</li>
                    <li><strong>Pacing:</strong> Medium-to-high volatility; snowball potential as the grid lights up.</li>
                </ul>
            `
        },
        {
            id: "megaways",
            title: "Megaways and Dynamic Reels",
            content: `
                <p><strong>Megaways</strong> varies the number of symbols on each reel per spin (up to 117,649+ ways). Bonuses often add cascading wins and increasing multipliers.</p>
                <ul>
                    <li><strong>Example:</strong> Bonanza Megaways pairs cascades with an increasing bonus multiplier.</li>
                    <li><strong>Feel:</strong> High energy, with strong potential in bonus rounds.</li>
                </ul>
            `
        },
        {
            id: "bonus-buys",
            title: "Feature/Bonus Buys (Where Allowed)",
            content: `
                <p>Buying features jumps straight into the action but can change RTP and promo eligibility. Always confirm T&Cs and local legality before using buys.</p>
                <ul>
                    <li>Some venues exclude bought bonuses from wagering contributions.</li>
                    <li>Providers may list different RTP for buys vs natural triggers.</li>
                </ul>
            `
        },
        {
            id: "pacing-interplay",
            title: "Pacing vs RTP/Volatility Interplay",
            content: `
                <p>Features set the <em>pacing</em> of wins, while RTP/volatility set expectations over time. Pick mechanics that fit your session goals—time on game, bonus-chasing, or ceiling hunting.</p>
                <div class="info-box" style="background: var(--primary-color-light); padding: var(--spacing-lg); border-radius: var(--border-radius-md); margin: var(--spacing-lg) 0;">
                    <h4 style="color: var(--primary-color); margin-bottom: var(--spacing-sm);">🔗 Tip</h4>
                    <p style="margin: 0;">Use our Top 10 to compare features side-by-side, then demo to learn pacing.</p>
                </div>
            `
        },
        {
            id: "conclusion",
            title: "Choosing Features That Fit Your Style",
            content: `
                <p>Prefer frequent action? Try scatter/tumbles. Want build-up drama? Go cluster pays. Like variable reels and big swings? Explore Megaways. Match features to your goals and budget.</p>
                <div class="final-cta">
                    <h4>See Features in Our Reviews</h4>
                    <p>Browse breakdowns with RTP, volatility, and examples from popular titles.</p>
                    <a href="./index.html#top10" class="btn btn-primary">Explore Top 10 Slots</a>
                </div>
            `
        }
    ]
};

// ========== CTA CONTENT ==========
const CTA_CONTENT = {
    title: "🧠 Master Slot Features",
    description: "Learn how scatter pays, tumbles, cluster multipliers, and Megaways affect pacing and potential—then compare our Top 10.",
    buttonText: "Explore Top 10 Slots",
    buttonLink: "./index.html#top10"
};

// ========== RELATED POSTS ==========
const RELATED_POSTS = [
    {
        title: "RTP & Volatility Explained: Picking Crypto Slots Wisely",
        excerpt: "Understand RTP variants, volatility, and hit frequency to set expectations.",
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
        title: "Drops & Wins, Welcome Spins, and Jackpot Networks",
        excerpt: "Compare provider promos and site offers—what to check in T&Cs.",
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
class BlogPost2Manager {
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
        console.log('✅ Blog Post 2 content system loaded');
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
const blogPost2Manager = new BlogPost2Manager();

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        BLOGPOST_META,
        ARTICLE_CONTENT,
        CTA_CONTENT,
        RELATED_POSTS,
        BlogPost2Manager
    };
}

console.log('🎯 Blog Post 2 configuration loaded successfully');
