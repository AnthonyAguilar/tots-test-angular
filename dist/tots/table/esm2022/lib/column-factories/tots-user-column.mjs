import { UserColumnComponent } from "../columns/user-column/user-column.component";
import { TotsColumn } from "../entities/tots-column";
export class TotsUserColumn extends TotsColumn {
    // first name, last name y photo obligatorios. Si no hay variable de foto, que usen two string column
    constructor(id, firstNameFieldKey, lastNameFieldKey, photoFieldKey, secondLineFieldKey, title, onlineFieldKey, hasOrder, order) {
        super(id, UserColumnComponent, undefined, title, hasOrder, order);
        this.extra = {
            field_firstname_key: firstNameFieldKey,
            field_lastname_key: lastNameFieldKey,
            field_photo_key: photoFieldKey,
            field_subtitle_key: secondLineFieldKey,
            field_online_key: onlineFieldKey
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG90cy11c2VyLWNvbHVtbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3RvdHMvdGFibGUvc3JjL2xpYi9jb2x1bW4tZmFjdG9yaWVzL3RvdHMtdXNlci1jb2x1bW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDbkYsT0FBTyxFQUFFLFVBQVUsRUFBbUIsTUFBTSx5QkFBeUIsQ0FBQztBQUV0RSxNQUFNLE9BQU8sY0FBZSxTQUFRLFVBQVU7SUFDMUMscUdBQXFHO0lBQ3hHLFlBQVksRUFBUyxFQUFFLGlCQUFpQyxFQUFFLGdCQUFnQyxFQUFFLGFBQTZCLEVBQUUsa0JBQW1DLEVBQUUsS0FBYSxFQUFFLGNBQXNCLEVBQUUsUUFBaUIsRUFBRSxLQUFzQjtRQUN6TyxLQUFLLENBQUMsRUFBRSxFQUFFLG1CQUFtQixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ2xFLElBQUksQ0FBQyxLQUFLLEdBQUc7WUFDVCxtQkFBbUIsRUFBRSxpQkFBaUI7WUFDdEMsa0JBQWtCLEVBQUUsZ0JBQWdCO1lBQ3BDLGVBQWUsRUFBRSxhQUFhO1lBQzlCLGtCQUFrQixFQUFFLGtCQUFrQjtZQUN0QyxnQkFBZ0IsRUFBRSxjQUFjO1NBQ25DLENBQUE7SUFDTCxDQUFDO0NBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBVc2VyQ29sdW1uQ29tcG9uZW50IH0gZnJvbSBcIi4uL2NvbHVtbnMvdXNlci1jb2x1bW4vdXNlci1jb2x1bW4uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFRvdHNDb2x1bW4sIFRvdHNDb2x1bW5PcmRlciB9IGZyb20gXCIuLi9lbnRpdGllcy90b3RzLWNvbHVtblwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRvdHNVc2VyQ29sdW1uIGV4dGVuZHMgVG90c0NvbHVtbiB7XHJcbiAgICAvLyBmaXJzdCBuYW1lLCBsYXN0IG5hbWUgeSBwaG90byBvYmxpZ2F0b3Jpb3MuIFNpIG5vIGhheSB2YXJpYWJsZSBkZSBmb3RvLCBxdWUgdXNlbiB0d28gc3RyaW5nIGNvbHVtblxyXG5cdGNvbnN0cnVjdG9yKGlkOnN0cmluZywgZmlyc3ROYW1lRmllbGRLZXk6c3RyaW5nfHN0cmluZ1tdLCBsYXN0TmFtZUZpZWxkS2V5OnN0cmluZ3xzdHJpbmdbXSwgcGhvdG9GaWVsZEtleTpzdHJpbmd8c3RyaW5nW10sIHNlY29uZExpbmVGaWVsZEtleT86c3RyaW5nfHN0cmluZ1tdLCB0aXRsZT86c3RyaW5nLCBvbmxpbmVGaWVsZEtleT86c3RyaW5nLCBoYXNPcmRlcj86Ym9vbGVhbiwgb3JkZXI/OlRvdHNDb2x1bW5PcmRlcikge1xyXG4gICAgICAgIHN1cGVyKGlkLCBVc2VyQ29sdW1uQ29tcG9uZW50LCB1bmRlZmluZWQsIHRpdGxlLCBoYXNPcmRlciwgb3JkZXIpO1xyXG4gICAgICAgIHRoaXMuZXh0cmEgPSB7XHJcbiAgICAgICAgICAgIGZpZWxkX2ZpcnN0bmFtZV9rZXk6IGZpcnN0TmFtZUZpZWxkS2V5LFxyXG4gICAgICAgICAgICBmaWVsZF9sYXN0bmFtZV9rZXk6IGxhc3ROYW1lRmllbGRLZXksXHJcbiAgICAgICAgICAgIGZpZWxkX3Bob3RvX2tleTogcGhvdG9GaWVsZEtleSxcclxuICAgICAgICAgICAgZmllbGRfc3VidGl0bGVfa2V5OiBzZWNvbmRMaW5lRmllbGRLZXksXHJcbiAgICAgICAgICAgIGZpZWxkX29ubGluZV9rZXk6IG9ubGluZUZpZWxkS2V5XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19