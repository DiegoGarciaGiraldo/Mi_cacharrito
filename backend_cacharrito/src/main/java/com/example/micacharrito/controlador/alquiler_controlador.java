package com.example.micacharrito.controlador;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.micacharrito.repositorio.alquiler_repositorio;
import com.example.micacharrito.modelo.alquiler;

@RestController
@RequestMapping("/alquiler/")
@CrossOrigin(origins = "http://localhost:4200/")


public class alquiler_controlador {
	
	 @Autowired alquiler_repositorio repAlq;
	 
	 @GetMapping("/Lista-No-Entregados")
	 public List<alquiler> obtenerNoentregados (
			 @RequestParam String estadoAlq 
			 ){
		 return repAlq.findByEstadoAlq("No entregado");
		 
	 }
	 
	 @GetMapping("/alquiler/buscar")
	 public alquiler buscarAlquiler(@RequestParam Long numeroAlquiler) {
	     List<alquiler> alq = repAlq.findByNumeroAlquiler(numeroAlquiler);

	     if (!alq.isEmpty()) {
	         return alq.get(0); 
	     } else {
	         return null; 
	     }
	 }
	
	
	 
}
