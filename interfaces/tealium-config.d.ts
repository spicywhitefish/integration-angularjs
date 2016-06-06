export interface TealiumConfig {
    [key: string]: any;
    account: string;
    profile: string;
    environment?: string;
    suppress_first_view?: boolean;
    script_src?: string;
}
