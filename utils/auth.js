import { cookies } from 'next/headers'
 
export default function verifyToken() {

  const cookieStore = cookies()
  const authenticated = cookieStore.get('auth')
    //verification logic goes here
  return  authenticated ? true: false;
}