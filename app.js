document.addEventListener("DOMContentLoaded", function () {
    // Cart functionality
    const cartIcon = document.querySelector("#cart-icon");
    
    if (cartIcon) {
        cartIcon.addEventListener("click", function () {
            alert("Item added to cart!");
        });
    }

    // Menu toggle
    const bar = document.querySelector(".fa-bars");
    const cross = document.querySelector("#hdcross");
    const headerbar = document.querySelector(".headerbar");

    if (bar && cross && headerbar) {
        bar.addEventListener("click", function () {
            headerbar.classList.add("active");
            cross.style.display = "block";
        });

        cross.addEventListener("click", function () {
            headerbar.classList.remove("active");
            setTimeout(() => {
                cross.style.display = "none";
            }, 300);
        });
    }
});


const bar = document.querySelector('.fa-bars');  // The three bars
const cross = document.querySelector('#hdcross');  // Close button
const headerbar = document.querySelector('.headerbar'); // The slide-in menu

bar.addEventListener('click', function() {
    setTimeout(() => {
        cross.style.display = 'block';  // Show the close button
    }, 200);
    headerbar.style.right = '0%';  // Slide-in effect
});

cross.addEventListener('click', function() {
    cross.style.display = 'none';  // Hide the close button
    headerbar.style.right = '-100%';  // Slide-out effect
});