//MENGENAL CALLBACK, SETTIMEOUT DAN SETINTERVAL
// 1. callback

const biodata = (nama, umur, callback) =>{//membuat function dengan parameter nama, umur dan callback
    console.log(`ini nama : ${nama}`)// menampilkan value dari parameter nama
    console.log(`ini umur : ${umur}`)// menampilkan value dari parameter umur

    callback()//memanggil function callback
}

const cerita = () => {// membuat function cerita yang nanti akan dipanggil sebagai callback
    console.log('ini cerita saya blablabla')//menampilkan isi cerita
}

biodata('tries', 27, cerita)//memmanggil function biodata dengan memberikan nilai parameter nama, umur dan callback(merupakan function cerita)

/*
output yang akan tampil
ini nama : tries
ini umur : 27
ini cerita saya blablabla
*/

//---------------------------------------
// 2. setTimeout

let nama = 'tries' //membuat variabel nama
setTimeout(() => {//membuat function setTimeout 
    console.log(`nama saya : ${nama}`)//menampilkan isi variabel nama
}, 1000)//menentukan waktu kapan argumen akan ditampilkan (1000 = 1 detik)

/*
output akan menampilkan
nama saya : tries
(satu detik setelah kode dijalankan)
*/

//--------------------------------------
// 3. setInterval

let nama = 'tries' //membuat variabel nama
 setInterval(() => {//membuat function setInterval 
     console.log(`nama saya : ${nama}`)//menampilkan isi variabel nama
 }, 1000)//menentukan per berapa waktu kapan argumen akan ditampilkan (1000 = 1 detik)

/*
output akan menampilkan
nama saya : tries
(setiap satu detik setelah kode dijalankan dan akan terus berlangsung sampai kode diberhentikan)
*/

//--------------------------------------
// 4. menggabungkan callback dan setTimeout

const arr = [2, 3, 4, 7, 8] // membuat array dengan nama arr
const hapusArr = (callback) => {// membuat function hapus isi arr dengan parameter callback
    setTimeout(() => {//membuat function setTimeout
        arr.pop()//menghapus index terakhir dari arr

        callback()//memanggil function callback
    },2000)//menentukan waktu kapan code akan dijalankan
}
const tampil = (() => {//membuat function untuk menampilkan data
    setTimeout(() => {//membuat function tampil
        arr.forEach(item => {//membuat function untuk menampilkan nilai arr dengan bantuan forEach(looping untuk array)
            console.log(item)//menampilkan nilai dari arr
        })
    }, 1000)//menentukan waktu kapan akan code akan dijalankan
})
hapusArr(tampil)//memanggil function hapusArr dengan tampil sebagai parameternya(untuk callback)

/*
output
2
3
4
7
*/