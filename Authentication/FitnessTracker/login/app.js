// JavaScript to toggle the sidebar visibility
const hamburgerMenu = document.getElementById('hamburger-menu');
const sidebar = document.getElementById('sidebar');

// Toggle sidebar when hamburger menu is clicked
hamburgerMenu.addEventListener('click', () => {
  const sidebarLeft = sidebar.style.left;
  if (sidebarLeft === '0px') {
    sidebar.style.left = '-250px'; // Hide sidebar
  } else {
    sidebar.style.left = '0'; // Show sidebar
  }
});
