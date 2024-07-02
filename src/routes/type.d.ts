export interface RouteItem{
    path: string,
    element: JSX.Element,
    children?:RouteItem[],
    meta?:{
        title?:string,
        icon?:JSX.Element,
        hidden?:boolean
    }
}

