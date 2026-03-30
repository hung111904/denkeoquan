const lantern = document.getElementById('lantern');

// Dừng quay khi rê chuột vào
lantern.addEventListener('mouseover', () => {
  lantern.style.animationPlayState = 'paused';
});

// Quay tiếp khi rê chuột ra
lantern.addEventListener('mouseout', () => {
  lantern.style.animationPlayState = 'running';
});
