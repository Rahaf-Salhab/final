
/*my acount*/

function togglePassword() {
    var passwordInput = document.getElementById("password");
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
}
 


/*our team*/
const teamMembers = [
    { name: "Dani Stairs", role: "Member", image: "./assets/img/team/don.png" },
    { name: "Cary Ander", role: "Operation", image: "./assets/img/team/cory.png" },
    { name: "Alex Didas", role: "Member", image: "./assets/img/team/maya.png" },
    { name: "Sue Vaneer", role: "Director", image: "./assets/img/team/sue.png" },
    { name: "Jolia Wallace", role: "Service Officer", image: "./assets/img/team/julia.png" },
    { name: "Ali Turner", role: "Service Manager", image: "./assets/img/team/paige.png" },
    { name: "Anna Sthesia", role: "Head Chef", image: "./assets/img/team/anna.png" },
    { name: "Carla Hayek", role: "Training Manager", image: "./assets/img/team/carla.png" }
];

const teamContainer = document.getElementById("team-container");

 teamMembers.forEach(member => {
    let card = document.createElement("div");
    card.classList.add("col-md-4", "col-lg-3", "col-sm-6", "mb-4");

    card.innerHTML = `
        <div class="card text-center shadow">
            <img src="${member.image}" class="card-img-top" alt="${member.name}">
            <div class="card-body">
                <h5 class="card-title">${member.name}</h5>
                <p class="card-text">${member.role}</p>
                <div class="social-icons">
                    <a href="#" class="facebook"><i class="fab fa-facebook-f"></i></a>
                    <a href="#" class="twitter"><i class="fab fa-twitter"></i></a>
                    <a href="#" class="linkedin"><i class="fab fa-linkedin-in"></i></a>
                </div>
            </div>
        </div>
    `;

    teamContainer.appendChild(card);
});

 document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".card").forEach(card => {
        card.addEventListener("mouseover", function () {
            this.classList.add("shadow-lg");
        });

        card.addEventListener("mouseleave", function () {
            this.classList.remove("shadow-lg");
        });
    });
});