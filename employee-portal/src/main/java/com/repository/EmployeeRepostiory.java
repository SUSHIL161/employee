package com.repository;

import java.time.LocalDate;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.model.Employee;

@Repository
@Transactional
public interface EmployeeRepostiory extends CrudRepository<Employee, Integer> {
	
	@Modifying
	@Query("update Employee e set e.firstName = ?1, e.lastName = ?2, e.gender= ?3, e.dateOfBirth = ?4, e.department = ?5 where e.empID = ?6")
	void updateEmployeeInfoById(String firstName, String lastName, String gender, LocalDate dateOfBirth, String department, Integer empID);
	
}
