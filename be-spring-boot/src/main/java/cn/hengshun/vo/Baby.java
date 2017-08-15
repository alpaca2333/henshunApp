package cn.hengshun.vo;

import cn.hengshun.model.entity.enums.Gender;

import java.util.Date;

/**
 * Created by 11946 on 2017/8/14.
 */
public class Baby {

    private String name;

    private Date birthday;

    private String gender;

    private Pe_detail pe_detail;

    public Baby(String name, Date birthday, String gender, Pe_detail pe_detail) {
        this.name = name;
        this.birthday = birthday;
        this.gender = gender;
        this.pe_detail = pe_detail;
    }

    public Baby(){

    }

    public Baby(cn.hengshun.model.entity.Baby babyEnity){
        this.setName(babyEnity.getName());
        this.setBirthday(babyEnity.getBirthday());
        this.setGender(babyEnity.getGender()== Gender.female?"女": "男");
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Date getBirthday() {
        return birthday;
    }

    public void setBirthday(Date birthday) {
        this.birthday = birthday;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public Pe_detail getPe_detail() {
        return pe_detail;
    }

    public void setPe_detail(Pe_detail pe_detail) {
        this.pe_detail = pe_detail;
    }
}
