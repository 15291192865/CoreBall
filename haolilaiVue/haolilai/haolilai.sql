-- phpMyAdmin SQL Dump
-- version 4.5.2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: 2018-02-27 07:15:53
-- 服务器版本： 10.1.10-MariaDB
-- PHP Version: 7.0.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `haolilai`
--

-- --------------------------------------------------------

--
-- 表的结构 `goodlist`
--

CREATE TABLE `goodlist` (
  `ID` int(11) NOT NULL,
  `img` varchar(100) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `intro` varchar(100) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `price` varchar(20) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- 转存表中的数据 `goodlist`
--

INSERT INTO `goodlist` (`ID`, `img`, `intro`, `price`) VALUES
(1, '../img/1.jpg', '青森芝士条', '36.00'),
(2, '../img/4.jpg', '巧克力口味半熟芝士', '40.00'),
(3, '../img/5.jpg', '半熟芝士', '38.00'),
(4, '../img/8.jpg', '蜂蜜蛋糕', '36.00'),
(5, '../img/9.jpg', '意大利芝士饼干', '39.00'),
(6, '../img/10.jpg', '玫瑰舒芙蕾', '28.00'),
(7, '../img/11.jpg', '奶油天堂', '28.00'),
(8, '../img/12.jpg', '东京香蕉脆', '28.00'),
(9, '../img/13.jpg', '北海道蛋糕', '22.00'),
(10, '../img/14.jpg', '甜霜', '15.00'),
(11, '../img/15.jpg', '小鸡仔', '16.00'),
(12, '../img/16.jpg', '葡萄奶酥', '15.00'),
(13, '../img/17.jpg', '冻干草莓夹心', '39.00'),
(14, '../img/18.jpg', '半熟芝士挞', '25.00'),
(15, '../img/19.jpg', '北海道双层芝士蛋糕', '78.00'),
(16, '../img/20.jpg', '抹茶半熟芝士', '40.00'),
(17, '../img/21.jpg', '马卡龙', '0.00'),
(18, '../img/22.jpg', '玫瑰蛋黄酥', '40.00'),
(19, '../img/23.jpg', 'nfc纯果汁', '20.00'),
(20, '../img/24.jpg', '玫瑰绿豆糕点', '36.00'),
(21, '../img/25.jpg', '肉松蛋黄Q饼', '58.00'),
(22, '../img/26.jpg', '玫瑰鲜花饼', '40.00'),
(24, '../img/201802270711211.jpeg', '爱谁谁', '12'),
(25, '../img/2018022707114786.jpeg', '速度', '13');

-- --------------------------------------------------------

--
-- 表的结构 `user`
--

CREATE TABLE `user` (
  `ID` int(11) NOT NULL,
  `tel` varchar(20) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `password` varchar(20) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- 转存表中的数据 `user`
--

INSERT INTO `user` (`ID`, `tel`, `password`) VALUES
(1, '15291192865', '123456'),
(2, '15291112865', '123456'),
(3, '15298765432', '123456'),
(26, '15229731296', '123456'),
(27, '15212341234', '123456');

-- --------------------------------------------------------

--
-- 表的结构 `userS`
--

CREATE TABLE `userS` (
  `ID` int(11) NOT NULL,
  `username` varchar(20) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `password` varchar(20) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- 转存表中的数据 `userS`
--

INSERT INTO `userS` (`ID`, `username`, `password`) VALUES
(1, 'haolilai', '123456');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `goodlist`
--
ALTER TABLE `goodlist`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `userS`
--
ALTER TABLE `userS`
  ADD PRIMARY KEY (`ID`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `goodlist`
--
ALTER TABLE `goodlist`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;
--
-- 使用表AUTO_INCREMENT `user`
--
ALTER TABLE `user`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;
--
-- 使用表AUTO_INCREMENT `userS`
--
ALTER TABLE `userS`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
