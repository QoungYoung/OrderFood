package cn.pojo;

public class Food {
    private Integer id;

    private Float price;

    private String name;

    private Integer wight;

    private String img;

    private Integer count;

    private String comment;

    private Integer catagory;

    private Integer user;

    private Float cal;
    private String foodUsername;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Float getPrice() {
        return price;
    }

    public void setPrice(Float price) {
        this.price = price;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name == null ? null : name.trim();
    }

    public Integer getWight() {
        return wight;
    }

    public void setWight(Integer wight) {
        this.wight = wight;
    }

    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img == null ? null : img.trim();
    }

    public Integer getCount() {
        return count;
    }

    public void setCount(Integer count) {
        this.count = count;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment == null ? null : comment.trim();
    }

    public Integer getCatagory() {
        return catagory;
    }

    public void setCatagory(Integer catagory) {
        this.catagory = catagory;
    }

    public Integer getUser() {
        return user;
    }

    public void setUser(Integer user) {
        this.user = user;
    }

    public Float getCal() {
        return cal;
    }

    public void setCal(Float cal) {
        this.cal = cal;
    }

    public String getFoodUsername() {
        return foodUsername;
    }

    public void setFoodUsername(String foodUsername) {
        this.foodUsername = foodUsername;
    }

    @Override
    public String toString() {
        return "Food{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", user=" + user +
                ", username=" + foodUsername +
                '}';
    }
}
