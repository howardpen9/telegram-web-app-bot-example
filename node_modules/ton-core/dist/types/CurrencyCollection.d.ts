import { Builder } from "../boc/Builder";
import { Slice } from "../boc/Slice";
import { Dictionary } from "../dict/Dictionary";
import { Maybe } from "../utils/maybe";
export interface CurrencyCollection {
    other?: Maybe<Dictionary<number, bigint>>;
    coins: bigint;
}
export declare function loadCurrencyCollection(slice: Slice): CurrencyCollection;
export declare function storeCurrencyCollection(collection: CurrencyCollection): (builder: Builder) => void;
