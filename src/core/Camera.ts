import type { Vector3, Matrix4 } from '../math/Types';

/**
 * Camera for 3D viewing
 */
export class Camera {
  private position: Vector3;
  private lookAt: Vector3;
  private up: Vector3;
  private fov: number;
  private aspect: number;
  private near: number;
  private far: number;
  private projectionMatrix: Matrix4;

  constructor(fov: number = 45, aspect: number = 16 / 9, near: number = 0.1, far: number = 1000) {
    this.position = { x: 0, y: 0, z: 5 };
    this.lookAt = { x: 0, y: 0, z: 0 };
    this.up = { x: 0, y: 1, z: 0 };
    this.fov = fov;
    this.aspect = aspect;
    this.near = near;
    this.far = far;
    this.projectionMatrix = this.createIdentityMatrix();
    this.updateProjectionMatrix();
  }

  /**
   * Set camera position
   */
  setPosition(x: number, y: number, z: number): void {
    this.position = { x, y, z };
  }

  /**
   * Get camera position
   */
  getPosition(): Vector3 {
    return { ...this.position };
  }

  /**
   * Set camera look-at target
   */
  setLookAt(x: number, y: number, z: number): void {
    this.lookAt = { x, y, z };
  }

  /**
   * Get projection matrix
   */
  getProjectionMatrix(): Matrix4 {
    return this.projectionMatrix;
  }

  /**
   * Update projection matrix
   */
  private updateProjectionMatrix(): void {
    // Simplified perspective projection matrix calculation
    const f = 1 / Math.tan(this.fov / 2);
    const nf = 1 / (this.near - this.far);
    this.projectionMatrix = [
      [f / this.aspect, 0, 0, 0],
      [0, f, 0, 0],
      [0, 0, (this.far + this.near) * nf, -1],
      [0, 0, 2 * this.far * this.near * nf, 0]
    ];
  }

  /**
   * Create identity matrix
   */
  private createIdentityMatrix(): Matrix4 {
    return [
      [1, 0, 0, 0],
      [0, 1, 0, 0],
      [0, 0, 1, 0],
      [0, 0, 0, 1]
    ];
  }
}
