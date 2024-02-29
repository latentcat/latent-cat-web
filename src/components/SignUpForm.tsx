"use client"

import {useId, useState} from 'react'

import { Button } from '@/components/Button'
import clsx from "clsx";

export function SignUpForm() {
  let id = useId()

  const [email, setEmail] = useState("")

  function handleSubmit() {
    const formBody = `email=${encodeURIComponent(email)}`;

    // Change this URL to your own endpoint URL
    fetch("https://app.loops.so/api/newsletter-form/clt6hao710288bz9ocqpph3mq", {
      method: "POST",
      body: formBody,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }).then(() => {
      location.reload();
    })
  }

  return (
    <div className="relative isolate mt-8 flex items-center pr-1">
      <input
        required
        type="email"
        autoComplete="email"
        name="email"
        id={id}
        placeholder="Email address"
        className="peer w-0 flex-auto bg-transparent px-4 py-2.5 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-[0.8125rem]/6"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <Button arrow onClick={() => handleSubmit()} className={clsx(
        "",
        !email && "pointer-events-none opacity-50"
      )}>
        Get updates
      </Button>
      <div className="absolute inset-0 -z-10 rounded-lg transition peer-focus:ring-4 peer-focus:ring-sky-300/15" />
      <div className="absolute inset-0 -z-10 rounded-lg bg-white/2.5 ring-1 ring-white/15 transition peer-focus:ring-sky-300" />
    </div>
  )
}
