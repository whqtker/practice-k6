// K6_WEB_DASHBOARD=true k6 run test3.js: 테스트 과정을 웹 대시보드에서 볼 수 있음
// k6 run --out influxdb=localhost:8086/k6 test3.js: 결과를 influxdb에 저장하여 grafana 대시보드에서 볼 수 있음

import http from 'k6/http';
import { sleep } from 'k6';

// 3분 동안 7000개의 vu가 요청을 점진적으로 보냄
export const options = {
    stages: [
        { duration: '3m', target: 7000 }
    ],
};

export default function () {
    http.get('http://localhost:8080/api/v1/posts');
    sleep(1);
}