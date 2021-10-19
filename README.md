# Node.js WEB APP
웹 브라우저와 서버 간의 상호 동작하는 간단한 반응형 웹 어플리케이션입니다.<br>
사용자가 웹을 통해 컨텐츠를 읽고, 생성하고, 수정하고, 삭제할 수 있습니다.(CRUD 기능 구현)

------------------
# 개발 기간 및 환경

+ 기간: 2021.10.3 ~ 2021.10.14

+ OS: Windows 10

+ LANGUAGE: JavaScript, Html

+ Tools: Atom

+ 실행환경: 크롬 웹 브라우저, Nodejs
------------------
# 목적

JavaScript 언어로 웹 브라우저, 서버 사이드에서 동작하는 반응형 웹 APP 을 만들어 보는것입니다.<br>
CRUD 기능을 구현해 클라이언트와 서버간의 동작 원리를 파악하고 서버 동작의 전반적인 기초적인 지식을 쌓는것입니다.

<br>

-------------------
# 1. 개요
> WEB 버튼을 누르면 홈으로 이동할 수 있습니다.

> 최상단에 홈버튼 WEB이 있고, 기본적으로 3개의 링크 (CSS, HTML, JavaScript)들이 있습니다.   
> 각 링크를 누르면 해당 페이지르 로드됩니다.

> CREATE 버튼을 눌러 새로운 내용을 추가할 수 있습니다.

> update 버튼을 눌러 원하는 항목의 내용을 수정할 수 있습니다.

> delete 버튼을 눌러 원하는 항목을 웹 페이지에서 삭제할 수 있습니다.
> ※(update, delete 버튼은  홈 화면에서는 뜨지 않습니다.)
<br>

# 2. 메뉴
1. WEB
2. CSS
3. HTML
4. JavaScript
5. 사용자가 추가한 컨텐츠 (개수 제한X)
6. create, update, delete
<br>

# 3. 프로그램 구성 및 실행

- 프로그램의 실행파일은 main.js 입니다.<br>
- cmd 창에서 'node main.js' 를 실행합니다.<br>
- 크롬 웹 브라우저에서 실행 여부를 확인합니다.  주소: 'http://localhost:3000/'<br>
- 가장 상단에 WEB, 그 밑 목록으로 CSS, HTML, JavaScript 가 있고 각 항목들을 누르면 해당 페이지로 이동합니다.<br>
- create 버튼을 눌러 직접 컨텐츠를 생성할 수 있습니다.
- update 버튼을 누르면 원하는 항목을 업데이트 할 수 있습니다. (WEB 버튼 제외)
- delete 버튼으로 원하는 항목 데이터를 삭제할 수 있습니다.
<br><br><br>

### 파일 목록
프로그램이 정상적으로 실행되기 위해서는 다음 파일들이 'Nodejs_생활코딩'과 같은 폴더 내에 존재해야 합니다.<br>
그렇지 않을 경우 실행이 되지 않습니다.<br><br>

-main.js (실행 파일)<br><br>

data 폴더
> CSS, HTML, JavaScript 파일 (기본)

lib 폴더
> template.js 파일


<br>

# 4. TestCase
프로그램이 의도된 대로 잘 작동하는지 테스트합니다.<br><br>

**1. 'WEB' 버튼 누른경우:**<br>

> 웹 브라우저에 'Welcome'출력, 밑에 줄에 'Hello Node.js!' 가 표시되어야 합니다.<br>웹 브라우저의 주소: 'localhost:3000' , title: 'WEB - Welcome' 이여야 함.<br><br>

- 결과: 정상 작동<br><br><br>

**<u>`2, 3, 4 공통사항: 웹 페이지 주소의 id값이 바뀌며 다른 주소로 이동합니다.`</u>**
<br><br>

**2. 'CSS' 누른 경우** <br>

> 웹 브라우저에 'CSS'출력, 밑에 줄에  data/CSS (data 디렉토리의 이름이 CSS인 파일) 의 내용이 출력되어야 합니다.<br><br>

- 결과: 정상 작동<br><br><br>


**3. 'HTML' 누른 경우**<br>

> 웹 브라우저에 'HTML' 출력, 밑에 줄에  data/HTML 의 내용이 출력되어야 합니다.<br><br>

- 결과: 정상 작동 <br><br><br>


**4. 'JavaScript' 누른 경우**<br>

> 웹 브라우저에 'JavaScript' 출력, 밑에 줄에 data/JavaScript 의 내용이 출력되어야 합니다.<br><br>

- 결과: 정상 작동 <br><br><br>


**5. 'create'**<br>

> 웹 브라우저에 제목과 본문 내용을 입력받고, '제출' 버튼을 누르면 웹 페이지에 사용자가 입력한 내용이 출력됩니다.<br>
> data 폴더 안에 사용자가 입력한 title 이름의 파일 생성, description 의 내용이 입력되어야 합니다.<br><br>

- 결과: 정상 작동 <br><br><br>


**6. 'update'**<br>

> 사용자가 수정한 내용으로 업데이트 됩니다.<br>
> data 폴더안의 파일 리스트가 사용자가 수정한 이름으로 바뀌고 본문 내용도 바뀌게 됩니다.<br><br>

- 결과: 정상 작동 <br><br><br>


