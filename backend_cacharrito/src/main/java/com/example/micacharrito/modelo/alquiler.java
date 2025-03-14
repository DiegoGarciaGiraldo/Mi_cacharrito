package com.example.micacharrito.modelo;

import java.util.Date;

import org.springframework.format.annotation.DateTimeFormat;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;


@Entity
@Table (name="Alquiler")

public class alquiler {
	
	

		@Id 
		@GeneratedValue(strategy = GenerationType.IDENTITY)
		@Column(name="NumeroAlquiler")
		private Long numeroAlquiler;
		
		@ManyToOne
		@JoinColumn(name="Placa", referencedColumnName="Placa")
		private coches coche;
		
		@ManyToOne
		@JoinColumn(name="Identificacion",referencedColumnName="Identificacion")
		private persona persona;
		
		@ManyToOne
		@JoinColumn(name="IdAdmin",referencedColumnName="IdAdmin")
		private administrador administrador;
		
		@Column(name="Estado_Alquiler")
		private String estadoAlq;
		
		
		
		
		@Temporal(TemporalType.DATE) //para determinar si usa horas o fechas o ambas
		//@DateTimeFormat(iso = ISO.DATE) //para guardar solo la fecha
		@DateTimeFormat(pattern = "dd/MM/yy")//Lo mismo pero se cambia el formato
		@Column(name="FechaInicio")
		private Date fechaInicio;
		
		@Temporal(TemporalType.DATE) //para determinar si usa horas o fechas o ambas
		//@DateTimeFormat(iso = ISO.DATE) //para guardar solo la fecha
		@DateTimeFormat(pattern = "dd/MM/yy")//Lo mismo pero se cambia el formato
		@Column(name="FechaFinal")
		private Date fechaFinal;
		
		
		@Column(name="CostoTotal")
		private float costoTotal;


		public alquiler() {
			super();
			// TODO Auto-generated constructor stub
		}


		public alquiler(coches coche, com.example.micacharrito.modelo.persona persona,
				com.example.micacharrito.modelo.administrador administrador, String estadoAlq, Date fechaInicio,
				Date fechaFinal, float costoTotal) {
			super();
			this.coche = coche;
			this.persona = persona;
			this.administrador = administrador;
			this.estadoAlq = estadoAlq;
			this.fechaInicio = fechaInicio;
			this.fechaFinal = fechaFinal;
			this.costoTotal = costoTotal;
		}


		public Long getNumeroAlquiler() {
			return numeroAlquiler;
		}


		public void setNumeroAlquiler(Long numeroAlquiler) {
			this.numeroAlquiler = numeroAlquiler;
		}


		public coches getCoche() {
			return coche;
		}


		public void setCoche(coches coche) {
			this.coche = coche;
		}


		public persona getPersona() {
			return persona;
		}


		public void setPersona(persona persona) {
			this.persona = persona;
		}


		public administrador getAdministrador() {
			return administrador;
		}


		public void setAdministrador(administrador administrador) {
			this.administrador = administrador;
		}


		public String getEstadoAlq() {
			return estadoAlq;
		}


		public void setEstadoAlq(String estadoAlq) {
			this.estadoAlq = estadoAlq;
		}


		public Date getFechaInicio() {
			return fechaInicio;
		}


		public void setFechaInicio(Date fechaInicio) {
			this.fechaInicio = fechaInicio;
		}


		public Date getFechaFinal() {
			return fechaFinal;
		}


		public void setFechaFinal(Date fechaFinal) {
			this.fechaFinal = fechaFinal;
		}


		public float getCostoTotal() {
			return costoTotal;
		}


		public void setCostoTotal(float costoTotal) {
			this.costoTotal = costoTotal;
		}
		
		
		

}
