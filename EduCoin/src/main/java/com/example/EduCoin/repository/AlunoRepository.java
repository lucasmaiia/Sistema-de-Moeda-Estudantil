package com.example.EduCoin.repository;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.EduCoin.model.AlunoModel;

@Repository
public interface AlunoRepository extends JpaRepository<AlunoModel, UUID> {
    
}
