--Soal a
CREATE DATABASE staff;
--Soal b
CREATE TABLE data_staff(
    nik int PRIMARY KEY,
    nama varchar(50),
    alamat VARCHAR(200),
    handphone VARCHAR(15)
);
--Soal c dan d
INSERT INTO data_staff(
    nik, nama, alamat, handphone
) VALUES 
(1601 , 'Dodi' , 'Jl Raya' , '081376542341'),
(1602, 'Culi' , 'Jl Jaya' , '081345627652'),
(1603, 'Sassa' , 'Jl Sejahtera' , '085675433241'),
(1604, 'Reynar' , 'Jl Maju' , '089765443241' ),
(1605 , 'Gulio' , 'Jl Kali' , '08976542312' ),
(1606 , 'Jaya' , 'Jl Maling' , '089765453672' ),
(1607 , 'Gulai' , 'Jl Nani' , '087687654543' );
--soal e
ALTER TABLE data_staff ADD joindate DATE;
--soal e
INSERT INTO data_staff(
    nik, nama, alamat, handphone,joindate
) VALUES 
(1608 , 'Jalu' , 'Jl Yuyun' , '089765434324', '2021-10-13'),
(1609 , 'Jadi' , 'Jl Yuyun' , '089765434324', '2021-10-11'),
(1610 , 'Jadi' , 'Jl Yuyun' , '089765434324', '2021-10-13'),
(1611 , 'Jaja' , 'Jl Yuyun' , '089765434324', '2021-10-09');

select * from data_staff ds2 
--soal f
SELECT TOP 2 * FROM data_staff ds ;
--soal g
SELECT TOP 3 * FROM data_staff ds ;
--soal h
CREATE TABLE staffoutsource(
    nik int PRIMARY KEY,
    nama varchar(50),
    alamat VARCHAR(200),
    handphone VARCHAR(15),
    joindate DATE
);

--soal i
INSERT INTO staffoutsource (
    nik, nama, alamat, handphone,joindate 
) VALUES 
(1611 , 'Dodi' , 'Jl Raya' , '081376542341','2021-10-13'),
(1612, 'Culi' , 'Jl Jaya' , '081345627652','2021-10-11'),
(1613, 'Sassa' , 'Jl Sejahtera' , '085675433241','2021-10-10'),
(1614, 'Reynar' , 'Jl Maju' , '089765443241','2021-10-13' ),
(1615 , 'Gulio' , 'Jl Kali' , '08976542312','2021-10-14' ),
(1616 , 'Jaya' , 'Jl Maling' , '089765453672','2021-10-13'),
(1617 , 'Gulai' , 'Jl Nani' , '087687654543','2021-10-13' ),
(1618 , 'Huy' , 'Jl Raya' , '081376542341','2021-10-13'),
(1619 , 'Gilang' , 'Jl Raya' , '081376542341','2021-10-15'),
(1621 , 'Dodi' , 'Jl Raya' , '081376542341','2021-10-13');

--soal j
SELECT * FROM data_staff ds INNER JOIN staffoutsource s  ON ds.joindate = s.joindate;
--soal k
SELECT * FROM data_staff ds RIGHT JOIN staffoutsource s  ON ds.joindate = s.joindate;
--soal l
SELECT * FROM data_staff ds LEFT JOIN staffoutsource s  ON ds.joindate = s.joindate;
--soal m
SELECT * FROM data_staff ds FULL OUTER JOIN staffoutsource s  ON ds.joindate = s.joindate;