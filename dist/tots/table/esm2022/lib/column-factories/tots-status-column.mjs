import { StatusColumnComponent } from "../columns/status-column/status-column.component";
import { TotsColumn } from "../entities/tots-column";
export class TotsStatusColumn extends TotsColumn {
    constructor(id, fieldKey, options, title, hasOrder, order) {
        super(id, StatusColumnComponent, fieldKey, title, hasOrder, order);
        this.extra = {
            options: options,
            field_rel_key: "value",
            field_print_key: "caption"
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG90cy1zdGF0dXMtY29sdW1uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdG90cy90YWJsZS9zcmMvbGliL2NvbHVtbi1mYWN0b3JpZXMvdG90cy1zdGF0dXMtY29sdW1uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxVQUFVLEVBQW1CLE1BQU0seUJBQXlCLENBQUM7QUFHdEUsTUFBTSxPQUFPLGdCQUFpQixTQUFRLFVBQVU7SUFDL0MsWUFBWSxFQUFTLEVBQUUsUUFBd0IsRUFBRSxPQUFnQyxFQUFFLEtBQWEsRUFBRSxRQUFpQixFQUFFLEtBQXNCO1FBQ3BJLEtBQUssQ0FBQyxFQUFFLEVBQUUscUJBQXFCLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDbkUsSUFBSSxDQUFDLEtBQUssR0FBRztZQUNULE9BQU8sRUFBRSxPQUFPO1lBQ2hCLGFBQWEsRUFBRSxPQUFPO1lBQ3RCLGVBQWUsRUFBRSxTQUFTO1NBQzdCLENBQUE7SUFDTCxDQUFDO0NBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdGF0dXNDb2x1bW5Db21wb25lbnQgfSBmcm9tIFwiLi4vY29sdW1ucy9zdGF0dXMtY29sdW1uL3N0YXR1cy1jb2x1bW4uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFRvdHNDb2x1bW4sIFRvdHNDb2x1bW5PcmRlciB9IGZyb20gXCIuLi9lbnRpdGllcy90b3RzLWNvbHVtblwiO1xyXG5pbXBvcnQgeyBUb3RzU3RhdHVzQ29sdW1uT3B0aW9uIH0gZnJvbSBcIi4uL2VudGl0aWVzL3RvdHMtc3RhdHVzLWNvbHVtbi1vcHRpb25cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBUb3RzU3RhdHVzQ29sdW1uIGV4dGVuZHMgVG90c0NvbHVtbiB7XHJcblx0Y29uc3RydWN0b3IoaWQ6c3RyaW5nLCBmaWVsZEtleTpzdHJpbmd8c3RyaW5nW10sIG9wdGlvbnM6VG90c1N0YXR1c0NvbHVtbk9wdGlvbltdLCB0aXRsZT86c3RyaW5nLCBoYXNPcmRlcj86Ym9vbGVhbiwgb3JkZXI/OlRvdHNDb2x1bW5PcmRlcikge1xyXG4gICAgICAgIHN1cGVyKGlkLCBTdGF0dXNDb2x1bW5Db21wb25lbnQsIGZpZWxkS2V5LCB0aXRsZSwgaGFzT3JkZXIsIG9yZGVyKTtcclxuICAgICAgICB0aGlzLmV4dHJhID0ge1xyXG4gICAgICAgICAgICBvcHRpb25zOiBvcHRpb25zLFxyXG4gICAgICAgICAgICBmaWVsZF9yZWxfa2V5OiBcInZhbHVlXCIsXHJcbiAgICAgICAgICAgIGZpZWxkX3ByaW50X2tleTogXCJjYXB0aW9uXCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0=