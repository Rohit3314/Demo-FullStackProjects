package com.demo.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.demo.model.Account;

@Repository
public interface AccRepo extends JpaRepository<Account,Integer>
{

}