**7. 'delete'**<br>

> 사용자가 지정한 항목이 삭제됩니다.<br>
> data 폴더 안의 내용 또한 삭제됩니다.<br><br>

- 결과: 정상 작동 <br><br><br><br>

### **변수 Test**

#### main.js 의 맨 위, node.js 모듈에서 변수들의 값을 확인해봅다.

```javascript
var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');
```
<br>

> **모든 Else TestCase는 createServer() 메서드 안에서 이뤄집니다.**
> **각 태그를 눌러 콘솔에 출력된 결과를 확인해봅니다.**

<br><br>

**qs 값 확인**

```javaScript
console.log(qs);
```

결과:
{
  unescapeBuffer: [Function: unescapeBuffer], <br>
  unescape: [Function: qsUnescape], <br>
  escape: [Function: qsEscape], <br>
  stringify: [Function: stringify], <br>
  encode: [Function: stringify], <br>
  parse: [Function: parse], <br>
  decode: [Function: parse] <br>
}<br>
안에 여러 메서드가 들어있는 객체형태.<br>
뒤에서 POST 방식으로 전송된 데이터를 처리하는 데에 qs.parse()를 사용한다.
<br><br><br>


**url, pathname 값 확인**

```javascript
console.log('url: '+__url+'  pathname: '+pathname);
```

결과: <br>
WEB ) url: '/'  pathname: '/' <br>
CSS ) url: '/?id=CSS'  pathname: '/' <br>
HTML ) url: '/?id=HTML'  pathname: '/' <br>
JavaScript ) url: '/?id=JavaScript'  pathname: '/'  <br>
MongoDB ) url: '/?id=MongoDB'  pathname: '/' <br>
<br><br><br>


**query data id값 확인**
```javascript
console.log(queryData.id);
```
결과:
WEB 인 경우 undefined, 나머지의 경우 id값이 잘 출력되었다.
<br><br><br>


**filelist 값 확인**
- fs.readdir() 에서 테스트합니다.

```javascript
console.log(filelist);
```
결과:
[ 'CSS', 'HTML', 'JavaScript', 'Limo', 'MongoDB', 'Nodejs' ] <br>
WEB을 눌렀을 때 data 폴더에 들어있는 파일 순서대로 정상 출력됨.
<br><br><br><br>


### POST 방식으로 웹 브라우저가 전송한 데이터를 가져올 때
```javascript
else if (pathname === '/create') // 'create' 버튼 누른 경우
```

<br>
create 버튼을 눌러 사용자가 내용을 생성하고, POST 방식으로 전송하게 됩니다.
이때 이벤트 처리(response.on)를 통해 가져옵니다.
post 값을 확인합니다.

```javascript
console.log(post);
```

결과:
{ title: 'MongoDB' , description: 'MongoDB is..' } <br><br>
객체 형태로 저장. qs.parse(body) 정보를 객체화 할 수 있다.<br>
form 태그로 이름을 부여하고(name) 그것이 post에서 속성으로 되어 있는것을 알 수 있다.
<br><br><br>

### 보안
목적: 악의적인 의도로 접근하거나 정보를 캐려는 사용자를 막기 위함.<br><br>
#### 1. path 이용한 보안

```javascript
else{ // 홈 버튼이 아닌 경우.
  fs.readdir('./data',function(error, filelist){
    fs.readFile(`data/${queryData.id}`,'utf8', function(err,description){
```
다음과 같이 queryData.id 값을 조작해 의도되지 않은 경로로 접근할 수 있습니다.<br>
Data 폴더의 밖으로 나가 모든 파일에 접근할 수 있는 대참사가 발생 가능합니다.<br>
입력:

```javaScript
fs.readFile(`data/${../password.js}`,'utf8', function(err,description){
```

결과: module.exports = { id: 'matt1235', password: '1235' }
password.js 파일의 모든 정보가 출력됨.<br><br>
입력: <br>

```javascript
  var filteredId = path.parse(queryData.id);
  console.log(filteredId);
```

결과: <br>
{ root: '', dir: '', base: 'JavaScript', ext: '', name: 'JavaScript' }<br>
{ root: '', dir: '..', base: 'password', ext: '', name: 'password' }<br>
{ root: '', dir: '', base: 'HTML', ext: '', name: 'HTML' }<br>
객체 반환. 여기서 data 외의 다른 디렉토리로 가는 것을 막기 위해 base 값 사용.<br>

```javascript
var filteredId = path.parse(queryData.id).base;
fs.readFile(`data/${filteredId}`,'utf8', function(err,description){
```
이제 queryData에 '../password.js' 처럼 다른 값이 와도 이동할 수 없음.<br><br>

#### 2. sanitize-html 을 이용한 보안.

```javascript
  var title = queryData.id;
  var sanitizedTitle = sanitizeHtml(title);
  var sanitizedDescription = sanitizeHtml(description, {
    allowedTags: ['h1']
  });
```
title, description 을 살균(sanitize) 함으로써 악의적인 실행을 방지합니다.<br>
예를 들어 <script>로 둘러쌓여 사용자를 다른 곳으로 보내버린다던지 하는 실행을 태그를 제거해 버림으로써 무효화 할 수 있습니다.<br>
sanitizeHtml 안에 허용할 태그를 설정할 수 있습니다.
