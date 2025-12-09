/**A function to load the HTML based on div id and the file path 
 * @param id The ID of the div
 * @param file The path for the file
 * @param callback (Optional) the callback for the associated html file
*/
async function loadHTML(id, file, callback)
{
    //Check for the element first before attempting to load
    const el = document.getElementById(id);
    if (!el)
    {
        console.error(`Element with id "${id}" not found.`);
        return;
    }
    try
    {
        //Attempt to fetch the file
        let resp = await fetch(file);
        //If the fetch fails, try adjusting the path then refetch
        if (!resp.ok)
            {
                console.warn(`Initial fetch failed (${resp.status}), trying path adjustment`);
                const path = getPath(file);
                console.log(`Adjusted path: ${path}`);
                resp = await fetch(path);
            }
        //If the fetch still fails, throw an error
        if(!resp.ok) throw new Error(`${resp.status} ${resp.statusText}`);

        //Get the text and insert it into the element
        const text = await resp.text();
        //Log the results
        el.innerHTML = text;
        console.log(`Loaded ${file} into #${id}`);

        if(callback && typeof callback === 'function')
            {
                callback();
            }
        
    }
    catch (err)
    {
        console.error(`Failed to load ${file}:`, err)
    }
}

//Function to adjust the path based on the current location depth
function getPath(file)
{
    const depth = window.location.pathname.split("/").length - 2;
    return "../".repeat(depth) + file;
}

//Load the HTMLs
loadHTML("header", "header.html", () => 
        {
            const script = document.createElement("script");
            script.src = "/Scripts/headerFunctions.js";
            script.onload = () => 
            {
                initHeader();

                // Scroll to hash after the header is injected <-- rectifies issues with not seeing content on load
                if (window.location.hash) 
                {
                    setTimeout(() => 
                    {
                        const target = document.querySelector(window.location.hash);
                        if (target) target.scrollIntoView({ behavior: "smooth" });
                    }, 100);
                }
            };
            document.body.appendChild(script);
        });
loadHTML("footer", "footer.html");
loadHTML("topbar", "topbar.html", () => 
        {
            const script = document.createElement("script");
            script.src = "/Scripts/headerFunctions.js";
            script.onload = () => 
            {
                initHeader();
                updateTopbar();
                window.addEventListener("scroll", updateTopbar);
                window.addEventListener("resize", updateTopbar);

                // Scroll to hash after the header is injected <-- rectifies issues with not seeing content on load
                if (window.location.hash) 
                {
                    setTimeout(() => 
                    {
                        const target = document.querySelector(window.location.hash);
                        if (target) target.scrollIntoView({ behavior: "smooth" });
                    }, 100);
                }
            };
            document.body.appendChild(script);

            const alpine = document.createElement("script");
            alpine.src = "https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js";
            alpine.defer = true;
            if (document.head.children.namedItem("alpinejs") === null)
            document.head.appendChild(alpine);
        });