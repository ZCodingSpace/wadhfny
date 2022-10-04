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
const counters = document.querySelectorAll('.stat-num');
const speed = 50; // The lower the slower
let statistics_section = document.querySelector(".statistics-section");
let started = false;

console.log(statistics_section.offsetTop);

window.onscroll = function () {

    // Stats Increase Number
    if (window.scrollY >= (statistics_section.offsetTop - 250)) {

        if (!started) {
            counters.forEach(counter => {
                const updateCount = () => {
                    const target = +counter.getAttribute('data-goal');
                    const count = +counter.innerText;

                    // Lower inc to slow and higher to slow
                    const inc = target / speed;

                    console.log(inc);
                    // console.log(count);

                    // Check if target is reached
                    if (count < target) {
                        // Add inc to count and output in counter
                        counter.innerText = count + inc;
                        // Call function every ms
                        setTimeout(updateCount, 100);
                    } else {
                        counter.innerText = target;
                    }
                };

                updateCount();
            });
        }
        started = true;
    }
};

// Statistics Section Scribts Start

