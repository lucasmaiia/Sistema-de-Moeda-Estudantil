package com.example.EduCoin.dto;

import jakarta.validation.constraints.NotBlank;

public record EmpresaDto(@NotBlank String nome, @NotBlank String cnpj, @NotBlank String vantagens) {
    
}
