import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { API_CONFIG } from "src/app/config/api.config";
import { AtendimentoOrdemServicoDTO } from "src/app/models/AtendimentoOrdemServicoAbertaDTO";
import { ClienteDTO } from "src/app/models/ClienteDTO";



@Injectable()
export class AtendimentoOsAbertaService{
    constructor(public http: HttpClient){

    }

    findAll(): Observable<AtendimentoOrdemServicoDTO[]>{
        return this.http.get<AtendimentoOrdemServicoDTO[]>(`${API_CONFIG.baseUrl}/atendimentos/statustecnicosql/1/Sakuragi Hanamich`);
    }
}