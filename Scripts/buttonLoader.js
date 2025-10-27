//Function to load buttons asyncronously based on div id
async function buttonLoader() 
{
    try
    {
        //Select all divs with an id attribute
        const divs = document.querySelectorAll("div[id]");
        //iterate over all the found divs
        for (const div of divs)
            {
                //set id variable for console logging and select the button within the div
                let id = div.id;
                let divButton = div.querySelector("button");
                if (!divButton) continue; // Skip over if missing a button

                //Load the button based on the div id with switch and case statements
                switch (div ? id : null)
                {
                    //if the div id is combat-job-guide
                    case "combat-job-guide":
                        divButton.onclick = () => 
                            {
                                location.href = "Guides/class-job-guide.html#class-job";
                            };
                        console.log(`Button for #${id} has been loaded`);
                        break;
                    //if the div id is content-guide
                    case "content-guide":
                        divButton.onclick = () =>
                            {
                                location.href = "Guides/content-guide.html#content-guide";
                            };
                        console.log(`Button for #${id} has been loaded`);
                        break;
                    //if the div id is rec-job-guide
                    case "rec-job-guide":
                        divButton.onclick = () =>
                            {
                                location.href = "Guides/rec-job-guide.html#rec-job-guide";
                            };
                        console.log(`Button for #${id} has been loaded`);
                        break;
                    //if the div id is marketboard-guide
                    case "marketboard-guide":
                        divButton.onclick = () =>
                            {
                                location.href = "Guides/market-guide.html#market-guide";
                            };
                        console.log(`Button for #${id} has been loaded`);
                        break;
                    //if the div id is farming-guide
                    case "farming-guide":
                        divButton.onclick = () =>
                            {
                                location.href = "Guides/farming-guide.html#farming-guide";
                            };
                        console.log(`Button for #${id} has been loaded`);
                        break;
                    //if the div id is misc-guide
                    case "misc-guide":
                        divButton.onclick = () =>
                            {
                                location.href = "Guides/misc-guide.html#misc-guide";
                            };
                        console.log(`Button for #${id} has been loaded`);
                        break;
                    //if no div is being targetted
                    case null:
                        console.warn("No div is currently being targetted.");
                        break;
                    //if no div id is found or matched
                    default:
                        console.warn(`No matching div id found for #${id}`);
                        break;
                }
            }
        
    }
    catch (err)
    {
        console.error(`Failed to load buttons:`, err)
    }   
}

//Add event listener to set buttons on page load
document.addEventListener("DOMContentLoaded", buttonLoader);