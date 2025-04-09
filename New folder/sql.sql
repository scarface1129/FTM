SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";
    
    
    
    
    
    
    CREATE TABLE Users (
    userId int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    FirstName varchar(128) NOT NULL,
    MiddleName varchar(128) NOT NULL,
    LastName varchar(128) NOT NULL,
    CountryOfResidence varchar(128) NOT NULL,
    StateLiving varchar(128) NOT NULL,
    City varchar(128) NOT NULL,
    PostalCode varchar(128) NOT NULL,
    AccountCreatedOn varchar(128) NOT NULL,
    Email varchar(128) NOT NULL,
    UserPwd varchar(128) NOT NULL,
    TotalWithdrawals varchar(128) NOT NULL DEFAULT 0.00,
    TotalEarned varchar(128) NOT NULL DEFAULT 0.00,
    TotalDeposits varchar(128) NOT NULL DEFAULT 0.00,
    AccountBalance varchar(128) NOT NULL DEFAULT 0.00,
    VerificationStatus varchar(128) NOT NULL DEFAULT 0;
    WalletAddress varchar(128) NOT NULL;
);  

CREATE TABLE Transactions (
    TransId int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    NoId int(11) NOT NULL,
    userId int(11) NOT NULL,
    Email varchar(128) NOT NULL,
    transaction_type varchar(128) NOT NULL,
    Amount int(11) NOT NULL,
    transaction_status varchar(128) NOT NULL,
    transaction_date varchar(128) NOT NULL
);

CREATE TABLE InvestmentActive (
    userId int(11) NOT NULL PRIMARY KEY,
    Email varchar(128) NOT NULL,
    Amount_Funded int(11) NOT NULL DEFAULT 0.00,
    Amount_Earned int(11) NOT NULL DEFAULT 0.00,
    Amount_Earned_Today int(11) NOT NULL DEFAULT 0.00,
    InvestmentType varchar(128) NOT NULL DEFAULT 0,
    InvestmentActive varchar(128) NOT NULL DEFAULT 0,
    Duration int(11) NOT NULL DEFAULT 0,
    RECOMMITED int(11) NOT NULL DEFAULT 0,
    StartTime int(11) NOT NULL DEFAULT 0,
    Payout varchar(128) NOT NULL DEFAULT 0
);

CREATE TABLE Withdrawals (
    NoId int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    userId int(11) NOT NULL,
    Email varchar(128) NOT NULL,
    withdrawalAmt varchar(128) NOT NULL,
    withdrawalCurrency varchar(128) NOT NULL,
    withdrawalWallet varchar(128) NOT NULL,
    withdrawalDate varchar(128) NOT NULL,
    withdrawal_status varchar(128) NOT NULL DEFAULT 0
);

CREATE TABLE Deposit (
    NoId int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    userId int(11) NOT NULL,
    Email varchar(128) NOT NULL,
    depositAmt varchar(128) NOT NULL,
    depositCurrency varchar(128) NOT NULL,
    depositDate varchar(128) NOT NULL,
    deposit_status varchar(128) NOT NULL DEFAULT 0,
    transactionHash varchar(128) NOT NULL
);

CREATE TABLE Referral (
    NoId int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    RefID varchar(128) NOT NULL,
    referredPerson varchar(128) NOT NULL,
    referredPersonEmail varchar(128) NOT NULL
);

CREATE TABLE VerificationCodes (
    userId int(11) NOT NULL PRIMARY KEY,
    Email varchar(128) NOT NULL,
    VerificationCode varchar(128) NOT NULL,
    VerificationStatus varchar(128) NOT NULL
);

CREATE TABLE pwdreset(
    pwdResetId INT(11) PRIMARY KEY AUTO_INCREMENT NOT NULL,
    pwdResetEmail TEXT NOT NULL,
    pwdResetSelector TEXT NOT NULL,
    pwdResetToken LONGTEXT NOT NULL,
    pwdResetExpires DATETIME NOT NULL
);

CREATE TABLE cryptoPrice(
    id int(11) PRIMARY KEY NOT NULL,
    currentPrice float(11) NOT NULL,
    24HourLow float(11) NOT NULL,
    24HourHigh INT(11) NOT NULL,
    AllPrices INT(11) NOT NULL
)
