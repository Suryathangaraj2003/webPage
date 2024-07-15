$(document).ready(function(){
    $('.list-group-item').hover(function(){
        $(this).addClass('active');
    }, function(){
        $(this).removeClass('active');
    });

    $('.box').hover(function(){
        $(this).css('background-color', '#ff007a');
        $(this).find('p, h3, .icon').css('color', '#fff');
    }, function(){
        $(this).css('background-color', '#fff');
        $(this).find('p, h3, .icon').css('color', '#ff007a');
    });
}); 

document.addEventListener('DOMContentLoaded', function () {
    
    const contactButton = document.querySelector('.contact-btn');
    const popupOverlay = document.querySelector('.popup-overlay');
    const closeButton = document.querySelector('.close-btn');

    contactButton.addEventListener('click', function (e) {
        e.preventDefault();
        popupOverlay.style.display = 'flex'; // Show the popup
    });

    closeButton.addEventListener('click', function (e) {
        e.preventDefault();
        popupOverlay.style.display = 'none'; // Hide the popup
    });

    // Optional: Hide popup when clicking outside of it
    popupOverlay.addEventListener('click', function (e) {
        if (e.target === popupOverlay) {
            popupOverlay.style.display = 'none';
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const hoverElements = document.querySelectorAll(".img-fluid");

   
    const cards = document.querySelectorAll("#card1")
    cards.forEach((card)=>{
        const org = card.style.background

        card.addEventListener('mouseover',function(){
          
            card.style.backgroundSize = 'cover';
            card.style.backgroundPosition = 'center'
    })
    card.addEventListener('mouseout',function(){
     
});

})
})

document.addEventListener('DOMContentLoaded', function() {
    // Get all project links
    const projectLinks = document.querySelectorAll('.project1');
    const projectLinks2 = document.querySelectorAll('.project2');
    const projectLinks3 = document.querySelectorAll('.project3');
    // Get the project image element
    const projectImage = document.querySelector('.pg-img');
    
    // Function to change the project image source
    function changeProjectImage(newImg) {
        return function() {
            // Set the new image source
            projectImage.src = newImg;
        }
    }

    // Add event listeners to each project link
    projectLinks.forEach(link => {
        const newImageSrc = 'pg01.png';
        link.addEventListener('click', changeProjectImage(newImageSrc));
    });
    projectLinks2.forEach(link => {
        const newImageSrc2 = 'img2.jpg';
        link.addEventListener('click', changeProjectImage(newImageSrc2));
    });
    projectLinks3.forEach(link => {
        const newImageSrc3 = 'img4.jpg';
        link.addEventListener('click', changeProjectImage(newImageSrc3));
    });
});
