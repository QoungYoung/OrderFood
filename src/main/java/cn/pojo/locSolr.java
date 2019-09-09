package cn.pojo;

import org.apache.solr.client.solrj.beans.Field;

public class locSolr {

    private int Id;
    private String address;
    private String name;
    private String windowName;
    private float price;
    private String img;
    private int user;

    public int getId() {
        return Id;
    }
    @Field
    public void setId(int id) {
        Id = id;
    }

    public String getAddress() {
        return address;
    }
    @Field
    public void setAddress(String address) {
        this.address = address;
    }

    public String getName() {
        return name;
    }
    @Field
    public void setName(String name) {
        this.name = name;
    }

    public String getWindowName() {
        return windowName;
    }
    @Field
    public void setWindowName(String windowName) {
        this.windowName = windowName;
    }

    public float getPrice() {
        return price;
    }
    @Field
    public void setPrice(float price) {
        this.price = price;
    }



    public String getImg() {
        return img;
    }
    @Field
    public void setImg(String img) {
        this.img = img;
    }

    public int getUser() {
        return user;
    }
    @Field
    public void setUser(int user) {
        this.user = user;
    }

    @Override
    public String toString() {
        return "locSolr{" +
                "Id=" + Id +
                ", address='" + address + '\'' +
                ", name='" + name + '\'' +
                ", windowName='" + windowName + '\'' +
                ", price=" + price +
                ", img='" + img + '\'' +
                '}';
    }
}
