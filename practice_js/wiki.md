Https
=> 무결성과 기밀성을 지키기위해서? - 기밀성(privacy) -> 메시지를 가로챌 수 없음( = 메시지의 내용을 읽을 수 없다.=> 메시지는 암호화 되어있다 ) - 무결성(integrity) -> 메시지가 조작되지 않음(A에서 B로(요청과 응답에서) 메시지를 보낼 때 메시지가 원본 그대로 잘 도착함) -> 암호화가 잘 되어있기 때문에

암호화 - 대칭키 암호화 : 암호화/복호화를 하는 키가 똑같다. - 비대칭키 암호화 -> https에서 사용 : 암호화/복호화를 하는 키가 다르다 - 공개 키 -> https에서는 암호화 - 비공개 키 (개인키) -> https에서는 복호화

인증서는 무엇을 보장할까? - 브라우저에서 접속한 서버가 _“의도한” 서버임을 보장_ - 브라우저와 서버가 통신할 때 암호화할 수 있도록 _서버의 공개키 제공_

    Ex) mkcert로 만든 인증서 (CA는 누구? -> 내컴퓨터)
    	- key.pem
    	- cert.pem
    	임의의 인증서라 invaild key라는 에러뜸

해싱 - 해싱 알고리즘 -> 복호화가 안되는 알고리즘 - 해싱함수는 input-> output 항상 같은 결과를 낸다. - 복호화 (사실상) 불가능하다 - 솔트. 원래에 있는 password 에 소금쳐서 완전히 다른 password가 생성?해싱? => salt+password —hash function —> DIGEST - 암호화의 보안성이 좋아짐.

쿠키 - 쿠키는 서버 -> 브라우저한테 주는 것 - HTTP 응답에 실어서 준다 - 쿠키 - HTTP의 stateless 특징을 보완해주는 도구 (\* stateless(무상태성) : ) - 작은 문자열을 저장 - 사용헤더 - cookie - set-cookie

쿠키
Csrf samesite
세션 vs 토큰

——

—
Unicode vs utf-8
인코딩이랑 어떤 데이터를 다른 형식으로 변환하는 과정 또는 그 방법을 의미
Ex) 촬영한 영상을 유튜브에 올릴때 형식에 맞게 변환해서 업로드 해야함

문자인코딩이란 문자 데이터를 머신코드로 변환하는 과정 또는 그 방법을 의미
정확한 문자 인코딩 방법을 지정하지 않을면 문자데이터가 소실될 수 있음
Ex) 프로그래밍 -> utf-8 ( 101010100…) -> utf-8 -> 프로그래밍
프로그래밍 -> utf-8 ( 101010100…) -> euc-kr -> 봵쉣렇옓횫
이처럼 한글 데이터를 다룰 때 알 수 없는 문자가 보이는 경우, 문자 인코딩이 원인이 경우가 대부분임
UTF-8방식

—

---

📒 MVC
MVC는 Model View Controller의 약자로 사용자 인터페이스, 데이터 및 논리 제어를 구현하는데 널리 사용되는 소프트웨어 디자인 패턴이다.

소프트웨어의 비즈니스 로직과 화면을 구분하는데 중점을 두고 있다.

🔍 Model
어플리케이션이 '무엇'을 할 것인지 정의하고 데이터와 비즈니스 로직을 관리한다.

처리되는 알고리즘, DB와 상호작용(CRUD Create Read Update Delete), 데이터 등
🔍 View
화면에 '무엇'인가를 보여주기 위한 역할을 한다.

컨트롤러 하위에 종속되어, 모델이나 컨트롤러가 보여주려고 하는 모든 필요한 것들을 보여준다.

최종 사용자에게 '무엇'을 화면(UI)으로 보여줌
🔍 Controller
모델이 '어떻게' 처리할 지를 알려주는 역할을 하고, 모바일에서는 화면의 로직처리 부분이다.

화면에서 사용자의 요청을 받아서 처리되는 부분을 구현하게 되며, 요청 내용을 분석해서 Model과 View에 업데이트 요청을 하게 된다.

