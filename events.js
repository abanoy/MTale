window.addEventListener('load', function () {

    // If no cookies are present
    if (document.cookie == '') {

        // If the location is on the specified domain
        // Else if the location is not localhost
        if (this.location.hostname == 'abanoy.github.io') {
            setFade(true);
            getPremadeContainer();
            

        } else if (this.location.hostname != '') {
            alert('Unrecognized host.');
        } else {

            setFade(true);
            getPremadeContainer(0);
        }
    } else {
        parseCookies();
        setFade(true);
        getPremadeContainer(0);
    } 

    
});