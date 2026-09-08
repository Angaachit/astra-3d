import { Mesh } from '../core/Mesh';

/**
 * Manages mesh animations and keyframe interpolation
 */
export class AnimationController {
  private animations: Map<string, Animation> = new Map();
  private activeAnimations: Set<string> = new Set();
  private currentTime: number = 0;

  /**
   * Add animation
   */
  addAnimation(name: string, animation: Animation): void {
    this.animations.set(name, animation);
  }

  /**
   * Play animation
   */
  play(name: string): void {
    if (this.animations.has(name)) {
      this.activeAnimations.add(name);
    }
  }

  /**
   * Pause animation
   */
  pause(name: string): void {
    this.activeAnimations.delete(name);
  }

  /**
   * Update animations
   */
  update(deltaTime: number): void {
    this.currentTime += deltaTime;

    for (const name of this.activeAnimations) {
      const animation = this.animations.get(name);
      if (animation) {
        animation.update(deltaTime);
      }
    }
  }
}

export interface Animation {
  update(deltaTime: number): void;
}
