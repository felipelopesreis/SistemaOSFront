import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { API_CONFIG } from "src/app/config/api.config";
import { AtendimentoOrdemServicoDTO } from "src/app/models/AtendimentoOrdemServicoAbertaDTO";
import { AtendimentoOrdemServicoFechadoDTO } from "src/app/models/AtendimentoOrdemServicoFechadoDTO";
import { ClienteDTO } from "src/app/models/ClienteDTO";



@Injectable()
export class AtendimentoOsFechadoService{
    constructor(public http: HttpClient){

    }

    findAll(): Observable<AtendimentoOrdemServicoFechadoDTO[]>{
        return this.http.get<AtendimentoOrdemServicoDTO[]>(`${API_CONFIG.baseUrl}/atendimentos/statustecnicosql/2/Sakuragi Hanamich`);
    }
}