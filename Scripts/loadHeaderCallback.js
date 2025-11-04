/**
 * A modified function that returns exclusively the callback located inside loadHTML for the header for use in other scripts.
 * @returns The callback for loading the header.html
 */
export function getHeaderCallback()
{
    return async () => 
        {
            try
            {
                const mod = await import("/Scripts/headerFunctions.js");
                if (mod.initHeader) mod.initHeader();

                // Scroll to hash after the header is injected <-- rectifies issues with not seeing content on load
                if (window.location.hash) 
                {
                    setTimeout(() => 
                    {
                        const target = document.querySelector(window.location.hash);
                        if (target) target.scrollIntoView({ behavior: "smooth" });
                    }, 100);
                }          
            }
            catch (err)
            {
                console.error("Error loading header functions: ", err)
            }
        };
}