"use client"

import { MenuProvider, useUI } from "@/context/UIContext";
import EventListener from "@/lib/eventListener";
import UI from "@/app/components/UI";;

function MenuWrapper(){
  const { displayUI } = useUI();

  if(!displayUI) return null;

  return (
    <UI />
  )

}

export default function Home() {
  return (
    <MenuProvider>
      <EventListener>
        <MenuWrapper />
      </EventListener>
    </MenuProvider>
  );
}
