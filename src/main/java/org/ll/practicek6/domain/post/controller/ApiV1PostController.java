package org.ll.practicek6.domain.post.controller;

import lombok.RequiredArgsConstructor;
import org.ll.practicek6.domain.post.service.PostService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/posts")
@RequiredArgsConstructor
public class ApiV1PostController {
    private final PostService postService;

    record PostResponse(Long id, String title, String content) { }

    @GetMapping
    public ResponseEntity<List<PostResponse>> readAll() {
        return ResponseEntity.ok(postService.finAll().stream()
                .map(post -> new PostResponse(post.getId(), post.getTitle(), post.getContent()))
                .toList());
    }

}
