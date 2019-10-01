var o = {
  a:2,
  m:function(){
    return this.a +1;
  }
};
 var p=Object.create(o);
p.a=4;
alert(p.m());