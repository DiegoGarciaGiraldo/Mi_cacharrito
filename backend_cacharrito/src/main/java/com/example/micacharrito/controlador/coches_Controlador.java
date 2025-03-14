package com.example.micacharrito.controlador;


import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.micacharrito.modelo.coches;
import com.example.micacharrito.repositorio.coches_Repositorio;
import com.example.micacharrito.repositorio.usuario_Admin_Repositorio;





@RestController
@RequestMapping("/ver/coches/")
@CrossOrigin(origins = "http://localhost:4200/")

public class coches_Controlador {
	
	@Autowired
	private coches_Repositorio repcoches;
	
	@Autowired
	private usuario_Admin_Repositorio repAdmin;
	
	

	
	
	@GetMapping("/ListaCoches")
	public List<coches> listacoches(
			@RequestParam String tipo
			){
		
		return this.repcoches.findByEstadoAndTipoVeh("disponible",tipo);
		
	}
	
	
	@PostMapping("/alquilados")
    public List<coches> obtenerVehiculosAlquilados(@RequestParam String usuario, @RequestParam String password) {
        if (!esAdministrador(usuario, password)) {
            throw new RuntimeException("Acceso denegado. Solo administradores pueden ver esta lista.");
        }else {
        	
        	return repcoches.findByEstado("Alquilado");
        	
        }
        
    }

 
    // Validar si el usuario es administrador
    @GetMapping("/validar")
    private boolean esAdministrador(String usuario, String password) {
        return repAdmin.findByUsuarioAndPassword(usuario, password).isPresent();
    }
	

}