Controller는 Model과 View가 각각 무엇을 해야 할 지를 알고 있고, 통제한다.

비즈니스 로직을 처리하는 Model과 완전히 UI에 의존적인 View가 서로 직접 이야기할 수 없게 한다.

MVC 예시
간단한 쇼핑 리스트 앱이 있다고 생각해보자. 이번 주에 사야할 각 항목의 이름, 갯수, 가격의 목록이 필요하다.

출처 : MDN

Model은 데이터의 상태가 변경되면 모델을 일반적으로 뷰에게 알리며(따라서 필요한대로 화면을 변경할 수 있다) 업데이트 된 뷰를 제거하기 위해 다른 로직이 필요한 경우 가끔 컨트롤러에게 알리기도 한다.

모델은 리스트 항목이 포함해야 하는 데이터 < 품목, 가격, 등 > 이미 존재하는 리스트 항목이 무엇인지를 지정한다.

View는 앱의 데이터를 보여주는 방식이며 항목이 사용자에게 보여지는 방식을 정의하며, 표시할 데이터를 모델로부터 받는다.

Controller는 앱의 사용자로부터의 입력에 대한 응답으로 모델 또는 뷰를 업데이트 하는 로직을 포함한다.

항목을 추가하거나 제거할 수 있게 해주는 입력 폼과 버튼을 갖는다. 이런 액션들은 모델이 업데이트 되는 것이므로 입력이 컨트롤러에게 전송되고, 모델을 적당하게 처리한 다음 업데이트된 데이터를 뷰로 전송한다.

항목을 알파벳 순서로 정렬한다던지 가격순으로 정렬하는 경우에는 모델을 업데이트 할 필요 없이 바로 처리할 수 있다.

🔍 Web과 MVC

출처 : 생활코딩

위 그림처럼 사용자가 Controller를 조작하면 Controller는 Model을 통해서 데이터를 가져오고 그 정보를 바탕으로 시각적인 표현을 담당하는 View를 제어해서 사용자에게 전달하게 된다.

사용자가 웹 사이트에 접속한다. (USES)
Controller는 사용자가 요청한 웹페이지를 서비스하기 위해서 모델을 호출한다. (MANIPULATES)
모델은 데이터베이스나 파일과 같은 데이터 소스를 제어한 후에 그 결과를 리턴한다.
Controller는 Model이 리턴한 결과를 View에 반영한다. (UPDATES)
데이터가 반영된 View는 사용자에게 보여진다. (SEES)
🔍 MVC 패턴의 필요성 및 한계점
디자인 패턴을 알기 전에는 온갖 모듈들이 뒤죽박죽 섞여 지저분한 코드로 가득했다. 이런 코드는 개발자 본인이 유지보수 하기에도 복잡하고, 다른 개발자가 투입되면 분석하기가 어렵고 유지보수 하기도 힘들다.

MVC 패턴은 역할에 따라 확실하게 분리하여 유지보수를 용이하게 하고 프로그램의 확장성과 유연성을 높이기 위한 기법이다.

데이터가 추가되면 Model 부분만 수정하고, UI가 수정되면 View 부분만 수정한다.

물론 Controller도 두 부분을 관장하기 때문에 일부 수정이 필요하지만 기존처럼 메인 다이얼로그/폼에서의 무분별한 하드 코딩은 필요가 없다.

서로 분리되어 각자의 역할에 집중할 수 있게끔하여 개발을 하고 그렇게 만들면 유지보수, 애플리케이션의 확장성, 유연성이 증가하고 중복코딩이라는 문제점 또한 사라진다.

한계점
한 Model은 다수의 View들을 가질 수 있고 반대로 Controller를 통해서 한 View에 연결되는 Model도 여러 개가 될 수 있다.

이렇게 되면 결과적으로 View와 Model이 서로 의존성을 띄게 된다.

