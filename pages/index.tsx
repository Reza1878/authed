import type { NextPage } from "next";
import Link from "next/link";
import Button from "../components/atoms/Button";
import Container from "../components/atoms/Container";
import GoogleButton from "../components/atoms/GoogleButton";
import Header from "../components/atoms/Header";
import BottomText from "../components/molecules/BottomText";
import TextField from "../components/molecules/TextField";
import TitleContainer from "../components/molecules/TitleContainer";
import RightContainer from "../components/organism/RightContainer";

const Home: NextPage = () => {
  const forgotPasswordLabel = (
    <Link href="forget-password">
      <a className="font-semibold text-[16px] text-primary-600">
        Lupa Kata Sandi?
      </a>
    </Link>
  );
  return (
    <>
      <Header title="Login" />

      <div className="flex">
        <div className="lg:w-6/12 w-full">
          <Container center className="lg:w-9/12 w-full py-12 sm:px-4 px-0">
            <GoogleButton />

            <TitleContainer
              title="Masuk ke akun kamu"
              subTitle="Belajar gratis di Namanyajugabelajar.io, dan memulai karir yang kamu cita-citata sejak dalam embrio!"
            />

            <form className="flex flex-wrap">
              <div className="w-full">
                <TextField label="Email" name="email" type="email" />
              </div>
              <div className="w-full">
                <TextField
                  label="Kata Sandi"
                  name="password"
                  type="password"
                  appendLabel={forgotPasswordLabel}
                />
              </div>

              <div className="flex mb-6 items-center">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  className="w-6 h-5 mr-4 text-primary-500 rounded-lg"
                />
                <label
                  htmlFor="default-checkbox"
                  className="font-semibold font-sans"
                >
                  Ingat saya
                </label>
              </div>

              <Button>Masuk</Button>
            </form>

            <BottomText
              title="Belum punya akun?"
              description="Daftar sekarang, gratis!"
              href="/register"
            />
          </Container>
        </div>

        <RightContainer
          img="/img/login-icon.svg"
          title="NAMANYAJUGABELAJAR.IO"
          description="Belajar secara online semakin mudah – tetep belajar walaupun pake kuota dari Kemendikbud hehe~"
        />
      </div>
    </>
  );
};

export default Home;
