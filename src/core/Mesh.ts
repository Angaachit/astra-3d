import { Material } from '../materials/Material';
import type { Vector3, Quaternion, Matrix4 } from '../math/Types';

/**
 * Represents a 3D mesh object
 */
export class Mesh {
  private position: Vector3;
  private rotation: Quaternion;
  private scale: Vector3;
  private vertices: Float32Array;
  private indices: Uint32Array;
  private material: Material;
  private name: string;

  constructor(name: string = 'Mesh') {
    this.name = name;
    this.position = { x: 0, y: 0, z: 0 };
    this.rotation = { x: 0, y: 0, z: 0, w: 1 };
    this.scale = { x: 1, y: 1, z: 1 };
    this.vertices = new Float32Array();
    this.indices = new Uint32Array();
    this.material = new Material();
  }

  /**
   * Set mesh position
   */
  setPosition(x: number, y: number, z: number): void {
    this.position = { x, y, z };
  }

  /**
   * Get mesh position
   */
  getPosition(): Vector3 {
    return { ...this.position };
  }

  /**
   * Set mesh rotation (quaternion)
   */
  setRotation(x: number, y: number, z: number, w: number): void {
    this.rotation = { x, y, z, w };
  }

  /**
   * Get mesh rotation
   */
  getRotation(): Quaternion {
    return { ...this.rotation };
  }

  /**
   * Set mesh scale
   */
  setScale(x: number, y: number, z: number): void {
    this.scale = { x, y, z };
  }

  /**
   * Get mesh scale
   */
  getScale(): Vector3 {
    return { ...this.scale };
  }

  /**
   * Set geometry data
   */
  setGeometry(vertices: Float32Array, indices: Uint32Array): void {
    this.vertices = vertices;
    this.indices = indices;
  }

  /**
   * Get vertices
   */
  getVertices(): Float32Array {
    return this.vertices;
  }

  /**
   * Get indices
   */
  getIndices(): Uint32Array {
    return this.indices;
  }

  /**
   * Set material
   */
  setMaterial(material: Material): void {
    this.material = material;
  }

  /**
   * Get material
   */
  getMaterial(): Material {
    return this.material;
  }

  /**
   * Get mesh name
   */
  getName(): string {
    return this.name;
  }
}
