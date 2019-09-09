import cn.pojo.StudentInfo;
import cn.pojo.locSolr;
import cn.service.SolrService;
import cn.service.SolrServiceImp;
import cn.service.StudentService;
import cn.service.StudentServiceImp;
import org.apache.solr.client.solrj.SolrServerException;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

import javax.annotation.Resource;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

public class TestLogin {

    StudentService studentService = new StudentServiceImp();

    @Test
    public void TestLogin(){


    }

}
