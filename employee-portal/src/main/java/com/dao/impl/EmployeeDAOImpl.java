package com.dao.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import com.dao.EmployeeDAO;
import com.model.Employee;
import com.repository.EmployeeRepostiory;
import com.utility.ReturnObject;


public class EmployeeDAOImpl implements EmployeeDAO{
		
	@Autowired
	private EmployeeRepostiory employeeRepostiory;

	@Override
	public List<Employee> getAllEmployees() {
		List<Employee> employeeList = new ArrayList<>();
		employeeRepostiory.findAll().forEach(employeeList::add);
		employeeList.sort((first,second) -> first.getFirstName().compareTo(second.getFirstName()));
		return employeeList;
	}

	@Override
	public Employee getEmployee(int empID) {
		Optional<Employee> employee = employeeRepostiory.findById(empID);
		if(employee.isPresent()) {
			return employee.get();
		}
		return null;
		
	}

	@Override
	public ReturnObject addEmployee(Employee employee) {
		ReturnObject returnObject = new ReturnObject();
		if( !validateEmployee(employee)) {
			returnObject.setSuccess(false);
		} else {
			employeeRepostiory.save(employee);
			returnObject.setSuccess(true);
			returnObject.setEmployee(employee);
		}
		return returnObject;
	}

	@Override
	public ReturnObject updateEmployee(Employee employee, int empID) {
		ReturnObject returnObject = new ReturnObject();
		if( !validateEmployee(employee)) {
			returnObject.setSuccess(false);
		} else {
			employeeRepostiory.updateEmployeeInfoById(employee.getFirstName(), employee.getLastName(), employee.getGender(), employee.getDateOfBirth(), employee.getDepartment(), empID);
			returnObject.setSuccess(true);
			returnObject.setEmployee(employee);
		}
		
		return returnObject;
	}
	
	@Override
	public ReturnObject deleteEmployee(int empID) {
		ReturnObject returnObject = new ReturnObject();

		try {
			employeeRepostiory.deleteById(empID);
			returnObject.setSuccess(true);
		} catch(Exception e) {
			returnObject.setSuccess(false);
		}
		return returnObject;

	}

	private boolean validateEmployee(Employee employee) {
		return  employee == null ? false :
			employee.getFirstName() != null && employee.getFirstName().trim().length() > 0 &&
			employee.getLastName() != null && employee.getLastName().trim().length() > 0 &&
			employee.getGender() != null && employee.getGender().trim().length() > 0 &&
			employee.getDateOfBirth() != null &&
			employee.getDepartment() != null && employee.getDepartment().length() > 0;
 	}
}
