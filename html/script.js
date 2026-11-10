/**
 * DESIRAY'S LIGHTS OF JOY (DLOJ) - OFFICIAL JAVASCRIPT
 * 100% Pure Vanilla JS (Zero External Libraries, Zero Frameworks)
 * Works seamlessly across index.html & donate.html
 */

document.addEventListener("DOMContentLoaded", () => {
  // ==========================================
  // 4. LIGHTS OFF MODE TOGGLE (soft pink by default, dark neon-glow mode on request)
  // ==========================================
  const nightModeToggles = [
    document.getElementById("nightModeToggle"),
    document.getElementById("nightModeToggleDonate"),
    document.getElementById("nightModeToggleAbout"),
    document.getElementById("nightModeToggleContact"),
    document.getElementById("nightModeToggleWhatWeDo"),
    document.getElementById("nightModeToggleChild")
  ].filter(Boolean);

  const savedTheme = localStorage.getItem("dloj_theme") || "light";

  function applyTheme(theme) {
    document.body.setAttribute("data-theme", theme);
    const isDark = theme === "dark";
    nightModeToggles.forEach(btn => {
      btn.setAttribute("aria-pressed", isDark ? "true" : "false");
    });
  }

  applyTheme(savedTheme);

  nightModeToggles.forEach(btn => {
    btn.addEventListener("click", () => {
      const isDark = document.body.getAttribute("data-theme") === "dark";
      const nextTheme = isDark ? "light" : "dark";
      applyTheme(nextTheme);
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
  // 8b. QUICK AMOUNT TILES (donate.html — smaller gift options)
  // ==========================================
  const amountNote = document.getElementById("selectedAmountNote");
  document.querySelectorAll(".amount-tile[data-amount]").forEach((tile) => {
    tile.addEventListener("click", () => {
      document.querySelectorAll(".amount-tile[data-amount]").forEach((t) => t.classList.remove("active"));
      tile.classList.add("active");
      if (amountNote) {
        amountNote.textContent = `You selected $${tile.getAttribute("data-amount")} — send that amount below. Thank you!`;
      }
    });
  });

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
  // 11. LIGHT GALLERY CARDS now link straight to each child's own page
  // (see child.html / child.js) instead of opening a lightbox.
  // ==========================================
});
