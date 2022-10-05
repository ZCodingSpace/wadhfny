// The Slide-up for Sections Titles Start
let sections_titles = document.querySelectorAll(".slide-up");
let contents_elements = document.querySelectorAll(".slide-in");
let appearing_way = {
    // threshhold: 1,
    rootMargin: "0px 0px -100px 0px"
};
let appear_on_scroll = new IntersectionObserver(function(elements, appear_on_scroll) {

    elements.forEach(element => {
        if(!element.isIntersecting){
            return;
        }else{
            element.target.classList.add("appear");
            appear_on_scroll.unobserve(element.target);
        }
    })
}, appearing_way);

sections_titles.forEach(title => {
    appear_on_scroll.observe(title);
})
contents_elements.forEach(content_el => {
    appear_on_scroll.observe(content_el);
})
// The slide-up for Sections Titles End

const order_array = [1, 2, 3];
let accountant_div = document.querySelector(".accountant");
let architect_div = document.querySelector(".architect");
let lawyer_div = document.querySelector(".lawyer");
// let programmer_div = document.querySelector(".programmer");

order_array.sort((a, b) => 0.5 - Math.random());

let count = 0;
setInterval(functio1, 2000);

function functio1() {

    display_state(order_array[count]);
    count++;

    if (count == 3) {
        count = 0;
    }
}

function display_state(new_state) {

    switch (new_state) {
        case 1:
            accountant_div.style.display = "block";
            architect_div.style.display = "none";
            lawyer_div.style.display = "none";
            break;
        case 2:
            accountant_div.style.display = "none";
            architect_div.style.display = "block";
            lawyer_div.style.display = "none";
            break;
        case 3:
            accountant_div.style.display = "none";
            architect_div.style.display = "none";
            lawyer_div.style.display = "block";

    }
}


// Statistics Section Scribts Start
let elements = document.querySelectorAll(".statistics-section .stat-num");
let statistics_section = document.querySelector(".statistics-section");
let started = false;

window.onscroll = function () {
    console.log("1");
    if (window.scrollY >= (statistics_section.offsetTop - 250)) {
        console.log("2");
        
        if (!started) {
            console.log("3");
            elements.forEach((num) => counter(num));
            
        }
        started = true;
    }
};

function counter(element) {
    console.log("4");
    let goal = element.dataset.goal;
    let count = setInterval(() => {
        element.textContent++;
        if (element.textContent == goal) {
            clearInterval(count);
        }
    }, 2000 / goal);
}

// Statistics Section Scribts Start

