package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.example.demo.model.ActivePlans;
import com.example.demo.model.PostActivePlans;

public interface PostpaidRepo extends JpaRepository<PostActivePlans, Long> {
	public PostActivePlans save(PostActivePlans cust);
}
