2. Coba cek di browser dan amati apa yang terjadi?Jelaskan mengapa bisa seperti itu?
Jawaban:di dalam kode JavaScript biasa, path seperti itu tidak akan dikenali secara default, kecuali telah mengonfigurasi alias modul resolver yang sesuai.
Oleh karena itu, ketika menjalankan kode ini di browser, kan melihat kesalahan di konsol pengembangan seperti "Module not found" atau "Unexpected token".
3. Kemudian kita jalankan di browser, coba klik Tombol-1, dan amati apa yang terjadi...!!!
Jawaban:localhost:3000 says
        ini pesanku  (Praktikum 3 langkah 1)
4. Jalankan pada browser dan amati apa yang terjadi.
Jawaban: useState hook untuk membuat state index yang akan digunakan untuk menentukan artikel mana yang ditampilkan. Ketika tombol diklik, fungsi handleClick akan dipanggil untuk meningkatkan nilai index sehingga artikel selanjutnya dapat ditampilkan. (Praktikum 4 langkah 2)
5. Jalankan pada browser, amati dan laporkan apa yang terjadi..!!
Jawaban: mengharapkan tampilan yang menampilkan judul "Kuis Kota" di bagian atas, diikuti oleh tiga tombol, lalu sebuah div merah dengan dua tombol di dalamnya, kemudian galeri, dan akhirnya dua formulir. (praktikum 5 Langkah 1)
6. Jalankan pada browser dan amati...!!!
Jawaban: sebuah komponen React yang bertujuan untuk mengambil input nama depan dan nama belakang dari pengguna, dan menampilkan nama lengkap mereka. seperti ini:
Silahkan isi nama lengkap anda
Nama depan :
Prasasty Dara
Nama belakang :
DjawaDwipa Sutaji
Nama lengkap anda adalah : Prasasty Dara DjawaDwipa Sutaji (Praktikum 5 langkah 2)
7. Amati dan laporkan apa yang terjadi...!!!
Jawaban: menampilkan dua panel yang dapat diperluas dan disusutkan, tetapi kode tidak termasuk definisi dari komponen Panel. dengan mendefinisikan komponen Panel seperti di atas,dapat menggunakan Accordion seperti yang rencanakan. (Praktikum 6 langkah 1)

Coba jalankan kembali pada browser, amati dan laporkan perbedaannya
belum ketemu perbedaanya (praktikum 6 langkah 2)

Soal
Apa tujuan dari penulisan ini key={to.email} pada < Chat key={to.email} contact={to} / > ?
Jawaban:Tujuan dari penulisan key={to.email} pada <Chat key={to.email} contact={to} /> adalah untuk memberikan kunci unik kepada setiap elemen dalam daftar komponen. Properti key digunakan oleh React untuk mengidentifikasi setiap elemen secara unik saat merender daftar elemen yang dinamis.

Apa fungsi dari props key tersebut?
Jawaban:Properti key digunakan oleh React untuk membantu dalam proses reconciling (penyesuaian) saat merender daftar elemen yang dinamis, seperti daftar komponen atau iterasi dalam daftar.
- Dengan menggunakan kunci unik untuk setiap elemen dalam daftar, React dapat memperbarui elemen secara efisien ketika daftar berubah. 
- Properti key membantu meningkatkan performa aplikasi React dengan mengoptimalkan proses reconciling.
- Properti key membantu React memelihara state komponen yang dipertahankan, terutama dalam situasi di mana daftar elemen berubah, seperti saat elemen ditambahkan atau dihapus.
