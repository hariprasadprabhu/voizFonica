package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.ActivePlans;
import com.example.demo.model.Chat;

public interface Activepalnrepo extends JpaRepository<ActivePlans, Long> {
   public ActivePlans save(ActivePlans cust);
}
