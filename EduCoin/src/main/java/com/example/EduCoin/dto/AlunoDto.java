package com.example.EduCoin.dto;

import jakarta.validation.constraints.NotBlank;

public record AlunoDto(@NotBlank String nome, @NotBlank String cpf, @NotBlank String rg, @NotBlank String email, 
@NotBlank String endereco, @NotBlank String curso, @NotBlank String instituicao, @NotBlank String senha) {
    
}
