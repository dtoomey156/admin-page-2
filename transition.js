const drawer = document.querySelector(".drawer");
const dashIcon = document.querySelector(".dash-icon");
const divider = document.querySelectorAll(".divider-bar");
let actualWidth = "";




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
    }

    function removeTransitions() {
        // location.reload();
        // actualWidth = 20 + "px";
        console.log("mouse out " + actualWidth);
        // drawer.style.width = actualWidth;
        drawer.classList.remove("extendo");
        removeDividerStyle();
    }

    function dividerBarTransition() {
        divider.forEach(elem => {
            // elem.style.borderColor = "white";
            elem.style.backgroundColor = "white";
        })
        
    }

    function removeDividerStyle() {
        divider.forEach(elem => {
            elem.style.backgroundColor = "";
        })
        
    }


setActualWidth();




