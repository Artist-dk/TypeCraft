let text = document.getElementById('text01');
let highlighter = document.getElementById('highlighter01');
let source = document.getElementById('ref101');
let display = document.getElementById('display01');
let caret01 = document.getElementById('caret01');
let txt='';
let initialtxt;
let count = -1;
let textFromTA = '';
let caretInterval01;
let keyacolor01 = 'rgb(255, 153, 153)';
let keybcolor01 = 'rgb(134, 211, 255)';
let keyccolor01 = 'rgb(68, 255, 78)';
let keydcolor01 = 'rgb(255, 212, 70)';
let keyecolor01 = 'rgb(255, 255, 255)';
const bgcolor = 'rgb(255,50,50)';
window.onkeydown = (event)=>{
    // ref1.value = charFromText;
    // console.log(event.charCode);
    // if(event.charCode != 8 && event.charCode != )
    count++;
}
window.onkeyup= (event)=>{
    clearInterval(caretInterval01);
    animateCaret01();
    textFromTA+=text.value;
    ref1=textFromTA;
    text.value = '';
    // console.log(textFromTA+'\ncount: '+count);
    designKeyBoard();
    highlight();
    document.getElementById('caret01').style.visibility = 'visible';
}
window.onload = ()=>{
    highlighter.style.height = getComputedStyle(display).height;
    highlighter.style.width = getComputedStyle(display).width;
    text.style.height = parseInt(getComputedStyle(display).height) + 'px';
    text.style.width = parseInt(getComputedStyle(display).width)+'px';
    designKeyBoard();
    drawCanvas01();
    highlight();
}
text.addEventListener('focus', ()=>{
    animateCaret01();
});
text.addEventListener('focusout',()=>{
    clearInterval(caretInterval01);
    document.getElementById('caret01').style.visibility = 'visible';
});

