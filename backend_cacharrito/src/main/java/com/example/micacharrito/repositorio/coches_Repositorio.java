package com.example.micacharrito.repositorio;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.micacharrito.modelo.coches;

public interface coches_Repositorio extends JpaRepository<coches, String>{

	List<coches> findByEstado(String estado);
<<<<<<< HEAD

	List<coches> findAllByEstado(String estado);
=======
	
	List<coches> findByEstadoAndTipoVeh(String est , String tipo);

	public coches findAllByPlaca(String placa);
>>>>>>> 2d148a5a10dbab87a434081f08907daa2d5dae2f
	
	
	

}
