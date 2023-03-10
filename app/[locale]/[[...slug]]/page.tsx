interface Props {
  locale: string;
}

/*
export function generateStaticParams({ params }: { params: any }) {
  return [{ locale: "de", slug: ["test"] }];
}
*/

export default function Page({ params }: { params: any }) {
  const { locale, slug } = params;
  return (
    <div>
      <div>hello from {locale}</div>
      <div>{slug}</div>
      <div>{Date.now().toString()}</div>
    </div>
  );
}
