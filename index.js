//Ex 1.1
// var a = +prompt("Nhập số a: ");
// var b = +prompt("Nhập số b: ");
// if (a % b == 0) { console.log("Số a chia hết cho số b"); }
// else { console.log("Số a không chia hết cho số b"); };

//Ex 1.2
// var age = +prompt("Nhập tuổi: ")
// if (age >= 15) { console.log("Học sinh đủ điều kiện học lớp 10"); }
// else { console.log("Học sinh không đủ điều kiện học lớp 10"); };

//Ex 1.3
// var number = +prompt("Nhập số nguyên: ");
// if (number % 1 == 0) {
//     if (number > 0) { console.log("Số vừa nhập lớn hơn 0"); }
//     else if (number < 0) { console.log("Số vừa nhập nhỏ hơn 0"); }
//     else { console.log("Số vừa nhập bằng 0"); }

// }

// else (console.log("Số vừa nhập không phải số nguyên"));

//Ex 1.4
// var a = +prompt("Nhập số nguyên a: ");
// var b = +prompt("Nhập số nguyên b: ");
// var c = +prompt("Nhập số nguyên c: ");
// if (a % 1 == 0 && b % 1 == 0 && c % 1 == 0) {
//     if (a == Math.max(a, b, c)) { console.log("Số lớn nhất là số a"); }
//     else if (b == Math.max(a, b, c)) { console.log("Số lớn nhất là số b"); }
//     else { console.log("Số lớn nhất là số c"); }
// }
// else { console.log("Các số phải nhập phải là số nguyên"); };

//Ex 1.5
// let quiz = +prompt("Nhập điểm các bài kiểm tra");
// let midTerm = +prompt("Nhập điểm bài kiểm tra giữa kỳ");
// let final = +prompt("Nhập điểm bài kiểm tra cuối kỳ");
// let score = (quiz + midTerm * 2 + final * 3) / 6;
// if (quiz >= 0 && midTerm >= 0 && final >= 0 && quiz <= 10 && midTerm <= 10 && final <= 10) {
//     if (score < 5) { console.log("Học lực yếu"); }
//     else if (5 <= score && score < 6.5) { console.log("Học lực trung bình"); }
//     else if (6.5 <= score && score < 8) { console.log("Học lực khá"); }
//     else if (score >= 8 && score < 9) { console.log("Học lực giỏi"); }
//     else { console.log("Học lực xuất sắc"); }

// }
// else { console.log("Nhập điểm sai"); } 

//Ex 2.1
// var degC = +prompt("Nhập độ theo độ C");
// var degF = degC * 9 / 5 + 32;
// if (degC >= -273.15) { console.log("Nhiệt độ theo độ F là ", degF); }
// else { console.log("Độ C không thể thấp hơn độ 0 tuyệt đối"); };

//Ex 2.2
// var m = +prompt("Nhập m");
// var ft = m * 3.2808;
// if (m > 0) { console.log("Quy đổi ra feet là ", ft, " ft"); }
// else { console.log("m không được để âm"); };

//Ex 2.9
var a = +prompt("Nhập cạnh 1 ");
var b = +prompt("Nhập cạnh 2 ");
var c = +prompt("Nhập cạnh 3 ");
if (a > 0 && b > 0 && c > 0 && a + b > c && b + c > a && a + c > b) { console.log("Đủ điều kiện là 3 cạnh của tam giác"); }
else { console.log("Không đủ điều kiện là tam giác"); }
