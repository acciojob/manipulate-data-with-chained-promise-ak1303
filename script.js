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
	setTimeout(()=>resolve(arr),1000);
})
promise.then((data)=>{
	let nums = data.filter(num=>even(num));
	let text=nums.join(", ");
	output.innerHTML = text;
	return new Promise((res,rej)=>{
		setTimeout(()=>res(nums),2000);
	})
}).then((data)=>{
		let nums = data.map(num=>multiplyBy2(num));
		let text = nums.join(", ");
		output.innerHTML = text;
})