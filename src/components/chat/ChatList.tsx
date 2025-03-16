import { cn } from "@/lib/utils";

type ChatItem = {
  id: string;
  title: string;
  lastMessage?: string;
  timestamp: Date;
  active?: boolean;
};

// Placeholder data
const chatItems: ChatItem[] = [
  {
    id: "1",
    title: "Project Discussion",
    lastMessage: "Let's talk about the new features",
    timestamp: new Date(),
    active: true,
  },
  {
    id: "2",
    title: "Travel Plans",
    lastMessage: "I found some great destinations",
    timestamp: new Date(Date.now() - 3600000),
  },
  {
    id: "3",
    title: "Book Recommendations",
    lastMessage: "Have you read 'The Midnight Library'?",
    timestamp: new Date(Date.now() - 86400000),
  },
];

export function ChatList() {
  return (
    <div className="space-y-1">
      {chatItems.map((chat) => (
        <button
          key={chat.id}
          className={cn(
            "w-full text-left px-3 py-2 rounded-md hover:bg-secondary/80 transition-colors",
            chat.active ? "bg-secondary" : ""
          )}
        >
          <div className="flex flex-col">
            <span className="font-medium truncate">{chat.title}</span>
            {chat.lastMessage && (
              <span className="text-xs text-muted-foreground truncate">
                {chat.lastMessage}
              </span>
            )}
          </div>
        </button>
      ))}
    </div>
  );
}
