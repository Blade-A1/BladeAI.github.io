// Rasm Lightbox Funksiyalari
function openImage(src, title) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    if (modal && modalImage) {
        modalImage.src = src;
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

function closeImage() {
    const modal = document.getElementById('imageModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Modal orqasini bosganda yopilishi
window.addEventListener('click', function(event) {
    const modal = document.getElementById('imageModal');
    if (event.target === modal) {
        closeImage();
    }
});

// Keyboard ESC tugmasi uchun
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeImage();
    }
});

// Navigatsiya tugmalarini faollashtirish
document.addEventListener('DOMContentLoaded', function() {
    // Navbarda faol bo'lmagan linkni aniqlash
    const currentLocation = location.pathname;
    const menuItems = document.querySelectorAll('.nav-menu a');

    menuItems.forEach(item => {
        if (item.getAttribute('href') === currentLocation || 
            (currentLocation === '/' && item.getAttribute('href') === 'index.html')) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });

    // Scroll animatsiyasi
    addScrollAnimation();
});

// Scroll animatsiyasi uchun funksiya
function addScrollAnimation() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const cards = document.querySelectorAll('.service-card, .portfolio-card');
    cards.forEach(card => {
        observer.observe(card);
    });
}

// Tugmalar uchun funksiyalar
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Portfolio kartalarini qo'shimcha funksiyalari
document.querySelectorAll('.btn-secondary').forEach(button => {
    button.addEventListener('click', function() {
        alert('Bu proyekt haqida ko\'proq ma\'lumot...');
    });
});
