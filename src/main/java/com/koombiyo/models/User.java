package com.koombiyo.models;

import org.springframework.data.annotation.Id;

public class User {
    @Id
    public String id;
    public String name;
    public String password;

    public User(String name, String password) {
        this.name = name;
        this.password = password;
    }

    @Override
    public String toString() {
        return String.format(
                "User[id=%s, name='%s', password='%s']",
                id, name, password);
    }

}
