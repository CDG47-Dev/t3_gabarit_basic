conte = document.getElementById('weather');
enlace = document.getElementById('spa_NjQ0NzJ8NXwyfDF8NXw4YTNjNWR8MXxGRkZGRkZ8Y3wx');
anchor = document.getElementById('a_NjQ0NzJ8NXwyfDF8NXw4YTNjNWR8MXxGRkZGRkZ8Y3wx');

var url = anchor.href;
var ua = navigator.userAgent.toLowerCase();

check = function (r) {
    return r.test(ua);
};
isWebKit = check(/webkit/);
isGecko = !isWebKit && check(/gecko/);

var text = '';
if (isGecko) {
    text = encodeURI(anchor.text);
} else {
    text = encodeURI(anchor.innerText);
}

var exp1 = new RegExp('http://www.meteocity.com');
var exp2 = new RegExp('M%C3%A9t%C3%A9o');
var exp3 = new RegExp('M%C3%83%C2%A9t%C3%83%C2%A9o');

if (conte) {
    elem = document.createElement('iframe');
    elem.id = 'NjQ0NzJ8NXwyfDF8NXw4YTNjNWR8MXxGRkZGRkZ8Y3wx';
    elem.src = 'http://widget.meteocity.com/NjQ0NzJ8NXwyfDF8NXw4YTNjNWR8MXxGRkZGRkZ8Y3wx/';
    elem.frameBorder = 0;
    elem.allowTransparency = true;
    elem.scrolling = 'no';
    elem.name = 'frame';
    elem.height = '250';
    elem.width = '100%';
    conte.insertBefore(elem, enlace);
}