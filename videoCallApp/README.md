# Video Call

## HTTP vs WebSocket

### HTTP

- user(클라이언트)가 request하면 서버가 response
- http는 `stateless(무상태성)` -> 요청 / 응답 후 기존 상태를 기억하지않음 -> 서버가 클라이언트가 누구인지 잊어버림
- 서버는 요청을 보낼 수 없음 / 요청이 오면 응답할 뿐

### WebSocket

- 클라이언트에서 서버로 webSocket request를 보내면, 서버에서 accept함 -> 연결됨 -> 서버가 유저(클라이언트)가 누구인지 기억할 수 있게됨
