// Description: JavaScript for index.html
function showNewsDetail() {
  document.getElementById('newsDetail').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}
function closeNewsDetail() {
  document.getElementById('newsDetail').classList.add('hidden');
  document.body.style.overflow = 'auto';
}
// Add click event to news cards
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('click', showNewsDetail);
});
// Scroll animation for project cards and header
function checkVisibility() {
const cards = document.querySelectorAll('.project-card');
const header = document.getElementById('header');
const scrollPosition = window.scrollY;
// Handle project cards visibility
cards.forEach(card => {
const rect = card.getBoundingClientRect();
const isVisible = rect.top <= window.innerHeight - 100;
if (isVisible) {
card.classList.add('visible');
}
});
// Handle header background
if (scrollPosition > 50) {
header.classList.remove('bg-transparent');
header.classList.add('bg-white', 'shadow-sm');
document.querySelectorAll('.nav-link').forEach(link => {
link.classList.remove('text-white', 'hover:text-white/80');
link.classList.add('text-gray-700', 'hover:text-primary');
});
document.querySelectorAll('.fa-search, .fa-user, .fa-bars').forEach(icon => {
icon.classList.remove('text-white');
icon.classList.add('text-gray-600');
});
document.querySelectorAll('button').forEach(btn => {
btn.classList.remove('hover:bg-white/10');
btn.classList.add('hover:bg-gray-100');
});
document.querySelector('.logo-text').classList.remove('text-white');
} else {
header.classList.add('bg-transparent');
header.classList.remove('bg-white', 'shadow-sm');
document.querySelectorAll('.nav-link').forEach(link => {
link.classList.add('text-white', 'hover:text-white/80');
link.classList.remove('text-gray-700', 'hover:text-primary');
});
document.querySelectorAll('.fa-search, .fa-user, .fa-bars').forEach(icon => {
icon.classList.add('text-white');
icon.classList.remove('text-gray-600');
});
document.querySelectorAll('button').forEach(btn => {
btn.classList.add('hover:bg-white/10');
btn.classList.remove('hover:bg-gray-100');
});
document.querySelector('.logo-text').classList.remove('text-white');
}
}
window.addEventListener('scroll', checkVisibility);
window.addEventListener('load', checkVisibility);
function showNewsDetail() {
  document.getElementById('newsDetail').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}
function closeNewsDetail() {
  document.getElementById('newsDetail').classList.add('hidden');
  document.body.style.overflow = 'auto';
}
// Add click event to news cards
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('click', showNewsDetail);
});




