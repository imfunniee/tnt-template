"use client";

import { Button } from "@boringhand/ui/components/button";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Button onClick={() => alert("You touched me, without consent!!")}>Button</Button>
    </div>
  );
}
