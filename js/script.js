const canvas = document.getElementById('waveCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const colors = ['#FF6B6B4A', '#4ECDC44A', '#C7F4644A', '#FFE66D4A', '#6B5B954A'];

let waves = [];

function createWave(x, y) {
	const wave = {
		x: x,
		y: y, 
		radius: 0,
		maxRadius: 200,
		color: colors[Math.floor(Math.random() * colors.length)],
		alpha: 1, 
	};
	waves.push(wave);
}

function animateWaves() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	waves.forEach((wave, index) => {
		ctx.beginPath();
		ctx.arc(wave.x, wave.y, wave.radius, 0, Math.PI * 2, false);
		ctx.strokeStyle = wave.color;
		ctx.globalAlpha = wave.alpha; 
		ctx.lineWidth = 2;
		ctx.stroke();
		ctx.closePath();

		wave.radius += 2;
		wave.alpha -= 0.01;

		if (wave.alpha <= 0) {
			waves.splice(index, 1);
		}
	});

	requestAnimationFrame(animateWaves);
}

animateWaves();

window.addEventListener('mousemove', (e) => {
	createWave(e.clientX, e.clientY);
});

window.addEventListener('resize', () => {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
});


let toggle = true;
setInterval(() => {
	document.title = toggle ? "🚀 标题 🤟" : "🤟 标题 🚀";
	toggle = !toggle;
}, 1000);