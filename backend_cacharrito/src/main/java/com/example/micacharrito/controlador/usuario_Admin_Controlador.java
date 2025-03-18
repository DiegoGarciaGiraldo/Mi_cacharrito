package com.example.micacharrito.controlador;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.micacharrito.modelo.usuario_Admin;
import com.example.micacharrito.repositorio.usuario_Admin_Repositorio;

import jakarta.servlet.http.HttpSession;

@RestController
@RequestMapping("/usuario_admin/")
@CrossOrigin(origins = "http://localhost:4200/")

public class usuario_Admin_Controlador {
	
	 @Autowired
	    private usuario_Admin_Repositorio repUserAdmin;

	    @GetMapping("/login")
	    public boolean login(@RequestParam String usuario, @RequestParam String password) {
	        Optional<usuario_Admin> user = repUserAdmin.findByUsuario(usuario);

	        if (user.isPresent() && user.get().getPassword().equals(password)) {
	            return true;
	        }
	        return false;
	    }
	    
	
}

/*Realizar frontend y backend para lo siguiente.

Realizar un sistema de facturación para compras de xs productos, se debe registrar por cada producto, nombre, valor unitario y cantidad.
Al ir ingresando cada producto, se debe ir mostrando lo ingresado y el total por producto, al finalizar la compra debe aparecer el total a pagar.*/


/*package com.example.facturacion.model;

import jakarta.persistence.*;

@Entity
public class Factura {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private double total;

    // Getters y Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public double getTotal() { return total; }
    public void setTotal(double total) { this.total = total; }
}

@Entity
public class ProductoFactura {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nombre;
    private double valorUnitario;
    private int cantidad;
    private double total;

    @ManyToOne
    private Factura factura;

    // Getters y Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getNombre() { return nombre; }
    public void setNombre(String nombre) { this.nombre = nombre; }
    public double getValorUnitario() { return valorUnitario; }
    public void setValorUnitario(double valorUnitario) { this.valorUnitario = valorUnitario; }
    public int getCantidad() { return cantidad; }
    public void setCantidad(int cantidad) { this.cantidad = cantidad; }
    public double getTotal() { return total; }
    public void setTotal(double total) { this.total = total; }
    public Factura getFactura() { return factura; }
    public void setFactura(Factura factura) { this.factura = factura; }
}*/



