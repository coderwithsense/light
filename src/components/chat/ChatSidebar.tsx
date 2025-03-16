import { PlusCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
} from "@/components/ui/sidebar";
import { ChatList } from "./ChatList";

export function ChatSidebar() {
  return (
    <Sidebar className="border-r">
      <SidebarContent className="p-2">
        <div className="flex items-center justify-between mb-4 px-4 pt-2">
          <h2 className="text-lg font-semibold">Chats</h2>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <PlusCircle className="h-5 w-5" />
          </Button>
        </div>
        
        <SidebarGroup>
          <SidebarGroupContent>
            <ChatList />
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}