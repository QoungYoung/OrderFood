package cn.service;

import cn.pojo.StudentInfo;

public interface StudentService {

    StudentInfo login(String username,String userpass) throws Exception;
    int update(StudentInfo studentInfo);
}
