package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.PostCustmerBill;

public interface PostCustSub extends JpaRepository<PostCustmerBill, Long> {

}
