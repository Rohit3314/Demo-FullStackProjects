package com.demo.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Account
{

	@Id
	private int accno;
	private String owner;
	private double balance;
	
	
	public Account() {
		super();
		
	}
	public Account(int accno, String owner, double balance) {
		super();
		this.accno = accno;
		this.owner = owner;
		this.balance = balance;
	}
	public int getAccno() {
		return accno;
	}
	public void setAccno(int accno) {
		this.accno = accno;
	}
	public String getOwner() {
		return owner;
	}
	public void setOwner(String owner) {
		this.owner = owner;
	}
	public double getBalance() {
		return balance;
	}
	public void setBalance(double balance) {
		this.balance = balance;
	}
	
}
