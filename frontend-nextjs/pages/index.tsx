import { Container, Box, Divider } from "@mui/material";
import type { GetStaticProps, NextPage } from "next";
import MainBody from "../components/MainBody";
import Layout from "../components/Layout";
import constantStrapi from "../lib/constants/constantStrapi";
import {
  getMultipePopulateFields,
  getPopulateField,
  getStrapiAPI,
} from "../lib/strapi/strapiAPI";
import {
  AuctionData,
  IStrapiAuction,
} from "../lib/strapi/types/IStrapiAuction";
import MainAuctions from "../components/MainAuctions";

interface Props {
  auctions: AuctionData[];
}

const Home: NextPage<Props> = ({ auctions }) => {
  console.log(auctions);

  return (
    <Layout>
      <MainAuctions auctions={auctions} />

      <Divider variant="fullWidth" />

      <MainBody />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const auctions = await getStrapiAPI<IStrapiAuction>(
    constantStrapi.endpoints.auctions,
    getMultipePopulateFields(
      getPopulateField(constantStrapi.components.event),
      getPopulateField(
        constantStrapi.components.event,
        constantStrapi.components.photo
      ),
      getPopulateField(constantStrapi.components.time)
    )
  );

  return {
    props: {
      auctions: auctions.data,
    } as Props,
    revalidate: 1,
  };
};

export default Home;
