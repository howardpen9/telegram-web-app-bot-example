/// <reference types="node" />
import { BitString } from "../BitString";
import { Cell } from "../Cell";
export declare function exoticMerkleUpdate(bits: BitString, refs: Cell[]): {
    proofDepth1: number;
    proofDepth2: number;
    proofHash1: Buffer;
    proofHash2: Buffer;
};
