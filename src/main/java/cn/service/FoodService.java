package cn.service;

import cn.pojo.Food;
import cn.pojo.FoodExample;
import org.springframework.stereotype.Service;

import java.util.List;
public interface FoodService {

    List<Food> getTodayPreferenceList();
    List<Food> getFoodListByExample(FoodExample example);
    Food getFoodById(String foodId);


}
