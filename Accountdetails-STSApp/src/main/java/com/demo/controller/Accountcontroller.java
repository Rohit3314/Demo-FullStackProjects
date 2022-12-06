package com.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.demo.dao.AccRepo;
import com.demo.model.Account;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class Accountcontroller
{

	@Autowired
	private AccRepo a1;
	
	@CrossOrigin(origins="http://localhost:4200")
	@PostMapping("/insertrecord")
	public Account insertrecord(@RequestBody Account acc)
	{
	return  this.a1.save(acc);
	}
	
	
	@CrossOrigin(origins="http://localhost:4200")
	@PostMapping("/updaterecord")
	public Account updaterecord(@RequestBody Account acc)
	{
		return this.a1.save(acc);
	}
	
	@CrossOrigin(origins="http://localhost:4200")
	@PostMapping("/deleterecord")	
	public void deleterecord(@RequestBody Account acc)
	{
		this.a1.delete(acc);
	}
	
	@CrossOrigin(origins="http://localhost:4200")
	@GetMapping("/viewrecord")	
	public List<Account> viewrecord()
	{
		return this.a1.findAll();
	}
	
	
	
	
	
}
