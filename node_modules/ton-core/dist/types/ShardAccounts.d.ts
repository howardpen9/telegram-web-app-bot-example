import { Builder } from "../boc/Builder";
import { Slice } from "../boc/Slice";
import { Dictionary, DictionaryValue } from "../dict/Dictionary";
import { DepthBalanceInfo } from "./DepthBalanceInfo";
import { ShardAccount } from "./ShardAccount";
export type ShardAccountRef = {
    shardAccount: ShardAccount;
    depthBalanceInfo: DepthBalanceInfo;
};
export declare const ShardAccountRefValue: DictionaryValue<ShardAccountRef>;
export declare function loadShardAccounts(cs: Slice): Dictionary<bigint, ShardAccountRef>;
export declare function storeShardAccounts(src: Dictionary<bigint, ShardAccountRef>): (Builder: Builder) => void;
