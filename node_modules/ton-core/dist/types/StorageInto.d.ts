import { Builder } from "../boc/Builder";
import { Slice } from "../boc/Slice";
import { Maybe } from "../utils/maybe";
import { StorageUsed } from "./StorageUsed";
export type StorageInfo = {
    used: StorageUsed;
    lastPaid: number;
    duePayment?: Maybe<bigint>;
};
export declare function loadStorageInfo(slice: Slice): StorageInfo;
export declare function storeStorageInfo(src: StorageInfo): (builder: Builder) => void;
