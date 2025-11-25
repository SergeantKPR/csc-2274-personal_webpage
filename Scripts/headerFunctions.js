// headerFunctions.js

// Quick check to stop this script from being loaded multiple times
if (!window.__headerFunctionsLoaded)
{
    console.log("Initializing headerFunctions.js");
    window.addEventListener("scroll", updateTopbar);
    window.addEventListener("resize", updateTopbar);
    window.__headerFunctionsLoaded = true;
}

/**
 * Function to initialize header functionalities
 */
function initHeader()
{
    window.addEventListener("load", () => 
    {
        console.log("Page loaded");
        if (window.location.hash) 
        {
            setTimeout(() => 
            {
                const el = document.querySelector(window.location.hash);
                if (el) el.scrollIntoView({ behavior: "smooth" });
            }, 50);
        }
    });

    document.querySelectorAll(".nav a").forEach(link => 
    {
        if (link.href === window.location.href) 
        {
            link.classList.add("active");
        }
    });
}
/**
 * Function to update the position of the topbar based on scroll position
 * and header height
 */
function updateTopbar() 
{
    const header = document.getElementById("header-wrapper");
    const topbar = document.getElementById("topbar");

    if (!header || !topbar) return;

    const headerBottom = (header.offsetHeight -  (window.innerWidth / 16));
    const scrollY = window.scrollY || window.pageYOffset;

    if (scrollY >= headerBottom) 
    {
        topbar.style.position = "fixed";
        topbar.style.top = "0px";
    } 
    else 
    {
        topbar.style.position = "absolute";
        topbar.style.top = `${headerBottom / 16}rem`;
    }
}

window.addEventListener("load", updateTopbar);