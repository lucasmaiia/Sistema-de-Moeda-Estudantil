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
    private String email;
    private String senha;

    public void setCnpj(String cnpj) {
        this.cnpj = cnpj;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public void setId(UUID id) {
        this.id = id;
    }
    public void setNome(String nome) {
        this.nome = nome;
    }
 public void setSenha(String senha) {
     this.senha = senha;
 }
    public String getCnpj() {
        return cnpj;
    }
    public UUID getId() {
        return id;
    }
    public String getEmail() {
        return email;
    }
    public String getNome() {
        return nome;
    }
    public String getSenha() {
        return senha;
    }
}
