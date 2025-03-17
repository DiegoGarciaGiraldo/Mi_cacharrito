package com.example.micacharrito.modelo;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table (name="Usuario")


public class usuario {
	
	
		@Id
		@Column(name="identificacion")
		private String identificacion;
		
		@Column(name="contrasenaC")
		private String contrasenaC;

		public usuario() {
			super();
			// TODO Auto-generated constructor stub
		}

		public usuario(String identificacion, String contrasenaC) {
			super();
			this.identificacion = identificacion;
			this.contrasenaC = contrasenaC;
		}

		public String getIdentificacion() {
			return identificacion;
		}

		public void setIdentificacion(String identificacion) {
			this.identificacion = identificacion;
		}

		public String getContrasenaC() {
			return contrasenaC;
		}

		public void setContrasenaC(String contrasenaC) {
			this.contrasenaC = contrasenaC;
		}
		
		

		
	

}
