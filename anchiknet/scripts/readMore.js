function moreAboutMeFunction() {
    let dots = document.getElementById("dotsAboutMe");
    let moreText = document.getElementById("moreAboutMe");
    let btnText = document.getElementById("myBtnAboutMe");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "block";
    }
}

function moreHistoryFunction() {
    let dotsHistory = document.getElementById("dotsHistory");
    let moreTextHistory = document.getElementById("moreHistory");
    let btnTextHistory = document.getElementById("myBtnHistory");

    if (dotsHistory.style.display === "none") {
        dotsHistory.style.display = "inline";
        btnTextHistory.innerHTML = "Read more";
        moreTextHistory.style.display = "none";
    } else {
        dotsHistory.style.display = "none";
        btnTextHistory.innerHTML = "Read less";
        moreTextHistory.style.display = "block";
    }
}

function moreDevFunction() {
    let dotsDev = document.getElementById("dotsDev");
    let moreTextDev = document.getElementById("moreDev");
    let btnTextDev = document.getElementById("myBtnDev");

    if (dotsDev.style.display === "none") {
        dotsDev.style.display = "inline";
        btnTextDev.innerHTML = "Read more";
        moreTextDev.style.display = "none";
    } else {
        dotsDev.style.display = "none";
        btnTextDev.innerHTML = "Read less";
        moreTextDev.style.display = "block";
    }
}

window.addEventListener("resize", reportWindowSize);

function reportWindowSize() {
    let dots = document.getElementById("dotsAboutMe");
    let moreText = document.getElementById("moreAboutMe");
    let btnText = document.getElementById("myBtnAboutMe");
    let dotsHistory = document.getElementById("dotsHistory");
    let moreTextHistory = document.getElementById("moreHistory");
    let btnTextHistory = document.getElementById("myBtnHistory");
    let dotsDev = document.getElementById("dotsDev");
    let moreTextDev = document.getElementById("moreDev");
    let btnTextDev = document.getElementById("myBtnDev");

    if (window.innerWidth > 640) {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "block";
        dotsHistory.style.display = "none";
        btnTextHistory.innerHTML = "Read less";
        moreTextHistory.style.display = "block";
        dotsDev.style.display = "none";
        btnTextDev.innerHTML = "Read less";
        moreTextDev.style.display = "block";
    } else {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
        dotsHistory.style.display = "inline";
        btnTextHistory.innerHTML = "Read more";
        moreTextHistory.style.display = "none";
        dotsDev.style.display = "inline";
        btnTextDev.innerHTML = "Read more";
        moreTextDev.style.display = "none";
    }
}