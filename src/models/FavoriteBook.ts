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

	@Column()
	title: string;

	@Column()
	description: string;

	@Column({ type: 'date' })
	publishedDate: string;

	@Column()
	thumbnail: string;

	@Column()
	infoLink: string;

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