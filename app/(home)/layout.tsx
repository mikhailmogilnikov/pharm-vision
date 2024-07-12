import { getCookie } from 'cookies-next';
import { cookies } from 'next/headers';
import { permanentRedirect } from 'next/navigation';

export default function HomeLayout() {
  const token = getCookie('token', { cookies });

  token ? permanentRedirect('/promotion/nurofen') : permanentRedirect('/login');
}
