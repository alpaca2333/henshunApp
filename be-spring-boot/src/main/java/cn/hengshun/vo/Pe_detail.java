package cn.hengshun.vo;

import java.sql.Timestamp;
import java.util.Set;

/**
 *
 * 体检报告详细信息 作用于 /api/customer{id}
 * Created by 11946 on 2017/6/29.
 */
public class Pe_detail {

    private int id;
    private Timestamp time;
    private Set<Pe_Item> items;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Timestamp getTime() {
        return time;
    }

    public void setTime(Timestamp time) {
        this.time = time;
    }

    public Set<Pe_Item> getItems() {
        return items;
    }

    public void setItems(Set<Pe_Item> items) {
        this.items = items;
    }
}
