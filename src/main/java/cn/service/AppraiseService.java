package cn.service;

import cn.pojo.Appraise;
import cn.pojo.AppraiseExample;

import java.util.List;

public interface AppraiseService {

    long count(AppraiseExample example);
    List<Appraise> getAppraiseByWindowId(String id);
    List<Appraise> getAppraiseByExample(AppraiseExample example, String offest, String pageSize);
    int insert(Appraise appraise);

}
