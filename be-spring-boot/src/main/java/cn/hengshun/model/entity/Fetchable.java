package cn.hengshun.model.entity;

import java.io.Serializable;

/**
 * Created by alpaca on 2017/3/18.
 */
public interface Fetchable<KeyType> extends Serializable {

    KeyType getId();

    void setId(KeyType Id);
}
