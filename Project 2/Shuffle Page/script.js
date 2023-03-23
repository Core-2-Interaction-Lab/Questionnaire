let draggableElement = document.getElementById("draggable-element");
let initialX = 0,
initialY = 0;
let moveElement = "false";

// Events Object
let events = {
    mouse: {
        down: "mouse-down",
        move: "mouse-move",
        up: "mouse-up",
    },
    touch: {
        down: "touch-start",
        move: "touch-move",
        up: "touch-end",
    },
};

let deviceType = "";
//detech touch device

const istouchDevice = () => {
    try {
         //we try to create TouchEvent (it would fail for desktops and throw error)
         document.createEvent("TouchEvent");
         deviceType = "touch"
         return true;
    }
    catch(e) {
        deviceType = "mouse";
        return false;
    }
};

isTouchDevice();
console.log(isTouchDevice())

//start (mouse down / touch start)
draggableElement.addEventListener(events[deviceType].down,
    (e) => {
        e.preventDefault();
        //initial x and y points
        initialX= !isTouchDevice() ? e.clientX : e.touches[0].
        clientX;
        initialY = !isTouchDevice ? e.clientY : e.touches[0].
        clientY;

        //start movement 
        moveElement = true;
    })

    //move
draggableElement.addEventListener(events[deviceType].move,
    (e) => {
        //if movement == true then set top and left to new X and Y while removing any offset
        if(moveElement) {
            e.preventDefault();
            let newX = !isTouchDevice() ? e.clientX : e.touches[0].clientX;
            let newY = !isTouchDevice() ? e.clientY : e.touches[0].clientY;
            draggableElement.style.top = draggableElement.offsetTop - (initialY - newY) + "px";
            draggableElement.style.left = draggableElement.offsetLeft - (initialX-newX) + "px";
            initialX = newX;
            initialY = newY;
        }
    })

// mouse up / touch end
draggableElement.addEventListener(events[deviceType].up, 
    (stopMovement = (e) => {
        moveElement = false;
})
);

draggableElement.addEventListener("mouseleave",stopMovement);
draggableElement.addEventListener(events[deviceType].up(e) => {
    moveElement = false;

});

