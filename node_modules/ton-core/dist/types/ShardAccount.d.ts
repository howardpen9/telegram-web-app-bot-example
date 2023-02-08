import { Builder } from "../boc/Builder";
import { Slice } from "../boc/Slice";
import { Maybe } from "../utils/maybe";
import { Account } from "./Account";
export type ShardAccount = {
    account?: Maybe<Account>;
    lastTransactionHash: bigint;
    lastTransactionLt: bigint;
};
export declare function loadShardAccount(slice: Slice): ShardAccount;
export declare function storeShardAccount(src: ShardAccount): (builder: Builder) => void;
