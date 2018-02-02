

let init = function(){

    // Welcome message
    console.log('%c \t\t%c  WebGL Testing  %c\t\t', 'background: #AA0000; color: black;'
                ,'background: #00AA00; color: black;', 'background: #AA0000; color: black;');

    let canvas = document.getElementById('canvas');
    
    if(!(innerHeight(canvas) && initShaders() && initBuffers()))
        printd('[Init - Initialation failed', 'major');
}

function printd(text, type) {


    let msg = `'%c \t\t%c  ` + text + `  %c\t\t',`;
    
    // Format message by type
    switch (type) {
        case 'info':
            msg +=  `'background: #AA0000; color: black;','background: #00AA00; color: black;', 'background: #AA0000; color: black;'`;
            break;
        case 'warning':
            msg +=  `'background: #AA0000; color: black;','background: #00AA00; color: black;', 'background: #AA0000; color: black;'`;
            break;
        case 'major':
            msg +=  `'background: #AA0000; color: black;','background: #00AA00; color: black;', 'background: #AA0000; color: black;'`;
            break;
        default:
            msg +=  `'background: #AA0000; color: black;','background: #00AA00; color: black;', 'background: #AA0000; color: black;'`;
            break;
    }

    // Print debug message
    console.log(msg);
}