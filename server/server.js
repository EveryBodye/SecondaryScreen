let ws = require("nodejs-websocket");
let os = require("os");


let server = ws.createServer(function (conn) {
    conn.on('text', function (str) {
    })

    
    // ÿ������뷢��һ��ϵͳ��Ϣ   ��������
    setInterval(()=>{
        conn.sendText(JSON.stringify(os),()=>{
            console.log("the os data send is success!");
        })
    },2000);
 
    conn.on("close", function (code, reason) {
        console.log("�ر�����");
    })
    conn.on("error", function (code, reason) {
        console.log("�쳣�ر�");
    });
}).listen(8082);
console.log("websocket connected")



var fs = require('fs'); // ����fsģ��
 
// д���ļ����ݣ�����ļ������ڻᴴ��һ���ļ���
// ������׷�Ӳ��� { 'flag': 'a' }
fs.writeFile('./os.txt', JSON.stringify(os), { 'flag': 'a' }, function(err) {
    if (err) {
        throw err;
    }
 
    console.log('Hello.');
 
});