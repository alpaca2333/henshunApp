package cn.hengshun.vo;

import cn.hengshun.model.entity.enums.Gender;

import java.sql.Timestamp;

/**
 *
 * baby 的简略信息 作用于 /api/customer{id}
 * Created by 11946 on 2017/6/29.
 */
public class Baby_bref {

    private String name;
    private Timestamp birthday;
    private Gender gender;
    private Pe_detail pe;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Timestamp getBirthday() {
        return birthday;
    }

    public void setBirthday(Timestamp birthday) {
        this.birthday = birthday;
    }

    public Gender getGender() {
        return gender;
    }

    public void setGender(Gender gender) {
        this.gender = gender;
    }

    public Pe_detail getPe() {
        return pe;
    }

    public void setPe(Pe_detail pe) {
        this.pe = pe;
    }
}
