import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useReducer,
} from "react";

const PersonsContext = createContext();

const BASE_URL = "https://api.gameofthronesquotes.xyz/v1";

const initialState = {
  persons: [],
  filteredPersons: [],
  isLoading: false,
  selectedPerson: {},
  error: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true };
    case "rejected":
      return { ...state, isLoading: false, error: action.payload };
    case "persons/loaded":
      return { ...state, isLoading: false, persons: action.payload };
    case "person/loaded":
      return {
        ...state,
        isLoading: false,
        selectedPerson: action.payload,
      };
    case "filteredPersons/loaded":
      return {
        ...state,
        isLoading: false,
        filteredPersons: action.payload,
      };
    default:
      throw new Error("Unknown action type");
  }
}

function PersonsProvider({ children }) {
  const [
    { persons, filteredPersons, isLoading, selectedPerson, error },
    dispatch,
  ] = useReducer(reducer, initialState);

  useEffect(
    function () {
      async function fetchPersons() {
        try {
          const res = await fetch(`${BASE_URL}/characters`);
          const data = await res.json();
          dispatch({ type: "persons/loaded", payload: data });
          dispatch({ type: "filteredPersons/loaded", payload: data });
        } catch {
          dispatch({
            type: "rejected",
            payload: "There was an error during loading data...",
          });
        }
      }
      fetchPersons();
    },
    [selectedPerson],
  );

  const getPerson = useCallback(async function getPerson(person) {
    dispatch({ type: "loading" });

    try {
      const res = await fetch(`${BASE_URL}/characters`);
      const data = await res.json();
      const selected = data.find((item) => item.name === person);
      dispatch({ type: "person/loaded", payload: selected });
    } catch {
      dispatch({
        type: "rejected",
        payload: "There was an error during loading data...",
      });
    }
  }, []);

  function handleClick() {
    const rndNum = Math.floor(Math.random() * persons.length);
    const rndPerson = persons[rndNum].name;
    getPerson(rndPerson);
  }

  function handleInputChange(e) {
    const searchTerm = e.target.value;

    const filteredItems = persons.filter((person) =>
      person.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );

    dispatch({ type: "filteredPersons/loaded", payload: filteredItems });
  }

  return (
    <PersonsContext.Provider
      value={{
        persons,
        filteredPersons,
        isLoading,
        selectedPerson,
        getPerson,
        handleClick,
        handleInputChange,
        error,
      }}
    >
      {children}
    </PersonsContext.Provider>
  );
}

function usePersons() {
  const context = useContext(PersonsContext);
  if (context === undefined)
    throw new Error("PersonsContext was used outside the PersonsProvider");
  return context;
}

export { PersonsProvider, usePersons };
