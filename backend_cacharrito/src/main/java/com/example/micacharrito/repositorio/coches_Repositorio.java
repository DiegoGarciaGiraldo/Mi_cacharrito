package com.example.micacharrito.repositorio;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.micacharrito.modelo.coches;

public interface coches_Repositorio extends JpaRepository<coches, String>{

	List<coches> findByEstado(String estado);

	List<coches> findAllByEstado(String estado);
	
	List<coches> findByEstadoAndTipoVeh(String est , String tipo);

	public coches findAllByPlaca(String placa);
	
	
	
	

}
