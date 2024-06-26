import { MoreMenuColumnComponent } from "../columns/more-menu-column/more-menu-column.component";
import { TotsColumn } from "../entities/tots-column";
export class TotsMoreMenuColumn extends TotsColumn {
    constructor(id, items, title, stickyEnd) {
        super(id, MoreMenuColumnComponent, undefined, title);
        this.extra = {
            stickyEnd: stickyEnd,
            actions: items
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG90cy1tb3JlLW1lbnUtY29sdW1uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdG90cy90YWJsZS9zcmMvbGliL2NvbHVtbi1mYWN0b3JpZXMvdG90cy1tb3JlLW1lbnUtY29sdW1uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQ2pHLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUdyRCxNQUFNLE9BQU8sa0JBQW1CLFNBQVEsVUFBVTtJQUNqRCxZQUFZLEVBQVMsRUFBRSxLQUF3QixFQUFFLEtBQWEsRUFBRSxTQUFrQjtRQUMzRSxLQUFLLENBQUMsRUFBRSxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsS0FBSyxHQUFHO1lBQ1QsU0FBUyxFQUFFLFNBQVM7WUFDcEIsT0FBTyxFQUFFLEtBQUs7U0FDakIsQ0FBQTtJQUNMLENBQUM7Q0FDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vcmVNZW51Q29sdW1uQ29tcG9uZW50IH0gZnJvbSBcIi4uL2NvbHVtbnMvbW9yZS1tZW51LWNvbHVtbi9tb3JlLW1lbnUtY29sdW1uLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBUb3RzQ29sdW1uIH0gZnJvbSBcIi4uL2VudGl0aWVzL3RvdHMtY29sdW1uXCI7XHJcbmltcG9ydCB7IFRvdHNNb3JlTWVudUl0ZW0gfSBmcm9tIFwiLi4vZW50aXRpZXMvdG90cy1tb3JlLW1lbnUtaXRlbVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRvdHNNb3JlTWVudUNvbHVtbiBleHRlbmRzIFRvdHNDb2x1bW4ge1xyXG5cdGNvbnN0cnVjdG9yKGlkOnN0cmluZywgaXRlbXM6VG90c01vcmVNZW51SXRlbVtdLCB0aXRsZT86c3RyaW5nLCBzdGlja3lFbmQ/OmJvb2xlYW4pIHtcclxuICAgICAgICBzdXBlcihpZCwgTW9yZU1lbnVDb2x1bW5Db21wb25lbnQsIHVuZGVmaW5lZCwgdGl0bGUpO1xyXG4gICAgICAgIHRoaXMuZXh0cmEgPSB7XHJcbiAgICAgICAgICAgIHN0aWNreUVuZDogc3RpY2t5RW5kLFxyXG4gICAgICAgICAgICBhY3Rpb25zOiBpdGVtc1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ==