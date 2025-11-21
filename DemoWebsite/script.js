document.addEventListener('DOMContentLoaded', () => {
    const animatedTextElement = document.getElementById('animated-text');
    const phrases = ["Results.", "Growth.", "Efficiency.", "Innovation.", "Intelligence."];
    let phraseIndex = 0;
    const animationDuration = 400;
    const delayBetweenPhrases = 2000;

    function animateSpin() {
        animatedTextElement.classList.add('spin-out');

        setTimeout(() => {
            phraseIndex = (phraseIndex + 1) % phrases.length;
            animatedTextElement.textContent = phrases[phraseIndex];
            animatedTextElement.classList.remove('spin-out');
            animatedTextElement.classList.add('spin-in');

            setTimeout(() => {
                animatedTextElement.classList.remove('spin-in');
                setTimeout(animateSpin, delayBetweenPhrases);
            }, animationDuration);

        }, animationDuration);
    }

    animatedTextElement.classList.add('spin-in');
    setTimeout(() => {
        animatedTextElement.classList.remove('spin-in');
        setTimeout(animateSpin, delayBetweenPhrases);
    }, animationDuration);
});
