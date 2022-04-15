import "../Sass/App.scss";

import { ErrorBoundary } from "react-error-boundary";

import Loading from "../components/Loading";
import Error from "../components/Error";
import Container from "./Container";
import useRequest from "../hooks/useRequest";
import ErrorFallback from "../components/ErrorFallback";

const App = (): JSX.Element => {
  const { data, error } = useRequest();

  return (
    <>
      <header className="header">
        <h2>Contact List</h2>
      </header>

      <main className="container">
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          {!data && !error && (
            <div className="container__loading">
              <Loading />
            </div>
          )}
          {error && <Error error={error.error} />}

          {data && <Container data={data} />}
        </ErrorBoundary>
      </main>
    </>
  );
};

export default App;
