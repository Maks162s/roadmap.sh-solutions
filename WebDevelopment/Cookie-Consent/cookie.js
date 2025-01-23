function closePopup() {
    document.getElementById("cookiePopup").style.display = "none";
}

function acceptCookies() {
    document.cookie = "cookieConsent=accepted; expires=Fri, 31 Dec 9999 23:59:59 GMT";
    document.getElementById("cookiePopup").style.display = "none";
}

if (document.cookie.indexOf("cookieConsent=accepted") === -1) {
    document.getElementById("cookiePopup").style.display = "block";
}