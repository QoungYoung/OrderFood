package cn.controller;

import cn.dao.FoodMapper;
import cn.pojo.*;
import cn.service.*;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import org.apache.solr.client.solrj.SolrServerException;
import org.apache.solr.client.solrj.impl.HttpSolrClient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Repository;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.util.Date;
import java.util.List;

@Controller
public class FoodController {


    @Autowired
    FoodService foodService;
    @Autowired
    UserService userService;
    @Autowired
    AppraiseService appraiseService;
    @Autowired
    OrderService orderService;
    @Autowired
    SolrService solrService;




    /**
     * 获取今日推荐
     * @return
     */
    @RequestMapping(value = "/todaypreferencelist.json",method = RequestMethod.GET)
    @ResponseBody
    public Object getTodayPreferenceList(){
        System.out.println("todaypreferencelist------------------------>");
        List<Food> foodList = foodService.getTodayPreferenceList();
        System.out.println(foodList.get(0).toString());
        return foodList;

    }

    @RequestMapping(value = "/window")
    public String window(HttpSession session){
        return "/student/shoplist";
    }


    /**
     * 获取窗口列表
     * @param windowAdddress 窗口地址
     * @param windowCategory 窗口类别
     * @return
     */
    @RequestMapping(value = "/category/{windowAdddress}/{windowCategory}")
    @ResponseBody
    public Object shoplist(@PathVariable("windowAdddress") String windowAdddress,
                           @PathVariable("windowCategory") String windowCategory
//                           @PathVariable("foodPrice") String foodPrice
                           ){

        System.out.println("getCatgoryList--------------------------->");
        System.out.println("现在搜索"+windowAdddress+"餐厅的"+windowCategory+"种类");
        List<User> userList = userService.getUserList(windowAdddress,windowCategory);
        return userList;
    }


    /**
     * 跳转到窗口详情页
     * @param model
     * @param windowId
     * @return
     */
    @RequestMapping(value = "/windowInfo/{windowId}")
    public String window_Info( Model model,
                               @PathVariable("windowId") String windowId){

        User user = null;
        user = userService.getUserById(windowId);
        model.addAttribute("window",user);
        return "/mobile/mobile_info";
    }

    /**
     * 获取窗口食品列表
     * @param windowId
     * @return
     */
    @RequestMapping(value = "/foodlist/{windowId}")
    @ResponseBody
    public Object foodlist(@PathVariable("windowId") String windowId){

        System.out.println("getFoodList--------------------------->"+windowId);
        FoodExample example = new FoodExample();
        FoodExample.Criteria criteria = example.createCriteria();
        criteria.andUserEqualTo(Integer.valueOf(windowId));

        List<Food> foodList = null;
        foodList =foodService.getFoodListByExample(example);
        return foodList;
    }


    /**
     * 获取用户评价
     * @param windowId 窗口Id
     * @param pageIndex 评价页码
     * @param appraiseType 评价类型
     * @return
     */
    @RequestMapping(value = "/appraiselist/{windowId}/{pageIndex}/{appraiseType}")
    @ResponseBody
    public Object appraiselist(
            @PathVariable("windowId") String windowId,
            @PathVariable("pageIndex") String pageIndex,
            @PathVariable("appraiseType") String appraiseType
                               ){

        System.out.println("getAppraiseList--------------------------->"+windowId+"\t"+appraiseType);
        JSONObject object = new JSONObject();
        int type = Integer.valueOf(appraiseType);
        AppraiseExample example = new AppraiseExample();
        AppraiseExample.Criteria criteria = example.createCriteria();
        criteria.andWindowidEqualTo(Integer.valueOf(windowId));
        if(type == 1){
            criteria.andStarBetween(3,5);
        }else if(type == 2){
            criteria.andStarEqualTo(3);
        }else if(type == -1) {
            criteria.andStarBetween(1,2);
        }

        List<Appraise> appraises = null;
        long count = 0;
        appraises = appraiseService.getAppraiseByExample(example,pageIndex,"5");
        count = appraiseService.count(example);
        if(count%5!=0)
            object.put("pageSize",count/5+1);
        else
            object.put("pageSize",count/5);
        object.put("pageIndex",pageIndex);
        object.put("list",appraises);
        return object;
    }

