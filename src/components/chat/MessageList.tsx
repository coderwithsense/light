import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

type Message = {
  id: string;
  content: string;
  sender: string;
  timestamp: Date;
  isUser: boolean;
};

// Placeholder data
const messages: Message[] = [
  {
    id: "1",
    content: "Hi there! How can I help you today?",
    sender: "AI Assistant",
    timestamp: new Date(Date.now() - 3600000),
    isUser: false,
  },
  {
    id: "2",
    content: "I'm working on a new project and need some advice.",
    sender: "You",
    timestamp: new Date(Date.now() - 3500000),
    isUser: true,
  },
  {
    id: "3",
    content:
      "Sure, I'd be happy to help. What kind of project are you working on?",
    sender: "AI Assistant",
    timestamp: new Date(Date.now() - 3400000),
    isUser: false,
  },
  {
    id: "4",
    content:
      "It's a web application for task management. I'm trying to decide on the best database structure.",
    sender: "You",
    timestamp: new Date(Date.now() - 3300000),
    isUser: true,
  },
  {
    id: "5",
    content: "Did you check the latest update?",
    sender: "AI Assistant",
    timestamp: new Date(Date.now() - 3200000),
    isUser: false,
  },
  {
    id: "6",
    content: "Yes, I did. It looks promising.",
    sender: "You",
    timestamp: new Date(Date.now() - 3100000),
    isUser: true,
  },
  {
    id: "7",
    content: "Remember to review the documentation.",
    sender: "AI Assistant",
    timestamp: new Date(Date.now() - 3000000),
    isUser: false,
  },
  {
    id: "8",
    content: "I will go through it later today.",
    sender: "You",
    timestamp: new Date(Date.now() - 2900000),
    isUser: true,
  },
  {
    id: "9",
    content: "Let's have a follow-up meeting tomorrow.",
    sender: "AI Assistant",
    timestamp: new Date(Date.now() - 2800000),
    isUser: false,
  },
  {
    id: "10",
    content: "Sure, please send me the details.",
    sender: "You",
    timestamp: new Date(Date.now() - 2700000),
    isUser: true,
  },
  {
    id: "11",
    content: "The latest version includes several bug fixes.",
    sender: "AI Assistant",
    timestamp: new Date(Date.now() - 2600000),
    isUser: false,
  },
  {
    id: "12",
    content: "Great, I'll update my repository then.",
    sender: "You",
    timestamp: new Date(Date.now() - 2500000),
    isUser: true,
  },
  {
    id: "13",
    content: "Let me know if you face any issues.",
    sender: "AI Assistant",
    timestamp: new Date(Date.now() - 2400000),
    isUser: false,
  },
  {
    id: "14",
    content: "Will do, thanks for your help!",
    sender: "You",
    timestamp: new Date(Date.now() - 2300000),
    isUser: true,
  },
];

export function MessageList() {
  return (
    <div className="space-y-4">
      {messages.map((message) => (
        <div
          key={message.id}
          className={cn(
            "flex items-start gap-3",
            message.isUser ? "justify-end" : "justify-start"
          )}
        >
          {!message.isUser && (
            <Avatar>
              <AvatarFallback>AI</AvatarFallback>
            </Avatar>
          )}

          <div
            className={cn(
              "rounded-lg p-3 max-w-[80%]",
              message.isUser ? "bg-primary text-primary-foreground" : "bg-muted"
            )}
          >
            <p>{message.content}</p>
            <div
              className={cn(
                "text-xs mt-1",
                message.isUser
                  ? "text-primary-foreground/70"
                  : "text-muted-foreground"
              )}
            >
              {message.timestamp.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </div>
          </div>

          {message.isUser && (
            <Avatar>
              <AvatarFallback>You</AvatarFallback>
            </Avatar>
          )}
        </div>
      ))}
    </div>
  );
}
