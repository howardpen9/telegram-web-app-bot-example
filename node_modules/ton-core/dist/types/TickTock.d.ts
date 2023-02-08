import { Builder } from "../boc/Builder";
import { Slice } from "../boc/Slice";
export type TickTock = {
    tick: boolean;
    tock: boolean;
};
export declare function loadTickTock(slice: Slice): TickTock;
export declare function storeTickTock(src: TickTock): (builder: Builder) => void;
