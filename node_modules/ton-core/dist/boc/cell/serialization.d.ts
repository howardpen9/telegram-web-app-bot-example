/// <reference types="node" />
import { Cell } from "../Cell";
export declare function parseBoc(src: Buffer): {
    size: number;
    offBytes: number;
    cells: number;
    roots: number;
    absent: number;
    totalCellSize: number;
    index: Buffer | null;
    cellData: Buffer;
    root: number[];
};
export declare function deserializeBoc(src: Buffer): Cell[];
export declare function serializeBoc(root: Cell, opts: {
    idx: boolean;
    crc32: boolean;
}): Buffer;
