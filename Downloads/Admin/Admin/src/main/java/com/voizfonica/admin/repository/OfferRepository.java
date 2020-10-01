package com.voizfonica.admin.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.voizfonica.admin.model.AddOffer;

@Repository
public interface OfferRepository extends JpaRepository<AddOffer, Integer> 
{

}
