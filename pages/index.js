import Head from "next/head";
import styles from "../styles/Home.module.css";
import ContainerBlock from "../components/ContainerBlock";
import FavouriteProjects from "../components/FavouriteProjects";
import Link from "next/link";
import LatestCode from "../components/LatestCode";
import Hero from "../components/Hero";
import getLatestRepos from "@lib/getLatestRepos";
import userData from "@constants/data";

export default function Home({ repositories }) {
  return (
    <ContainerBlock
      title="Pranav Purwar - A self taught software developer"
      description="I may write some blogs in the future here."
    >
      <Hero />
      <FavouriteProjects />
      <p
        className="px-16 py-4 text-center text-gray-600 dark:text-gray-200"
        style={{
          fontSize: "1.2rem"
        }}
        >
        If you would like to add the bot in your own server, message me at{" "}
        <Link
            href="https://discordapp.com/users/762635443664977930"
            target="_blank"
            style={{
              color: "#0073CF"
          }}
        >
          @invokevirtual
        </Link>{" "}
        on Discord or E-mail me at{" "}
        <Link
            href="mailto:purwarpranav80@gmail.com"
            target="_blank"
            style={{
              color: "#0073CF"
          }}
        >
          purwarpranav80@gmail.com
        </Link>
      </p>
      <LatestCode repositories={repositories} />
    </ContainerBlock>
  );
}

export const getServerSideProps = async () => {
  console.log(process.env.GITHUB_AUTH_TOKEN);
  let token = process.env.GITHUB_AUTH_TOKEN;

  const repositories = await getLatestRepos(userData, token);
  // console.log("REPOSITORIES", repositories);

  return {
    props: {
      repositories,
    },
  };
};
