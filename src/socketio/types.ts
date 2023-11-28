export interface ServerToClientEvents {
  "update-products": (products: any) => void;
  noArg: () => void;
  basicEmit: (a: number, b: string, c: Buffer) => void;
  withAck: (d: string, callback: (e: number) => void) => void;
}

export interface ClientToServerEvents {
  shot: (productId: number, email: string) => void;
  disconnect: () => void;
}

export interface InterServerEvents {}

export interface SocketData {}
