package cn.pojo;

public class LocalAppraise {
    String info;
    String star;
    String orderid;

    public String getInfo() {
        return info;
    }

    public String getStar() {
        return star;
    }

    public String getOrderid() {
        return orderid;
    }

    @Override
    public String toString() {
        return "LocalAppraise{" +
                "info='" + info + '\'' +
                ", star='" + star + '\'' +
                ", orderid='" + orderid + '\'' +
                '}';
    }
}
