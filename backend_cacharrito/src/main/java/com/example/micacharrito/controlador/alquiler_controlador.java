package com.example.micacharrito.controlador;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.micacharrito.modelo.administrador;
import com.example.micacharrito.modelo.alquiler;
import com.example.micacharrito.modelo.coches;
import com.example.micacharrito.modelo.persona;
import com.example.micacharrito.modelo.usuario;
import com.example.micacharrito.repositorio.administrador_Repositorio;
import com.example.micacharrito.repositorio.alquiler_repositorio;
import com.example.micacharrito.repositorio.coches_Repositorio;
import com.example.micacharrito.repositorio.persona_Repositorio;

@RestController
@RequestMapping("/Alquilar/")
@CrossOrigin(origins = "http://localhost:4200/")

public class alquiler_controlador {
	
	@Autowired
	private alquiler_repositorio repAlquiler;
	
	@Autowired
	private administrador_Repositorio repAdmin;
	
	@Autowired
	private persona_Repositorio reppersona;
	
	@Autowired
	private coches_Repositorio repcoche;
	
	@Autowired
	private coches_Controlador Concoches; // para acceder a los metodos del controlador de coches
	
	@Autowired
	private usuario_Controlador Conusuario; // para acceder a los metodos del controlador de usuario
	
	
	
	// funcion que alamcena 
	@GetMapping("/registrar")
	public alquiler registroAlquiler(
			@RequestParam String placa,
			@RequestParam ("fechai") @DateTimeFormat(pattern = "dd/MM/yyyy") Date fecha1,
			@RequestParam ("fechat") @DateTimeFormat(pattern = "dd/MM/yyyy") Date fecha2,
			@RequestParam float valor) {
		
		
		administrador admin = this.repAdmin.findById(1L).get();
		
		usuario usuario = this.Conusuario.logueado;
		
		persona perso = this.reppersona.findByUsuario(usuario);
		
		coches coche = this.repcoche.findAllByPlaca(placa);	
		
		this.Concoches.cambiarEstado(coche,"ocupado");
		
		alquiler nuevo = new alquiler(coche, perso,admin,"pendiente", fecha1,fecha2,valor);
		
		this.repAlquiler.save(nuevo);
		
		
		return nuevo;
	}
	
	// funcion para buscar los alquileres de un usuario
	
	@GetMapping("/alquileres")
	public List<alquiler> listaporpersona() {
		
		usuario usuario = this.Conusuario.logueado;
		
		persona perso = this.reppersona.findByUsuario(usuario);
		
		
		return this.repAlquiler.findByPersonaAndEstadoAlq(perso,"pendiente");
	}
	
	// funcion para eliminar un alquiler
	
	
	@GetMapping("/eliminar")
	public boolean eliminaralquiler(
			@RequestParam String placa,
			@RequestParam Long id) {
		
		coches coche = this.repcoche.findAllByPlaca(placa);	
		
		this.Concoches.cambiarEstado(coche,"disponible");
		
		this.repAlquiler.deleteById(id);
		
		return true;
	}
	

}
