import Head from "next/head";
import MapView from "../components/MapView";
import useSWR from "swr";
import fetch from "unfetch";

const Home = () => {
  const fetcher = (url) => fetch(url).then((r) => r.json());
  const url = `${process.env.API}/main.json`;
  const { data, error } = useSWR(url, fetcher);

  return (
    <div className="container">
      <Head>
        <title>Covid 19 Map NZ</title>
      </Head>
      <MapView data={data} error={error} />
    </div>
  );
};

export default Home;
