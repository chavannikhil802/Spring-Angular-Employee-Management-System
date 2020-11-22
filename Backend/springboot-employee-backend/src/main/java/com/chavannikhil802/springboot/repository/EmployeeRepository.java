package com.chavannikhil802.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.chavannikhil802.springboot.model.Employee;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long>{
	// JpaRepository provides many of the method implementation used for Database Manipulation

}
