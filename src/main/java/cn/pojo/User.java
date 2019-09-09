package cn.pojo;

public class User {
    private Integer id;

    private String username;

    private String password;

    private Integer role;

    private Integer category;

    private String windowname;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username == null ? null : username.trim();
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password == null ? null : password.trim();
    }

    public Integer getRole() {
        return role;
    }

    public void setRole(Integer role) {
        this.role = role;
    }

    public Integer getCategory() {
        return category;
    }

    public void setCategory(Integer category) {
        this.category = category;
    }

    public String getWindowname() {
        return windowname;
    }

    public void setWindowname(String windowname) {
        this.windowname = windowname == null ? null : windowname.trim();
    }
}