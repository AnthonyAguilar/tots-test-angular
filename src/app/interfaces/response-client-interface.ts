import { TotsListResponse } from "@tots/core"
import { Client } from "../entities/client"

export interface ClientListResponse {
  response: TotsListResponse<Client>
  success: boolean;
}

export interface ClientResponse {
  response: Client
  success: boolean;
}
export interface ClientRemoveResponse {
  response: boolean
  success: boolean;
}