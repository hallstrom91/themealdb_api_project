# MealDB Project

This is a school project developed using Vite+React and React-Bootstrap for layout and design. The project makes use of The MealDB API to retrieve meal-related data.

## `Frameworks, Librarys & Tools`

- [Vite+React](https://vitejs.dev/)
- [React-Bootstrap](https://react-bootstrap.netlify.app/)
- [The MealDB API](https://www.themealdb.com/api.php)

## Getting Started

### `Installation`

Follow these steps to run the project locally:

1. Clone the repository:

```bash
git clone https://github.com/hallstrom91/themealdb_api_project
```

2. Install dependencies:

```bash
npm install
```

### `Running the Project`

To start the frontend application, run:

```bash
npm run dev
```

To start the backend server with nodemon for hosting login/register functions (which are not complete yet), run:

```bash
npm run backend
```

## Known Issues

### `Console Errors `

1. When displaying a specific meal with an embedded YouTube video, the console may show an error regarding constructing the URL. However, the functionality still works as intended.

2. Importing embedded YouTube videos may result in warnings about third-party cookies being blocked and violations related to non-passive event listeners.

3. Fetching data from The MealDB API can result in duplicated console.log responses due to the implementation of <StrictMode> in main.jsx.
