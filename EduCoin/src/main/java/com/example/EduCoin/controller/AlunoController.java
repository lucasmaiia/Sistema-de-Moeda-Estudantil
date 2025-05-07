package com.example.EduCoin.controller;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.EduCoin.dto.AlunoDto;
import com.example.EduCoin.model.AlunoModel;
import com.example.EduCoin.repository.AlunoRepository;

import jakarta.validation.Valid;

@RestController
public class AlunoController {
    @Autowired
    AlunoRepository alunoRepository;

    @PostMapping("/alunos")
    public ResponseEntity<AlunoModel> criarAluno(@RequestBody @Valid AlunoDto alunoDto){
        var alunoModel = new AlunoModel();
        BeanUtils.copyProperties(alunoDto, alunoModel);
        return ResponseEntity.status(HttpStatus.CREATED).body(alunoRepository.save(alunoModel));
    }

    @GetMapping("/alunos")
    public ResponseEntity<List<AlunoModel>> listarAluno(){
        return ResponseEntity.status(HttpStatus.OK).body(alunoRepository.findAll());
    }

    @PutMapping("/alunos/{id}")
    public ResponseEntity<Object> atualizarAluno(@PathVariable(value="id") UUID id, @RequestBody @Valid AlunoDto alunoDto){
        Optional<AlunoModel> aluno = alunoRepository.findById(id);
        if(aluno.isEmpty()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Aluno não encontrado");
        }
        var alunoModel = aluno.get();
        BeanUtils.copyProperties(alunoDto, alunoModel);
        return ResponseEntity.status(HttpStatus.OK).body(alunoRepository.save(alunoModel));
    }

    @DeleteMapping("/alunos/{id}")
    public ResponseEntity<Object> deletarAluno(@PathVariable(value="id") UUID id){
        Optional<AlunoModel> aluno = alunoRepository.findById(id);
        if(aluno.isEmpty()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Aluno não encontrado");
        }
        alunoRepository.delete(aluno.get());
        return ResponseEntity.status(HttpStatus.OK).body("Aluno deletado");
    }
}
