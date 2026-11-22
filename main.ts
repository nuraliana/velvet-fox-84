import{readFileSync,readdirSync,mkdirSync,writeFileSync}from'node:fs';
import{join}from'node:path';
const I=process.env.MAKEFUN_INPUT_DIR||'/input',O=process.env.MAKEFUN_OUTPUT_DIR||'/output';
function run(p,q){
 const n=p.length,s=[],c=[],m=new Int32Array(256),o=[];
 const T=e=>[Buffer.from(o),e];
 let pc=0,st=0,ip=0;
 for(;;){
  if(st>=1000000)return T(10);
  if(pc<0||pc>=n)return T(9);
  const op=p[pc];
  if(!(op<=7||(op>=16&&op<=30)||(op>=32&&op<=34)||(op>=48&&op<=52)||op===64||op===65||(op>=80&&op<=83)))return T(5);
  const L=op===1?1:op===2?4:(op>=48&&op<=51)?2:0;
  if(pc+1+L>n)return T(9);
  const nx=pc+1+L;pc=nx;st++;
  switch(op){
   case 0:return T(0);
   case 1:if(s.length>=256)return T(3);s.push((p[nx-1]<<24)>>24);break;
   case 2:if(s.length>=256)return T(3);s.push(p[nx-4]|(p[nx-3]<<8)|(p[nx-2]<<16)|(p[nx-1]<<24));break;
   case 3:if(s.length<1)return T(2);s.pop();break;
   case 4:if(s.length<1)return T(2);if(s.length>=256)return T(3);s.push(s[s.length-1]);break;
   case 5:{if(s.length<2)return T(2);const t=s[s.length-1];s[s.length-1]=s[s.length-2];s[s.length-2]=t;break;}
   case 6:if(s.length<2)return T(2);if(s.length>=256)return T(3);s.push(s[s.length-2]);break;
   case 7:{if(s.length<3)return T(2);const a=s[s.length-3],b=s[s.length-2],d=s[s.length-1];s[s.length-3]=b;s[s.length-2]=d;s[s.length-1]=a;break;}
   case 16:{if(s.length<2)return T(2);const b=s.pop(),a=s.pop();s.push((a+b)|0);break;}
   case 17:{if(s.length<2)return T(2);const b=s.pop(),a=s.pop();s.push((a-b)|0);break;}
   case 18:{if(s.length<2)return T(2);const b=s.pop(),a=s.pop();s.push(Math.imul(a,b));break;}
   case 19:{if(s.length<2)return T(2);const b=s.pop(),a=s.pop();if(b===0)return T(4);s.push((a/b)|0);break;}
   case 20:{if(s.length<2)return T(2);const b=s.pop(),a=s.pop();if(b===0)return T(4);s.push((a%b)|0);break;}
   case 21:{if(s.length<2)return T(2);const b=s.pop(),a=s.pop();if(b===0)return T(4);s.push(((a>>>0)/(b>>>0))|0);break;}
   case 22:{if(s.length<2)return T(2);const b=s.pop(),a=s.pop();if(b===0)return T(4);s.push(((a>>>0)%(b>>>0))|0);break;}
   case 23:if(s.length<1)return T(2);s.push((-s.pop())|0);break;
   case 24:{if(s.length<2)return T(2);const b=s.pop(),a=s.pop();s.push(a&b);break;}
   case 25:{if(s.length<2)return T(2);const b=s.pop(),a=s.pop();s.push(a|b);break;}
   case 26:{if(s.length<2)return T(2);const b=s.pop(),a=s.pop();s.push(a^b);break;}
   case 27:if(s.length<1)return T(2);s.push(~s.pop());break;
   case 28:{if(s.length<2)return T(2);const b=s.pop(),a=s.pop();s.push(a<<(b&31));break;}
   case 29:{if(s.length<2)return T(2);const b=s.pop(),a=s.pop();s.push(a>>(b&31));break;}
   case 30:{if(s.length<2)return T(2);const b=s.pop(),a=s.pop();s.push((a>>>(b&31))|0);break;}
   case 32:{if(s.length<2)return T(2);const b=s.pop(),a=s.pop();s.push(a===b?1:0);break;}
   case 33:{if(s.length<2)return T(2);const b=s.pop(),a=s.pop();s.push(a<b?1:0);break;}
   case 34:{if(s.length<2)return T(2);const b=s.pop(),a=s.pop();s.push((a>>>0)<(b>>>0)?1:0);break;}
   case 48:{const f=((p[nx-2]|(p[nx-1]<<8))<<16)>>16;pc=nx+f;break;}
   case 49:{if(s.length<1)return T(2);const v=s.pop(),f=((p[nx-2]|(p[nx-1]<<8))<<16)>>16;if(v===0)pc=nx+f;break;}
   case 50:{if(s.length<1)return T(2);const v=s.pop(),f=((p[nx-2]|(p[nx-1]<<8))<<16)>>16;if(v!==0)pc=nx+f;break;}
   case 51:{if(c.length>=64)return T(7);const t=p[nx-2]|(p[nx-1]<<8);c.push(nx);pc=t;break;}
   case 52:if(c.length===0)return T(8);pc=c.pop();break;
   case 64:{if(s.length<1)return T(2);const a=s.pop();if(a<0||a>255)return T(6);s.push(m[a]);break;}
   case 65:{if(s.length<2)return T(2);const a=s.pop(),v=s.pop();if(a<0||a>255)return T(6);m[a]=v;break;}
   case 80:{if(s.length<1)return T(2);const v=s.pop(),t=String(v);if(o.length+t.length>65536)return T(11);for(let i=0;i<t.length;i++)o.push(t.charCodeAt(i));break;}
   case 81:{if(s.length<1)return T(2);const v=s.pop();if(o.length+1>65536)return T(11);o.push(v&255);break;}
   case 82:if(s.length>=256)return T(3);s.push(ip<q.length?q[ip++]:-1);break;
   case 83:if(s.length<1)return T(2);return T(s.pop()&255);
  }
 }
}
for(const e of readdirSync(I,{withFileTypes:true})){
 if(!e.isDirectory())continue;
 const id=e.name,d=join(I,id);
 let prog,inp;
 try{prog=readFileSync(join(d,'program.bin'))}catch{continue}
 try{inp=readFileSync(join(d,'input.bin'))}catch{inp=Buffer.alloc(0)}
 const[out,exit]=run(prog,inp);
 mkdirSync(join(O,id),{recursive:true});
 writeFileSync(join(O,id,'stdout.bin'),out);
 writeFileSync(join(O,id,'exit.txt'),String(exit)+'\n');
}
