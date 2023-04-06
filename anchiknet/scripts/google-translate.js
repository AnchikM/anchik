const googleTranslateConfig = {
    lang: "ru",
};

function TranslateInit() {

    let code = TranslateGetCode();
    // add active class for selected
    $('[data-google-lang="' + code + '"]').addClass(' active');

    if (code == googleTranslateConfig.lang) {
        // if selected language==degault clear cookie
        TranslateClearCookie();
    }

    // widget init
    new google.translate.TranslateElement({
        pageLanguage: googleTranslateConfig.lang,
    });

    // change language
    $('[data-google-lang]').click(function () {
        TranslateSetCookie($(this).attr("data-google-lang"))
        window.location.reload();
    });
}

function TranslateGetCode() {
    // if clean cookie - default language
    let lang = ($.cookie('googtrans') != undefined && $.cookie('googtrans') != "null") ? $.cookie('googtrans') : googleTranslateConfig.lang;
    return lang.substr(-2);
}

function TranslateClearCookie() {
    $.cookie('googtrans', null);
    $.cookie("googtrans", null, {
        domain: "." + document.domain,
    });
}

function TranslateSetCookie(code) {
    // Write in cookie /translate from / translate to
    $.cookie('googtrans', "/auto/" + code);
    $.cookie("googtrans", "/auto/" + code, {
        domain: "." + document.domain,
    });
}