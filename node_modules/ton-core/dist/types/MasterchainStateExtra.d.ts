import { Cell } from "../boc/Cell";
import { Slice } from "../boc/Slice";
import { Dictionary } from "../dict/Dictionary";
import { CurrencyCollection } from "./CurrencyCollection";
export type MasterchainStateExtra = {
    configAddress: bigint;
    config: Dictionary<number, Cell>;
    globalBalance: CurrencyCollection;
};
export declare function loadMasterchainStateExtra(cs: Slice): MasterchainStateExtra;
