create table user
(
	id bigint(20) auto_increment
		primary key,
	provider_id varchar(255) null
);

create table user_recipes
(
	user_id bigint(20) not null,
	recipes_id bigint(20) not null,
	constraint UK_doq4bb6qvl5xf48cpiw3gt1d
		unique (recipes_id),
	constraint FKpco0pexrpl6x78mtuukwb49g1
		foreign key (user_id) references user (id),
	constraint FK3fadqc9bwyyhroumcbecbqwpj
		foreign key (recipes_id) references recipe (id)
) ;

create index FKpco0pexrpl6x78mtuukwb49g1
	on user_recipes (user_id) ;

