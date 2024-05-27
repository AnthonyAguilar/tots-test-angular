import { Inject, Injectable } from '@angular/core';
import { Client } from '../entities/client';
import { HttpClient } from '@angular/common/http';
import {
  TOTS_CORE_PROVIDER,
  TotsBaseHttpService,
  TotsCoreConfig,
  TotsListResponse,
} from '@tots/core';
import { Observable } from 'rxjs';
import {
  ClientListResponse,
  ClientRemoveResponse,
  ClientResponse,
} from '../interfaces/response-client-interface';

@Injectable({
  providedIn: 'root',
})
export class ClientService extends TotsBaseHttpService<Client> {
  private baseUrl: string;

  constructor(
    @Inject(TOTS_CORE_PROVIDER) protected override config: TotsCoreConfig,
    protected override http: HttpClient
  ) {
    super(config, http);
    this.baseUrl = this.config.baseUrl;
    this.basePathUrl = 'client';
  }

  // Obtener clientes
  clientsList(): Observable<ClientListResponse> {
    const urlFull = `${this.baseUrl}${this.basePathUrl}/list`;
    return this.http.post<ClientListResponse>(urlFull, {});
  }

  // Crear y Editar
  client(client: Client) {
    const urlFull = `${this.baseUrl}${this.basePathUrl}/save`;
    return this.http.post<ClientResponse>(urlFull, client);
  }
  // Eliminar clientes
  clientRemove(id: number) {
    const urlFull = `${this.baseUrl}${this.basePathUrl}/remove/${id}`;
    return this.http.delete<ClientRemoveResponse>(urlFull);
  }
}
