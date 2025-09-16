/**
 * AUTO SLIDER CONFIGURATION
 * 
 * This file configures the auto slider system that can be integrated into any page.
 * Similar to the nav bar and newsletter system, this creates modular sliders.
 */

const AUTO_SLIDER_CONFIG = {
    // Global slider settings
    global: {
        animationSpeed: 30, // Speed of animation in pixels per second
        pauseOnHover: true, // Pause animation when hovering
        showControls: false, // Show play/pause controls
        responsive: true, // Enable responsive behavior
        // NOTE: Gaps are now set manually for each image using the 'gap' property
    },

    // Slider 1 - Top slider (moving left) - Text Logos
    slider1: {
        id: 'auto-slider-1',
        direction: 'left', // 'left' or 'right'
        height: '120px', // Height of the slider
        animationSpeed: 35, // Override global speed if needed
        images: [
            {
                src: 'assets/images/slot-games/Relax-Gaming-logo.png',
                alt: 'Relax Gaming',
                width: 'auto', // 'auto' or specific width like '120px'
                height: '60px', // Height of individual images
                scale: 0.7, // Scale factor (1.0 = 100%, 1.2 = 120%, 0.8 = 80%, etc.)
                gap: 50     // Manual gap after this image (in pixels)
            },
            {
                src: 'assets/images/slot-games/pragmatic-play-logo.webp',
                alt: 'Pragmatic Play',
                width: 'auto', // 'auto' or specific width like '120px'
                height: '60px', // Height of individual images
                scale: 1.5, // Scale factor (1.0 = 100%, 1.2 = 120%, 0.8 = 80%, etc.)
                gap: 60 // Manual gap after this image (in pixels)
            },
            {
                src: 'assets/images/slot-games/netent-logo.png',
                alt: 'Netent',
                width: 'auto',
                height: '60px',
                scale: 0.8,
                gap: 10 // Manual gap after this image (in pixels)
            },
            {
                src: 'assets/images/slot-games/Push-Gaming-logo.png',
                alt: 'Push Gaming',
                width: 'auto',
                height: '60px',
                scale: 0.8,
                gap: 70   // Larger gap for scaled image
            },
            {
                src: 'assets/images/slot-games/Big-Time-Gaming-logo.webp',
                alt: 'Big Time Gaming',
                width: 'auto',
                height: '60px',
                scale: 3.0,
                gap: 100    // Larger gap for scaled image
            },
            {
                src: 'assets/images/slot-games/Reel-Kingdom-logo.png',
                alt: 'Reel Kingdom',
                width: 'auto',
                height: '60px',
                scale: 1.0,
                gap: 70    // Larger gap for scaled image
            },
            {
                src: 'assets/images/slot-games/nolimit-city-logo2.webp',
                alt: 'No Limit City',
                width: 'auto',
                height: '60px',
                scale: 1.5,
                gap: 50    // Larger gap for scaled image
            },
            {
                src: 'assets/images/slot-games/games-global-logo2.webp',
                alt: 'Games Global',
                width: 'auto',
                height: '60px',
                scale: 0.8,
                gap: 10 // Much larger gap for heavily scaled image
            },
        ],
        styling: {
            backgroundColor: 'transparent',
            borderRadius: '12px',
            padding: '10px 0',
            margin: '20px 0',
            boxShadow: 'none',
            border: 'none'
        }
    },

    // Slider 2 - Bottom slider (moving right) - Bigger with Casino Images
    slider2: {
        id: 'auto-slider-2',
        direction: 'right', // 'left' or 'right'
        height: '360px', // Bigger height for the slider
        animationSpeed: 25, // Different speed for variety
        images: [
            {
                src: 'assets/images/slot-games/money-train-4-pic.avif',
                alt: 'Money Train 4',
                width: 'auto',
                height: '180px', // Bigger images
                scale: 1.0, // Scale factor for individual sizing adjustments
                gap: 30 // Manual gap after this image (in pixels)
            },
            {
                src: 'assets/images/slot-games/gates-of-olympus-pic.jpg',
                alt: 'Gates of Olympus',
                width: 'auto',
                height: '180px',
                scale: 1.0,
                gap: 30 // Manual gap after this image (in pixels)
            },
            {
                src: 'assets/images/slot-games/sweet-bonanza-pic.jpg',
                alt: 'Sweet Bonanza',
                width: 'auto',
                height: '180px',
                scale: 1.0,
                gap: 30 // Manual gap after this image (in pixels)
            },
            {
                src: 'assets/images/slot-games/Dead-or-a=Alive-2-pic.png',
                alt: 'Dead or Alive 2',
                width: 'auto',
                height: '180px',
                scale: 1.0,
                gap: 30 // Manual gap after this image (in pixels)
            },
            {
                src: 'assets/images/slot-games/razor-shark-pic.avif',
                alt: 'Stream5',
                width: 'auto',
                height: '180px',
                scale: 1.0,
                gap: 30 // Manual gap after this image (in pixels)
            },
            {
                src: 'assets/images/slot-games/bonanza-megaways-pic.jpg',
                alt: 'Bonanza Megaways',
                width: 'auto',
                height: '180px',
                scale: 1.0,
                gap: 30 // Manual gap after this image (in pixels)
            },
            {
                src: 'assets/images/slot-games/dog-house-megaways-pic.avif',
                alt: 'Dog House Megaways',
                width: 'auto',
                height: '180px',
                scale: 1.0,
                gap: 30 // Manual gap after this image (in pixels)
            },
            {
                src: 'assets/images/slot-games/big-bass-bonanza-pic.avif',
                alt: 'Big Bass Bonanza',
                width: 'auto',
                height: '180px',
                scale: 1.0,
                gap: 30 // Manual gap after this image (in pixels)
            },
            {
                src: 'assets/images/slot-games/san-quentin-xways-pic.jpeg',
                alt: 'San Quentin xWays',
                width: 'auto',
                height: '180px',
                scale: 1.0
            },
            {
                src: 'assets/images/slot-games/Mega-Moolah-pic.jpg',
                alt: 'Mega Moolah',
                width: 'auto',
                height: '180px',
                scale: 1.0,
                gap: 30 // Manual gap after this image (in pixels)
            },
        ],
        styling: {
            backgroundColor: 'transparent',
            borderRadius: '12px',
            padding: '10px 0',
            margin: '20px 0',
            boxShadow: 'none',
            border: 'none'
        }
    },
/*
    // Slider 3 - Top slider (moving left) - crypto icons
    slider3: {
        id: 'auto-slider-3',
        direction: 'left', // 'left' or 'right'
        height: '120px', // Height of the slider
        animationSpeed: 35, // Override global speed if needed
        images: [
            {
                src: 'assets/images/casino_test/tether.webp',
                alt: 'Tether',
                width: 'auto', // 'auto' or specific width like '120px'
                height: '60px', // Height of individual images
                scale: 1.5, // Scale factor (1.0 = 100%, 1.2 = 120%, 0.8 = 80%, etc.)
                gap: 20     // Manual gap after this image (in pixels)
            },
            {
                src: 'assets/images/casino_test/bitcoin.jpg',
                alt: 'Bitcoin',
                width: 'auto', // 'auto' or specific width like '120px'
                height: '60px', // Height of individual images
                scale: 1.5, // Scale factor (1.0 = 100%, 1.2 = 120%, 0.8 = 80%, etc.)
                gap: 20 // Manual gap after this image (in pixels)
            },
            {
                src: 'assets/images/casino_test/eth.webp',
                alt: 'Ethereum',
                width: 'auto',
                height: '60px',
                scale: 1.5,
                gap: 20 // Manual gap after this image (in pixels)
            },
            {
                src: 'assets/images/casino_test/solana.webp',
                alt: 'Solana',
                width: 'auto',
                height: '60px',
                scale: 1.5,
                gap: 20    // Larger gap for scaled image
            },
            {
                src: 'assets/images/casino_test/doge.webp',
                alt: 'Dogecoin',
                width: 'auto',
                height: '60px',
                scale: 1.5,
                gap: 20    // Larger gap for scaled image
            },
            {
                src: 'assets/images/casino_test/litecoin.webp',
                alt: 'Litecoin',
                width: 'auto',
                height: '60px',
                scale: 1.2,
                gap: 20    // Larger gap for scaled image
            },
            {
                src: 'assets/images/casino_test/tether.webp',
                alt: 'Tether',
                width: 'auto', // 'auto' or specific width like '120px'
                height: '60px', // Height of individual images
                scale: 1.5, // Scale factor (1.0 = 100%, 1.2 = 120%, 0.8 = 80%, etc.)
                gap: 20     // Manual gap after this image (in pixels)
            },
            {
                src: 'assets/images/casino_test/bitcoin.jpg',
                alt: 'Bitcoin',
                width: 'auto', // 'auto' or specific width like '120px'
                height: '60px', // Height of individual images
                scale: 1.5, // Scale factor (1.0 = 100%, 1.2 = 120%, 0.8 = 80%, etc.)
                gap: 20 // Manual gap after this image (in pixels)
            },
            {
                src: 'assets/images/casino_test/eth.webp',
                alt: 'Ethereum',
                width: 'auto',
                height: '60px',
                scale: 1.5,
                gap: 20 // Manual gap after this image (in pixels)
            },
            {
                src: 'assets/images/casino_test/solana.webp',
                alt: 'Solana',
                width: 'auto',
                height: '60px',
                scale: 1.5,
                gap: 20    // Larger gap for scaled image
            },
            {
                src: 'assets/images/casino_test/doge.webp',
                alt: 'Dogecoin',
                width: 'auto',
                height: '60px',
                scale: 1.5,
                gap: 20    // Larger gap for scaled image
            },
            {
                src: 'assets/images/casino_test/litecoin.webp',
                alt: 'Litecoin',
                width: 'auto',
                height: '60px',
                scale: 1.2,
                gap: 20    // Larger gap for scaled image
            },
        ],
        styling: {
            backgroundColor: 'transparent',
            borderRadius: '12px',
            padding: '10px 0',
            margin: '20px 0',
            boxShadow: 'none',
            border: 'none'
        }
    }, */

    // Responsive settings for different screen sizes
    responsive: {
        desktop: {
            // Top slider (text logos)
            slider1Height: '120px',
            slider1ImageHeight: '60px',
            // Bottom slider (casino images - bigger)
            slider2Height: '360px',
            slider2ImageHeight: '180px',
            // Crypto slider (same as text logos)
            slider3Height: '120px',
            slider3ImageHeight: '60px',
            gap: '30px'
        },
        tablet: {
            // Top slider (text logos)
            slider1Height: '70px',
            slider1ImageHeight: '35px',
            // Bottom slider (casino images)
            slider2Height: '100px',
            slider2ImageHeight: '75px',
            // Crypto slider (same as text logos)
            slider3Height: '70px',
            slider3ImageHeight: '35px',
            gap: '20px'
        },
        mobile: {
            // Top slider (text logos)
            slider1Height: '60px',
            slider1ImageHeight: '30px',
            // Bottom slider (casino images)
            slider2Height: '80px',
            slider2ImageHeight: '60px',
            // Crypto slider (same as text logos)
            slider3Height: '60px',
            slider3ImageHeight: '30px',
            gap: '15px'
        },
        extraSmall: {
            // Top slider (text logos)
            slider1Height: '50px',
            slider1ImageHeight: '25px',
            // Bottom slider (casino images)
            slider2Height: '70px',
            slider2ImageHeight: '50px',
            // Crypto slider (same as text logos)
            slider3Height: '50px',
            slider3ImageHeight: '25px',
            gap: '10px'
        }
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AUTO_SLIDER_CONFIG;
}
