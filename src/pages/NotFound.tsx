import { Component } from 'solid-js';
import { A } from '@solidjs/router';

const NotFound: Component = () => {
  return (
    <div class="min-h-screen flex flex-col items-center justify-center p-8 bg-gray-50 text-gray-900">
      <div class="text-center space-y-6 max-w-md">
        <h1 class="text-9xl font-bold text-blue-600">404</h1>
        <h2 class="text-3xl font-semibold text-gray-800">Page Not Found</h2>
        <p class="text-lg text-gray-600">
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>
        <A
          href="/"
          class="inline-block mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition"
        >
          Go Back Home
        </A>
      </div>
    </div>
  );
};

export default NotFound;
