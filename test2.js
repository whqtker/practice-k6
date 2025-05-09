import http from "k6/http";
import { sleep } from "k6";
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

// 테스트 옵션
export const options = {
    vus: 100, // 가상 사용자 수
    duration: "10s", // 테스트 시간
};

// vu가 반복적으로 수행할 코드
// 100개의 vu가 10초 동안 10번 요청을 보내므로 총 1,000개의 요청이 발생한다.
export default function () {
    http.get("http://localhost:8080/api/v1/posts");
    sleep(1); // 각 요청 사이에 1초 대기
}

// 테스트 결과를 html로 추출할 수 있다.
export function handleSummary(data) {
    return {
        "result.html": htmlReport(data),
    };
}