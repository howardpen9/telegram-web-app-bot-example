/// <reference types="node" />
import { BitString } from "../BitString";
import { Cell } from "../Cell";
import { CellType } from "../CellType";
import { LevelMask } from "./LevelMask";
export declare function resolveExotic(bits: BitString, refs: Cell[]): {
    type: CellType;
    depths: number[];
    hashes: Buffer[];
    mask: LevelMask;
};