// function resizeEditor() {
//     src.style.height = getComputedStyle(editor).height;
//     src.style.width = getComputedStyle(editor).width;
//     page.style.height = getComputedStyle(editor).height;
//     page.style.width = getComputedStyle(editor).width;
//     page.scrollTo(src.scrollLeft, src.scrollTop);
//     src.style.transform = 'translate(0,' + -parseInt(getComputedStyle(page).height) + 'px)';
// }
function highlight() {
    txt='';
    var i;
    for(i = 0; i<textFromTA.length;i++) {
        if(textFromTA[i]==source.textContent[i]) {
            txt+='<span class="correcttxt01">'+source.textContent[i]+'</span>';
        }else{
            txt+='<span class="wrongtxt01">'+source.textContent[i]+'</span>';
        }
    }
    if(i<source.textContent.length) {
        txt+='<span id="caret01"></span>';
        txt+=source.textContent.slice(i,source.textContent.length);
    }
    // if(i<source.textContent.length) {
    //     txt+=source.value.slice(i, source.value.length);
    // }
    // console.log(source.textContent);
    // console.log(text.selectionStart);
    var ch = source.textContent[i];
    // console.log(ch);
    // console.log(ch);
    switch(ch) {
        case 'a':
            document.getElementById('charCode65').style.backgroundColor = bgcolor;
            ch = 'l1';
            break;
        case 'b':
            document.getElementById('charCode66').style.backgroundColor = bgcolor;
            ch = 'l4';
            break;
        case 'c':
            document.getElementById('charCode67').style.backgroundColor = bgcolor;
            ch = 'l3';
            break;
        case 'd':
            document.getElementById('charCode68').style.backgroundColor = bgcolor;
            ch = 'l3';
            break;
        case 'e':
            document.getElementById('charCode69').style.backgroundColor = bgcolor;
            ch = 'l3';
            break;
        case 'f':
            document.getElementById('charCode70').style.backgroundColor = bgcolor;
            ch = 'l4';
            break;
        case 'g':
            document.getElementById('charCode71').style.backgroundColor = bgcolor;
            ch='l4';
            break;
        case 'h':
            document.getElementById('charCode72').style.backgroundColor = bgcolor;
            ch='r2';
            break;
        case 'i':
            document.getElementById('charCode73').style.backgroundColor = bgcolor;
            ch='r3';
            break;
        case 'j':
            document.getElementById('charCode74').style.backgroundColor = bgcolor;
            ch='r2';
            break;
        case 'k':
            document.getElementById('charCode75').style.backgroundColor = bgcolor;
            ch='r3';
            break;
        case 'l':
            document.getElementById('charCode76').style.backgroundColor = bgcolor;
            ch='r4';
            break;
        case 'm':
            document.getElementById('charCode77').style.backgroundColor = bgcolor;
            ch='r2'
            break;
        case 'n':
            document.getElementById('charCode78').style.backgroundColor = bgcolor;
            ch='r2';
            break;
        case 'o':
            document.getElementById('charCode79').style.backgroundColor = bgcolor;
            ch='r4';
            break;
        case 'p':
            document.getElementById('charCode80').style.backgroundColor = bgcolor;
            ch='r5';
            break;
        case 'q':
            document.getElementById('charCode81').style.backgroundColor = bgcolor;
            ch='l1';
            break;
        case 'r':
            document.getElementById('charCode82').style.backgroundColor = bgcolor;
            ch='l4';
            break;
        case 's':
            document.getElementById('charCode83').style.backgroundColor = bgcolor;
            ch='l2';
            break;
        case 't':
            document.getElementById('charCode84').style.backgroundColor = bgcolor;
            ch='l4';
            break;
        case 'u':
            document.getElementById('charCode85').style.backgroundColor = bgcolor;
            ch='r2';
            break;
        case 'v':
            document.getElementById('charCode86').style.backgroundColor = bgcolor;
            ch='l4';
            break;
        case 'w':
            document.getElementById('charCode87').style.backgroundColor = bgcolor;
            ch='l2';
            break;
        case 'x':
            document.getElementById('charCode88').style.backgroundColor = bgcolor;
            ch='l2';
            break;
        case 'y':
            document.getElementById('charCode89').style.backgroundColor = bgcolor;
            ch='r2';
            break;
        case 'z':
            document.getElementById('charCode90').style.backgroundColor = bgcolor;
            ch='l1';
            break;
        case 'A':
            document.getElementById('charCode65').style.backgroundColor = bgcolor;
            document.getElementById('rshift').style.backgroundColor = bgcolor;
            ch='rsl1'
            break;
        case 'B':
            document.getElementById('charCode66').style.backgroundColor = bgcolor;
            document.getElementById('rshift').style.backgroundColor = bgcolor;
            ch='rsl4';
            break;
        case 'C':
            document.getElementById('charCode67').style.backgroundColor = bgcolor;
            document.getElementById('rshift').style.backgroundColor = bgcolor;
            ch='rsl3';
            break;
        case 'D':
            document.getElementById('charCode68').style.backgroundColor = bgcolor;
            document.getElementById('rshift').style.backgroundColor = bgcolor;
            ch='rsl3';
            break;
        case 'E':
            document.getElementById('charCode69').style.backgroundColor = bgcolor;
            document.getElementById('rshift').style.backgroundColor = bgcolor;
            ch='rsl3';
            break;
        case 'F':
            document.getElementById('charCode70').style.backgroundColor = bgcolor;
            document.getElementById('rshift').style.backgroundColor = bgcolor;
            ch='rsl4';
            break;
        case 'G':
            document.getElementById('charCode71').style.backgroundColor = bgcolor;
            document.getElementById('rshift').style.backgroundColor = bgcolor;
            ch='rsl4';
            break;
        case 'H':
            document.getElementById('charCode72').style.backgroundColor = bgcolor;
            document.getElementById('lshift').style.backgroundColor = bgcolor;
            ch='lsr2';
            break;
        case 'I':
            document.getElementById('charCode73').style.backgroundColor = bgcolor;
            document.getElementById('lshift').style.backgroundColor = bgcolor;
            ch='lsr3';
            break;
        case 'J':
            document.getElementById('charCode74').style.backgroundColor = bgcolor;
            document.getElementById('lshift').style.backgroundColor = bgcolor;
            ch='lsr2';
            break;
        case 'K':
            document.getElementById('charCode75').style.backgroundColor = bgcolor;
            document.getElementById('lshift').style.backgroundColor = bgcolor;
            ch='lsr3';
            break;
        case 'L':
            document.getElementById('charCode76').style.backgroundColor = bgcolor;
            document.getElementById('lshift').style.backgroundColor = bgcolor;
            ch='lsr4';
            break;
        case 'M':
            document.getElementById('charCode77').style.backgroundColor = bgcolor;
            document.getElementById('lshift').style.backgroundColor = bgcolor;
            ch='lsr2';
            break;
        case 'N':
            document.getElementById('charCode78').style.backgroundColor = bgcolor;
            document.getElementById('lshift').style.backgroundColor = bgcolor;
            ch='lsr2';
            break;
        case 'O':
            document.getElementById('charCode79').style.backgroundColor = bgcolor;
            document.getElementById('lshift').style.backgroundColor = bgcolor;
            ch='lsr4';
            break;
        case 'P':
            document.getElementById('charCode80').style.backgroundColor = bgcolor;
            document.getElementById('lshift').style.backgroundColor = bgcolor;
            ch='lsr5';
            break;
        case 'Q':
            document.getElementById('charCode81').style.backgroundColor = bgcolor;
            document.getElementById('rshift').style.backgroundColor = bgcolor;
            ch='rsl1';
            break;
        case 'R':
            document.getElementById('charCode82').style.backgroundColor = bgcolor;
            document.getElementById('rshift').style.backgroundColor = bgcolor;
            ch='rsl4';
            break;
        case 'S':
            document.getElementById('charCode83').style.backgroundColor = bgcolor;
            document.getElementById('rshift').style.backgroundColor = bgcolor;
            ch='rsl2';
            break;
        case 'T':
            document.getElementById('charCode84').style.backgroundColor = bgcolor;
            document.getElementById('rshift').style.backgroundColor = bgcolor;
            ch='rsl4';
            break;
        case 'U':
            document.getElementById('charCode85').style.backgroundColor = bgcolor;
            document.getElementById('lshift').style.backgroundColor = bgcolor;
            ch='lsr2';
            break;
        case 'V':
            document.getElementById('charCode86').style.backgroundColor = bgcolor;
            document.getElementById('rshift').style.backgroundColor = bgcolor;
            ch='rsl4';
            break;
        case 'W':
            document.getElementById('charCode87').style.backgroundColor = bgcolor;
            document.getElementById('rshift').style.backgroundColor = bgcolor;
            ch='rsl2';
            break;
        case 'X':
            document.getElementById('charCode88').style.backgroundColor = bgcolor;
            document.getElementById('rshift').style.backgroundColor = bgcolor;
            ch='rsl2';
            break;
        case 'Y':
            document.getElementById('charCode89').style.backgroundColor = bgcolor;
            document.getElementById('rshift').style.backgroundColor = bgcolor;
            ch='lsr2';
            break;
        case 'Z':
            document.getElementById('charCode90').style.backgroundColor = bgcolor;
            document.getElementById('rshift').style.backgroundColor = bgcolor;
            ch='rsl1';
            break;
        case ' ':
            var btn = document.getElementById('spacekey');
            btn.style.backgroundColor = 'red';
            ch='r1';
            break;
        case '`':
            document.getElementById('charCode96').style.backgroundColor = bgcolor;
            ch='l1';
            break;
        case '1':
            document.getElementById('charCode49').style.backgroundColor = bgcolor;
            ch='l1';
            break;
        case '2':
            document.getElementById('charCode50').style.backgroundColor = bgcolor;
            ch='l2';
            break;
        case '3':
            document.getElementById('charCode51').style.backgroundColor = bgcolor;
            ch='l3';
            break;
        case '4':
            document.getElementById('charCode52').style.backgroundColor = bgcolor;
            ch='l4';
            break;
        case '5':
            document.getElementById('charCode53').style.backgroundColor = bgcolor;
            ch='l4';
            break;
        case '6':
            document.getElementById('charCode54').style.backgroundColor = bgcolor;
            ch='r2';
            break;
        case '7':
            document.getElementById('charCode55').style.backgroundColor = bgcolor;
            ch='r2';
            break;
        case '8':
            document.getElementById('charCode56').style.backgroundColor = bgcolor;
            ch='r3';
            break;
        case '9':
            document.getElementById('charCode57').style.backgroundColor = bgcolor;
            ch='r4';
            break;
        case '0':
            document.getElementById('charCode48').style.backgroundColor = bgcolor;
            ch='r5';
            break;
        case '-':
            document.getElementById('charCode45').style.backgroundColor = bgcolor;
            ch='r5';
            break;
        case '=':
            document.getElementById('charCode61').style.backgroundColor = bgcolor;
            ch='r5';
            break;
        case '~':
            document.getElementById('charCode96').style.backgroundColor = bgcolor;
            document.getElementById('rshift').style.backgroundColor = bgcolor;
            ch='rsl1';
            break;
        case '!':
            document.getElementById('charCode49').style.backgroundColor = bgcolor;
            document.getElementById('rshift').style.backgroundColor = bgcolor;3
            ch='rsl1';
            break;
        case '@':
            document.getElementById('charCode50').style.backgroundColor = bgcolor;
            documentgetElementById('rshift').style.backgroundColor = bgcolor;
            ch='rsl2';
            break;
        case '#':
            document.getElementById('charCode51').style.backgroundColor = bgcolor;
            document.getElementById('rshift').style.backgroundColor = bgcolor;
            ch='rsl3';
            break;
        case '$':
            document.getElementById('charCode52').style.backgroundColor = bgcolor;
            document.getElementById('rshift').style.backgroundColor = bgcolor;
            ch='rsl4';
            break;
        case '%':
            document.getElementById('charCode53').style.backgroundColor = bgcolor;
            document.getElementById('rshift').style.backgroundColor = bgcolor;
            ch='rsl4';
            break;
        case '^':
            document.getElementById('charCode54').style.backgroundColor = bgcolor;
            document.getElementById('lshift').style.backgroundColor = bgcolor;
            ch='lsr2';
            break;
        case '&':
            document.getElementById('charCode55').style.backgroundColor = bgcolor;
            document.getElementById('lshift').style.backgroundColor = bgcolor;
            ch='lsr2';
            break;
        case '*':
            document.getElementById('charCode56').style.backgroundColor = bgcolor;
            document.getElementById('lshift').style.backgroundColor = bgcolor;
            ch='lsr3';
            break;
        case '(':
            document.getElementById('charCode57').style.backgroundColor = bgcolor;
            document.getElementById('lshift').style.backgroundColor = bgcolor;
            ch='lsr4';
            break;
        case ')':
            document.getElementById('charCode48').style.backgroundColor = bgcolor;
            document.getElementById('lshift').style.backgroundColor = bgcolor;
            ch='lsr5';
            break;
        case '_':
            document.getElementById('charCode45').style.backgroundColor = bgcolor;
            document.getElementById('lshift').style.backgroundColor = bgcolor;
            ch='lsr5';
            break;
        case '+':
            document.getElementById('charCode61').style.backgroundColor = bgcolor;
            document.getElementById('lshift').style.backgroundColor = bgcolor;
            ch='lsr5';
            break;
        case '[':
            document.getElementById('charCode91').style.backgroundColor = bgcolor;
            ch='r5';
            break;
        case '{':
            document.getElementById('charCode91').style.backgroundColor = bgcolor;
            document.getElementById('lshift').style.backgroundColor = bgcolor;
            ch='lsr5';
            break;
        case ']':
            document.getElementById('charCode93').style.backgroundColor = bgcolor;
            ch='r5';
            break;
        case '}':
            document.getElementById('charCode93').style.backgroundColor = bgcolor;
            document.getElementById('lshift').style.backgroundColor = bgcolor;
            ch='lsr5';
            break;
        case "\\":
            document.getElementById('charCode92').style.backgroundColor = bgcolor;
            ch='r5';
            break;
        case ';':
            document.getElementById('charCode59').style.backgroundColor = bgcolor;
            ch='r5';
            break;
        case ':':
            document.getElementById('charCode59').style.backgroundColor = bgcolor;
            document.getElementById('lshift').style.backgroundColor = bgcolor;
            ch='lsr5';
            break;
        case '\'':
            document.getElementById('charCode39').style.backgroundColor = bgcolor;
            ch='r5';
            break;
        case '"':
            document.getElementById('charCode39').style.backgroundColor = bgcolor;
            document.getElementById('lshift').style.backgroundColor = bgcolor;
            ch='lsr5';
            break;
        case '/':
            document.getElementById('charCode47').style.backgroundColor = bgcolor;
            ch='r5';
            break;
        case '?':
            document.getElementById('charCode47').style.backgroundColor = bgcolor;
            document.getElementById('lshift').style.backgroundColor = bgcolor;
            ch='lsr5';
            break;
        case '.':
            document.getElementById('charCode46').style.backgroundColor = bgcolor;
            ch='r4';
            break;
        case '>':
            document.getElementById('charCode46').style.backgroundColor = bgcolor;
            document.getElementById('lshift').style.backgroundColor = bgcolor;
            ch='r4';
            break;
        case ',':
            document.getElementById('charCode44').style.backgroundColor = bgcolor;
            ch='r3';
            break;
        case '<':
            document.getElementById('charCode44').style.backgroundColor = bgcolor;
            document.getElementById('lshift').style.backgroundColor = bgcolor;
            ch='lsr3';
            break;
    }
    drawCanvas01(ch);
    highlighter.innerHTML=txt;
    // initialtxt = source.value;
}
function designKeyBoard() {
    var a = document.getElementsByClassName('keya01');
    var b = document.getElementsByClassName('keyb01');
    var c = document.getElementsByClassName('keyc01');
    var d = document.getElementsByClassName('keyd01');
    var e = document.getElementsByClassName('llkey01');

    // console.log(a.length);
    var f = a.length;
    for(var i =0;i<f;i++) {
        a[i].style.backgroundColor = keyacolor01;
    }
    var f = b.length;
    for(var i =0;i<f;i++) {
        b[i].style.backgroundColor = keybcolor01;
    }
    var f = c.length;
    for(var i =0;i<f;i++) {
        c[i].style.backgroundColor = keyccolor01;
    }
    var f = d.length;
    for(var i =0;i<f;i++) {
        d[i].style.backgroundColor = keydcolor01;
    }
    var f = e.length;
    for(var i =0;i<f;i++) {
        e[i].style.backgroundColor = keyecolor01;
    }
}
function animateCaret01() {
    caretInterval01 = setInterval(function(){
        if(getComputedStyle(document.getElementById('caret01')).visibility == 'hidden') {
            document.getElementById('caret01').style.visibility = 'visible';
        } else {
            document.getElementById('caret01').style.visibility = 'hidden';
        }
        // document.getElementById('caret01').style.display = 'hidden';
    },500);
}
function drawCanvas01(ch) {
    var x;
    var y;
    var color;
    
    var canvas = document.getElementById("handContainer01");
    var ctx = canvas.getContext("2d");
    var img = document.getElementById("handImg01");
    ctx.drawImage(img, 0, 0, 300,200);
    var lshft = function() {
        ctx.beginPath();
        ctx.fillStyle = keyacolor01;
        ctx.arc(5, 42, 5, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();
    }
    var rshft = function() {
        ctx.beginPath();
        ctx.fillStyle = keyacolor01;
        ctx.arc(295, 35, 5, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();
    }
    switch(ch) {
        case 'l1':
            x = 5;
            y = 42;
            color = keyacolor01;
            break;
        case 'rsl1':
            x = 5;
            y = 42;
            color = keyacolor01;
            rshft();
            break;
        case 'l2':
            x = 40;
            y = 18;
            color= keybcolor01;
            break;
        case 'rsl2':
            x=40;
            y=18;
            color=keybcolor01;
            rshft();
        case 'l3':
            x = 65;
            y = 8;
            color= keyccolor01;
            break;
        case 'rsl3':
            x=65;
            y=8;
            color=keyccolor01;
            rshft();
            break;
        case 'l4':
            x = 104;
            y = 21;
            color= keydcolor01;
            break;
        case 'rsl4':
            x=104;
            y=21;
            color=keydcolor01;
            rshft();
            break;
        case 'l5':
            x = 134;
            y = 93;
            color= keyecolor01;
            break;
        case 'r1':
            x = 165;
            y = 93;
            color= keyecolor01;
            break;
            
        case 'r2':
            x = 198;
            y = 22;
            color= keydcolor01;
            break;
        case 'lsr2':
            x=198;
            y=22;
            color=keydcolor01;
            lshft();
            break;
        case 'r3':
            x = 236;
            y = 8;
            color= keyccolor01;
            break;
        case 'lsr3':
            x=236;
            y=8;
            color=keyccolor01;
            lshft();
            break;
        case 'r4':
            x = 261;
            y = 20;
            color= keybcolor01;
            break;
        case 'lsr4':
            x = 261;
            y = 20;
            color=keybcolor01;
            lshft();
            break;
        case 'r5':
            x = 295;
            y = 45;
            color= keyacolor01;
            break;
        case 'lsr5':
            x = 295;
            y = 45;
            color = keyacolor01;
            lshft();
            break;
    }
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.arc(x, y, 6, 0, 2 * Math.PI);
    ctx.fill();
    ctx.lineWidth = 3;
    ctx.strokeStyle = 'red';
    ctx.stroke();
}