물론 설계를 잘 한다면 Model간의 의존성 뿐만아니라 View와 Model 사이에 생기는 의존성도 줄일 수 있지만 프로그램 특성상 필연적으로 화면에 복잡한 화면과 데이터의 구성 필요한 구성이라면, Controller에 다수의 Model과 View가 복잡하게 연결되어 있는 상황이 생길 수 있다.

이렇게 MVC 규모 자체가 너무 복잡하고 비대해져서, 새 기능을 추가할때마다 의존성을 일일이 해결해야해서 메소드 분석이나 테스트도 어렵게 된다. 이런 형태의 MVC를 Massive ViewController라고 부르는데, 이는 MVC의 한계를 표현한 용어이기도 한다.

---

//ORM
📒 ORM(Object Relational Mapping)
ORM은 객체지향 프로그래밍의 객체(Object)와 관계형 데이터베이스(Relational DataBase)의 데이터를 연결(Mapping)하는 기술을 의미한다.
🔍 ORM의 장점
ORM으로 생성된 가상의 객체지향 데이터베이스는 프로그래밍 코드 또는 데이터베이스와 독립적이므로 재사용 및 유지보수가 용이하다.
🔍 ORM 요소
Schema Object
관계형 db에 user라는 테이블이 있고 ORM을 쓰고있다면 아래의 예시처럼 db user테이블에 mapping되는 객체를 선언한다.
//ex_sql)
Create Table User(
id Integer NOT NULL,
name Varchar(255)
);
//ex_javascript)
models.User = {
id : DataTypes.Integer.Not_Null,
name : DataTypes.Varchar(255),
};
Query Builder
자바스크립트를 query로 만들면 이것을 실제 db에서 실행할 sql로 변환해서 만들어주는 기능.
sql query를 분해해서 여러 객체로 나눌 수 있기 때문에 ORM을 잘하면 db query관리에 유용하다.
//ex-sql)
Select id, name From User
Where id = 1;
//ex-javascript)
User.findAll({
attributes : ["id", "name"],
where : {id : 1};
});
Migration Tool
db스키마 변경사항 기록, 관리하기 위한 Migration Tool이다.
소스코드는 깃으로 버전관리를 하는데 소스코드와 강하게 묶인 db를 그냥 사용할 경우 스키마구조에 대해 같이 버전관리할 방법이 없다. 또한, 로컬에서 개발 후 자동배포 할 때에도 유용하다.
배포시 자동으로 db스키마 변경사항에 대해 변경이 가능하기 때문에 db스키마도 자동으로 관리가 가능하다.
//ex)
202105111530-add-name-to-user.js
202108310920-create-order-table.js
...
💡 What is Database Migration?

## 데이터베이스를 하나의 플랫폼에서 다른 플랫폼으로 옮기는 것

### 📒 How to use docker on CLI

- #### 🔍 이미지 가져오기 -> docker image pull NAME[:TAG]

  ```
  docker image pull docker/whalesay:latest
  ```

  => `:latest`를 통해 `docker/whalesay`의 최신 이미지를 받아옴

---

- #### 🔍 이미지 리스트를 출력 -> docker image ls

---

- #### 🔍 컨테이너 실행 -> docker container run IMAGE [COMMAND] [ARG…]

  ```
  docker container run —name whalesay docker/whalesay:latest cowsay boo
  ```

  `run` : 컨테이너 실행
  `--name` : 컨테이너의 이름 할당
  ` cowsay` : 컨테이너 실행 시 cowsay 명령어를 호출(node를 호출하듯 이용)
  `boo` : cowsay에 넘겨질 파라미터

---

- #### 🔍 모든 컨테이너 리스트 출력 -> docker container ps -a

---

- #### 🔍 컨테이너 삭제 -> docker container rm CONTAINER_NAME

---

- #### 🔍 이미지 삭제 -> docker image rm IMAGE_NAME

---

- #### 🔍 이미지를 받아오고, 컨테이너로 실행하고, 컨테이너와 관련된 리소스를 삭제하는 작업을 한번에

  ```
  docker container run --name CONTAINER_NAME --rm docker/whalesay cowsay boo
  ```

  `-rm` 옵션을 통해 1회성으로 실행할 수 있음.

