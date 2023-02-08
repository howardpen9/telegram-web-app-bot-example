export declare class LevelMask {
    private _mask;
    private _hashIndex;
    private _hashCount;
    constructor(mask?: number);
    get value(): number;
    get level(): number;
    get hashIndex(): number;
    get hashCount(): number;
    apply(level: number): LevelMask;
    isSignificant(level: number): boolean;
}
