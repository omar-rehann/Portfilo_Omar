let menuel = document.querySelector(".toogle i");
let asidee = document.querySelector(".aside");
const links = document.querySelectorAll('.aside nav a');
let dark = document.querySelector(".dark ");
let name = document.querySelector(".name");
let about = document.querySelector(".ab");
let twoname = document.querySelector(".text-start");
let pragrapg = document.querySelector(".pragraph");
let allbox = document.querySelectorAll(".change");
let last = document.querySelector(".end");
let elemtport = document.querySelector(".port");
let ser = document.querySelector(".ser");
const nums = document.querySelectorAll('.nums');
let boxone = document.querySelector(".boxone");
let boxtwo = document.querySelector(".boxtwo");
let boxthree = document.querySelector(".boxthree");
let boxh = document.querySelector(".boxone .nums");
let boxhh = document.querySelector(".boxtwo .nums");
let boxhhh = document.querySelector(".boxthree .nums");
let skillone = document.querySelector(".boxskillone");
let skillotwo = document.querySelector(".boxskilltwo");
let skillthree = document.querySelector(".boxskillthree");
let skillfour = document.querySelector(".boxskillfour");
let serone = document.querySelector(".boxserone");
let sertwo = document.querySelector(".boxsertwo");
let my = document.querySelector(".port");
let serthree = document.querySelector(".boxserthree");
let alltext = document.querySelector(".textone");
const inputs = document.querySelector('.con .form-controlonee');
const inputsone = document.querySelector('.con .form-controlone');
const inputstwo = document.querySelector('.con .form-controltwo');
var messageBox = document.getElementById('message');
let end = document.querySelector(".end");







menuel.onclick = function() {
    asidee.classList.toggle("active");
    if (asidee.classList.contains("active")) {
        menuel.classList.remove("fa-bars");
        menuel.classList.add("fa-x");



    } else {
        menuel.classList.remove("fa-x");

        menuel.classList.add("fa-bars");

    }
}

window.onscroll = function() {
    // About Section
    let section = document.querySelector(".about").offsetTop;
    let allnumber = document.querySelectorAll(".number .nums");

    allnumber.forEach((num) => {
        let goal = parseInt(num.dataset.goal);

        if (window.scrollY + window.innerHeight >= section && goal > parseInt(num.textContent)) {
            updatePlainNumber(num, goal);
        }
    });

    function updatePlainNumber(el, goal) {
        let current = parseInt(el.textContent);
        let increment = Math.ceil(goal / 100);

        let timer = setInterval(() => {
            current += increment;
            el.textContent = current;

            if (current >= goal) {
                el.textContent = goal;
                clearInterval(timer);
            }
        }, 50); // 50 milliseconds interval
    }

    // ---------------------------------------------------------------------------------------
    // Skill Section
    let section_two = document.querySelector(".skill").offsetTop;
    let allnumber_two = document.querySelectorAll(".number .numss");

    allnumber_two.forEach((num) => {
        let goal = parseInt(num.dataset.goal);

        if (window.scrollY + window.innerHeight >= section_two && goal > parseInt(num.textContent)) {
            updateWithPercentage(num, goal);
        }
    });

    function updateWithPercentage(el, goal) {
        let current_one = parseInt(el.textContent);
        let increment_one = Math.ceil(goal / 100);

        let timer = setInterval(() => {
            current_one += increment_one;
            el.textContent = current_one + "%";

            if (current_one >= goal) {
                el.textContent = goal + "%";
                clearInterval(timer);
            }
        }, 50); // 50 milliseconds interval
    }
}
dark.onclick = function() {
    asidee.classList.toggle("change");

    ser.classList.toggle("active");

    dark.classList.toggle("active");

    document.body.classList.toggle('active'

    );
    menuel.classList.toggle("active");

    twoname.classList.toggle('active');
    pragrapg.classList.toggle("active");
    name.classList.toggle("active");
    about.classList.toggle("active");
    boxone.classList.toggle("active");
    boxtwo.classList.toggle("active");
    boxthree.classList.toggle("active");
    boxh.classList.toggle("active");
    boxhh.classList.toggle("active");
    boxhhh.classList.toggle("active");
    skillone.classList.toggle("active");
    skillotwo.classList.toggle("active");
    skillthree.classList.toggle("active");
    skillfour.classList.toggle("active");
    serone.classList.toggle("active");
    sertwo.classList.toggle("active");
    serthree.classList.toggle("active");
    my.classList.toggle("active");
    alltext.classList.toggle("active");
    inputs.classList.toggle("active")
    inputsone.classList.toggle("active")
    inputstwo.classList.toggle("active");

    end.classList.toggle("active");
    messageBox.classList.toggle('bg-dark');
    messageBox.classList.toggle('text-light');
    messageBox.classList.toggle('border border-light-subtle"');

    links.classList.toggle("active");



    // label.classList.toggle('text-light');



}

links.forEach(link => {
    link.addEventListener('click', function() {
        document.querySelector('.aside').classList.toggle('hidden');
        asidee.classList.toggle("active");
        if (asidee.classList.contains("active")) {
            menuel.classList.remove("fa-bars");
            menuel.classList.add("fa-x");



        } else {
            menuel.classList.remove("fa-x");

            menuel.classList.add("fa-bars");

        }
    });
});