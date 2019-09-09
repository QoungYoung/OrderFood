package cn.service;

import cn.pojo.Food;
import cn.pojo.locSolr;
import org.apache.solr.client.solrj.SolrServerException;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;

public interface SolrService {


    public List<locSolr> solr(String text,int pageIndex) throws IOException, SolrServerException ;



}
