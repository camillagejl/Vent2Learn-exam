-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3307
-- Generation Time: Dec 11, 2020 at 11:18 AM
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

DELIMITER $$
--
-- Procedures
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `getActiveUsers` (IN `ventNum` INT(99))  NO SQL
SELECT userId, users.ventilationLevel, users.heatingLevel, vents.ventId, currentTemperature, currentHumidity 
FROM users 
INNER JOIN vents 
ON users.ventId = ventNum AND vents.ventId = ventNum$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `getActiveUsersNoParameter` ()  NO SQL
    COMMENT 'Remember to "SET @ventNum = x;" before calling the sproc'
SELECT userId, users.ventilationLevel, users.heatingLevel, vents.ventId, currentTemperature, currentHumidity 
FROM users 
INNER JOIN vents 
ON users.ventId = @ventNum AND vents.ventId = @ventNum$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `getActiveUsersNoVariable` ()  NO SQL
SELECT userId, users.ventilationLevel, users.heatingLevel, vents.ventId, currentTemperature, currentHumidity 
FROM users 
INNER JOIN vents 
ON users.ventId = vents.ventId$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `GetUsers` ()  BEGIN
	SELECT * FROM users;
END$$

DELIMITER ;

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
(1, '1-1', '2020-12-10 11:30:53', '2020-12-10 11:32:09'),
(2, '1-2', '2020-12-10 11:30:56', '2020-12-10 11:30:56'),
(3, '1-3', '2020-12-10 11:30:59', '2020-12-10 11:30:59'),
(4, '2-1', '2020-12-10 11:31:10', '2020-12-10 11:31:10'),
(5, '2-2', '2020-12-10 11:31:12', '2020-12-10 11:31:12'),
(6, '2-3', '2020-12-10 11:31:15', '2020-12-10 11:31:15'),
(7, '2-4', '2020-12-10 11:31:18', '2020-12-10 11:31:18'),
(8, '3-1', '2020-12-10 11:31:22', '2020-12-10 11:31:22'),
(9, '3-2', '2020-12-10 11:31:27', '2020-12-10 11:31:27');

-- --------------------------------------------------------

--
-- Table structure for table `userhistory`
--

