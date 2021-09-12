package com.devsuoerior.dsvendas.service;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuoerior.dsvendas.dto.SaleDTO;
import com.devsuoerior.dsvendas.entities.Sale;
import com.devsuoerior.dsvendas.repositories.SaleRepository;
import com.devsuoerior.dsvendas.repositories.SellerRepository;

@Service
public class SaleService {
	@Autowired
	private SaleRepository repository;
	
	@Autowired
	private SellerRepository sellerrepository;
	
	@Transactional(readOnly = true)
	public Page<SaleDTO> findAll(Pageable pageable){
		sellerrepository.findAll();
		Page<Sale> result = repository.findAll(pageable);
		return result.map(x -> new SaleDTO(x));
	}
	
}
