package com.stockmarket.stockexchange;

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
public class StockExchange {

    @Id
    private String stockExchangeId;
    private String name;
    private String description;
    private String address;
    private String remarks;
    private Float price;
}

