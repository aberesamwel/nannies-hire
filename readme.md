# 👸 MyNanny – Find Trusted Nannies Near You

A modern, responsive web application that connects families with trusted, background-checked nannies. This project is built using **HTML**, **Tailwind CSS**, and **JavaScript**, with a mock backend using **JSON Server** (`db.json`). It includes a working registration system, a dynamic slideshow banner, and a dashboard to display registered users.

---

## 🌐 Live Preview

<!-- > *(https://github.com/aberesamwel/nannies-hire)* -->

---

## 📁 Project Structure

```
my-nanny-app/
├── index.html               # Main HTML file
├── index.css                # Tailwind CSS (compiled)
├── script.js                # JavaScript logic for form, slideshow, etc.
├── db.json                  # JSON Server backend (fake database)
└── README.md                # You're here!
```

---

## 🚀 Features

### ✅ General

* Fully responsive design (mobile, tablet, desktop)
* Tailwind CSS styling for sleek UI
* Dynamic slideshow banner with fading image transitions
* Intuitive registration and dashboard interface

### 👥 Registration System

* Users can register as a **Parent** or **Nanny**
* Inputs: Name, ID Number, Country, Role, Optional Photo
* Form validation and visual feedback on submission
* Timestamped registration using local time
* Auto-display of all users in a dashboard (fetched from backend)

### 🌍 Dynamic Country Selector

* Country dropdown populated from a predefined array of African countries
* Enhances user experience with localization

### 🎮 Slideshow Banner

* Rotates between 3–4 curated images using fade animation
* Text overlay with CTA button encouraging sign-up

### 🗓️ Booking System *(Coming Soon)*

* Planned: Calendar for scheduling appointments between parents and nannies
* Will support booking confirmations, reminders via SMS/email APIs

---

## 🧪 Fake Backend with JSON Server

To simulate a real backend for development and testing, we use [JSON Server](https://github.com/typicode/json-server).

### 📦 Step-by-step setup:

1. **Install JSON Server globally:**

```bash
npm install -g json-server
```

2. **Run the server using the included db.json:**

```bash
json-server --watch db.json --port 5000
```

3. **API Endpoints Available:**

* `GET /registrations` – fetch all registered users
* `POST /registrations` – add a new registration

✅ Accessible at: `http://localhost:5000/registrations`

---

### 🗓️ Sample `db.json`

```json
{
  "registrations": [
    {
      "name": "Jane Doe",
      "idNumber": "12345678",
      "country": "KE",
      "role": "Nanny",
      "timestamp": "2025-06-26 11:30 AM"
    }
  ]
}
```

---

## 💻 How to Run the Project

1. **Clone or download** this project folder.
2. Start the **JSON Server** backend with:

   ```bash
   json-server --watch db.json --port 5000
   ```
3. Open `index.html` in your browser.
4. Fill out the registration form to test submitting and storing data.
5. All users will appear in the dashboard (right panel).

---

## 🖼️ Screenshots (Add If Needed)

To include screenshots, save them inside a `/screenshots` folder and reference them like this:

```
| Registration Form | Dashboard | Slideshow |
|------------------|-----------|-----------|
| ![form](./screenshots/form.png) | ![dashboard](./screenshots/dashboard.png) | ![slideshow](./screenshots/slideshow.png) |
```

---

## 🛠️ Technologies Used

| Tool / Library | Purpose                              |
| -------------- | ------------------------------------ |
| HTML5          | Markup structure                     |
| Tailwind CSS   | Responsive and utility-first styling |
| JavaScript     | Frontend logic                       |
| JSON Server    | Fake backend for API simulation      |
| Font Awesome   | Social icons                         |
| Pexels         | Royalty-free images for slideshow    |

---

## 📱 Social Media Links

You can find MyNanny on:

* 🌐 Website: [https://mynanny.co.ke](https://mynanny.co.ke)
* 📘️ [Facebook](https://facebook.com/mynanny)
* 📸 [Instagram](https://instagram.com/mynanny)
* 🕊️ [Twitter](https://twitter.com/mynanny)
* 💼 [LinkedIn](https://linkedin.com/company/mynanny)

---

## 🤝 Credits

* [Pexels](https://pexels.com) – Free stock photos
* [Tailwind CSS](https://tailwindcss.com) – Styling framework
* [Font Awesome](https://fontawesome.com) – Icons
* [JSON Server](https://github.com/typicode/json-server) – Mock API backend

---

## 📩 Contact Us

For questions, feedback, or support:

* ✉️ Email: [info@mynanny.co.ke](mailto:info@mynanny.co.ke)
* 🌍 Website: [https://mynanny.co.ke](https://mynanny.co.ke)

---

## 📄 License

This project is for educational and demo purposes only.
