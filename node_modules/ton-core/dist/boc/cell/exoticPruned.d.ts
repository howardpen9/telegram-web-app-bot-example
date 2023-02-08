/// <reference types="node" />
import { BitString } from "../BitString";
import { Cell } from "../Cell";
export type ExoticPruned = {
    mask: number;
    pruned: {
        depth: number;
        hash: Buffer;
    }[];
};
export declare function exoticPruned(bits: BitString, refs: Cell[]): ExoticPruned;
