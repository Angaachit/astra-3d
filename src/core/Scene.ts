import { Mesh } from './Mesh';
import { Camera } from './Camera';

/**
 * Main scene container for 3D objects
 */
export class Scene {
  private meshes: Mesh[] = [];
  private camera: Camera | null = null;
  private backgroundColor: [number, number, number, number] = [0, 0, 0, 1];

  constructor() {
    this.meshes = [];
  }

  /**
   * Add a mesh to the scene
   */
  addMesh(mesh: Mesh): void {
    if (!this.meshes.includes(mesh)) {
      this.meshes.push(mesh);
    }
  }

  /**
   * Remove a mesh from the scene
   */
  removeMesh(mesh: Mesh): void {
    const index = this.meshes.indexOf(mesh);
    if (index > -1) {
      this.meshes.splice(index, 1);
    }
  }

  /**
   * Get all meshes in the scene
   */
  getMeshes(): Mesh[] {
    return [...this.meshes];
  }

  /**
   * Set the active camera
   */
  setCamera(camera: Camera): void {
    this.camera = camera;
  }

  /**
   * Get the active camera
   */
  getCamera(): Camera | null {
    return this.camera;
  }

  /**
   * Set background color (RGBA)
   */
  setBackgroundColor(r: number, g: number, b: number, a: number = 1): void {
    this.backgroundColor = [r, g, b, a];
  }

  /**
   * Get background color
   */
  getBackgroundColor(): [number, number, number, number] {
    return this.backgroundColor;
  }
}
