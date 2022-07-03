package com.stockmarket.company;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
public class Company {

    @Id
    private String companyId;
    private String companyName;
    private String turnover;
    private String ceo;
    private String boardOfDirectors;
    private String listedInStockExchanges;
    private String sector;
    private String companyDescription;



}
