package com.example.micacharrito.repositorio;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.micacharrito.modelo.alquiler;

public interface alquiler_repositorio extends JpaRepository<alquiler, Long>{

	List<alquiler> findByEstadoAlq(String string);

	List<alquiler> findByNumeroAlquiler(Long numeroAlquiler);

}
