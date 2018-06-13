package com.koombiyo.repository;

import com.koombiyo.models.User;
import org.springframework.data.mongodb.repository.MongoRepository;


public interface UserRepository extends MongoRepository<User, String> {
    public User findByName(String name);
}
