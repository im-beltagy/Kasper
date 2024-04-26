const nav = document.getElementById("nav"),
  navList = Array.from(nav.children),
  navIcon = document.getElementById("nav-icon"),
  searchInput = document.getElementById("search-input"),
  searchBTN = document.getElementById("search-btn");

// Give (li) Class = "active"
navList.forEach((item) => {
  item.onclick = function () {
    if (item.classList.contains("active") === false) {
      document.querySelector("li.active").classList.remove("active");
      item.classList.add("active");
    }
  };
});
// Give (nav > ul) Class = "active"
navIcon.onclick = function () {
  if (
    searchInput.classList.contains("active") &&
    nav.classList.contains("active") === false
  ) {
    // Close (search input) If It's Open
    searchInput.classList.remove("active");
    nav.classList.add("active");
  } else {
    nav.classList.toggle("active");
  }
  this.classList.add("active");
  setTimeout(() => {
    this.classList.remove("active");
  }, 800);
};
// Give (search input) Class = "active"
searchBTN.onclick = function () {
  if (
    nav.classList.contains("active") &&
    searchInput.classList.contains("active") === false
  ) {
    // Close (nav > ul) If It's Open
    nav.classList.remove("active");
    searchInput.classList.add("active");
  } else {
    searchInput.classList.toggle("active");
  }
};
