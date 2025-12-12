function navbarState()
{
    return {
        menuOpen: false,
        forcedMode: null,
        isDesktop: false,
        isMobile: false,

        get MobileCheck()
        {
            return window.matchMedia("(max-width: 900px)").matches;
        },

        get modeLabel()
        {
            if (this.forcedMode==='mobile') return "Force Mobile";
            if (this.forcedMode==='desktop') return "Force Desktop";
            return "Click to Toggle View Mode";
        },

        get showDesktopMenu() 
        {
            // only show desktop menu if forcedMode is desktop OR we're on desktop and forcedMode is null
            return (this.menuOpen && (this.forcedMode === 'desktop' || (!this.isMobile && this.forcedMode !== 'mobile')));
        },

        get showMobileMenu() 
        {
            // only show mobile menu if forcedMode is mobile OR we're on mobile and forcedMode is null
            return (this.menuOpen && (this.forcedMode === 'mobile' || (this.isMobile && this.forcedMode !== 'desktop')));
        },

        cycleMode() {
            if (this.forcedMode !== "mobile") this.forcedMode = "mobile";
            else if (this.forcedMode !== "desktop") this.forcedMode = "desktop";
            else this.forcedMode = null;
        }
    };
}

function classSelection()
{
    return {
        selectedTab: 'tank',

        tankSelect()       { this.selectedTab = 'tank'; },
        healerSubSelect()  { this.selectedTab = 'healer'; },
        meleeDpsSelect()   { this.selectedTab = 'melee-dps'; },
        physRangeDpsSelect() { this.selectedTab = 'phys-range-dps'; },
        magRangeDpsSelect()  { this.selectedTab = 'mag-range-dps'; },

        checkIsActive(name) { return this.selectedTab === name; },

        init() {
            const hash = window.location.hash.replace("#", "");

            switch (hash) 
            {
                case "tank":           this.tankSelect(); break;
                case "healer":         this.healerSubSelect(); break;
                case "melee-dps":      this.meleeDpsSelect(); break;
                case "phys-range-dps": this.physRangeDpsSelect(); break;
                case "mag-range-dps":  this.magRangeDpsSelect(); break;
            }

            this.$nextTick(() => 
            {
                const el = document.getElementById(hash);
                if (el) el.scrollIntoView({ behavior: "smooth" });
            });
        }
    };
}

function tabContent()
{
    return {
        tab: 'General',
        
        changeTab(tab)
        {
            this.tab = tab;
            console.log(`${this.tab} - Updated`)
            this.$nextTick(() => 
                {
                    this.$refs.scrollArea.scrollTop = 0;
                });
        }
    };
}