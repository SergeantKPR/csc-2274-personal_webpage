
/**
 * A function to validate email addresses based on RFC 5322 Official Standard for General Emails.
 * @param {*} email The email to check.
 * @returns Whether the test was successful or not.
 */
export function isValidEmail(email)
{
    //RFC 5322 Official Standard regex pattern for General Emails
    const emailPattern = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    return emailPattern.test(email);
}

/**
 * A function to validate first and last names.
 * @param {string} firstName The users first name
 * @param {string} lastName The users last name
 * @returns 
 */
export function isValidName(firstName, lastName)
{
    //Allows letters, apostrophes, hyphens, between 1 and 25 characters
    const namePattern = /^[a-zA-Z'-]{1,25}$/;
    //Return true only if both names are valid
    return (namePattern.test(firstName) && namePattern.test(lastName));
}

/**
 * A function to validate phone numbers in various formats.
 * @param {*} phone 
 * @returns 
 */
export function isValidPhone(phone)
{
    const phonePattern = /^(?:\+?\d{1,3}[\s\-()]*)?(?:\(?\d{3}\)?[\s\-]*)\d{3}[\s\-]?\d{4}$/;
    return (phonePattern.test(phone));

}

/**
 * A function to validate passwords based on given requirements.
 * @param {string} password - The password string to validate.
 * @param {Object} requirement - An object specifying validation requirements.
 * @param {number} [requirement.minLength=0] - Minimum length of the password. Default is 0.
 * @param {boolean} [requirement.requireNumber=false] - Whether at least one number is required. Default is false.
 * @param {boolean} [requirement.requireSpecialChar=false] - Whether at least one special character is required. Default is false.
 * @returns {boolean} Returns true if the password meets all specified requirements, otherwise false.
 * 
 * @example
 * // Validate a password with minimum length of 8, requiring a number and a special character
 * isValidPassword("P@ssw0rd", {minLength: 8, requireNumber: true, requireSpecialChar: true});
 * 
 * @example
 * //Validate a password with minimum length of 6, no other requirements
 * isValidPassword("mypassword", {minLength: 6});
 * 
 */
export function isValidPassword(password, requirement={minLength: 0, requireNumber: false, requireSpecialChar: false})
{
    const requirements = {};
    //Set minimum length requirement
    if (requirement.minLength !== undefined || requirement.minLength !== null)
    {
        requirements.minLength = requirement.minLength;
    }
    else
    {
        requirements.minLength = 0;
    }

    //Set number requirement
    if (requirement.requireNumber !== undefined || requirement.requireNumber !== null)
    {
        requirements.requireNumber = requirement.requireNumber;
    }
    else
    {
        requirements.requireNumber = false;
    }
    //Set special character requirement
    if (requirement.requireSpecialChar !== undefined || requirement.requireSpecialChar !== null)
    {
        requirements.requireSpecialChar = requirement.requireSpecialChar;
    }
    else
    {
        requirements.requireSpecialChar = false;
    }

    //Check length requirement
    if (password.length < requirements.minLength)
    {
        return false;
    }
    //Check for number requirement
    if (requirements.requireNumber && !/(?=.*[\d]).*/.test(password))
    {
        return false;
    }
    //Check for special character requirement
    if (requirements.requireSpecialChar && !/(?=.*[!@#$%^&\*()_+-=\[\]{};':"\\|,.<>\/?]).*/.test(password))
    {
        return false;
    }
    return true;
}