import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { ChatSidebar } from "./ChatSidebar";
import { ChatArea } from "./ChatArea";

export function ChatLayout() {
  return (
    <SidebarProvider>
      <div className="flex h-screen w-full overflow-hidden">
        <ChatSidebar />
        <div className="flex-1 flex flex-col min-h-0">
          <div className="flex items-center p-2 lg:hidden">
            <SidebarTrigger />
          </div>
          <ChatArea />
        </div>
      </div>
    </SidebarProvider>
  );
}