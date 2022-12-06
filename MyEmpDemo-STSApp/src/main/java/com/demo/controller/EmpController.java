package com.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.demo.dao.EmpRepo;
import com.demo.model.Employee;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class EmpController 
{

	@Autowired
	private EmpRepo e1;
	
	@CrossOrigin(origins="http://localhost:4200")
	@PostMapping("/insertrecord")
	public Employee insertrecord(@RequestBody Employee emp)
	{
		return this.e1.save(emp);
	}
	
	@CrossOrigin(origins="http://localhost:4200")
	@PostMapping("/updaterecord")
	public Employee updaterecord(@RequestBody Employee emp)
	{
		return this.e1.save(emp);
	}
	
	@CrossOrigin(origins="http://localhost:4200")
	@PostMapping("/deleterecord")
	public void deleterecord(@RequestBody Employee emp)
	{
		 this.e1.delete(emp);
	}
	
	
	@CrossOrigin(origins="http://localhost:4200")
	@GetMapping("/viewrecord")
	public List<Employee> viewrecord()
	{
		return this.e1.findAll();
	}
	
	
	
	
	
}
