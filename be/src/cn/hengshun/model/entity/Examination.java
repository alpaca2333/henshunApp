package cn.hengshun.model.entity;

import javax.persistence.*;
import java.sql.Timestamp;

/**
 * Created by alpaca on 17-5-28.
 */
@Entity(name = "examination")
public class Examination implements Fetchable<Integer> {
    private Integer id;

    private Timestamp time;

    private Baby tester;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Timestamp getTime() {
        return time;
    }

    public void setTime(Timestamp time) {
        this.time = time;
    }

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "babyId")
    public Baby getTester() {
        return tester;
    }

    public void setTester(Baby tester) {
        this.tester = tester;
    }
}
