import ECommerce from "@/components/Dashboard/E-commerce";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function Home() {
  const cookieStore = cookies();
  const session = cookieStore.get('authToken');

  if (!session) {
    console.log('no auth token, redirecting to signin',session);
    redirect('/auth/signin');
  }
    console.log('session cookie:', session);
  return (
    <DefaultLayout>
      <ECommerce />
    </DefaultLayout>
  );
}