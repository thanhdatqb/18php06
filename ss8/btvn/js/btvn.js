var fullName = "Truong Thanh Dat";
var firstName, secondName, lastName;
firstName = fullName.slice(0,6);
document.write(firstName);
document.write('<br>');
secondName = fullName.slice(7,11);
document.write(secondName);
document.write('<br>');
var count = fullName.length;
document.write(count); 
document.write('<br>');
lastName = fullName.slice(12,count);
document.write(lastName);
document.write('<br>');
document.write(fullName);
document.write('<br>');
//cau 1
document.write('cau1' + '<br>');
var pos = fullName.indexOf('n');
document.write(pos);
document.write('<br>');
//cau2
document.write('cau2' + '<br>');
var kytu = 'n';
var dem = 0;
for (var i = 0; i < fullName.length; i++) {
	if(fullName.charAt(i) == kytu){
		dem++;
	}
}
document.write("Trong ten cua ban co:" +dem , "chu n");
document.write('<br>');
// cau3
document.write('cau3' + '<br>');

document.write(fullName.replace(lastName,' 18PHP06'))
document.write('<br>');
//cau 4
document.write('cau4' + '<br>');

document.write("Trong ten cua ban co " +count , " ky tu");
document.write('<br>');
a = firstName.length;
b = secondName.length;
c = lastName.length;
var cau4b = a + b + c;
document.write("Trong ten cua ban co " +cau4b," ky tu khong tinh khoang trong");
document.write('<br>');
//cau 5
document.write('cau5' + '<br>');

document.write(firstName.toUpperCase());
document.write('<br>');
//cau6
document.write('cau6' + '<br>');

document.write(secondName.toLowerCase());
document.write('<br>');

var changecolor = fullName.replace('y',"<mark>y</mark>");
document.write(changecolor);