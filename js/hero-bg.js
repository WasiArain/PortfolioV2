export function initHeroBg() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || 
      window.matchMedia('(max-width: 768px)').matches) {
    return; // Skip on mobile or reduced motion for perf
  }

  const canvas = document.getElementById('hero-canvas');
  if (!canvas || !window.THREE) return;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // Particles
  const particlesGeometry = new THREE.BufferGeometry();
  const particlesCount = window.innerWidth > 1024 ? 600 : 300;
  
  const posArray = new Float32Array(particlesCount * 3);
  const colorsArray = new Float32Array(particlesCount * 3);
  
  // Brand colors
  const color1 = new THREE.Color('#DC143C');
  const color2 = new THREE.Color('#8A2BE2');

  for(let i = 0; i < particlesCount * 3; i+=3) {
    posArray[i] = (Math.random() - 0.5) * 15;
    posArray[i+1] = (Math.random() - 0.5) * 15;
    posArray[i+2] = (Math.random() - 0.5) * 15;

    const mixedColor = color1.clone().lerp(color2, Math.random());
    colorsArray[i] = mixedColor.r;
    colorsArray[i+1] = mixedColor.g;
    colorsArray[i+2] = mixedColor.b;
  }

  particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
  particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colorsArray, 3));

  const material = new THREE.PointsMaterial({
    size: 0.05,
    vertexColors: true,
    transparent: true,
    opacity: 0.8,
    blending: THREE.AdditiveBlending
  });

  const particlesMesh = new THREE.Points(particlesGeometry, material);
  scene.add(particlesMesh);

  camera.position.z = 5;

  let mouseX = 0;
  let mouseY = 0;
  let targetX = 0;
  let targetY = 0;

  const windowHalfX = window.innerWidth / 2;
  const windowHalfY = window.innerHeight / 2;

  document.addEventListener('mousemove', (event) => {
    mouseX = (event.clientX - windowHalfX);
    mouseY = (event.clientY - windowHalfY);
  });

  const clock = new THREE.Clock();

  function animate() {
    requestAnimationFrame(animate);
    
    // Visibility pause
    if (document.visibilityState !== 'visible') return;
    
    const elapsedTime = clock.getElapsedTime();

    targetX = mouseX * 0.001;
    targetY = mouseY * 0.001;

    particlesMesh.rotation.y += 0.002;
    particlesMesh.rotation.x += 0.001;

    particlesMesh.rotation.y += 0.05 * (targetX - particlesMesh.rotation.y);
    particlesMesh.rotation.x += 0.05 * (targetY - particlesMesh.rotation.x);

    // Subtle drift
    particlesMesh.position.y = Math.sin(elapsedTime * 0.5) * 0.2;

    renderer.render(scene, camera);
  }

  animate();

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
}
