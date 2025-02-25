let hamberger = document.querySelector('.hamberger');
let times = document.querySelector('.times');
let mobileNav = document.querySelector('.mobile-nav');
let downloadCv = document.querySelector('.download-cv');


hamberger.addEventListener('click', function(){
    mobileNav.classList.add('open')
})

times.addEventListener('click', function(){
    mobileNav.classList.remove('open')
})

downloadCv.addEventListener('click', function(){ 
    const element = document.createElement('a');
    element.href = 'images/RESUME_Abhishek_Frontend.pdf'; // Ensure the correct path
    element.download = 'RESUME_Abhishek_Frontend.pdf'; // Set the filename for download

    document.body.appendChild(element);
    element.click(); // Trigger the download
    // document.body.removeChild(element); // Clean up
});