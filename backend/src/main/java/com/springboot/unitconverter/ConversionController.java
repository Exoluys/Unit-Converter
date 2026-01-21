package com.springboot.unitconverter;

import com.springboot.unitconverter.models.ConvertRequest;
import com.springboot.unitconverter.services.LengthConversionService;
import com.springboot.unitconverter.services.TempConversionService;
import com.springboot.unitconverter.services.WeightConversionService;
import lombok.Getter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@Getter
@RestController
@RequestMapping("/convert")
@CrossOrigin("http://localhost:3000")
public class ConversionController {

    private LengthConversionService lenService;
    private WeightConversionService weightService;
    private TempConversionService tempService;

    @PostMapping("/Length")
    public double convertLength(@RequestBody ConvertRequest req) {
        double result = lenService.convert(req);
        return Math.round(result * 1000000.0) / 1000000.0;
    }

    @PostMapping("/Weight")
    public double convertWeight(@RequestBody ConvertRequest req) {
        return weightService.convert(req);
    }

    @PostMapping("/Temperature")
    public double convertTemp(@RequestBody ConvertRequest req) {
        return tempService.convert(req);
    }

    @Autowired
    public void setLenService(LengthConversionService lenService) {
        this.lenService = lenService;
    }

    @Autowired
    public void setWeightService(WeightConversionService weightService) {
        this.weightService = weightService;
    }

    @Autowired
    public void setTempService(TempConversionService tempService) {
        this.tempService = tempService;
    }
}
