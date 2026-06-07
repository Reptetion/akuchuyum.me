(() => {
    // Intro collage:
    // Keep one .tile-strip in HTML and clone it once here.
    // The scroll speed is controlled in styles.css on .tile-track animation duration (240s).
    const tileTrack = document.querySelector('.tile-track');
    const tileStrip = tileTrack?.querySelector('.tile-strip');
    if (tileTrack && tileStrip) {
        tileTrack.appendChild(tileStrip.cloneNode(true));
    }

    // Navbar
    const navbar = document.querySelector('.navbar-fixed-top');
    if (!navbar) {
        return;
    }

    let ticking = false;

    const updateNavbarState = () => {
        if (window.scrollY > 50) {
            navbar.classList.add('top-nav-collapse');
        } else {
            navbar.classList.remove('top-nav-collapse');
        }
        ticking = false;
    };

    const onScroll = () => {
        if (ticking) {
            return;
        }
        ticking = true;
        window.requestAnimationFrame(updateNavbarState);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    updateNavbarState();
})();