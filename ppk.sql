-- phpMyAdmin SQL Dump
-- version 4.8.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 13 Des 2018 pada 06.11
-- Versi server: 10.1.34-MariaDB
-- Versi PHP: 7.2.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ppk`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `kategori`
--

CREATE TABLE `kategori` (
  `nama` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(100) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `laporan`
--

CREATE TABLE `laporan` (
  `id` int(11) NOT NULL,
  `judul` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `kategori` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `tanggal` date NOT NULL,
  `jam` time NOT NULL,
  `keterangan` longtext COLLATE utf8_unicode_ci NOT NULL,
  `lampiran` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `nama_author` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `nohp_author` varchar(15) COLLATE utf8_unicode_ci NOT NULL,
  `confirm` tinyint(1) NOT NULL,
  `token` varchar(32) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data untuk tabel `laporan`
--

INSERT INTO `laporan` (`id`, `judul`, `kategori`, `tanggal`, `jam`, `keterangan`, `lampiran`, `nama_author`, `nohp_author`, `confirm`, `token`) VALUES
(51, 'hjkbjkhb', 'kriminal', '2018-11-10', '14:11:28', 'jnhkjn', '1544425888DhzNavqUYAYCCwO.jpg', 'kjhjk', '564654', 0, ''),
(52, 'hujikhbjkb', 'kriminal', '2018-11-10', '14:13:16', 'lkjljn', '1544425996DhzNavqUYAYCCwO.jpg', 'jhi', '44546', 0, ''),
(53, 'Cithol pedo', 'kriminal', '2018-11-11', '12:00:36', 'kjbkjkbjb', '1544504436DhzNavqUYAYCCwO.jpg', 'iqbal', '9879879879', 0, ''),
(54, 'iqbal pedofil', 'kriminal', '2018-11-11', '12:11:27', 'jbjh ojnjk nkjnkjn jknkjnkj nkjn jknjk nnoihoug uyf jnkjb iihoi', '15445050874df50466c1fc4b5e488861ba2adc18e9ef9bec098e58e76f9aa280af7f092edf.jpg', 'fadel', '089879867', 0, ''),
(55, 'iqbal pedofil2', 'kriminal', '2018-11-11', '12:13:01', 'jbjh ojnjk nkjnkjn jknkjnkj nkjn jknjk nnoihoug uyf jnkjb iihoi', '15445051814df50466c1fc4b5e488861ba2adc18e9ef9bec098e58e76f9aa280af7f092edf.jpg', 'fadel', '089879867', 0, ''),
(56, 'Fadel pedo', 'bencana alam', '2018-11-11', '12:13:57', 'popoj oiiuh oiiuoihlkm jhkjbjkhb', '15445052374df50466c1fc4b5e488861ba2adc18e9ef9bec098e58e76f9aa280af7f092edf.jpg', 'iqbal', '0878787', 0, ''),
(57, 'feri njajal', 'bencana alam', '2018-11-11', '12:16:25', 'knkjabdjbjkabl kjjjhhj', '1544505385DhzNavqUYAYCCwO.jpg', 'feri', '998899', 0, ''),
(58, 'bangsattttt', 'bencana alam', '2018-11-11', '12:18:12', 'kjhakjbdka hakjbkjabf', '15445054924df50466c1fc4b5e488861ba2adc18e9ef9bec098e58e76f9aa280af7f092edf.jpg', 'feri', '098907970928', 0, ''),
(59, 'Bacot Cithol', 'kriminal', '2018-11-12', '18:25:29', 'Cithol melarikan diri setelah memerkosa anak SD', '1544613929DhzNavqUYAYCCwO.jpg', 'iqbal', '098907970928', 0, ''),
(60, 'Iqbal kontol', 'kecelakaan', '2018-11-12', '18:43:38', 'iqbal lagi memegang kontol', '1544615019DhzNavqUYAYCCwO.jpg', 'cithol', '0898', 0, ''),
(61, 'hbbhb', 'kecelakaan', '2018-11-12', '18:46:45', 'jknkjbkbk', '1544615205DhzNavqUYAYCCwO.jpg', 'jkbljnhb', '0089798787', 0, ''),
(62, 'iqbal pedofil', 'kriminal', '2018-11-12', '19:13:43', 'citholllllllllllllllm', '1544616823DhzNavqUYAYCCwO.jpg', 'ooo', '9999', 1, 'hL51PuDS77mvNcO5j8TOzewxJsb8xpHj'),
(63, 'Kebakaran toko sepatu', 'bencana alam', '2018-11-12', '20:42:40', 'Terjadi kebakaran di daerah dinoyo malang, kebakaran gede banget', '1544622160steampunk-kid-side.png', 'Edo Eraja', '081234566794', 1, 'YcZb8XkyxwxeIVHzejI2UR7ERV64kSYE'),
(64, 'Kecelakaan Beruntun', 'kecelakaan', '2018-11-12', '20:44:49', 'Ada sebuah asap tebal yang mengakibatkan jarak pandang terbatas, didaerah karanploso', '1544622289steampunk-kid-front.png', 'Waluyo', '081789654123', 0, 'jFB3cmEfVG9nvxUHTWzvLvOkyVAJCaPl'),
(65, 'Dendam Sesaat', 'kriminal', '2018-11-12', '20:48:18', 'Terjadi penculikan anak yang dilatar belakangi kalah taruhan', '1544622498home.png', 'Hamdaka', '089222768564', 1, 'rRnPmjnHrLkQBPeRqo5nS3OMHlUGKZl2'),
(66, 'Pemerkosaan', 'kriminal', '2018-11-12', '20:50:57', 'Nafsu birahi tidak tertahankan, karena korban sering menggoda dan pelaku tergoda ', '1544622657Cht_H5gW0AERi0x.jpg', 'Hasan', '085234287654', 1, 'asvIGIIc9PB6gDskw13VciNs3KYfUO1e');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `laporan`
--
ALTER TABLE `laporan`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `laporan`
--
ALTER TABLE `laporan`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=67;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
