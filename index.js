// template id template_lrh0ifa
// service id service_exjff55

// user id user_t3nFbX13MAKY12BvzXcfL

let isModalOpen = false;
let contrastToggle = false;
const scaleFactor = 1 / 20;

// my code
function moveBackground(event) {
    const shapes = document.querySelectorAll(".shape");
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;
    
    for (let i = 0; i < shapes.length; ++i) {
        const isOdd = i % 2 !== 0;
        const boolInt = isOdd ? -1 : 1;
        shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`
    }
}




function toggleContrast() {
    contrastToggle = !contrastToggle;
    if (contrastToggle) {
        document.body.classList += " dark-theme"
    }
    else {
        document.body.classList.remove("dark-theme")
    }
}


function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
    loading.classList += " modal__overlay--visible"


    emailjs
        .sendForm(
            'service_te12zje',
            'template_hnse6ae',
            event.target,
            'qKQ2r72ELrXosO2Hv'
        ).then(() => {
            // throw new Error("error");
            loading.classList.remove("modal__overlay--visible");
            success.classList += " modal__overlay--visible"
        }).catch(() => {
            loading.classList.remove("modal__overlay--visible");
            alert(
                "The email service is temporarily unavailable. Please contact me directly at rocharocharocha95@gmail.com"
            );
        })
}


function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove("modal--open");
    }
    isModalOpen = true;
    // toggle modal
    document.body.classList += " modal--open";
}


// text appear on scroll
function scrollAppear(){
    var proAppear = document.querySelector('.pro-appear');
    var proAppearr = document.querySelector('.pro-appearr');
    var projAppear = document.querySelector('.proj-appear');
    var drink = document.querySelector('.cocktail-appear');
    var fitAppear = document.querySelector('.fitness-appear');
    var thirty = document.querySelector('.pro-appearrs')
    var thirtyTwo = document.querySelector('.pro-appearrss')




    var introPosition = proAppear.getBoundingClientRect().top;
    var introPositiono = proAppearr.getBoundingClientRect().top;
    var introPositiont = projAppear.getBoundingClientRect().top;
    var introPositionDrink = drink.getBoundingClientRect().top;
    var introPositionFitness = fitAppear.getBoundingClientRect().top;
    var thirtyShow = thirty.getBoundingClientRect().top;
    var thirtyTwoShow = thirtyTwo.getBoundingClientRect().top;



    var screenPosition = window.innerHeight;
    
    if(introPosition < screenPosition) {
        proAppear.classList.add('intro-appear');
    }
    if(introPositiono < screenPosition) {
        proAppearr.classList.add('intro-appear');
    }
    if(introPositiont < screenPosition) {
        projAppear.classList.add('intro-appear');
    }
    if(introPositionDrink < screenPosition) {
        drink.classList.add('intro-appear');
    }
    if(introPositionFitness < screenPosition) {
        fitAppear.classList.add('intro-appear');
    }
    if(thirtyShow < screenPosition) {
        thirty.classList.add('intro-appear');
    }
    if(thirtyTwoShow < screenPosition) {
        thirtyTwo.classList.add('intro-appear');
    }
  }
  
  window.addEventListener('scroll', scrollAppear)