/// <reference types="node" />
import { BitString } from "../BitString";
import { CellType } from "../CellType";
import { Cell } from '../Cell';
import { LevelMask } from "./LevelMask";
export declare function wonderCalculator(type: CellType, bits: BitString, refs: Cell[]): {
    mask: LevelMask;
    hashes: Buffer[];
    depths: number[];
};
