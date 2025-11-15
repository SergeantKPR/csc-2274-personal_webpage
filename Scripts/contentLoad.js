/**
 * Universal function for setting up and utilizing a loader for specified content. 
 * generalized for multi-page application
 * @param {HTMLSelectElement} select The id for the select element
 * @param {HTMLElement} content The class name for the content to load
 * @example <section id="unique_name" class="content"></section>
 * <section id="unique_name2" class="content"></section>
 * @param {HTMLOptionElement} defaultValue the defaulted value to load on start 
 * @param {HTMLDivElement} loc The id for the housing div element
 * @returns console warns in the event of missing or incorrect params
 */
function __initContentSwitcher({select, content, default: defaultValue, loc=document} = {})
{
    const root = typeof loc === 'string' ? document.querySelector(loc) : loc;
    if (!root)
    {
        return console.warn('__initContentSwitcher: Unknown location provided')
    }
    const selector = root.querySelector(select);
    const sections = root.querySelectorAll(content);

    if (!selector || sections.length === 0)
    {
        console.warn('__initContentSwitcher: Missing select or content elements');
        return;  
    }

    function updateContent()
    {
        const value = selector.value;
        sections.forEach(sec =>
        {
            sec.classList.toggle('active', sec.id === value);
        });
    }

    selector.addEventListener('change', updateContent);

    if (defaultValue)
    {
        selector.value = defaultValue;
    }
    updateContent();
}