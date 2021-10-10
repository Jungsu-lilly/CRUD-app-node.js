# Node.js WEB APP
node.js를 사용한 웹 브라우저와 서버에서 상호 작용하여 동작하는 간단한 반응형 웹페이지<br>
사용자가 웹을 통해 컨텐츠를 생성하고, 수정하고, 삭제할 수 있는 WEB Application.<br>

------------------
# 개발 기간 및 환경

+ 기간: 2021.10.3 ~ 2021.10.10

+ OS: Windows 10

+ LANGUAGE: JavaScript

+ Tools: Atom, node.js

+ 실행환경: Window PowerShell , Chrome 웹 브라우저  (크롬을 권장합니다.)
------------------
# 목적

JavaScript 언어로 웹 브라우저, 서버 사이드에서 동작하는 반응형 WEB APP 을 만들어 보는것입니다.<br>
웹 브라우저와 웹 서버간의 동작 원리를 파악하고, 백엔드 전반적인 기초적인 지식을 쌓는것입니다.
<br>

-------------------
# 1. 개요
> 최상단에 홈버튼 WEB이 있고, 기본적으로 3개의 링크(CSS, HTML, JavaScript)들이 있습니다.  
>   
> 홈은 기본 화면으로 이동. 3개의 링크를 클릭하면 해당하는 각각의 페이지로 이동합니다.   
>
> 사용자는 'CREATE' 를 통해 새로운 내용을 웹 페이지에 직접 추가할 수 있습니다.    
<br>

# 2. 메뉴
1. WEB
2. CSS
3. HTML
4. JavaScript
5. +a (사용자가 추가한 컨텐츠)
<br>

# 3. 프로그램 구성 및 실행

- 프로그램의 실행파일은 main.js 입니다.<br>
- cmd 창에서 'node main.js' 를 실행합니다.<br>
- 크롬 웹 브라우저에서 실행 여부를 확인합니다.  주소: 'http://localhost:3000/'<br>
- 가장 상단에 WEB, 그 밑 목록으로 CSS, HTML, JavaScript 가 있고 각 항목들을 누르면 해당 페이지로 이동합니다.<br>
- create 항목을 눌러 사용자가 직접 컨텐츠를 생성, 수정, 삭제할 수 있습니다.
<br><br><br>

### 파일 목록
프로그램이 정상적으로 실행되기 위해서는 다음 파일들이 'Nodejs_생활코딩'과 같은 폴더 내에 존재해야 합니다.<br>
그렇지 않을 경우 실행이 되지 않습니다.<br><br>

index.html<br>
main.js<br><br>

data 폴더
- CSS, HTML, JavaScript 파일<br>
<br>
<br>


# 4. TestCase
프로그램이 의도된 대로 잘 작동하는지 테스트합니다.<br><br>

**1. 'WEB' 누른경우:**<br>

> 웹 브라우저에 'Welcome'출력, 밑에 줄에 'Hello Node.js!' 가 표시되어야 합니다.<br>웹 브라우저의 주소: 'localhost:3000' , title: 'WEB - Welcome' 이여야 함.<br><br>

- 결과: 정상 작동<br><br><br><br>

**<u>`2, 3, 4 공통사항: 웹 페이지의 query string의 id값, title 이 각각의 이름으로 바뀌어야 합니다.`</u>**
<br><br><br>

**2. 'CSS' 누른 경우** <br>

> 웹 브라우저에 'CSS'출력, 밑에 줄에  data/CSS (data 디렉토리의 이름이 CSS인 파일) 의 내용이 출력되어야 합니다.<br><br>

- 결과: 정상 작동<br><br><br><br>


**3. 'HTML' 누른 경우**<br>

> 웹 브라우저에 'HTML' 출력, 밑에 줄에  data/HTML 의 내용이 출력되어야 합니다.<br><br>

- 결과: 정상 작동 <br><br><br>


**4. 'JavaScript' 누른 경우**<br>

> 웹 브라우저에 'JavaScript' 출력, 밑에 줄에 data/JavaScript 의 내용이 출력되어야 합니다.<br><br>
- 결과: 정상 작동 <br><br><br>


**5. 'create' 누른 경우**<br>

> 웹 브라우저에 제콕e과 내용을 입력받고, '제출' 버튼을 누르면 웹 페이지에 사용자가 입력한 내용이 출력됩니다.<br>
> data 폴더 안에 사용자가 입력한 title 이름의 파일 생성, description 의 내용이 입력되어야 합니다.<br><br>

- 결과: 정상 작동 <br><br><br><br><br><br>





## **변수값 Test Case**

### main.js 의 맨 위, node.js 모듈에서 받아온 값들을 확인해 봅시다.

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

1. qs 값 확인

```javaScript
console.log(qs);
```

결과:
{
  unescapeBuffer: [Function: unescapeBuffer],
  unescape: [Function: qsUnescape],
  escape: [Function: qsEscape],
  stringify: [Function: stringify],
  encode: [Function: stringify],
  parse: [Function: parse],
  decode: [Function: parse]
}<br>
객체 형태로, 안에 여러 함수들이 담겨 있음.
이 프로그램에서는 POST 방식으로 전송된 데이터를 가져와 처리하기 위해 qs.parse()를 사용함.
<br><br><br>


2. url, pathname 값 확인

```javascript
console.log('url: '+__url+'  pathname: '+pathname);
```

결과: <br>

WEB ) url: '/'  pathname: '/' <br>
CSS ) url: '/?id=CSS'  pathname: '/' <br>
HTML ) url: '/?id=HTML'  pathname: '/' <br>
JavaScript ) url: '/?id=JavaScript'  pathname: '/'  <br>
MongoDB ) url: '/?id=MongoDB'  pathname: '/' <br>
<br><br>


3. id값 확인 (querydata.id)로 추출함     

```javascript
console.log(queryData.id);
```
결과:
WEB 인 경우 undefined, 나머지의 경우 id값이 잘 출력되었다.
<br><br>


4. filelist 값 확인

- fs.readdir() 메서드에서 테스트합니다.

```javascript
console.log(filelist);
```
결과:
[ 'CSS', 'HTML', 'JavaScript', 'Limo', 'MongoDB', 'Nodejs' ] <br>
WEB을 눌렀을 때 data 폴더에 들어있는 파일 순서대로 정상 출력됨.
<br><br>



## POST 방식으로 웹 브라우저가 전송한 데이터를 가져올 때 Testing
<br>
```javascript
else if (pathname === '/create'){ // 'create' 버튼 누른 경우
```
<br>
create 버튼을 눌러 사용자가 내용을 생성하고, POST 방식으로 전송하게 됩니다.
이때 response.on 통해 가져오게 되고, post 값을 확인합니다.

```javascript
console.log(post);
```

결과:
{ title: 'MongoDB' , description: 'MongoDB is..' } <br><br>
객체 형태로 저장. qs.parse(body) 정보를 객체화 할 수 있다.
따라서 콘솔에 출력하면 객체 형태로 나오는 것을 알 수 있다.
