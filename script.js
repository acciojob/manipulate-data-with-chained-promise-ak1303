//your JS code here. If required.
let output = document.getElementById('output');
let arr = [1,2,3,4];
function even(num){ 
	return num%2==0;
}
function multiplyBy2(num){
	return num*2;
}
let promise = new Promise((resolve,reject)=>{
	setTimeout(()=>resolve(arr),3000);
})
promise.then((data)=>{
	let nums = data.filter(num=>even(num));  
	return new Promise((res,rej)=>{
		setTimeout(()=>res(nums),1000); 
	})
}).then((nums)=>{
		let text=nums.join(","); 
		output.innerHTML = text;
		nums = nums.map(num=>multiplyBy2(num));
		return new Promise((res,rej)=>{
			setTimeout(()=>res(nums),1000);
			})
}).then((nums)=>{
	let text = nums.join(",");
	output.innerHTML = text;
})