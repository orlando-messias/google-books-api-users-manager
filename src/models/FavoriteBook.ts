import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	CreateDateColumn,
	UpdateDateColumn,
	ManyToOne,
	JoinColumn
} from "typeorm";
import User from "./User";


@Entity('favorites_books')
export default class FavoriteBook {

	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	bookId: string;

	@Column({ length: 500 })
	title: string;

	@Column({ length: 2000, nullable: true, default: null })
	description: string;

	@Column({ nullable: true, default: null })
	publishedDate: string;

	@Column()
	thumbnail: string;

	@Column({ nullable: true, default: null })
	pageCount: string;

	@Column({ nullable: true, default: null })
	language: string;

	// optionally not shown in queries
	@CreateDateColumn({ select: false })
	created_at: Date;

	// optionally not shown in queries
	@UpdateDateColumn({ select: false })
	updated_at: Date;

	@JoinColumn({ name: "userId" })
	@ManyToOne(() => User, (user) => user.favoritesBooks, {
		onDelete: "CASCADE",
		onUpdate: "CASCADE",
	})
	userId: User;

};