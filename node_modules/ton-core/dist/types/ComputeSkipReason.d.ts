import { Builder } from "../boc/Builder";
import { Slice } from "../boc/Slice";
export type ComputeSkipReason = 'no-state' | 'bad-state' | 'no-gas';
export declare function loadComputeSkipReason(slice: Slice): ComputeSkipReason;
export declare function storeComputeSkipReason(src: ComputeSkipReason): (builder: Builder) => void;
