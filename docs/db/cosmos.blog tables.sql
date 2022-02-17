
use CosmosBlog
-- Resoruce
create table [CosmosBlog].[dbo].[cosmos_blog.resource](
  resource_id int primary key identity(1,1),
  resource_name nvarchar(50) NOT NULL	,
  resource_type_id int not null,
  resource_url nvarchar(100) not null,
  create_user_id int ,
  create_date datetime default GETDATE(),
  update_user_id int,
  update_date datetime,
) 

-- Role
create table [CosmosBlog].[dbo].[cosmos_blog.role](
	role_id int primary key identity(1,1),
	role_name nvarchar(50) not null,
	create_user_id int ,
	create_date datetime,
	update_user_id int,
	update_date datetime,

)

-- User
create table [CosmosBlog].[dbo].[cosmos_blog.user](
	user_id int primary key identity(1,1),
	user_name nvarchar(50) not null,
	user_password nvarchar(200) not null,
	user_email nvarchar(255) ,
	user_mobilephone int,
	user_address nvarchar(255),
	user_province nvarchar(50),
	user_city nvarchar(50),
	user_county nvarchar(50),
	create_user_id int ,
	create_date datetime default GETDATE(),
	update_user_id int,
	update_date datetime,

)

--Type
create table [CosmosBlog].[dbo].[cosmos_blog.type](
	resource_type_id int primary key identity(1,1),
	resource_type_name nvarchar(50) not null,
	resource_type_description nvarchar(255) ,
	create_user_id int ,
	create_date datetime default GETDATE(),
	update_user_id int,
	update_date datetime,
)


-- User_Role
create table [CosmosBlog].[dbo].[cosmos_blog.user_role](
	user_role_id int primary key identity(1,1),
	user_id int not null,
	role_id int not null,
	create_user_id int ,
	create_date datetime default GETDATE(),
	update_user_id int,
	update_date datetime,
	foreign key(user_id) references [CosmosBlog].[dbo].[cosmos_blog.user],
	foreign key(role_id) references [CosmosBlog].[dbo].[cosmos_blog.role]
)

-- Resource_Role
create table [CosmosBlog].[dbo].[cosmos_blog.resource_role](
	resource_role_id int  primary key identity(1,1),
	resource_id int not null,
	role_id int not null,
	is_add bit not null default 0,
	is_delete bit not null default 0,
	is_view bit not null default 0,
	is_edit bit not null default 0,
	is_upload bit not null default 0,
	is_download bit not null default 0,
	is_export bit not null default 0,
	is_import bit not null default 0,
	is_print bit not null default 0,
	create_user_id int ,
	create_date datetime default GETDATE(),
	update_user_id int,
	update_date datetime,
	foreign key(resource_id) references [CosmosBlog].[dbo].[cosmos_blog.resource],
	foreign key(role_id) references [CosmosBlog].[dbo].[cosmos_blog.role],
)