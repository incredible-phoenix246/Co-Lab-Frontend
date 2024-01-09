import HomeLayout from "@/layout/HomeLayout";
import Banner from "@/modules/home/banner";

export default function Home() {
  return (
    <HomeLayout>
      <main className="flex min-h-screen flex-col items-center justify-between">
        <Banner />
      </main>
    </HomeLayout>
  );
}