import { Builder } from "../boc/Builder";
import { Slice } from "../boc/Slice";
export type ShardIdent = {
    shardPrefixBits: number;
    workchainId: number;
    shardPrefix: bigint;
};
export declare function loadShardIdent(slice: Slice): ShardIdent;
export declare function storeShardIdent(src: ShardIdent): (builder: Builder) => void;
