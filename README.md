# Node.js WEB APP
node.js를 사용한 서버에서 동작하는 간단한 반응형 웹페이지

------------------
# 개발 기간 및 환경

+ 기간: 2021.10.5 ~ 2021.10.10
 
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
## 1. 개요
> 최상단에 홈버튼 WEB이 있고, 기본적으로 3개의 링크(CSS, HTML, JavaScript)들이 있습니다.  
>   
> 홈은 기본 화면으로 이동. 3개의 링크를 클릭하면 해당하는 각각의 페이지로 이동합니다.   
> 
> 사용자는 'CREATE' 를 통해 새로운 내용을 웹 페이지에 직접 추가할 수 있습니다.    
<br>

## 2. 메뉴
1. WEB
2. CSS
3. HTML
4. JavaScript
5. +a (사용자가 추가한 컨텐츠)
<br>

## 3. 프로그램 구성 및 실행

- 프로그램의 실행파일은 main.js 입니다.<br>
- cmd 창에서 'node main.js' 를 실행합니다.<br>
- 크롬 웹 브라우저에서 실행 여부를 확인합니다.  주소: 'http://localhost:3000/'<br>
- 프로그램이 정상적으로 실행되기 위해서는 다음 파일들이 Nodejs_생활코딩 과 같은 폴더 내에 존재해야 합니다. 파일이 존재하지 않는 경우 실행이 되지 않습니다.<br><br>

### 파일 목록<br>
data 폴더
- CSS, HTML, JavaScript 파일 (txt 형식)

syntax 폴더
- form.html<br>

1.html<br>
2.html<br>
3.html <br>
index.html<br>
main.js<br>
<br>
<br>

## 4. 테스트 케이스
> 프로그램이 의도된 대로 잘 작동하는지 테스트합니다.<br><br>

> **1. 'WEB' 누른경우:**<br><br>

웹 브라우저에 'Welcome'출력, 밑에 줄에 'Hello Node.js!' 가 표시되어야 합니다.<br>웹 브라우저의 주소: 'localhost:3000' , title: 'WEB - Welcome' 이여야 함.<br><br>
결과: 정상 작동<br><br>

**<u>`2, 3, 4 공통사항: 웹 페이지의 query string의 id값, title 이 각각의 이름으로 바뀌어야 합니다.`</u><br>**


> **2. 'CSS' 누른 경우** <br><br>

웹 브라우저에 'CSS'출력, 밑에 줄에  data/CSS (data 디렉토리의 이름이 CSS인 파일) 의 내용이 출력되어야 합니다.<br><br>
결과: 정상 작동<br><br><br>

> **3. 'HTML' 누른 경우**<br><br>

웹 브라우저에 'HTML' 출력, 밑에 줄에  data/HTML 의 내용이 출력되어야 합니다.<br><br>
결과: 정상 작동 <br><br><br>

> **4. 'JavaScript' 누른 경우**<br><br>

웹 브라우저에 'JavaScript' 출력, 밑에 줄에 data/JavaScript 의 내용이 출력되어야 합니다.<br><br>
결과: 정상 작동 <br><br><br>

> **5. 'create' 누른 경우**<br><br>

웹 브라우저에 title과 description 을 입력받는 form 태그가 나타나고, 입력받아 '제출' 버튼을 누르면<br>
리다이렉션이 일어나 사용자가 입력한 title 과 description이 출력됩니다. <br>
또한 data 폴더 안에 사용자가 입력한 title 이름의 파일 생성, description 의 내용이 입력되어야 합니다.<br><br>
결과: 정상 작동 <br><br><br>

## **Else TestCase**

main.js 의 맨위에서 서버로부터 받아온 4가지 정보들을 확인해봄

```javascript
var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');
```
<br>

>모든 테스트는 createServer() 메서드 안에서 이뤄집니다.

<br>

> ** 1. url, pathname 값 확인 **

```javascript
console.log('url: '+__url+'  pathname: '+pathname);
```
<br>
각 태그를 누르고 결과를 확인해보자.<br><br>
> **결과: **<br> 

WEB ) url: '/'  pathname: '/'
CSS ) url: '/?id=CSS'  pathname: '/'
HTML ) url: '/?id=HTML'  pathname: '/'
JavaScript ) url: '/?id=JavaScript'  pathname: '/' 
MongoDB ) url: '/?id=MongoDB'  pathname: '/'
<br>

> ** 2. **
