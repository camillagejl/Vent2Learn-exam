-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3307
-- Generation Time: Dec 04, 2020 at 12:39 PM
-- Server version: 5.7.19
-- PHP Version: 7.1.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `vent2learndb`
--

-- --------------------------------------------------------

--
-- Table structure for table `rooms`
--

CREATE TABLE `rooms` (
  `roomId` int(11) NOT NULL,
  `roomName` varchar(255) COLLATE latin1_danish_ci NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_danish_ci;

--
-- Dumping data for table `rooms`
--

INSERT INTO `rooms` (`roomId`, `roomName`, `createdAt`, `updatedAt`) VALUES
(1, '3-17', '2020-12-03 12:50:27', '2020-12-03 12:50:27'),
(2, '3-18', '2020-12-04 12:34:02', '2020-12-04 12:34:02'),
(3, '3-19', '2020-12-04 12:34:06', '2020-12-04 12:34:06'),
(4, '3-20', '2020-12-04 12:34:10', '2020-12-04 12:34:10');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `userId` int(11) NOT NULL,
  `name` varchar(255) COLLATE latin1_danish_ci NOT NULL,
  `email` varchar(255) COLLATE latin1_danish_ci NOT NULL,
  `password` varchar(255) COLLATE latin1_danish_ci NOT NULL,
  `ventId` int(11) DEFAULT NULL,
  `leavingTime` time DEFAULT NULL,
  `ventilationLevel` int(11) DEFAULT NULL,
  `heatingLevel` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_danish_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`userId`, `name`, `email`, `password`, `ventId`, `leavingTime`, `ventilationLevel`, `heatingLevel`, `createdAt`, `updatedAt`) VALUES
(1, 'Amanda', 'email1@edu.easj.dk', 'pass1', 11, '21:00:00', 4, 7, '2020-12-03 12:50:13', '2020-12-04 12:36:11'),
(2, 'Milana', 'email2@edu.easj.dk', 'pass2', 1, NULL, 3, 3, '2020-12-03 20:38:41', '2020-12-03 20:38:41'),
(3, 'Richard', 'email3@edu.easj.dk', 'pass3', 2, NULL, 6, 3, '2020-12-03 20:38:58', '2020-12-03 20:38:58'),
(4, 'Richard', 'email4@edu.easj.dk', 'pass4', 2, NULL, 3, 9, '2020-12-04 12:27:34', '2020-12-04 12:27:34'),
(5, 'Ellen', 'email5@edu.easj.dk', 'pass5', NULL, NULL, 6, 5, '2020-12-04 12:27:58', '2020-12-04 12:27:58'),
(6, 'Marie', 'email6@edu.easj.dk', 'pass6', 3, '11:45:00', 6, 5, '2020-12-04 12:29:09', '2020-12-04 12:29:09'),
(7, 'Karl', 'email7@edu.easj.dk', 'pass7', 7, '14:00:00', 3, 1, '2020-12-04 12:29:56', '2020-12-04 12:29:56');

-- --------------------------------------------------------

--
-- Table structure for table `venthistory`
--

CREATE TABLE `venthistory` (
  `historyEntryId` int(11) NOT NULL,
  `ventId` int(11) NOT NULL,
  `ventilationLevel` decimal(10,0) NOT NULL,
  `heatingLevel` decimal(10,0) NOT NULL,
  `temperature` decimal(10,0) NOT NULL,
  `humidity` decimal(10,0) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_danish_ci;

-- --------------------------------------------------------

--
-- Table structure for table `vents`
--

CREATE TABLE `vents` (
  `ventId` int(11) NOT NULL,
  `roomId` int(11) NOT NULL,
  `ventNumber` int(11) NOT NULL,
  `ventilationLevel` decimal(10,0) NOT NULL,
  `heatingLevel` decimal(10,0) NOT NULL,
  `currentTemperature` decimal(10,0) NOT NULL,
  `currentHumidity` decimal(10,0) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_danish_ci;

--
-- Dumping data for table `vents`
--

INSERT INTO `vents` (`ventId`, `roomId`, `ventNumber`, `ventilationLevel`, `heatingLevel`, `currentTemperature`, `currentHumidity`, `createdAt`, `updatedAt`) VALUES
(1, 1, 1, '0', '0', '23', '44', '2020-12-03 12:50:36', '2020-12-04 11:18:07'),
(2, 1, 2, '0', '0', '26', '76', '2020-12-04 12:32:12', '2020-12-04 12:32:12'),
(3, 1, 3, '0', '0', '24', '76', '2020-12-04 12:32:20', '2020-12-04 12:32:20'),
(4, 1, 4, '0', '0', '21', '76', '2020-12-04 12:32:28', '2020-12-04 12:32:28'),
(5, 2, 1, '0', '0', '19', '74', '2020-12-04 12:32:43', '2020-12-04 12:32:43'),
(6, 2, 2, '0', '0', '19', '44', '2020-12-04 12:32:48', '2020-12-04 12:32:48'),
(7, 2, 3, '0', '0', '20', '60', '2020-12-04 12:32:59', '2020-12-04 12:32:59'),
(8, 2, 4, '0', '0', '20', '60', '2020-12-04 12:33:03', '2020-12-04 12:33:03'),
(9, 3, 1, '0', '0', '25', '60', '2020-12-04 12:33:14', '2020-12-04 12:33:14'),
(10, 4, 1, '0', '0', '23', '60', '2020-12-04 12:33:22', '2020-12-04 12:33:22'),
(11, 4, 2, '0', '0', '26', '48', '2020-12-04 12:33:27', '2020-12-04 12:36:11');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `rooms`
--
ALTER TABLE `rooms`
  ADD PRIMARY KEY (`roomId`),
  ADD UNIQUE KEY `roomId` (`roomId`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`userId`),
  ADD UNIQUE KEY `userId` (`userId`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `venthistory`
--
ALTER TABLE `venthistory`
  ADD PRIMARY KEY (`historyEntryId`),
  ADD UNIQUE KEY `historyEntryId` (`historyEntryId`);

--
-- Indexes for table `vents`
--
ALTER TABLE `vents`
  ADD PRIMARY KEY (`ventId`),
  ADD UNIQUE KEY `ventId` (`ventId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `rooms`
--
ALTER TABLE `rooms`
  MODIFY `roomId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `userId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `venthistory`
--
ALTER TABLE `venthistory`
  MODIFY `historyEntryId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `vents`
--
ALTER TABLE `vents`
  MODIFY `ventId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
