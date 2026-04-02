declare module "flv.js" {
  export interface MediaDataSource {
    type: string;
    url: string;
    isLive?: boolean;
    cors?: boolean;
    withCredentials?: boolean;
  }
  export class Player {
    attachMediaElement(mediaElement: HTMLMediaElement): void;
    detachMediaElement(): void;
    load(): void;
    unload(): void;
    play(): Promise<void>;
    pause(): void;
    destroy(): void;
  }
  export function createPlayer(
    mediaDataSource: MediaDataSource,
    config?: Record<string, unknown>
  ): Player;
  export function isSupported(): boolean;
  const flvjs: {
    createPlayer: typeof createPlayer;
    isSupported: typeof isSupported;
    Player: typeof Player;
  };
  export default flvjs;
}
