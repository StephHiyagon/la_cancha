window.addEventListener('load',function(){
  var body=document.getElementsByTagName('body')[0];
  var divf=document.createElement('div');
  divf.setAttribute('id','fcancha');
  var divd=document.createElement('div');
  divd.setAttribute('id','dcancha');
  for(var i=1;i<3;i++){
    var divA=document.createElement('div');
    divA.setAttribute('id','area'+i);
    divA.setAttribute('class','areas');
    var divP=document.createElement('div');
    divP.setAttribute('id','pelota'+i);
    divP.setAttribute('class','pelotas');

    divA.appendChild(divP);
    divd.appendChild(divA);
  }
  var divC=document.createElement('div');
  divC.setAttribute('id','centro');
  var pelotaC=document.createElement('div');
  pelotaC.setAttribute('class','pelotas');
  pelotaC.setAttribute('id','pelota3');
  divC.appendChild(pelotaC);
  divd.appendChild(divC);
  divf.appendChild(divd);
  body.appendChild(divf);
})
