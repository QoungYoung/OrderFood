package cn.pojo;

import java.util.Date;

public class Appraise {
    private Integer id;

    private String studentid;

    private Integer star;

    private String info;

    private Integer windowid;

    private Date date;

    private Integer orderid;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getStudentid() {
        return studentid;
    }

    public void setStudentid(String studentid) {
        this.studentid = studentid == null ? null : studentid.trim();
    }

    public Integer getStar() {
        return star;
    }

    public void setStar(Integer star) {
        this.star = star;
    }

    public String getInfo() {
        return info;
    }

    public void setInfo(String info) {
        this.info = info == null ? null : info.trim();
    }

    public Integer getWindowid() {
        return windowid;
    }

    public void setWindowid(Integer windowid) {
        this.windowid = windowid;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Integer getOrderid() {
        return orderid;
    }

    public void setOrderid(Integer orderid) {
        this.orderid = orderid;
    }

    @Override
    public String toString() {
        return "Appraise{" +
                ", studentid='" + studentid + '\'' +
                ", star=" + star +
                ", info='" + info + '\'' +
                ", windowid=" + windowid +
                ", date=" + date +
                ", orderid=" + orderid +
                '}';
    }
}