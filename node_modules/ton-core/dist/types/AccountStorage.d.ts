import { Builder } from "../boc/Builder";
import { Slice } from "../boc/Slice";
import { AccountState } from "./AccountState";
import { CurrencyCollection } from "./CurrencyCollection";
export type AccountStorage = {
    lastTransLt: bigint;
    balance: CurrencyCollection;
    state: AccountState;
};
export declare function loadAccountStorage(slice: Slice): AccountStorage;
export declare function storeAccountStorage(src: AccountStorage): (builder: Builder) => void;
