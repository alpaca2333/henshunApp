function createAjaxObj(){
    var req;
    if(window.XMLHttpRequest){
        req = new XMLHttpRequest();
    }else{
        req = new ActiveXObject("Msxml2.XMLHTTP");
    }
    return req;
}

function login(id, psw){
    var url = "admin?id="+id+"&psw="+psw;
    var req = createAjaxObj();
    req.open("get","chart",false);
    req.setRequestHeader("accept","application/json");
    req.onreadystatechange = function(){

        if(req.readyState==4 && req.status==200){
            // do nothing ;
        }else{
            //请求失败时显示网络故障；
            alert("网络连接错误 ！");
        }
    };
    req.send(null);

}