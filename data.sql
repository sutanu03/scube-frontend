/*
insert into supplier
*/

INSERT INTO supplier (
supp_code, 
supp_name, 
address, 
contact_number, 
contact_person, 
designation, 
mobile_no, 
gst_number
) values (
"SC-001", "Scube", "Kolkata", "467676754", "Mr. Rohit", "Manager", "7676777677", "ABCDE12345"
)
;
 
 /*
insert into quotation
(select supp_code from supplier where supp_code = "SC-001")
*/

INSERT INTO quotation (
quotation_number, 
q_date, 
submission_date,
supp_code
)
values (
"Q-001", '2023-12-20', '2024-01-19',  "SC-001"
)
;
