//imported functions
import { isValidPassword, isValidEmail } from "./formValidation.js";
import { getHeaderCallback } from "./loadHeaderCallback.js";

//Snapshot the original state before any modifications
const originalState = document.body.innerHTML;

/**
 * A function that creates an account based on entered form values
 * @returns an alert if one of the form values does not match specification
 */
async function createAccount() 
{
    //fetch form values
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let email = document.getElementById("email").value;

    try
    {
        console.log("checking account information...");
        //Username validation
        if (username.length < 4)
           return alert("Username must be at least 4 characters long.");
        //Password validation
        if (!isValidPassword(password, {minLength: 8, requireNumber: true, requireSpecialChar: true}))
            return alert("Password must be at least 8 characters long and include at least one number and one special character.");
        //Email validation
        if (!isValidEmail(email))
           return alert("Please enter a valid email address.");

        //If all validations pass, proceed to create account
        console.log("All validations passed. Creating account...");
        createdAccountPage();
    }

    catch (error)
    {
        console.error("Error creating account:", error);
    }
}

/**
 * A function that resets the page to before content was modified and reattaches DOM
 */
async function resetPage()
{
    console.log("Reset Page requested");

    try
    {
        document.body.innerHTML = originalState;
        console.log("Found original state, attempting to find header/footer functions");
        if (typeof loadHTML === "function")
        {
            console.log("found function, reattaching DOM")
            loadHTML("header", "header.html", getHeaderCallback());
            loadHTML("footer", "footer.html");
        }
        else
        {
            const script = document.createElement("script");
            script.src = "/Scripts/loadHTML.js";
            document.body.appendChild(script);
        }
        console.log("Reset Page completed successfully");
    }
    catch (err)
    {
        console.error(err, ": Resetting body of the HTML failed. Force reloading page in 5 seconds.");
        await wait(5000);
        location.reload();
    }

}
/**
 * A function that modifies the page-content of the HTML to display a different message
 */
function createdAccountPage()
{
    document.getElementById("page-content").innerHTML = 
    `
        <h2>Form submitted successfully!</h2>
        <!-- Inline button styling as a placeholder -->
        <button id="resetBtn" style="display:block; margin: 20px auto;">Reset the page</button>
    `;

    document.getElementById("resetBtn").addEventListener("click", resetPage);
}

document.addEventListener("DOMContentLoaded", ()=>
    {   
        document.getElementById("createAcctBtn").addEventListener("click", createAccount);
    });