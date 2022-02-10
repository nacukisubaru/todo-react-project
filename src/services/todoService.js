import DataService from "./service";

const TABLE = 'todolist';

export default class TodoDataService extends DataService {
	constructor(db, id) {
		super(db, TABLE)
		this.id = id
	}

	getTodo = () => {
		return this.getData(this.id)
	}

	updateTodo = () => {
		return this.update(this.id)
	}

	deleteTodo = () => {
		return this.delete(this.id)
	}
}