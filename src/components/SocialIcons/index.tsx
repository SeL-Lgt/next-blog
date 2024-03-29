import Github from "./github.svg";
import Mail from "./mail.svg";

const components = {
  mail: Mail,
  github: Github,
};

type PropsType = {
  kind: "mail" | "github";
  href: string;
  size: number;
};
export default function SocialIcons(props: PropsType) {
  const { kind, href, size = 8 } = props;
  if (
    !href ||
    (kind === "mail" &&
      !/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(href))
  ) {
    return null;
  }

  const SocialSvg = components[kind];

  return (
    <a
      className="text-sm text-gray-500 transition hover:text-gray-600"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      <span className="sr-only">{kind}</span>
      <SocialSvg
        className={`fill-current text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 h-${size} w-${size}`}
      />
    </a>
  );
}
