/** https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Tutorial/Getting_started_with_WebGL **/

var gl; // Global var for GL context

let init = function(){

    // Welcome message
    printd('WebGL Testing');
    const canvas = document.getElementById('canvas');
    const gl = canvas.getContext('webgl');

	if(!gl){
		printd('[Init - Failed to init gl]', major);
		return;
	}

	// This is the clear color, will be set to black
    gl.clearColor(0, 0, 0, 1);
    gl.clear(gl.COLOR_BUFFER_BIT);
}
