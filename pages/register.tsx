import React from "react";
import Button from "../components/atoms/Button";
import Container from "../components/atoms/Container";
import GoogleButton from "../components/atoms/GoogleButton";
import Header from "../components/atoms/Header";
import SubTitle from "../components/atoms/SubTitle";
import BottomText from "../components/molecules/BottomText";
import TextField from "../components/molecules/TextField";
import TitleContainer from "../components/molecules/TitleContainer";
import RightContainer from "../components/organism/RightContainer";

function Register() {
  return (
    <>
      <Header title="Register" />
      <div className="flex">
        <div className="lg:w-6/12 w-full">
          <Container center className="lg:w-9/12 w-full py-12 sm:px-4 px-0">
            <GoogleButton />

            <TitleContainer
              title="Bikin akun baru"
              subTitle="Nggak susah kok, kamu cuma tinggal masukin beberapa data aja terus langsung jadi deh!"
            />

            <form className="flex flex-wrap">
              <div className="md:w-6/12 w-full">
                <TextField label="Nama Depan" name="first_name" type="text" />
              </div>
              <div className="md:w-6/12 w-full md:pl-4">
                <TextField label="Nama Belakang" name="last_name" type="text" />
              </div>
              <div className="w-full">
                <TextField label="Email" name="email" type="email" />
              </div>
              <div className="w-full">
                <TextField label="Kata Sandi" name="password" type="password" />
              </div>

              <SubTitle className="mb-4">
                Dengan mendaftar berarti kamu setuju dengan Terms of Service dan
                Privacy Policy dari Namanyajugabelajar.io
              </SubTitle>
              <Button>Mendaftar</Button>
            </form>
            <BottomText
              title="Udah punya akun?"
              description="Masuk disini!"
              href="/"
            />
          </Container>
        </div>

        <RightContainer
          img="/img/register-icon.svg"
          title="NAMANYAJUGABELAJAR.IO"
          description="Ayo mendaftar dan belajar dengan rajin di sini supaya jadi pinter dan nggak jadi beban kayak si Denis!"
        />
      </div>
    </>
  );
}

export default Register;
