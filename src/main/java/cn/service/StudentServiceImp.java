package cn.service;

import cn.dao.StudentInfoMapper;
import cn.pojo.StuOrder;
import cn.pojo.StuOrderExample;
import cn.pojo.StudentInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;


@Service
public class StudentServiceImp implements StudentService {


    @Autowired
    private StudentInfoMapper mapper;

    @Override
    public StudentInfo login(String username, String userpass) throws Exception {

        StudentInfo info = null;
        info = mapper.selectByPrimaryKey(username);
        if(info != null){
            System.out.println(info.getStuname());
            if(userpass.equals(info.getPassword())){
                return info;
            }
        }
        return null;
    }

    @Override
    public int update(StudentInfo studentInfo) {
        return mapper.updateByPrimaryKey(studentInfo);
    }
}
