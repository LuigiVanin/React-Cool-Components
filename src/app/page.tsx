import Link from "next/link";

export default function Home() {
  const items = [
    {
      text: 'Real-Time Market Data',
    },
    {
      text: 'Advanced Chart Tools'
    },
    {
      text: 'On Chain Analysis'
    },
    {
      text: 'API Access'
    },
  ]

  return (
    <main className="w-full min-h-full flex gap-5 items-center justify-center p-5 bg-background">
      <Link href="/gallery/gallery-card">
        Gallery Card Component
      </Link>

      <Link href="/gallery/price-card">
        Price Card Component
      </Link>
      
    </main>
  );
}
