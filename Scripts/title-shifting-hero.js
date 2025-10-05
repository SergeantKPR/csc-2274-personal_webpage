/* Event Listener to Shift H1 element to feel more fluid */
window.addEventListener('scroll',() => 
    {
        const hero = document.querySelector('.hero');
        const h1 = hero.querySelector('h1');

        const rect = hero.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        const progress = 1 - (rect.bottom / windowHeight);

        const shift = progress * 150; // Adjust multiplier for more/less shift <-- Personal note
        h1.style.setProperty('--title-shift', `${shift}px`);
    });