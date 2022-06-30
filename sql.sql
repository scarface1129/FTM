

CREATE TABLE InvestmentActive (
    userId int(11) NOT NULL PRIMARY KEY,
    Email varchar(128) NOT NULL,
    Amount_Funded int(11) NOT NULL DEFAULT 0,
    Amount_Earned int(11) NOT NULL DEFAULT 0,
    Amount_Earned_Today int(11) NOT NULL DEFAULT 0,
    InvestmentType varchar(128) NOT NULL DEFAULT 'None',
    InvestmentActive varchar(128) NOT NULL DEFAULT 'NO',
    Duration int(11) NOT NULL DEFAULT '0',
    RECOMMITED int(11) NOT NULL DEFAULT '0',
    StartTime int(11) NOT NULL DEFAULT '0',
    Payout varchar(128) NOT NULL DEFAULT 'No'
);

CREATE TABLE Withdrawals (
    NoId int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    userId int(11) NOT NULL,
    Email varchar(128) NOT NULL,
    withdrawalAmt varchar(128) NOT NULL,
    withdrawalCurrency varchar(128) NOT NULL,
    withdrawalWallet varchar(128) NOT NULL,
    withdrawalDate varchar(128) NOT NULL,
    withdrawal_status varchar(128) NOT NULL DEFAULT 'Unconfirmed'
);

CREATE TABLE Deposit (
    NoId int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    userId int(11) NOT NULL,
    Email varchar(128) NOT NULL,
    depositAmt varchar(128) NOT NULL,
    depositCurrency varchar(128) NOT NULL,
    depositDate varchar(128) NOT NULL,
    deposit_status varchar(128) NOT NULL DEFAULT 'Unconfirmed',
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
