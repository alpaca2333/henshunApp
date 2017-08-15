package cn.hengshun.model.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.Date;

/**
 * Created by 11946 on 2017/8/15.
 */
@Entity
public class PeItem {

    @Id
    @GeneratedValue
    private Long id;

    private String title;

    private String content;

    private Long peid;

    public PeItem(String title, String content, Long peid) {
        super();
        this.title = title;
        this.content = content;
        this.peid = peid;
    }

    public PeItem(){
        super();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Long getPeid() {
        return peid;
    }

    public void setPeid(Long peid) {
        this.peid = peid;
    }
}
