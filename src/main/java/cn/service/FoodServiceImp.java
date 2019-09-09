package cn.service;

import cn.dao.FoodMapper;
import cn.dao.UserMapper;
import cn.pojo.Food;
import cn.pojo.FoodExample;
import cn.pojo.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class FoodServiceImp implements FoodService {


    @Autowired
    FoodMapper foodMapper;
    @Autowired
    UserMapper userMapper;

    @Override
    public List<Food> getTodayPreferenceList() {


        List<Food> foods = null;
        FoodExample example = new FoodExample();
        example.setDistinct(false);//不去重
        example.setOrderByClause("wight desc");
        foods = foodMapper.selectByExample(example);
        System.out.println(foods.get(0).toString());

        for (int i = 0; i < foods.size(); i++) {

            User user = null;
            try {
                user = userMapper.selectByPrimaryKey(foods.get(i).getUser());
                System.out.println(user.getUsername());
                foods.get(i).setFoodUsername(user.getUsername());
                System.out.println("getUsername---------------->"+foods.get(i).getFoodUsername());
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
        return foods;
    }

    @Override
    public List<Food> getFoodListByExample(FoodExample example) {
        return foodMapper.selectByExample(example);
    }

    @Override
    public Food getFoodById(String foodId) {
        return  foodMapper.selectByPrimaryKey(Integer.valueOf(foodId));
    }
}
