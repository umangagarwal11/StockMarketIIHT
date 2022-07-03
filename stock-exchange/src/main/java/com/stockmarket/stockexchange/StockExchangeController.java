package com.stockmarket.stockexchange;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;
@RestController
@RequestMapping("/stockexchange")

public class StockExchangeController {

    @Autowired
    private StockExchangeService stockExchangeService;

    public StockExchangeController(StockExchangeService stockExchangeService) {
        this.stockExchangeService = stockExchangeService;
    }

    @GetMapping()
    public List<StockExchange> listStockExchange(){
        return stockExchangeService.getAllStockExchanges();
    }

    @GetMapping("/{id}")
    public StockExchange getStockExchange(@PathVariable String id)
    {
        return stockExchangeService.getStockExchange(id);
    }

    @PostMapping()
    public StockExchange addStockExchange(@RequestBody StockExchange stockExchange)
    {
        return stockExchangeService.addStockExchange(stockExchange);
    }

    @GetMapping("/get/{id}/{startdate}/{enddate}")
    public List<StockExchange> gettsockPriceList(@PathVariable String id, @PathVariable Date startdate, @PathVariable Date enddate)
    {
        return stockExchangeService.getStockPriceList(id, startdate,enddate);
    }

}
