/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable unused-imports/no-unused-imports */

import { title, subtitle } from "@/components/primitives";
import { VanishInput } from "@/components/demo/Input";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <span className={title()}>Get your&nbsp;</span>
        <span className={title({ color: "violet" })}>weather&nbsp;</span>
        <br />
        <span className={title()}>details fast and easy.</span>
        <div className={subtitle({ class: "mt-4" })}>
          Enter your city name and get the weather details in seconds.
        </div>
      </div>

      <div className="w-full flex items-center justify-center">
        <VanishInput />
      </div>
    </section>
  );
}
