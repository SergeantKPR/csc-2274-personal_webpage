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
    
    

    /*
    // Failsafe detection
    console.log("Checking for failed header image");
    if (!headerImg.complete || headerImg.naturalHeight === 0) 
    {
        console.warn(`header image: ${headerImg.complete} has failed to complete`)
        // Image failed to load properly, show menu bar
        bookmarks.style.display = 'none';
        topbar.style.display = 'block';
    } 
    else 
    {
        topbar.style.display = 'none';
    }

    // Click listener
    document.querySelectorAll('.tab').forEach(tab => 
    {
        tab.addEventListener('click', () => 
        {
            console.log(`Clicked on ${tab.dataset.link}`);
            window.location.href = tab.dataset.link;
        });
    });

    // Set active tab
    document.querySelectorAll('.tab').forEach(tab => 
    {
        const tabPath = normalizePath(tab.dataset.link);
        if (tabPath == current) 
        {
            tab.classList.add('active');
        } 
        else 
        {
            tab.classList.remove('active');
        }
    });
    */


}

// Normalize paths to avoid loose comparisons
function normalizePath(path)
{
    const a = document.createElement('a');
    a.href = path;
    return a.pathname;
}