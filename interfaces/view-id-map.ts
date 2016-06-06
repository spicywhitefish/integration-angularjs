export interface ViewIdMap {
    [view_id:string]:() => {[key: string]: string};
    generic?:() => {[key: string]: string};
}
