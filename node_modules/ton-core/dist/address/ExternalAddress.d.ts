import inspectSymbol from 'symbol.inspect';
export declare class ExternalAddress {
    static isAddress(src: any): src is ExternalAddress;
    readonly value: bigint;
    readonly bits: number;
    constructor(value: bigint, bits: number);
    toString(): string;
    [inspectSymbol]: () => string;
}
