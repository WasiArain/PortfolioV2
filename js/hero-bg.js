export function initHeroBg() {
  // Disable animation on mobile devices or if the user prefers reduced motion for performance
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
    window.matchMedia('(max-width: 768px)').matches) {
    return; // Skip on mobile or reduced motion for perf
  }

  // Target the canvas element for rendering the WebGL scene
  const canvas = document.getElementById('hero-canvas');
  if (!canvas || !window.THREE) return;

  // Initialize Three.js scene, camera, and renderer
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });

  // Set renderer dimensions and scale for high-DPI displays
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // Particles Setup
  const particlesGeometry = new THREE.BufferGeometry();
  // Reduce particle count on smaller screens
  const particlesCount = window.innerWidth > 1024 ? 600 : 300;

  // Arrays to hold particle positions and colors
  const posArray = new Float32Array(particlesCount * 3);
  const colorsArray = new Float32Array(particlesCount * 3);

  // Brand colors for the particle gradient
  const color1 = new THREE.Color('#DC143C');
  const color2 = new THREE.Color('#8A2BE2');

  // Generate random positions and blended colors for each particle
  for (let i = 0; i < particlesCount * 3; i += 3) {
    // Random position within a 15-unit cube centered at the origin
    posArray[i] = (Math.random() - 0.5) * 15;
    posArray[i + 1] = (Math.random() - 0.5) * 15;
    posArray[i + 2] = (Math.random() - 0.5) * 15;

    // Linearly interpolate between the two brand colors
    const mixedColor = color1.clone().lerp(color2, Math.random());
    colorsArray[i] = mixedColor.r;
    colorsArray[i + 1] = mixedColor.g;
    colorsArray[i + 2] = mixedColor.b;
  }

  // Attach attributes to the geometry
  particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
  particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colorsArray, 3));

  // Define the material properties for the particles
  const material = new THREE.PointsMaterial({
    size: 0.05,
    vertexColors: true,
    transparent: true,
    opacity: 0.8,
    blending: THREE.AdditiveBlending // Creates a glowing effect when particles overlap
  });

  // Create the point cloud mesh and add it to the scene
  const particlesMesh = new THREE.Points(particlesGeometry, material);
  scene.add(particlesMesh);

  // Position the camera so it looks at the particles
  camera.position.z = 5;

  // Mouse tracking variables
  let mouseX = 0;
  let mouseY = 0;
  let targetX = 0;
  let targetY = 0;

  const windowHalfX = window.innerWidth / 2;
  const windowHalfY = window.innerHeight / 2;

  // Track mouse movement to create parallax interaction
  document.addEventListener('mousemove', (event) => {
    mouseX = (event.clientX - windowHalfX);
    mouseY = (event.clientY - windowHalfY);
  });

  const clock = new THREE.Clock();

  // Animation loop
  function animate() {
    requestAnimationFrame(animate);

    // Pause animation when the tab is not visible to save CPU/GPU
    if (document.visibilityState !== 'visible') return;

    const elapsedTime = clock.getElapsedTime();

    // Calculate target rotation based on mouse position
    targetX = mouseX * 0.001;
    targetY = mouseY * 0.001;

    // Apply continuous slow rotation
    particlesMesh.rotation.y += 0.002;
    particlesMesh.rotation.x += 0.001;

    // Apply eased rotation towards the mouse target
    particlesMesh.rotation.y += 0.05 * (targetX - particlesMesh.rotation.y);
    particlesMesh.rotation.x += 0.05 * (targetY - particlesMesh.rotation.x);

    // Add a subtle vertical drift over time
    particlesMesh.position.y = Math.sin(elapsedTime * 0.5) * 0.2;

    // Render the scene
    renderer.render(scene, camera);
  }

  animate();

  // Update camera and renderer on window resize
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
}
