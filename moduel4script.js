var names=new Array()
names[0]="john";
names[1]="ravi";
names[2]="mahi";
names[3]="leela";
names[4]="sundhar";
names[5]="vinay";
names[6]="meera";
names[7]="lall";
names[8]="Jenny";
names[9]="paru";
for(var i=0; i<names.length; i++){
    if(names[i].charAt(0)==="J" || names[i].charAt(0)==="j"){
        console.log("Goodbye "+names[i])
    }
    else{
        console.log("Hello "+ names[i])
    }
}
