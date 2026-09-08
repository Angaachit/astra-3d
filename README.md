# Astra 3D Library

A comprehensive 3D graphics library with GPT-6 Astra AI integration for advanced scene generation, shader optimization, and intelligent 3D modeling.

## Features

- **WebGL Rendering**: Full 3D graphics rendering pipeline
- **GPT-6 Astra Integration**: AI-powered scene generation and optimization
- **Material System**: PBR (Physically-Based Rendering) materials
- **Shader Compilation**: Automatic GLSL/WGSL shader compilation
- **Animation System**: Keyframe-based animation controller
- **Scene Management**: Hierarchical scene graph
- **Math Library**: Vector3, Quaternion, and Matrix4 utilities

## Installation

```bash
npm install astra-3d
```

## Quick Start

```typescript
import { Scene, Renderer, Camera, Mesh } from 'astra-3d';

const canvas = document.getElementById('canvas') as HTMLCanvasElement;
const renderer = new Renderer(canvas);
const scene = new Scene();
const camera = new Camera();

scene.setCamera(camera);
const mesh = new Mesh('cube');
scene.addMesh(mesh);

renderer.render(scene);
```

## AI Scene Generation

```typescript
import { AstraAI } from 'astra-3d';

const astra = new AstraAI(process.env.ASTRA_API_KEY!);
await astra.initialize();

const scene = await astra.generateScene('A futuristic city with neon lights');
```

## License

MIT

## Author

Angaachit
