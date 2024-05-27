import { TotsListResponse } from "@tots/core";
import { Observable } from "rxjs";
import { TotsColumn } from "./tots-column";
export declare class TotsTableConfig {
    id?: string;
    columns: Array<TotsColumn>;
    obs?: Observable<TotsListResponse<any>>;
    classes?: string;
}
