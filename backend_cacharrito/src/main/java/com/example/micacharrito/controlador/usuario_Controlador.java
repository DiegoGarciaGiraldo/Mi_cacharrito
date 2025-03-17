package com.example.micacharrito.controlador;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.micacharrito.modelo.usuario;
import com.example.micacharrito.repositorio.usuario_Repositorio;

@RestController
@RequestMapping("/LoguinUsario/")
@CrossOrigin(origins = "http://localhost:4200/")
public class usuario_Controlador {
	
	@Autowired
	private usuario_Repositorio repusu;
	
	
	// funcion para encontrar un usuario y su clave
	@GetMapping("/validacion")
	public boolean validacionloguin(@RequestParam String usuario, @RequestParam String clave) {
		
		return this.repusu.findByIdentificacionAndContrasenaC(usuario,clave).isPresent();
		
	}
	
	// funcion para registrar un nuevo usuario
	
	public usuario crear_Usuario(@RequestParam String usuario, @RequestParam String clave) {
		
		try {
		
		usuario nuevo = new usuario(usuario, clave);
		
		return this.repusu.save(nuevo);
		
		
		}catch (Exception e) {
			
			return null;
				
		}
	}
	
	

}
