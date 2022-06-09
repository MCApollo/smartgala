import { GetStaticProps, GetStaticPaths } from "next";
import React from "react";
import constantStrapi from "../../lib/constants/constantStrapi";
import { getStrapiAPI } from "../../lib/strapi/strapiAPI";

interface Props {
  auction: any;
}

const Auction: React.FunctionComponent<Props> = ({ auction }) => {
  console.log("sober", auction);

  return <h1>hello world!</h1>;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const auctions = await getStrapiAPI(constantStrapi.endpoints.auctions, {
    fields: ["slug"],
  });

  const paths = (auctions.data as any[]).map((auction: any, index) => {
    console.log("getStaticPaths", "paths", "auction", index, auction);

    return {
      params: {
        slug: auction.attributes.slug,
      },
    };
  });

  console.log("getStaticPaths", "paths", paths);

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const auction = await getStrapiAPI(constantStrapi.endpoints.auctions, {
    filters: {
      slug: params!.slug,
    },

    populate: "*",
  });

  return {
    props: {
      auction: auction.data,
    } as Props,
    // revalidate: 1,
  };
};

export default Auction;