    /**
     * 跳转到全部评价
     * @param model
     * @param windowId 窗口Id
     * @return
     */
    @RequestMapping(value = "/allAppraise/{windowId}",method = RequestMethod.GET)
    public String allAppraise( Model model,
            @PathVariable("windowId") String windowId){
        User user = null;
        user = userService.getUserById(windowId);
        AppraiseExample example = new AppraiseExample();
        AppraiseExample.Criteria criteria = example.createCriteria();
        criteria.andWindowidEqualTo(Integer.valueOf(windowId));
        long allcount = appraiseService.count(example);
        model.addAttribute("window",user);
        model.addAttribute("allcount",allcount);
        return "/mobile/mobile_allAppraise";

    }

    /**
     * 获取相似窗口
     * @param windowId 窗口Id
     * @return
     */
    @RequestMapping(value = "/recommendlist/{windowId}")
    @ResponseBody
    public Object recommendlist(@PathVariable("windowId") String windowId){
        User user = null;
        user = userService.getUserById(windowId);
        return userService.getRecommendList(user);

    }

    /**
     * 获取商品详细（此处废弃）
     * @param model
     * @param foodId
     * @return
     */
    @RequestMapping(value = "/food/{foodId}")
    @ResponseBody
    public String foodInfo(Model model,
            @PathVariable("foodId") String foodId){

        Food food = null;
        food = foodService.getFoodById(foodId);
        model.addAttribute("food",food);
        return "/student/foodInfo";


    }


    /**
     * 跳转对应分类列表（后期补充）
     * @param foodType
     * @return
     */
    @RequestMapping(value = "/mobile/{foodType}")
    public String mobileFood(@PathVariable("foodType") String foodType){
        if(foodType.equals("allFood"))
            return "/mobile/allWindow";
        else
            return "";
    }

    /**
     * 跳转订单确认（此处应当删除）
     * @param model
     * @param foodId
     * @return
     */
    @RequestMapping(value = "/buy/{foodId}")
    public String mobileBuy(Model model,
            @PathVariable("foodId") String foodId){
        Food food = null;
        food = foodService.getFoodById(foodId);
        model.addAttribute("food",food);
        return "mobile/mobile_buy";
    }

    /**
     * 提交订单
     * @param model
     * @param id 商品Id
     * @param count 商品数量（此处应当删除）
     * @param session
     * @return
     */
    @RequestMapping(value = "/orderSubmit/{id}/{count}")
    public String orderSubmit(Model model,
            @PathVariable("id") String id,@PathVariable("count") String count,HttpSession session){

        if(session.getAttribute("user")!=null){
            Food food = foodService.getFoodById(id);
            float count_price = food.getPrice()*Integer.valueOf(count);
            StudentInfo studentInfo = (StudentInfo)session.getAttribute("user");
            User user = userService.getUserById(food.getUser().toString());
            StuOrder stuOrder = new StuOrder();
            stuOrder.setAddress(user.getUsername());
            stuOrder.setFoodId(food.getId());
            stuOrder.setPrice(count_price);
            stuOrder.setStudentId(studentInfo.getStuno());
            stuOrder.setStatue("待付款");
            /**
             * 此处应当执行跳转支付
             */
            /**
             * 当支付完成，更改订单状态
             */
            stuOrder.setStatue("待使用");
            stuOrder.setTime(new Date());
            if(orderService.insert(stuOrder)){
                if(stuOrder.getStatue().equals("待使用")){
                    System.out.println("支付成功");
                    model.addAttribute("food",food);
                    return "mobile/sucess";
                }
                    System.out.println("支付失败");
                    model.addAttribute("food",food);
                    return "mobile/main";
            }
        }
        return "redirect:index.html";

    }

    @RequestMapping(value = "/s")
    public String gotoSearch(Model model,
            @RequestParam(name = "popup-kw",required = false) String text){


        model.addAttribute("text",text);
        return "mobile/search";

    }


    @RequestMapping(value = "/getResault/{text}/{pageIndex}")
    @ResponseBody
    public Object getResault(@PathVariable("text") String text,@PathVariable("pageIndex") String pageIndex){
        try {
            List<locSolr> solrList = solrService.solr(text,Integer.valueOf(pageIndex));
            for(locSolr solr:solrList){
                System.out.println("-------------->"+solr);
            }
            return solrList;
        } catch (IOException e) {
            e.printStackTrace();
        } catch (SolrServerException e) {
            e.printStackTrace();
        }
        return "";
    }

}
