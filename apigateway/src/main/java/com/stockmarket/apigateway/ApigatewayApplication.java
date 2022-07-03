package com.stockmarket.apigateway;

import com.stockmarket.apigateway.DAO.User;
import com.stockmarket.apigateway.Repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.cloud.netflix.zuul.EnableZuulProxy;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@EnableDiscoveryClient
@EnableEurekaClient
@EnableZuulProxy
@SpringBootApplication
public class ApigatewayApplication implements CommandLineRunner {
    private final UserRepository userRepository;

    public ApigatewayApplication(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public static void main(String[] args) {
        SpringApplication.run(ApigatewayApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        User user=new User();
        user.setUsername("admin");
        user.setPassword(new BCryptPasswordEncoder().encode("password"));
        user.setAdmin(true);
        user.setConfirmed(true);
        userRepository.save(user);

    }
}
