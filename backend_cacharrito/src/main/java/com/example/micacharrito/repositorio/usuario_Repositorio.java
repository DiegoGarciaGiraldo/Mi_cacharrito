package com.example.micacharrito.repositorio;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.micacharrito.modelo.usuario;

public interface usuario_Repositorio extends JpaRepository <usuario,String> {

	public Optional<usuario> findByIdentificacionAndContrasenaC(String usuario, String clave);

}
