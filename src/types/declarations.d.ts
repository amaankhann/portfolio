declare module 'gsap' {
  const gsap: any;
  export default gsap;
  export const gsap: any;
  export class SplitText { chars: any[]; words: any[]; lines: any[]; constructor(target: any, vars?: any): void; }
  export class ScrollSmoother { static create(vars?: any): any; static refresh(safe?: boolean): void; scrollTo(target: any, smooth?: boolean, position?: string): void; scrollTop(value?: number): number; paused(value?: boolean): boolean; }
  namespace core { interface Animation {} }
}
declare module 'gsap/ScrollTrigger' {
  export class ScrollTrigger { static getAll(): any[]; isTouch: boolean; static refresh(): void; }
}
declare module 'gsap/ScrollSmoother' {
  export class ScrollSmoother { static create(vars?: any): any; static refresh(safe?: boolean): void; scrollTo(target: any, smooth?: boolean, position?: string): void; scrollTop(value?: number): number; paused(value?: boolean): boolean; }
}
declare module 'gsap/SplitText' {
  export class SplitText { chars: any[]; words: any[]; lines: any[]; constructor(target: any, vars?: any): void; }
}
declare module 'three-stdlib' {
  export class GLTF { scene: any; animations: any[]; }
  export class GLTFLoader { load(url: string, onLoad: (gltf: any) => void, onProgress?: any, onError?: any): void; setDRACOLoader(loader: any): void; }
  export class DRACOLoader { setDecoderPath(path: string): void; }
  export class RGBELoader { load(url: string, onLoad: (texture: any) => void): void; }
}
