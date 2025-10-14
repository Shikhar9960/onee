function showHearts() {
  for (let i = 0; i < 20; i++) {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '✨';
    document.body.appendChild(heart);

    const size = Math.random() * 20 + 20;
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = size + 'px';
    heart.style.animationDuration = 4 + Math.random() * 3 + 's';
    heart.style.opacity = Math.random();

    setTimeout(() => {
      heart.remove();
    }, 6000);
  }
}
