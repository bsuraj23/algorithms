(function(){try{return this===window;}catch(e){return false;}}()?window:global).stack=function(){function c(b){var a=Object.create({f:function(){this.next=void 0;}});a.f(b);return a;}return function(b){var a=Object.create({f:function(a){this.size=a;this.b=0;this.c=this.nextNode=this.a=void 0;},push:function(a){this.b+1>this.size||(this.c=this.a,this.a=c(a),this.a.next=this.c,this.nextNode=this.a.next,this.b++,this.g());},pop:function(){0<this.b&&(this.c=this.a,this.nextNode=this.a=this.a.next,this.b--,this.h());},j:function(){return 0===this.b;},i:function(){return this.b===this.size;},g:function(){this.i()&&(this.size*=2);},h:function(){this.b<=this.size/4&&(this.size/=4);}});a.f(b);return a;};}();