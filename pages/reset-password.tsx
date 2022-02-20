import React from "react";
import Button from "../components/atoms/Button";
import Container from "../components/atoms/Container";
import GoogleButton from "../components/atoms/GoogleButton";
import Header from "../components/atoms/Header";
import BottomText from "../components/molecules/BottomText";
import TextField from "../components/molecules/TextField";
import TitleContainer from "../components/molecules/TitleContainer";
import RightContainer from "../components/organism/RightContainer";

function ResetPassword() {
  return (
    <>
      <Header title="Forget Password" />

      <div className="flex flex-wrap">
        <div className="lg:w-6/12 w-full">
          <Container center className="lg:w-9/12 w-full py-12 sm:px-4 px-0">
            <GoogleButton />

            <TitleContainer
              title="Atur ulang kata sandi"
              subTitle="Jangan pake kata sandi yang susah-susah makannya, ngerepotin mulu jadi orang."
            />

            <form className="flex flex-wrap">
              <div className="w-full">
                <TextField
                  label="Kata Sandi Baru"
                  name="new_password"
                  type="password"
                />
              </div>
              <div className="w-full">
                <TextField
                  label="Konfirmasi Kata Sandi Baru"
                  name="confirm_new_password"
                  type="password"
                />
              </div>

              <Button href="/">Atur Ulang</Button>
            </form>
          </Container>
        </div>
        <RightContainer
          img="/img/reset-password.svg"
          title="NAMANYAJUGABELAJAR.IO"
          description="Biar nanti nggak lupa lagi sama kata sandinya, disimpen di password manager ya, bang!"
        />
      </div>
    </>
  );
}

export default ResetPassword;
