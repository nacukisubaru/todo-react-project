import DataService from "./service";

const TABLE = 'todolist';

export default class TodoDataService extends DataService {
	constructor(db, id=null) {
		super(db, TABLE)
		this.id = id
	}

	getTodo = async () => {
		return await this.getData()
	}

	updateTodo = async () => {
		return await this.update()
	}

	deleteTodo = async () => {
		return await this.delete()
	}
}