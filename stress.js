import http from "k6/http";
import { check } from "k6";

export const options = {
    stages: [
        { duration: "1m", target: 20 },
        { duration: "1m", target: 20 },
        { duration: "1m", target: 40 },
        { duration: "1m", target: 40 },
        { duration: "1m", target: 50 },
        { duration: "1m", target: 50 },
    ],

    thresholds: {
        http_req_duration: ["p(95)<300"],
    },
};

export default function () {
    const response = http.get("http://localhost:8080/api/v1/posts");
    check(response, {
        "success": (res) => res.status === 200,
    });
}