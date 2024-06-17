import { cn } from "@/lib/utils";

const Content = () => {
  return (
    <div className="z-10 mt-[100vh] mb-[100vh] w-full max-w-5xl space-y-14 rounded bg-yellow-50 p-10 shadow-xl">
      <Section title="Dataset">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
          blanditiis nihil nostrum, eius quo beatae optio dicta est molestiae
          aut repudiandae accusantium? Iste vero doloremque suscipit tempora.
          Natus, perspiciatis doloribus?
        </p>
        <div className="h-[500px]"></div>
      </Section>
      <Section title="Paper">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
          blanditiis nihil nostrum, eius quo beatae optio dicta est molestiae
          aut repudiandae accusantium? Iste vero doloremque suscipit tempora.
          Natus, perspiciatis doloribus?
        </p>
        <div className="h-[500px]"></div>
      </Section>
      <Section title="Blog">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
          blanditiis nihil nostrum, eius quo beatae optio dicta est molestiae
          aut repudiandae accusantium? Iste vero doloremque suscipit tempora.
          Natus, perspiciatis doloribus?
        </p>
        <div className="h-[500px]"></div>
      </Section>
      <Section title="Team">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
          blanditiis nihil nostrum, eius quo beatae optio dicta est molestiae
          aut repudiandae accusantium? Iste vero doloremque suscipit tempora.
          Natus, perspiciatis doloribus?
        </p>
        <div className="h-[500px]"></div>
      </Section>
    </div>
  );
};

function Section({ title, className, children }) {
  return (
    <section className={cn("", className)}>
      <h2 className="mb-5 text-5xl font-black">{title}</h2>
      {children}
    </section>
  );
}

export default Content;
