import fs from'node:fs';
const I=process.env.MAKEFUN_INPUT_DIR||'/input',O=process.env.MAKEFUN_OUTPUT_DIR||'/output';
function run(p,q){
 const n=p.length,s=[],c=[],m=new Int32Array(256),o=[];
 let pc=0,st=0,ip=0,a,b;
 const K=k=>{if(s.length<k)throw 2};
 const B=f=>{K(2);s.push(f(...s.splice(-2)))};
 const D=f=>B((a,b)=>{if(!b)throw 4;return f(a,b)});
 try{
  for(;;){
   if(st>999999)throw 10;
   if(pc>>>0>=n)throw 9;
   const op=p[pc],L=+'014'[op]||(op-48>>>0<4?2:0);
   if(pc+L>=n)throw 9;
   if([1,2,4,6,82].includes(op)&&s.length>255)throw 3;
   const nx=pc+=1+L;st++;
   const F=(p[nx-2]|p[nx-1]<<8)<<16>>16;
   switch(op){
    case 0:throw 0;
    case 1:s.push(p[nx-1]<<24>>24);break;
    case 2:s.push(p[nx-4]|p[nx-3]<<8|p[nx-2]<<16|p[nx-1]<<24);break;
    case 3:K(1);s.pop();break;
    case 4:K(1);s.push(s[s.length-1]);break;
    case 5:K(2);s.push(...s.splice(-2).reverse());break;
    case 6:K(2);s.push(s[s.length-2]);break;
    case 7:K(3);s.push(s.splice(-3,1)[0]);break;
    case 16:B((a,b)=>a+b|0);break;
    case 17:B((a,b)=>a-b|0);break;
    case 18:B(Math.imul);break;
    case 19:D((a,b)=>a/b|0);break;
    case 20:D((a,b)=>a%b|0);break;
    case 21:D((a,b)=>(a>>>0)/(b>>>0)|0);break;
    case 22:D((a,b)=>(a>>>0)%(b>>>0)|0);break;
    case 23:K(1);s.push(-s.pop()|0);break;
    case 24:B((a,b)=>a&b);break;
    case 25:B((a,b)=>a|b);break;
    case 26:B((a,b)=>a^b);break;
    case 27:K(1);s.push(~s.pop());break;
    case 28:B((a,b)=>a<<(b&31));break;
    case 29:B((a,b)=>a>>(b&31));break;
    case 30:B((a,b)=>a>>>(b&31)|0);break;
    case 32:B((a,b)=>a===b?1:0);break;
    case 33:B((a,b)=>a<b?1:0);break;
    case 34:B((a,b)=>a>>>0<b>>>0?1:0);break;
    case 48:pc=nx+F;break;
    case 49:K(1);if(!s.pop())pc=nx+F;break;
    case 50:K(1);if(s.pop())pc=nx+F;break;
    case 51:if(c.length>63)throw 7;c.push(nx);pc=p[nx-2]|p[nx-1]<<8;break;
    case 52:if(!c.length)throw 8;pc=c.pop();break;
    case 64:K(1);a=s.pop();if(a>>>0>255)throw 6;s.push(m[a]);break;
    case 65:K(2);a=s.pop();b=s.pop();if(a>>>0>255)throw 6;m[a]=b;break;
    case 80:K(1);a=''+s.pop();if(o.length+a.length>65536)throw 11;o.push(...Buffer.from(a));break;
    case 81:K(1);if(o.length>65535)throw 11;o.push(s.pop()&255);break;
    case 82:s.push(ip<q.length?q[ip++]:-1);break;
    case 83:K(1);throw s.pop()&255;
    default:throw 5;
   }
  }
 }catch(e){return[Buffer.from(o),e]}
}
fs.readdirSync(I).forEach(id=>{
 const e=O+'/'+id;
 let prog,inp;
 try{prog=fs.readFileSync(I+'/'+id+'/program.bin')}catch{return}
 try{inp=fs.readFileSync(I+'/'+id+'/input.bin')}catch{inp=[]}
 const[out,exit]=run(prog,inp);
 fs.mkdirSync(e,{recursive:true});
 fs.writeFileSync(e+'/stdout.bin',out);
 fs.writeFileSync(e+'/exit.txt',exit+'\n');
});
