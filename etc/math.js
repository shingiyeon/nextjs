const primeNumber = 8191;

function min(a, b) {
	return a < b ? a : b;
}

function max(a, b) {
	return a > b ? a : b;
}

function abs(a, b) {
    if(a - b < 0) return b - a;
    else return a - b;
}

function digit(a) {
	let num = 0;
	while(a) {
		a = Math.floor(a/10);
		num++;
	}
	if(num == 0) num = 1;
	return num;
}

function hexToRgbA(hex, opacity){
    var c;
    if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
        c= hex.substring(1).split('');
        if(c.length== 3){
            c= [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c= '0x'+c.join('');
        return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+`,${opacity})`;
    }
    throw new Error('Bad Hex');
}