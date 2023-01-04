// Login Function
// add ('click) event to 'show-login' class.
document.querySelector(".show-login").addEventListener('click',function(){
    // get element from class 'popup'
    document.querySelector(".popup").classList.add("active")
    // Get the current page scroll position
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
  
        // if any scroll is attempted, set this to the previous value
        window.onscroll = function() {
            window.scrollTo(scrollLeft, scrollTop);
        };
})

document.querySelector(".popup .close-btn").addEventListener('click',function(){
    document.querySelector(".popup").classList.remove("active")
    //Enable scroll
    window.onscroll = function() {};
})

// Sign Up Function

document.querySelector(".signUp_btn").addEventListener('click',function(){
    document.querySelector(".popup__signUp").classList.add("active")
    // Get the current page scroll position
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
  
        // if any scroll is attempted, set this to the previous value
        window.onscroll = function() {
            window.scrollTo(scrollLeft, scrollTop);
        };
})

document.querySelector(".popup__signUp .close-btn").addEventListener('click',function(){
    document.querySelector(".popup__signUp").classList.remove("active")
    //Enable scroll
    window.onscroll = function() {};
})

document.querySelector(".signUp_btn2").addEventListener('click',function(){
    document.querySelector(".popup").classList.remove("active")
})

