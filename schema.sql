/* 
user table

create table user (
email_id varchar(255) not null, 
first_name varchar(255), 
last_name varchar(255), 
address varchar(255), 
mobile_number varchar(255), 
contact_number varchar(255), 
password varchar(255), 
primary key (email_id)
);

/* 
assign-user table

create table assign_user (
email varchar(255) not null, 
name varchar(255), 
supplier_code varchar(255), 
supplier_name varchar(255), 
user_type varchar(255), 
primary key (email)
);

/* 
supplier table
*/
create table supplier (
supp_code varchar(255) not null, 
supp_name varchar(255) not null, 
address varchar(255), 
contact_number varchar(255) not null, 
contact_person varchar(255), 
designation varchar(255), 
mobile_no varchar(255), 
gst_number varchar(255) not null, 
primary key (supp_code)
);

/* 
product table
*/
create table product (
prod_code varchar(255) not null, 
prod_name varchar(255) not null, 
description varchar(255), 
unit_price BIGINT not null, 
category varchar(255),
primary key (prod_code)
);

/* 
quotation table
*/
create table quotation (
quotation_number varchar(255) not null, 
q_date varchar(255) not null, 
submission_date varchar(255) not null,
supp_code varchar(255) not null, 
primary key (quotation_number),
FOREIGN KEY (supp_code) REFERENCES supplier (supp_code)
);

/* 
quotation-detail table
*/
create table quotation_detail (
quote_details_id bigint not null auto_increment, 
quotation_number varchar(255) not null,
prod_code varchar(255) not null,
rate varchar(255) not null,
qnty varchar(255) not null,
misc varchar(255), 
price varchar(255) not null,  
primary key (quote_details_id),
FOREIGN KEY (prod_code) REFERENCES product (prod_code),
FOREIGN KEY (quotation_number) REFERENCES quotation (quotation_number)
);

/* 
insert into quotation table


INSERT INTO quotation 
   SET name_student = 'Bobby Tables',
       id_teacher_fk = (
       SELECT id_teacher
         FROM tab_teacher
        WHERE name_teacher = 'Dr. Smith')
*/
