package com.example.EduCoin.model;

import java.util.UUID;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "EMPRESAS")
public class EmpresaModel {
    
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private UUID id;

    private String nome;
    private String cnpj;
    private String vantagens;

    public void setCnpj(String cnpj) {
        this.cnpj = cnpj;
    }
    public void setId(UUID id) {
        this.id = id;
    }
    public void setNome(String nome) {
        this.nome = nome;
    }
    public void setVantagens(String vantagens) {
        this.vantagens = vantagens;
    }
    public String getCnpj() {
        return cnpj;
    }
    public UUID getId() {
        return id;
    }
    public String getNome() {
        return nome;
    }public String getVantagens() {
        return vantagens;
    }
}
