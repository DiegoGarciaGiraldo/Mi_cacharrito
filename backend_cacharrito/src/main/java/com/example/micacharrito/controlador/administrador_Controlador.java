package com.example.micacharrito.controlador;


import com.example.micacharrito.modelo.administrador;
import com.example.micacharrito.modelo.usuario_Admin;
import com.example.micacharrito.repositorio.administrador_Repositorio;
import com.example.micacharrito.repositorio.usuario_Admin_Repositorio;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/acceso/administrador/")
@CrossOrigin(origins = "http://localhost:4200/")

public class administrador_Controlador {
	
	 @Autowired
	    private administrador_Repositorio repAdministrador;
        
	    /*@GetMapping("/perfil")
	    public Optional<administrador> obtenerPerfil(HttpSession session) {
	        Long IdPerfil = (Long) session.getAttribute("admin");

	        if (IdPerfil != null) {
	            return repAdministrador.findByIdPerfil(IdPerfil);
	        }
	        return Optional.empty();
	    }*/
}

	


