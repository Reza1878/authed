import React from "react";
import Button from "../components/atoms/Button";
import Container from "../components/atoms/Container";
import GoogleButton from "../components/atoms/GoogleButton";
import Header from "../components/atoms/Header";
import BottomText from "../components/molecules/BottomText";
import TextField from "../components/molecules/TextField";
import TitleContainer from "../components/molecules/TitleContainer";
import RightContainer from "../components/organism/RightContainer";

function ForgetPassword() {
  return (
    <>
      <Header title="Forget Password" />

      <div className="flex flex-wrap">
        <div className="lg:w-6/12 w-full">
          <Container center className="lg:w-9/12 w-full py-12 sm:px-4 px-0">
            <GoogleButton />

            <TitleContainer
              title="Lupa kata sandi"
              subTitle="Masukkan email yang kamu daftarkan sebelumnya, nanti kamu bakal dikirim email."
            />

            <form className="flex flex-wrap">
              <div className="w-full">
                <TextField label="Email" name="email" type="email" />
              </div>

              <Button href="/reset-password">Euy!</Button>
            </form>
            <BottomText
              title="Lah udah inget lagi kata sandinya?"
              description="Login!"
              href="/"
            />
          </Container>
        </div>
        <RightContainer
          img="/img/forget-password.svg"
          title="NAMANYAJUGABELAJAR.IO"
          description="Nggak apa-apa lupa sama kata sandi, asalkan kita jangan sampe lupa sama jasa para pahlawan."
        />
      </div>
    </>
  );
}

export default ForgetPassword;
