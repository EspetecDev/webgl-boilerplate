
/*
    Debug printer with coloring by priority
*/
function printd(text, type) {


    let msg = '%c\t\t%c  ' + text + '  %c\t\t';
    let decoration = 'background: #fe6001;';
    let style;
    
    // Format message by type
    switch (type) {
        case 'info':
            style = 'background: #0000AA; color: black;';
            break;
        case 'warning':
            style = 'background: #f4f400; color: black;';
            break;
        case 'major':
            style = 'background: #AA0000; color: black;';
            break;
        default:
            style = 'background: #00AA00; color: black;';
            break;
    }

    // Print debug message
    console.log(msg, decoration, style, decoration);
}