package com.example.EduCoin.model;

import java.util.UUID;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "ALUNOS")
public class AlunoModel {
    
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private UUID id;

    private String nome;
    private String cpf;
    private String rg;
    private String email;
    private String endereco;
    private String curso;
    private String instituicao;

    public String getCpf() {
        return cpf;
    }
    public String getCurso() {
        return curso;
    }
    public String getEmail() {
        return email;
    }
    public String getEndereco() {
        return endereco;
    }
    public UUID getId() {
        return id;
    }
    public String getInstituicao() {
        return instituicao;
    }
    public String getNome() {
        return nome;
    }
    public String getRg() {
        return rg;
    }
    public void setCpf(String cpf) {
        this.cpf = cpf;
    }
    public void setCurso(String curso) {
        this.curso = curso;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public void setEndereco(String endereco) {
        this.endereco = endereco;
    }
    public void setId(UUID id) {
        this.id = id;
    }
    public void setInstituicao(String instituicao) {
        this.instituicao = instituicao;
    }
    public void setNome(String nome) {
        this.nome = nome;
    }
    public void setRg(String rg) {
        this.rg = rg;
    }
}
