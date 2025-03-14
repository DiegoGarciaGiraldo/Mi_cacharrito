package com.example.micacharrito.repositorio;

import com.example.micacharrito.modelo.administrador;
import com.example.micacharrito.modelo.usuario_Admin;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

public interface administrador_Repositorio extends JpaRepository <administrador, Long>{

	//Optional<administrador> findByIdPerfil(usuario_Admin idPerfil);

	

}
