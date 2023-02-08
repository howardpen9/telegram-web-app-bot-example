import { Builder } from "../boc/Builder";
import { Slice } from "../boc/Slice";
export type StorageUsedShort = {
    cells: bigint;
    bits: bigint;
};
export declare function loadStorageUsedShort(slice: Slice): StorageUsedShort;
export declare function storeStorageUsedShort(src: StorageUsedShort): (builder: Builder) => void;
