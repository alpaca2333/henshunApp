package cn.hengshun.model.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.Date;

/**
 * Created by 11946 on 2017/8/15.
 */

@Entity
public class Pe {


    @Id
    @GeneratedValue
    private Long id;

    private Date time;

    private Long babyId;

    public Pe(Date time, Long babyId) {
        super();
        this.time = time;
        this.babyId = babyId;
    }

    public Pe(){
        super();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Date getTime() {
        return time;
    }

    public void setTime(Date time) {
        this.time = time;
    }

    public Long getBabyId() {
        return babyId;
    }

    public void setBabyId(Long babyId) {
        this.babyId = babyId;
    }
}
