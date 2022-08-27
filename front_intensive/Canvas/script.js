function draw() {
  const canvas = document.querySelector('#canvas');
  canvas.width = innerWidth;
  canvas.height = innerHeight;
  if (canvas.getContext) {
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = 'blue';
    ctx.fillRect(10, 10, 100, 50);

    ctx.lineWidth = 5;
    ctx.strokeStyle = 'black';
    ctx.strokeRect(10, 10, 100, 50);
    ctx.clearRect(20, 20, 80, 30);
  }
}
