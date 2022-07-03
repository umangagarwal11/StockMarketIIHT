package com.stockmarket.company;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CompanyService {
    private CompanyRepository companyRepository;

    public CompanyService(CompanyRepository companyRepository) {
        this.companyRepository = companyRepository;
    }
    public List<Company> getAllCompanies()
    {
        return (List<Company>) companyRepository.findAll();
    }
    public Company getCompany(String id)
    {
        Optional<Company> company=companyRepository.findById(id);
        return company.isPresent() ? company.get() : null;
    }
    public Company addCompany(Company company)
    {
        Company newCompany=companyRepository.save(company);
        return newCompany;
    }
    public String deleteCompany(String id)
    {
        companyRepository.deleteById(id);
        return "Company Deleted";
    }
}

