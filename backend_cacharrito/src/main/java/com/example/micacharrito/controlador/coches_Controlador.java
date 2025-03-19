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
	public List<coches> listacoches() {
	  
	        return this.repcoches.findByEstado("disponible");
	}
	
	@GetMapping("/ListaCochesNodisponibles")
	public List<coches> listacochesnodisponibles() {
	  
	        return this.repcoches.findByEstado("ocupado");
	}
	
	
	
	@GetMapping("/filtros")
	public List<coches> listacoches(@RequestParam String tipo) {
		
	        return this.repcoches.findByEstadoAndTipoVeh("disponible", tipo);
	        
	}
	
	@GetMapping("/ocupados")
	public List<coches> ocupados(@RequestParam String tipo) {
		
	  
	        return this.repcoches.findByEstadoAndTipoVeh("ocupado", tipo);
	}
	
	@PostMapping("/alquilados")
    public List<coches> obtenerVehiculosAlquilados(@RequestParam String usuario, @RequestParam String password) {
        if (!esAdministrador(usuario, password)) {
            throw new RuntimeException("Acceso denegado. Solo administradores pueden ver esta lista.");
        }else {
        	
        	return repcoches.findByEstado("Alquilado");
        	
        }
        
    }

    @GetMapping("/validar")
    private boolean esAdministrador(String usuario, String password) {
        return repAdmin.findByUsuarioAndPassword(usuario, password).isPresent();
    }
	

    
    public coches cambiarEstado(coches vehiculo, String estado) {
    	
    	
    	vehiculo.setEstado(estado);
    	
    	this.repcoches.save(vehiculo);
    	
    	return vehiculo;
    }
    
    
    
    @GetMapping("/buscar")
    public coches buscarVehiculo(@RequestParam String placa) {
        return this.repcoches.findById(placa).orElse(null);
    }

  
    @PostMapping("/actualizarEstado")
    public String actualizarEstado(@RequestParam String placa, @RequestParam String estado) {
        coches cochecito = repcoches.findById(placa).orElse(null);
        if (cochecito != null) {
        	cochecito.setEstado(estado);
            repcoches.save(cochecito);
            return "Estado actualizado correctamente";
        }
        return "No se pudo actualizar el estado";
    }
}
