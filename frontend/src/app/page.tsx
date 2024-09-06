import Head from "next/head";
import React from "react";
import { getSession } from "@auth0/nextjs-auth0";
import CareerForm from "./components/CareerForm";
import Link from "next/link";

export default async function Home() {
  const session = await getSession();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-900	">
      <Head>
        <title>Career Prediction System</title>
        <meta
          name="description"
          content="Career Prediction System for IT students"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {session ? (
        <>
          <h1 className="text-6xl text-white">Predict your Career</h1>
          <CareerForm />
        </>
      ) : (
        <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
          <h1 className="text-6xl font-bold text-white">
            Welcome to{" "}
            <a className="text-blue-600" href="#">
              Career Prediction System
            </a>
          </h1>

          <p className="mt-3 text-2xl text-white">
            A groundbreaking initiative in the field of career guidance,
            specifically tailored for students aspiring to join the Information
            Technology (IT) sector.
          </p>
          <Link href="/api/auth/login">
            <button className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Get Started
            </button>
          </Link>
        </main>
      )}
      <footer className="text-white 4-xl">
        <a
          href="https://www.linkedin.com/in/jimit-sanghavi-800803249"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created with Love by Jimit
        </a>
      </footer>
    </div>
  );
}
