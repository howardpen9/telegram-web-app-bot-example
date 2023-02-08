import { Builder } from "../boc/Builder";
import { Slice } from "../boc/Slice";
export type SplitMergeInfo = {
    currentShardPrefixLength: number;
    accountSplitDepth: number;
    thisAddress: bigint;
    siblingAddress: bigint;
};
export declare function loadSplitMergeInfo(slice: Slice): SplitMergeInfo;
export declare function storeSplitMergeInfo(src: SplitMergeInfo): (builder: Builder) => void;
