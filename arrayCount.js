function arrayCount(arr)
{
	if(arr == null || typeof arr != "object" || "indexOf" in arr == false)
	{
		return "invalid arguments"
	}	
	var count=0;
	for(var i=0;i<arr.length;i++)
	{
		if(typeof arr[i] == "number")
		{
			count+=arr[i];
		}	
	}
		return count;
}
module.exports = arrayCount;