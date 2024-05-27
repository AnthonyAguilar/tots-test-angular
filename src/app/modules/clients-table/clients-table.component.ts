import { Component, ViewChild } from '@angular/core';
import { Validators } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { TotsListResponse } from '@tots/core';
import {
  StringFieldComponent,
  SubmitAndCancelButtonsFieldComponent,
  SubmitButtonFieldComponent,
  TotsFormModalService,
  TotsModalConfig,
} from '@tots/form';
import {
  MoreMenuColumnComponent,
  StringColumnComponent,
  TotsActionTable,
  TotsTableComponent,
  TotsTableConfig,
} from '@tots/table';
import { delay, of, tap } from 'rxjs';
import { Client } from 'src/app/entities/client';
import {
  ClientListResponse,
  ClientRemoveResponse,
  ClientResponse,
} from 'src/app/interfaces/response-client-interface';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-clients-table',
  templateUrl: './clients-table.component.html',
  styleUrls: ['./clients-table.component.scss'],
})
export class ClientsTableComponent {
  @ViewChild('tableComp') tableComp!: TotsTableComponent;

  items: Client[] = [];
  config = new TotsTableConfig();

  constructor(
    private clientService: ClientService,
    protected modalService: TotsFormModalService
  ) {}

  ngOnInit(): void {
    this.legacyConfig();
    this.getListClients();
  }

  getListClients() {
    this.clientService.clientsList().subscribe({
      next: (resp: ClientListResponse) => {
        if (!resp.success) {
          return console.log('error inesperado');
        }
        this.items = resp.response.data;
        this.config.obs = of(resp.response);
        this.tableComp.loadItems();
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  client(client: Client) {
    this.clientService.client(client).subscribe({
      next: (resp: ClientResponse) => {
        if (!resp.success) {
          return console.log('error inesperado');
        }
        this.getListClients();
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  removeItem(id: number) {
    this.clientService.clientRemove(id).subscribe({
      next: (resp: ClientRemoveResponse) => {
        if (!resp.success) {
          return console.log('error inesperado');
        }
        this.getListClients();
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  onOpenModalClient(client: Client | null) {
    let config = new TotsModalConfig();
    config.title = 'Modal de ejemplo';
    config.autoSave = true;
    config.item = client;
    config.fields = [
      // Campo string
      {
        key: 'firstname',
        component: StringFieldComponent,
        label: 'Nombre',
        validators: [Validators.required],
        extra: { caption: 'Primer nombre.' },
      },
      {
        key: 'lastname',
        component: StringFieldComponent,
        label: 'Apellido',
        validators: [Validators.required],
        extra: { caption: 'Primer Apellido.' },
      },
      {
        key: 'email',
        component: StringFieldComponent,
        label: 'Correo',
        validators: [Validators.required, Validators.email],
        extra: { caption: 'Correo electronico.' },
      },
      {
        key: 'address',
        component: StringFieldComponent,
        label: 'Direccion',
        validators: [Validators.required],
        extra: { caption: 'Ciudad, Calle, altura y puerta.' },
      },
      {
        key: 'photo',
        component: StringFieldComponent,
        label: 'Foto',
        validators: [],
        extra: { caption: 'Url de imagen de perfil.' },
      },
      {
        key: 'caption',
        component: StringFieldComponent,
        label: 'Subtítulo',
        validators: [],
        extra: { caption: 'Descripcion breve.' },
      },
      { key: 'submit', component: SubmitButtonFieldComponent, label: 'Enviar' },
    ];

    this.modalService
      .open(config)
      .pipe(
        tap((action) => {
          if (action.key == 'submit') {
            action.modal?.componentInstance.showLoading();
            this.client(action.item);
          }
        })
      )
      .pipe(delay(1000))
      .pipe(tap((action) => action.modal?.componentInstance?.hideLoading()))
      .subscribe((action) => {
        if (action.item) {
          action.modal?.close();
        }
      });
  }

  onOpenModalConfirm(id: number) {
    let config = new TotsModalConfig();
    config.title = '¿Esta seguro que desea continuar?';
    config.autoSave = true;
    config.item = '';
    config.fields = [
      {
        key: 'continue',
        component: SubmitAndCancelButtonsFieldComponent,
        label: 'Continuar',
        validators: [Validators.required],
        extra: { caption: 'Primer nombre.', cancelLabel: 'Cancelar' },
      },
    ];

    this.modalService
      .open(config)
      .pipe(
        tap((action) => {
          if (action.key == 'continue') {
            action.modal?.componentInstance.showLoading();
          } else if (action.key == 'cancel') {
            action.modal?.close();
          }
        })
      )
      .pipe(delay(1000))
      .subscribe((action) => {
        if (['continue', 'cancel'].includes(action.key)) {
          action.key == 'cancel' || this.removeItem(id);
          action.modal?.componentInstance?.hideLoading();
          action.modal?.close();
        }
      });
  }

  onOrder(column: any) {
    let response = new TotsListResponse();

    if (column.key == 'firstname' && column.order == 'asc') {
      response.data = this.items.sort((a, b) =>
        a.firstname > b.firstname ? 1 : b.firstname > a.firstname ? -1 : 0
      );
    } else if (column.key == 'firstname' && column.order == 'desc') {
      response.data = this.items.sort((a, b) =>
        a.firstname < b.firstname ? 1 : b.firstname < a.firstname ? -1 : 0
      );
    } else if (column.key == 'id' && column.order == 'asc') {
      response.data = this.items.sort((a, b) =>
        a.id > b.id ? 1 : b.id > a.id ? -1 : 0
      );
    } else if (column.key == 'id' && column.order == 'desc') {
      response.data = this.items.sort((a, b) =>
        a.id < b.id ? 1 : b.id < a.id ? -1 : 0
      );
    }

    let data = new TotsListResponse();
    data.data = [...response.data];

    this.config.obs = of(data);
    this.tableComp.loadItems();
  }

  onTableAction(action: TotsActionTable) {
    if (action.key == 'click-order') {
      this.onOrder(action.item);
    } else if (action.key == 'edit') {
      this.onOpenModalClient(action.item);
    } else if (action.key == 'remove') {
      this.onOpenModalConfirm(action.item.id);
    } else if (action.key == 'page-change') {
      this.changePage(action.item);
    }
  }

  legacyConfig() {
    this.config.id = 'table-example';
    this.config.columns = [
      {
        key: 'id',
        component: StringColumnComponent,
        title: 'ID',
        field_key: 'id',
        hasOrder: true,
      },
      {
        key: 'firstname',
        component: StringColumnComponent,
        title: 'Nombre',
        field_key: 'firstname',
        hasOrder: true,
      },
      {
        key: 'lastname',
        component: StringColumnComponent,
        title: 'Apellido',
        field_key: 'lastname',
        hasOrder: false,
      },
      {
        key: 'email',
        component: StringColumnComponent,
        title: 'Correo',
        field_key: 'email',
        hasOrder: true,
      },
      {
        key: 'more',
        component: MoreMenuColumnComponent,
        title: '',
        extra: {
          stickyEnd: true,
          width: '60px',
          actions: [
            { icon: 'edit', title: 'Editar', key: 'edit' },
            { icon: 'delete', title: 'Eliminar', key: 'remove' },
          ],
        },
      },
    ];
  }

  private changePage(pageEvent: PageEvent | null) {
    let data = new TotsListResponse();
    data.data = [...this.items];
    data.total = 50;

    this.config.obs = of(data).pipe(delay(2000));
    this.tableComp.loadItems();
  }
}
