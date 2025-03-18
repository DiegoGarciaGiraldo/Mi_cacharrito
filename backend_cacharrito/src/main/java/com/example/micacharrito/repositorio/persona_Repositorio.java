package com.example.micacharrito.repositorio;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.micacharrito.modelo.persona;
import com.example.micacharrito.modelo.usuario;

public interface persona_Repositorio extends JpaRepository <persona,String> {
	
	public persona findByUsuario(usuario usu);

}
