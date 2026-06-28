// ============================
// Welcome Message
// ============================

window.onload = function () {
    alert("🏋️ Welcome to FitLife Gym!");
};

// ============================
// Contact Form Validation
// ============================

const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let mobile = document.getElementById("mobile").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    // Check Empty Fields
    if (name === "" || mobile === "" || email === "" || message === "") {
        alert("⚠ Please fill all the fields.");
        return;
    }

    // Mobile Number Validation
    if (!/^[6-9]\d{9}$/.test(mobile)) {
        alert("⚠ Please enter a valid 10-digit mobile number.");
        return;
    }

    // Email Validation
    if (!/^\S+@\S+\.\S+$/.test(email)) {
        alert("⚠ Please enter a valid email address.");
        return;
    }

    // Success Message
    alert("✅ Thank You, " + name + "! Your message has been sent successfully.");

    // Reset Form
    form.reset();
});

// ============================
// Membership Plan Buttons
// ============================

const planButtons = document.querySelectorAll(".plan button");

planButtons.forEach(function(button){

    button.addEventListener("click", function(){

        let plan = this.parentElement.querySelector("h3").innerText;

        alert("🎉 You selected the " + plan + " Membership Plan.");

    });

});

// ============================
// Navbar Shadow on Scroll
// ============================

const header = document.querySelector("header");

window.addEventListener("scroll", function(){

    if(window.scrollY > 50){
        header.style.boxShadow = "0 5px 15px rgba(0,0,0,0.5)";
    }else{
        header.style.boxShadow = "none";
    }

});

// ============================
// Scroll To Top Button
// ============================

const topBtn = document.createElement("button");

topBtn.innerHTML = "⬆";
topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.bottom = "20px";
topBtn.style.right = "20px";
topBtn.style.padding = "12px 18px";
topBtn.style.fontSize = "20px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.cursor = "pointer";
topBtn.style.background = "#ff6600";
topBtn.style.color = "#fff";
topBtn.style.display = "none";

window.addEventListener("scroll", function(){

    if(window.scrollY > 300){
        topBtn.style.display = "block";
    }else{
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", function(){

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});