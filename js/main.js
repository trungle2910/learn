var ket_qua = ""

function one() {
  ket_qua = ket_qua + "1"
  hienPhepTinh();
}

function two() {
  ket_qua += "2"
  hienPhepTinh();
}

function three() {
  ket_qua += "3"
  hienPhepTinh();
}

function four() {
  ket_qua += "4"
  hienPhepTinh();
}

function five() {
  ket_qua += "6"
  hienPhepTinh();
}

function six() {
  ket_qua += "6"
  hienPhepTinh();
}
function seven() {
  ket_qua += "7"
  hienPhepTinh();
}
function eight() {
  ket_qua += "8"
  hienPhepTinh();
}
function night() {
  ket_qua += "9"
  hienPhepTinh();
}
function zero() {
  ket_qua += "0"
  hienPhepTinh();
}
function sum() {
  ket_qua += "+"
  hienPhepTinh();
}
function minus() {
  ket_qua += "-"
  hienPhepTinh();
}
function miltip() {
  ket_qua += "*"
  hienPhepTinh();
}
function div() {
  ket_qua += "/"
  hienPhepTinh();
}

function equal() {
  var inputKetQua = document.getElementById("ket_qua");
  inputKetQua.value = eval(ket_qua);
  ket_qua = "";
}

function reset() {
  ket_qua = "";
  hienPhepTinh();
}

function hienPhepTinh() {
  var inputPhepTinh = document.getElementById("phep_tinh");
  inputPhepTinh.value = ket_qua;
}