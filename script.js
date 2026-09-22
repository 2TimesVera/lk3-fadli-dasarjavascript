// soal 1
let umur=Number(prompt("Masukkan Umur Anda:"));
if (umur>=17) {
    alert("Sudah Cukup Umur");
}
else {
    alert("Belum Cukup Umur");
}

// soal 2
let input=0;
if (input >= 1) {
    console.log("Bilangan Positif");
}
else if (input < 0) {
    console.log("Bilangan Negatif");
}
else if (input == 0) {
    console.log("Bilangan Nol");
}

// soal 3
let angka1=80;
let angka2=90;
if (angka1>=angka2) {
    console.log("Nilai Terbesar Adalah: " + angka1);
} else {
    console.log("Nilai Terbesar Adalah: " + angka2);
}

// soal 4
let nilai=Number(prompt("Masukkan Nilai Anda: "));
if (nilai>=90) {
    console.log("A");
} else if (nilai>=80) {
    console.log("B");
} else if (nilai>=70) {
    console.log("C");
} else if (nilai>=60) {
    console.log("D");
} else {
    console.log("E");
}

// soal 5
let Data=Number(prompt("Pilihan:\n 1.Data Siswa \n 2.Data Guru \n 3. Data Kelas \n 4. Keluar"));
switch (Data) {
case 1 :
console.log("Data Siswa");
break;
case 2 :
console.log("Data Guru");
break;
case 3 :
console.log("Data Kelas");
case 4 :
console.log("Keluar");
break;
default:console.log("Data tidak ditemukan");
}

// Challenge

console.log("");

console.log("==============================");
console.log("       HASIL PENILAIAN");
console.log("==============================");

let NamaSiswa=prompt("Masukkan Nama Anda: ");
console.log("Nama: " + NamaSiswa);


let Kelas=prompt("Masukkan Kelas Anda:");
console.log("Kelas: " + Kelas);
console.log("");

let NilaiTugas=Number(prompt("Masukkan Nilai Tugas Anda: "));
console.log("Nilai Tugas: " + NilaiTugas);

let NilaiUTS=Number(prompt("Masukkan Nilai UTS Anda: "));
console.log("Nilai UTS: " + NilaiUTS);

let NilaiUAS=Number(prompt("Masukkan Nilai UAS Anda: "));
console.log("Nilai UAS: " + NilaiUAS);



let NilaiAkhir= (30/100) * NilaiTugas + (30/100) * NilaiUTS + (40/100) * NilaiUAS;
alert("Nilai Akhir: " + NilaiAkhir);

console.log("");
console.log("Nilai Akhir: " + NilaiAkhir);

if (NilaiAkhir >= 90) {
    console.log("Keterangan: Sangat Baik");
} else if (NilaiAkhir >= 80) {
    console.log("Keterangan: Baik");
} else if (NilaiAkhir >= 75) {
    console.log("Keterangan: Cukup");
} else console.log("Keterangan: Belum Lulus");

console.log("==============================");
