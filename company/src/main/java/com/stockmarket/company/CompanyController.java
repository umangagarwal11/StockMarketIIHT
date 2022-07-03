package com.stockmarket.company;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/company")
@RestController
public class CompanyController {

    @Autowired
    private CompanyService companyService;

    public CompanyController(CompanyService companyService) {
        this.companyService = companyService;
    }

    @GetMapping("getall")
    public List<Company> listCompany(){
        return companyService.getAllCompanies();
    }

    @GetMapping("/info/{id}")
    public Company getCompany(@PathVariable String id)
    {
        return companyService.getCompany(id);
    }

    @PostMapping("/register")
    public Company addCompany(@RequestBody Company company)
    {
        return companyService.addCompany(company);
    }

    @DeleteMapping("/delete/{id}")
    public String deleteCompany(@PathVariable String id)
    {
        return companyService.deleteCompany(id);
    }
}

