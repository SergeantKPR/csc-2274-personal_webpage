//Function to load the HTML based on div id and the file name
async function loadHTML(id, file)
{
    const el = document.getElementById(id);
    const resp = await fetch(file);
    el.innerHTML = await resp.text();
}

//Load the HTMLs
loadHTML("header", "../header.html");
loadHTML("footer", "../footer.html");