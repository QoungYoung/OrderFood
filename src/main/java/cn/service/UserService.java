package cn.service;

import cn.pojo.User;

import java.util.List;

public interface UserService {

    User getUserById(String windowId);

    List<User> getUserList(String windowAddress,String windowCategory/*,String foodPrice*/);

    List<User> getRecommendList(User user);


}
