/* tslint:disable */
/* eslint-disable */

/**
 * A verified file or snippet. Both checksums passed before this existed.
 */
export class WasmReceived {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    /**
     * Copied out into a `Uint8Array`.
     */
    readonly bytes: Uint8Array;
    readonly isText: boolean;
    readonly mediaType: string;
    readonly name: string;
}

/**
 * One receiver's state, owned by the JavaScript side.
 */
export class WasmReceiver {
    free(): void;
    [Symbol.dispose](): void;
    /**
     * Feed one decoded QR payload in. Returns an outcome code; every
     * protocol result, including failures, is a normal return.
     */
    addFrame(bytes: Uint8Array): number;
    /**
     * The explanation behind the last incompatible or failed outcome.
     */
    message(): string;
    constructor();
    /**
     * Forget the current stream; the next frame starts a fresh transfer.
     */
    reset(): void;
    /**
     * One byte per source block, 1 where recovered.
     */
    solvedMap(): Uint8Array;
    /**
     * Counters for the current (or just-finished) stream, or `undefined`.
     */
    stats(): any;
    /**
     * The verified result of the last `COMPLETE`, handed over once.
     */
    takeResult(): WasmReceived | undefined;
}

/**
 * File preparation and QR generation run inside a dedicated browser worker.
 */
export class WasmSender {
    free(): void;
    [Symbol.dispose](): void;
    addDirectoryFile(name: string, media_type: string, relative_path: string, bytes: Uint8Array): void;
    addFile(name: string, media_type: string, bytes: Uint8Array): void;
    constructor();
    /**
     * `count` codes of modules back to back, one byte per module whose
     * bits are the channels that are dark there.
     */
    nextFrames(count: number): Uint8Array;
    /**
     * `wire` is 4 (this build's format) or 3 (upstream's); `color`
     * draws three frames per code, one per colour channel.
     */
    prepareFiles(frame_bytes: number, fps: number, ecc: string, session_id: number, wire: number, color: boolean): any;
    prepareText(text: string, frame_bytes: number, fps: number, ecc: string, session_id: number, wire: number, color: boolean): any;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
    readonly memory: WebAssembly.Memory;
    readonly __wbg_wasmreceived_free: (a: number, b: number) => void;
    readonly __wbg_wasmreceiver_free: (a: number, b: number) => void;
    readonly __wbg_wasmsender_free: (a: number, b: number) => void;
    readonly wasmreceived_bytes: (a: number, b: number) => void;
    readonly wasmreceived_isText: (a: number) => number;
    readonly wasmreceived_mediaType: (a: number, b: number) => void;
    readonly wasmreceived_name: (a: number, b: number) => void;
    readonly wasmreceiver_addFrame: (a: number, b: number, c: number) => number;
    readonly wasmreceiver_message: (a: number, b: number) => void;
    readonly wasmreceiver_new: () => number;
    readonly wasmreceiver_reset: (a: number) => void;
    readonly wasmreceiver_solvedMap: (a: number, b: number) => void;
    readonly wasmreceiver_stats: (a: number) => number;
    readonly wasmreceiver_takeResult: (a: number) => number;
    readonly wasmsender_addDirectoryFile: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number, j: number) => void;
    readonly wasmsender_addFile: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number) => void;
    readonly wasmsender_new: () => number;
    readonly wasmsender_nextFrames: (a: number, b: number, c: number) => void;
    readonly wasmsender_prepareFiles: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number) => void;
    readonly wasmsender_prepareText: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number, j: number, k: number) => void;
    readonly __wbindgen_export: (a: number, b: number) => number;
    readonly __wbindgen_export2: (a: number, b: number, c: number, d: number) => number;
    readonly __wbindgen_add_to_stack_pointer: (a: number) => number;
    readonly __wbindgen_export3: (a: number, b: number, c: number) => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;

/**
 * Instantiates the given `module`, which can either be bytes or
 * a precompiled `WebAssembly.Module`.
 *
 * @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
 *
 * @returns {InitOutput}
 */
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
 * If `module_or_path` is {RequestInfo} or {URL}, makes a request and
 * for everything else, calls `WebAssembly.instantiate` directly.
 *
 * @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
 *
 * @returns {Promise<InitOutput>}
 */
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;
