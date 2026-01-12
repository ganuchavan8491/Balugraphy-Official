import { useEffect } from "react";
import * as THREE from "three";
import { gsap } from "gsap";
import "../../styles/cursor.css";

export default function Cursor() {

  useEffect(() => {
    let scene, cam, renderer, cameraGroup, recLight;
    let targetX = 0, targetY = 0, curX = 0, curY = 0;

    function init() {
      scene = new THREE.Scene();
      cam = new THREE.PerspectiveCamera(
        45,
        window.innerWidth / window.innerHeight,
        1,
        1000
      );
      cam.position.z = 350;

      renderer = new THREE.WebGLRenderer({
        canvas: document.getElementById("camera-canvas"),
        antialias: true,
        alpha: true,
      });

      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);

      cameraGroup = new THREE.Group();
      scene.add(cameraGroup);

      // --- DETAILED 3D CAMERA DESIGN ---

      const bodyMat = new THREE.MeshPhongMaterial({ color: 0x1a1a1a, shininess: 80 });
      const body = new THREE.Mesh(new THREE.BoxGeometry(100, 65, 25), bodyMat);
      cameraGroup.add(body);

      const grip = new THREE.Mesh(
        new THREE.BoxGeometry(25, 65, 32),
        new THREE.MeshPhongMaterial({ color: 0x111111 })
      );
      grip.position.x = 42;
      cameraGroup.add(grip);

      const dial = new THREE.Mesh(
        new THREE.CylinderGeometry(10, 10, 6, 24),
        new THREE.MeshPhongMaterial({ color: 0x333333 })
      );
      dial.position.set(20, 32, 0);
      cameraGroup.add(dial);

      const shutter = new THREE.Mesh(
        new THREE.CylinderGeometry(5, 5, 4, 16),
        new THREE.MeshPhongMaterial({ color: 0xcc0000 })
      );
      shutter.position.set(40, 32, 8);
      cameraGroup.add(shutter);

      const vf = new THREE.Mesh(
        new THREE.BoxGeometry(20, 12, 10),
        new THREE.MeshPhongMaterial({ color: 0x050505 })
      );
      vf.position.y = 35;
      cameraGroup.add(vf);

      const lcd = new THREE.Mesh(
        new THREE.PlaneGeometry(70, 45),
        new THREE.MeshPhongMaterial({ color: 0x000000, emissive: 0x001122, shininess: 100 })
      );
      lcd.position.set(-8, 0, 13);
      cameraGroup.add(lcd);

      const lens = new THREE.Mesh(
        new THREE.CylinderGeometry(25, 28, 20, 32),
        new THREE.MeshPhongMaterial({ color: 0x0a0a0a })
      );
      lens.rotation.x = Math.PI / 2;
      lens.position.z = -20;
      cameraGroup.add(lens);

      recLight = new THREE.Mesh(
        new THREE.SphereGeometry(1.5, 16, 16),
        new THREE.MeshBasicMaterial({ color: 0xff0000 })
      );
      recLight.position.set(-35, 18, 14);
      cameraGroup.add(recLight);

      scene.add(new THREE.AmbientLight(0xffffff, 0.7));
      const light = new THREE.DirectionalLight(0xffffff, 0.8);
      light.position.set(5, 5, 10);
      scene.add(light);

      updateCameraScale();
    }

    function updateCameraScale() {
      const s = window.innerWidth < 168 ? 0.5 : 0.75;
      cameraGroup.scale.set(s, s, s);
    }

    function handleMove(px, py) {
      targetX = px - window.innerWidth / 2;
      targetY = py - window.innerHeight / 2;
    }

    window.addEventListener("mousemove", (e) => handleMove(e.clientX, e.clientY));
    window.addEventListener("touchmove", (e) =>
      handleMove(e.touches[0].clientX, e.touches[0].clientY)
    );

    window.addEventListener("mousedown", () => {
      document.getElementById("flash").style.opacity = 1;
      setTimeout(() => (document.getElementById("flash").style.opacity = 0), 80);
      gsap.to(cameraGroup.scale, { x: "-=0.1", y: "-=0.1", duration: 0.1, yoyo: true, repeat: 1 });
    });

    function animate(time) {
      requestAnimationFrame(animate);

      curX += (targetX - curX) * 0.12;
      curY += (targetY - curY) * 0.12;

      cameraGroup.position.x = curX * 0.65;
      cameraGroup.position.y = -curY * 0.65;

      cameraGroup.rotation.y = curX * 0.002;
      cameraGroup.rotation.x = curY * 0.002;

      recLight.visible = Math.sin(time * 0.005) > 0;

      renderer.render(scene, cam);
    }

    window.addEventListener("resize", () => {
      cam.aspect = window.innerWidth / window.innerHeight;
      cam.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      updateCameraScale();
    });

    init();
    animate();

  }, []);

  return (
    <>
      <div id="flash"></div>
      <canvas id="camera-canvas"></canvas>
    </>
  );
}
