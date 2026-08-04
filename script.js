(() => {
    // Copies the collage strip once so the scroll loops smoothly.
    const tileTrack = document.querySelector('.tile-track');
    const tileStrip = tileTrack?.querySelector('.tile-strip');

    if (tileTrack && tileStrip) {
        tileTrack.appendChild(tileStrip.cloneNode(true));
    }

})();