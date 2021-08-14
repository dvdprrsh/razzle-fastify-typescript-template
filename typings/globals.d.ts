export declare global {
  export interface GenericObject<T = any> {
    [key: string]: T;
  }
}
