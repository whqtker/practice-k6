package org.ll.practicek6.global.initData;

import lombok.RequiredArgsConstructor;
import org.ll.practicek6.domain.post.service.PostService;
import org.springframework.boot.ApplicationRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
@RequiredArgsConstructor
public class BaseInitData {
    private final PostService postService;

    @Bean
    public ApplicationRunner baseInitDataApplicationRunner() {
        return args -> {
            work1();
        };
    }

    private void work1() {
        for (int i = 0; i <= 50; i++) {
            postService.save("title" + i, "content" + i);
        }
    }
}
