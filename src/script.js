const countries = [
  { name: "Kenya", code: "KE" },
  { name: "Uganda", code: "UG" },
  { name: "Tanzania", code: "TZ" },
  { name: "Rwanda", code: "RW" },
  { name: "South Sudan", code: "SS" },
  { name: "Nigeria", code: "NG" },
  { name: "Ghana", code: "GH" },
  { name: "South Africa", code: "ZA" }
];

// document.addEventListener("DOMContentLoaded", () => {
//   const form = document.getElementById("registrationForm");
//   const countrySelect = document.getElementById("country");
//   const timeDisplay = document.getElementById("timeDisplay");

  // Populate country dropdown
  if (countrySelect) {
    countries.forEach(c => {
      const opt = document.createElement("option");
      opt.value = c.code;
      opt.textContent = c.name;
      countrySelect.appendChild(opt);
    });
  }
  console.log("countrySelect:", countrySelect); // should NOT be null


  // Registration Form Submission
  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const name = form.name.value.trim();
      const idNumber = form.idNumber.value.trim();
      const country = form.country.value;
      const role = form.role.value;
      const timestamp = new Date().toLocaleString();

      if (!name || !idNumber || !country || !role) {
        alert("Please fill in all required fields.");
        return;
      }

      const payload = { name, idNumber, country, role, timestamp };

      try {
        const res = await fetch("http://localhost:5000/registrations", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload)
        });

        const result = await res.json();
        if (res.ok) {
          if (timeDisplay) {
            timeDisplay.textContent = `✅ Registered at ${timestamp}`;
          }
          form.reset();
          showDashboard();
          fetchAndDisplayUsers();
        } else {
          alert("❌ Error: " + (result.error || "Registration failed."));
        }
      } catch (err) {
        alert("Network error.");
        console.error(err);
      }
    });
  }

  fetchAndDisplayUsers();
  initSlideshow();
  initBookingForm();
});

function showDashboard() {
  const reg = document.getElementById("registrationForm").closest("section");
  const dash = document.getElementById("dashboardSection");
  if (reg) reg.classList.add("hidden");
  if (dash) dash.classList.remove("hidden");
}

async function fetchAndDisplayUsers() {
  const tbody = document.getElementById("usersTableBody");
  if (!tbody) return;

  tbody.innerHTML = "<tr><td colspan='5' class='py-4 text-center'>Loading...</td></tr>";
  try {
    const res = await fetch("http://localhost:5000/registrations");
    const users = await res.json();

    if (!Array.isArray(users) || users.length === 0) {
      tbody.innerHTML = "<tr><td colspan='5' class='text-center text-gray-500 py-4'>No users yet.</td></tr>";
      return;
    }

    tbody.innerHTML = users.map(user => `
      <tr>
        <td class="p-2">${user.name}</td>
        <td class="p-2">${user.idNumber}</td>
        <td class="p-2">${user.country}</td>
        <td class="p-2">${user.role}</td>
        <td class="p-2">${user.timestamp}</td>
      </tr>`).join("");
  } catch (err) {
    tbody.innerHTML = "<tr><td colspan='5' class='text-center text-red-600 py-4'>Failed to load users.</td></tr>";
    console.error(err);
  }
}
// for home 
function initSlideshow() {
  const images = [
    // "https://images.pexels.com/photos/6182087/pexels-photo-6182087.jpeg",
    "https://images.pexels.com/photos/11369238/pexels-photo-11369238.jpeg",
    "https://images.pexels.com/photos/6414654/pexels-photo-6414654.jpeg",
  ];

  let index = 0;
  const img = document.getElementById("slideshowImage");
  if (!img) return;
  img.src = images[0];

  setInterval(() => {
    index = (index + 1) % images.length;
    img.classList.remove("opacity-100");
    img.classList.add("opacity-0");
    setTimeout(() => {
      img.src = images[index];
      img.classList.remove("opacity-0");
      img.classList.add("opacity-100");
    }, 800);
  }, 5000);
}

function initBookingForm() {
  const bookingForm = document.getElementById("bookingForm");
  const bookingStatus = document.getElementById("bookingStatus");

  if (!bookingForm) return;

  bookingForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const parentName = bookingForm.parentName.value.trim();
    const nannyName = bookingForm.nannyName.value.trim();
    const appointment = bookingForm.appointment.value;
    const email = bookingForm.email.value.trim();

    if (!parentName || !nannyName || !appointment || !email) {
      alert("Please fill all fields.");
      return;
    }

    const bookingPayload = { parentName, nannyName, appointment, email };

    try {
      const res = await fetch("http://localhost:5000/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bookingPayload)
      });

      if (res.ok) {
        bookingForm.reset();
        bookingStatus.textContent = "✅ Booking confirmed! Check your email.";
      } else {
        bookingStatus.textContent = "❌ Booking failed.";
      }
    } catch (err) {
      bookingStatus.textContent = "❌ Network error. Please try again later.";
      console.error(err);
    }
  });
}
