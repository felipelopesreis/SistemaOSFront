import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { API_CONFIG } from "src/app/config/api.config";
import { FuncionarioDTO } from "src/app/models/FuncionarioDTO";


@Injectable()
export class FuncionarioService{
    constructor(public http: HttpClient){

    }

    findAll(): Observable<FuncionarioDTO[]>{
        return this.http.get<FuncionarioDTO[]>(`${API_CONFIG.baseUrl}/funcionarios`);
    }

    findById(id: number) : Observable<FuncionarioDTO> {
        return this.http.get<FuncionarioDTO>(
            `${API_CONFIG.baseUrl}/funcionarios/${id}`);
    }

    insert(funcionario: FuncionarioDTO){
        return this.http.post(`${API_CONFIG.baseUrl}/funcionarios`, 
                                funcionario, {
                                    observe: 'response', 
                                    responseType: 'text'
                                });
    }

    update(funcionario: FuncionarioDTO){
        return this.http.put(`${API_CONFIG.baseUrl}/funcionarios/${funcionario.id}`, funcionario,{observe: 'response', responseType: 'text'});
    }

    delete(id: number){
        return this.http.delete(`${API_CONFIG.baseUrl}/funcionarios/${id}`)
    }
    
}