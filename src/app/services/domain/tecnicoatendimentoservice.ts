
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { API_CONFIG } from "src/app/config/api.config";
import { AtendimentoOrdemServicoDTO } from "src/app/models/AtendimentoOrdemServicoAbertaDTO";
import { ClienteDTO } from "src/app/models/ClienteDTO";
import { TecnicoAtendimentoDTO } from "src/app/models/TecnicoAtendimentoDTO";



@Injectable()
export class TecnicoAtendimentoService{
    constructor(public http: HttpClient){

    }

    findAll(): Observable<TecnicoAtendimentoDTO[]>{
        return this.http.get<TecnicoAtendimentoDTO[]>(`${API_CONFIG.baseUrl}/atendimentos/tecnicoatendimentosql/1`);
    }
}