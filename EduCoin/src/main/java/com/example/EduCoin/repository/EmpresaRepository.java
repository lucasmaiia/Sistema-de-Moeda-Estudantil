package com.example.EduCoin.repository;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.EduCoin.model.EmpresaModel;

public interface EmpresaRepository extends JpaRepository<EmpresaModel, UUID> {
    
}
