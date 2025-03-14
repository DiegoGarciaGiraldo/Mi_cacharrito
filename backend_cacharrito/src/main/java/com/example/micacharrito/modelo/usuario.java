package com.example.micacharrito.modelo;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table (name="Usuario")


public class usuario {
	
	
		@Id
		@Column(name="Identificacion")
		private String Identificacion;
		
		@Column(name="ContraseñaC")
		private String ContraseñaC;

		public usuario() {
			super();
			// TODO Auto-generated constructor stub
		}

		public usuario(String identificacion, String contraseñaC) {
			super();
			Identificacion = identificacion;
			ContraseñaC = contraseñaC;
		}

		public String getIdentificacion() {
			return Identificacion;
		}

		public void setIdentificacion(String identificacion) {
			Identificacion = identificacion;
		}

		public String getContraseñaC() {
			return ContraseñaC;
		}

		public void setContraseñaC(String contraseñaC) {
			ContraseñaC = contraseñaC;
		}
		
	

}
