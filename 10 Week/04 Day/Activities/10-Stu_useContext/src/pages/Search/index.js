import React, { useState, useEffect } from "react";
import Container from "../../components/Container";
import SearchForm from "../../components/SearchForm";
import SearchResults from "../../components/SearchResults";
import Alert from "../../components/Alert";
import API from "../../utils/API";
import ArticleContext from "../../utils/ArticleContext";

function Search() {
  const [state, setState] = useState({
    search: "Wikipedia",
    title: "",
    description: "",
    url: "",
    error: ""
  })

  // const [search, setSearch] = useState("Wikipedia");
  // const [title, setTitle] = useState("");
  // const [description, setDescription] = useState("");
  // const [url, setUrl] = useState("");
  // const [error, setError] = useState("");

  // When the component mounts, update the title to be Wikipedia Searcher
  useEffect(() => {
    document.title = "Wikipedia Searcher";

    if (!state.search) {
      return;
    }

    API.searchTerms(state.search)
      .then(res => {
        if (res.data.length === 0) {
          throw new Error("No results found.");
        }
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        // setTitle(res.data[1]);
        // setDescription(res.data[2][0]);
        // setUrl(res.data[3][0]);

        setState({
          search: state.search,
          title: res.data[1],
          description: res.data[2][0],
          url: res.data[3][0]
        })
      })
      .catch(err => setState({ error: err }))
  }, [state.search]);

  const handleInputChange = event => {
    // setSearch(event.target.value); 
    setState({
      search: event.target.value
    })
  };

  const handleFormSubmit = event => {
    event.preventDefault();
  };
  return (
    <div>
      <ArticleContext.Provider value={state}>
        <Container style={{ minHeight: "100vh" }}>
          <h1 className="text-center">Search For Anything on Wikipedia</h1>
          <Alert type="danger" style={{ opacity: state.error ? 1 : 0, marginBottom: 10 }}>
            {state.error}
          </Alert>
          <SearchForm
            handleFormSubmit={handleFormSubmit}
            handleInputChange={handleInputChange}
            results={state.search}
          />
          <SearchResults title={state.title} description={state.description} url={state.url} />
        </Container>
        </ArticleContext.Provider>
    </div>
  );
}

export default Search;
