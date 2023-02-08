import { Slice } from "../boc/Slice";
export declare function parseDict<V>(sc: Slice | null, keySize: number, extractor: (src: Slice) => V): Map<bigint, V>;
