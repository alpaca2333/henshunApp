package cn.hengshun.model.entity;

import cn.hengshun.model.entity.enums.Gender;

import javax.persistence.*;
import java.sql.Timestamp;

/**
 * Created by alpaca on 17-5-27.
 */
@Entity(name = "baby")
public class Baby implements Fetchable<Integer> {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String name;

    private Timestamp birthday;

    private Gender gender;

    public Baby(String name, Timestamp birthday, Gender gender) {
        super();
        this.name = name;
        this.birthday = birthday;
        this.gender = gender;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Column(columnDefinition = "datetime not null")
    public Timestamp getBirthday() {
        return birthday;
    }

    public void setBirthday(Timestamp birthday) {
        this.birthday = birthday;
    }

    @Column(columnDefinition = "int(11) not null")
    public Gender getGender() {
        return gender;
    }

    public void setGender(Gender gender) {
        this.gender = gender;
    }

}
