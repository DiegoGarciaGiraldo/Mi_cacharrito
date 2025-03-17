package com.example.micacharrito.controlador;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.micacharrito.modelo.persona;
import com.example.micacharrito.modelo.usuario;
import com.example.micacharrito.repositorio.persona_Repositorio;

@RestController
@RequestMapping("/Persona/")
@CrossOrigin(origins = "http://localhost:4200/")
public class persona_Controlador {
	
	@Autowired
	private persona_Repositorio reppersona;
	
	@Autowired
	private usuario_Controlador usuariocon;
	
	
	// funcion para registrar una nueva en el sistema
		@GetMapping("/crear")
		public boolean validacionloguin(
				  @RequestParam String cedula,
				  @RequestParam String nombre,
				  @RequestParam String apellidos,
				  @RequestParam String correo,
				  @RequestParam String telefono,
				  @RequestParam ("fecha1") @DateTimeFormat(pattern = "dd/MM/yyyy") Date explicencia,
				  @RequestParam ("fecha2") @DateTimeFormat(pattern = "dd/MM/yyyy") Date vigencia,
				  @RequestParam String categoria,
				  @RequestParam String clave) {	
			
			usuario usu= this.usuariocon.crear_Usuario(cedula, clave);
			
			if(usu !=null) {
				
				persona nueva = new persona(telefono,usu,nombre,apellidos,explicencia, vigencia, correo, categoria ); 
				
				this.reppersona.save(nueva);
				
				return true;
				
			}else {
				
				return false;
				
			}
			
			
			
		}
	

}
