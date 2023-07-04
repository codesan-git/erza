//app/page.tsx
import { UserButton } from "@clerk/nextjs";

import { currentUser } from '@clerk/nextjs';

// export default async function Home() {
  
//   if (!user) return <div>Not logged in</div>;
//   return <div>Hello {user?.firstName}</div>;
// }

export default async function Home() {
  const user = await currentUser();
  console.log(`user clerk`, user)
  return (
    <div className="bg-white">
      <UserButton afterSignOutUrl="/"  />
      <div className="flex items-center justify-center h-screen">
        <div className="space-x-4">
          <button
            className="px-5 py-2 font-medium text-orange-900 border border-b-4 border-r-4 border-orange-600 rounded-lg shadow-lg hover:shadow-sm hover:border-b-2 hover:border-r-2 ">Hover
            Outline Button</button>
        </div>
      </div>
    </div>
  )
}
