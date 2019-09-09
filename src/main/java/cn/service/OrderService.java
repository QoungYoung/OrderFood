package cn.service;

import cn.pojo.StuOrder;
import cn.pojo.StuOrderExample;
import cn.pojo.StudentInfo;

import java.util.List;

public interface OrderService {
    List<StuOrder> selectByExample(StuOrderExample example);
    StuOrder getOrderById(String id);
    float getTodayConsume(StudentInfo studentInfo);
    float getTodayCal(StudentInfo studentInfo );
    boolean insert(StuOrder stuOrder);
    long getOrderCountByStatue(String id,String statue);
    List<StuOrder> getListById(String id,String type);
    boolean update(StuOrder order);

}
