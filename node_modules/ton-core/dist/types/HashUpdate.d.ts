/// <reference types="node" />
import { Builder } from "../boc/Builder";
import { Slice } from "../boc/Slice";
export type HashUpdate = {
    oldHash: Buffer;
    newHash: Buffer;
};
export declare function loadHashUpdate(slice: Slice): HashUpdate;
export declare function storeHashUpdate(src: HashUpdate): (builder: Builder) => void;
