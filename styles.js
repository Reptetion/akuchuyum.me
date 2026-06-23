(() => {
    /**
     * ================================
     * INTRO PHOTO COLLAGE
     * ================================
     * The collage scroll speed is controlled in styles.css
     * under the `.tile-track` animation duration (default: 240s).
     *
     * This script duplicates the `.tile-strip` so the animation
     * loops seamlessly without a visible jump.
     */

    const tileTrack = document.querySelector('.tile-track');
    const tileStrip = tileTrack?.querySelector('.tile-strip');
   
     // Duplicate the strip only if both elements exist
    if (tileTrack && tileStrip) {
        tileTrack.appendChild(tileStrip.cloneNode(true));
    }

})();