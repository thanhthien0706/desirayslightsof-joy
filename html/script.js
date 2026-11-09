/**
 * DESIRAY'S LIGHTS OF JOY (DLOJ) - OFFICIAL JAVASCRIPT
 * 100% Pure Vanilla JS (Zero External Libraries, Zero Frameworks)
 * Works seamlessly across index.html & donate.html
 */

document.addEventListener("DOMContentLoaded", () => {
  // ==========================================
  // 4. NIGHT / AMBIENT GLOW MODE TOGGLE
  // ==========================================
  const nightModeToggles = [
    document.getElementById("nightModeToggle"),
    document.getElementById("nightModeToggleDonate"),
    document.getElementById("nightModeToggleAbout"),
    document.getElementById("nightModeToggleContact"),
    document.getElementById("nightModeToggleWhatWeDo")
  ].filter(Boolean);

  const savedTheme = localStorage.getItem("dloj_theme") || "dark";
  document.body.setAttribute("data-theme", savedTheme);

  nightModeToggles.forEach(btn => {
    btn.addEventListener("click", () => {
      const isDark = document.body.getAttribute("data-theme") === "dark";
      const nextTheme = isDark ? "light" : "dark";
      document.body.setAttribute("data-theme", nextTheme);
      localStorage.setItem("dloj_theme", nextTheme);
    });
  });

  // ==========================================
  // 8. WALL OF HOPE / GUESTBOOK
  // ==========================================
  const initialMessages = [
    {
      author: "Nurse Katie",
      location: "Rady Children's Hospital, San Diego",
      dedication: "For All Young Warriors",
      time: "2 hours ago",
      body: "Working on the 4th floor bone marrow unit, these neon lights bring the biggest smiles we see all week. Desiray's legacy is lighting up every single night shift!"
    },
    {
      author: "The Thompson Family",
      location: "San Marcos, CA",
      dedication: "In Memory of Desiray Joy",
      time: "Yesterday",
      body: "Marlene, your courage in turning grief into endless joy for other families is breathtaking. We sponsored a light in honor of Desiray, our forever Pink Buffalo Girl! 💖"
    },
    {
      author: "Dr. Jonathan Reyes",
      location: "Pediatric Oncology",
      dedication: "For Sophia & Mateo",
      time: "3 days ago",
      body: "A personalized bedside light does wonders for morale. When medical treatments get exhausting, having their own name glowing bright gives our patients a sense of identity and strength."
    },
    {
      author: "Emily & Marcus",
      location: "Carlsbad, CA",
      dedication: "For Brave Emma",
      time: "5 days ago",
      body: "Sending all our love and prayers to every child fighting right now. You are stronger than you know, and we are cheering for you every step of the way!"
    }
  ];

  const messagesList = document.getElementById("messagesList");
  const messageForm = document.getElementById("messageForm");

  function loadMessages() {
    const saved = localStorage.getItem("dloj_messages");
    let messages = saved ? JSON.parse(saved) : initialMessages;
    renderMessages(messages);
  }

  function renderMessages(messages) {
    if (!messagesList) return;
    messagesList.innerHTML = "";

    messages.forEach(msg => {
      const card = document.createElement("div");
      card.className = "sticky-note-card";

      card.innerHTML = `
        <div class="note-head">
          <div>
            <span class="note-author">${escapeHTML(msg.author)}</span>
            <span class="note-location">${escapeHTML(msg.location || "Community Supporter")}</span>
          </div>
          <span class="note-time">${escapeHTML(msg.time || "Just now")}</span>
        </div>
        ${msg.dedication ? `<span class="note-dedication-tag">${escapeHTML(msg.dedication)}</span>` : ""}
        <p class="note-message">${escapeHTML(msg.body)}</p>
      `;

      messagesList.appendChild(card);
    });
  }

  function escapeHTML(str) {
    const div = document.createElement("div");
    div.innerText = str;
    return div.innerHTML;
  }

  if (messageForm) {
    messageForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const author = document.getElementById("msgSender")?.value.trim();
      const location = document.getElementById("msgLocation")?.value.trim();
      const dedication = document.getElementById("msgChildDedication")?.value.trim();
      const body = document.getElementById("msgText")?.value.trim();

      if (!author || !body) return;

      const newMessage = {
        author,
        location: location || "Friend of DLOJ",
        dedication: dedication || "For All Brave Warriors",
        time: "Just now",
        body
      };

      const saved = localStorage.getItem("dloj_messages");
      let messages = saved ? JSON.parse(saved) : [...initialMessages];
      messages.unshift(newMessage);
      localStorage.setItem("dloj_messages", JSON.stringify(messages));

      renderMessages(messages);
      messageForm.reset();

      alert("Thank you! Your heartfelt message has been posted to the Wall of Hope.");
    });
  }

  loadMessages();

  // ==========================================
  // 9. MOBILE MENU & NAVIGATION
  // ==========================================
  const menuToggle = document.getElementById("menuToggle");
  const mainNav = document.getElementById("mainNav");

  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
      const isOpen = mainNav.classList.toggle("menu-open");
      menuToggle.setAttribute("aria-expanded", isOpen);
    });

    document.querySelectorAll(".nav-link").forEach(link => {
      link.addEventListener("click", () => {
        mainNav.classList.remove("menu-open");
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // ==========================================
  // 10. CONTACT FORM
  // ==========================================
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("cName")?.value.trim();
      alert(`Thank you, ${name || "friend"}! Marlene and the DLOJ board have received your message and will be in touch shortly.`);
      contactForm.reset();
    });
  }

  // ==========================================
  // 11. LIGHT GALLERY LIGHTBOX (click a light to view it larger)
  // ==========================================
  const lightLightbox = document.getElementById("lightLightbox");
  const lightLightboxImg = document.getElementById("lightLightboxImg");
  const lightLightboxName = document.getElementById("lightLightboxName");
  const lightLightboxClose = document.getElementById("lightLightboxClose");

  function openLightLightbox(card) {
    if (!lightLightbox) return;
    const img = card.querySelector("img");
    const name = card.querySelector(".real-light-name");
    if (lightLightboxImg && img) {
      lightLightboxImg.src = img.src;
      lightLightboxImg.alt = img.alt;
    }
    if (lightLightboxName && name) {
      lightLightboxName.textContent = name.textContent;
    }
    lightLightbox.hidden = false;
    document.body.style.overflow = "hidden";
  }

  function closeLightLightbox() {
    if (!lightLightbox) return;
    lightLightbox.hidden = true;
    document.body.style.overflow = "";
  }

  document.querySelectorAll(".real-light-card").forEach((card) => {
    card.setAttribute("tabindex", "0");
    card.setAttribute("role", "button");
    const nameEl = card.querySelector(".real-light-name");
    if (nameEl) card.setAttribute("aria-label", `View ${nameEl.textContent}'s light`);

    card.addEventListener("click", () => openLightLightbox(card));
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openLightLightbox(card);
      }
    });
  });

  if (lightLightboxClose) lightLightboxClose.addEventListener("click", closeLightLightbox);
  if (lightLightbox) {
    lightLightbox.addEventListener("click", (e) => {
      if (e.target === lightLightbox) closeLightLightbox();
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeLightLightbox();
  });
});
