var o = {
  a: 2,
  m: function(){
    return this.a+1;
  }
};

alert(o.m());