/** @format */
import React, { useState, useEffect } from "react";
import { GetServerSideProps } from "next";
import { Pokedex } from "@/components/pokedex";

export default function Home(): JSX.Element {
  return (
    <>
      <Pokedex />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  req,
  resolvedUrl,
  res,
}) => {
  return {
    props: {
      resolvedUrl,
    },
  };
};
