import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { API_CONFIG } from "src/app/config/api.config";
import { ClienteDTO } from "src/app/models/ClienteDTO";



@Injectable()
export class ClienteService{
    constructor(public http: HttpClient){

    }

    findAll(): Observable<ClienteDTO[]>{
        return this.http.get<ClienteDTO[]>(`${API_CONFIG.baseUrl}/cliente`);
    }

    findById(id: number) : Observable<ClienteDTO> {
        return this.http.get<ClienteDTO>(
            `${API_CONFIG.baseUrl}/cliente/${id}`);
    }

    insert(cliente: ClienteDTO){
        return this.http.post(`${API_CONFIG.baseUrl}/cliente`, 
                                cliente, {
                                    observe: 'response', 
                                    responseType: 'text'
                                });
    }
}