function initHeader()
{
    //Test logging
    console.log("If you are reading this, then the function has executed successfully");
    const headerImg = document.querySelector('.background');
    const topbar = document.querySelector('.topbar');
    const bookmarks = document.querySelector('.tabs');
    const current = window.location.pathname;

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
}

// Normalize paths to avoid loose comparisons
function normalizePath(path)
{
    const a = document.createElement('a');
    a.href = path;
    return a.pathname;
}