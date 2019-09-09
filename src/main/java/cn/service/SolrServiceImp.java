package cn.service;


import cn.pojo.locSolr;
import org.apache.solr.client.solrj.SolrQuery;
import org.apache.solr.client.solrj.SolrServerException;
import org.apache.solr.client.solrj.impl.HttpSolrClient;
import org.apache.solr.client.solrj.response.QueryResponse;
import org.apache.solr.common.SolrDocument;
import org.apache.solr.common.SolrDocumentList;
import org.apache.solr.common.util.NamedList;
import org.apache.solr.common.util.SimpleOrderedMap;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
@Service
public class SolrServiceImp implements SolrService {

    @Autowired
    HttpSolrClient httpSolrClient;


    @Override
    public List<locSolr> solr(String text,int pageIndex) throws IOException, SolrServerException {



        SolrQuery query=new SolrQuery();

        String  queryText="name:*"+text+"* or address:*"+text+"* or windowName:*"+text+"*";
        System.out.println(queryText);
        query.set("q",queryText);
        //1、过滤器
        //query.set("fq","infoPrice:[1 TO 1000]");
        //2、排序
        //query.set("sort","infoPrice desc","id asc");
        //3、设置查询到的文档返回的域对象
        query.set("fl","id,name,address,windowName,price,img,user");

        //4、设置默认查询的域
        query.set("df","name","address","windowName");

        //5.分页
        query.set("start",(pageIndex-1)*10);
        query.set("rows",(pageIndex-1)*10+10);

        //6、高亮
        //设置高亮域(设置的域必须在查询条件中存在)
        query.addHighlightField("name");
        query.addHighlightField("address");
        query.addHighlightField("windowName");
        //前缀
        query.setHighlightSimplePre("<em style='color:red'>");//这里的话，如果用thymeleaf模板，css样式生效需要加th:utext...
        //后缀
        query.setHighlightSimplePost("</em>");


        QueryResponse response = httpSolrClient.query(query);
        //普通查询
        SolrDocumentList results = response.getResults();

        System.out.println(results.toString());
        List<locSolr> solrList=new ArrayList<locSolr>();
        //高亮查询
        NamedList<SimpleOrderedMap> namedList= (NamedList<SimpleOrderedMap>) response.getResponse().get("highlighting");
        //k是id,内部的map的key是域名,其value是高亮的值集合



        System.out.println("匹配的结果总数是-------"+results.getNumFound());
        for(SolrDocument document:results){
            locSolr solr=new locSolr();
            Integer id=Integer.parseInt((String)document.get("id"));
            solr.setId(id);
            solr.setName((String)document.get("name"));
            solr.setImg((String)document.get("img"));
            solr.setAddress((String)document.get("address"));
            solr.setWindowName((String)document.get("windowName"));
            solr.setPrice((float)document.get("price"));
            solr.setUser((Integer)document.get("user"));
            for(int i=0;i<namedList.size();i++){
                String nameId = namedList.getName(i);
                if(id.toString().equals(nameId)){
                    SimpleOrderedMap map=namedList.getVal(i);//获取某个商品的高亮
                    //这里是需要加判断的，不然会有空值加进去
                    ArrayList infoName = (ArrayList) map.get("name");
                    if(infoName!=null&& infoName.size()>0){
                        String highInfoName=(String)infoName.get(0);
                        solr.setName(highInfoName);
                    }


                    ArrayList infoWindowName = (ArrayList) map.get("winodwName");
                    if(infoWindowName!=null&& infoWindowName.size()>0){
                        String highinfoWindowName=(String)infoWindowName.get(0);
                        solr.setAddress(highinfoWindowName);
                    }


                    ArrayList infoAddress = (ArrayList) map.get("address");
                    if(infoAddress!=null&& infoAddress.size()>0){
                        String highinfoAddress=(String)infoAddress.get(0);
                        solr.setAddress(highinfoAddress);
                    }
                }
            }
            solrList.add(solr);
        }
        return solrList;
    }
}
