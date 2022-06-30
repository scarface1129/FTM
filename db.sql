-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Apr 30, 2022 at 05:36 AM
-- Server version: 10.5.12-MariaDB-cll-lve
-- PHP Version: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `u646519593_luna`
--

-- --------------------------------------------------------

--
-- Table structure for table `Deposit`
--

CREATE TABLE `Deposit` (
  `NoId` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `Email` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL,
  `depositAmt` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL,
  `depositCurrency` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL,
  `depositDate` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL,
  `deposit_status` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'Unconfirmed',
  `transactionHash` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `InvestmentActive`
--

CREATE TABLE `InvestmentActive` (
  `userId` int(11) NOT NULL,
  `Email` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Amount_Funded` int(11) NOT NULL DEFAULT 0,
  `Amount_Earned` int(11) NOT NULL DEFAULT 0,
  `Amount_Earned_Today` int(11) NOT NULL DEFAULT 0,
  `InvestmentType` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'None',
  `InvestmentActive` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'NO',
  `InvestmentDuration` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `RECOMMITED` varchar(11) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'NO',
  `TransId` int(111) NOT NULL DEFAULT 0,
  `Payout` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'No'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `pwdreset`
--

CREATE TABLE `pwdreset` (
  `pwdResetId` int(11) NOT NULL,
  `pwdResetEmail` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `pwdResetSelector` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `pwdResetToken` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `pwdResetExpires` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Referral`
--

CREATE TABLE `Referral` (
  `NoId` int(11) NOT NULL,
  `RefID` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL,
  `referredPerson` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL,
  `referredPersonEmail` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Transactions`
--

CREATE TABLE `Transactions` (
  `TransId` int(11) NOT NULL,
  `NoId` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `Email` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL,
  `transaction_type` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Amount` int(11) NOT NULL,
  `transaction_status` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL,
  `transaction_date` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Users`
--

CREATE TABLE `Users` (
  `userId` int(11) NOT NULL,
  `FirstName` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL,
  `MiddleName` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL,
  `LastName` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL,
  `CountryOfResidence` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL,
  `StateLiving` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL,
  `City` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL,
  `PostalCode` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL,
  `AccountCreatedOn` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Email` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL,
  `UserPwd` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL,
  `TotalWithdrawals` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0.00',
  `TotalEarned` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0.00',
  `TotalDeposits` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0.00',
  `AccountBalance` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0.00',
  `VerificationStatus` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'Not Verified',
  `WalletAddress` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `VerificationCodes`
--

CREATE TABLE `VerificationCodes` (
  `userId` int(11) NOT NULL,
  `Email` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL,
  `VerificationCode` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL,
  `VerificationStatus` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Withdrawals`
--

CREATE TABLE `Withdrawals` (
  `NoId` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `Email` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL,
  `withdrawalAmt` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL,
  `withdrawalCurrency` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL,
  `withdrawalWallet` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL,
  `withdrawalDate` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL,
  `withdrawal_status` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'Unconfirmed'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Deposit`
--
ALTER TABLE `Deposit`
  ADD PRIMARY KEY (`NoId`);

--
-- Indexes for table `InvestmentActive`
--
ALTER TABLE `InvestmentActive`
  ADD PRIMARY KEY (`userId`);

--
-- Indexes for table `pwdreset`
--
ALTER TABLE `pwdreset`
  ADD PRIMARY KEY (`pwdResetId`);

--
-- Indexes for table `Referral`
--
ALTER TABLE `Referral`
  ADD PRIMARY KEY (`NoId`);

--
-- Indexes for table `Transactions`
--
ALTER TABLE `Transactions`
  ADD PRIMARY KEY (`TransId`);

--
-- Indexes for table `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`userId`);

--
-- Indexes for table `VerificationCodes`
--
ALTER TABLE `VerificationCodes`
  ADD PRIMARY KEY (`userId`);

--
-- Indexes for table `Withdrawals`
--
ALTER TABLE `Withdrawals`
  ADD PRIMARY KEY (`NoId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Deposit`
--
ALTER TABLE `Deposit`
  MODIFY `NoId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pwdreset`
--
ALTER TABLE `pwdreset`
  MODIFY `pwdResetId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Referral`
--
ALTER TABLE `Referral`
  MODIFY `NoId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Transactions`
--
ALTER TABLE `Transactions`
  MODIFY `TransId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Users`
--
ALTER TABLE `Users`
  MODIFY `userId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Withdrawals`
--
ALTER TABLE `Withdrawals`
  MODIFY `NoId` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
