package com.example.micacharrito.controlador;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.micacharrito.modelo.usuario_Admin;
import com.example.micacharrito.repositorio.usuario_Admin_Repositorio;

import jakarta.servlet.http.HttpSession;

@RestController
@RequestMapping("/usuario_admin/")
@CrossOrigin(origins = "http://localhost:4200/")

public class usuario_Admin_Controlador {
	
	 @Autowired
	    private usuario_Admin_Repositorio repUserAdmin;

	    @PostMapping("/login")
	    public String login(@RequestParam String usuario, @RequestParam String password) {
	        Optional<usuario_Admin> user = repUserAdmin.findByUsuario(usuario);

	        if (user.isPresent() && user.get().getPassword().equals(password)) {
	            return "Inicio de sesión exitoso";
	        }
	        return "Credenciales incorrectas";
	    }
	    
	
}
