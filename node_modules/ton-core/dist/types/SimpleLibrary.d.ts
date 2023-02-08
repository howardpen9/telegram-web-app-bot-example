import { Builder } from "../boc/Builder";
import { Cell } from "../boc/Cell";
import { Slice } from "../boc/Slice";
import { DictionaryValue } from "../dict/Dictionary";
export interface SimpleLibrary {
    public: boolean;
    root: Cell;
}
export declare function loadSimpleLibrary(slice: Slice): SimpleLibrary;
export declare function storeSimpleLibrary(src: SimpleLibrary): (builder: Builder) => void;
export declare const SimpleLibraryValue: DictionaryValue<SimpleLibrary>;
