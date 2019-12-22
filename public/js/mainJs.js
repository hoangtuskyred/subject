var btnAdd=document.getElementsByClassName("btnSubject");

for (var i = 0; i < btnAdd.length; i++) {

    btnAdd[i].onclick= function() {
        var d=document.getElementById('error');
        d.innerHTML="";
        var btnDele=document.getElementsByClassName("subjectTimes");
        console.log(btnDele[0].innerHTML);
        var time2=this.parentElement.parentElement;
        time2=time2.children[3].innerHTML;
        for (var i=0;i<btnDele.length;i++) {
            if(!check(btnDele[i].innerHTML, time2)){
                d.innerHTML="khong thanh cong";
                break;
            }
        }

    }
};
function check(time1,time2) {

    var hours = time1.split("h");
    hours[1]=hours[1].replace('-','');
    var x = time2.split("h");
    x[1]=x[1].replace('-','');

    if(Number(hours[0])<=Number(x[0])&&Number(x[0])<=Number(hours[1]))
        return  false;
    if(Number(hours[0])<=Number(x[1])&& Number(x[1])<=Number(hours[1]))
        return  false;
    if(Number(x[0])<=Number(hours[0]) && Number(x[1])>=Number(hours[1]))
        return  false;

    return true;
}
