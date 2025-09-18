//Function to load the HTML based on div id and the file name
async function loadHTML(id, file)
{
    const el = document.getElementById(id);
    try
    {
        const resp = await fetch(file);
        if(!resp.ok) throw new Error(`${resp.status} ${resp.statusText}`)
        const text = await resp.text();
        console.log(`Loaded ${file} into #${id}`)
        el.innerHTML = text;
    }
    catch (err)
    {
        console.error(`Failed to load ${file}:`, err)
    }
}

//Load the HTMLs
loadHTML("header", "../header.html");
loadHTML("footer", "../footer.html");