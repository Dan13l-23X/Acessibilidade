document.addEventListener('DOMContentLoaded', function() {

    // --- EFEITO DO CABEÇALHO AO ROLAR ---
    const header = document.getElementById('main-header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // --- LÓGICA DE ACESSIBILIDADE (Reutilizada e Robusta) ---
    const aumentarFonteBtn = document.getElementById('aumentar-fonte');
    const diminuirFonteBtn = document.getElementById('diminuir-fonte');
    const alternaContrasteBtn = document.getElementById('alterna-contraste');
    const body = document.body;
    const html = document.documentElement;

    let fontSize = 16;
    const minFontSize = 12;
    const maxFontSize = 22;

    aumentarFonteBtn.addEventListener('click', function() {
        if (fontSize < maxFontSize) {
            fontSize++;
            html.style.fontSize = fontSize + 'px';
            localStorage.setItem('fontSize', fontSize);
        }
    });

    diminuirFonteBtn.addEventListener('click', function() {
        if (fontSize > minFontSize) {
            fontSize--;
            html.style.fontSize = fontSize + 'px';
            localStorage.setItem('fontSize', fontSize);
        }
    });

    alternaContrasteBtn.addEventListener('click', function() {
        body.classList.toggle('high-contrast');
        localStorage.setItem('highContrast', body.classList.contains('high-contrast') ? 'enabled' : 'disabled');
    });

    function carregarPreferencias() {
        if (localStorage.getItem('highContrast') === 'enabled') {
            body.classList.add('high-contrast');
        }
        const savedFontSize = localStorage.getItem('fontSize');
        if (savedFontSize) {
            fontSize = parseInt(savedFontSize, 10);
            html.style.fontSize = fontSize + 'px';
        }
    }
    carregarPreferencias();

    // --- ANIMAÇÃO DE ROLAGEM (ScrollReveal) ---
    if (typeof ScrollReveal !== 'undefined') {
        const sr = ScrollReveal({
            distance: '50px',
            duration: 1500,
            easing: 'ease-in-out',
            reset: false
        });

        sr.reveal('.section-content', { origin: 'bottom' });
        sr.reveal('.form-title', { origin: 'top' });
        sr.reveal('.feedback-form', { origin: 'bottom', delay: 200 });
    }
});