---

- ## 💡 도커를 이용해 간단하게 파이썬 개발환경 구축

![](https://images.velog.io/images/jungjaedev/post/931babb7-8b2a-4ef0-9ad9-3b47dfd4a510/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-09-18%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%207.32.27.png)
`docker run -it python`

     =>  `-it` 옵션을 통해 컨테이너에 명령어를 입력할 수 있게 해줌

![](https://images.velog.io/images/jungjaedev/post/da68114e-2d14-4b30-b683-280a144f1830/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-09-18%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%207.34.47.png)

`exit()` : 파이썬 콘솔 종료
`docker start CONTAINER_ID` : 컨테이너 시작
`docker exec -it CONTAINER_ID bash` : 컨테이너 bash쉘로 접속

---

> MySQL은 세계에서 가장 많이 쓰이는 오픈 소스의 관계형 데이터베이스 관리 시스템이다.

### 데이터베이스 생성

```
mysql> CREATE DATABASE [database_name];
```

### 데이터베이스 사용

```mysql
mysql> USE [database_name];
Database changed
```

### 데이터베이스 삭제

```
mysql> DROP DATABASE [database_name];
```

---

### 테이블 생성

```
mysql> CREATE TABLE [Table_name] (
	[column1 name] [datatype],
    [column2 name] [datatype],
    [column3 name] [datatype]
    );
```

### 테이블 삭제

```
mysql> DROP TABLE [table_name];
```

---

### 테이블에 Column 추가

```
mysql> ALTER TABLE [table_name] ADD [column name][datatype];
```

### Column의 타입 변경

```
mysql> ALTER TABLE [table_name] MODIFY COLUMN [column_name][datatype];
```

### Column 삭제

```
mysql> ALTER TABLE [table_name] DROP [column_name];
```

---

### 테이블에 행 추가

```
mysql> INSERT INTO [table_name] VALUES (value1, value2...);
```

### condition을 통해서 정보 확인

```
mysql> SELECT [what_to_select]
       FROM [which_table]
       WHERE [conditions_to_satisfy];
```

### 내용 수정

```
mysql> UPDATE [table_name] SET [column_name]=[value] WHERE [condition];
```

---

### Join syntax

```
mysql> SELECT [what_to_select]
       FROM [standard_table]
       JOIN [Joined_table]
       ON [standard_table.key=joined_table.key]
```

---

## 📒 URI(Uniform Resource Identifier)

### 💾 URI를 구성하는 파트

`http://blog.example.com/entries/1`

> URI Scheme : http
> 호스트명 : blog.example.com
> path : /entries/1

#### URI Scheme

- URI는 URI Scheme로 시작된다. 위 예에서는 리소스를 HTTP로 접근할 수 있다는 것을 나타낸다. (file://, http://, https:// 등이 올 수 있음)

#### 호스트

- DNS(Domain Name System)=> 이름을 통해 알 수 있듯이 도메인 명이나 IP Address가 온다.

#### path(경로)

- 호스트안에서 하나의 리소스를 가르킨다.

---

### 💾 URN, URL

> URI는 URL과 URN을 포함하는 상위개념

![](https://images.velog.io/images/jungjaedev/post/4e7b06d2-de9d-415a-b1ef-0ecd4c3d7702/asdfae.png)

#### URL(Uniform Resource Locator)

- 이름에서 알다시피 URL은 Resource가 어디에 있는지 위치를 알려준다.

#### URN(Uniform Resource Name)

- Resource의 이름을 나타내고 자원이 '무엇'인지 말해준다.

> 출처
> https://nsinc.tistory.com/192 > https://danielmiessler.com/study/difference-between-uri-url/ > https://ko.wikipedia.org/wiki/%ED%86%B5%ED%95%A9_%EC%9E%90%EC%9B%90_%EC%8B%9D%EB%B3%84%EC%9E%90

---

Slice, Substring 두 메서드의 차이점은.

> `Syntax: string.substring(start, stop);`

> `Syntax: string.slice(start, stop);`

### 💾 substring과 slice 메서드는 거의 동일하게 동작함.

```javascript
// 2번째부터 7번째 이전 문자까지 잘라내어 리턴
console.log(str.substring(2, 8)); // "llo Ja"
console.log(str.slice(2, 8)); // "llo Ja"
```

### 💾 start와 stop이 같으면 빈문자열을 리턴

```
console.log(str.substring(2, 2)); // ""
console.log(str.slice(2, 2)); // ""
```

### 💾 두번째 인수를 생략하면 첫번째 인수로 전달한 인덱스 위치의 문자부터 마지막문자까지 부분문자열을 리턴

```javascript
//두번째 인수 생략
console.log(str.substring(2)); // "llo JavaScript!"
console.log(str.slice(2)); // "llo JavaScript!"
```

### 💾 what's difference between slice() and substring()

```
//substirng : 인수 0보다 작거나 NaN인 경우 인수가'0'으로
console.log(str.substring(-5)); "Hello JavaScript!"

//slice : 인수가 음수인 경우 뒤에서부터 잘라내어 리턴
console.log(str.slice(-5)); // "ript!"
```

**두 메서드의 차이는 인수가 음수일 때** 알 수 있음.
`substring`의 경우 인수가 `0보다 작거나 NaN`인 경우 '0'이 되어서 모든 문자열이 출력되는 것을 확인할 수 있음.
`slice`는 인수가 음수인 경우 뒤에서부터 잘라내어 리턴.

#### 💡substr vs slice,substring

substr()의 Parameters는 위의 두 메서드와 달리 (start, length)입니다. 즉, start부터 length만큼의 글자수를 리턴.

> `Syntax: substr(start, length)`

---

# 💡Async vs Defer

현대의 웹사이트에서는 대부분의 `script`들이 `HTML`보다 "무겁다".
프로젝트가 커질수록 다운로드할 크기가 커져서 페이지가 로드되는 속도가 느려진다. 그만큼 `User`에게 늦게 보여질 것이다.
이를 고치기위해 보통 데이터베이스나 백엔드에서 최적화 처리를 하게 된다. 하지만 이보다 더 쉽게 프론트엔드에서 페이지가 로드되는 속도를 빠르게 처리할 수 있다.
자바스크립트를 어떻게 로딩하느냐에 따라 프로세싱 속도가 달라질 수 있다.

#### How Is HTML Parsed

브라우져가 `HMTL`을 로드하는중에 `<script>...</script>` 태그를 만나면
이 스크립트가 실행이 된 후에 완료가 되면 이어서 `HTML`이 로드가 된다.

```html
<!DOCTYPE html>
<html>
  <head>
    <script>
      // `HTML parser`가 이줄에 오면 `script`가 실행이 됨
      // 실행이 끝나면 다시 남은 `html`을 `parsing`함
    </script>
  </head>
  <body></body>
</html>
```

## `script`태그의 위치에 따른 장단점

### 💽 head에 script가 위치

- 브라우져가 한줄씩 분석 ⇒ head에서 script태그를 만나면 html parsing하는것을 멈추고 불러온다.
  (서버에서 다운 ⇒ 실행) 실행 후에 다음 parsing으로 진행 / 만약에 스크립트 안의 파일이 매우 크고 인터넷이 느리다면 사용자가 보기힘들 것이다.

### 💽 body에 script 위치

- 사용자가 html 정보를 빨리 본다는 장점은 있지만 웹사이트가 자바스크립트에 의존적이라면 사용자가 fetching과 실행시간을 기다려야 페이지를 정상적으로 볼 수 있다.

### 💽 head에 async

> `<script asyn src="main.js"></script>`

- asyn는 불리언타입의 속상값이라 선언하는것만으로도 true로 설정되어서 바로 사용가능하다.
- 병렬로 html parsing과 fetching(다운로드)가 같이 진행이 되다가 다운로드가 완료되면 parsing을 멈추고 js를 실행한다.
  ![](https://images.velog.io/images/jungjaedev/post/08919934-7dfe-43f2-9cf0-78dd6ff5e859/Screen%20Shot%202021-05-15%20at%207.20.44%20PM.png)
- 장점 : 바디 끝보다 fetching이 같이 진행돼어서 다운로드받는 시간만큼 절약된다.

- 단점 : 사용자가 페이지를 보는데 여전히 시간이 걸린다. html이 전부 parsing되기 전에 js가 실행이 되어서 조작하려는 시점에 해당 html 부분이 아직 정의되어있지 않을 수 있다. \* 먼저 다운로드가 된 것부터 실행이됨. 정의된 순서랑 상관없이.
  ![](https://images.velog.io/images/jungjaedev/post/071bb111-ffb2-4d8f-a101-37db4f71c45a/Screen%20Shot%202021-05-15%20at%207.21.04%20PM.png)

### 💽 head에 defer

> `<script defer src="main.js"></script>`

- parsing이 되는동안 js를 다운을 받아놓고,
- parsing이 끝난 후 js가 실행이 된다.
  ![](https://images.velog.io/images/jungjaedev/post/5ce43a1f-9136-4731-850e-a9848f0e0626/Screen%20Shot%202021-05-15%20at%207.21.42%20PM.png)
  ![](https://images.velog.io/images/jungjaedev/post/528cd139-9694-4ace-9638-58e405cbf8dd/Screen%20Shot%202021-05-15%20at%207.21.49%20PM.png)

** 🔔 defer옵션을 쓰는 이유 **:

- _html파일이 parsing되는동안 자바스크립트 파일을 동시에 받기 때문. _
- _html이 parsing이 된 다음에 자바스크립트 파일을 실행하기 때문.(같이 로드되지만 실행은 html이 parsing된 이후에)_

> 출처
>
> - [Web Dev Simplified]https://www.youtube.com/watch?v=BMuFBYw91UQ
> - [Scripts: async, defer]https://javascript.info/script-async-defer
> - [드림코딩]https://www.youtube.com/watch?v=tJieVCgGzhs

---

## 📒 Essential Array Methods

### 💾 join(separator?: string): string;

- #### Adds all the elements of an array separated by the specified separator string.

```javascript
//  Q. make a string out of an array
const fruits = ['mango', 'melon', 'peach'];
const result = fruits.join();
const result2 = fruits.join(' ');

console.log(result); // mango,melon,peach
console.log(result2); // mango melon peach
console.log(typeof result); // "string"
```

---

### 💾 split()

- #### Split a string into substrings using the specified separator and return them as an array.

```javascript
// Q. make an array out of a string
const fruits = 'cherry,melon,peach';
const result = fruits.split(',');

console.log(result); // ["cherry", "melon", "peach"]
```

---

### 💾 reverse()

- #### Reverses the elements in an array in place.

```javascript
// Q. result should be: [5, 4, 3, 2, 1]
const arr = [1, 2, 3, 4, 5];
const result = arr.reverse();

console.log(result); // [5, 4, 3, 2, 1]
console.log(arr); // [5, 4, 3, 2, 1]
```

---

### 💾 slice()

- #### Returns a copy of a section of an array.
- #### @param end The end index of the specified portion of the array. This is exclusive of the element at the index 'end'.

```javascript
// Q. Returns a section of an array.
const array = [1, 2, 3, 4, 5];
const result = array.slice(0, 2);

console.log(result); // [1, 2]
console.log(array); // [1, 2, 3, 4, 5]
```

---

> ```javascript
> class Student {
> ```

    constructor(name, age, enrolled, score) {
    	this.name = name;
      	this.age = age;
      	this.enrolled = enrolled;
      	this.score = score;
    }

}
const students = [
new Student('A', 29, true, 45),
new Student('B', 28, false, 80),
new Student('C', 30, true, 90),
new Student('D', 40, false, 66),
new Student('E', 18, true, 88),
]

````
---

### 💾 find()
- #### Returns the value of the first element in the array where predicate is true, and undefined otherwise.

```javascript
// Find a student with the score 90
const result = students.find((student) =>
	 student.score === 90);

console.log(result); // Student {name: "C", age: 30, enrolled: true, score: 90}
````

---

### 💾 filter()

- #### Returns the elements of an array that meet the condition specified in a callback function.

```javascript
const result = students.filter(student => student.enrolled);

console.log(result); // [Student, Student, Student]
```

---

### 💾 map()

- #### Calls a defined callback function on each element of an array, and returns an array that contains the results.

```javascirpt
// make an array containing only the students' score
const result = students.map((student) => student.score);

console.log(result); // [45, 80, 90, 66, 88]
```

---

### 💾 some()

- #### Determines whether the specified callback function returns true for any element of an array.

```javascript
// check if there is a student with the score lower than 50
const result = students.some(student => student.score < 50);

console.log(result); // true

// use every()
const result2 = !students.every(student => student.score >= 50);

console.log(result2); // true
```

---

### 💾 reduce()

- #### Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

```javascirpt
// compute students' average score
const result =  students.reduce((prev, curr) => prev + curr.score, 0)

console.log(result / students.length); // 73,8
```

---

### 📀 combine javascript methods together

```javascript
//make a string containing all the scores bigger than 50
// result should be: '80, 90, 66, 88'
const result = students
  .map(student => student.score)
  .filter(score => score >= 50)
  .join();

console.log(result); // 80,90,66,88
```

### 📀 sort()

- #### Sorts an array in place.
- #### This method mutates the array and returns a reference to the same array.

```javascript
// sorted in ascending order
// result should be: '45, 66, 80, 88 90'
const result = students
  .map(student => student.score)
  .sort((a, b) => a - b)
  .join();

console.log(result); // 45,66,80,88,90
```

> 출처 : MDN
> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
> 드림코딩 by 엘리
> https://www.youtube.com/watch?v=3CUjtKJ7PJg&list=LL&index=1&t=12s
> w3schools
> https://www.w3schools.com/js/js_array_methods.asp

---

```shell
$ node
> process.version	*설치된 노드 버전
'v14.17.2'
> process.arch		*프로세스 아키텍처 정보
'x64'
> process.pid		*현재 프로세스 아이디
18937
> process.uptime()	*프로세스가 시작된 후 흐른 시간('초' 단위)
29.5644865
> process.execPath	*노드의 경로
'/Users/one/.nvm/versions/node/v14.17.2/bin/node'
> process.cwd()		*현재 프로세스가 실행되는 위치
'/Users/one/Desktop/TIL/nodejs'
> process.cpuUsage()	*현재 cpu 사용량
{ user: 860632, system: 121641 }
```

node 내장 객체

```shell
$ node
> global.setTimeout
[Function: setTimeout] {
  [Symbol(nodejs.util.promisify.custom)]: [Getter]
}
> setTimeout		*'global' 생략가능
[Function: setTimeout] {
  [Symbol(nodejs.util.promisify.custom)]: [Getter]
}
```

```shell
> console.time('hi')
undefined
> console.timeEnd('hi')	  *time ~ timeEnd 실행시간
hi: 2.624s
undefined

// console.error - 에러 로깅
// console.dir - 객체 로깅
// console.trace - 호출스택 로깅
// console.table - 보기 편하게 테이블형식으로 보여줌
```

```shell
setTimeout(() => console.log('hi'), 2000)
=> 2초 뒤에 'hi'
const hello = setInterval(() => console.log('hi'), 2000)
// 2초마다 'hi'가 찍힘
clearInterval(hello) => 변수명을 통해 인터벌 취소
setImmidate => setTimeout 0초와 비슷(같지않음) . 즉시 실행
```

`__filename, __dirname`

```js
// filename.js 의 내용
console.log(__filename);
console.log(__dirname);
```

```shell
// 실행 시
❯ node filename.js
/Users/one/Desktop/TIL/nodejs/lecture/filename.js *파일경로
/Users/one/Desktop/TIL/nodejs/lecture *폴더경로
```

---

Npm i express => package.json에서 “dependencies”로 감 => 배포, 실제 서비스 할때까지 쭈욱 쓰이는 것
Npm i -D nodemon => “ “devDependencies”로 감 => 개발할떄만 쓰이는 것
Npm i -g rimraf => “-g”는 global => 전역설치 -> dependencies에 표시 안됨 => 단점 -> 디펜던시에 표시가 안되어서 다른사람이 확인 불가
==> 그래서 npm i rimraf -D 로 설치 후 => npx rimraf node_modules 이런식으로 사용가능 => 디펜던시에도 표시되고 npx로 명령어처럼 사용가능 (npx -> node pakage excute?)

패키지 버전 3자리 => SemVer 방식
Major.Minor.Patch로 이루어져있음
노드에서는 배포를 할 때 항상 버전을 올려야함
major: 하위 호환이 되지 않는 변경 사항
minor: 하위 호환이 되는 변경 사항
Patch: 간단한 버그 수정

버전 앞에 “^”이 있는 경우 : 뒤에껀 신경안씀 -> 뒤에 자리바뀌어도 영향을 미치지 않음 -> 중요
“~” : 두번째자리 고정
아무것도 없으면 세번째 자리까지 고정
Npm i express@latest -> 최신버전 설치 원할 시 “@latest” 붙이면 됨 or
Npm i express@3.1.14 => 이런 식으로 정확한 버전을 지정해서 설치 가능 or
Npm i express@next -> 아직 출시간 안된 버전을 설치해서 테스트해 볼 수 있음

npm명령어들
Npm outdated: 어떤 패키지에 기능 변화가 생겼는지 알 수 있음
Npm deprecate [패키지명][버전] [메시지]: 패키지를 설치할 때 경고 메시지를 띄우게 함(오류가 있는 패키지에 적용)
Npm ls 내 프로젝트가 어떤 패키지를 사용하고 있는지 확인

---

기밀성 (privacy) - 메시지 가로챌 수 없음 - 메시지를 읽을 수 없음 - 메시지는 암호화 되어 있음
무결성 (integrity) - 메시지가 조작되지 않음 - 메시지가 목적지로 가는 도중에 조작되지 않음 - 원본 그대로 잘 도착했음

비대칭 키 암호화 - 공개 키 (열쇠구멍) - 메시지를 암호화하는데 사용 - 비공개 키 (개인키: 열쇠) - 암호화된 메시지를 해독하는데 사용

해싱 - 입력받은 데이터를 고정된 길이의 데이터로 변환할 때 이전 데이터를 알아볼 수없게 만드는 것 - 해싱 알고리즘 - sha-1 / sha 256 / sha 512 등 - input -> output이 늘 동일한 순수 함수 - 해싱된 값은 사실상 복호화는 불가능하다. - 솔트 - 암호화해야하는 원본 값에 어떤 별도의 값을 추가해서 결과를 변형하는 것 - 사용자와 비밀번호 별로 유일한 값을 가져야 함 - 절대 재사용하면 안됨 - 데이터베이스 사용자 테이블에 해싱된 패스워드값, 솔트값

SSL / TLS

쿠키
쿠키 - http의 stateless 특징을 보완해주는 도구 - 작은 문자열을 저장 - connect.sid = session id
쓰임새 - 인증상태 저장 - 장바구니 - 팝업 7일간 보지않기 - 맞춤 광고

---

Utf-8			utf-16 
1byte(=8bits)		2byte
Utf-8 3byte와 utf-16의 2byte가 호환

벡터						비트맵
시작점과 끝점이라는 데이터들의 조함	픽셀단위,
벡터는 연산이 들어가기때문에 평균적으로 무거운 파일임
비트맵은 확대시 품질저하(엘리어싱)이 일어남. 벡터는 X

캐시 - 데이터나 값을 미리 복사해 놓은 ‘임시 데이터’
;
—
맨처음 server side => 
npm init => npm i —save express
Index.js파일 만듬 -> app.get하나 + 포트(process.env.PORT)
package.json에 engines 추가 -> npm start 추가 
.gitignore 추가