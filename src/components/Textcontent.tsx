interface TextcontentProps {
  text: string;
  subtext?: string;
  subclass?: string;
}

export const Textcontent = ({
  text,
  subtext,
  subclass = "font-extrabold",
}: TextcontentProps) => {
  return (
    <div
      className={`mx-auto text-center text-2xl leading-relaxed focus:bg-black mt-10 pt-10 z-10 text-[#222222] ${subclass}`}
    >
      {text}
      {subtext && <span className="block">{subtext}</span>}
    </div>
  );
};
