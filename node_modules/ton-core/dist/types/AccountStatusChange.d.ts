import { Builder } from "../boc/Builder";
import { Slice } from "../boc/Slice";
export type AccountStatusChange = 'unchanged' | 'frozen' | 'deleted';
export declare function loadAccountStatusChange(slice: Slice): AccountStatusChange;
export declare function storeAccountStatusChange(src: AccountStatusChange): (builder: Builder) => void;
