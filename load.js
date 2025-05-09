import http from "k6/http";
import { check } from "k6";

export const options = {
    stages: [
        { duration: "1m", target: 20 }, // 1분 동안 vu 20명까지 증가
        { duration: "1m", target: 20 }, // 1분 동안 20명 유지
        { duration: "1m", target: 50 }, // 1분 동안 50명까지 증가
        { duration: "1m", target: 50 }, // 1분 동안 피크 유지
    ],

    thresholds: {
        http_req_duration: ["p(95)<200"], // 95%의 요청이 200ms 이하로 응답해야 성공
    },
};

export default function () {
    const response = http.get("http://localhost:8080/api/v1/posts");

    // 상태 코드가 200이면 성공
    check(response, {
        "success": (res) => res.status === 200,
    });
}