document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll(".titles-links");
    const subContents = document.querySelectorAll(".sub-contents");

    links.forEach(function(link) {
        link.addEventListener("click", function() {
            // Check if the clicked link already has the 'active-link' class
            const isActive = this.classList.contains("active-link");

            // Remove 'active-link' class from all links
            links.forEach(function(l) {
                l.classList.remove("active-link");
            });

            // Remove 'active-tab' class from all subContents
            subContents.forEach(function(sub) {
                sub.classList.remove("active-tab");
            });

            // If the clicked link is not active, add 'active-link' class to it and corresponding subContent
            if (!isActive) {
                this.classList.add("active-link");
                const tabName = this.getAttribute("onclick").replace("opentitles('", "").replace("')", "");
                const subContent = document.getElementById(tabName);
                if (subContent) {
                    subContent.classList.add("active-tab");
                }
            } else {
                // If the clicked link is already active, remove 'active-link' class to hide the corresponding subContent
                this.classList.remove("active-link");
            }
        });
    });
});
