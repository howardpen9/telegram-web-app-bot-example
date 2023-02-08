import { Builder } from "../Builder";
import { Cell } from "../Cell";
import { Slice } from "../Slice";
export declare function readString(slice: Slice): string;
export declare function stringToCell(src: string): Cell;
export declare function writeString(src: string, builder: Builder): void;
