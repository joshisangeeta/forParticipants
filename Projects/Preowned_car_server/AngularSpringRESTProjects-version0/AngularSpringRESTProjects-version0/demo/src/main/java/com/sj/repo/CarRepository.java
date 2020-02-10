/**
 * 
 */
package com.sj.repo;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sj.model.Car;

/**
 * @author sangeeta
 *
 */
@Repository
public interface CarRepository extends JpaRepository<Car, Integer> {
	
     
      Car save(Car car);
     
      Optional<Car> findById(Integer id);
      
      boolean existsById(Integer id);
      
      List<Car> findAll();
      
      void deleteById(Integer ID);
      
      

 



}
