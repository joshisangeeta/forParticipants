/**
 * 
 */
package com.sj.controller;

import java.util.List;
import java.util.Optional;

import javax.annotation.Resource;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sj.model.Car;
import com.sj.repo.CarRepository;



/**
 * @author sangeeta
 *
 */
@RestController
@RequestMapping(value ="/web")
@CrossOrigin(origins="http://localhost:4200")
public class CarController {

	
	@Resource
	CarRepository carRepository;
	
	@GetMapping(value="/test")
	public String sayHello(){
		return "Hello World";
	}
	
	@PostMapping(value="/create")
	public Car saveCar (@RequestBody Car car) {    
			   System.out.println("in save car");
	         return carRepository.save(car);
	    }
	
	
	@GetMapping(value="/cars")
	 public List<Car> getCars (){
		 System.out.println("getting cars");
		 return carRepository.findAll();
	 }
	
	
	 @GetMapping(value="/deletecars/{carId}")
	 public List<Car> deleteCar(@PathVariable Integer carId){
		 
		 System.out.println("Delete id"+ carId);
		 carRepository.deleteById(carId);
		 
		 return carRepository.findAll();
		 
	 }
	 
	 @GetMapping(value="/editCar/{carId}")
	 public Optional<Car> editCar(@PathVariable Integer carId){
		 
		return carRepository.findById(carId);
	 }
	 
	 @PostMapping(value="/editCar/{carId}")
	 public Car editCar(@RequestBody Car car,@PathVariable Integer carId){
		 
		Optional<Car> carToEdit= carRepository.findById(carId);
		
		 Car c1 = carToEdit.get();
		  c1.setColor(car.getColor());
		  c1.setModel(car.getModel());
		  c1.setPrice(car.getPrice());
		  c1.setYearsOfUse(car.getYearsOfUse());
		   
		return  carRepository.save(c1);
	 }
	 	
	/**
	 * 
	 */
	public CarController() {
		// TODO Auto-generated constructor stub
	   System.out.println("in constr");
	   
	  }

}
