var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring'); // node.js 가 가지고 있는 모듈을 가지고 오는 것.

var template = require('./lib/template.js');
var path = require('path'); // 사용자로부터 경로가 들어온 모든 곳의 내용을 바꿔주자.

var app = http.createServer(function(request,response){
    var __url = request.url;
    var queryData = url.parse(__url, true).query;
    var pathname = url.parse(__url,true).pathname;

    if(pathname === '/'){ // 모든 메뉴. (create 제외.)

      if(queryData.id === undefined){ // WEB 버튼 누른 경우. (홈)
        fs.readdir('./data',function(error, filelist){

          var title = 'Welcome';
          var description = 'Hello Node.js!';
          var list = template.list(filelist);
          var html = template.html(title, list,
            `<h2>${title}</h2>${description}`,
            `<a href="/create">create</a>`
          );
          response.writeHead(200);
          response.end(html);
        });
      }
      else{ // 홈 버튼이 아닌 경우.
        fs.readdir('./data',function(error, filelist){
          var filteredId = path.parse(queryData.id).base;
          fs.readFile(`data/${filteredId}`,'utf8', function(err,description){
            var title = queryData.id;
            var list = template.list(filelist);
            var html = template.html(title, list,
              `<h2>${title}</h2>${description}`,
              `<a href="/create">create</a>
               <a href="/update?id=${title}">update</a>
               <form action="delete_process" method="post">
                <input type="hidden" name="id" value="${title}">
                <input type="submit" value="delete">
               </form>
               `
             );
            response.writeHead(200);
            response.end(html);
          });
        });
      }
    } // 모든 메뉴. (create 제외.)

    else if (pathname === '/create'){ // 'create' 버튼 누른 경우.
      fs.readdir('./data',function(error, filelist){

        var title = 'WEB - create';
        var description = 'Hello Node.js!';
        var list = template.list(filelist);
        var html = template.html(title, list,
          `
          <form action="/create_process" method="post">
          <p><input type='text' name="title" placeholder="title"></p>
          <p>
            <textarea name="description" placeholder="description"></textarea>
          </p>
          <p>
            <input type="submit">
          </p>
          </form>
          `);
        response.writeHead(200);
        response.end(html);
      })
    }
    else if (pathname === '/create_process'){
      // create 로 컨텐츠 생성 후 제출 버튼을 눌렀을
      // POST 방식으로 전송된 데이터를 어떻게 extract(가져오는가)?
      var body = '';

      // request 안에 post 정보가 들어있다.
      request.on('data',function(data){// 웹 브라우저가 POST 방식으로 서버에 데이터를 전송할 때, 서버가
      // 콜백함수를 호출함.  그 데이터가 많은 경우를 대비.
        body = body + data;
      });

      // 더 이상 들어올 정보가 없으면(정보 수신이 끝났다고 판단.), 'end'다음의 톨백함수 호출.
      request.on('end', function(){

        // query string module의 parse 함수를 이용해 정보를 객체화 할 수 있음.
        var post = qs.parse(body);
        console.log(post);
    //  { title: 'MongoDB' , description: 'MongoDB is..' }

        var title = post.title;
        var description = post.description;
        fs.writeFile(`data/${title}`, description, 'utf8',
        function(err){ // 파일의 저장이 끝나면 실행되는 콜백함수. 여기서는 err처리는 안하는 걸로.

          // page redirection
          response.writeHead(302, {Location: `/?id=${title}`});
          response.end();
        })
      });
    }
    else if(pathname==='/update'){ // 업데이트 버튼
      fs.readdir('./data',function(error, filelist){
        var filteredId = path.parse(queryData.id).base;
        fs.readFile(`data/${filteredId}`,'utf8', function(err,description){
          var title = queryData.id;
          var list = template.list(filelist);
          var html = template.html(title, list,
            `
              <form action="/update_process" method="post">
                <input type="hidden" name="id" value="${title}">
                <p><input type='text' name="title" placeholder="title" value="${title}"></p>
                <p>
                  <textarea name="description" placeholder="description">${description}</textarea>
                </p>
                <p>
                  <input type="submit">
                </p>
              </form>
            `,
            `<a href="/create">create</a> <a href="/update?id=${title}">update</a>`
           );
          response.writeHead(200);
          response.end(html);
        });
      });
    }else if(pathname==='/update_process'){
      var body = '';
      request.on('data',function(data){
        body = body + data;
      });
      request.on('end', function(){
        var post = qs.parse(body);
        console.log(post);
        var id = post.id;
        var title = post.title;
        var description = post.description;
        fs.rename(`data/${id}`, `data/${title}`, function(error){ // 파일 수정이 끝난 다음에,
          fs.writeFile(`data/${title}`, description, 'utf8', function(err){
            response.writeHead(302, {Location: `/?id=${title}`});
            response.end();
          })
        });

      });
    }else if(pathname==='/delete_process'){
      var body = '';
      request.on('data',function(data){
        body = body + data;
      });
      request.on('end', function(){
        var post = qs.parse(body);
        var id = post.id;
        var filteredId = path.parse(id).base;
        fs.unlink(`data/${filteredId}`, function(error){
          response.writeHead(302, {Location: `/`});
          response.end();
        })
      });
    }
    else{
      response.writeHead(404);
      response.end('Not found');
    }
  });

app.listen(3000);
