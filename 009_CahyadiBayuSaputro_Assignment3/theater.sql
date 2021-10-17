-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 17, 2021 at 03:46 AM
-- Server version: 10.3.16-MariaDB
-- PHP Version: 7.3.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `theater`
--

-- --------------------------------------------------------

--
-- Table structure for table `movies`
--

CREATE TABLE `movies` (
  `Id` int(11) NOT NULL,
  `Name` varchar(100) DEFAULT NULL,
  `Genre` varchar(100) DEFAULT NULL,
  `Duration` int(11) DEFAULT NULL,
  `ReleaseDate` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `movies`
--

INSERT INTO `movies` (`Id`, `Name`, `Genre`, `Duration`, `ReleaseDate`) VALUES
(1, 'Avenger', 'Action', 165, '2016-02-27'),
(2, 'Inception', 'Thriller', 165, '2021-12-06'),
(5, 'The Godfather', 'Action', 165, '1974-01-01'),
(6, 'The Dark Knight', 'Action', 155, '2008-01-01'),
(7, 'Pulp Fiction', 'Comedy', 155, '1994-01-01'),
(8, 'The Lord of the Rings', 'Action', 155, '2001-01-01'),
(9, 'Star Wars', 'Action', 155, '1980-01-01'),
(10, 'Life is Beautiful', 'Romance', 155, '1974-01-01'),
(11, 'Interstellar', 'Sci-Fi', 155, '2014-01-01'),
(12, 'Parasite', 'Horror', 155, '2019-01-01'),
(13, 'Terminator', 'Sci-Fi', 155, '1991-01-01');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `movies`
--
ALTER TABLE `movies`
  ADD PRIMARY KEY (`Id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `movies`
--
ALTER TABLE `movies`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
