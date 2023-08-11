let drawer = document.querySelector(".drawer");
let dashIcon = document.querySelector(".dash-icon");
let actualWidth = "";


window.addEventListener("resize", setActualWidth);
drawer.addEventListener("mouseover", addExtendoClass);
drawer.addEventListener("mouseout", removeExtendoClass);

    function setActualWidth() {
        let CssObj = getComputedStyle(dashIcon);
        actualWidth = CssObj.width;
        drawer.style.width = actualWidth;
        console.log("fired " + actualWidth);
    }

    function addExtendoClass() {
        // drawer.style.width = actualWidth;
        drawer.className += " extendo";
    }

    function removeExtendoClass() {
        // location.reload();
        // actualWidth = 20 + "px";
        console.log("mouse out " + actualWidth);
        // drawer.style.width = actualWidth;
        drawer.classList.remove("extendo");
    }

setActualWidth();

addExtendoClass();




