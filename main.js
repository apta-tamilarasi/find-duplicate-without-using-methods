var arr=[1,1,2,2,3,3,4,5,6,7,7,8,8 ];
	document.write("Given array is "+"[1,1,2,2,3,3,4,5,6,7,7,8,8 ]"+"<br><br>");
	document.write("Delete dubilicate array"+"<br><br>");
	var b=[];
let temporary=false;
for(let i=0;i<arr.length;i++){
	if(b.length===0){
		console.log('hi');
		b.push(arr[i])
	}
	else{
		console.log(b.length)
		for(j=0;j<b.length;j++){
			console.log(b[j],arr[i]);
			if(b[j]!==arr[i]){
				temporary=true
			}
			else{
				temporary=false
				break
			}

		}
		if(temporary){
			b.push(arr[i])
			temporary=false
		}
	}
	// console.log(b)
}
document.write(b);
