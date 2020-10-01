package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.PostPlanActive;

public interface PostActivePlanRepo extends JpaRepository<PostPlanActive, Long> {

}
