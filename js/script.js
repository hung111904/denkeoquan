const lantern = document.getElementById('lantern');

// Khi rê chuột vào bất kỳ mặt nào thì dừng quay
lantern.addEventListener('mouseover', () => {
  lantern.style.animationPlayState = 'paused';
});

// Khi rê chuột ra thì quay tiếp
lantern.addEventListener('mouseout', () => {
  lantern.style.animationPlayState = 'running';
});
