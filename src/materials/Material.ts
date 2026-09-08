import type { Vector3 } from '../math/Types';

/**
 * Material properties for 3D objects
 */
export class Material {
  private color: Vector3;
  private ambient: number;
  private diffuse: number;
  private specular: number;
  private shininess: number;
  private metallic: number;
  private roughness: number;

  constructor() {
    this.color = { x: 1, y: 1, z: 1 };
    this.ambient = 0.3;
    this.diffuse = 0.7;
    this.specular = 1.0;
    this.shininess = 32;
    this.metallic = 0.5;
    this.roughness = 0.5;
  }

  /**
   * Set material color (RGB)
   */
  setColor(r: number, g: number, b: number): void {
    this.color = { x: r, y: g, z: b };
  }

  /**
   * Get material color
   */
  getColor(): Vector3 {
    return { ...this.color };
  }

  /**
   * Set PBR properties
   */
  setPBRProperties(metallic: number, roughness: number): void {
    this.metallic = Math.max(0, Math.min(1, metallic));
    this.roughness = Math.max(0, Math.min(1, roughness));
  }

  /**
   * Get metallic value
   */
  getMetallic(): number {
    return this.metallic;
  }

  /**
   * Get roughness value
   */
  getRoughness(): number {
    return this.roughness;
  }
}
