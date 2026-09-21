- `async` means it automatically returns a Promise.
- The **API** sends _JSON Text_, not a JavaScript object. `response.json()` converts that JSON into something our JavaScript can use.

### Two ways to get data

- `fetch()` — Ask another server

```
const res = await fetch("http://localhost:5000/books");
const books = await res.json();
```

- `import` — Read a local file

```
import booksData from "@/data/booksData.json";

const getBooks = async () => {
  return booksData;
};
```


## Context API
Solving Prop drilling

1. createContext()
Create the shared group where the data will live.
*Analogy: Making the whatsApp group*

2. Context.Provider
Wrap the tree and share a value with everyone inside it.
*Analogy: Posting a message in the group*

3. useContext(Context)
Read the shared value from any nested component, no props needed. 
*Analogy: Opening the group to read it*

# What is `ReactNode`?
`ReactNode` is a Typescript type provided by React. It represents anything that React can render on the screen, including JSX elements, strings, numbers, fragments, null and false. We commonly use `ReactNode` to type the `children` prop because it allows any valid React Content to be passed into a component.
```
children: ReactNode
```
