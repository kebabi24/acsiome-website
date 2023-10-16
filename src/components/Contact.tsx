import React, { useState, useEffect } from "react";
import map from "../assets/map.png";
import { Button, Label, TextInput } from "flowbite-react";

const Contact = () => {
  return (
    <div className="md:px-14 px-4 py-8 max-w-screen-2x1 mx-auto bg-bgGreen">
      <div className="my-24 md:my-8 py-8 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
        <div>
          <img src={map} alt="" />
        </div>
        <div className="md:w-1/2 ">
          <h1 className="text-5xl font-semibold mb-4 text-white md:w-3/4 leading-snug ">
            Nous contacter
          </h1>
          <div className="flex max-w-md flex-col gap-4">
            <div>
              <div className="mb-2 block">
                <Label
                  className="text-white leading-snug "
                  htmlFor="base"
                  value="Email"
                />
              </div>
              <TextInput id="base" sizing="md" type="text" />
            </div>
            <div>
              <div className="mb-2 block">
                <Label
                  className="text-white leading-snug "
                  htmlFor="large"
                  value="Message"
                />
              </div>
              <TextInput id="large" sizing="lg" type="text" />
            </div>
            <Button type="submit">Envoyer un message</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;