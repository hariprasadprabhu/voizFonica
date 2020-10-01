package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.demo.model.Post_details;


public interface PostPlanDetailsRepo extends JpaRepository<Post_details, Integer> {

}
