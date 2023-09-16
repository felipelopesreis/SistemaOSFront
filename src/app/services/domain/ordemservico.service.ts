import {HttpClient} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { API_CONFIG } from "src/app/config/api.config";
import { OrdemServicoDTO } from "src/app/models/OrdemServicoDTO";


@Injectable()
export class OrdemServicoService{
    constructor(public http: HttpClient){

    }

    findAll(): Observable<OrdemServicoDTO[]>{
        return this.http.get<OrdemServicoDTO[]>(`${API_CONFIG.baseUrl}/ordem_servico`);
    }
}