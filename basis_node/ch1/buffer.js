buf = new Buffer(256);
len = buf.write('Muahmmed Essa');
console.log('octet:' + len);

///////////////////////
buf = new Buffer(26);
for(var x=0; x<26;x++){
    buf[x]=x+100;
}
console.log(buf.toString('utf8',0,6));
console.log(buf.toString('ascil',0,6));
console.log(buf.toString('ascil'));