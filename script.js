// Dynamic Menu
const menuItems = [
    { name: "🍛 Chicken Biryani", price: 8, category: "nonveg" },
    { name: "🍝 Spaghetti Carbonara", price: 10, category: "nonveg" },
    { name: "🥗 Caesar Salad", price: 7, category: "veg" },
    { name: "🍔 Cheeseburger", price: 9, category: "nonveg" },
    { name: "🍕 Margherita Pizza", price: 11, category: "veg" },
    { name: "🍤 Fried Prawns", price: 12, category: "nonveg" },
    { name: "🍲 Dal Tadka", price: 6, category: "veg" },
    { name: "🥩 Grilled Steak", price: 15, category: "nonveg" }
];

const menuList = document.getElementById("menuList");

function displayMenu(items) {
    menuList.innerHTML = "";
    items.forEach(item => {
        const div = document.createElement("div");
        div.classList.add("menu-item");
        div.innerText = `${item.name} - $${item.price}`;
        menuList.appendChild(div);
    });
}

function filterMenu(category) {
    if (category === "all") {
        displayMenu(menuItems);
    } else {
        displayMenu(menuItems.filter(item => item.category === category));
    }
}

displayMenu(menuItems);

// Image Modal
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.querySelector(".modal-close");

document.querySelectorAll(".gallery-images img").forEach(img => {
    img.addEventListener("click", function () {
        modal.style.display = "block";
        modalImg.src = this.src;
    });
});

closeBtn.onclick = () => modal.style.display = "none";

// Booking Form Validation
document.getElementById("bookingForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const people = document.getElementById("people").value;

    if (!name || !email || !date || !time || !people) {
        alert("Please fill all fields.");
        return;
    }
    alert(`Thank you, ${name}! Your table for ${people} guests is booked on ${date} at ${time}.`);
    document.getElementById("bookingForm").reset();
});

// Footer Year
document.getElementById("year").textContent = new Date().getFullYear();

// Active Link Highlight
window.addEventListener("scroll", () => {
    let sections = document.querySelectorAll("section");
    let scrollPos = window.scrollY + 200;
    sections.forEach(sec => {
        if (scrollPos >= sec.offsetTop && scrollPos < sec.offsetTop + sec.offsetHeight) {
            document.querySelectorAll("nav a").forEach(a => a.classList.remove("active"));
            document.querySelector(`nav a[href="#${sec.id}"]`).classList.add("active");
        }
    });
});
