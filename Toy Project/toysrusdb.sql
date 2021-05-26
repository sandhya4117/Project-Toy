-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 15, 2021 at 04:52 PM
-- Server version: 10.4.18-MariaDB
-- PHP Version: 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `toysrusdb`
--
CREATE DATABASE IF NOT EXISTS `toysrusdb` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `toysrusdb`;

-- --------------------------------------------------------

--
-- Table structure for table `targetaudience`
--

CREATE TABLE `targetaudience` (
  `targetAudienceId` int(11) NOT NULL,
  `targetAudienceName` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `targetaudience`
--

INSERT INTO `targetaudience` (`targetAudienceId`, `targetAudienceName`) VALUES
(1, 'Family'),
(2, 'Kids'),
(3, 'Teens'),
(4, 'Babies');

-- --------------------------------------------------------

--
-- Table structure for table `toys`
--

CREATE TABLE `toys` (
  `toyId` int(11) NOT NULL,
  `toyName` varchar(50) NOT NULL,
  `description` varchar(200) NOT NULL,
  `targetAudienceId` int(11) NOT NULL,
  `price` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `toys`
--

INSERT INTO `toys` (`toyId`, `toyName`, `description`, `targetAudienceId`, `price`) VALUES
(4, 'Baby Einstein', 'Best baby product ever', 4, 81),
(5, 'toniebox Grey Starter ', 'Our Toniebox is a new and innovative audio player for kids, great for bedtime stories or as a kids\' music box', 2, 81),
(6, 'BabyFirst', 'amazing toy for kids under 9', 2, 77),
(7, 'sancua Checkered', 'excellent product and safe to use', 1, 210);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `targetaudience`
--
ALTER TABLE `targetaudience`
  ADD PRIMARY KEY (`targetAudienceId`);

--
-- Indexes for table `toys`
--
ALTER TABLE `toys`
  ADD PRIMARY KEY (`toyId`),
  ADD KEY `targetAudienceId` (`targetAudienceId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `targetaudience`
--
ALTER TABLE `targetaudience`
  MODIFY `targetAudienceId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `toys`
--
ALTER TABLE `toys`
  MODIFY `toyId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `toys`
--
ALTER TABLE `toys`
  ADD CONSTRAINT `toys_ibfk_1` FOREIGN KEY (`targetAudienceId`) REFERENCES `targetaudience` (`targetAudienceId`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