CREATE TABLE `userhistory` (
  `historyEntryId` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `ventId` int(11) NOT NULL,
  `leavingTime` int(11) NOT NULL,
  `ventilationLevel` decimal(10,0) NOT NULL,
  `heatingLevel` decimal(10,0) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_danish_ci;

--
-- Dumping data for table `userhistory`
--

INSERT INTO `userhistory` (`historyEntryId`, `userId`, `ventId`, `leavingTime`, `ventilationLevel`, `heatingLevel`) VALUES
(1, 1, 9, 224500, '7', '8'),
(2, 1, 9, 231500, '7', '8'),
(3, 3, 2, 140000, '6', '3'),
(4, 4, 2, 161500, '3', '9'),
(5, 1, 9, 213000, '7', '8'),
(6, 1, 9, 213000, '7', '8'),
(7, 1, 9, 213000, '7', '8'),
(8, 1, 1, 213000, '7', '8'),
(9, 1, 1, 213000, '7', '8'),
(10, 1, 1, 213000, '7', '4'),
(11, 1, 1, 213000, '7', '4'),
(12, 1, 1, 213000, '7', '4'),
(13, 1, 7, 213000, '7', '4'),
(14, 1, 7, 213000, '7', '4'),
(15, 1, 7, 213000, '7', '7'),
(16, 1, 7, 213000, '7', '8'),
(17, 1, 7, 213000, '7', '9'),
(18, 1, 7, 213000, '6', '9'),
(19, 5, 7, 140000, '6', '5'),
(20, 5, 5, 140000, '6', '5'),
(21, 1, 11, 213000, '6', '9'),
(22, 1, 11, 184500, '6', '9'),
(23, 1, 11, 184500, '6', '9'),
(24, 1, 11, 193000, '6', '9');

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
(1, 'Amanda', 'email1@edu.easj.dk', 'pass1', 11, '19:30:00', 6, 9, '2020-12-03 12:50:13', '2020-12-11 11:18:24'),
(2, 'Milana', 'email2@edu.easj.dk', 'pass2', 1, '14:30:00', 3, 3, '2020-12-03 20:38:41', '2020-12-07 09:27:42'),
(3, 'Richard', 'email3@edu.easj.dk', 'pass3', 2, '14:00:00', 6, 3, '2020-12-03 20:38:58', '2020-12-03 20:38:58'),
(4, 'Richard', 'email4@edu.easj.dk', 'pass4', 2, '16:15:00', 3, 9, '2020-12-04 12:27:34', '2020-12-04 12:27:34'),
(5, 'Ellen', 'email5@edu.easj.dk', 'pass5', 5, '14:00:00', 6, 5, '2020-12-04 12:27:58', '2020-12-04 12:27:58'),
(6, 'Marie', 'email6@edu.easj.dk', 'pass6', 3, '11:45:00', 6, 5, '2020-12-04 12:29:09', '2020-12-04 12:29:09'),
(7, 'Karl', 'email7@edu.easj.dk', 'pass7', 7, '14:00:00', 3, 1, '2020-12-04 12:29:56', '2020-12-04 12:29:56');

--
-- Triggers `users`
--
DELIMITER $$
CREATE TRIGGER `VentAndHeatHistory` AFTER UPDATE ON `users` FOR EACH ROW INSERT INTO userHistory
VALUES(NULL, NEW.userId, NEW.ventId, NEW.leavingTime, NEW.ventilationLevel, NEW.heatingLevel)
$$
DELIMITER ;

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
(1, 1, 1, '0', '0', '21', '45', '2020-12-03 12:50:36', '2020-12-10 11:38:21'),
(2, 1, 2, '0', '0', '21', '44', '2020-12-04 12:32:12', '2020-12-09 13:32:18'),
(3, 1, 3, '0', '0', '19', '41', '2020-12-04 12:32:20', '2020-12-09 13:18:22'),
(4, 1, 4, '0', '0', '18', '39', '2020-12-04 12:32:28', '2020-12-09 13:32:21'),
(5, 2, 1, '0', '0', '18', '36', '2020-12-04 12:32:43', '2020-12-09 10:12:51'),
(6, 2, 2, '0', '0', '18', '36', '2020-12-04 12:32:48', '2020-12-09 09:31:18'),
(7, 2, 3, '0', '0', '23', '47', '2020-12-04 12:32:59', '2020-12-10 11:45:26'),
(8, 2, 4, '0', '0', '18', '36', '2020-12-04 12:33:03', '2020-12-09 10:12:44'),
(9, 3, 1, '0', '0', '24', '39', '2020-12-04 12:33:14', '2020-12-10 11:11:01'),
(10, 4, 1, '0', '0', '19', '48', '2020-12-04 12:33:22', '2020-12-08 08:58:50'),
(11, 4, 2, '0', '0', '26', '42', '2020-12-04 12:33:27', '2020-12-11 11:18:24'),
(12, 5, 1, '0', '0', '24', '57', '2020-12-10 11:42:31', '2020-12-10 11:42:31'),
(13, 5, 2, '0', '0', '22', '57', '2020-12-10 11:42:41', '2020-12-10 11:42:41'),
(14, 6, 1, '0', '0', '18', '44', '2020-12-10 11:42:57', '2020-12-10 11:42:57'),
(15, 6, 2, '0', '0', '18', '34', '2020-12-10 11:43:02', '2020-12-10 11:43:02'),
(16, 6, 3, '0', '0', '18', '51', '2020-12-10 11:43:09', '2020-12-10 11:43:09'),
(17, 6, 4, '0', '0', '19', '51', '2020-12-10 11:43:16', '2020-12-10 11:43:16'),
(18, 7, 1, '0', '0', '23', '45', '2020-12-10 11:43:34', '2020-12-10 11:43:34'),
(19, 8, 1, '0', '0', '22', '43', '2020-12-10 11:43:45', '2020-12-10 11:43:45'),
(20, 8, 2, '0', '0', '27', '38', '2020-12-10 11:44:03', '2020-12-10 11:44:03'),
(21, 8, 3, '0', '0', '26', '38', '2020-12-10 11:44:10', '2020-12-10 11:44:10'),
(22, 8, 4, '0', '0', '26', '36', '2020-12-10 11:44:18', '2020-12-10 11:44:18'),
(23, 9, 1, '0', '0', '22', '56', '2020-12-10 11:44:50', '2020-12-10 11:44:50'),
(24, 9, 2, '0', '0', '22', '55', '2020-12-10 11:44:55', '2020-12-10 11:44:55');

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
-- Indexes for table `userhistory`
--
ALTER TABLE `userhistory`
  ADD PRIMARY KEY (`historyEntryId`),
  ADD UNIQUE KEY `historyEntryId` (`historyEntryId`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`userId`),
  ADD UNIQUE KEY `userId` (`userId`),
  ADD UNIQUE KEY `email` (`email`);

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
  MODIFY `roomId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `userhistory`
--
ALTER TABLE `userhistory`
  MODIFY `historyEntryId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `userId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `vents`
--
ALTER TABLE `vents`
  MODIFY `ventId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
