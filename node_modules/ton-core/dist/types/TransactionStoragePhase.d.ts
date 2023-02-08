import { Builder } from "../boc/Builder";
import { Slice } from "../boc/Slice";
import { Maybe } from "../utils/maybe";
import { AccountStatusChange } from "./AccountStatusChange";
export type TransactionStoragePhase = {
    storageFeesCollected: bigint;
    storageFeesDue?: Maybe<bigint>;
    statusChange: AccountStatusChange;
};
export declare function loadTransactionStoragePhase(slice: Slice): TransactionStoragePhase;
export declare function storeTransactionsStoragePhase(src: TransactionStoragePhase): (builder: Builder) => void;
