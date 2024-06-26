import Link from 'next/link'

import { IconLink } from '@/components/IconLink'
import { Logo } from '@/components/Logo'
import { SignUpForm } from '@/components/SignUpForm'

function BookIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 448 512" fill="currentColor" {...props}>
      <path
        d="M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/>
    </svg>
  )
}

function GitHubIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 496 512" fill="currentColor" {...props}>
      <path
        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
    </svg>
  )
}

function DiscordIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 640 512" fill="currentColor" {...props}>
      <path
        d="M524.5 69.8a1.5 1.5 0 0 0 -.8-.7A485.1 485.1 0 0 0 404.1 32a1.8 1.8 0 0 0 -1.9 .9 337.5 337.5 0 0 0 -14.9 30.6 447.8 447.8 0 0 0 -134.4 0 309.5 309.5 0 0 0 -15.1-30.6 1.9 1.9 0 0 0 -1.9-.9A483.7 483.7 0 0 0 116.1 69.1a1.7 1.7 0 0 0 -.8 .7C39.1 183.7 18.2 294.7 28.4 404.4a2 2 0 0 0 .8 1.4A487.7 487.7 0 0 0 176 479.9a1.9 1.9 0 0 0 2.1-.7A348.2 348.2 0 0 0 208.1 430.4a1.9 1.9 0 0 0 -1-2.6 321.2 321.2 0 0 1 -45.9-21.9 1.9 1.9 0 0 1 -.2-3.1c3.1-2.3 6.2-4.7 9.1-7.1a1.8 1.8 0 0 1 1.9-.3c96.2 43.9 200.4 43.9 295.5 0a1.8 1.8 0 0 1 1.9 .2c2.9 2.4 6 4.9 9.1 7.2a1.9 1.9 0 0 1 -.2 3.1 301.4 301.4 0 0 1 -45.9 21.8 1.9 1.9 0 0 0 -1 2.6 391.1 391.1 0 0 0 30 48.8 1.9 1.9 0 0 0 2.1 .7A486 486 0 0 0 610.7 405.7a1.9 1.9 0 0 0 .8-1.4C623.7 277.6 590.9 167.5 524.5 69.8zM222.5 337.6c-29 0-52.8-26.6-52.8-59.2S193.1 219.1 222.5 219.1c29.7 0 53.3 26.8 52.8 59.2C275.3 311 251.9 337.6 222.5 337.6zm195.4 0c-29 0-52.8-26.6-52.8-59.2S388.4 219.1 417.9 219.1c29.7 0 53.3 26.8 52.8 59.2C470.7 311 447.5 337.6 417.9 337.6z"/>
    </svg>
  )
}

function HuggingFaceIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 640 512" fill="currentColor" {...props}>
      <path
        d="M411.1 495.3c-17-21.6-27.1-48.9-27.1-78.5V386c-18.1 8.4-39.4 14-64 14s-45.9-5.6-64-14v30.8c0 29.6-10.1 56.9-27.1 78.5c28.3 10.8 59 16.7 91.1 16.7s62.8-5.9 91.1-16.7zM320 0C183.1 0 71.3 107.5 64.3 242.6c16.8-5.8 36.2-2 49.6 11.4L161 301.1c9.4-13.7 25.1-22.7 43-22.7c28.7 0 52 23.3 52 52v19.2c16.8 10.6 38.1 18.4 64 18.4s47.2-7.7 64-18.4V330.4c0-28.7 23.3-52 52-52c17.9 0 33.6 9 43 22.7l47.1-47.1c13.4-13.4 32.8-17.2 49.6-11.4C568.7 107.5 456.9 0 320 0zM281.6 228.8l0 0-.2-.2c-.2-.2-.4-.5-.7-.9c-.6-.8-1.6-2-2.8-3.4c-2.5-2.8-6-6.6-10.2-10.3c-8.8-7.8-18.8-14-27.7-14s-18.9 6.2-27.7 14c-4.2 3.7-7.7 7.5-10.2 10.3c-1.2 1.4-2.2 2.6-2.8 3.4c-.3 .4-.6 .7-.7 .9l-.2 .2 0 0 0 0 0 0c-2.1 2.8-5.7 3.9-8.9 2.8s-5.5-4.1-5.5-7.6c0-17.9 6.7-35.6 16.6-48.8c9.8-13 23.9-23.2 39.4-23.2s29.6 10.2 39.4 23.2c9.9 13.2 16.6 30.9 16.6 48.8c0 3.4-2.2 6.5-5.5 7.6s-6.9 0-8.9-2.8l0 0 0 0 0 0zm160 0l0 0 0 0-.2-.2c-.2-.2-.4-.5-.7-.9c-.6-.8-1.6-2-2.8-3.4c-2.5-2.8-6-6.6-10.2-10.3c-8.8-7.8-18.8-14-27.7-14s-18.9 6.2-27.7 14c-4.2 3.7-7.7 7.5-10.2 10.3c-1.2 1.4-2.2 2.6-2.8 3.4c-.3 .4-.6 .7-.7 .9l-.2 .2 0 0 0 0 0 0c-2.1 2.8-5.7 3.9-8.9 2.8s-5.5-4.1-5.5-7.6c0-17.9 6.7-35.6 16.6-48.8c9.8-13 23.9-23.2 39.4-23.2s29.6 10.2 39.4 23.2c9.9 13.2 16.6 30.9 16.6 48.8c0 3.4-2.2 6.5-5.5 7.6s-6.9 0-8.9-2.8l0 0 0 0zM68.7 299.3L120 350.6c2.6 2.6 2.6 6.8 0 9.4s-6.8 2.6-9.4 0L43.3 292.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L88 382.6c2.6 2.6 2.6 6.8 0 9.4s-6.8 2.6-9.4 0L27.3 340.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L56 414.6c2.6 2.6 2.6 6.8 0 9.4s-6.8 2.6-9.4 0L27.3 404.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l56.8 56.8C79.3 502 103.6 512 128.8 512c52.6 0 95.2-42.6 95.2-95.2V384 330.4c0-11-9-20-20-20s-20 9-20 20v19.7c0 7.1-8.6 10.7-13.7 5.7l-79-79c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6zm502.6 0c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0l-79 79c-5 5-13.7 1.5-13.7-5.7V330.4c0-11-9-20-20-20s-20 9-20 20V384v32.8c0 52.6 42.6 95.2 95.2 95.2c25.2 0 49.5-10 67.3-27.9l56.8-56.8c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L593.4 424c-2.6 2.6-6.8 2.6-9.4 0s-2.6-6.8 0-9.4l51.3-51.3c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L561.4 392c-2.6 2.6-6.8 2.6-9.4 0s-2.6-6.8 0-9.4l67.3-67.3c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L529.4 360c-2.6 2.6-6.8 2.6-9.4 0s-2.6-6.8 0-9.4l51.3-51.3z"/>
    </svg>
  )
}

function XIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" fill="currentColor" {...props}>
      <path
        d="M9.51762 6.77491L15.3459 0H13.9648L8.90409 5.88256L4.86212 0H0.200195L6.31244 8.89547L0.200195 16H1.58139L6.92562 9.78782L11.1942 16H15.8562L9.51728 6.77491H9.51762ZM7.62588 8.97384L7.00658 8.08805L2.07905 1.03974H4.20049L8.17706 6.72795L8.79636 7.61374L13.9654 15.0075H11.844L7.62588 8.97418V8.97384Z"/>
    </svg>
  )
}

function YouTubeIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 576 512" fill="currentColor" {...props}>
      <path
        d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"/>
    </svg>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 512 512"  fill="currentColor" {...props}>
      <path
        d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/>
    </svg>
  )
}

export function Intro() {
  return (
    <>
      {/*<div>*/}
      {/*  <Link href="/">*/}
      {/*    <Logo className="inline-block h-8 w-auto" />*/}
      {/*  </Link>*/}
      {/*</div>*/}
      <h1 className="mt-6 font-display text-5xl/tight font-bold text-white text-center lg:text-left">
        <span className="text-sky-300">Latent</span>{' '}Cat
      </h1>
      <p className="mt-4 text-base/6 text-gray-300  text-center lg:text-left">
        An AI R&D group.
      </p>
      <SignUpForm/>
      <div className="mt-8 flex flex-wrap justify-center gap-x-1 gap-y-3 sm:gap-x-2 lg:justify-start">
        <IconLink href="https://discord.gg/V9CNuqYfte" target="_blank" icon={DiscordIcon} className="flex-none">
          Discord
        </IconLink>
        <IconLink href="https://github.com/latentcat" target="_blank" icon={GitHubIcon} className="flex-none">
          GitHub
        </IconLink>
        <IconLink href="https://huggingface.co/latentcat" target="_blank" icon={HuggingFaceIcon} className="flex-none">
          Hugging Face
        </IconLink>
        <IconLink href="https://aigc.latentcat.com/" target="_blank" icon={BookIcon} className="flex-none">
          AI Docs
        </IconLink>
        {/*<IconLink href="https://www.youtube.com/channel/UCJ5coKDjw7Z0rrMSDajRESA" target="_blank" icon={YouTubeIcon} className="flex-none">*/}
        {/*  YouTube*/}
        {/*</IconLink>*/}
      </div>
    </>
  )
}

export function IntroFooter() {
  return (
    <p className="flex items-baseline gap-x-2 text-[0.8125rem]/6 text-gray-500">
      Brought to you by{' '}
      <IconLink href="https://twitter.com/latent_cat" target="_blank" icon={XIcon} compact>
        Latent Cat
      </IconLink>
      <IconLink href="mailto:contact@latentcat.com" icon={MailIcon} className="flex-none">
        Contact
      </IconLink>
    </p>
  )
}
