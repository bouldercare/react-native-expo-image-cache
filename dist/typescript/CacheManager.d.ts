export interface DownloadOptions {
    md5?: boolean;
    headers?: {
        [name: string]: string;
    };
}
export declare class CacheEntry {
    uri: string;
    options: DownloadOptions;
    cacheKey: string;
    downloadPromise: Promise<string | undefined> | undefined;
    constructor(uri: string, options: DownloadOptions, cacheKey: string);
    getPath(): Promise<string | undefined>;
    private download;
}
export default class CacheManager {
    static entries: {
        [uri: string]: CacheEntry;
    };
    static get(uri: string, options: DownloadOptions, cacheKey: string): CacheEntry;
    static clearCache(): Promise<void>;
    static getCacheSize(): Promise<number>;
}
