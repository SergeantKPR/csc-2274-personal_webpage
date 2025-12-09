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

        tankSelect() {
            console.log("Tank tab selected");
            this.selectedTab = 'tank';
            console.log(`${this.selectedTab} - Updated`);
        },

        healerSubSelect() {
            console.log("Healer tab selected");
            this.selectedTab = 'healer';
            console.log(`${this.selectedTab} - Updated`);
        },

        meleeDpsSelect() {
            console.log("Melee DPS tab selected");
            this.selectedTab = 'melee-dps';
            console.log(`${this.selectedTab} - Updated`);
        },

        physRangeDpsSelect() {
            console.log("Physical Ranged DPS tab selected");
            this.selectedTab = 'phys-range-dps';
            console.log(`${this.selectedTab} - Updated`);
        },
        magRangeDpsSelect() {
            console.log("Magical Ranged DPS tab selected");
            this.selectedTab = 'mag-range-dps';
            console.log(`${this.selectedTab} - Updated`);
        },

        checkIsActive(tabName) 
        {
            switch (this.selectedTab)
            {
                case 'tank':
                    return tabName === 'tank';
                case 'healer':
                    return tabName === 'healer';
                case 'melee-dps':
                    return tabName === 'melee-dps';
                case 'phys-range-dps':
                    return tabName === 'phys-range-dps';
                case 'mag-range-dps':
                    return tabName === 'mag-range-dps';
                default:
                    return false;
            }
        },
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