叮当食堂
---
基于SSM的学生订餐平台
## 开发环境：
- [JDK10](https://www.oracle.com/java/technologies/javase-jsp-downloads.html)
- [Tomcat9](https://tomcat.apache.org/)

## 开发工具
- [IDEA 2018](https://www.jetbrains.com/idea/)

## 项目描述
+ 这是一个面向在校大学生的订餐平台，与学校食堂深度合作，实现校内订餐网络化，解决排长队，被宰客的问题;
+	根据权重对商家列表排序，学生评价影响商家权重，谁好谁坏看得见;
+	根据个人饮食结构提供每日优选，平衡个人饮食;

## 技术实现

+ 后台通过SPring4.0 +SpringMVC +Mybatis框架对项目进行整体开发
+	前端页面使用Ajax+jQuery框架,实现异步请求；
+	使用搜索引擎Solr实现全文索引

## 还可以在服务器上作什么？
####	使用Nexus搭建Maven私服;
####	使用Nginx实现负载均衡，使用Redis缓存技术
