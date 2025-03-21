package com.example.micacharrito.repositorio;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.micacharrito.modelo.alquiler;
import com.example.micacharrito.modelo.persona;

public interface alquiler_repositorio extends JpaRepository<alquiler, Long>{

	 public List<alquiler> findByPersona(persona perso);

	public List<alquiler> findByPersonaAndEstadoAlq(persona perso, String estado);

}
