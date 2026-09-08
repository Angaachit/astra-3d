import { Scene } from './Scene';

/**
 * Main renderer for 3D graphics
 */
export class Renderer {
  private canvas: HTMLCanvasElement;
  private context: WebGLRenderingContext | null;
  private width: number;
  private height: number;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.width = canvas.width;
    this.height = canvas.height;
    this.context = canvas.getContext('webgl') || canvas.getContext('webgl2') as WebGLRenderingContext;
    
    if (!this.context) {
      throw new Error('WebGL not supported');
    }
  }

  /**
   * Set viewport size
   */
  setSize(width: number, height: number): void {
    this.width = width;
    this.height = height;
    this.canvas.width = width;
    this.canvas.height = height;
    this.context?.viewport(0, 0, width, height);
  }

  /**
   * Render a scene
   */
  render(scene: Scene): void {
    if (!this.context) return;

    const [r, g, b, a] = scene.getBackgroundColor();
    this.context.clearColor(r, g, b, a);
    this.context.clear(this.context.COLOR_BUFFER_BIT | this.context.DEPTH_BUFFER_BIT);

    const meshes = scene.getMeshes();
    for (const mesh of meshes) {
      this.renderMesh(mesh);
    }
  }

  /**
   * Render individual mesh
   */
  private renderMesh(mesh: any): void {
    // Mesh rendering logic will be implemented with shader compilation
  }

  /**
   * Get WebGL context
   */
  getContext(): WebGLRenderingContext | null {
    return this.context;
  }
}
