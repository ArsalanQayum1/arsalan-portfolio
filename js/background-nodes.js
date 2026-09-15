/**
 * background-nodes.js
 * High-performance, lightweight canvas particle network representing
 * cloud infrastructure nodes and subtle data packet flows.
 */

(function () {
  'use strict';

  const canvas = document.getElementById('network-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width, height;
  let particles = [];
  let packets = [];
  let mouse = { x: null, y: null, radius: 150 };

  // Check reduced motion preference
  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (mediaQuery.matches) return;

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }

  window.addEventListener('resize', resize);
  resize();

  window.addEventListener('mousemove', function (e) {
    mouse.x = e.x;
    mouse.y = e.y;
  });

  window.addEventListener('mouseleave', function () {
    mouse.x = null;
    mouse.y = null;
  });

  // Node particle representing server / cluster node
  class NodeParticle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.5;
      this.vy = (Math.random() - 0.5) * 0.5;
      this.radius = Math.random() * 2 + 1.2;
      this.baseAlpha = Math.random() * 0.4 + 0.2;
      this.isCluster = Math.random() > 0.85; // some are prominent gateway nodes
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;

      // Subtle mouse interaction
      if (mouse.x !== null) {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          this.x -= (dx / dist) * force * 1.5;
          this.y -= (dy / dist) * force * 1.5;
        }
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = this.isCluster ? 'rgba(6, 182, 212, 0.85)' : 'rgba(56, 189, 248, 0.5)';
      ctx.fill();

      if (this.isCluster) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius * 2.5, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(6, 182, 212, 0.2)';
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    }
  }

  // Data packet traveling across connection lines
  class DataPacket {
    constructor(p1, p2) {
      this.p1 = p1;
      this.p2 = p2;
      this.progress = 0;
      this.speed = Math.random() * 0.015 + 0.008;
      this.dead = false;
    }

    update() {
      this.progress += this.speed;
      if (this.progress >= 1) {
        this.dead = true;
      }
    }

    draw() {
      const x = this.p1.x + (this.p2.x - this.p1.x) * this.progress;
      const y = this.p1.y + (this.p2.y - this.p1.y) * this.progress;

      ctx.beginPath();
      ctx.arc(x, y, 1.8, 0, Math.PI * 2);
      ctx.fillStyle = '#22d3ee';
      ctx.shadowColor = '#06b6d4';
      ctx.shadowBlur = 8;
      ctx.fill();
      ctx.shadowBlur = 0;
    }
  }

  function init() {
    particles = [];
    packets = [];
    const count = Math.min(Math.floor((width * height) / 22000), 65);
    for (let i = 0; i < count; i++) {
      particles.push(new NodeParticle());
    }
  }

  init();
  window.addEventListener('resize', init);

  let lastPacketSpawn = 0;

  function animate(timestamp) {
    ctx.clearRect(0, 0, width, height);

    // Update and draw particles
    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();
    }

    // Connect nodes within range
    const maxDist = 135;
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < maxDist) {
          const alpha = (1 - dist / maxDist) * 0.22;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(56, 189, 248, ${alpha})`;
          ctx.lineWidth = 0.85;
          ctx.stroke();

          // Spawn packet occasionally
          if (timestamp - lastPacketSpawn > 600 && Math.random() < 0.05 && packets.length < 12) {
            packets.push(new DataPacket(particles[i], particles[j]));
            lastPacketSpawn = timestamp;
          }
        }
      }
    }

    // Update and draw packets
    for (let i = packets.length - 1; i >= 0; i--) {
      packets[i].update();
      packets[i].draw();
      if (packets[i].dead) {
        packets.splice(i, 1);
      }
    }

    requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);
})();
