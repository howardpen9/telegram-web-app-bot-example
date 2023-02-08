import { Maybe } from "../utils/maybe";
export declare class ComputeError extends Error {
    exitCode: number;
    debugLogs: string | null;
    logs: string | null;
    constructor(message: string, exitCode: number, opts?: {
        debugLogs?: Maybe<string>;
        logs?: Maybe<string>;
    });
}
