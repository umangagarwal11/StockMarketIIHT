package com.stockmarket.stockexchange;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Date;
import java.util.List;

public interface StockExchangeRepository extends JpaRepository<StockExchange,String> {

    @Query("select * from StockExchange where stockExchangeId= ?1 and startdate >= ?2 and enddate<=?3")
    List<StockExchange> getStockByDate(String id, Date startdate, Date enddate);
}