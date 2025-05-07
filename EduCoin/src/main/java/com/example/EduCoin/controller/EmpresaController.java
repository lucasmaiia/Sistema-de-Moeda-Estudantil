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

import com.example.EduCoin.dto.EmpresaDto;
import com.example.EduCoin.model.EmpresaModel;
import com.example.EduCoin.repository.EmpresaRepository;

import jakarta.validation.Valid;

@RestController
public class EmpresaController {   
    
    @Autowired
    EmpresaRepository empresaRepository;

    @PostMapping("/empresas")
    public ResponseEntity<EmpresaModel> criarEmpresa(@RequestBody @Valid EmpresaDto empresaDto){
        var empresaModel = new EmpresaModel();
        BeanUtils.copyProperties(empresaDto, empresaModel);
        return ResponseEntity.status(HttpStatus.CREATED).body(empresaRepository.save(empresaModel));
    }

    @GetMapping("/empresas")
    public ResponseEntity<List<EmpresaModel>> listarEmpresa(){
        return ResponseEntity.status(HttpStatus.OK).body(empresaRepository.findAll());
    }

    @PutMapping("/empresas/{id}")
    public ResponseEntity<Object> atualizarEmpresa(@PathVariable(value="id") UUID id, @RequestBody @Valid EmpresaDto empresaDto){
        Optional<EmpresaModel> empresa = empresaRepository.findById(id);
        if(empresa.isEmpty()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Empresa não encontrada");
        }
        var empresaModel = empresa.get();
        BeanUtils.copyProperties(empresaDto, empresaModel);
        return ResponseEntity.status(HttpStatus.OK).body(empresaRepository.save(empresaModel));
    }

    @DeleteMapping("/empresas/{id}")
    public ResponseEntity<Object> deletarEmpresa(@PathVariable(value="id") UUID id){
        Optional<EmpresaModel> empresa = empresaRepository.findById(id);
        if(empresa.isEmpty()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Empresa não encontrada");
        }
        empresaRepository.delete(empresa.get());
        return ResponseEntity.status(HttpStatus.OK).body("Empresa deletada");
    }
}
