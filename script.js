/* =========================================
       CINEMATIC INTRO CONTROLLER
    ========================================= */

    (function () {

        const intro = document.getElementById("introScreen");

        if (!intro) return;

        const reducedMotion =
            window.matchMedia &&
            window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        const finishIntro = () => {
            intro.classList.add("is-exiting");

            setTimeout(() => {
                intro.remove();
                document.body.classList.remove("intro-active");
            }, reducedMotion ? 250 : 900);
        };

        if (reducedMotion) {
            setTimeout(finishIntro, 350);
        } else {
            setTimeout(finishIntro, 3600);
        }

        // Press Escape or click the intro to skip it.
        intro.addEventListener("click", finishIntro);

        window.addEventListener("keydown", (event) => {
            if (event.key === "Escape") {
                finishIntro();
            }
        });

    })();


    const API_URL = "https://2lf5l19hxk.execute-api.ap-south-2.amazonaws.com/visitors";

    async function updateVisitorCount() {

        const counter = document.getElementById("visitor-count");

        try {

            const response = await fetch(API_URL, {
                method: "POST"
            });

            if (!response.ok) {
                throw new Error("API request failed");
            }

            const data = await response.json();

            counter.textContent = data.count;

        } catch (error) {

            console.error("Visitor counter error:", error);

            counter.textContent = "Unavailable";

        }
    }

    updateVisitorCount();
