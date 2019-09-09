package cn.dao;

import cn.pojo.StuOrder;
import cn.pojo.StuOrderExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface StuOrderMapper {
    long countByExample(StuOrderExample example);

    int deleteByExample(StuOrderExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(StuOrder record);

    int insertSelective(StuOrder record);

    List<StuOrder> selectByExample(StuOrderExample example);

    StuOrder selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") StuOrder record, @Param("example") StuOrderExample example);

    int updateByExample(@Param("record") StuOrder record, @Param("example") StuOrderExample example);

    int updateByPrimaryKeySelective(StuOrder record);

    int updateByPrimaryKey(StuOrder record);
}