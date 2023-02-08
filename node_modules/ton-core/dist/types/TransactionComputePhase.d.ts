import { Builder } from "../boc/Builder";
import { Slice } from "../boc/Slice";
import { Maybe } from "../utils/maybe";
import { ComputeSkipReason } from "./ComputeSkipReason";
export type TransactionComputePhase = TransactionComputeSkipped | TransactionComputeVm;
export type TransactionComputeSkipped = {
    type: 'skipped';
    reason: ComputeSkipReason;
};
export type TransactionComputeVm = {
    type: 'vm';
    success: boolean;
    messageStateUsed: boolean;
    accountActivated: boolean;
    gasFees: bigint;
    gasUsed: bigint;
    gasLimit: bigint;
    gasCredit?: Maybe<bigint>;
    mode: number;
    exitCode: number;
    exitArg?: Maybe<number>;
    vmSteps: number;
    vmInitStateHash: bigint;
    vmFinalStateHash: bigint;
};
export declare function loadTransactionComputePhase(slice: Slice): TransactionComputePhase;
export declare function storeTransactionComputePhase(src: TransactionComputePhase): (builder: Builder) => void;
