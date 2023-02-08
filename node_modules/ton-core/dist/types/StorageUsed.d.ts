import { Builder } from "../boc/Builder";
import { Slice } from "../boc/Slice";
export type StorageUsed = {
    cells: bigint;
    bits: bigint;
    publicCells: bigint;
};
export declare function loadStorageUsed(cs: Slice): StorageUsed;
export declare function storeStorageUsed(src: StorageUsed): (builder: Builder) => void;
