package cn.service;

import cn.dao.UserMapper;
import cn.pojo.User;
import cn.pojo.UserExample;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImp implements UserService {

    @Autowired
    UserMapper userMapper;


    @Override
    public User getUserById(String windowId) {
        int id = Integer.valueOf(windowId);

        return userMapper.selectByPrimaryKey(id);
    }

    @Override
    public List<User> getUserList(String windowAddress, String windowCategory/*, String foodPrice*/) {
        UserExample example = new UserExample();
        UserExample.Criteria criteria = example.createCriteria();
        if(!"all".equals(windowAddress)){
            int indexAddress = Integer.valueOf(windowAddress)*1000;
            criteria.andIdBetween(indexAddress,indexAddress+400);
        }
        if(!"all".equals(windowCategory)){
            int category = Integer.valueOf(windowCategory);
            criteria.andCategoryEqualTo(category);
        }
        /**
         * 暂时不计算价格
         */
//        if(!"all".equals(foodPrice)){
//            int category = Integer.valueOf(windowCategory);
//            criteria.andCategoryEqualTo(category);
//        }
        List<User> userList = userMapper.selectByExample(example);

        return userList;
    }

    @Override
    public List<User> getRecommendList(User user) {
        UserExample example = new UserExample();
        UserExample.Criteria criteria = example.createCriteria();
        criteria.andIdNotEqualTo(user.getId());
        criteria.andCategoryEqualTo(user.getCategory());
        return userMapper.selectByExample(example);
    }
}
