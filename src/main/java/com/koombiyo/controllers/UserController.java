package com.koombiyo.controllers;

import com.koombiyo.models.User;
import com.koombiyo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

/**
 * Created by Damma on 12-Jun-18.
 */
@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    UserRepository userRepository;

    @RequestMapping(method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    public void create(@RequestBody User user) {
        userRepository.save(user);
    }

    @RequestMapping(value = "/{name}")
    public User read(@PathVariable String name) {
        return userRepository.findByName(name);
    }

    @RequestMapping(method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_VALUE)
    public void update(@RequestBody User user) {
        userRepository.save(user);
    }

    @RequestMapping(value = "/{name}", method = RequestMethod.DELETE)
    public void delete(@PathVariable String name) {
        User deleteThis = userRepository.findByName(name);
        userRepository.delete(deleteThis);

    }
}
