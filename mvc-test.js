import http from 'k6/http';
import { check } from 'k6';

export const options = {
  vus: 100, // Количество виртуальных пользователей
  duration: '15s', // Длительность теста
};

export default function () {
  const res = http.get('http://localhost:8080/mvc/hello');
  check(res, {
    'status was 200': (r) => r.status === 200,
  });
}
