import { Builder } from "../boc/Builder";
import { Cell } from "../boc/Cell";
import { Slice } from "../boc/Slice";
import { Maybe } from "../utils/maybe";
import { CommonMessageInfoRelaxed } from "./CommonMessageInfoRelaxed";
import { StateInit } from "./StateInit";
export type MessageRelaxed = {
    info: CommonMessageInfoRelaxed;
    init?: Maybe<StateInit>;
    body: Cell;
};
export declare function loadMessageRelaxed(slice: Slice): MessageRelaxed;
export declare function storeMessageRelaxed(message: MessageRelaxed, opts?: {
    forceRef?: boolean;
}): (builder: Builder) => void;
