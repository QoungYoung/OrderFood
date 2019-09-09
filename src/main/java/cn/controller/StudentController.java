package cn.controller;

import cn.pojo.*;
import cn.service.*;
import com.alibaba.fastjson.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Map;

@Controller
public class StudentController {

    @Autowired
    StudentService studentService;
    @Autowired
    OrderService orderService;
    @Autowired
    FoodService foodService;
    @Autowired
    UserService userService;
    @Autowired
    AppraiseService appraiseService;


    /**
     * 登录跳转
     * @param stuNo
     * @param password
     * @param session
     * @return
     */
    @RequestMapping(value = "login",method = RequestMethod.POST)
    public String dologin(@RequestParam String stuNo, @RequestParam String password,
                          HttpSession session){
        System.out.println("doLogin------------------------->");
        StudentInfo stu =null;

        try {
            stu = studentService.login(stuNo,password);
            if(stu != null){

                //获取今日消费
                float consume = orderService.getTodayConsume(stu);
                //获取进入摄入卡路里
                float cal = orderService.getTodayCal(stu);

                session.setAttribute("consume",consume);
                session.setAttribute("user",stu);
                session.setAttribute("cal",cal);
                return "redirect:/main";
            }else {
                session.setAttribute("error","用户名或密码不正确");
            }


        } catch (Exception e) {
            e.printStackTrace();
        }
        return "redirect:index.html";
    }


    /**
     * 跳转首页
     * @param session
     * @return
     */
    @RequestMapping(value = "/main",method = RequestMethod.GET)
    public String main(HttpSession session){
        if(session.getAttribute("user")!=null){
            System.out.println("Session------------------->"+((StudentInfo)session.getAttribute("user")).getStuname());
            return "/mobile/main";
        }
        return "redirect:index.html";
    }

    /**
     * 跳转个人信息页面
     * @param session
     * @param model
     * @return
     */
    @RequestMapping(value = "/student/info")
    public String student_info( HttpSession session,Model model){
        if(session.getAttribute("user")!=null){
            System.out.println("进入个人信息界面");
            model.addAttribute("user",(StudentInfo)session.getAttribute("user"));
            model.addAttribute("consume",session.getAttribute("consume"));
            return "/mobile/studentInfo";
        }else {
            return "redirect:index.html";
        }
    }

    /**
     * 获取订单分类数量
     * @param id 学生Id
     * @return
     */
    @RequestMapping(value = "/orderlist/{id}")
    @ResponseBody
    public Object orderList(@PathVariable("id") String id){

        JSONObject object = new JSONObject();
        long obligations = orderService.getOrderCountByStatue(id,"待付款");
        long useing = orderService.getOrderCountByStatue(id,"待使用");
        long evaluating = orderService.getOrderCountByStatue(id,"待评价");
        object.put("obligations",obligations);
        object.put("useing",useing);
        object.put("evaluating",evaluating);
        return object;
    }


    /**
     * 跳转订单列表页面
     * @param type 提前指定的分类
     * @param model
     * @param session
     * @return
     */
    @RequestMapping(value = "order/{type}")
    public String order(@PathVariable("type") String type,Model model,HttpSession session){
        if(session.getAttribute("user")!=null){
            model.addAttribute("type",type);
            return "/mobile/mobile_order";
        }else {
            return "redirect:index.html";
        }
    }

    /**
     * 根据分类获取订单
     * @param id 学生Id
     * @param type 订单分类
     * @return
     */
    @RequestMapping(value = "orderListInfo/{id}/{type}")
    @ResponseBody
    public  Object orderListInfo(@PathVariable("id")String id,
                                 @PathVariable("type") String type){
        return orderService.getListById(id,type);
    }

    /**
     * 跳转订单评价页面
     * @param session
     * @param model
     * @param id
     * @return
     */
    @RequestMapping(value = "/mobile/orderAppraise/{id}")
    public String gotoOrderAppraise(HttpSession session,Model model,
                                    @PathVariable("id") String id){
        StuOrder stuOrder = null;
        stuOrder = orderService.getOrderById(id);
        if(stuOrder.getId()==Integer.valueOf(id)){
            Food food = null;
            food = foodService.getFoodById(String.valueOf(stuOrder.getFoodId()));
            model.addAttribute("id",id);
            model.addAttribute("name",food.getName());
            return "/mobile/mobile_order_appraise";
        }else {
            return "mobile/mian";
        }
    }

    /**
     * 将合格评价提交数据库
     * @param session
     * @return
     */
    @RequestMapping(value = "/appraiseSubmit",method = RequestMethod.POST)
    @ResponseBody
    public String appraiseSubmit(HttpSession session,
            @RequestBody Map localAppraise){

        System.out.println("初始加载------------------>"+localAppraise.toString());
        Appraise appraise = new Appraise();
        appraise.setInfo((String) localAppraise.get("info"));
        appraise.setOrderid(Integer.valueOf((String)localAppraise.get("orderid")));
        appraise.setStar((Integer)localAppraise.get("star"));
        StuOrder stuOrder = null;
        Food food = null;
        StudentInfo studentInfo = (StudentInfo) session.getAttribute("user");
        stuOrder = orderService.getOrderById(String.valueOf(appraise.getOrderid()));
        food = foodService.getFoodById(String.valueOf(stuOrder.getFoodId()));
        appraise.setDate(new Date());
        appraise.setStudentid(studentInfo.getStuno());
        appraise.setWindowid(food.getUser());
        System.out.println("最终加载--------------------->"+appraise.toString());
        stuOrder.setStatue("待使用");
        if(orderService.update(stuOrder)){
            if(appraiseService.insert(appraise)>0)
                return "sucess";
        }
        return "faild";
    }


}
