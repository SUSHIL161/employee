package com.myapp.employeeportal;

import static org.junit.Assert.assertTrue;
import static org.junit.jupiter.api.Assertions.assertIterableEquals;
import static org.mockito.ArgumentMatchers.any;
import  static org.mockito.Mockito.doNothing;
import static org.mockito.Mockito.when;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import org.junit.Before;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.controller.EmployeeController;
import com.dao.EmployeeDAO;
import com.dao.impl.EmployeeDAOImpl;
import com.model.Employee;
import com.repository.EmployeeRepostiory;
import com.service.EmployeeService;
import com.service.impl.EmployeeServiceImpl;
import com.utility.ReturnObject;

@RunWith(SpringJUnit4ClassRunner.class)
class EmployeePortalApplicationTests {

	
	@InjectMocks
	private EmployeeController employeeController = new EmployeeController();

	@InjectMocks
    private EmployeeDAO employeeDAO = new EmployeeDAOImpl();

	
	@InjectMocks
	private EmployeeService employeeService = new EmployeeServiceImpl();


	@Mock
	private EmployeeRepostiory employeeRepostiory;
	
	@Before
	public void setup(){
	    MockitoAnnotations.initMocks(this); //without this you will get NPE
	}
	//@Test
	void testGetAllEmployee() {
		List<Employee> list = new ArrayList<>();
		when(employeeService.getAllEmployees()).thenCallRealMethod();
		when(employeeDAO.getAllEmployees()).thenReturn(list);
		when(employeeRepostiory.findAll()).thenReturn(list);
		assertIterableEquals(null, employeeService.getAllEmployees());
	}
	
	//@Test
	void testAddEmployee() {
		when(employeeService.addEmployee(any())).thenCallRealMethod();
		when(employeeDAO.addEmployee(any())).thenCallRealMethod();
		doNothing().when(employeeRepostiory.save(any()));
		ReturnObject ro = new ReturnObject();
		Employee emp = new Employee();
		emp.setFirstName("sushil");
		emp.setLastName("sinha");
		emp.setDateOfBirth(LocalDate.now());
		emp.setGender("male");
		emp.setDepartment("coding");
		assertTrue(employeeController.addEmployee(emp).isSuccess());
	}

}

