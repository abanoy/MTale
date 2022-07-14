window.addEventListener('load', function () {

    // If no cookies are present
    if (document.cookie == '') {

        // If the location is on the specified domain
        // Else if the location is not localhost
        if (this.location.hostname == 'abanoy.github.io') {
            setFade(true);
            getPremadeContainer();
            
            // TEMP

        } else if (this.location.hostname != '') {
            alert('Unrecognized host.');
        } else {

            setCookies();
            startBattle();
        }
    } else {
        parseCookies();

        // TODO: Check if the player would still be alive
        
        startBattle();
    } 

    
});