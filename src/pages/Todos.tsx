import { Component, createSignal, onMount, For } from 'solid-js';
import { fetchTodos, createTodo, deleteTodo, type Todo } from '../api/todos';

const Todos: Component = () => {
  const [todos, setTodos] = createSignal<Todo[]>([]);
  const [isLoading, setIsLoading] = createSignal(false);
  const [newTodo, setNewTodo] = createSignal({
    title: '',
    description: '',
    date: '',
  });

  onMount(async () => {
    await loadTodos();
  });

  const loadTodos = async () => {
    setIsLoading(true);
    try {
      const data = await fetchTodos();
      setTodos(data);
    } catch (error) {
      console.error('Failed to load todos:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCreateTodo = async (e: Event) => {
    e.preventDefault();
    const todo = newTodo();
    
    if (!todo.title || !todo.description || !todo.date) {
      return;
    }

    try {
      await createTodo({
        title: todo.title,
        description: todo.description,
        date: todo.date,
      });
      setNewTodo({
        title: '',
        description: '',
        date: '',
      });
      await loadTodos();
    } catch (error) {
      console.error('Failed to create todo:', error);
    }
  };

  const handleDeleteTodo = async (id: string) => {
    try {
      await deleteTodo(id);
      await loadTodos();
    } catch (error) {
      console.error('Failed to delete todo:', error);
    }
  };

  return (
    <div class="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-2xl mx-auto">
        <h1 class="text-4xl font-bold text-gray-900 mb-8">My Todos</h1>

        {/* Create Todo Form */}
        <div class="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 class="text-xl font-semibold text-gray-900 mb-4">Create a New Todo</h2>
          <form onSubmit={handleCreateTodo} class="space-y-4">
            <div>
              <label for="title" class="block text-sm font-medium text-gray-700 mb-1">
                Title
              </label>
              <input
                id="title"
                value={newTodo().title}
                onInput={(e) => setNewTodo({ ...newTodo(), title: e.currentTarget.value })}
                type="text"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                placeholder="Enter todo title"
              />
            </div>

            <div>
              <label for="description" class="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                id="description"
                value={newTodo().description}
                onInput={(e) => setNewTodo({ ...newTodo(), description: e.currentTarget.value })}
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                placeholder="Enter todo description"
                rows="3"
              ></textarea>
            </div>

            <div>
              <label for="date" class="block text-sm font-medium text-gray-700 mb-1">
                Date
              </label>
              <input
                id="date"
                value={newTodo().date}
                onInput={(e) => setNewTodo({ ...newTodo(), date: e.currentTarget.value })}
                type="date"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
              />
            </div>

            <button
              type="submit"
              class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
            >
              Create Todo
            </button>
          </form>
        </div>

        {/* Todo List */}
        <div class="space-y-4">
          <h2 class="text-xl font-semibold text-gray-900">Todo Items</h2>

          {isLoading() && (
            <div class="text-center text-gray-500">
              Loading todos...
            </div>
          )}

          {!isLoading() && todos().length === 0 && (
            <div class="bg-white rounded-lg shadow-md p-6 text-center">
              <p class="text-gray-500">No todos yet. Create one above!</p>
            </div>
          )}

          {!isLoading() && todos().length > 0 && (
            <div class="space-y-4">
              <For each={todos()}>
                {(todo) => (
                  <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-200">
                    <div class="flex justify-between items-start mb-2">
                      <h3 class="text-lg font-semibold text-gray-900">{todo.title}</h3>
                      <button
                        onClick={() => handleDeleteTodo(todo.id)}
                        class="bg-red-600 hover:bg-red-700 text-white font-semibold py-1 px-3 rounded transition duration-200"
                      >
                        Delete
                      </button>
                    </div>
                    <p class="text-gray-600 mb-3">{todo.description}</p>
                    <p class="text-sm text-gray-500">Date: {todo.date}</p>
                  </div>
                )}
              </For>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Todos;
