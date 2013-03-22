
self.onmessage = function(event) {
	//self.postMessage('Hi '+event.data);
	var result = parseInt(event.data) || 0;
	for (var i = 0; i < 200; i++) {
		result += Math.sqrt(i);
	}
	self.postMessage(result);
};