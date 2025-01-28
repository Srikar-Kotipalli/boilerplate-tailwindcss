import "./App.css";

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-purple-600">
      <div className="p-6 bg-white rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold underline text-gray-800">
          Hello, world!
        </h1>
        <p className="mt-4 font-bold text-gray-600">
          Welcome to the Tailwind CSS and React boilerplate. Start building
          amazing projects with ease!
        </p>
        <button className="mt-6 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default App;
