package cn.service;

import cn.dao.FoodMapper;
import cn.dao.StuOrderMapper;
import cn.pojo.Food;
import cn.pojo.StuOrder;
import cn.pojo.StuOrderExample;
import cn.pojo.StudentInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
@Service
public class OrderServiceImp implements OrderService {

    @Autowired
    StuOrderMapper mapper;
    @Autowired
    FoodMapper foodMapper;

    /**
     * 条件查询
     * @param example
     * @return
     */
    @Override
    public List<StuOrder> selectByExample(StuOrderExample example) {
        return mapper.selectByExample(example);
    }

    @Override
    public StuOrder getOrderById(String id) {
        return mapper.selectByPrimaryKey(Integer.valueOf(id));
    }

    /**
     * 获取学生今日消费
     * @param studentInfo
     * @return
     */
    @Override
    public float getTodayConsume(StudentInfo studentInfo) {

        float consume =0;
        /**
         * 创建example类，实现多条件查询
         */
        StuOrderExample example = new StuOrderExample();
        StuOrderExample.Criteria criteria = example.createCriteria();
        example.setDistinct(false);//不去重
        try {
            Date date1 = new SimpleDateFormat("yyyy-MM-dd").parse("2019-07-13");
            Date date2 = new SimpleDateFormat("yyyy-MM-dd").parse("2019-07-13");
            //criteria.andTimeBetween(date1,date2);
            criteria.andStudentIdEqualTo(studentInfo.getStuno());
            List<StuOrder> orderList = selectByExample(example);
            for(int i = 0;i< orderList.size();i++) {
                consume += orderList.get(i).getPrice();
            }
        } catch (ParseException e) {
            e.printStackTrace();
        }
        return consume;
    }

    /**
     * 获取学生今天摄入的卡路里
     * @param studentInfo 学生学号
     * @return 卡路里
     */
    @Override
    public float getTodayCal(StudentInfo studentInfo) {

        float cal =0;
        /**
         * 创建example类，实现多条件查询
         */
        StuOrderExample example = new StuOrderExample();
        StuOrderExample.Criteria criteria = example.createCriteria();
        example.setDistinct(false);//不去重
        try {
            Date date1 = new SimpleDateFormat("yyyy-MM-dd").parse("2019-07-13");
            Date date2 = new SimpleDateFormat("yyyy-MM-dd").parse("2019-07-13");
            //criteria.andTimeBetween(date1,date2);
            criteria.andStudentIdEqualTo(studentInfo.getStuno());
            List<StuOrder> orderList = selectByExample(example);
            for(int i = 0;i< orderList.size();i++) {
                Food food = foodMapper.selectByPrimaryKey(orderList.get(i).getFoodId());
                cal += food.getCal();
            }
        } catch (ParseException e) {
            e.printStackTrace();
        }
        return cal;
    }

    /**
     * 插入数据
     * @param stuOrder
     * @return
     */
    @Override
    public boolean insert(StuOrder stuOrder) {

        if(mapper.insertSelective(stuOrder)==1){
            return true;
        }
        return false;
    }

    /**
     * 根据订单状态获取订单数
     * @param id
     * @param statue
     * @return
     */
    @Override
    public long getOrderCountByStatue(String id, String statue) {

        StuOrderExample example = new StuOrderExample();
        StuOrderExample.Criteria criteria = example.createCriteria();
        criteria.andStatueEqualTo(statue);
        criteria.andStudentIdEqualTo(id);
        return mapper.countByExample(example);
    }

    /**
     * 根据订单状态获取订单列表
     * @param id
     * @param type
     * @return
     */
    @Override
    public List<StuOrder> getListById(String id,String type) {
        StuOrderExample example = new StuOrderExample();
        StuOrderExample.Criteria criteria = example.createCriteria();
        criteria.andStudentIdEqualTo(id);
        if(!type.equals("全部")){
            criteria.andStatueEqualTo(type);
        }
        return mapper.selectByExample(example);
    }

    @Override
    public boolean update(StuOrder order) {
        if(mapper.updateByPrimaryKey(order)>0)
            return true;
        else
            return false;
    }


}
