import { StringColumnComponent } from "../columns/string-column/string-column.component";
import { TotsColumn } from "../entities/tots-column";
export class TotsStringColumn extends TotsColumn {
    constructor(id, fieldKey, title, hasOrder, order, prepend) {
        super(id, StringColumnComponent, fieldKey, title, hasOrder, order);
        this.extra = {
            prepend: prepend
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG90cy1zdHJpbmctY29sdW1uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdG90cy90YWJsZS9zcmMvbGliL2NvbHVtbi1mYWN0b3JpZXMvdG90cy1zdHJpbmctY29sdW1uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxVQUFVLEVBQW1CLE1BQU0seUJBQXlCLENBQUM7QUFFdEUsTUFBTSxPQUFPLGdCQUFpQixTQUFRLFVBQVU7SUFDL0MsWUFBWSxFQUFTLEVBQUUsUUFBd0IsRUFBRSxLQUFhLEVBQUUsUUFBaUIsRUFBRSxLQUFzQixFQUFFLE9BQWU7UUFDbkgsS0FBSyxDQUFDLEVBQUUsRUFBRSxxQkFBcUIsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNuRSxJQUFJLENBQUMsS0FBSyxHQUFHO1lBQ1QsT0FBTyxFQUFFLE9BQU87U0FDbkIsQ0FBQTtJQUNMLENBQUM7Q0FDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0cmluZ0NvbHVtbkNvbXBvbmVudCB9IGZyb20gXCIuLi9jb2x1bW5zL3N0cmluZy1jb2x1bW4vc3RyaW5nLWNvbHVtbi5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgVG90c0NvbHVtbiwgVG90c0NvbHVtbk9yZGVyIH0gZnJvbSBcIi4uL2VudGl0aWVzL3RvdHMtY29sdW1uXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVG90c1N0cmluZ0NvbHVtbiBleHRlbmRzIFRvdHNDb2x1bW4ge1xyXG5cdGNvbnN0cnVjdG9yKGlkOnN0cmluZywgZmllbGRLZXk6c3RyaW5nfHN0cmluZ1tdLCB0aXRsZT86c3RyaW5nLCBoYXNPcmRlcj86Ym9vbGVhbiwgb3JkZXI/OlRvdHNDb2x1bW5PcmRlciwgcHJlcGVuZD86c3RyaW5nKSB7XHJcbiAgICAgICAgc3VwZXIoaWQsIFN0cmluZ0NvbHVtbkNvbXBvbmVudCwgZmllbGRLZXksIHRpdGxlLCBoYXNPcmRlciwgb3JkZXIpO1xyXG4gICAgICAgIHRoaXMuZXh0cmEgPSB7XHJcbiAgICAgICAgICAgIHByZXBlbmQ6IHByZXBlbmRcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0=