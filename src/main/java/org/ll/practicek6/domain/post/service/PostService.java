package org.ll.practicek6.domain.post.service;

import lombok.RequiredArgsConstructor;
import org.ll.practicek6.domain.post.entity.Post;
import org.ll.practicek6.domain.post.repository.PostRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class PostService {
    private final PostRepository postRepository;
    public List<Post> finAll() {
        return postRepository.findAll();
    }

    public void save(String title, String content) {
        this.postRepository.save(Post.builder()
                .title(title)
                .content(content)
                .build());
    }
}
