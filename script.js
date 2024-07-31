document.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('.title');

    function animateLetters() {
        const text = title.textContent;
        title.textContent = '';

        for (let i = 0; i < text.length; i++) {
            let span = document.createElement('span');
            span.textContent = text[i];
            span.style.animationDelay = `${i * 0.1}s`;
            title.appendChild(span);
        }
    }

    animateLetters();
});