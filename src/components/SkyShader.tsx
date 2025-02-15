import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const SkyShader = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Create noise texture
    const createNoiseTexture = () => {
      const size = 256;
      const data = new Uint8Array(size * size * 4);
      for (let i = 0; i < size * size * 4; i += 4) {
        const noise = Math.random() * 255;
        data[i] = noise;
        data[i + 1] = noise;
        data[i + 2] = noise;
        data[i + 3] = 255;
      }
      return new THREE.DataTexture(data, size, size, THREE.RGBAFormat);
    };

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
    camera.position.z = 1;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Create noise texture
    const noiseTexture = createNoiseTexture();
    noiseTexture.needsUpdate = true;

    // Shader uniforms
    const uniforms = {
      time: { value: 0.0 },
      resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
      mouse: { value: new THREE.Vector2(0.5, 0.5) },
      noiseTexture: { value: noiseTexture }
    };

    // Vertex shader
    const vertexShader = `
      varying vec2 vUv;
      void main() {
          vUv = uv;
          gl_Position = vec4(position, 1.0);
      }
    `;

    // Fragment shader
    const fragmentShader = `
      uniform vec2 resolution;
      uniform float time;
      uniform vec2 mouse;
      uniform sampler2D noiseTexture;
      
      varying vec2 vUv;

      #define fov tan(radians(60.0))
      #define cameraheight 5e1

      const float R0 = 6360e3;
      const float Ra = 6380e3;
      const float I = 10.;
      const float SI = 5.;
      const float g = 0.45;
      const float g2 = g * g;
      const float s = 0.999;
      const float s2 = s;
      const float Hr = 8e3;
      const float Hm = 1.2e3;

      // Cloud constants
      const int cld_march_steps = 50;
      const float cld_coverage = 0.4125; // Increased coverage threshold for larger formations
      const float cld_thick = 120.0; // Increased thickness
      const float cld_absorb_coeff = 0.8; // Reduced absorption for better visibility

      vec3 bM = vec3(21e-6);
      vec3 bR = vec3(5.8e-6, 13.5e-6, 33.1e-6);
      vec3 C = vec3(0., -R0, 0.);
      vec3 Ds;

      vec3 cld_wind_dir = vec3(0.0, 0.0, -1.0);
      vec3 cld_sun_dir = vec3(0.0, 0.0, -1.0);

      float hash21(vec2 n) { 
          return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453); 
      }

      float noise(in vec2 v) {
          return texture2D(noiseTexture, (v + 0.5) / 256.0).r;
      }

      vec3 mod289(vec3 x) {
        return x - floor(x * (1.0 / 289.0)) * 289.0;
      }

      vec4 mod289(vec4 x) {
        return x - floor(x * (1.0 / 289.0)) * 289.0;
      }

      vec4 permute(vec4 x) {
        return mod289(((x*34.0)+1.0)*x);
      }

      vec4 taylorInvSqrt(vec4 r) {
        return 1.79284291400159 - 0.85373472095314 * r;
      }

      float snoise(vec3 v) {
        const vec2 C = vec2(1.0/6.0, 1.0/3.0);
        const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

        vec3 i  = floor(v + dot(v, C.yyy));
        vec3 x0 = v - i + dot(i, C.xxx);

        vec3 g = step(x0.yzx, x0.xyz);
        vec3 l = 1.0 - g;
        vec3 i1 = min(g.xyz, l.zxy);
        vec3 i2 = max(g.xyz, l.zxy);

        vec3 x1 = x0 - i1 + C.xxx;
        vec3 x2 = x0 - i2 + C.yyy;
        vec3 x3 = x0 - D.yyy;

        i = mod289(i);
        vec4 p = permute(permute(permute(
                i.z + vec4(0.0, i1.z, i2.z, 1.0))
                + i.y + vec4(0.0, i1.y, i2.y, 1.0))
                + i.x + vec4(0.0, i1.x, i2.x, 1.0));

        float n_ = 0.142857142857;
        vec3 ns = n_ * D.wyz - D.xzx;

        vec4 j = p - 49.0 * floor(p * ns.z * ns.z);

        vec4 x_ = floor(j * ns.z);
        vec4 y_ = floor(j - 7.0 * x_);

        vec4 x = x_ * ns.x + ns.yyyy;
        vec4 y = y_ * ns.x + ns.yyyy;
        vec4 h = 1.0 - abs(x) - abs(y);

        vec4 b0 = vec4(x.xy, y.xy);
        vec4 b1 = vec4(x.zw, y.zw);

        vec4 s0 = floor(b0) * 2.0 + 1.0;
        vec4 s1 = floor(b1) * 2.0 + 1.0;
        vec4 sh = -step(h, vec4(0.0));

        vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
        vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;

        vec3 p0 = vec3(a0.xy, h.x);
        vec3 p1 = vec3(a0.zw, h.y);
        vec3 p2 = vec3(a1.xy, h.z);
        vec3 p3 = vec3(a1.zw, h.w);

        vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
        p0 *= norm.x;
        p1 *= norm.y;
        p2 *= norm.z;
        p3 *= norm.w;

        vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
        m = m * m;
        return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
      }

      float fbm_clouds(vec3 pos, float lacunarity, float init_gain, float gain) {
        vec3 p = pos;
        float H = init_gain;
        float t = 0.0;
        for (int i = 0; i < 5; i++) {
          t += abs(snoise(p)) * H;
          p *= lacunarity;
          H *= gain;
        }
        return t;
      }

      float density_func(vec3 pos, float h) {
        vec3 p = pos * 0.0005 + vec3(0.0, 0.0, -time * 0.1); // Reduced scale for larger clouds
        float dens = fbm_clouds(p * 1.032, 2.2434, 0.6, 0.6); // Adjusted noise parameters
        dens *= smoothstep(cld_coverage, cld_coverage + 0.08, dens); // Increased smoothstep range for softer edges
        return dens;
      }

      void densities(in vec3 pos, out float rayleigh, out float mie) {
          float h = length(pos - C) - R0;
          rayleigh = exp(-h/Hr);
          mie = exp(-h/Hm);

          // Add cloud density
          if (h > 4000.0 && h < 9000.0) { // Increased height range for larger clouds
              float cloud_density = density_func(pos, h);
              mie += cloud_density * 0.4; // Reduced density multiplier
          }
      }

      float escape(in vec3 p, in vec3 d, in float R) {
          vec3 v = p - C;
          float b = dot(v, d);
          float c = dot(v, v) - R*R;
          float det2 = b * b - c;
          if (det2 < 0.) return -1.;
          float det = sqrt(det2);
          float t1 = -b - det, t2 = -b + det;
          return (t1 >= 0.) ? t1 : t2;
      }

      void scatter(vec3 o, vec3 d, out vec3 col, out vec3 scat) {
          float L = escape(o, d, Ra);
          float mu = dot(d, Ds);
          float opmu2 = 1. + mu*mu;
          float phaseR = .0596831 * opmu2;
          float phaseM = .1193662 * (1. - g2) * opmu2 / ((2. + g2) * pow(1. + g2 - 2.*g*mu, 1.5));
          float phaseS = .1193662 * (1. - s2) * opmu2 / ((2. + s2) * pow(1. + s2 - 2.*s*mu, 1.5));
          
          float depthR = 0., depthM = 0.;
          vec3 R = vec3(0.), M = vec3(0.);
          
          const int steps = 16;
          float dl = L / float(steps);
          for (int i = 0; i < steps; ++i) {
              float l = float(i) * dl;
              vec3 p = o + d * l;
              
              float dR, dM;
              densities(p, dR, dM);
              dR *= dl; dM *= dl;
              depthR += dR;
              depthM += dM;
              
              float Ls = escape(p, Ds, Ra);
              if (Ls > 0.) {
                  const int stepss = 16;
                  float dls = Ls / float(stepss);
                  float depthRs = 0., depthMs = 0.;
                  for (int j = 0; j < stepss; ++j) {
                      float ls = float(j) * dls;
                      vec3 ps = p + Ds * ls;
                      float dRs, dMs;
                      densities(ps, dRs, dMs);
                      depthRs += dRs * dls;
                      depthMs += dMs * dls;
                  }
                  
                  vec3 A = exp(-(bR * (depthRs + depthR) + bM * (depthMs + depthM)));
                  R += A * dR;
                  M += A * dM;
              }
          }
          
          col = I * (M * bM * phaseM);
          col += SI * (M * bM * phaseS);
          col += I * (R * bR * phaseR);
          scat = 0.1 * (bM * depthM);
      }

      vec3 stars(in vec3 p) {
          vec3 c = vec3(0.);
          float res = resolution.x * 2.5;
          
          for (float i=0.; i<4.; i++) {
              vec3 q = fract(p*(.15*res))-0.5;
              vec3 id = floor(p*(.15*res));
              float rn = hash21(id.xy);
              float c2 = 1.-smoothstep(0.,.6,length(q));
              c2 *= step(rn,.0005+i*i*0.001);
              c += c2*(mix(vec3(1.0,0.49,0.1),vec3(0.75,0.9,1.),rn)*0.1+0.9);
              p *= 1.3;
          }
          return c*c*.8;
      }

      void main() {
          float AR = resolution.x/resolution.y;
          vec2 uv = gl_FragCoord.xy / resolution.xy;
          uv = uv * 2.0 - 1.0;
          uv.x *= AR;
          
          vec2 uvMouse = mouse;
          uvMouse.x *= AR;
          
          if (uvMouse.y == 0.) uvMouse.y = 0.7 - 0.05*fov;
          if (uvMouse.x == 0.) uvMouse.x = 1.0 - 0.05*fov;
          
          Ds = normalize(vec3(uvMouse.x-((0.5*AR)), uvMouse.y-0.5, fov/-2.0));
          
          vec3 O = vec3(0., cameraheight, 0.);
          vec3 D = normalize(vec3(uv, -fov));
          
          vec3 color = vec3(0.);
          vec3 scat = vec3(0.);
          float att = 1.;
          float staratt = 1.;
          float scatatt = 1.;
          vec3 star = vec3(0.);
          
          float fade = smoothstep(0.,0.01,abs(D.y))*0.5+0.9;
          staratt = 1. - min(1.0,(uvMouse.y*2.0));
          scatatt = 1. - min(1.0,(uvMouse.y*2.2));
          
          if (D.y < -0.02) {
              float L = -O.y / D.y;
              O = O + D * L;
              D.y = -D.y;
              D = normalize(D+vec3(0.,.003*sin(time+6.2831*noise(O.xz+vec2(0.,-time*1e3))),0.));
              att = .6;
              star = stars(D);
          } else {
              float L1 = O.y / D.y;
              vec3 O1 = O + D * L1;
              vec3 D1 = normalize(D+vec3(1.,.0009*sin(time+6.2831*noise(O1.xz+vec2(0.,time*0.8))),0.));
              star = stars(D1);
          }
          
          star *= att * staratt;
          scatter(O, D, color, scat);
          color *= att;
          scat *= att * scatatt;
          
          color += scat;
          color += star;
          
          gl_FragColor = vec4(pow(color, vec3(1.0/2.2)), 1.0);
      }
    `;

    // Create shader material
    const material = new THREE.ShaderMaterial({
      uniforms,
      vertexShader,
      fragmentShader
    });

    // Create fullscreen quad
    const geometry = new THREE.PlaneGeometry(2, 2);
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Animation loop
    const clock = new THREE.Clock();
    function animate() {
      uniforms.time.value = clock.getElapsedTime();
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    }
    animate();

    // Handle window resize
    const handleResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      uniforms.resolution.value.set(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Mouse handling for click-only sun movement
    let isMouseDown = false;

    const handleMouseDown = (event: MouseEvent) => {
      isMouseDown = true;
      uniforms.mouse.value.set(
        event.clientX / window.innerWidth,
        1.0 - event.clientY / window.innerHeight
      );
    };

    const handleMouseUp = () => {
      isMouseDown = false;
    };

    const handleMouseMove = (event: MouseEvent) => {
      if (isMouseDown) {
        uniforms.mouse.value.set(
          event.clientX / window.innerWidth,
          1.0 - event.clientY / window.innerHeight
        );
      }
    };

    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mousemove', handleMouseMove);
      
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed top-0 left-0 w-full h-full z-[-1]"
      style={{ overflow: 'hidden' }}
    />
  );
};

export default SkyShader;
