"use client";

import * as z from "zod";
import { MessageSquare } from "lucide-react";

import { Heading } from "@/components/heading";
import { useForm } from "react-hook-form";

const Conversation = () => {
  const form = useForm({
    defaultValues: {
      prompt: "",
    },
  });

  return (
    <div>
      <Heading
        title="Conversation"
        description="Our most advanced conversation model."
        icon={MessageSquare}
        iconColor="text-violet-500"
        bgColor="bg-violet-500/10"
      />
    </div>
  );
};

export default Conversation;
