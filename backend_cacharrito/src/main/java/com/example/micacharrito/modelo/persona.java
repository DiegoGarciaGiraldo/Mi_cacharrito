package com.example.micacharrito.modelo;

import java.util.Date;

import org.springframework.format.annotation.DateTimeFormat;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import jakarta.persistence.OneToOne;

@Entity
@Table (name = "Persona")

public class persona {
	
		
		@Id
		@Column(name="NumeroTelefonico")
		private String numeroTelefonico;
		
		@OneToOne
		@JoinColumn(name="Identificacion", referencedColumnName="Identificacion")
		private usuario usuario;
		
		@Column(name="Nombre")
		private String nombre;
		
		@Column(name="Apellido")
		private String apellido;
		
		
		@Temporal(TemporalType.DATE) //para determinar si usa horas o fechas o ambas
		//@DateTimeFormat(iso = ISO.DATE) //para guardar solo la fecha
		@DateTimeFormat(pattern = "dd/MM/yyyy")//Lo mismo pero se cambia el formato
		@Column(name="FechaExpedicion")
		private Date fechaExpedicion;
		
		
		@Temporal(TemporalType.DATE) //para determinar si usa horas o fechas o ambas
		//@DateTimeFormat(iso = ISO.DATE) //para guardar solo la fecha
		@DateTimeFormat(pattern = "dd/MM/yyyy")//Lo mismo pero se cambia el formato
		@Column(name="Vigencia")
		private Date vigencia;
		
		@Column(name="Email")
		private String email;
		
		@Column(name="Categoria")
		private String categoria;

		public persona() {
			super();
			// TODO Auto-generated constructor stub
		}

		

		public persona(String numeroTelefonico, com.example.micacharrito.modelo.usuario usuario, String nombre,
				String apellido, Date fechaExpedicion, Date vigencia, String email, String categoria) {
			super();
			this.numeroTelefonico = numeroTelefonico;
			this.usuario = usuario;
			this.nombre = nombre;
			this.apellido = apellido;
			this.fechaExpedicion = fechaExpedicion;
			this.vigencia = vigencia;
			this.email = email;
			this.categoria = categoria;
		}



		public String getNumeroTelefonico() {
			return numeroTelefonico;
		}

		public void setNumeroTelefonico(String numeroTelefonico) {
			this.numeroTelefonico = numeroTelefonico;
		}

		public usuario getUsuario() {
			return usuario;
		}

		public void setUsuario(usuario usuario) {
			this.usuario = usuario;
		}

		public String getNombre() {
			return nombre;
		}

		public void setNombre(String nombre) {
			this.nombre = nombre;
		}

		public String getApellido() {
			return apellido;
		}

		public void setApellido(String apellido) {
			this.apellido = apellido;
		}

		public Date getFechaExpedicion() {
			return fechaExpedicion;
		}

		public void setFechaExpedicion(Date fechaExpedicion) {
			this.fechaExpedicion = fechaExpedicion;
		}

		public Date getVigencia() {
			return vigencia;
		}

		public void setVigencia(Date vigencia) {
			this.vigencia = vigencia;
		}

		public String getEmail() {
			return email;
		}

		public void setEmail(String email) {
			this.email = email;
		}



		public String getCategoria() {
			return categoria;
		}



		public void setCategoria(String categoria) {
			this.categoria = categoria;
		}
		
		
		
		

}
