import { SendHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageList } from "./MessageList";

export function ChatArea() {
  return (
    <div className="flex flex-col h-full">
      <div className="border-b p-4">
        <h2 className="text-xl font-semibold">Project Discussion</h2>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4">
        <MessageList />
      </div>
      
      <div className="border-t p-4">
        <form className="flex items-center space-x-2">
          <Input 
            placeholder="Type your message..." 
            className="flex-1"
          />
          <Button type="submit" size="icon">
            <SendHorizontal className="h-5 w-5" />
          </Button>
        </form>
      </div>
    </div>
  );
}