const drawer = document.querySelector(".drawer");
const dashIcon = document.querySelector(".dash-icon");
const iconTitle = document.querySelectorAll(".icon-title");
const divider = document.querySelectorAll(".divider-bar");
let actualWidth = "";

let iconTitleStyleSheet = document.styleSheets[1].cssRules[6].style;






window.addEventListener("resize", setActualWidth);
drawer.addEventListener("mouseover", addTransitions);
drawer.addEventListener("mouseout", removeTransitions);

    function setActualWidth() {
        let CssObj = getComputedStyle(dashIcon);
        actualWidth = CssObj.width;
        drawer.style.width = actualWidth;
        console.log("fired " + actualWidth);
    }

    function addTransitions() {
        // drawer.style.width = actualWidth;
        drawer.className += " extendo";
        dividerBarTransition();
        textOpacityTrans();
    }

    function dividerBarTransition() {
        divider.forEach(elem => {
            // elem.style.borderColor = "white";
            elem.style.backgroundColor = "white";
        })
    }

    function textOpacityTrans() {
        iconTitleStyleSheet.setProperty("color", "white");
    }

    function removeTransitions() {
        // location.reload();
        // actualWidth = 20 + "px";
        console.log("mouse out " + actualWidth);
        // drawer.style.width = actualWidth;
        drawer.classList.remove("extendo");
        removeDividerStyle();
        removeIconTitleStyles();
    }

    function removeDividerStyle() {
        divider.forEach(elem => {
            elem.style.backgroundColor = "";
        })
    }

    function removeIconTitleStyles() {
        iconTitleStyleSheet.setProperty("color", "rgba(255, 255, 255, 0");
    }

    

    


   


setActualWidth();




