window.addEventListener("load", () => {

    /* =========================
       INTRO - MAIN PAGE
    ========================= */

    const intro = document.querySelector(".intro");

    if (intro) {

        const skipIntro = new URLSearchParams(window.location.search).get("skipIntro");

        if (skipIntro === "true") {

            intro.style.display = "none";

        } else {

            const introShown = sessionStorage.getItem("introShown");

            if (introShown) {

                intro.style.display = "none";

            } else {

                sessionStorage.setItem("introShown", "true");

                const title = document.querySelector(".intro-title");
                const subtitle = document.querySelector(".intro-subtitle");

                setTimeout(() => {
                    if (title) {
                        title.style.opacity = "1";
                        title.style.transform = "scale(1)";
                    }
                }, 1800);

                setTimeout(() => {
                    if (subtitle) {
                        subtitle.style.opacity = "1";
                        subtitle.style.transform = "scale(1)";
                    }
                }, 2200);

                setTimeout(() => {
                    intro.style.opacity = "0";
                }, 4200);

                setTimeout(() => {
                    intro.style.display = "none";
                }, 5000);

            }
        }
    }


    /* =========================
       ABOUT PAGE SLIDER
    ========================= */

    const aboutSlides = document.querySelectorAll(".about-slider img");

    if (aboutSlides.length > 0) {

        let currentSlide = 0;

        setInterval(() => {

            aboutSlides[currentSlide].classList.remove("active");

            currentSlide++;

            if (currentSlide >= aboutSlides.length) {
                currentSlide = 0;
            }

            aboutSlides[currentSlide].classList.add("active");

        }, 2000);

    }

});
