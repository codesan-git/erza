import { SignIn } from "@clerk/nextjs/app-beta";
import { dark } from "@clerk/themes";

export default function Page() {
  return (
    <>
      <section className="py-24">
        <div className="container">
          <div className="flex justify-center">
            <SignIn />
          </div>
        </div>
      </section>
    </>
  )
}
