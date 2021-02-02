package com.model;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity

public class Employee {

	@Column(name = "firstName")
	private String firstName;
	@Column(name = "lastName")

	private String lastName;
	private String gender;
	
	@Column(name = "dateOfBirth")
	private LocalDate dateOfBirth;
	private String department;
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)

	@Column(name = "empID")

	private int empID;
	
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public LocalDate getDateOfBirth() {
		return dateOfBirth;
	}
	public void setDateOfBirth(LocalDate dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
	}
	public String getDepartment() {
		return department;
	}
	public void setDepartment(String department) {
		this.department = department;
	}
	
	public Employee() {
		
	}
	public int getEmpID() {
		return empID;
	}
	public void setEmpID(int empID) {
		this.empID = empID;
	}
	@Override
	public int hashCode() {
		StringBuilder empID = new StringBuilder();
		empID.append(getFirstName());
		empID.append(getLastName());
		empID.append(getDepartment());
		empID.append(getGender());
		empID.append(getDateOfBirth());
		return empID.toString().hashCode() < 0 ? -empID.toString().hashCode(): empID.toString().hashCode();
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Employee employee = (Employee) obj;
		return getFirstName().equals(employee.getFirstName()) && 
				getLastName().equals(employee.getLastName()) &&
				getDepartment().equals(employee.getDepartment()) &&
				getDateOfBirth().equals(employee.getDateOfBirth()) &&
				getGender().equals(employee.getGender());
	}

	
}
