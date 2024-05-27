import { BalanceCurrencyIconColumnComponent } from "../columns/balance-currency-icon-column/balance-currency-icon-column.component";
import { TotsColumn } from "../entities/tots-column";
export class TotsBalanceIconColumn extends TotsColumn {
    constructor(id, activeAssetFieldKey, passiveAssetFieldKey, neutralIcon, positiveIcon, negativeIcon, title, hasOrder, order) {
        super(id, BalanceCurrencyIconColumnComponent, undefined, title, hasOrder, order);
        this.extra = {
            field_key_credit: activeAssetFieldKey,
            field_key_debit: passiveAssetFieldKey,
            icon_neutral: neutralIcon,
            icon_positive: positiveIcon,
            icon_negative: negativeIcon
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG90cy1iYWxhbmNlLWljb24tY29sdW1uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdG90cy90YWJsZS9zcmMvbGliL2NvbHVtbi1mYWN0b3JpZXMvdG90cy1iYWxhbmNlLWljb24tY29sdW1uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxrQ0FBa0MsRUFBRSxNQUFNLGdGQUFnRixDQUFDO0FBQ3BJLE9BQU8sRUFBRSxVQUFVLEVBQW1CLE1BQU0seUJBQXlCLENBQUM7QUFFdEUsTUFBTSxPQUFPLHFCQUFzQixTQUFRLFVBQVU7SUFDcEQsWUFBWSxFQUFTLEVBQUUsbUJBQW1DLEVBQUUsb0JBQW9DLEVBQUUsV0FBa0IsRUFBRSxZQUFtQixFQUFFLFlBQW1CLEVBQUUsS0FBYSxFQUFFLFFBQWlCLEVBQUUsS0FBc0I7UUFDak4sS0FBSyxDQUFDLEVBQUUsRUFBRSxrQ0FBa0MsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNqRixJQUFJLENBQUMsS0FBSyxHQUFHO1lBQ1QsZ0JBQWdCLEVBQUUsbUJBQW1CO1lBQ3JDLGVBQWUsRUFBRSxvQkFBb0I7WUFDckMsWUFBWSxFQUFFLFdBQVc7WUFDekIsYUFBYSxFQUFFLFlBQVk7WUFDM0IsYUFBYSxFQUFFLFlBQVk7U0FDOUIsQ0FBQTtJQUNMLENBQUM7Q0FDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhbGFuY2VDdXJyZW5jeUljb25Db2x1bW5Db21wb25lbnQgfSBmcm9tIFwiLi4vY29sdW1ucy9iYWxhbmNlLWN1cnJlbmN5LWljb24tY29sdW1uL2JhbGFuY2UtY3VycmVuY3ktaWNvbi1jb2x1bW4uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFRvdHNDb2x1bW4sIFRvdHNDb2x1bW5PcmRlciB9IGZyb20gXCIuLi9lbnRpdGllcy90b3RzLWNvbHVtblwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRvdHNCYWxhbmNlSWNvbkNvbHVtbiBleHRlbmRzIFRvdHNDb2x1bW4ge1xyXG5cdGNvbnN0cnVjdG9yKGlkOnN0cmluZywgYWN0aXZlQXNzZXRGaWVsZEtleTpzdHJpbmd8c3RyaW5nW10sIHBhc3NpdmVBc3NldEZpZWxkS2V5OnN0cmluZ3xzdHJpbmdbXSwgbmV1dHJhbEljb246c3RyaW5nLCBwb3NpdGl2ZUljb246c3RyaW5nLCBuZWdhdGl2ZUljb246c3RyaW5nLCB0aXRsZT86c3RyaW5nLCBoYXNPcmRlcj86Ym9vbGVhbiwgb3JkZXI/OlRvdHNDb2x1bW5PcmRlcikge1xyXG4gICAgICAgIHN1cGVyKGlkLCBCYWxhbmNlQ3VycmVuY3lJY29uQ29sdW1uQ29tcG9uZW50LCB1bmRlZmluZWQsIHRpdGxlLCBoYXNPcmRlciwgb3JkZXIpO1xyXG4gICAgICAgIHRoaXMuZXh0cmEgPSB7XHJcbiAgICAgICAgICAgIGZpZWxkX2tleV9jcmVkaXQ6IGFjdGl2ZUFzc2V0RmllbGRLZXksXHJcbiAgICAgICAgICAgIGZpZWxkX2tleV9kZWJpdDogcGFzc2l2ZUFzc2V0RmllbGRLZXksXHJcbiAgICAgICAgICAgIGljb25fbmV1dHJhbDogbmV1dHJhbEljb24sXHJcbiAgICAgICAgICAgIGljb25fcG9zaXRpdmU6IHBvc2l0aXZlSWNvbixcclxuICAgICAgICAgICAgaWNvbl9uZWdhdGl2ZTogbmVnYXRpdmVJY29uXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19