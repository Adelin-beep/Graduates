//pseudocode
// STORE nama WITH ANY STRING
// STORE nilai WITH ANY NUMBER
// STORE absen WITH ANY NUMBER

// IF absen LESS THAN 5 AND nilai MORE THAN EQUAL 70
//   DISPLAY "nama" CONCAT WITH nama CONCAT WITH "Lulus"
// ELSE 
//   DISPLAY "nama" CONCAT WITH nama CONCAT WITH "Tidak lulus"
// END IF

// your code here
var nama = "Adelin "
var nilai = "89"
var absen  = "1"
var status;

if (absen < 5 && nilai >= 70) {
    status = nama + "lulus"
} else {
status = nama + "tidak lulus"
}

console.log(status)
