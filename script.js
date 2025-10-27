document.addEventListener("DOMContentLoaded", () => {
    // Toggle hidden elements (show more)
    function toggleElements(selector, sectionTitle) {
      const hiddenElements = document.querySelectorAll(`${selector}.display-none`);
      if (!hiddenElements.length) return;
  
      const button = document.createElement("button");
      button.textContent = `Show More`;
      button.style.margin = "1em 0";
      button.style.padding = "0.5em 1.5em";
      button.style.border = "none";
      button.style.background = "#4327b4";
      button.style.color = "white";
      button.style.cursor = "pointer";
      button.style.borderRadius = "20px";
  
      let expanded = false;
      button.addEventListener("click", () => {
        hiddenElements.forEach(el => el.classList.toggle("display-none"));
        expanded = !expanded;
        button.textContent = expanded ? "Show Less" : "Show More";
      });
  
      const parent = document.querySelector(sectionTitle);
      if (parent) parent.appendChild(button);
    }
  
    toggleElements(".latest-release-col", ".latest-release");
    toggleElements(".popular-artist-entry", ".popular-artists");
    toggleElements(".stations-entry", ".stations");
    toggleElements(".language-song-entry", ".latest-language");
    toggleElements(".queue-entry:nth-child(n+5)", ".sidebar");
  
    // Search filtering
    const searchInput = document.querySelector(".search-box input");
    if (searchInput) {
      searchInput.addEventListener("input", () => {
        const query = searchInput.value.toLowerCase();
        document.querySelectorAll(".language-song-entry, .queue-entry").forEach(entry => {
          const text = entry.innerText.toLowerCase();
          entry.style.display = text.includes(query) ? "" : "none";
        });
      });
    }
  
    // Like heart toggle
    document.querySelectorAll(".like-icon i").forEach(icon => {
      icon.addEventListener("click", (e) => {
        e.preventDefault();
        icon.classList.toggle("fa-heart");
        icon.classList.toggle("fa-heart-o");
        icon.style.color = icon.classList.contains("fa-heart") ? "red" : "";
      });
    });
  });
  