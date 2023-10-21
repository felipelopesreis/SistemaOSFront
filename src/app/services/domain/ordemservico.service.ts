import {HttpClient} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { API_CONFIG } from "src/app/config/api.config";


@Injectable()
export class OrdemServicoService{
    constructor(public http: HttpClient){

    }

    insert(ordemservico: any){
        return this.http.post(`${API_CONFIG.baseUrl}/ordem_servico`, 
                                ordemservico, {
                                    observe: 'response', 
                                    responseType: 'text'
                                });
    }

    findAll(): Observable<any[]>{
        return this.http.get<any[]>(`${API_CONFIG.baseUrl}/ordem_servico`);
    }

    findById(id: number) : Observable<any> {
        return this.http.get<any>(
            `${API_CONFIG.baseUrl}/ordem_servico/${id}`);
    }

    update(ordemservico: any){
        return this.http.put(`${API_CONFIG.baseUrl}/ordem_servico/${ordemservico.id}`, ordemservico,{observe: 'response', responseType: 'text'});
    }

    delete(id: number){
        return this.http.delete(`${API_CONFIG.baseUrl}/ordem_servico/${id}`)
    }

}   