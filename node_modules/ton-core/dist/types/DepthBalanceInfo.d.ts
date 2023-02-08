import { Builder } from "../boc/Builder";
import { Slice } from "../boc/Slice";
import { CurrencyCollection } from "./CurrencyCollection";
export type DepthBalanceInfo = {
    splitDepth: number;
    balance: CurrencyCollection;
};
export declare function loadDepthBalanceInfo(slice: Slice): DepthBalanceInfo;
export declare function storeDepthBalanceInfo(src: DepthBalanceInfo): (builder: Builder) => void;
