package com.devsuoerior.dsvendas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuoerior.dsvendas.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long>{
	

}
