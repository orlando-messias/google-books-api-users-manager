import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	CreateDateColumn,
	UpdateDateColumn,
	OneToMany
} from "typeorm";
import FavoriteBook from "./FavoriteBook";


@Entity('users_api')
export default class User {

	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	name: string;

	@Column()
	email: string;

	@Column()
	password: string;

	@CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;

	@OneToMany(() => FavoriteBook, (fav) => fav.userId, {
		cascade: true,
		eager: true
	})
	favoritesBooks: FavoriteBook[]

};