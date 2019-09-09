package cn.service;

import cn.dao.AppraiseMapper;
import cn.pojo.Appraise;
import cn.pojo.AppraiseExample;
import com.github.pagehelper.PageHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class AppraiseServiceImp implements AppraiseService {

    @Autowired
    AppraiseMapper mapper;

    @Override
    public long count(AppraiseExample example) {
        return mapper.countByExample(example);
    }

    @Override
    public List<Appraise> getAppraiseByWindowId(String id) {
        AppraiseExample example = new AppraiseExample();
        AppraiseExample.Criteria criteria = example.createCriteria();
        criteria.andWindowidEqualTo(Integer.valueOf(id));
        return mapper.selectByExample(example);
    }
    public List<Appraise> getAppraiseByExample(AppraiseExample example, String offest, String _pageSize) {

        int pageIndex = Integer.valueOf(offest);
        int pageSize = Integer.valueOf(_pageSize);
        if(pageIndex > 0)
            PageHelper.startPage(pageIndex,pageSize);
        return mapper.selectByExample(example);
    }

    @Override
    public int insert(Appraise appraise) {
        return mapper.insert(appraise);
    }
}
