import { TotsBaseHttpService, TotsQuery } from "@tots/core";
import { TotsColumn } from "./tots-column";
export declare class TotsTableApiConfig {
    id?: string;
    columns: Array<TotsColumn>;
    service: TotsBaseHttpService<any>;
    query: TotsQuery;
    classes?: string;
}
