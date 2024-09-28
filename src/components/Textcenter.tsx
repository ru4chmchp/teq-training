interface TextcenterProps {
  text: string;
  subtext?: string;
  subclass?: string;
}

export const Textcenter = ({
  text,
  subtext,
  subclass = "font-extrabold",
}: TextcenterProps) => {
  return (
    <div
      className={`mx-auto text-center text-4xl leading-relaxed focus:bg-black mt-10 pt-10 z-10 ${subclass}`}
    >
      {text}
      {subtext && <span className="block">{subtext}</span>}
      {/*if subtext has value , react will render*/}
    </div>
  );
};
